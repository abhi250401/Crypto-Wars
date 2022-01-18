import React from 'react'
import millify from 'millify';
import { Typography, Row, Col, Statistic } from 'antd';
import { Link } from 'react-router-dom';
import { useGetCryptosQuery } from '../services/cryptoApi';
import Cryptocurrencies from './Cryptocurrencies';
import { News } from '.';
const Homepage = () => {
    const { data, isFetching } = useGetCryptosQuery(10);
    console.log(data);
    const globalStats = data?.data?.stats;
    console.log(globalStats);
    if (!globalStats)
        return (
            <div style={{ display: "flex", justifyContent: "center", color: "white", alignItems: "center", height: "100vh" }}><h1 style={{ color: "white" }}>Loading ...</h1></div>
        );
    const { Title } = Typography;
    return (
        <div  >
            <div className="sts" style={{ backgroundColor: "#E5DCC3", borderRadius: "6px", marginTop: "0.2em", margin: "auto" }}>
                <Title level={2} className="heading" style={{ display: "flex", justifyContent: "center", paddingTop: "1em", paddingLeft: "10px", paddingRight: "10px" }}>Global Crypto-currency Stats</Title>
                <div style={{ paddingTop: "1em", paddingBottom: "2em", display: "flex", alignItems: "center", justifyContent: "center" }}>

                    <Row >
                        <Col span={12} style={{ marginBottom: "1rem", paddingRight: "20px", paddingLeft: "20px" }}><Statistic title="Total Cryptocurrencies" valueStyle={{ fontWeight: "500", color: "#012443" }} value={globalStats.total} /></Col>
                        <Col span={12} style={{ marginBottom: "1rem", paddingRight: "20px", paddingLeft: "20px" }}><Statistic title="Total Exchanges" valueStyle={{ fontWeight: "500", color: "#012443" }} value={globalStats.totalExchanges} /></Col>
                        <Col span={12} style={{ marginBottom: "1rem", paddingRight: "20px", paddingLeft: "20px" }}><Statistic title="Total Market Cap:" valueStyle={{ fontWeight: "500", color: "#012443" }} value={millify(globalStats.totalMarketCap)} /></Col>
                        <Col span={12} style={{ marginBottom: "1rem", paddingRight: "20px", paddingLeft: "20px" }}><Statistic title="Total 24h Volume" valueStyle={{ fontWeight: "550", color: "#012443" }} value={millify(globalStats.total24hVolume)} /></Col>
                        <Col span={12} style={{ marginBottom: "1rem", paddingRight: "20px", paddingLeft: "20px" }}><Statistic title="Total Markets" valueStyle={{ fontWeight: "590", color: "#012443" }} value={millify(globalStats.totalMarkets)} /></Col>
                    </Row></div>
            </div>
            <div className="home-heading-container" style={{ color: "white", borderRadius: "6px", backgroundColor: "#172774", marginBottom: "3em", marginTop: "3em", justifyContent: "space-between", alignItems: "center", alignContent: "center", verticalAlign: "middle", display: "flex", height: "12vh" }}>
                <Title level={2} className="home-title" style={{ marginLeft: "0.5em", marginBottom: "0", color: "#F8485E", padding: "20px" }}>Top 10 Cryptos In The World</Title>
                <Title level={3} className="show-more" style={{ marginRight: "0.5em", marginBottom: "0", }}><Link to="/cryptocurrencies" style={{ color: "#EEEEEE" }}>Show more</Link></Title>
            </div>

            <Cryptocurrencies simplified />
            <div className="home-heading-container" style={{ color: "white", borderRadius: "6px", backgroundColor: "#172774", marginBottom: "3em", marginTop: "3em", justifyContent: "space-between", alignItems: "center", alignContent: "center", verticalAlign: "middle", display: "flex", height: "12vh" }}>
                <Title level={2} className="home-title" style={{ marginLeft: "0.5em", marginBottom: "0", color: "#F8485E", padding: "15px" }}>Latest Crypto News</Title>
                <Title level={3} className="show-more" style={{ marginRight: "0.5em", marginBottom: "0", color: "#EEEEEE", padding: "15px", marginTop: "2px" }} ><Link to="/news" style={{ marginRight: "0.5em", marginBottom: "0", color: "#EEEEEE", padding: "15px", marginTop: "2px" }}>Show more</Link></Title>
            </div>
            <News simplified />
        </div >
    )
}

export default Homepage;
