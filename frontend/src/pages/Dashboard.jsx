import React from "react";
import { useData } from "../hooks/useData";
import Charts from "../common/Charts";
import Cards from "../common/Cards";
const Dashboard = () => {
  const { products, stores, sales, purchase } = useData();

  // total purchase
  const totalPurchasePrice = purchase.reduce(
    (acc, curr) => acc + curr.price,
    0
  );

  // total sales
  const totalSalePrice = sales.reduce((acc, curr) => acc + curr.price, 0);

  // filter out of stock products
  const filteredProduct = products.filter((item) => item.stock === 0);

  // calculating revenue and loss
  const Revenue = totalSalePrice - totalPurchasePrice;

  return (
    <div className=" p-4 sm:ml-64">
      <div className="mt-20 p-4   md:ml-7">
        <div className="3xl:grid-cols-6   mt-3 mb-6  grid h-52 w-full grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3">
          <Cards name={"Products"} value={products.length} />
          <Cards name={"Stores"} value={stores.length} />
          <Cards name={"Out of Stock"} value={filteredProduct.length} />
          <Cards name={"Purchase"} value={totalPurchasePrice} />
          <Cards name={"Sales"} value={totalSalePrice} />
          <Cards name={Revenue < 0 ? "Loss" : "Revenue"} value={Revenue} />

          <div className=" col-span-full flex  items-center justify-center rounded-2xl bg-white py-4 ">
            <Charts />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
