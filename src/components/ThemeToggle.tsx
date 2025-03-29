"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") return "dark";
    return window.localStorage.getItem("theme") || "dark";
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const onClick = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    document.documentElement.classList.toggle("dark");
    document.documentElement.classList.toggle("light");
  };

  return (
    <button
      onClick={onClick}
      className="p-2 rounded-md hover:bg-neutral-200 dark:hover:bg-neutral-700 stroke-[1.5px]s"
    >
      {theme === "dark" ? (
        <Moon className="w-5 h-5" />
      ) : (
        <Sun className="w-5 h-5" />
      )}
    </button>
  );
}
