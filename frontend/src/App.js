import "./App.css";
import { Route, Routes } from "react-router-dom";
import ContextApi from "./context/dataContext";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import MainRoutes from "./routes/MainRoutes";

function App() {
  return (
    <>
      <ContextApi>
        <Routes>
          <Route path="/signup" exact element={<Signup />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="*" element={<MainRoutes />} />
        </Routes>
      </ContextApi>
    </>
  );
}

export default App;
