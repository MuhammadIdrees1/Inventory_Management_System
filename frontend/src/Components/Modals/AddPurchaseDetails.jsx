import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useData } from "../../context/dataContext";

const AddPurchaseDetails = (props) => {
  const { AddPurchaseDetails } = useData();
  const [input, setInput] = useState({
    quantity: "",
    price: "",
    date: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setInput((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("pressed");
    const newPurchaseDetails = {
      quantity: input.quantity,
      price: input.price,
      date: input.date,
    };
    console.log("newSales", newPurchaseDetails);
    const id = props.id;

    AddPurchaseDetails(id, newPurchaseDetails);

    // setInput({ quantity, price, date });
    props.setShowModal(false);
    // window.location.reload();
  };
  return (
    <>
      <div
        id="small-modal"
        tabindex="-1"
        class="fixed lg:top-20 lg:left-1/3 lg:bottom-1/4  z-50  w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] md:h-full"
      >
        <div class="relative w-full h-full max-w-md md:h-auto">
          {/* Modal content  */}
          <div class="relative bg-white rounded-lg shadow ">
            {/* Modal header  */}
            <div class="flex items-center justify-center p-5 border-b rounded-t ">
              <h3 class="text-xl  font-medium text-gray-900 ">
                Add Purchase Details
              </h3>
              <button
                onClick={() => props.setShowModal(false)}
                type="button"
                class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center "
                data-modal-hide="small-modal"
              >
                <AiOutlineClose class="w-5 h-5" />
              </button>
            </div>
            {/* Modal body */}
            <form>
              <div class="p-6 space-y-6">
                <div class="relative z-0 w-full mb-6 group">
                  <input
                    type="number"
                    name="quantity"
                    id="floating_email"
                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                    value={input.quantity}
                    onChange={handleChange}
                  />
                  <label
                    for="floating_email"
                    class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Quantity
                  </label>
                </div>
                <div class="relative z-0 w-full mb-6 group">
                  <input
                    type="text"
                    name="price"
                    id="floating_password"
                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                    value={input.price}
                    onChange={handleChange}
                  />
                  <label
                    for="floating_password"
                    class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Price
                  </label>
                </div>
                <div class="relative z-0 w-full mb-6 group">
                  <input
                    value={input.date}
                    onChange={handleChange}
                    type="date"
                    name="date"
                    id="floating_repeat_password"
                    class=" resize-none block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                  />
                  <label
                    for="floating_repeat_password"
                    class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Date
                  </label>
                </div>
              </div>
              {/* Modal footer */}
              <div class="flex justify-center items-center p-6 space-x-2 border-t border-gray-200 rounded-b ">
                <button
                  data-modal-hide="small-modal"
                  type="submit"
                  onClick={handleSubmit}
                  class="text-white w-full bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddPurchaseDetails;
