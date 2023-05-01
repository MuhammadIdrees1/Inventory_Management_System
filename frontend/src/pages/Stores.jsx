import { useState } from "react";
import { useData } from "../hooks/useData";
import { HiOutlinePlus } from "react-icons/hi";
import { Link } from "react-router-dom";
import AddStore from "../Components/Modals/AddStore";
import UpdateStore from "../Components/Modals/UpdateStore";
import Table from "../common/Table";
import { delete_Store } from "../api/Stores";

const Stores = () => {
  const { filteredStores } = useData();
  const [showModal, setShowModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [productId, setProductId] = useState("");

  // const column = [
  //   { heading: "Name", value: "store" },
  //   { heading: "Address", value: "address" },
  // ];

  return (
    <>
      <div className="  p-4 sm:ml-64">
        <div className="mt-14   p-4  ">
          <div class=" relative ml-10 mt-10 overflow-x-auto border-0 bg-white  px-4 sm:rounded-2xl">
            <div class="mt-5 flex items-center justify-between pb-4">
              <div>
                <h2 className="text-xl font-semibold  text-[#1B254B]">
                  Stores Table
                </h2>
              </div>
              <div>
                <button
                  onClick={() => setShowModal(true)}
                  class=" b inline-flex items-center rounded-lg bg-[#EDF2F7]  px-3 py-3 text-gray-500  hover:bg-gray-100 focus:outline-none"
                  type="button"
                >
                  <HiOutlinePlus class="h-5 w-5 text-[#422AFB] " />
                  {/* Add Products */}
                </button>
              </div>
            </div>
            <table class="mt-5 w-full text-left text-sm text-gray-500  ">
              <thead class="border-b bg-white text-xs uppercase text-gray-700  ">
                <tr>
                  <th scope="col" class="p-4 text-[#C5CCE1] ">
                    id
                  </th>
                  <th scope="col" class="px-4 py-3 text-[#C5CCE1]">
                    name
                  </th>
                  <th scope="col" class="px-4 py-3 text-[#C5CCE1]">
                    address
                  </th>

                  <th scope="col" class="px-4 py-3 text-[#C5CCE1]">
                    Action
                  </th>
                </tr>
              </thead>
              {filteredStores.map((value, index) => {
                const { _id, store, address } = value;
                return (
                  <tbody>
                    <tr class="bg-white ">
                      <td class="w-4 p-4">{index + 1}</td>
                      <th
                        scope="row"
                        class="whitespace-nowrap px-4 py-4 font-medium text-gray-900 "
                      >
                        {store}
                      </th>
                      <td class="px-4 py-4">{address}</td>
                      <td class="px-4 py-4">
                        <Link
                          class="font-medium text-blue-600  hover:underline "
                          onClick={() => {
                            setShowUpdateModal(true);
                            setProductId(_id);
                          }}
                        >
                          Update
                        </Link>
                        <Link
                          onClick={() => {
                            delete_Store(_id);
                          }}
                          class="pl-3 font-medium  text-red-600 hover:underline"
                        >
                          Delete
                        </Link>
                      </td>
                    </tr>
                  </tbody>
                );
              })}
            </table>
            {/* <Table column={column} data={stores} /> */}
          </div>
        </div>
      </div>
      {showModal && <AddStore setShowModal={setShowModal} />}
      {showUpdateModal && (
        <UpdateStore setShowUpdateModal={setShowUpdateModal} id={productId} />
      )}
    </>
  );
};

export default Stores;
