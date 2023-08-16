import axios from "axios";

export const get_products = async (userId) => {
  const { data } = await axios.get(
    `http://localhost:5050/api/products/${userId}`
  );
  return data;
};

// add products
export const addProduct = async (userId, newProduct) => {
  return await axios
    .post(`http://localhost:5050/api/products/${userId}`, newProduct)
    .then((res) => res)
    .catch((error) => console.log(error));
};

// delete product
export const deleteProduct = async (_id) => {
  return await axios
    .delete(`http://localhost:5050/api/products/${_id}`)
    .then((res) => res)
    .catch((error) => console.log(error));
};

// updateProduct
export const updateProduct = async (id, newProduct) => {
  return await axios
    .put(`http://localhost:5050/api/products/${id}`, newProduct)
    .then((res) => res)
    .catch((error) => console.log(error));
};
