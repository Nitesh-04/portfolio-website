import { Chivo_Mono } from "next/font/google";
import { GitHub } from "@mui/icons-material";

const chivo = Chivo_Mono({ subsets: ["latin"], weight: "400" });
const chivo1 = Chivo_Mono({ subsets: ["latin"], weight: "500" });
const chivo2 = Chivo_Mono({ subsets: ["latin"], weight: "200" });

export default function Projects() {
  return (
    <div id="projects" className="mt-20 px-4 md:px-10">
      <p className="text-gray-900  text-3xl font-bold px-10">
        Projects
      </p>

      <div className="grid gap-6 md:gap-10 grid-cols-1 md:grid-cols-2 mt-8 md:mt-10 md:px-10">
        {projects.map((project) => (
          <div
            className="border border-gray-900 bg-gray-100 
                                 rounded-xl flex flex-col p-4 md:p-6 hover:bg-gray-200 
                                  transition-all duration-300"
            key={project.id}
          >
            <div className="flex justify-between items-center">
              <p
                className={`text-gray-900  font-extrabold text-lg md:text-xl ${chivo1.className}`}
              >
                {project.Name}
              </p>
              <a
                href={project.Link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-900 hover:opacity-80 transition-opacity"
              >
                <GitHub className="h-6 w-6 md:h-7 md:w-7" />
              </a>
            </div>

            <p
              className={`text-gray-900 mt-3 md:mt-4 text-sm md:text-base ${chivo.className} flex-grow`}
            >
              {project.Description}
            </p>

            <div className="flex flex-wrap gap-2 mt-4">
              {project.Tech.map((tech, index) => (
                <span
                  key={index}
                  className="inline-block rounded-full bg-gray-300
                         px-2.5 py-1 text-xs md:text-sm font-medium
                         text-slate-800"
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
      "Built a dynamic platform for managing internship applications, cutting down management time amongst students. Implemented features like application logging, interview dates, automated reminders, and an intuitive dashboard",
    Tech: ["NextJS", "TypeScript", "Prisma", "CockroachDB", "Cron Jobs"],
    Link: "https://github.com/Nitesh-04/track-hub",
  },
  {
    id: 2,
    Name: "BeatWise",
    Description:
      "Integrated a custom ML model, using cosine similarity on audio features to deliver personalized music suggestions. Implemented OAuth-based authentication via the Spotify API to enable track retrieval, personalized recommendations, and playlist creation.",
    Tech: ["FastAPI", "Spotify API", "Scikit-Learn", "Pandas", "NextJS"],
    Link: "https://github.com/Nitesh-04/BeatWise",
  },
  {
    id: 3,
    Name: "Restaurant-Chatbot",
    Description:
      "Developed a restaurant chatbot enabling ordering, cart management, and order tracking. Integrated using a robust backend API built using FastAPI to interact via context and intents designed in Dialogflow.",
    Tech: ["ReactJS", "FastAPI", "Dialogflow", "MySQL","Python"],
    Link: "https://github.com/Nitesh-04/restaurant-chatbot",
  },
  {
    id: 4,
    Name: "ExamCooker",
    Description:
      "Led a team of 20 developing ExamCooker, an exam preparation platform featuring paper uploads, note sharing, and discussion forum. Reviewed and merged pull requests and maintained a 5,500-line codebase that supports a user base of 9000+ students.",
    Tech: [ "NextJS","TypeScript", "Redis", "Google Cloud"],
    Link: "https://github.com/ACM-VIT/ExamCooker-2024",
  },
];
