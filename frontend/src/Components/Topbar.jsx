import React from "react";

const Topbar = () => {
  return (
    <nav className="fixed top-5 left-80 z-50  h-20 w-3/4 rounded-lg bg-gray-100  bg-opacity-20 bg-clip-padding backdrop-blur-lg backdrop-filter ">
      <div className="px-3 py-3 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start">
            <button
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
            </button>

            <div>
              <p className="font-semiBold  self-center whitespace-nowrap text-sm  ">
                Pages / Main Dashboard
              </p>
              <h1 className="mb-2 text-3xl  font-semibold">Main Dashboard</h1>
            </div>
          </div>
          <div className="mb-2 flex items-center">
            <div className="ml-3 flex items-center ">
              <div className="flex h-16 w-96 items-center rounded-full bg-white ">
                <input
                  type="text"
                  className="ml-2 h-5/6 w-3/4 rounded-full bg-[#F4F7FE] p-5"
                  placeholder="Search"
                />
                <button
                  type="button"
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
              <div
                className="z-50 my-4 hidden list-none divide-y divide-gray-100 rounded bg-white text-base shadow "
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
                {/* <ul className="py-1" role="none">
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 "
                      role="menuitem"
                    >
                      Dashboard
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 "
                      role="menuitem"
                    >
                      Settings
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 "
                      role="menuitem"
                    >
                      Earnings
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 "
                      role="menuitem"
                    >
                      Sign out
                    </a>
                  </li>
                </ul> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Topbar;
