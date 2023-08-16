import { useState } from "react";
import { useData } from "../hooks/useData";
import { HiOutlinePlus } from "react-icons/hi";
import { Link } from "react-router-dom";
import AddPurchaseDetails from "../Components/AddPurchaseDetails";
import { delete_purchase } from "../api/Purchase";
import { showToastMessage } from "../utils/Toasts";

const PurchaseDetails = () => {
  const { filteredPurchases, setPurchase, purchase } = useData();
  const [showModal, setShowModal] = useState(false);

  const handleDelete = async (_id) => {
    try {
      const { data } = await delete_purchase(_id);

      const newData = purchase.filter((item) => {
        return item._id !== data?.purchase._id;
      });

      setPurchase(newData);
      showToastMessage("success", data?.message);
    } catch (error) {
      showToastMessage("error", error);
    }
  };

  return (
    <>
      <div className="  p-4 sm:ml-64">
        <div className="mt-14  p-4  ">
          <div class="relative ml-10 mt-10 overflow-x-auto border-0 bg-white  px-4 sm:rounded-2xl">
            <div class="mt-5 flex items-center justify-between pb-4">
              <div>
                <h2 className="text-xl font-semibold  text-[#1B254B]">
                  Purchase Details
                </h2>
              </div>
              <div>
                <button
                  onClick={() => setShowModal(true)}
                  class=" b inline-flex items-center rounded-lg bg-[#EDF2F7]  px-3 py-3 text-gray-500  hover:bg-gray-100 focus:outline-none"
                  type="button"
                >
                  <HiOutlinePlus class="h-5 w-5   text-[#422AFB] " />
                  {/* Add Products */}
                </button>
              </div>
            </div>
            <table class="mt-5 w-full text-left text-sm text-gray-500  ">
              <thead class="border-b bg-white text-xs uppercase text-gray-700  ">
                <tr>
                  <th scope="col" class="p-4 text-[#C5CCE1]">
                    id
                  </th>
                  <th scope="col" class="px-4 py-3 text-[#C5CCE1]">
                    Product Name
                  </th>
                  <th scope="col" class="px-4 py-3 text-[#C5CCE1]">
                    Stock
                  </th>
                  <th scope="col" class="px-4 py-3 text-[#C5CCE1]">
                    Price
                  </th>
                  <th scope="col" class="px-4 py-3 text-[#C5CCE1]">
                    purchased Date
                  </th>
                  <th scope="col" class="px-4 py-3 text-[#C5CCE1]">
                    Action
                  </th>
                </tr>
              </thead>
              {filteredPurchases.map((value, index) => {
                const { _id, productName, date, price, quantity } = value;
                return (
                  <tbody key={_id}>
                    <tr class="bg-white   ">
                      <td class="w-4 p-4">{index + 1}</td>
                      <th
                        scope="row"
                        class="whitespace-nowrap px-4 py-4 font-medium text-gray-900 "
                      >
                        {productName}
                      </th>

                      <td class="px-4 py-4">{quantity}</td>
                      <td class="px-4 py-4">${price}</td>
                      <td class="px-4 py-4">{date.slice(0, 10)}</td>
                      <td class="px-4 py-4">
                        <Link
                          onClick={() => handleDelete(_id)}
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
          </div>
        </div>
      </div>
      {showModal && <AddPurchaseDetails setShowModal={setShowModal} />}
    </>
  );
};

export default PurchaseDetails;
