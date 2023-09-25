import axios from "axios";

export const get_products = async (userId) => {
  const { data } = await axios.get(`/api/products/${userId}`);
  return data;
};

// add products
export const addProduct = async (userId, newProduct) => {
  return await axios
    .post(`/api/products/${userId}`, newProduct)
    .then((res) => res)
    .catch((error) => console.log(error));
};

// delete product
export const deleteProduct = async (_id) => {
  return await axios
    .delete(`/api/products/${_id}`)
    .then((res) => res)
    .catch((error) => console.log(error));
};

// updateProduct
export const updateProduct = async (id, newProduct) => {
  return await axios
    .put(`/api/products/${id}`, newProduct)
    .then((res) => res)
    .catch((error) => console.log(error));
};
