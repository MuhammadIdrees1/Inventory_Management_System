import axios from "axios";

// varify Current User
export const varifyUser = () => {
  axios
    .post("http://localhost:5050/api/auth", {}, { withCredentials: true })
    .then((res) => res)
    .catch((error) => {
      console.error(error);
    });
};
