import axios from "axios";

export const get_products = async (userId) => {
  const { data } = await axios.get(
    `http://localhost:5050/api/products/${userId}`
  );
  return data;
};

// add products
export const addProduct = (userId, newProduct) => {
  axios
    .post(`http://localhost:5050/api/products/${userId}`, newProduct)
    .then((res) => get_products(res))
    .catch((error) => console.log(error));
  window.location.reload();
};

// delete product
export const deleteProduct = (_id) => {
  axios
    .delete(`http://localhost:5050/api/products/${_id}`)
    .then((res) => get_products(res))
    .catch((error) => console.log(error));
  window.location.reload();
};

// updateProduct
export const updateProduct = (id, newProduct) => {
  axios
    .put(`http://localhost:5050/api/products/${id}`, newProduct)
    .then((res) => get_products(res))
    .catch((error) => console.log(error));
  window.location.reload();
};
