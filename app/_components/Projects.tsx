import { Chivo_Mono } from "next/font/google";
import { GitHub } from "@mui/icons-material";

const chivo = Chivo_Mono({ subsets: ["latin"], weight: "400" });
const chivo1 = Chivo_Mono({ subsets: ["latin"], weight: "500" });
const chivo2 = Chivo_Mono({ subsets: ["latin"], weight: "200" });

export default function Projects() {
  return (
    <div id="projects" className="mt-20 px-4 md:px-10">
      <p className="text-gray-900 dark:text-white text-3xl font-bold px-10">
        Projects
      </p>

      <div className="grid gap-6 md:gap-10 grid-cols-1 md:grid-cols-2 mt-8 md:mt-10 md:px-10">
        {projects.map((project) => (
          <div
            className="border border-gray-900 dark:border-zinc-100 bg-gray-100 dark:bg-gray-900 
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
                  className="inline-block rounded-full bg-gray-200 dark:bg-teal-400/10 
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
    Name: "TrackHub",
    Description:
      "Built a dynamic platform for managing internship applications, cutting down management time amongst students. Implemented features like automated reminders and an intuitive dashboard.",
    Tech: ["NextJS", "TypeScript", "Prisma", "CockroachDB", "Cron Jobs"],
    Link: "https://github.com/Nitesh-04/track-hub",
  },
  {
    id: 2,
    Name: "ExamCooker",
    Description:
      "Led a team of 20 individuals in development of ExamCooker, an exam preparation platform, managing a 5,500-line codebase, and supporting a user base of 6000+ students.",
    Tech: ["TypeScript", "Redis", "Google Cloud", "NextJS"],
    Link: "https://github.com/ACM-VIT/ExamCooker-2024",
  },
  {
    id: 3,
    Name: "BlogSphere",
    Description:
      "A blog management platform with intuitive CRUD , user authentication, and efficient database interactions for a seamless experience.",
    Tech: ["NextJS", "TypeScript", "PrismaORM", "Supabase", "Clerk"],
    Link: "https://github.com/Nitesh-04/BlogSphere",
  },
  {
    id: 4,
    Name: "Portfolio",
    Description:
      "A self coded porfolio website to display my projects, skills and connect with people. Inspired by Brittany Chiang's portfolio.",
    Tech: ["TypeScript", "TailwindCSS", "NextJS", "Vercel"],
    Link: "https://github.com/Nitesh-04/portfolio-v2",
  },
];