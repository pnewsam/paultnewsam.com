"use client";

import { Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const onClick = () => {
    console.log(theme, "clicked");
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <button
      onClick={onClick}
      className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700"
    >
      {theme === "dark" ? <Moon /> : <Sun />}
    </button>
  );
}
