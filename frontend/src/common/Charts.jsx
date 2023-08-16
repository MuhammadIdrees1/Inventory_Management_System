import React from "react";
import Chart from "react-apexcharts";

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
      categories: ["Price", "purchase"],
    },
  };

  const series = [
    {
      name: "purchase",
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
