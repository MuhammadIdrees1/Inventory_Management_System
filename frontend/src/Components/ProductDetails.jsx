import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import AddPurchaseDetails from "./Modals/AddPurchaseDetails";

const ProductDetails = () => {
  const [showModal, setShowModal] = useState(false);
  const { productId } = useParams();
  const [productDetail, setProductDetail] = useState({});
  console.log("productId", productId);

  useEffect(() => {
    try {
      axios
        .get(`http://localhost:5050/api/products/${productId}`)

        .then((res) => setProductDetail(res.data))
        .catch((error) => console.log(error));
    } catch (error) {
      console.log("Error fetching data", error);
    }
  }, [productId]);
  console.log(productDetail);
  const { name, description, manufacturer, price, stock, purchaseHistory } =
    productDetail;
  console.log("purchaseHistory", purchaseHistory);

  return (
    <div className="p-4 sm:ml-64">
      <div className="mt-14  ">
        <Link to={"/products"}>back</Link>
        {/*<p>{name}</p>
        <p>{description}</p>
        <p>{manufacturer}</p> */}
        <section class="text-gray-600 body-font overflow-hidden">
          <div class="container  py-4 mx-auto">
            <div class="lg:w-4/5 mx-auto flex flex-wrap">
              <img
                alt="ecommerce"
                class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
                src="https://dummyimage.com/400x400"
              />
              <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">
                  {name}
                </h1>
                <h2 class="text-sm title-font text-gray-500 tracking-widest mt-3">
                  {/* BRAND NAME */}
                  <span className="font-bold">Manufacturer:</span>
                  {manufacturer}
                </h2>
                {/* <div class="flex mb-4">
                  <span class="flex items-center">
                    <svg
                      fill="currentColor"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-4 h-4 text-indigo-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                    <svg
                      fill="currentColor"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-4 h-4 text-indigo-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                    <svg
                      fill="currentColor"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-4 h-4 text-indigo-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                    <svg
                      fill="currentColor"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-4 h-4 text-indigo-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-4 h-4 text-indigo-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                    <span class="text-gray-600 ml-3">4 Reviews</span>
                  </span>
                  <span class="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                    <a class="text-gray-500">
                      <svg
                        fill="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                      </svg>
                    </a>
                    <a class="text-gray-500">
                      <svg
                        fill="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                      </svg>
                    </a>
                    <a class="text-gray-500">
                      <svg
                        fill="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>
                    </a>
                  </span>
                </div> */}
                <p class="leading-relaxed pb-5 border-b-2 border-gray-100 mb-5 mt-3">
                  <span className="font-bold">Description:</span> {description}
                </p>
                <p class="leading-relaxed pb-5 border-b-2 border-gray-100 mb-5 mt-3">
                  <span className="font-bold">Stock:</span> {stock}
                </p>

                <div class="flex">
                  <span class="title-font font-medium text-2xl text-gray-900">
                    ${price}
                  </span>
                  <button
                    class="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
                    onClick={() => setShowModal(true)}
                  >
                    Add Purchase Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        {purchaseHistory.map((value, index) => {
          console.log("value", value);
          return (
            <>
              <div key={index}>
                <p>{value.date}</p>
                <p>{value.quantity}</p>
                <p>{value.price}</p>
              </div>
            </>
          );
        })}
      </div>
      {showModal && (
        <AddPurchaseDetails setShowModal={setShowModal} id={productId} />
      )}
    </div>
  );
};

export default ProductDetails;
