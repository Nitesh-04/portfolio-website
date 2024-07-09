import About from "@/components/About";
import Connect from "@/components/Connect";
import Header from "@/components/Header";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import "/public/styles.css";
import { ThemeProvider } from "next-themes";

export default function Home() 
{
    return (
      <ThemeProvider attribute="class">
        <div className="bg-gray-100 dark:bg-gray-900 min-h-screen w-full " id="home">
            <Header/>
            <About/>
            <Skills/>
            <Projects/>
            <Connect/>
        </div>  
      </ThemeProvider>
    );
}
