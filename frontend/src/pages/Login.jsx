import { useState } from "react";
import { HiOutlineMail, HiOutlineLockClosed } from "react-icons/hi";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [valuesForLogin, setValuesForLogin] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const [error, setError] = useState("");

  const handleChange = ({ currentTarget: input }) => {
    setValuesForLogin({ ...valuesForLogin, [input.name]: input.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!valuesForLogin.email || !valuesForLogin.password) {
      alert("PLease fill all fields.");
    } else {
      try {
        console.log("setValuesForLogin before", valuesForLogin);

        const { data } = await axios.post(
          "http://localhost:5050/api/auth/login",
          { ...valuesForLogin },
          { withCredentials: true }
        );
        if (data) {
          // console.log('good')
          if (data.errors) {
            const { email, password } = data.errors;
            //  if (email) generateError(email);
            //  else if (password) generateError(password);
          } else {
            setValuesForLogin({ email: "", password: "" });
            navigate("/");
          }
        }
      } catch (error) {
        console.log(error);
      }
      window.location.reload();
    }
    // e.preventDefault();
    // try {
    //   const uri = "http://localhost:5050/api/auth";
    //   const { data: res } = await axios.post(uri, data);
    //   localStorage.setItem("token", res.data);
    //   window.location = "/";
    //   console.log(res.message);
    // } catch (error) {
    //   if (error.response.status >= 400 && error.response.status <= 500) {
    //     setError(error.response.data.message);
    //   }
    // }
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-[#FFFFFF] ">
      <div className="m-2 flex  h-3/4 w-2/3 bg-white shadow-lg">
        <form onSubmit={handleSubmit}>
          <div className="flex h-full w-full flex-col items-center justify-around p-5">
            <h1 className="mt-6 text-3xl font-bold  text-MediumAquamarine ">
              Sign in to SmartStocks
            </h1>
            <div>
              <div className="mb-5 flex items-center  bg-[#E6EFEE]">
                <i>
                  <HiOutlineMail className="m-2 text-gray-400" />
                </i>
                <input
                  type="text"
                  name="email"
                  value={valuesForLogin.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="block  h-10 w-64 bg-[#E6EFEE] p-1 focus:outline-none"
                />
              </div>
              <div className="mb-5 flex items-center  bg-[#E6EFEE]">
                <i>
                  <HiOutlineLockClosed className="m-2 text-gray-400" />
                </i>
                <input
                  type="text"
                  name="password"
                  onChange={handleChange}
                  value={valuesForLogin.password}
                  placeholder="Password"
                  className="block  h-10 w-72 bg-[#E6EFEE] p-1 focus:outline-none"
                />
              </div>
            </div>
            <button
              className="mb-10 h-9 w-32 rounded-full bg-MediumAquamarine font-bold text-white"
              type="submit"
            >
              SIGN IN
            </button>
          </div>
        </form>
        <div className="flex h-full w-3/4 items-center justify-center bg-gradient-to-r from-cyan-500 to-blue-500 p-2 text-center">
          <div className="">
            <h1 className="mb-5 text-3xl font-bold text-white">
              Hello Friend!
            </h1>
            <p className="mb-7 text-white">
              "Sign up today to take the first step towards efficient and
              effective inventory management!"
            </p>
            <Link to={"/signup"}>
              <button
                className="rounded-full border-2 px-10 py-2 text-white"
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
