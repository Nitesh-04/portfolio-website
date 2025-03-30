import About from "@/app/_components/About";
import Connect from "@/app/_components/Connect";
import Header from "@/app/_components/Header";
import Projects from "@/app/_components/Projects";
import Skills from "@/app/_components/Skills";
import "/public/styles.css";
import GithubActivity from "@/app/_components/GithubActivity";

export default function Home() 
{
    return (
      <div className="bg-gray-100 min-h-screen w-full" id="home">
          <Header/>
          <About/>
          <Skills/>
          <Projects/>
          <GithubActivity/>
          <Connect/>
      </div>
    );
}
