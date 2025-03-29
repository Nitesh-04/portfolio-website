
import { Chivo_Mono } from "next/font/google";
import { EmailOutlined, LocalPhoneOutlined } from "@mui/icons-material";
import { GitHub, LinkedIn, Instagram } from "@mui/icons-material";

const chivo = Chivo_Mono({ subsets: ["latin"], weight: "400" });


export default function Connect (){
    return (
        <div className="mt-20 md:px-10 pb-10">
            <p className={`text-gray-900  text-3xl font-bold px-10`}>Let&apos;s Connect</p>
            <div className="mt-10 px-10 ">
                <div className={`text-gray-900  ${chivo.className} md:w-4/5 text-justify`}>
                    <p>I&apos;m eager to hear from you. Feel free to get in touch through my email or my socials. 
                    Let&apos;s discuss how we can collaborate and achieve your goals together.</p>
                    <div className="text-gray-9000 mt-5 md:text-lg">
                        <p><EmailOutlined/> kakkar.nitesh04@gmail.com</p>
                        <p className="mt-2"><LocalPhoneOutlined/> +91 9599586696</p>
                    </div>
                    <div id="contact" className="flex gap-4 mt-5 text-gray-900">
                        <a href="https://github.com/Nitesh-04" className={`text-gray-300${chivo.className}`} target="_blank" rel="noopener noreferrer" ><GitHub className="md:h-7 md:w-7"/></a>
                        <a href="https://www.linkedin.com/in/nitesh-kakkar/" className={`text-gray-300${chivo.className}`} target="_blank" rel="noopener noreferrer" ><LinkedIn className="md:h-7 md:w-7 "/></a>
                    </div>
                </div>
            </div>
      </div>
    )
}