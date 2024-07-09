"use client";

import { Chivo_Mono } from "next/font/google";
import { useState} from "react";
import { Close } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { useTheme } from "next-themes";

const chivo = Chivo_Mono({ subsets: ["latin"], weight: "400" });

export default function Header()
{
    const [showMenu,setShowMenu] = useState(false);
    const {theme,setTheme} = useTheme();

    function toggleDarkMode() {
        setTheme(theme === "dark" ? "light" : "dark");
      };

    return (
        <div className="flex justify-between items-center p-4 px-10">   
            <div className="flex gap-10 text-gray-900 dark:text-white text-3xl font-bold">
                <p>NK.</p>
            </div>
            <div className={`md:flex space-x-10 hidden ${chivo.className}`}>

                <DarkModeSwitch className="self-center mr-5 fill-gray-900 text-gray-900 dark:text-white dark:fill-white" checked={theme==="dark"} onChange={toggleDarkMode} size={24} />

                <a href="#home" className="transition-all duration-500 text-gray-900 dark:text-white hover:text-gray-400">Home</a>
                <a href="#skills" className="transition-all duration-500 text-gray-900 dark:text-white hover:text-gray-400">Skills</a>
                <a href="#projects" className="transition-all duration-500 text-gray-900 dark:text-white hover:text-gray-400">Projects</a>
                <a href="#contact" className="transition-all duration-500 text-gray-900 dark:text-white hover:text-gray-400">Contact Me</a>
            </div>

            <div className="md:hidden flex gap-5">
                <DarkModeSwitch className={`text-gray-900 dark:text-white self-center mr-5 ${showMenu ? 'hidden' : 'block'}`} checked={theme==="dark"} onChange={toggleDarkMode} size={24} />
                <button type="button" onClick={ (e) => {showMenu ? setShowMenu(false) : setShowMenu(true)}}>{showMenu ? "" : <MenuIcon className="text-gray-900 dark:text-white text-3xl"/>}</button>
            </div>

            {showMenu && (
                <div className="md:hidden fixed top-0 right-0 h-full w-[40vw] text-gray-900 dark:text-white bg-gray-200 dark:bg-black bg-opacity-80 z-40 transition-all duration-500">
                    <div className="flex flex-col p-5 text-center mt-5 gap-10">
                        <button type="button" onClick={(e) => setShowMenu(false)}><Close className="self-end"/></button>
                        <a href="#home" onClick={(e) => setShowMenu(false)} className="transition-all duration-500 text-lg">Home</a>
                        <a href="#skills" onClick={(e) => setShowMenu(false)} className="transition-all duration-500 text-lg ">Skills</a>
                        <a href="#projects" onClick={(e) => setShowMenu(false)} className="transition-all duration-500 text-lg">Projects</a>
                        <a href="#contact" onClick={(e) => setShowMenu(false)} className="transition-all duration-500 text-lg">Contact Me</a>
                    </div>
                </div>

            )}
        </div>
    );
}