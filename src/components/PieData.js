import React from 'react';
import {Doughnut} from 'react-chartjs-2';

export default function PieData({ infected, recovered, deaths}) {

    console.log(infected)
    console.log(recovered)
    console.log(deaths)
    const data = {
        labels: [
            'Infected',
            'Recovered',
            'Deaths'
        ],
        datasets: [{
            data: [infected, recovered, deaths],
            backgroundColor: [
            'rgb(100, 208, 241)',
            'rgb(100, 253, 188)',
            'rgb(250, 107, 145)'
            ],
            hoverBackgroundColor: [
            'rgb(100, 208, 241)',
            'rgb(100, 253, 188)',
            'rgb(250, 107, 145)'
            ]
        }]
    };

    return (
        <Doughnut data={data}
        width={200}
        height={300}
        options={{ maintainAspectRatio: false }}
        />
    )
}