"use client";

import { Chivo_Mono } from "next/font/google";
import Image from "next/image";
import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";
import { GitHub } from "@mui/icons-material";
import { LinkedIn } from "@mui/icons-material";
import { Instagram } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import "/public/styles.css";
import "/node_modules/devicon/devicon.min.css";
import { useState } from "react";
import { Close } from "@mui/icons-material";
import { EmailOutlined } from "@mui/icons-material";
import { LocalPhoneOutlined } from "@mui/icons-material";

const chivo = Chivo_Mono({ subsets: ["latin"], weight: "400" });


export default function Home() {

  type project = {
    id: number;
    Name: string;
    Description: string;
    Tech: string;
    Link: string;
  };

  const [showMenu,setShowMenu] = useState(false);

  return (
    <div className="bg-gray-900 min-h-screen w-full " id="home">
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

      <div className="flex flex-col md:flex-row px-10 mt-5 md:py-2 md:mt-12 gap-4 md:gap-0">
        <div className="flex flex-col md:w-4/5 space-y-8mt-4 md:px-10 order-2 md:order-1">
          <div className="flex flex-col space-y-2 ">
              <p className="text-gray-400 text-3xl md:text-5xl  font-bold">Hi! I am</p>
              <p className={`text-white text-5xl md:text-6xl font-bold ${chivo.className}`}>Nitesh Kakkar.</p>
              <p className="text-gray-300 text-xl md:text-3xl font-bold">Student / Web Developer</p>
          </div>
          <div className="order-3 mt-6 md:mt-10">
            <p className={`text-gray-300 text-justify ${chivo.className}`}>Computer Science sophomore at VIT Vellore and frontend 
            enthusiast bridging the gap to full-stack development. 
            Driven by a desire to create engaging user experiences and a hardworking spirit,
            I&apos;m excited to leverage my skills as a Full-Stack Developer.</p>

            <p className={`text-gray-300 text-justify mt-5 ${chivo.className}`}>
              I also find keen interest in Artificial Intelligence and Machine Learning</p>

            <p className="mt-5"><a href="/Nitesh&apos;s Resume.pdf" className={`text-gray-300 font-lg underline mt-10 ${chivo.className}`} target="_blank" rel="noopener noreferrer" >Resume</a> <DownloadRoundedIcon className=" text-white"/></p>

          </div>
        </div>

        <div className="order-1 md:order-2 md:w-1/2 flex flex-col justify-center items-center mt-6 md:mt-0">
          <Image
            src="/images.jpg"
            width={200}
            height={200}
            alt="Picture of the author"
            className="rounded-full md:w-[300px] md:h-[300px]"
          />
          <div className="flex gap-4 mt-6 mb-6 md:mt-10">
            <a href="https://github.com/Nitesh-04" className={`text-gray-300${chivo.className}`} target="_blank" rel="noopener noreferrer" ><GitHub className="md:h-7 md:w-7 text-white"/></a>
            <a href="https://www.linkedin.com/in/nitesh-kakkar/" className={`text-gray-300${chivo.className}`} target="_blank" rel="noopener noreferrer" ><LinkedIn className="md:h-7 md:w-7 text-white"/></a>
            <a href="" className={`text-gray-300${chivo.className}`} target="_blank" rel="noopener noreferrer" ><Instagram className="md:h-7 md:w-7 text-white"/></a>
          </div>
        </div>
        
      </div>

      <div className="mt-20 md:px-10" id="skills">
        <p className="text-white text-4xl font-bold px-10">Technical Skills</p>
        <div className="flex flex-wrap gap-10 mt-10 px-10 pr-2 md:px-10 text-white" >
          <i className="devicon-python-plain text-3xl md:text-5xl"></i>
          <i className="devicon-c-plain text-3xl md:text-5xl"></i>
          <i className="devicon-cplusplus-plain text-3xl md:text-5xl"></i>
          <i className="devicon-java-plain text-3xl md:text-5xl"></i>
          <i className="devicon-html5-plain text-3xl md:text-5xl"></i>
          <i className="devicon-css3-plain text-3xl md:text-5xl"></i>
          <i className="devicon-javascript-plain  text-3xl md:text-5xl"></i>
          <i className="devicon-typescript-plain text-3xl md:text-5xl"></i>
          <i className="devicon-react-original text-3xl md:text-5xl"></i>
          <i className="devicon-nextjs-plain text-3xl md:text-5xl"></i>
          <i className="devicon-tailwindcss-original text-3xl md:text-5xl"></i>
          <i className="devicon-nodejs-plain-wordmark text-3xl md:text-5xl"></i>
          <i className="devicon-express-original-wordmark text-3xl md:text-5xl"></i>
          <i className="devicon-mysql-original text-3xl md:text-5xl"></i>
          <i className="devicon-postgresql-plain text-3xl md:text-5xl"></i>
          <i className="devicon-git-plain text-3xl md:text-5xl"></i>
          <i className="devicon-github-original text-3xl md:text-5xl"></i>
          <i className="devicon-postman-plain text-3xl md:text-5xl"></i>
        </div>
      </div>

      <div id="projects"  className="mt-20 md:px-10">
        <p className="text-white text-4xl font-bold px-10">Projects</p>
        <div className="grid gap-10 md:grid-cols-2 px-10 mt-10">
          {projects.map((project) => (
              <div className="border-2 border-white rounded-xl flex flex-col p-4 hover:bg-slate-800 hover:duration-500 h-fit" key={project.id}>
              <div >
                  <p className="text-white font-bold text-xl">{project.Name}</p>
                  <p className="text-gray-300 mt-4">{project.Description}</p>
                  <div className="flex justify-between items-center mt-8">
                    <p className="text-gray-400">{project.Tech}</p>
                    <a href={project.Link} target="_blank" rel="noopener noreferrer" className="text-white"><GitHub className="md:h-7 md:w-7"/></a>
                  </div>
              </div>
          </div>
          ))}
        </div>
      </div>

      <div className="mt-20 md:px-10 pb-10">
        <p className="text-white text-4xl font-bold px-10">Let&apos;s Connect</p>
        <div className="mt-10 px-10 ">
          <div className={`text-gray-300 ${chivo.className} md:w-4/5 text-justify`}>
            <p>I&apos;m eager to hear from you. Feel free to get in touch via the form below or through my email. 
              Let&apos;s discuss how we can collaborate and achieve your goals together.</p>
              <div className="text-gray-300 mt-5 md:text-lg">
                <p><EmailOutlined/> kakkar.nitesh04@gmail.com</p>
                <p className="mt-2"><LocalPhoneOutlined/> +91 9599586696</p>
              </div>
              <div id="contact" className="flex gap-4 mt-5 ">
                <a href="https://github.com/Nitesh-04" className={`text-gray-300${chivo.className}`} target="_blank" rel="noopener noreferrer" ><GitHub className="md:h-7 md:w-7 text-white"/></a>
                <a href="https://www.linkedin.com/in/nitesh-kakkar/" className={`text-gray-300${chivo.className}`} target="_blank" rel="noopener noreferrer" ><LinkedIn className="md:h-7 md:w-7 text-white"/></a>
                <a href="" className={`text-gray-300${chivo.className}`} target="_blank" rel="noopener noreferrer" ><Instagram className="md:h-7 md:w-7 text-white"/></a>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const projects =
[
  {   
      "id" :1,
      "Name": "Complaint Management System",
      "Description": "A full-stack Complaint Management System to streamline the grievance redressal process.",
      "Tech": "HTML CSS JS ExpressJS PostgreSQL",
      "Link": "https://github.com/Nitesh-04/complaint-portal"
  },
  {   
      "id":2,
      "Name": "NoteCraft",
      "Description": "A frontend for single-page note-taking application. Users can create and delete notes.",
      "Tech": "ReactJS",
      "Link":"https://github.com/Nitesh-04/NoteCraft"
  },
  {
      "id":3,
      "Name":"Simon Game",
      "Description":"A game using requiring users to recall and replicate patterns of colors, enhancing memory and cognitive skills.",
      "Tech":"JavaScript JQuery",
      "Link":"https://github.com/Nitesh-04/simon-game"
  },
  {   
      "id":4,
      "Name":"WeatherML",
      "Description":"A machine learning model that predicts weather based on a trained dataset from previous years.",
      "Tech":"Python Jupyter",
      "Link":"https://github.com/Nitesh-04/ML-weather-prediction"
  }
]