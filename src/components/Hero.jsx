import { MapPin } from "lucide-react";
import Downlaod from "./DownloadResume";

const Hero = () => {
  const technologies = ["JavaScript", "ReactJS", "Git", "GitHub"];

  return (
    <div className="min-h-screen bg-linear-to-br pt-24 pb-16">
      <div className="container mx-auto px-6">
        <div className="mt-30 max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 text-gray-400 mb-8">
            <MapPin size={20} />
            <span className="font-semibold text-xl">Karachi, Pakistan</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-semibold mb-4 md:leading-24">
            I'm Hassan Khan Web Developer
          </h1>
          <p
            style={{ color: "var(--text-color)" }}
            className="mb-8 mx-auto text-xl font-semibold"
          >
            Aspiring frontend developer looking for hands-on experience while building and learning through real projects.
          </p>
          <div className="flex items-center justify-center gap-4 mb-16">
            <button className="px-8 py-3 bg-gray-200 text-gray-900 rounded font-medium hover:bg-gray-300 hover:scale-x-95 transition-colors">
              <Downlaod />
            </button>
            <button
              className="px-8 py-3 border bg-black border-gray-600 text-white rounded font-medium hover:bg-gray-700 hover:scale-x-95 hover:text-white transition-colors"
              id="projects"
            >
              See my Projects
            </button>
          </div>

          <div className="mt-34">
            <h1
              style={{ color: "var(--text-color)" }}
              className="text-xl italic tracking-wider mb-8"
            >
              Technologies I am familiar with
            </h1>
          </div>

          <div className="flex flex-wrap gap-6 justify-center max-w-7xl">
            {technologies.map((tech, index) => (
              <button
                key={index}
                className="px-4 py-2 rounded bg-neutral-950 text-gray-300 hover:border-gray-400 hover:text-white transition-colors duration-200 text-xl font-medium"
              >
                {tech}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
