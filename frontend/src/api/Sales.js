import axios from "axios";

export const get_sales = async (userId) => {
  const { data } = await axios.get(`http://localhost:5050/api/sales/${userId}`);
  return data;
};

export const add_Sales_Details = (
  userId,
  storeId,
  productId,
  newSalesDetails
) => {
  axios
    .post(
      `http://localhost:5050/api/sales/${userId}/${storeId}/${productId}`,
      newSalesDetails
    )
    .then((res) => get_sales(res))
    .catch((error) => console.log(error));
};
