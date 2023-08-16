import axios from "axios";

// get all purchase details
export const get_purchase = async (userId) => {
  const { data } = await axios.get(
    `http://localhost:5050/api/purchase/${userId}`
  );
  return data;
};

// add Purchase Details on products
export const add_Purchase_Details = async (userId, id, newPurchaseDetails) => {
  return await axios
    .post(
      `http://localhost:5050/api/purchase/${id}/${userId}`,
      newPurchaseDetails
    )
    .then((res) => res)
    .catch((error) => console.log(error));
};

// delete purchaseDetails
export const delete_purchase = async (_id) => {
  return await axios
    .delete(`http://localhost:5050/api/purchase/${_id}`)
    .then((res) => res)
    .catch((error) => console.log(error));
};
