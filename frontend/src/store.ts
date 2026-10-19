import { create } from "zustand";
import type { ThemeVariableType } from "./type";

interface ThemeStoreType {
  theme: ThemeVariableType;
  actions: {
    setTheme: (value: ThemeVariableType) => void;
  };
}

const useThemeStore = create<ThemeStoreType>()((set) => {
  return {
    theme: (localStorage.getItem("theme") as ThemeVariableType) || "system",
    actions: {
      setTheme: (value) => {
        return set(() => {
          return { theme: value };
        });
      },
    },
  };
});

const useTheme = () => {
  return useThemeStore((state) => state.theme);
};
const useThemeControls = () => {
  return useThemeStore((state) => state.actions);
};

export { useTheme, useThemeControls };
