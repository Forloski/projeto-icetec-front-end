import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3333",
  timeout: 5000,
});

const token = localStorage.getItem("@IceTecTest:token");

api.interceptors.request.use(
  (config) => {
    // eslint-disable-next-line no-param-reassign
    config.headers.authorization = `Bearer ${token}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
