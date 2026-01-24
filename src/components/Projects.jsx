import { Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      name: "Learning Management System",
      description:
        "A learning management system built for students and working professionals who are focused on gaining practical skills, advancing their careers, and staying competitive in a fast-changing job market.",
    },
    {
      name: "Weather App",
      description:
        "Real-time weather tracking application location based updates. React is applied for FrontEnd and OpenWeatherAPI for real-time weather data.",
    },
    {
      name: "Landing Page",
      description: "A Simple Landing Page built with React and TailwindCSS.",
    },
   
  ];

  return (
    <section id="projects" className="w-8/12 mx-auto py-24">
      <div className="container mx-auto">
        <h2
          style={{
            color: "var(--text-color)",
          }}
          className="text-5xl font-bold  mb-12"
        >
          Projects I've Built
        </h2>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group p-8 rounded-lg border border-gray-700 hover:border-gray-600 transition-all cursor-pointer"
            >
              <h3
                style={{
                  color: "var(--text-color)",
                }}
                className="text-2xl font-semibold text-white mb-4 group-hover:text-blue-400 transition-colors"
              >
                {project.name}
              </h3>
              <p
                style={{
                  color: "var(--text-color)",
                }}
                className="text-gray-400 mb-4 leading-relaxed"
              >
                {project.description}
              </p>
              <button
                style={{
                  backgroundColor: "var(--text-color)",
                  color: "var(--background-color)",
                }}
                className="flex items-center justify-center gap-2 px-12 py-2 mt-2  dark:bg-gray-200 text-gray-900 rounded font-medium hover:bg-gray-100 transition-all active:scale-x-95"
              >
                <Github size={24} />
                View on Github
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
