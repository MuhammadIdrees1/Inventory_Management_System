import axios from "axios";

export const get_sales = async (userId) => {
  const { data } = await axios.get(`/api/sales/${userId}`);
  return data;
};

export const add_Sales_Details = async (
  userId,
  storeId,
  productId,
  newSalesDetails
) => {
  console.log(userId, storeId, productId, newSalesDetails);
  return await axios
    .post(`/api/sales/${userId}/${storeId}/${productId}`, newSalesDetails)
    .then((res) => res)
    .catch((error) => console.log(error));
};

// delete sales
export const delete_Sales_Details = async (_id) => {
  return await axios
    .delete(`/api/sales/${_id}`)
    .then((res) => res)
    .catch((error) => console.log(error));
};
