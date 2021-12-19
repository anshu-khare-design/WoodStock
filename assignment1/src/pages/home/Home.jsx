import Chart from "../../components/chart/Chart";
import FeaturedInfo, { FeaturedInfoEth1 } from "../../components/featuredInfo/FeaturedInfo";
import "./home.css";
import { priceeth } from "../../dummyData";
import { pricemonthlyeth } from "../../dummyData";
import { monthlytran } from "../../dummyData";
import { ethtranperday } from "../../dummyData";
import { ethgasfee } from "../../dummyData";

import React from 'react';


export default function Home() {

    for (var i = 0; i < priceeth.length ; i++)
    {
    //priceeth[i].Date = Date.parse(priceeth[i].Date);
        priceeth[i].Price = parseFloat(priceeth[i].Price);
    }

    priceeth.sort(function (a, b) { return Date.parse(a.Date) - Date.parse(b.Date) })

    for (var i = 0; i < pricemonthlyeth.length; i++) {
        //priceeth[i].Date = Date.parse(pricemonthlyeth[i].Date);
        pricemonthlyeth[i].Price = parseFloat(pricemonthlyeth[i].Price);
    }

    pricemonthlyeth.sort(function (a, b) { return Date.parse(a.Date) - Date.parse(b.Date) })

    for (var i = 0; i <monthlytran.length; i++) {
        //priceeth[i].Date = Date.parse(pricemonthlyeth[i].Date);
        monthlytran[i]["No of transactions in millions"] = parseFloat(monthlytran[i]["No of transactions in millions"]);
    }

    monthlytran.sort(function (a, b) { return Date.parse(a.Date) - Date.parse(b.Date) })

    ethgasfee.sort(function (a, b) { return Date.parse(a.Date) - Date.parse(b.Date) })

        return (
            <div className="home">
                <FeaturedInfo />
                <FeaturedInfoEth1 />
                <Chart data={priceeth} title="Ethereum Price Yearly variation" grid dataKey="Price" />
                <Chart data={pricemonthlyeth} title="Ethereum Price Monthly variation (2021)" grid dataKey="Price" />
                <Chart data={monthlytran} title="Number of transactions in millions monthly (2021)" grid dataKey="No of transactions in millions" />
                <Chart data={ethtranperday} title="Number of transactions per day monthly variation" grid dataKey="Number of Ethereum transactions per day (in 1,000s)" />
                <Chart data={ethgasfee} title="Gas fees monthly variation" grid dataKey="Gasfee (in gwei)" />
            </div>
        );
}
