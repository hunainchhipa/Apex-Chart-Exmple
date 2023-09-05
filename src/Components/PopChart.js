import React, { useState } from "react";
import Chart from "react-apexcharts";

function PopChart(props) {
  const [options, setOptions] = useState({
    chart: {
      background: "#f4f4f4",
      foreColor: "#333",
    },
    xaxis: {
      categories: [
        "New York",
        "Los Angeles",
        "Chicago",
        "Houston",
        "Phoenix",
        "Philadelphia",
        "San Antonio",
        "San Diego",
        "Dallas",
        "San Jose",
      ],
    },
    plotOptions: {
      bar: {
        horizontal: false,
      },
    },
    fill: {
      colors: ["#f44336"],
    },
    dataLabels: {
      enabled: false,
    },
    title: {
      text: "Largest US cities By Population",
      align: "center",
      margin: 20,
      offsetY: 20,
      style: {
        fontSize: "25px",
      },
    },
  });
  const [series, setSeries] = useState([
    {
      name: "Population",
      data: [
        8804190, 3898747, 2697612, 2320268, 1660272, 1584064, 1532233, 1425976,
        1345047, 1030119,
      ],
    },
  ]);

  return (
    <>
      <Chart
        options={options}
        series={series}
        type="bar"
        height="500"
        width="100%"
      />
      <button
        className="horizontalBtn"
        onClick={() => {
          setOptions({
            ...options,
            plotOptions: {
              ...options.plotOptions,
              bar: {
                ...options.plotOptions.bar,
                horizontal: !options.plotOptions.bar.horizontal,
              },
            },
          });
        }}
      >
        Horizontal / Vertical
      </button>
    </>
  );
}

export default PopChart;
