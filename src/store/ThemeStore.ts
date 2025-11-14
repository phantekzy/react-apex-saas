/* Import section */
import { create } from "zustand";
import { persist } from "zustand/middleware";
/* Type section */
type Theme = "light" | "dark";
/* Interface of ThemeStore */
interface ThemeStore {
  theme: Theme;
  toggleTheme: () => void;
}
/* Keeping the theme section in the local storage and do the toggling */
export const useThemeStore = create<ThemeStore>()(
  persist(
    (set, get) => ({
      theme:
        typeof window !== "undefined" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light",
      toggleTheme: () => {
        const newTheme: Theme = get().theme === "light" ? "dark" : "light";
        if (typeof document !== "undefined") {
          document.documentElement.classList.toggle(
            "dark",
            newTheme === "dark",
          );
        }

        set({ theme: newTheme });
      },
    }),
    {
      name: "theme",
      onRehydrateStorage: () => (state) => {
        if (state?.theme === "dark") {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      },
    },
  ),
);
