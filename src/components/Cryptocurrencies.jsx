import React, { useState, useEffect } from 'react'
import { useGetCryptosQuery } from '../services/cryptoApi';
import millify from 'millify';
import { Link } from 'react-router-dom';
import { Row, Card, Col, Input } from 'antd';
const Cryptocurrencies = ({ simplified }) => {
    const count = simplified ? 10 : 100;
    const { data: cryptosList, isFetching } = useGetCryptosQuery(count);


    const [cryptos, setCryptos] = useState(cryptosList?.data?.coins);
    const [search, setSearch] = useState('');
    useEffect(() => {

        const filterData = cryptosList?.data?.coins.filter((coin) => coin.name.toLowerCase().includes(search.toLowerCase()));
        setCryptos(filterData);
    }, [cryptosList, search])

    if (isFetching)
        return (
            <div style={{ display: "flex", justifyContent: "center", color: "white", alignItems: "center", height: "100vh" }}><h1 style={{ color: "white" }}>Loading ...</h1></div>
        );
    return (
        <>{!simplified ?
            <div className='coin-app'>
                <div className='coin-search'>
                    <h1 className='coin-text' >Search a currency</h1>
                    <form>
                        <input
                            className='coin-input'
                            type='text'
                            onChange={(e) => { setSearch(e.target.value) }}
                            placeholder='Search'

                        />
                    </form>
                </div>
            </div> : null}
            <div style={{}}>
                <Row gutter={[32, 32]} className="crypto-card-container">
                    {cryptos?.map((currency) => (
                        <Col xs={24} sm={12} lg={6} className="crypto-card" key={currency.id}>
                            <Link to={`/crypto/${currency.id}`}>
                                <Card
                                    headStyle={{ fontWeight: "bolder", fontSize: "1.3rem" }}
                                    title={`${currency.rank}. ${currency.name}`}
                                    style={{ fontWeight: "bold", borderRadius: "6px" }}
                                    extra={<img className="crypto-image" src={currency.iconUrl} />}
                                    hoverable
                                >
                                    <p>Price : $ {millify(currency.price)}</p>
                                    <p>Market Cap : $ {millify(currency.marketCap)} </p>


                                    {millify(currency.change) < 0 ? (
                                        <p style={{ color: "red", fontWeight: "600" }}> Change: {millify(currency.change)}%</p>
                                    ) : (
                                        <p style={{ color: "#7FC8A9" }}>Change  : {millify(currency.change)} % </p>
                                    )}
                                </Card>
                            </Link>
                        </Col>
                    ))

                    }
                </Row></div>
        </>
    )
}

export default Cryptocurrencies
