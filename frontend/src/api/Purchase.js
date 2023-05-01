import axios from "axios";

// get all purchase details
export const get_purchase = async (userId) => {
  const { data } = await axios.get(
    `http://localhost:5050/api/purchase/${userId}`
  );
  return data;
};

// add Purchase Details on products
export const add_Purchase_Details = (userId, id, newPurchaseDetails) => {
  axios
    .post(
      `http://localhost:5050/api/purchase/${id}/${userId}`,
      newPurchaseDetails
    )
    .then((res) => get_purchase(res))
    .catch((error) => console.log(error));
  window.location.reload();
};

// delete purchaseDetails
export const delete_purchase = (_id) => {
  axios
    .delete(`http://localhost:5050/api/purchase/${_id}`)
    .then((res) => get_purchase(res))
    .catch((error) => console.log(error));
  window.location.reload();
};
