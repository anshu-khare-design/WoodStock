import Chart from "../../components/chart/Chart";
import { FeaturedInfoSol } from "../../components/featuredInfo/FeaturedInfo";
import "./solana.css";
import { pricesolana } from "../../dummyData";
import { monthlypricesolana } from "../../dummyData";

export default function Solana() {

    for (var i = 0; i < pricesolana.length; i++) {
        //pricesolana[i].Date = Date.parse(pricesolana[i].Date);
        pricesolana[i].Price = parseFloat(pricesolana[i].Price);
    }

    pricesolana.sort(function (a, b) { return Date.parse(a.Date) - Date.parse(b.Date) })

    for (var i = 0; i < monthlypricesolana.length; i++) {
        //pricesolana[i].Date = Date.parse(monthlypricesolana[i].Date);
        monthlypricesolana[i].Price = parseFloat(monthlypricesolana[i].Price);
    }

    monthlypricesolana.sort(function (a, b) { return Date.parse(a.Date) - Date.parse(b.Date) })

    return (
        <div className="solana">
            <FeaturedInfoSol />
            <Chart data={pricesolana} title="Solana Price Yearly variation" grid dataKey="Price" />
            <Chart data={monthlypricesolana} title="Solana Price Monthly variation (2021)" grid dataKey="Price" />
            <div className="homeWidgets">
            </div>
        </div>
    );

    //onst rootElement = document.getElementById('root');
    //eactDOM.render(<App />, rootElement);
}
