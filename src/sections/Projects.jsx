import { useState } from "react";
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
            Full-stack web applications featuring secure authentication,
            complex business logic, real-time ledgers, background cron tasks,
            and production deployments.
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
  const [imageError, setImageError] = useState(false);

  // Extract a readable hostname for the browser mockup bar
  const getDisplayUrl = (url) => {
    if (!url) return "localhost:3000";
    try {
      return new URL(url).hostname;
    } catch {
      return url.replace("https://", "").replace("/", "");
    }
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{
        duration: 0.7,
        delay: index * 0.15,
      }}
      whileHover={{ y: -6 }}
      className="group flex flex-col overflow-hidden rounded-3xl border border-gray-200 bg-gray-50 shadow-sm transition-all duration-500 hover:shadow-2xl dark:border-gray-800 dark:bg-gray-900"
    >
      {/* Browser Window Mockup Frame */}
      <div className="border-b border-gray-200 bg-gray-100 dark:border-gray-800 dark:bg-gray-950">
        {/* Browser Top Bar */}
        <div className="flex h-11 items-center justify-between px-4 sm:px-6">
          {/* Traffic light dots */}
          <div className="flex items-center gap-1.5">
            <span className="h-3 w-3 rounded-full bg-red-400/80 transition-opacity hover:opacity-100 dark:bg-red-500/70" />
            <span className="h-3 w-3 rounded-full bg-amber-400/80 transition-opacity hover:opacity-100 dark:bg-amber-500/70" />
            <span className="h-3 w-3 rounded-full bg-emerald-400/80 transition-opacity hover:opacity-100 dark:bg-emerald-500/70" />
          </div>

          {/* Browser Address Bar */}
          <div className="flex max-w-[200px] sm:max-w-xs items-center gap-1.5 rounded-full border border-gray-200 bg-white/70 px-3 py-1 text-[11px] text-gray-500 shadow-sm backdrop-blur-md dark:border-gray-800 dark:bg-gray-900/70 dark:text-gray-400 truncate">
            <svg
              className="h-3 w-3 shrink-0 text-emerald-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
            <span className="truncate">{getDisplayUrl(project.liveDemo)}</span>
          </div>

          {/* Project Index Badge */}
          <div className="text-[11px] font-bold text-gray-400 dark:text-gray-500">
            {String(index + 1).padStart(2, "0")}
          </div>
        </div>

        {/* Project Image / Visual Viewport */}
        <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-gray-900">
          {project.image && !imageError ? (
            <a
              href={project.liveDemo || "#"}
              target={project.liveDemo ? "_blank" : undefined}
              rel={project.liveDemo ? "noopener noreferrer" : undefined}
              className="block h-full w-full cursor-pointer overflow-hidden"
            >
              <img
                src={project.image}
                alt={`${project.title} screenshot`}
                onError={() => setImageError(true)}
                className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
              />

              {/* Hover overlay hint */}
              <div className="absolute inset-0 flex items-center justify-center bg-gray-950/40 opacity-0 backdrop-blur-[2px] transition-opacity duration-300 group-hover:opacity-100">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/95 px-4 py-2 text-xs font-semibold text-gray-950 shadow-xl backdrop-blur-md transition-transform duration-300 group-hover:scale-105">
                  Launch Live App ↗
                </span>
              </div>
            </a>
          ) : (
            <ProjectFallbackVisual project={project} />
          )}

          {/* Category Tag Pill */}
          <div className="absolute bottom-4 left-4 z-10 rounded-full border border-gray-200/80 bg-white/90 px-3 py-1 text-[11px] font-semibold text-gray-700 shadow-md backdrop-blur-md dark:border-gray-700/80 dark:bg-gray-950/90 dark:text-gray-300">
            {project.category}
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="flex flex-1 flex-col p-6 sm:p-8">
        <h3 className="text-2xl font-bold tracking-tight text-gray-950 dark:text-white">
          {project.title}
        </h3>

        <p className="mt-4 leading-7 text-gray-600 dark:text-gray-300">
          {project.description}
        </p>

        {/* Technologies Pills */}
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

        {/* Highlights List */}
        <div className="mt-7 border-t border-gray-200 pt-6 dark:border-gray-800">
          <p className="mb-4 text-sm font-semibold text-gray-900 dark:text-white">
            Key Architecture & Features
          </p>

          <ul className="space-y-3">
            {project.features.slice(0, 4).map((feature) => (
              <li
                key={feature}
                className="flex gap-3 text-sm leading-6 text-gray-600 dark:text-gray-400"
              >
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-wrap items-center gap-3 pt-4">
          {project.liveDemo && (
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gray-950 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:bg-white dark:text-gray-950"
            >
              <span>Live Demo</span>
              <span className="transition-transform group-hover:translate-x-0.5">
                ↗
              </span>
            </a>
          )}

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-5 py-2.5 text-sm font-semibold text-gray-800 transition-all duration-300 hover:-translate-y-1 hover:border-gray-950 dark:border-gray-700 dark:bg-gray-950 dark:text-gray-200 dark:hover:border-white"
            >
              {/* GitHub SVG Icon */}
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                />
              </svg>
              <span>GitHub</span>
              <span>↗</span>
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

function ProjectFallbackVisual({ project }) {
  return (
    <div className="flex h-full items-center justify-center p-8 bg-gray-100 dark:bg-gray-950">
      <div className="w-full max-w-xs rounded-xl border border-gray-200 bg-white p-5 shadow-lg dark:border-gray-800 dark:bg-gray-900">
        <div className="flex items-center gap-2 mb-3">
          <div className="h-3 w-3 rounded-full bg-emerald-500" />
          <p className="text-xs font-semibold text-gray-700 dark:text-gray-300 truncate">
            {project.title}
          </p>
        </div>
        <p className="text-[11px] text-gray-500">
          Preview unavailable. Visit live demo to explore full application.
        </p>
      </div>
    </div>
  );
}

export default Projects;
