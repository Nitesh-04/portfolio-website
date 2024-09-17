"use client";

import { Chivo_Mono } from "next/font/google";
import { useState, useEffect } from "react";
import { Close } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "next-themes";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

const chivo = Chivo_Mono({ subsets: ["latin"], weight: "400" });

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    if (!theme) {
      setTheme("light");
    }
  }, [theme, setTheme]);

  function toggleDarkMode() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <div className="flex justify-between items-center p-4 px-10">
      <div className="flex gap-10 text-gray-900 dark:text-white text-3xl font-bold">
        <p>NK.</p>
      </div>
      <div className={`md:flex space-x-10 hidden ${chivo.className}`}>
        <button onClick={toggleDarkMode} className="self-center">
          {resolvedTheme === "dark" ? (
            <DarkModeIcon className="text-white" />
          ) : (
            <LightModeIcon className="text-black" />
          )}
        </button>

        <a
          href="#home"
          className="transition-all duration-500 text-gray-900 dark:text-white hover:text-gray-400"
        >
          Home
        </a>
        <a
          href="#skills"
          className="transition-all duration-500 text-gray-900 dark:text-white hover:text-gray-400"
        >
          Skills
        </a>
        <a
          href="#projects"
          className="transition-all duration-500 text-gray-900 dark:text-white hover:text-gray-400"
        >
          Projects
        </a>
        <a
          href="#contact"
          className="transition-all duration-500 text-gray-900 dark:text-white hover:text-gray-400"
        >
          Contact Me
        </a>
      </div>

      <div className="md:hidden flex gap-5">
        <button onClick={toggleDarkMode} className="self-center">
          {resolvedTheme === "dark" ? (
            <DarkModeIcon className="text-white" />
          ) : (
            <LightModeIcon className="text-black" />
          )}
        </button>
        <button type="button" onClick={() => setShowMenu(!showMenu)}>
          {showMenu ? (
            ""
          ) : (
            <MenuIcon className="text-gray-900 dark:text-white text-3xl" />
          )}
        </button>
      </div>

      {showMenu && (
        <div className="md:hidden fixed top-0 right-0 h-full w-[40vw] text-gray-900 dark:text-white bg-gray-200 dark:bg-black bg-opacity-80 z-40 transition-all duration-500">
          <div className="flex flex-col p-5 text-center mt-5 gap-10">
            <button type="button" onClick={() => setShowMenu(false)}>
              <Close className="self-end" />
            </button>
            <a
              href="#home"
              onClick={() => setShowMenu(false)}
              className="transition-all duration-500 text-lg"
            >
              Home
            </a>
            <a
              href="#skills"
              onClick={() => setShowMenu(false)}
              className="transition-all duration-500 text-lg"
            >
              Skills
            </a>
            <a
              href="#projects"
              onClick={() => setShowMenu(false)}
              className="transition-all duration-500 text-lg"
            >
              Projects
            </a>
            <a
              href="#contact"
              onClick={() => setShowMenu(false)}
              className="transition-all duration-500 text-lg"
            >
              Contact Me
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
