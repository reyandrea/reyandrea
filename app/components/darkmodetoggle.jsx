'use client';
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
      className="rounded-lg p-2 transition-transform duration-300 transform hover:scale-110 focus:outline-none"
    >
      <svg
        className="svg-rounded-square"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 10 10"
        width="30"
        height="30"
        preserveAspectRatio="xMidYMid meet"
      >
        <rect
          x="1"
          y="1"
          width="8"
          height="8"
          rx="1.5"
          ry="1.5"
          className={   `svg-fill-primary-square ${
            isDarkMode ? "svg-dark-mode-square" : "svg-light-mode-square"
          }`}
        />
      </svg>
    </button>
  );
}
