import { Chivo_Mono } from "next/font/google";
import {ArrowOutward, GitHub } from "@mui/icons-material";

const chivo = Chivo_Mono({ subsets: ["latin"], weight: "400" });
const chivo1 = Chivo_Mono({ subsets: ["latin"], weight: "500" });

export default function Projects() {
  return (
    <div id="projects" className="mt-20 px-4 md:px-10">
      <p className="text-foreground dark:text-foreground text-3xl font-bold px-10">
        Projects
      </p>

      <div className="grid gap-6 md:gap-10 grid-cols-1 md:grid-cols-2 mt-8 md:mt-10 md:px-10">
        {projects.map((project) => (
          <div
            className="group relative bg-white dark:bg-background rounded-2xl p-6 md:p-8 border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300 hover:shadow-xl"
            key={project.id}
          >
            <div className="flex justify-between items-center">
              <p
                className={`text-primary dark:text-primary font-extrabold text-xl md:text-xl ${chivo1.className}`}
              >
                {project.Name}
              </p>
              <div className="flex gap-5">
                <a
                  href={project.Link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-900 dark:text-gray-200 hover:opacity-80 transition-opacity"
                >
                  <GitHub className="h-6 w-6 md:h-7 md:w-7" />
                </a>
                {project.RedirectLink ? 
                  <a
                    href={project.RedirectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-900 dark:text-gray-200 hover:opacity-80 transition-opacity"
                  >
                    <ArrowOutward className="h-6 w-6 md:h-7 md:w-7" />
                  </a>
                 : null}
              </div>
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
                    className="px-3 py-1.5 text-xs md:text-sm font-medium rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-b from-primary/50 to-primary/20 rounded-l-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        ))}
      </div>
    </div>
  );
}

const projects = [
  {
    "id": 1,
    "Name": "TrackHub",
    "Description": "Developed a full-stack internship tracking platform to centralize application logging, interview dates, and status updates. Features customizable, automated notifications for efficient management.",
    "Tech": ["NextJS", "TypeScript", "Prisma", "CockroachDB", "Cron Jobs"],
    "Link": "https://github.com/Nitesh-04/track-hub",
    "RedirectLink": "https://trackhub.niteshkakkar.tech/"
  },
  {
    "id": 2,
    "Name": "BeatWise",
    "Description": "Created a personalized music recommendation system leveraging a custom ML model with cosine similarity on audio features. Integrates Spotify API for authentication, track retrieval, and playlist creation.",
    "Tech": ["FastAPI", "Spotify API", "Scikit-Learn", "Pandas", "NextJS"],
    "Link": "https://github.com/Nitesh-04/BeatWise",
    "RedirectLink": "https://beat-wise.vercel.app/"
  },
  {
    "id": 3,
    "Name": "Locked-In",
    "Description": "Architected a scalable backend for collaborative study tracking, supporting group creation, member roles, and session logging. Designed with a clean, modular MVC-inspired structure for maintainability.",
    "Tech": ["GoLang", "Go Fiber", "Gorm", "Postgresql", "Postman"],
    "Link": "https://github.com/Nitesh-04/locked-in"
  },
  {
    "id": 4,
    "Name": "ExamCooker",
    "Description": "Led a 20-member team in developing an exam preparation platform with paper uploads, note sharing, and a discussion forum. Managed a large codebase and supported a user base of over 11,000 students.",
    "Tech": ["NextJS", "TypeScript", "Redis", "Google Cloud"],
    "Link": "https://github.com/ACM-VIT/ExamCooker-2024",
    "RedirectLink": "https://examcooker.acmvit.com/"
  }
];
