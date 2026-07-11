import axios from "axios";
import { storage } from "../utils/storage";
import { useAuthStore } from "../store/authStore";

const api = axios.create({
  baseURL: `${import.meta.env.VITE_API_BASE_URL}`,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

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
    if (
      error.response?.status === 401 &&
      !error.config?.url?.includes("/auth/login")
    ) {
      useAuthStore.getState().logout();

      window.location.replace("/login?sessionExpired=true");
    }

    return Promise.reject(error);
  }
);


// api.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     // We'll expand this later for global error handling
//     return Promise.reject(error);
//   }
// );

export default api;