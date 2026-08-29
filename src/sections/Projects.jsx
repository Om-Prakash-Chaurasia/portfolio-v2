import { motion } from "motion/react";
import { projects } from "../data/portfolioData";

function Projects() {
  return (
    <section id="projects" className="bg-white py-20 sm:py-24 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-12 sm:mb-16"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-gray-500 dark:text-gray-400">
            Projects
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-gray-950 sm:text-5xl dark:text-white">
            Things I've built
          </h2>

          <p className="mt-4 max-w-2xl text-base leading-7 text-gray-600 sm:mt-5 sm:text-lg sm:leading-8 dark:text-gray-300">
            A selection of projects that demonstrate my experience with
            full-stack development, APIs, databases, and structured data
            workflows.
          </p>
        </motion.div>

        {/* Project Cards */}
        <div className="grid gap-6 sm:gap-8 lg:grid-cols-2">
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
      viewport={{ once: false, amount: 0.2 }}
      transition={{
        duration: 0.7,
        delay: index * 0.15,
      }}
      whileHover={{ y: -8 }}
      className="group overflow-hidden rounded-3xl border border-gray-200 bg-gray-50 shadow-sm transition-shadow duration-500 hover:shadow-2xl dark:border-gray-800 dark:bg-gray-900"
    >
      {/* Project Visual */}
      <div className="relative h-64 overflow-hidden sm:h-72 border-b border-gray-200 bg-gray-100 dark:border-gray-800 dark:bg-gray-950">
        <ProjectVisual project={project} />

        {/* Project Number */}
        <div className="absolute left-6 top-6 flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white/80 text-xs font-bold text-gray-500 shadow-sm backdrop-blur-md dark:border-gray-700 dark:bg-gray-900/80 dark:text-gray-400">
          {String(index + 1).padStart(2, "0")}
        </div>

        {/* Category */}
        <div className="absolute bottom-5 left-6 rounded-full border border-gray-200 bg-white/80 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-widest text-gray-500 backdrop-blur-md dark:border-gray-700 dark:bg-gray-900/80 dark:text-gray-400">
          {project.category}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 sm:p-8">
        <h3 className="text-2xl font-bold tracking-tight text-gray-950 dark:text-white">
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
              className="rounded-full border border-gray-200 bg-white px-3 py-1.5 text-xs font-medium text-gray-600 transition-all duration-200 group-hover:border-gray-300 dark:border-gray-700 dark:bg-gray-950 dark:text-gray-300 dark:group-hover:border-gray-600"
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
        {(project.github || project.liveDemo) && (
          <div className="mt-8 flex flex-wrap gap-3">
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
                className="rounded-full border border-gray-300 px-5 py-2.5 text-sm font-semibold text-gray-800 transition-all duration-300 hover:-translate-y-1 hover:border-gray-950 dark:border-gray-700 dark:text-gray-200 dark:hover:border-white"
              >
                Live Demo ↗
              </a>
            )}
          </div>
        )}
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
          className="w-full max-w-md rounded-2xl border border-gray-200 bg-white p-5 shadow-xl transition-transform duration-500 group-hover:scale-[1.02] dark:border-gray-700 dark:bg-gray-900"
        >
          {/* Browser header */}
          <div className="mb-5 flex items-center justify-between">
            <div className="flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-gray-300 dark:bg-gray-700" />
              <span className="h-2.5 w-2.5 rounded-full bg-gray-200 dark:bg-gray-800" />
              <span className="h-2.5 w-2.5 rounded-full bg-gray-100 dark:bg-gray-900" />
            </div>

            <div className="h-2 w-20 rounded-full bg-gray-100 dark:bg-gray-800" />
          </div>

          {/* App header */}
          <div className="mb-5 flex items-center justify-between">
            <div>
              <div className="h-3 w-20 rounded-full bg-gray-200 dark:bg-gray-700" />
              <div className="mt-2 h-2 w-28 rounded-full bg-gray-100 dark:bg-gray-800" />
            </div>

            <div className="h-8 w-8 rounded-full bg-gray-100 dark:bg-gray-800" />
          </div>

          {/* Notes */}
          <div className="grid grid-cols-2 gap-3">
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="rounded-xl border border-gray-100 p-4 transition-transform duration-300 group-hover:-translate-y-1 dark:border-gray-800"
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
        className="w-full max-w-md rounded-2xl border border-gray-200 bg-white p-6 shadow-xl transition-transform duration-500 group-hover:scale-[1.02] dark:border-gray-700 dark:bg-gray-900"
      >
        {/* Summary cards */}
        <div className="grid grid-cols-3 gap-3">
          <SummaryCard label="Accounts" />
          <SummaryCard label="Budget" />
          <SummaryCard label="Balance" />
        </div>

        {/* Chart */}
        <div className="mt-4 rounded-xl border border-gray-200 p-4 dark:border-gray-700">
          <div className="mb-4 flex items-center justify-between">
            <div className="h-2 w-20 rounded-full bg-gray-200 dark:bg-gray-700" />

            <div className="h-2 w-10 rounded-full bg-gray-100 dark:bg-gray-800" />
          </div>

          <div className="flex h-16 items-end gap-2">
            {[30, 50, 40, 70, 55, 80, 65].map((height, index) => (
              <div
                key={index}
                className="flex-1 rounded-t bg-gray-200 transition-all duration-300 group-hover:bg-gray-300 dark:bg-gray-700 dark:group-hover:bg-gray-600"
                style={{ height: `${height}%` }}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function SummaryCard({ label }) {
  return (
    <div className="rounded-xl bg-gray-100 p-4 dark:bg-gray-800">
      <p className="text-xs text-gray-400">{label}</p>

      <div className="mt-3 h-2 w-12 rounded-full bg-gray-300 dark:bg-gray-600" />
    </div>
  );
}

export default Projects;
