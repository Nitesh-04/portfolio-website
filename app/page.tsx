import About from "@/components/About";
import Connect from "@/components/Connect";
import Header from "@/components/Header";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import "/public/styles.css";

export default function Home() 
{
    return (
      <div className="bg-gray-900 min-h-screen w-full " id="home">
          <Header/>
          <About/>
          <Skills/>
          <Projects/>
          <Connect/>
      </div>
    );
}
