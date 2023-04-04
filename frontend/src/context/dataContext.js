import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const DataContext = createContext();

const ContextApi = ({ children }) => {
  const [stores, setStores] = useState([]);
  const [products, setProducts] = useState([]);
  const [purchase, setPurchase] = useState([]);
  const [sales, setSales] = useState([]);

  //   <-------------Products Start-------------->

  // get all products
  const get_products = () => {
    try {
      axios
        .get("http://localhost:5050/api/products")
        .then((res) => setProducts(res.data))
        .catch((error) => console.log(error));
    } catch (error) {
      console.log("Error fetching data", error);
    }
  };

  // get single products details
  const product_details = (_id) => {
    try {
      axios
        .get(`http://localhost:5050/api/products/${_id}`)
        .then((res) => get_products(res.data))
        .catch((error) => console.log(error));
    } catch (error) {
      console.log("Error fetching data", error);
    }
  };

  // add Products
  const addProduct = (newProduct) => {
    console.log("add");
    try {
      axios
        .post("http://localhost:5050/api/products", newProduct)
        .then((res) => get_products(res))
        .catch((error) => console.log(error));
    } catch (error) {
      console.log(error);
    }
  };

  // delete product
  const deleteProduct = (_id) => {
    console.log(_id);
    try {
      axios
        .delete(`http://localhost:5050/api/products/${_id}`)
        .then((res) => get_products(res))
        .catch((error) => console.log(error));
    } catch (error) {
      console.log(error);
    }
  };

  // updateProduct
  const updateProduct = (id, newProduct) => {
    console.log("updateProduct", newProduct);
    try {
      axios
        .put(`http://localhost:5050/api/products/${id}`, newProduct)
        .then((res) => get_products(res))
        .catch((error) => console.log(error));
    } catch (error) {
      console.log(error);
    }
  };

  // <----------------Products End--------------------->

  // <----------------Purchase Details Start----------->

  // add Purchase Details on products
  const AddPurchaseDetails = (id, newPurchaseDetails) => {
    console.log(id, newPurchaseDetails);
    try {
      axios
        .post(`http://localhost:5050/api/purchase/${id}`, newPurchaseDetails)
        .then((res) => get_purchase(res))
        .catch((error) => console.log(error));
    } catch (error) {
      console.log(error);
    }
  };

  // get all purchase details
  const get_purchase = () => {
    try {
      axios
        .get("http://localhost:5050/api/purchase")
        .then((res) => setPurchase(res.data))
        .catch((error) => console.log(error));
    } catch (error) {
      console.log("Error fetching data", error);
    }
  };

  const delete_purchase = (_id) => {
    try {
      axios
        .delete(`http://localhost:5050/api/purchase/${_id}`)
        .then((res) => get_purchase(res))
        .catch((error) => console.log(error));
    } catch (error) {
      console.log(error);
    }
  };

  // <----------------Purchase Details End----------->

  //  <---------------Stores Start--------------------->

  // get all stores
  const get_stores = () => {
    try {
      axios
        .get("http://localhost:5050/api/stores")
        .then((res) => setStores(res.data))
        .catch((error) => console.log(error));
    } catch (error) {
      console.log("Error fetching data", error);
    }
  };

  // add Store
  const addStore = (newStore) => {
    try {
      axios
        .post("http://localhost:5050/api/stores", newStore)
        .then((res) => get_stores(res))
        .catch((res) => console.log(res));
    } catch (error) {
      console.log(error);
    }
  };

  // update store
  const updateStore = (id, newStore) => {
    try {
      axios
        .put(`http://localhost:5050/api/stores/${id}`, newStore)
        .then((res) => get_stores(res))
        .catch((res) => console.log(res));
    } catch (error) {
      console.log(error);
    }
  };

  // delete stores
  const deleteStore = (_id) => {
    console.log(_id);
    try {
      axios
        .delete(`http://localhost:5050/api/stores/${_id}`)
        .then((res) => get_stores(res.data))
        .catch((error) => console.log(error));
    } catch (error) {
      console.log("Error fetching data", error);
    }
  };

  // <---------------------Stores End---------------------->

  // <---------------------Sales Start--------------------->

  const get_sales = () => {};

  const add_Sales_Details = () => {};

  // <---------------------Sales End---------------------->

  useEffect(() => {
    get_products();
    get_purchase();
    get_stores();
    get_sales();
  }, []);

  return (
    <DataContext.Provider
      value={{
        addProduct,
        deleteProduct,
        updateProduct,
        products,
        product_details,
        AddPurchaseDetails,
        delete_purchase,
        purchase,
        add_Sales_Details,
        sales,
        addStore,
        updateStore,
        deleteStore,
        stores,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);

export default ContextApi;
