import React from "react";

const sample = [
  {
    title: "Portfolio Website",
    desc: "A responsive personal portfolio built with React and Tailwind CSS to showcase projects and skills.",
    tech: ["React", "Tailwind CSS", "Vite"],
    live: "https://myportfolio.com",
    github: "https://github.com/username/portfolio",
  },
  {
    title: "Task Manager App",
    desc: "A full-stack task management app with user authentication and CRUD functionality.",
    tech: ["Node.js", "Express", "MongoDB", "React"],
    live: "#",
    github: "https://github.com/username/task-manager",
  },
  {
    title: "Weather Dashboard",
    desc: "A weather dashboard fetching data from a public API with dynamic search and geolocation.",
    tech: ["React", "OpenWeather API", "Tailwind CSS"],
    live: "#",
    github: "https://github.com/username/weather-dashboard",
  },
  {
    title: "E-commerce Store",
    desc: "A demo e-commerce store with product catalog, shopping cart, and checkout simulation.",
    tech: ["React", "Redux", "Firebase"],
    live: "#",
    github: "https://github.com/username/ecommerce-store",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-3xl font-bold mb-10 text-center text-gray-800 dark:text-gray-100">Projects</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {sample.map((p) => (
            <article
              key={p.title}
              className="rounded-xl p-6 bg-white dark:bg-[#0f172a] border border-gray-100 dark:border-gray-800 shadow-md hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 transition-all duration-300"
            >
              <h4 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-100">{p.title}</h4>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{p.desc}</p>
              <div className="mb-4 flex flex-wrap gap-2">
                {p.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a
                  href={p.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 bg-indigo-600 dark:bg-indigo-500 text-white dark:text-gray-900 font-medium rounded-full hover:bg-indigo-500 dark:hover:bg-indigo-400 transition-colors"
                >
                  Live Demo
                </a>
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-medium rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                >
                  GitHub
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}