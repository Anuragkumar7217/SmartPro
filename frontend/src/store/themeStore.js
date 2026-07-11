import { create } from "zustand";

export const useThemeStore = create((set) => ({
  mode: localStorage.getItem("theme-mode") || "light",
  toggleTheme: () =>
    set((state) => {
      const newMode = state.mode === "light" ? "dark" : "light";
      localStorage.setItem("theme-mode", newMode);
      return { mode: newMode };
    }),
}));
