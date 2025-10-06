import React from "react";

const projects = [
  {
    title: "Weather App",
    description: "A weather forecasting app built with React and Tailwind CSS.",
    github: "https://github.com/suraj-kumar/weather-app",
    tech: ["React", "Tailwind CSS", "API"],
  },
  {
    title: "Portfolio Website",
    description: "Personal portfolio showcasing my skills and projects.",
    github: "https://github.com/suraj-kumar/portfolio",
    tech: ["React", "Tailwind CSS", "JavaScript"],
  },
];

const Projects = () => {
  return (
    <div id="projects" className="min-h-screen w-full bg-black py-16 px-4">
      {/* Section Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-wide relative inline-block">
          Projects
          <span className="block w-24 md:w-32 h-1 bg-cyan-400 mx-auto mt-3 rounded"></span>
        </h2>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {projects.map((project) => (
          <div
            key={project.title}
            className="bg-[#111] border border-gray-800 rounded-2xl p-10 md:p-12 min-h-[320px] shadow-lg transform transition duration-300 hover:scale-105 hover:-translate-y-1 hover:shadow-2xl"
          >
            {/* Title */}
            <h3 className="text-3xl font-bold text-white mb-4">
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-gray-400 mb-6 text-lg">{project.description}</p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="text-sm text-cyan-400 bg-gray-800 px-3 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* GitHub Link */}
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 text-base font-medium text-white bg-green-500 rounded-lg hover:bg-green-400 transition"
            >
              View on GitHub →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
