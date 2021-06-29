import axios from "axios";

const baseURL = "http://api-meme-zendvn-01.herokuapp.com/api";

const api = {
  call() {
    const axiosInstance = axios.create({
      baseURL: baseURL,
      headers: {
        "Content-Type": "application/json",
      },
    });
    return axiosInstance;
  },

  callWithAuth() {
    // cấu hình header
    const axiosInstance = axios.create({
      baseURL: baseURL,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer my-token",
      },
    });
    return axiosInstance;
  },
};

export default api;
