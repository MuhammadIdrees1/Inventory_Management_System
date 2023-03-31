import { useState } from "react";
import { useData } from "../context/dataContext";
import { AiFillPlusCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import AddProducts from "./Modals/AddProducts";
import UpdateProducts from "./Modals/UpdateProducts";

const Products = () => {
  const { products, deleteProduct } = useData();
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [productId, setProductId] = useState("");

  console.log("data", products);
  return (
    <>
      <div className="p-4 sm:ml-64">
        <div className="p-4  mt-14  ">
          <div class="relative overflow-x-auto  sm:rounded-lg">
            <div class="flex items-center justify-between pb-4">
              <label for="table-search" class="sr-only">
                Search
              </label>
              <div class="relative">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    class="w-5 h-5 text-gray-500 "
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
                <input
                  type="text"
                  id="table-search"
                  class="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
                  placeholder="Search for items"
                />
              </div>
              <div>
                <button
                  onClick={() => setShowModal(true)}
                  class="ml-4 inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5 "
                  type="button"
                >
                  <AiFillPlusCircle class="w-4 h-4 mr-2 text-gray-400" />
                  Add Products
                </button>
              </div>
            </div>
            <table class="w-full text-sm text-left text-gray-500 mt-5 shadow-2xl">
              <thead class="text-xs text-gray-700 uppercase bg-gray-100  ">
                <tr>
                  <th scope="col" class="p-4">
                    id
                  </th>
                  <th scope="col" class="px-4 py-3">
                    title
                  </th>
                  <th scope="col" class="px-4 py-3">
                    manufacturer
                  </th>
                  <th scope="col" class="px-4 py-3">
                    description
                  </th>
                  <th scope="col" class="px-4 py-3">
                    Price
                  </th>
                  <th scope="col" class="px-4 py-3">
                    Stock
                  </th>
                  <th scope="col" class="px-4 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              {products.map((value, index) => {
                {
                  /* console.log("value", value); */
                }
                const { _id, name, manufacturer, description, price, stock } =
                  value;
                return (
                  <tbody key={_id}>
                    <tr class="bg-white border-b  hover:bg-gray-50 ">
                      <td class="w-4 p-4">{index + 1}</td>
                      <th
                        scope="row"
                        class="px-4 py-4 font-medium text-gray-900 whitespace-nowrap "
                      >
                        {name}
                      </th>

                      <td class="px-4 py-4">{manufacturer}</td>
                      <td class="px-4 py-4">{description}</td>
                      <td class="px-4 py-4">${price}</td>
                      <td class="px-4 py-4">{stock}</td>
                      <td class="px-4 py-4">
                        <Link
                          class="font-medium text-blue-600  hover:underline "
                          onClick={() => (
                            setShowUpdateModal(true), setProductId(_id)
                          )}
                        >
                          Update
                        </Link>
                        <Link
                          onClick={() => {
                            deleteProduct(_id);
                          }}
                          class="font-medium text-red-600  hover:underline pl-3"
                        >
                          Delete
                        </Link>
                        <Link
                          class="font-medium text-green-600  hover:underline pl-3"
                          to={`/product/${_id}`}
                        >
                          More Info
                        </Link>
                      </td>
                    </tr>
                  </tbody>
                );
              })}
            </table>
          </div>
        </div>
      </div>
      {showModal && <AddProducts setShowModal={setShowModal} />}
      {showUpdateModal && (
        <UpdateProducts
          setShowUpdateModal={setShowUpdateModal}
          id={productId}
        />
      )}
    </>
  );
};

export default Products;
