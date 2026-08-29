import { motion } from "motion/react";
import { projects } from "../data/portfolioData";

function Projects() {
  return (
    <section id="projects" className="bg-white py-24 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-gray-500 dark:text-gray-400">
            Projects
          </p>

          <h2 className="text-4xl font-bold tracking-tight text-gray-950 sm:text-5xl dark:text-white">
            Things I've built
          </h2>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-600 dark:text-gray-300">
            A selection of projects that demonstrate my experience with
            full-stack development, APIs, databases, and structured data
            workflows.
          </p>
        </motion.div>

        {/* Project Cards */}
        <div className="grid gap-8 lg:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.7,
        delay: index * 0.15,
      }}
      whileHover={{ y: -8 }}
      className="group overflow-hidden rounded-3xl border border-gray-200 bg-gray-50 transition-shadow duration-500 hover:shadow-2xl dark:border-gray-800 dark:bg-gray-900"
    >
      {/* Project visual */}
      <div className="relative h-72 overflow-hidden border-b border-gray-200 bg-gray-100 dark:border-gray-800 dark:bg-gray-950">
        <ProjectVisual project={project} />

        {/* Number */}
        <div className="absolute left-6 top-6 flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white/80 text-xs font-bold text-gray-500 backdrop-blur-md dark:border-gray-700 dark:bg-gray-900/80 dark:text-gray-400">
          {String(index + 1).padStart(2, "0")}
        </div>
      </div>

      {/* Content */}
      <div className="p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">
          {project.category}
        </p>

        <h3 className="mt-3 text-2xl font-bold text-gray-950 dark:text-white">
          {project.title}
        </h3>

        <p className="mt-4 leading-7 text-gray-600 dark:text-gray-300">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="mt-6 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-full border border-gray-200 bg-white px-3 py-1.5 text-xs font-medium text-gray-600 dark:border-gray-700 dark:bg-gray-950 dark:text-gray-300"
            >
              {technology}
            </span>
          ))}
        </div>

        {/* Features */}
        <div className="mt-7 border-t border-gray-200 pt-6 dark:border-gray-800">
          <p className="mb-4 text-sm font-semibold text-gray-900 dark:text-white">
            Highlights
          </p>

          <ul className="space-y-3">
            {project.features.slice(0, 4).map((feature) => (
              <li
                key={feature}
                className="flex gap-3 text-sm leading-6 text-gray-600 dark:text-gray-400"
              >
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Links */}
        <div className="mt-8 flex gap-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-gray-950 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:bg-white dark:text-gray-950"
            >
              GitHub ↗
            </a>
          )}

          {project.liveDemo && (
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-gray-300 px-5 py-2.5 text-sm font-semibold text-gray-800 transition-all duration-300 hover:-translate-y-1 dark:border-gray-700 dark:text-gray-200"
            >
              Live Demo ↗
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

function ProjectVisual({ project }) {
  if (project.title === "Notes Application") {
    return (
      <div className="flex h-full items-center justify-center p-8">
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="w-full max-w-md rounded-2xl border border-gray-200 bg-white p-5 shadow-xl dark:border-gray-700 dark:bg-gray-900"
        >
          <div className="mb-5 flex items-center justify-between">
            <div>
              <div className="h-3 w-20 rounded-full bg-gray-200 dark:bg-gray-700" />
              <div className="mt-2 h-2 w-28 rounded-full bg-gray-100 dark:bg-gray-800" />
            </div>

            <div className="h-8 w-8 rounded-full bg-gray-100 dark:bg-gray-800" />
          </div>

          <div className="grid grid-cols-2 gap-3">
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="rounded-xl border border-gray-100 p-4 dark:border-gray-800"
              >
                <div className="h-2 w-16 rounded-full bg-gray-200 dark:bg-gray-700" />
                <div className="mt-3 h-2 w-full rounded-full bg-gray-100 dark:bg-gray-800" />
                <div className="mt-2 h-2 w-3/4 rounded-full bg-gray-100 dark:bg-gray-800" />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="flex h-full items-center justify-center p-8">
      <motion.div
        animate={{ rotate: [0, 2, -2, 0] }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="w-full max-w-md rounded-2xl border border-gray-200 bg-white p-6 shadow-xl dark:border-gray-700 dark:bg-gray-900"
      >
        <div className="grid grid-cols-3 gap-3">
          <div className="rounded-xl bg-gray-100 p-4 dark:bg-gray-800">
            <p className="text-xs text-gray-400">Accounts</p>
            <div className="mt-3 h-2 w-12 rounded-full bg-gray-300 dark:bg-gray-600" />
          </div>

          <div className="rounded-xl bg-gray-100 p-4 dark:bg-gray-800">
            <p className="text-xs text-gray-400">Budget</p>
            <div className="mt-3 h-2 w-12 rounded-full bg-gray-300 dark:bg-gray-600" />
          </div>

          <div className="rounded-xl bg-gray-100 p-4 dark:bg-gray-800">
            <p className="text-xs text-gray-400">Balance</p>
            <div className="mt-3 h-2 w-12 rounded-full bg-gray-300 dark:bg-gray-600" />
          </div>
        </div>

        <div className="mt-4 h-24 rounded-xl border border-dashed border-gray-200 dark:border-gray-700" />
      </motion.div>
    </div>
  );
}

export default Projects;
