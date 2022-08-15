import React from "react";
import { Line } from "react-chartjs-2";
import "chartjs-plugin-streaming";

const createReactClass = require("create-react-class");

const jsonData = require("./data.json");
let dataCounter = 0;

function getNextDataPoint() {
const length = jsonData.length;
if(dataCounter > length - 1){
    dataCounter = -1;
}
dataCounter++;
const dataPoint = jsonData[dataCounter].value;
    console.log(dataPoint);
return dataPoint;
}

const data = {
    datasets: [
        {
            label: "Dataset 1",

            fill: false,
            lineTension: 0.4,
            backgroundColor: "#3682f4",
            borderColor: "#EA269C",
            borderJoinStyle: "miter",
            pointRadius: 0,
            showLine: true,
            data: []
        }
    ]
};

const options = {
    scales: {
        xAxes: [
            {
                gridLines: {
                    color: "rgba(0, 0, 0, 0)",
                },
                type: "realtime",
                realtime: {
                    onRefresh: function () {
                        data.datasets[0].data.push({
                            x: Date.now(),
                            y: getNextDataPoint()
                        });
                    },
                    delay: 150,
                    refresh: 150
                }
            }
        ],
        yAxes: [
            {
                gridLines: {
                    color: "#9EAEE140",
                },
                scaleLabel: {
                    display: true,
                    fontFamily: "Arial",
                    labelString: "Moment",
                    fontSize: 20,
                    fontColor: "#6c757d"
                },
                ticks: {
                    max: 830,
                    min: 790
                }
            }
        ]
    }
};



export default createReactClass({
    displayName: "LineExample",
    render() {
        return (
            <div>
                <Line data={data} options={options} />
            </div>
        );
    }
});
