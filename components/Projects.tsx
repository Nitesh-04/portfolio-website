import { Chivo_Mono } from "next/font/google";
import { GitHub } from "@mui/icons-material";

const chivo = Chivo_Mono({ subsets: ["latin"], weight: "400" });
const chivo1 = Chivo_Mono({ subsets: ["latin"], weight: "500" });

export default function Projects() {
    type project = {
        id: number;
        Name: string;
        Description: string;
        Tech: string;
        Link: string;
    };

    return (
        <div id="projects" className="mt-20 md:px-10">
            <p className="text-gray-900 dark:text-white text-4xl font-bold px-10">Projects</p>
            <div className="grid gap-10 md:grid-cols-2 px-10 mt-10">
                {projects.map((project) => (
                    <div className="border-2 border-gray-900 dark:border-white bg-gray-100 dark:bg-gray-900 rounded-xl flex flex-col p-4 hover:bg-gray-200 hover:dark:bg-slate-800 hover:duration-500" key={project.id}>
                        <p className={`text-gray-900 dark:text-white font-extrabold text-xl ${chivo1.className}`}>{project.Name}</p>
                        <p className={`text-gray-900 dark:text-gray-300 mt-4 ${chivo.className} flex-grow`}>{project.Description}</p>
                        <div className="flex justify-between items-center mt-4"> {/* Reduced margin here */}
                            <p className={`text-gray-900 dark:text-gray-400 ${chivo.className}`}>{project.Tech}</p>
                            <a href={project.Link} target="_blank" rel="noopener noreferrer" className="text-gray-900 dark:text-white">
                                <GitHub className="md:h-7 md:w-7" />
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

const projects = [
    {   
        id: 1,
        Name: "BlogSphere",
        Description: "A blog management platform with intuitive CRUD , user authentication, and efficient database interactions for a seamless experience.",
        Tech: "NextJS-TypeScript-PrismaORM-Supabase-Clerk",
        Link: "https://github.com/Nitesh-04/blogSphere"
    },
    {   
        id: 2,
        Name: "Complaint Management System",
        Description: "A full-stack Complaint Management System for grievance redressal. Users can submit complaints and track their progress.",
        Tech: "HTML-CSS-EJS-ExpressJS-PostgreSQL",
        Link: "https://github.com/Nitesh-04/complaint-portal"
    },
    {   
      id: 3,
      Name: "WeatherML",
      Description: "A machine learning model that predicts weather based on a trained dataset from previous years with 95% accuracy.",
      Tech: "Python-Jupyter Notebook",
      Link: "https://github.com/Nitesh-04/ML-weather-prediction"
    },
    {
        id: 4,
        Name: "Simon Game",
        Description: "A game using requiring users to recall and replicate patterns of colors, enhancing memory and cognitive skills.",
        Tech: "JavaScript-JQuery",
        Link: "https://github.com/Nitesh-04/simon-game"
    },
];
