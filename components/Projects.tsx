import { Chivo_Mono } from "next/font/google";
import { GitHub } from "@mui/icons-material";

const chivo = Chivo_Mono({ subsets: ["latin"], weight: "400" });
const chivo1 = Chivo_Mono({ subsets: ["latin"], weight: "500" });
const chivo2 = Chivo_Mono({ subsets: ["latin"], weight: "200" });

export default function Projects() {
  return (
    <div id="projects" className="mt-20 px-4 md:px-10">
      <p className="text-gray-900 dark:text-white text-3xl md:text-4xl font-bold ml-5">
        Projects
      </p>

      <div className="grid gap-6 md:gap-10 grid-cols-1 md:grid-cols-2 mt-8 md:mt-10">
        {projects.map((project) => (
          <div
            className="border-2 border-gray-900 dark:border-white bg-gray-100 dark:bg-gray-900 
                                 rounded-xl flex flex-col p-4 md:p-6 hover:bg-gray-200 
                                 hover:dark:bg-slate-800 transition-all duration-300"
            key={project.id}
          >
            <div className="flex justify-between items-center">
              <p
                className={`text-gray-900 dark:text-white font-extrabold text-lg md:text-xl ${chivo1.className}`}
              >
                {project.Name}
              </p>
              <a
                href={project.Link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-900 dark:text-white hover:opacity-80 transition-opacity"
              >
                <GitHub className="h-6 w-6 md:h-7 md:w-7" />
              </a>
            </div>

            <p
              className={`text-gray-900 dark:text-gray-300 mt-3 md:mt-4 text-sm md:text-base ${chivo.className} flex-grow`}
            >
              {project.Description}
            </p>

            <div className="flex flex-wrap gap-2 mt-4">
              {project.Tech.map((tech, index) => (
                <span
                  key={index}
                  className="inline-block rounded-full bg-teal-300 dark:bg-teal-400/10 
                         px-2.5 py-1 text-xs md:text-sm font-medium
                         text-slate-800 dark:text-teal-300"
                >
                  {tech}
                </span>
              ))}
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
    Description:
      "A blog management platform with intuitive CRUD , user authentication, and efficient database interactions for a seamless experience.",
    Tech: ["NextJS", "TypeScript", "PrismaORM", "Supabase", "Clerk"],
    Link: "https://github.com/Nitesh-04/blogSphere",
  },
  {
    id: 2,
    Name: "Complaint Management System",
    Description:
      "A full-stack Complaint Management System for grievance redressal. Users can submit complaints and track their progress.",
    Tech: ["HTML", "CSS", "EJS", "ExpressJS", "PostgreSQL"],
    Link: "https://github.com/Nitesh-04/complaint-portal",
  },
  {
    id: 3,
    Name: "WeatherML",
    Description:
      "A machine learning model that predicts weather based on a trained dataset from previous years with 95% accuracy.",
    Tech: ["Python", "Jupyter", "Notebook"],
    Link: "https://github.com/Nitesh-04/ML-weather-prediction",
  },
  {
    id: 4,
    Name: "Simon Game",
    Description:
      "A game using requiring users to recall and replicate patterns of colors, enhancing memory and cognitive skills.",
    Tech: ["JavaScript", "JQuery"],
    Link: "https://github.com/Nitesh-04/simon-game",
  },
];