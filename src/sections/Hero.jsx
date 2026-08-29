import { motion } from "motion/react";
import { personalInfo } from "../data/portfolioData";

function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-white dark:bg-gray-950"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-1/4 h-72 w-72 rounded-full bg-gray-200/40 blur-3xl dark:bg-gray-800/30" />

        <div className="absolute bottom-1/4 right-1/4 h-72 w-72 rounded-full bg-gray-200/40 blur-3xl dark:bg-gray-800/30" />
      </div>

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-16 px-6 py-32 lg:grid-cols-2 lg:px-8">
        {/* Left Content */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-gray-500 dark:text-gray-400"
          >
            {personalInfo.role}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="max-w-3xl text-5xl font-bold tracking-tight text-gray-950 sm:text-6xl lg:text-7xl dark:text-white"
          >
            Hi, I'm{" "}
            <span className="text-gray-500 dark:text-gray-400">
              Om Prakash.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 max-w-xl text-lg leading-8 text-gray-600 dark:text-gray-300"
          >
            {personalInfo.introduction}
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              className="rounded-full bg-gray-950 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:bg-white dark:text-gray-950"
            >
              View My Work
            </a>

            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-800 transition-all duration-300 hover:-translate-y-1 hover:border-gray-950 dark:border-gray-700 dark:text-gray-200 dark:hover:border-white"
            >
              GitHub
            </a>
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-12 flex flex-wrap gap-3"
          >
            {["React", "Node.js", "MongoDB", "Java", "REST APIs"].map(
              (technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-gray-200 bg-gray-50 px-4 py-2 text-xs font-medium text-gray-600 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-400"
                >
                  {technology}
                </span>
              ),
            )}
          </motion.div>
        </div>

        {/* Right Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden h-[500px] items-center justify-center lg:flex"
        >
          {/* Main card */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative z-10 w-80 rounded-3xl border border-gray-200 bg-white/80 p-8 shadow-2xl backdrop-blur-xl dark:border-gray-800 dark:bg-gray-900/80"
          >
            <div className="mb-8 flex items-center gap-3">
              <div className="h-3 w-3 rounded-full bg-gray-400" />
              <div className="h-3 w-3 rounded-full bg-gray-300 dark:bg-gray-600" />
              <div className="h-3 w-3 rounded-full bg-gray-200 dark:bg-gray-700" />
            </div>

            <div className="space-y-4 font-mono text-sm">
              <p className="text-gray-400">
                <span className="text-gray-900 dark:text-white">const</span>{" "}
                developer = {"{"}
              </p>

              <p className="pl-4 text-gray-500">
                name:{" "}
                <span className="text-gray-900 dark:text-gray-200">
                  "Om Prakash"
                </span>
              </p>

              <p className="pl-4 text-gray-500">
                role:{" "}
                <span className="text-gray-900 dark:text-gray-200">
                  "Full Stack Developer"
                </span>
              </p>

              <p className="pl-4 text-gray-500">
                passion:{" "}
                <span className="text-gray-900 dark:text-gray-200">
                  "Building"
                </span>
              </p>

              <p className="text-gray-400">{"}"}</p>
            </div>
          </motion.div>

          {/* Decorative circles */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute h-96 w-96 rounded-full border border-dashed border-gray-300 dark:border-gray-700"
          />

          <div className="absolute h-72 w-72 rounded-full border border-gray-200 dark:border-gray-800" />
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
