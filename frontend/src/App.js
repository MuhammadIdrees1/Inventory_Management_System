import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { Route, Routes } from "react-router-dom";
import ContextApi from "./context/dataContext";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import MainRoutes from "./routes/MainRoutes";
import { ToastContainer } from "react-toastify";
function App() {
  return (
    <>
      <ContextApi>
        <Routes>
          <Route path="/signup" exact element={<Signup />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="*" element={<MainRoutes />} />
        </Routes>
        <ToastContainer />
      </ContextApi>
    </>
  );
}

export default App;
