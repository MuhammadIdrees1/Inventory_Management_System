import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

import { get_products } from "../api/Products";
import { get_stores } from "../api/Stores";
import { get_purchase } from "../api/Purchase";
import { get_sales } from "../api/Sales";

const DataContext = createContext();

const ContextApi = ({ children }) => {
  const [stores, setStores] = useState([]);
  const [products, setProducts] = useState([]);
  const [purchase, setPurchase] = useState([]);
  const [sales, setSales] = useState([]);
  const [userId, setUserId] = useState("");
  const [userInfo, setUserInfo] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filteredSales, setFilteredSales] = useState([]);
  const [filteredPurchases, setFilteredPurchases] = useState([]);
  const [filteredStores, setFilteredStores] = useState([]);
  console.log(userId);
  useEffect(() => {
    get_products(userId)
      .then((res) => {
        console.log("data", res);
        setProducts(res);
        setFilteredProducts(res);
      })
      .catch((error) => console.log(error));

    get_stores(userId)
      .then((res) => {
        setStores(res);
        setFilteredStores(res);
      })
      .catch((error) => console.log(error));

    get_purchase(userId)
      .then((res) => {
        setPurchase(res);
        setFilteredPurchases(res);
      })
      .catch((error) => console.log(error));

    get_sales(userId)
      .then((res) => {
        setSales(res);
        setFilteredSales(res);
      })
      .catch((error) => console.log(error));
  }, [userId]);

  // varify Current User
  const varifyUser = () => {
    axios
      .post("http://localhost:5050/api/auth", {}, { withCredentials: true })
      .then((response) => {
        console.log("context", response.data);
        const data = response.data;
        if (!data.status) {
          // toast(`User id Not FovarifyUserund`, { theme: 'dark' })
          console.log("user not found");
        } else {
          setUserId(data.uId);
          setUserInfo(data);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    varifyUser();
  }, []);

  useEffect(() => {
    get_products();
    get_purchase();
    get_stores();
    get_sales();
  }, [userId]);

  return (
    <DataContext.Provider
      value={{
        userId,
        userInfo,
        sales,
        purchase,
        products,
        setProducts,
        setPurchase,
        setSales,
        stores,
        setStores,
        filteredProducts,
        filteredPurchases,
        filteredSales,
        filteredStores,
        setFilteredProducts,
        setFilteredPurchases,
        setFilteredSales,
        setFilteredStores,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export { DataContext };
export default ContextApi;
