import { Chivo_Mono } from "next/font/google";

const chivo = Chivo_Mono({ subsets: ["latin"], weight: "400" });
const chivoBold = Chivo_Mono({ subsets: ["latin"], weight: "500" });


export default function Experience() {
  return (

      <div id="projects" className="mt-20 px-4 md:px-10">
        <p className="text-foreground dark:text-foreground text-3xl font-bold px-10">
          Experience
        </p>


        <div className="space-y-8 max-w-6xl mx-auto mt-8 md:mt-10 md:px-10">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="group relative bg-white dark:bg-background rounded-2xl p-6 md:px-8 md:py-5 border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300 hover:shadow-xl"
            >

              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div className="flex-1">
                  <h3 className={`text-lg md:text-xl font-bold text-foreground dark:text-foreground mb-1 ${chivoBold.className}`}>
                    {exp.role}
                  </h3>
                  <p className={`text-base text-primary dark:text-primary font-semibold ${chivo.className}`}>
                    {exp.company}
                  </p>
                </div>
              </div>


              <div className="flex flex-col sm:flex-row gap-2 md:gap-6 mb-3 text-sm text-gray-600 dark:text-gray-400">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 002 2z" />
                  </svg>
                  <span className={chivo.className}>{exp.duration}</span>
                </div>

                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className={chivo.className}>{exp.location}</span>
                </div>
              </div>


              <p className={`text-sm md:text-base text-gray-800 dark:text-gray-300 leading-relaxed mb-4 ${chivo.className}`}>
                {exp.description}
              </p>


              <div className="flex flex-wrap gap-2">
                {exp.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1.5 text-xs md:text-sm font-medium rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>


              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary/50 to-primary/20 rounded-l-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
  
  );
}

const experiences = [
  {
    "id": 1,
    "role": "Software Engineer Intern",
    "company": "PayU Payments Private Limited",
    "duration": "May 2025 - July 2025",
    "location": "Gurugram, Haryana • On-site",
    "description": "Contributed to the Payments Platform team, optimizing infrastructure and improving system stability. Involved in migration of services to kubernetes and testing for enhanced reliability.",
    "tech": ["Docker", "Spring Boot", "Kubernetes", "AWS", "GitLab", "Jira", "Confluence"]
  },
  {
    "id": 2,
    "role": "PRISM R&D Intern",
    "company": "Samsung Research Institute Bangalore",
    "duration": "October 2024 - April 2025",
    "location": "Remote",
    "description": "Conducted research on voice assistant activation, developing a novel dataset and feature extraction pipeline. Presented findings, establishing a new benchmark.",
    "tech": ["Python", "Datasets", "MFCC", "TensorFlow", "Research"]
  },
  {
    "id": 3,
    "role": "Engineering Team Intern",
    "company": "Reserve Bank Innovation Hub",
    "duration": "May 2024 - June 2024",
    "location": "Remote",
    "description": "Developed interactive financial calculators using ReactJS, focusing on user engagement and financial literacy. Enhanced existing tools with new visualization features.",
    "tech": ["ReactJS", "JavaScript", "Data Visualization", "FinTech", "UI/UX"]
  }
];