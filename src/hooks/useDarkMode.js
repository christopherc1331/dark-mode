import { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage.js";

export const useDarkMode = () => {
  const [darkMode, setDarkMode] = useLocalStorage("basic");

  useEffect(() => {
    darkMode
      ? document.body.classList.add("dark-mode")
      : document.body.classList.remove("dark-mode");
  }, [darkMode]);

  return [darkMode, setDarkMode];
};
