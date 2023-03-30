import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  HiOutlineMail,
  HiOutlineLockClosed,
  HiOutlineUser,
} from "react-icons/hi";
import axios from "axios";

const Signup = () => {
  const [data, setData] = useState({
    userName: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  console.log(data);
  const navigate = useNavigate();

  // const handleChange = ({ currentTarget: input }) => {
  //   setData({ ...data, [input.name]: input.value });
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("pre");
    try {
      const uri = "http://localhost:5050/api/users";
      const { data: res } = await axios.post(uri, data);
      navigate("/login");
      console.log(res.message);
    } catch (error) {
      // if (error.response.status >= 400 && error.response.status <= 500) {
      //   setError(error.response.data.message);
      console.log(error);
      // }
    }
  };

  return (
    <div className="h-screen w-screen flex justify-center items-center bg-[#FFFFFF] ">
      <div className="h-3/4 w-2/3  flex shadow-lg m-2 bg-white">
        <div className="h-full w-3/4  flex items-center justify-center p-2 text-center">
          <div className="p-5">
            <h1 className="text-white font-bold text-3xl mb-5">
              Welcome Back!
            </h1>
            <p className="text-white mb-7">
              "Efficiently manage your inventory with ease - log in now!"
            </p>
            <Link to="/login">
              <button className="text-white border-2 px-10 py-2 rounded-full">
                SIGN IN
              </button>
            </Link>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="h-full w-full flex flex-col items-center justify-around p-5">
            <h1 className="mt-6 text-3xl font-bold text-MediumAquamarine ">
              Create Account
            </h1>
            <div>
              <div className="flex items-center bg-[#E6EFEE]  mb-5">
                <i>
                  <HiOutlineUser className="m-2 text-gray-400" />
                </i>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Name"
                  className="h-10 w-64 p-1  block bg-[#E6EFEE] focus:outline-none"
                  value={data.userName}
                  // onChange={handleChange}
                  onChange={(event) =>
                    setData({ ...data, userName: event.target.value })
                  }
                />
              </div>
              <div className="flex items-center bg-[#E6EFEE]  mb-5">
                <i>
                  <HiOutlineMail className="m-2 text-gray-400" />
                </i>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Email"
                  value={data.email}
                  onChange={(event) =>
                    setData({ ...data, email: event.target.value })
                  }
                  className="h-10  p-1 w-64 block bg-[#E6EFEE] focus:outline-none"
                />
              </div>
              <div className="flex items-center bg-[#E6EFEE]  mb-5">
                <i>
                  <HiOutlineLockClosed className="m-2 text-gray-400" />
                </i>
                <input
                  type="password"
                  required
                  name="password"
                  placeholder="Password"
                  value={data.password}
                  onChange={(event) =>
                    setData({ ...data, password: event.target.value })
                  }
                  className="h-10  p-1 w-72 block bg-[#E6EFEE] focus:outline-none"
                />
              </div>
            </div>
            {error && (
              <div>
                <p>{error}</p>
              </div>
            )}
            <button
              className="h-9 w-32 mb-10 font-bold bg-MediumAquamarine rounded-full text-white"
              type="submit"
            >
              SIGN UP
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
