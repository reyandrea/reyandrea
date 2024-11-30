'use client'
import { useEffect, useState } from "react";

export default function DarkModeToggle() {
  // State to track if dark mode is active
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Retrieve the saved theme from localStorage or default to light mode
    const savedTheme = localStorage.getItem("theme") || "light";
    const isDark = savedTheme === "dark";

    // Apply the theme to the document root
    document.documentElement.classList.toggle("dark", isDark);
    setIsDarkMode(isDark);
  }, []);

  const toggleDarkMode = () => {
    const newTheme = isDarkMode ? "light" : "dark";

    // Save the new theme to localStorage
    localStorage.setItem("theme", newTheme);

    // Toggle the `dark` class on the document's root element
    document.documentElement.classList.toggle("dark", newTheme === "dark");

    // Update the state
    setIsDarkMode(!isDarkMode);
  };

  return (
    <button
      onClick={toggleDarkMode}
      className=" rounded-lg transition-colors duration-300"
    >
      {isDarkMode ? "🌙" : "☀️"}
    </button>
  );
}
