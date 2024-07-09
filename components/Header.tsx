"use client";

import { Chivo_Mono } from "next/font/google";
import { useState } from "react";
import { Close } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";

const chivo = Chivo_Mono({ subsets: ["latin"], weight: "400" });

export default function Header()
{
    const [showMenu,setShowMenu] = useState(false);


    return (
        <div className="flex justify-between items-center p-4 px-10">
            <div className="flex text-white text-3xl font-bold">
            <p>NK.</p>
            </div>
            <div className={`space-x-10 text-white hidden md:block ${chivo.className}`}>
            <a href="#home" className="transition-all duration-500 hover:text-gray-400">Home</a>
            <a href="#skills" className="transition-all duration-500 hover:text-gray-400">Skills</a>
            <a href="#projects" className="transition-all duration-500 hover:text-gray-400">Projects</a>
            <a href="#contact" className="transition-all duration-500 hover:text-gray-400">Contact Me</a>
            </div>

            <div className="md:hidden">
            <button type="button" onClick={ (e) => {showMenu ? setShowMenu(false) : setShowMenu(true)}}>{showMenu ? "" : <MenuIcon className="text-white text-3xl"/>}</button>
            </div>

            {showMenu && (
            <div className="md:hidden fixed top-0 right-0 h-full w-[40vw] text-white bg-black bg-opacity-80 z-40 transition-all duration-500">
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