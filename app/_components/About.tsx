
import { Chivo_Mono } from "next/font/google";
import Image from "next/image";
import { GitHub } from "@mui/icons-material";
import { LinkedIn } from "@mui/icons-material";

const chivo = Chivo_Mono({ subsets: ["latin"], weight: "400" });

export default function About(){
    return (
        <div className="flex flex-col md:flex-row px-10 mt-5 md:py-2 md:mt-12 gap-4 md:gap-0">
            <div className="flex flex-col md:w-4/5 space-y-8mt-4 md:px-10 order-2 md:order-1">
            <div className="flex flex-col space-y-2 ">
                <p className="text-slate-700 text-3xl md:text-5xl dark:text-muted-foreground font-bold">Hi! I am</p>
                <p className={`text-primary dark:text-primary text-5xl md:text-6xl font-bold ${chivo.className}`}>Nitesh Kakkar.</p>
                <p className="text-slate-700 dark:text-muted-foreground text-xl md:text-3xl font-bold">Student / Web Developer</p>
            </div>
            <div className="order-3 mt-6 md:mt-10">
                <p className={`text-gray-700 dark:text-gray-300 text-justify ${chivo.className}`}>I am a Final year student at VIT Vellore with a
                    strong foundation in web development and a growing interest in AI/ML.
                    Equipped with valuable skills in fullstack development and driven by a desire 
                    to create engaging user experiences combined with my hardworking spirit, I bring a
                    valuable skill set and dedication to any team environment.
                </p>
            </div>
            </div>

            <div className="order-1 md:order-2 md:w-1/2 flex flex-col justify-center items-center mt-6 md:mt-0">
            <Image
                src="/image.svg"
                width={400}
                height={400}
                alt="Picture of the author"
                className="rounded-full md:w-[400px] md:h-[300px]"
                loading="lazy"
            />
            <div className="flex gap-4 mt-6 mb-6 md:mt-10 text-gray-900 ">
                <a href="https://github.com/Nitesh-04" className={`text-gray-300${chivo.className}`} target="_blank" rel="noopener noreferrer" ><GitHub className="md:h-7 md:w-7 dark:text-primary "/></a>
                <a href="https://www.linkedin.com/in/nitesh-kakkar/" className={`text-gray-300${chivo.className}`} target="_blank" rel="noopener noreferrer" ><LinkedIn className="md:h-7 md:w-7 dark:text-primary"/></a>
            </div>
            </div>
        </div>
    )
}
