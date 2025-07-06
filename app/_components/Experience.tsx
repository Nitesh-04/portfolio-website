import { Chivo_Mono } from "next/font/google";

const chivo = Chivo_Mono({ subsets: ["latin"], weight: "500" });

export default function Experience() {
  return (
    <div id="experience" className="relative mt-20 px-4 md:px-10">
      <div className="md:block hidden absolute top-10 left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200 dark:bg-gray-700 z-0"></div>
      <div className="relative z-10">
        <p className="text-foreground dark:text-foreground text-3xl font-bold text-center mb-10 bg-background dark:bg-background px-10 inline-block">
          Experience
        </p>
      </div>
      <div className="space-y-12 max-w-5xl mx-auto">
        {experiences.map((exp, index) => (
          <div
            key={exp.id}
            className={`relative flex items-center md:justify-start ${
              index % 2 === 0 ? "" : "md:flex-row-reverse"
            }`}
          >
            <div
              className={`w-full md:w-5/12 p-6 bg-white dark:bg-background rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300 `}
            >
              <h3 className={`text-xl font-bold text-foreground dark:text-foreground mb-1 ${chivo.className}`}>
                {exp.role}
              </h3>
              <p className={`text-base text-primary dark:text-primary font-semibold mb-2 ${chivo.className}`}>
                {exp.company}
              </p>
              <div className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                <span>{exp.duration}</span> | <span>{exp.location}</span>
              </div>
              <p className="text-sm text-gray-800 dark:text-gray-300 leading-relaxed mb-4">
                {exp.description}
              </p>
              <div
                className={`flex flex-wrap gap-2 ${
                  index % 2 === 0 ? "md:justify-centre" : "justify-start"
                }`}
              >
                {exp.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 text-xs font-medium rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="md:block hidden absolute w-4 h-4 bg-primary rounded-full left-1/2 transform -translate-x-1/2"></div>
          </div>
        ))}
      </div>
    </div>
  );
}

const experiences = [
  {
    id: 1,
    role: "Software Engineer Intern",
    company: "PayU Payments Private Limited",
    duration: "May 2025 - July 2025",
    location: "Gurugram, Haryana • On-site",
    description:
      "Contributed to the Payments Platform team, optimizing infrastructure and improving system stability. Involved in migration of services to kubernetes and testing for enhanced reliability.",
    tech: ["Docker", "Spring Boot", "Kubernetes", "AWS", "GitLab", "Jira", "Confluence"],
  },
  {
    id: 2,
    role: "PRISM R&D Intern",
    company: "Samsung Research Institute Bangalore",
    duration: "October 2024 - April 2025",
    location: "Remote",
    description:
      "Conducted research on voice assistant activation, developing a novel dataset and feature extraction pipeline. Presented findings, establishing a new benchmark.",
    tech: ["Python", "Datasets", "MFCC", "TensorFlow", "Research"],
  },
  {
    id: 3,
    role: "Engineering Team Intern",
    company: "Reserve Bank Innovation Hub",
    duration: "May 2024 - June 2024",
    location: "Remote",
    description:
      "Developed interactive financial calculators using ReactJS, focusing on user engagement and financial literacy. Enhanced existing tools with new visualization features.",
    tech: ["ReactJS", "JavaScript", "Data Visualization", "FinTech", "UI/UX"],
  },
];