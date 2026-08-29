import { useTheme } from "../context/ThemeContext";

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      className="relative flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-md dark:border-gray-800 dark:bg-gray-900 dark:text-gray-200"
    >
      <span className="text-lg">{theme === "light" ? "☾" : "☀"}</span>
    </button>
  );
}

export default ThemeToggle;
