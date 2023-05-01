import axios from "axios";

export const get_stores = async (userId) => {
  const { data } = await axios.get(
    `http://localhost:5050/api/stores/${userId}`
  );
  return data;
};

// add Store
export const add_Store = (userId, newStore) => {
  axios
    .post(`http://localhost:5050/api/stores/${userId}`, newStore)
    .then((res) => get_stores(res))
    .catch((res) => console.log(res));
  window.location.reload();
};

// update store
export const update_Store = (id, newStore) => {
  axios
    .put(`http://localhost:5050/api/stores/${id}`, newStore)
    .then((res) => get_stores(res))
    .catch((res) => console.log(res));
  window.location.reload();
};

// delete stores
export const delete_Store = (_id) => {
  axios
    .delete(`http://localhost:5050/api/stores/${_id}`)
    .then((res) => get_stores(res.data))
    .catch((error) => console.log(error));
  window.location.reload();
};
