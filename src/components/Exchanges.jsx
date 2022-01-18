import React from 'react';
import millify from 'millify';
import { Collapse, Row, Col, Typography, Avatar } from 'antd';
import HTMLReactParser from 'html-react-parser';

import { useGetExchangesQuery } from '../services/cryptoApi';


const { Text } = Typography;
const { Panel } = Collapse;

const Exchanges = () => {
    const { data, isFetching } = useGetExchangesQuery();
    const exchangesList = data?.data?.exchanges;
    console.log(exchangesList);

    if (isFetching)
        return (
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", color: "white", height: "100vh" }}><h1 style={{ color: "white" }}>Loading ...</h1></div>
        );

    return (
        <>
            <Row style={{ color: "#F8485E", fontWeight: "600", padding: "10px ", fontSize: "1.4em", paddingRight: "10px", marginBottom: "2em", borderRadius: "6px", backgroundColor: "#172774", marginBottom: "1.5em", marginTop: "0.5em", alignContent: "center", justifyContent: "space-around", display: "flex", height: "10vh" }}>
                <Col span={6} style={{ maxWidth: "40%" }}>Exchanges</Col>
                <Col span={6} >Volume</Col>
                <Col span={6}>Markets</Col>
                <Col span={6}>Change</Col>
            </Row>
            <Row >
                {/*exchangesList.map((exchange) => (
                    <Col span={24} className="hcol">
                        <Collapse>
                            <Panel
                                key={exchange.id}
                                showArrow={false}
                                header={(
                                    <Row key={exchange.id}>
                                        <Col span={6}>
                                            <Text><strong>{exchange.rank}.</strong></Text>
                                            <Avatar className="exchange-image" src={exchange.iconUrl} />
                                            <Text><strong>{exchange.name}</strong></Text>
                                        </Col>
                                        <Col span={6}>${millify(exchange.volume)}</Col>
                                        <Col span={6}>{millify(exchange.numberOfMarkets)}</Col>
                                        <Col span={6}>{millify(exchange.marketShare)}%</Col>
                                    </Row>
                                )}
                            >
                                {HTMLReactParser(exchange.description || '')}
                            </Panel>
                        </Collapse>
                    </Col>
                                ))*/}
            </Row>
        </>
    );
};

export default Exchanges;