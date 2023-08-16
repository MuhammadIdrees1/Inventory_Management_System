import { useState } from "react";
import { useData } from "../hooks/useData";
import { HiOutlinePlus } from "react-icons/hi";
import { Link } from "react-router-dom";
import AddProducts from "../Components/AddProducts";
import UpdateProducts from "../Components/UpdateProducts";
import { deleteProduct } from "../api/Products";
import { showToastMessage } from "../utils/Toasts";

const Products = () => {
  const { filteredProducts, userId, setProducts, products } = useData();
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [productId, setProductId] = useState("");
  console.log(userId, "userIds");
  // const column = [
  //   { heading: "Name", value: "name" },
  //   { heading: "Description", value: "manufacturer" },
  //   { heading: "Manufacturer", value: "description" },
  //   { heading: "Price", value: "price" },
  //   { heading: "Stock", value: "stock" },
  // ];

  const handleDelete = async (_id) => {
    try {
      const { data } = await deleteProduct(_id);

      const newData = products.filter((item) => {
        return item._id !== data?.product._id;
      });

      setProducts(newData);
      showToastMessage("success", data?.message);
    } catch (error) {
      showToastMessage("error", error);
    }
  };
  return (
    <>
      <div className="  p-4 sm:ml-64">
        <div className="mt-14 ml-7   p-4  ">
          <div class="relative mt-10 w-full overflow-x-auto border-0 bg-white  px-4 sm:rounded-2xl">
            <div class="mt-5 flex items-center justify-between pb-4">
              <div>
                <h2 className="text-xl font-semibold  text-[#1B254B]">
                  Products Table
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
                    name
                  </th>
                  <th scope="col" class="px-4 py-3 text-[#C5CCE1]">
                    manufacturer
                  </th>
                  <th scope="col" class="px-4 py-3 text-[#C5CCE1]">
                    description
                  </th>
                  <th scope="col" class="px-4 py-3 text-[#C5CCE1]">
                    Price
                  </th>
                  <th scope="col" class="px-4 py-3 text-[#C5CCE1]">
                    Stock
                  </th>
                  <th scope="col" class="px-4 py-3 text-[#C5CCE1]">
                    Action
                  </th>
                </tr>
              </thead>
              {filteredProducts.map((value, index) => {
                const { _id, name, manufacturer, description, price, stock } =
                  value;
                return (
                  <tbody key={_id}>
                    <tr class="bg-white">
                      <td class="w-4 p-4">{index + 1}</td>
                      <th
                        scope="row"
                        class="whitespace-nowrap px-4 py-4 font-medium text-gray-900 "
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
                          onClick={() => {
                            setShowUpdateModal(true);
                            setProductId(_id);
                          }}
                        >
                          Update
                        </Link>
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
            {/* <Table column={column} data={products} /> */}
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
