import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const ProductDetails = () => {
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
  }, []);

  const { name, description, manufacturer } = productDetail;

  return (
    <div className="p-4 sm:ml-64">
      <div className="p-4 mt-14  ">
        <Link to={"/products"}>back</Link>
        <p>{name}</p>
        <p>{description}</p>
        <p>{manufacturer}</p>
      </div>
    </div>
  );
};

export default ProductDetails;
