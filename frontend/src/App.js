import "./App.css";
// import AddProducts from "./Components/AddProducts";
import { Route, Routes, Navigate } from "react-router-dom";
import ContextApi from "./context/dataContext";
import Login from "./Components/Login";
import Sidebar from "./Components/Sidebar";
import Signup from "./Components/Signup";
import Dashboard from "./Components/Dashboard";
import Products from "./Components/Products";
import Topbar from "./Components/Topbar";
import Stores from "./Components/Stores";
import ProductDetails from "./Components/ProductDetails";
import StoreDetails from "./Components/StoreDetails";
import NotFound from "./Components/NotFound";
import PurchaseDetails from "./Components/PurchaseDetails";

// import StoreDetails,  ProductDetails,  Topbar,  Products,  Login,  Signup,  Sidebar,Stores,  Dashboard, from "./Components";

function App() {
  const user = localStorage.getItem("token");
  return (
    <>
      <ContextApi>
        <Topbar />
        <Sidebar />
        <Routes>
          {/* {user && <Routes path="/" exact element={<AddProducts />} />} */}

          <Route path="/signup" exact element={<Signup />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/" exact element={<Dashboard />} />
          <Route path="/products" exact element={<Products />} />
          <Route path="/purchasedetails" exact element={<PurchaseDetails />} />
          <Route
            path="/product/:productId"
            exact
            element={<ProductDetails />}
          />
          <Route path="/stores" exact element={<Stores />} />
          <Route path="/store/:storeId" exact element={<StoreDetails />} />
          <Route path="*" element={<NotFound />} />

          {/* <Route path="/" exact element={<Navigate replace to="/login" />} /> */}
        </Routes>
      </ContextApi>
    </>
  );
}

export default App;
