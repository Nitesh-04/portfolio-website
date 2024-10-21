import { Chivo_Mono } from "next/font/google";
import { GitHub } from "@mui/icons-material";
import GitHubCalendar from "react-github-calendar";

const chivo = Chivo_Mono({ subsets: ["latin"], weight: "400" });

export default function GithubActivity() {

    return (
        <div className="mt-20 md:px-10">
            <p className="text-gray-900 dark:text-white text-4xl font-bold px-10">Github Activity<a href="https://github.com/Nitesh-04" className={`ml-4 text-gray-300${chivo.className}`} target="_blank" rel="noopener noreferrer" ><GitHub className="h-8 w-8 md:h-9 md:w-9 mb-1"/></a></p>
            <div className="flex justify-center mt-10 md:px-0 px-10">
                <GitHubCalendar
                    username="Nitesh-04"
                    colorScheme="light"/>
            </div>
        </div>
    );
}
