import axios from "axios";

const Axios = axios.create({
  baseURL: "https://storefront-backend-ui23.onrender.com",
  headers: {
    "Content-Type": "application/json",
  },
});

export default Axios;
