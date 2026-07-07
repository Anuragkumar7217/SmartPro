import axios from "axios";
import { storage } from "../utils/storage";

const api = axios.create({
  baseURL: ${import.meta.env.VITE_API_BASE_URL}/api,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// const api = axios.create({
//   baseURL: import.meta.env.VITE_API_BASE_URL,
//   timeout: 10000,
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

// Attach JWT token to every request
api.interceptors.request.use(
  (config) => {
    const token = storage.getToken();

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

// Handle common response errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // We'll expand this later for global error handling
    return Promise.reject(error);
  }
);

export default api;