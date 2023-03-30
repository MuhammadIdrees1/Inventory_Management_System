import { useState } from "react";
import { HiOutlineMail, HiOutlineLockClosed } from "react-icons/hi";
import axios from "axios";
import { Link } from "react-router-dom";

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  console.log(data);

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const uri = "http://localhost:5050/api/auth";
      const { data: res } = await axios.post(uri, data);
      localStorage.setItem("token", res.data);
      window.location = "/";
      console.log(res.message);
    } catch (error) {
      if (error.response.status >= 400 && error.response.status <= 500) {
        setError(error.response.data.message);
      }
    }
  };

  return (
    <div className="h-screen w-screen flex justify-center items-center bg-[#FFFFFF] ">
      <div className="h-3/4 w-2/3  flex shadow-lg m-2 bg-white">
        <form onSubmit={handleSubmit}>
          <div className="h-full w-full flex flex-col items-center justify-around p-5">
            <h1 className="mt-6 text-3xl font-bold  text-MediumAquamarine ">
              Sign in to SmartStocks
            </h1>
            <div>
              <div className="flex items-center bg-[#E6EFEE]  mb-5">
                <i>
                  <HiOutlineMail className="m-2 text-gray-400" />
                </i>
                <input
                  type="text"
                  name="email"
                  value={data.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="h-10  p-1 w-64 block bg-[#E6EFEE] focus:outline-none"
                />
              </div>
              <div className="flex items-center bg-[#E6EFEE]  mb-5">
                <i>
                  <HiOutlineLockClosed className="m-2 text-gray-400" />
                </i>
                <input
                  type="text"
                  name="password"
                  onChange={handleChange}
                  value={data.password}
                  placeholder="Password"
                  className="h-10  p-1 w-72 block bg-[#E6EFEE] focus:outline-none"
                />
              </div>
            </div>
            <button
              className="h-9 w-32 mb-10 font-bold bg-MediumAquamarine rounded-full text-white"
              type="submit"
            >
              SIGN IN
            </button>
          </div>
        </form>
        <div className="h-full w-3/4 flex items-center justify-center p-2 text-center">
          <div className="">
            <h1 className="text-white font-bold text-3xl mb-5">
              Hello Friend!
            </h1>
            <p className="text-white mb-7">
              "Sign up today to take the first step towards efficient and
              effective inventory management!"
            </p>
            <Link to={"/signup"}>
              <button
                className="text-white border-2 px-10 py-2 rounded-full"
                type="submit"
              >
                SIGN UP
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
