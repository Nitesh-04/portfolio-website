import { Chivo_Mono } from "next/font/google";
import Image from "next/image";
import DownloadRoundedIcon from '@mui/icons-material/DownloadRounded';
import { GitHub } from "@mui/icons-material";
import { LinkedIn } from "@mui/icons-material";
import { Instagram } from "@mui/icons-material";
import "/public/styles.css";

const chivo = Chivo_Mono({ subsets: ['latin'], weight: '400' });

export default function Home() {
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
      </div>

      <div className="flex flex-col md:flex-row px-10 md:py-2 md:mt-12 gap-4 md:gap-0">
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
            I'm excited to leverage my skills as a Full-Stack Developer.</p>

            <p className={`text-gray-300 text-justify mt-5 ${chivo.className}`}>
              I also find keen interest in Artificial Intelligence and Machine Learning</p>

            <p className="mt-5"><a href="/Nitesh's Resume.pdf" className={`text-gray-300 font-lg underline mt-10 ${chivo.className}`} target="_blank" rel="noopener noreferrer" >Download my resume</a> <DownloadRoundedIcon className="text-white"/></p>

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
            <a href="https://github.com/Nitesh-04" className={`text-gray-300${chivo.className}`} target="_blank" rel="noopener noreferrer" ><GitHub className="text-white"/></a>
            <a href="https://www.linkedin.com/in/nitesh-kakkar/" className={`text-gray-300${chivo.className}`} target="_blank" rel="noopener noreferrer" ><LinkedIn className="text-white"/></a>
            <a href="" className={`text-gray-300${chivo.className}`} target="_blank" rel="noopener noreferrer" ><Instagram className="text-white"/></a>
          </div>
        </div>
        
      </div>

      <div className="mt-20 px-10" id="skills">
        <p className="text-white text-4xl font-bold px-10">Technical Skills</p>
        <div>
        </div>
      </div>
    </div>
  );
}