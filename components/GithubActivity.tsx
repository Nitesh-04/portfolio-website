import { Chivo_Mono } from "next/font/google";
import { GitHub } from "@mui/icons-material";
import GitHubCalendar from "react-github-calendar";

const chivo = Chivo_Mono({ subsets: ["latin"], weight: "400" });

export default function GithubActivity() {

    return (
        <div className="mt-20 md:px-10">
            <p className="text-gray-900 dark:text-white text-4xl font-bold px-10">Github Activity</p>
            <div className="flex justify-center mt-10 md:px-0 px-10">
                <GitHubCalendar
                    username="Nitesh-04"
                    colorScheme="light"/>
            </div>
        </div>
    );
}
