import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useEffect } from "react";
import axios from "axios";
import Sidebar from "../Components/Sidebar";
import Dashboard from "../pages/Dashboard";
import Products from "../pages/Products";
import Topbar from "../Components/Topbar";
import Stores from "../pages/Stores";
import NotFound from "../pages/NotFound";
import PurchaseDetails from "../pages/PurchaseDetails";
import SalesDetails from "../pages/SalesDetails";

const MainRoutes = () => {
  const navigate = useNavigate();

  const [cookies, setCookie, removeCookie] = useCookies([]);

  useEffect(() => {
    const varifyUser = async () => {
      if (!cookies.jwt) {
        navigate("/signup");
      } else {
        const { data } = await axios.post(
          "http://localhost:5050/api/auth",
          {},
          { withCredentials: true }
        );
        if (!data.status) {
          removeCookie("jwt");
          navigate("/signup");
        } else {
          // toast(`HI ${data.user} ${data.uId}`, { theme: 'dark' })
        }
      }
    };
    varifyUser();
  }, [cookies, navigate, removeCookie]);

  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="h-screen w-screen">
          <Topbar />
          <Routes>
            <Route path="/" exact element={<Dashboard />} />
            <Route path="/products" exact element={<Products />} />
            <Route
              path="/purchaseDetails"
              exact
              element={<PurchaseDetails />}
            />
            <Route path="/salesDetails" exact element={<SalesDetails />} />
            <Route path="/stores" exact element={<Stores />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          {/* <Footer /> */}
        </div>
      </div>
    </>
  );
};

export default MainRoutes;
