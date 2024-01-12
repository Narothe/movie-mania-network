import React from 'react';
import BarChart from "./BarChart";

const ChartComponent = ({ last7DaysData }) => {
    console.log('ChartComponent - last7DaysData', last7DaysData)
    const chart = last7DaysData || []; // Ensure chart is initialized to an empty array if undefined

    const userData = {
        labels: chart.map((data) => data.date),
        datasets: [{
            label: "Liczba wizyt w ciągu ostatnich 7 dni",
            data: chart.map((data) => data.count),
            backgroundColor: '#E0A96D',
        }]
    };

    return (
        <div>
            <BarChart chartData={userData} />
        </div>
    );
};

export default ChartComponent;
