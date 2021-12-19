import "./featuredInfo.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import React, { Component, useEffect, useState, useCallback } from 'react'
import useForceUpdate from 'use-force-update';

const axios = require('axios');

const FeaturedInfo = () => {

    const [data, setData] = useState([]);

    React.useEffect(
        () => {
            const timer = setInterval(() => {
                //  console.log('This will run after 1 second!')

                axios
                    .get('https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD,EUR,CNY,JPY,GBP')
                    .then((res) => {
                        setData(res.data.USD)
                    })
                    .catch((err) => console.log(err));
            }, 1000)
            return () => clearInterval(timer);
        },
        []
    );


        return (
                <div className="featured">
                    <div className="featuredItem">
                        <span className="featuredTitle">Average Price / ether (Updated real time)</span>
                    <div className="featuredMoneyContainer">
                        <span className="featuredMoney" > ${data}</span>
                            <span className="featuredMoneyRate">
                                663.3% <ArrowUpward className="featuredIcon" />
                            </span>
                            <span className="featuredSub">Compared to last year</span>

                            <span className="featuredMoneyRate">
                                -12.67% <ArrowDownward className="featuredIcon.negative" />
                            </span>
                            <span className="featuredSub">Compared to last month</span>
                        </div>
                    </div>
                    <div className="featuredItem">
                        <span className="featuredTitle">Number of transactions per day in millions</span>
                        <div className="featuredMoneyContainer">
                            <span className="featuredMoney">1.251</span>
                            <span className="featuredMoneyRate">
                                332.5% <ArrowUpward className="featuredIcon" />
                            </span>
                        </div>
                        <span className="featuredSub">Compared to last year</span>
                    </div>
                </div>
        );

    
        
}

export function FeaturedInfoEth1() {

    return (
        <div className="featured">
            <div className="featuredItem">
                <span className="featuredTitle">Number of transactions per second</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">13</span>
                </div>
            </div>

            <div className="featuredItem">
                <span className="featuredTitle">Transaction time in minutes</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">5</span>
                </div>
            </div>

            <div className="featuredItem">
                <span className="featuredTitle">Number of nodes</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">11,259</span>
                </div>
            </div>
            </div>
    );
}

export function FeaturedInfoSol() {

    const [data, setData] = useState([]);

    React.useEffect(
        () => {
            const timer = setInterval(() => {
                //  console.log('This will run after 1 second!')

                axios
                    .get('https://min-api.cryptocompare.com/data/price?fsym=SOL&tsyms=USD,EUR,CNY,JPY,GBP')
                    .then((res) => {
                        setData(res.data.USD)
                    })
                    .catch((err) => console.log(err));
            }, 2000)
            return () => clearInterval(timer);
        },
        []
    );

    return (
        <div className="featured">
            <div className="featuredItem">
                <span className="featuredTitle">Average Price / SOL (Updated Real Time)</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">${data}</span>
                    <span className="featuredMoneyRate">
                        9480.99% <ArrowUpward className="featuredIcon" />
                    </span>
                    <span className="featuredSub">Compared to last year</span>

                    <span className="featuredMoneyRate">
                        -31.86% <ArrowDownward className="featuredIcon.negative" />
                    </span>
                    <span className="featuredSub">Compared to last month</span>
                </div>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Total number of transactions</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">39.6 B</span>
                </div>
            </div>

            <div className="featuredItem">
                <span className="featuredTitle">Number of transactions per second</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">50000</span>
                </div>
            </div>


        </div>
    );
}

export default FeaturedInfo;



