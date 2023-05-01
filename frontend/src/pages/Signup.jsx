import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  HiOutlineMail,
  HiOutlineLockClosed,
  HiOutlineUser,
} from "react-icons/hi";
import axios from "axios";

const Signup = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  // console.log(values);
  const navigate = useNavigate();

  // const handleChange = ({ currentTarget: input }) => {
  //   setData({ ...data, [input.name]: input.value });
  // };
  // const generateError = (error) =>
  // toast.error(error, {
  //   position: "bottom-right",
  // });

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!values.username || !values.email || !values.password) {
      alert("PLease fill all fields.");
    } else {
      try {
        console.log("user ", values);
        const { data } = await axios.post(
          "http://localhost:5050/api/auth/register",
          { ...values },
          { withCredentials: true }
        );
        if (data) {
          // console.log('good')
          if (data.errors) {
            // const { username, email, password } = data.errors;
            //  if (email) generateError(email);
            //  else if (password) generateError(password);
          } else {
            setValues({ username: "", email: "", password: "" });
            navigate("/");
          }
        }
      } catch (error) {
        console.log(error);
        setError(error.message);
      }
    }

    // e.preventDefault();
    // console.log("pre");
    // try {
    //   const uri = "http://localhost:5050/api/users";
    //   const { data: res } = await axios.post(uri, data);
    //   navigate("/login");
    //   console.log(res.message);
    // } catch (error) {
    //   // if (error.response.status >= 400 && error.response.status <= 500) {
    //   //   setError(error.response.data.message);
    //   console.log(error);
    //   // }
    // }
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-[#FFFFFF] ">
      <div className="m-2 flex  h-3/4 w-2/3 bg-white shadow-lg">
        <div className=" flex h-full w-3/4 items-center justify-center bg-gradient-to-r from-cyan-500 to-blue-500 p-2 text-center">
          <div className="p-5">
            <h1 className="mb-5 text-3xl font-bold text-white">
              Welcome Back!
            </h1>
            <p className="mb-7 text-white">
              "Efficiently manage your inventory with ease - log in now!"
            </p>
            <Link to="/login">
              <button className="rounded-full border-2 px-10 py-2 text-white">
                SIGN IN
              </button>
            </Link>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="flex h-full w-full flex-col items-center justify-around p-5">
            <h1 className="mt-6 text-3xl font-bold text-MediumAquamarine ">
              Create Account
            </h1>
            <div>
              {error}
              <div className="mb-5 flex items-center  bg-[#E6EFEE]">
                <i>
                  <HiOutlineUser className="m-2 text-gray-400" />
                </i>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Name"
                  className="block h-10 w-64  bg-[#E6EFEE] p-1 focus:outline-none"
                  value={values.username}
                  // onChange={handleChange}
                  onChange={(event) =>
                    setValues({ ...values, username: event.target.value })
                  }
                />
              </div>
              <div className="mb-5 flex items-center  bg-[#E6EFEE]">
                <i>
                  <HiOutlineMail className="m-2 text-gray-400" />
                </i>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Email"
                  value={values.email}
                  onChange={(event) =>
                    setValues({ ...values, email: event.target.value })
                  }
                  className="block  h-10 w-64 bg-[#E6EFEE] p-1 focus:outline-none"
                />
              </div>
              <div className="mb-5 flex items-center  bg-[#E6EFEE]">
                <i>
                  <HiOutlineLockClosed className="m-2 text-gray-400" />
                </i>

                <input
                  type="password"
                  required
                  name="password"
                  placeholder="Password"
                  value={values.password}
                  onChange={(event) =>
                    setValues({ ...values, password: event.target.value })
                  }
                  className="block  h-10 w-72 bg-[#E6EFEE] p-1 focus:outline-none"
                />
              </div>
            </div>
            {error && (
              <div>
                <p>{error}</p>
              </div>
            )}
            <button
              className="mb-10 h-9 w-32 rounded-full bg-MediumAquamarine font-bold text-white"
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
