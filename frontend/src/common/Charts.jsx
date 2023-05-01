// import { useState } from "react";
// import Chart from "react-apexcharts";
// import { useData } from "../hooks/useData";
import React from "react";
import Chart from "react-apexcharts";

// const Charts = () => {
//   const { products } = useData();
//   console.log([products[1].price]);
//   // const [data, setData] = useState(products);
//   const [options, setOptions] = useState({
//     chart: {
//       id: "apexchart-example",
//     },
//     xaxis: {
//       categories: ["jan", "feb", 1993, 1994, 1995, 1996, 1997, 1998, 1999],
//     },

//     toolbar: {
//       show: false,
//       autoSelected: "pan",
//     },
//   });
//   const [series, setSeries] = useState([
//     {
//       name: "sales",
//       data: [products[1].price],
//     },
//     {
//       name: "purchase",
//       data: [30, 40, 35, 50, 49, 60, 70, 91, 125],
//     },
//   ]);
//   return (
//     <Chart
//       options={options}
//       series={series}
//       type="bar"
//       width={500}
//       height={300}
//     />
//   );
// };

// const Charts = () => {
//   const chartData = [
//     { x: "January", revenue: 1000, profit: 500, loss: 200 },
//     { x: "February", revenue: 1500, profit: 600, loss: 300 },
//     { x: "March", revenue: 2000, profit: 800, loss: 400 },
//     { x: "April", revenue: 6000, profit: 800, loss: 400 },
//     // and so on...
//   ];

//   const chartOptions = {
//     chart: {
//       type: "area",
//       height: 350,
//     },
//     title: {
//       text: "Sales, Purchases, Revenue, and Loss",
//       align: "center",
//     },
//     xaxis: {
//       categories: chartData.map((data) => data.x),
//       title: {
//         text: "Month",
//       },
//     },
//     yaxis: {
//       title: {
//         text: "Amount ($)",
//       },
//     },
//   };

//   return (
//     <Chart
//       options={chartOptions}
//       series={[
//         { name: "Revenue", data: chartData.map((data) => data.revenue) },
//         { name: "Purchases", data: chartData.map((data) => data.purchase) },
//         { name: "Profit", data: chartData.map((data) => data.profit) },
//         { name: "Loss", data: chartData.map((data) => data.loss) },
//       ]}
//       type="area"
//       height={350}
//       width={800}
//     />
//   );
// };
const Charts = () => {
  const data = [
    {
      _id: "644ba3a725987871138deea8",
      product: "644ba34e25987871138dee86",
      userId: "644ba31b25987871138dee71",
      productName: "vbvb",
      store: "644ba35f25987871138dee8d",
      storeName: "nbnhb",
      date: "2023-04-28T00:00:00.000Z",
      price: 3000,
      quantity: 400,
      createdAt: "2023-04-28T10:44:55.096Z",
      updatedAt: "2023-04-28T10:44:55.096Z",
      __v: 0,
    },
    {
      _id: "644ba44325987871138deec0",
      product: "644ba34e25987871138dee86",
      userId: "644ba31b25987871138dee71",
      productName: "vbvb",
      store: "644ba35f25987871138dee8d",
      storeName: "nbnhb",
      date: "2023-04-28T00:00:00.000Z",
      price: 5000,
      quantity: 50,
      createdAt: "2023-04-28T10:47:31.558Z",
      updatedAt: "2023-04-28T10:47:31.558Z",
      __v: 0,
    },
    {
      _id: "644bc746ced6073f0ddda26e",
      product: "644baf1b25987871138defae",
      userId: "644ba31b25987871138dee71",
      productName: "bcbc",
      store: "644bc711ced6073f0ddda262",
      storeName: "ete",
      date: "2023-04-28T00:00:00.000Z",
      price: 400,
      quantity: 500,
      createdAt: "2023-04-28T13:16:54.271Z",
      updatedAt: "2023-04-28T13:16:54.271Z",
      __v: 0,
    },
  ];

  const prices = data.map((item) => item.price);

  const options = {
    chart: {
      id: "basic-bar",
    },
    xaxis: {
      categories: ["Price"],
    },
  };

  const series = [
    {
      name: "price",
      data: prices,
    },
  ];

  return (
    <div>
      <Chart options={options} series={series} type="bar" width={500} />
    </div>
  );
};

export default Charts;
