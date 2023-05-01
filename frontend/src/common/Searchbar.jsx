import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useData } from "../hooks/useData";
import { MdSearch } from "react-icons/md";

const Searchbar = () => {
  const {
    products,
    stores,
    purchase,
    sales,
    setFilteredProducts,
    setFilteredPurchases,
    setFilteredSales,
    setFilteredStores,
  } = useData();
  const [value, setValue] = useState("");
  const location = useLocation();

  //   const [filteredProducts, setFilteredProducts] = useState(products);

  // searchbar placeholder
  let placeholderForSearch;
  switch (location.pathname) {
    case "/products":
      placeholderForSearch = "Search Products...";
      break;
    case "/stores":
      placeholderForSearch = "Search Stores...";
      break;
    case "/purchaseDetails":
      placeholderForSearch = "Search PurchaseDetails...";
      break;
    case "/salesDetails":
      placeholderForSearch = "Search SalesDetails...";
      break;
    default:
      placeholderForSearch = "";
      break;
  }

  const handleFilter = () => {
    if (location.pathname === "/products") {
      const filteredProduct = products.filter((item) =>
        item.name.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredProducts(filteredProduct);
    }

    if (location.pathname === "/stores") {
      const filteredStore = stores.filter((item) =>
        item.store.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredStores(filteredStore);
    }

    if (location.pathname === "/purchaseDetails") {
      const filteredPurchase = purchase.filter((item) =>
        item.productName.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredPurchases(filteredPurchase);
    }

    if (location.pathname === "/salesDetails") {
      const filteredSale = sales.filter((item) =>
        item.productName.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredSales(filteredSale);
    }
  };

  useEffect(() => {
    handleFilter();
  }, [value]);

  return (
    <label className="ml-2 flex h-5/6 w-3/4 items-center  justify-start   rounded-full bg-[#F4F7FE] focus:outline-0">
      <MdSearch className="ml-4 h-7 w-7 text-[#A3AED0]" />
      <input
        type="text"
        className=" ml-2 h-full w-3/4 rounded-full bg-[#F4F7FE] py-5 pr-5  focus:outline-0"
        placeholder={placeholderForSearch}
        readOnly={location.pathname === "/mainDashboard" ? true : false}
        onChange={(e) => setValue(e.target.value)}
      />
    </label>
  );
};

export default Searchbar;
