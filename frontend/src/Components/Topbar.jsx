// import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Searchbar from "../common/Searchbar";

const Topbar = () => {
  // const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const currentLocation = {
    "/": "Main Dashboard",
    "/products": "Products",
    "/stores": "Stores",
    "/purchaseDetails": "Purchase Details",
    "/salesDetails": "Sales Details",
  };

  return (
    <nav className="fixed top-5 z-40 mx-4 h-44 w-11/12 rounded-xl border-2 bg-opacity-50  bg-clip-padding px-2 backdrop-blur-lg   backdrop-filter md:left-72 md:ml-6 md:h-24 md:w-3/4">
      <div className=" py-4 md:px-3">
        <div className=" items-center justify-between md:flex">
          <div className="flex w-fit items-center justify-start">
            {/* <button
              // onClick={() => setIsOpen(true)}
              data-drawer-target="logo-sidebar"
              data-drawer-toggle="logo-sidebar"
              aria-controls="logo-sidebar"
              type="button"
              className="inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden "
            >
              <span className="sr-only">Open sidebar</span>
              <svg
                className="h-6 w-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clip-rule="evenodd"
                  fill-rule="evenodd"
                  d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                ></path>
              </svg>
            </button> */}

            <div>
              <p className="font-semiBold self-center whitespace-nowrap  text-sm capitalize tracking-wider  ">
                Pages / {currentLocation[location.pathname]}
              </p>
              <h1 className="mb-2 text-4xl  font-bold  capitalize">
                {currentLocation[location.pathname]}
              </h1>
            </div>
          </div>{" "}
          {location.pathname === "/" ? null : (
            <div className="mb-2 flex items-center ">
              <div className="flex items-center ">
                <div className="flex h-16 w-auto items-center rounded-full bg-white shadow-md md:w-96">
                  {/* <input
                    type="text"
                    className="ml-2 h-5/6 w-3/4 rounded-full bg-[#F4F7FE] p-5"
                    placeholder="Search"
                  /> */}

                  <Searchbar />
                  <button
                    type="button"
                    // onClick={() => setIsOpen(true)}
                    className="ml-6 flex rounded-full  text-sm focus:ring-4 focus:ring-gray-300"
                    aria-expanded="false"
                    data-dropdown-toggle="dropdown-user"
                  >
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="h-14 rounded-full"
                      src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                      alt="user"
                    />
                  </button>
                </div>
                {/* {isOpen && (
                <div
                  className="z-50 my-4  list-none divide-y divide-gray-100 rounded bg-white text-base shadow "
                  id="dropdown-user"
                >
                  <div className="px-4 py-3" role="none">
                    <p className="text-sm text-gray-900 " role="none">
                      Neil Sims
                    </p>
                    <p
                      className="truncate text-sm font-medium text-gray-900 "
                      role="none"
                    >
                      neil.sims@flowbite.com
                    </p>
                  </div>
                </div>
              )} */}
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Topbar;
