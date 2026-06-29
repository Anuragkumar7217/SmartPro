import { create } from "zustand";
import { authService } from "../services/authService";
import { storage } from "../utils/storage";

export const useAuthStore = create((set) => ({
  // ==========================
  // State
  // ==========================
  user: storage.getUser(),
  token: storage.getToken(),
  isAuthenticated: !!storage.getToken(),
  loading: false,
  error: null,

  // ==========================
  // Actions
  // ==========================

  initializeAuth: () => {
    const token = storage.getToken();
    const user = storage.getUser();

    set({
      token,
      user,
      isAuthenticated: !!token,
    });
  },

  login: async (credentials) => {
    set({
      loading: true,
      error: null,
    });

    try {
      const response = await authService.login(credentials);

      const { token, user } = response.data;

      storage.setToken(token);
      storage.setUser(user);

      set({
        token,
        user,
        isAuthenticated: true,
        loading: false,
        error: null,
      });

      return response;
    } catch (error) {
      const message =
        error.response?.data?.message || "Login failed";

      set({
        loading: false,
        error: message,
      });

      throw error;
    }
  },

  logout: () => {
    storage.clearAuth();

    set({
      user: null,
      token: null,
      isAuthenticated: false,
      loading: false,
      error: null,
    });
  },

  fetchProfile: async () => {
    try {
      const response = await authService.getProfile();

      storage.setUser(response.data.user);

      set({
        user: response.data.user,
      });
    } catch (error) {
      storage.clearAuth();

      set({
        user: null,
        token: null,
        isAuthenticated: false,
        loading: false,
        error: null,
      });
    }
  },

  clearError: () => {
    set({
      error: null,
    });
  },
}));