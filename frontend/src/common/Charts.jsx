import React from "react";
import Chart from "react-apexcharts";
import { useData } from "../hooks/useData";
const Charts = () => {
  const { sales, products } = useData();

  const salesData = sales.map((item) => item.price);

  const purchaseData = products.map((item) => item.price);

  // Sample data for sales and purchase
  // const salesData = [30, 40, 35, 50, 49, 60, 70, 91, 125];
  // const purchaseData = [25, 35, 30, 45, 40, 55, 65, 80, 110];

  const series = [
    {
      name: "Sales",
      data: salesData,
    },
    {
      name: "Purchase",
      data: purchaseData,
    },
  ];

  const options = {
    chart: {
      height: 350,
      type: "line",
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
      ],
    },
    colors: ["#008FFB", "#00E396"], // Customizing colors for series
    legend: {
      position: "top",
    },
  };

  return (
    <div>
      <Chart
        options={options}
        series={series}
        type="bar"
        height={350}
        width={700}
      />
    </div>
  );
};

export default Charts;
