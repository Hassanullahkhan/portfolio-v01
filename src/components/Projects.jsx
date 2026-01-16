import { ArrowRight } from "lucide-react";
import { Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      name: "MSCSC",
      description:
        "A vibrant ReactJS website for MSCSC, centralizing science, math, and space exploration. The platform features engaging events, adaptive member profiles, and a discussion board that supports community and fosters learning.",
    },
    {
      name: "Weather Compass",
      description:
        "Real-time weather tracking application with location-based forecasts.",
    },
    {
      name: "Astro Fest 1.0",
      description: "Event management platform for astronomy enthusiasts.",
    },
    {
      name: "Colorize",
      description: "Color palette generator and design tool for developers.",
    },
  ];

  return (
    <section id="projects" className="w-8/12 mx-auto py-24 bg-black">
      <div className="container mx-auto">
        <h2 className="text-5xl font-bold text-white mb-12">Proof of Work</h2>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group p-8 bg-black rounded-lg border border-gray-700 hover:border-gray-600 transition-all cursor-pointer"
            >
              <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-blue-400 transition-colors">
                {project.name}
              </h3>
              <p className="text-gray-400 mb-4 leading-relaxed">
                {project.description}
              </p>
              <button className="flex items-center justify-center gap-2 px-12 py-2 mt-2 bg-white text-gray-900 rounded font-medium hover:bg-gray-100 transition-all active:scale-x-95">
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
