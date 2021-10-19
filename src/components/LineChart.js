import React from 'react';
import { Line } from 'react-chartjs-2';
import { Col, Row, Typography } from 'antd';
import { createNextState } from '@reduxjs/toolkit';

const { Title } = Typography;


const LineChart = ({ coinHistory, currentPrice, coinName }) => {
    const coinPrice = [];
    const coinTimestamp = [];

    for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
        coinPrice.push(coinHistory?.data?.history[i].price);
    }

    for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
        coinTimestamp.push(new Date(coinHistory?.data?.history[i].timestamp).toLocaleDateString());
    }


    const data = {
        labels: coinTimestamp,
        datasets: [
            {
                label: 'Price In USD',
                data: coinPrice,
                fill: false,
                backgroundColor: "#091353",

                borderColor: '#8E05C2',
            },
        ],
    };

    const options = {
        scales: {

            y: {
                ticks: {
                    beginAtZero: true,
                    callback: function (params) {
                        return "$ " + params;

                    },

                }
            }
        },
    };

    return (
        <div className="chart" >
            <Row className="chart-header" style={{

            }}>
                <p className="chart-title">{coinName} Price Chart </p>
                <Col className="price-container" style={{ justifyContent: "center", display: "flex", alignItems: "center" }}>
                    <Title level={5} className="price-change" style={{}}>Change: {coinHistory?.data?.change}%</Title>
                    <Title level={5} className="price-change" style={{ marginTop: "0px" }}>Current {coinName} Price: $ {currentPrice}</Title>
                </Col>
            </Row>

            <Line className="mychart" style={{}} data={data} options={options} />
        </div>
    );
};

export default LineChart;
