import axios from "axios";

export const get_stores = async (userId) => {
  const { data } = await axios.get(
    `http://localhost:5050/api/stores/${userId}`
  );
  return data;
};

// add Store
export const add_Store = async (userId, newStore) => {
  return await axios
    .post(`http://localhost:5050/api/stores/${userId}`, newStore)
    .then((res) => res)
    .catch((res) => console.log(res));
};

// update store
export const update_Store = async (id, newStore) => {
  return await axios
    .put(`http://localhost:5050/api/stores/${id}`, newStore)
    .then((res) => res)
    .catch((res) => console.log(res));
};

// delete stores
export const delete_Store = async (_id) => {
  return await axios
    .delete(`http://localhost:5050/api/stores/${_id}`)
    .then((res) => res)
    .catch((error) => console.log(error));
};
