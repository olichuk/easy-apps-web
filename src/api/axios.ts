import axios from "axios";
import { BASE_URL } from "../constans";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
});

export default axiosInstance;
