
import { GitHub } from "@mui/icons-material";

export default function Projects()
{
    type project = {
        id: number;
        Name: string;
        Description: string;
        Tech: string;
        Link: string;
      };

    return (
        <div id="projects"  className="mt-20 md:px-10">
        <p className="text-white text-4xl font-bold px-10">Projects</p>
        <div className="grid gap-10 md:grid-cols-2 px-10 mt-10">
          {projects.map((project) => (
              <div className="border-2 border-white rounded-xl flex flex-col p-4 hover:bg-slate-800 hover:duration-500 h-fit" key={project.id}>
              <div >
                  <p className="text-white font-bold text-xl">{project.Name}</p>
                  <p className="text-gray-300 mt-4">{project.Description}</p>
                  <div className="flex justify-between items-center mt-8">
                    <p className="text-gray-400">{project.Tech}</p>
                    <a href={project.Link} target="_blank" rel="noopener noreferrer" className="text-white"><GitHub className="md:h-7 md:w-7"/></a>
                  </div>
              </div>
          </div>
          ))}
        </div>
      </div>
    )
}

const projects =
[
  {   
      "id" :1,
      "Name": "Complaint Management System",
      "Description": "A full-stack Complaint Management System to streamline the grievance redressal process.",
      "Tech": "HTML CSS JS ExpressJS PostgreSQL",
      "Link": "https://github.com/Nitesh-04/complaint-portal"
  },
  {   
      "id":2,
      "Name": "NoteCraft",
      "Description": "A frontend for single-page note-taking application. Users can create and delete notes.",
      "Tech": "ReactJS",
      "Link":"https://github.com/Nitesh-04/NoteCraft"
  },
  {
      "id":3,
      "Name":"Simon Game",
      "Description":"A game using requiring users to recall and replicate patterns of colors, enhancing memory and cognitive skills.",
      "Tech":"JavaScript JQuery",
      "Link":"https://github.com/Nitesh-04/simon-game"
  },
  {   
      "id":4,
      "Name":"WeatherML",
      "Description":"A machine learning model that predicts weather based on a trained dataset from previous years.",
      "Tech":"Python Jupyter",
      "Link":"https://github.com/Nitesh-04/ML-weather-prediction"
  }
]
