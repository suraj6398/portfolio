import React from "react";

const projects = [
  {
    title: "Employee Management System",
    description: "A React-based Employee Management System that enables admins to assign and manage tasks efficiently. Employees can track, update, and organize tasks through role-based dashboards with task status management.",
    github: "https://github.com/suraj6398/Employee-Management.git",
    tech: ["React.js", "JavaScript", "Tailwind CSS "],
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
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-wide relative inline-block">
          Projects
          <span className="block w-24 md:w-32 h-1 bg-cyan-400 mx-auto mt-3 rounded"></span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {projects.map((project) => (
          <div
            key={project.title}
            className="bg-[#111] border border-gray-800 rounded-2xl p-10 md:p-12 min-h-[320px] shadow-lg transform transition duration-300 hover:scale-105 hover:-translate-y-1 hover:shadow-2xl"
          >
            <h3 className="text-3xl font-bold text-white mb-4">
              {project.title}
            </h3>

            <p className="text-gray-400 mb-6 text-lg">{project.description}</p>

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
