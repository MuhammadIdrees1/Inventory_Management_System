import axios from "axios";

export const get_stores = async (userId) => {
  const { data } = await axios.get(`/api/stores/${userId}`);
  return data;
};

// add Store
export const add_Store = async (userId, newStore) => {
  return await axios
    .post(`/api/stores/${userId}`, newStore)
    .then((res) => res)
    .catch((res) => console.log(res));
};

// update store
export const update_Store = async (id, newStore) => {
  return await axios
    .put(`/api/stores/${id}`, newStore)
    .then((res) => res)
    .catch((res) => console.log(res));
};

// delete stores
export const delete_Store = async (_id) => {
  return await axios
    .delete(`/api/stores/${_id}`)
    .then((res) => res)
    .catch((error) => console.log(error));
};
