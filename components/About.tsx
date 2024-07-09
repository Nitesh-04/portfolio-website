
import { Chivo_Mono } from "next/font/google";
import Image from "next/image";
import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";
import { GitHub } from "@mui/icons-material";
import { LinkedIn } from "@mui/icons-material";
import { Instagram } from "@mui/icons-material";

const chivo = Chivo_Mono({ subsets: ["latin"], weight: "400" });

export default function About(){
    return (
        <div className="flex flex-col md:flex-row px-10 mt-5 md:py-2 md:mt-12 gap-4 md:gap-0">
            <div className="flex flex-col md:w-4/5 space-y-8mt-4 md:px-10 order-2 md:order-1">
            <div className="flex flex-col space-y-2 ">
                <p className="text-gray-400 text-3xl md:text-5xl  font-bold">Hi! I am</p>
                <p className={`text-white text-5xl md:text-6xl font-bold ${chivo.className}`}>Nitesh Kakkar.</p>
                <p className="text-gray-300 text-xl md:text-3xl font-bold">Student / Web Developer</p>
            </div>
            <div className="order-3 mt-6 md:mt-10">
                <p className={`text-gray-300 text-justify ${chivo.className}`}>I am a Pre-Final year student at VIT Vellore with a
                    strong foundation in web development and a growing interest in AI/ML.
                    Equipped with valuable skills in fullstack development and driven by a desire 
                    to create engaging user experiences and a hardworking spirit, I bring a
                    valuable skill set and dedication to any team environment.
                </p>

                <p className="mt-10 text-lg"><a href="/Nitesh&apos;s Resume for website.pdf" className={`text-gray-300 font-lg underline mt-10 ${chivo.className}`} target="_blank" rel="noopener noreferrer" >Resume</a> <DownloadRoundedIcon className=" text-white"/></p>

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
    )
}