"use client"

import About from "@/app/_components/About";
import Connect from "@/app/_components/Connect";
import Header from "@/app/_components/Header";
import Projects from "@/app/_components/Projects";
import Skills from "@/app/_components/Skills";
import "/public/styles.css";
import GithubActivity from "@/app/_components/GithubActivity";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Experience from "./_components/Experience";

export default function Home() 
{
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { theme } = useTheme();

  useEffect(() => {

    const updateMousePosition = (e: MouseEvent): void => {
      setMousePosition({ x: e.clientX, y: e.clientY + window.scrollY});
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);


    return (
      <div className="relative bg-background dark:bg-background min-h-screen w-full" id="home">
          <div
            className="pointer-events-none absolute inset-0 opacity-50 transition-opacity duration-300"
            style={{
              background: theme === "dark"
                ? `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(245, 220, 171, 0.1), transparent 80%)`
                : undefined,
            }}
          />

          <Header/>
          <About/>
          <Skills/>
          <Experience/>
          <Projects/>
          <Connect/>
      </div>
    );
}
