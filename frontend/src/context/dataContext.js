import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const DataContext = createContext();

const ContextApi = ({ children }) => {
  const [stores, setStores] = useState([]);
  const [products, setProducts] = useState([]);
  //   <-------------Products data Start-------------->
  // add Products
  const addProduct = (newProduct) => {
    console.log("add");
    try {
      axios
        .post("http://localhost:5050/api/products", newProduct)
        .then((res) => get_data(res))
        .catch((error) => console.log(error));
      // window.location.reload();
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
        .then((res) => get_data(res))
        .catch((error) => console.log(error));
      // window.location.reload();
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
        .then((res) => get_data(res))
        .catch((error) => console.log(error));
      // window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  // get all products
  const get_data = () => {
    try {
      axios
        .get("http://localhost:5050/api/products")
        .then((res) => setProducts(res.data))
        .catch((error) => console.log(error));
    } catch (error) {
      console.log("Error fetching data", error);
    }
  };

  const AddPurchaseDetails = (id, newPurchaseDetails) => {
    console.log(id, newPurchaseDetails);
    try {
      axios
        .post(
          `http://localhost:5050/api/products/${id}/purchase`,
          newPurchaseDetails
        )
        .then((res) => get_data(res))
        .catch((error) => console.log(error));
      // window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    get_data();
  }, []);

  // <----------------Products Data End--------------------->

  //  <---------------Stores Data Start--------------------->

  // get all stores
  useEffect(() => {
    try {
      axios
        .get("http://localhost:5050/api/stores")
        .then((res) => setStores(res.data))
        .catch((error) => console.log(error));
    } catch (error) {
      console.log("Error fetching data", error);
    }
  }, []);

  // add Store
  const addStore = (newStore) => {
    try {
      axios
        .post("http://localhost:5050/api/stores", newStore)
        .then((res) => console.log(res))
        .catch((res) => console.log(res));
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  const updateStore = (id, newStore) => {
    try {
      axios
        .put(`http://localhost:5050/api/stores/${id}`, newStore)
        .then((res) => console.log(res))
        .catch((res) => console.log(res));
      window.location.reload();
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
        .then((res) => console.log(res.data))
        .catch((error) => console.log(error));
      window.location.reload();
    } catch (error) {
      console.log("Error fetching data", error);
    }
  };

  // <---------------------Stores Data End---------------------->

  return (
    <DataContext.Provider
      value={{
        addProduct,
        products,
        deleteProduct,
        updateProduct,
        AddPurchaseDetails,
        stores,
        addStore,
        updateStore,
        deleteStore,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);

export default ContextApi;
