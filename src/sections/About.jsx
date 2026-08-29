import { motion } from "motion/react";
import { aboutInfo } from "../data/portfolioData";

function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-gray-50 py-20 sm:py-24 dark:bg-gray-900"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-12 sm:mb-16"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-gray-500 dark:text-gray-400">
            About Me
          </p>

          <h2 className="max-w-2xl text-3xl font-bold tracking-tight text-gray-950 sm:text-5xl dark:text-white">
            {aboutInfo.heading}
          </h2>
        </motion.div>

        <div className="grid gap-16 lg:grid-cols-2 lg:items-start">
          {/* About text */}
          <div className="space-y-6">
            {aboutInfo.paragraphs.map((paragraph, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                className="text-base leading-7 text-gray-600 sm:text-lg sm:leading-8 dark:text-gray-300"
              >
                {paragraph}
              </motion.p>
            ))}
          </div>

          {/* Journey */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8 dark:border-gray-800 dark:bg-gray-950">
              <p className="mb-8 text-sm font-semibold uppercase tracking-widest text-gray-400">
                My Journey
              </p>

              <div className="relative ml-3 border-l border-gray-200 dark:border-gray-800">
                {[
                  "Aeronautical Engineering",
                  "Technical Documentation",
                  "Web Development",
                  "Junior Developer",
                  "Full Stack Development",
                  "Subject Matter Expert",
                ].map((stage, index) => (
                  <motion.div
                    key={stage}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1,
                    }}
                    className="relative pb-7 pl-8 last:pb-0"
                  >
                    <span className="absolute -left-[5px] top-1 h-2.5 w-2.5 rounded-full bg-gray-950 ring-4 ring-white dark:bg-white dark:ring-gray-950" />

                    <p className="font-medium text-gray-900 dark:text-white">
                      {stage}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Strengths */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mt-12 sm:mt-16"
        >
          <p className="mb-6 text-sm font-semibold uppercase tracking-widest text-gray-400">
            Core Strengths
          </p>

          <div className="flex flex-wrap gap-3">
            {aboutInfo.strengths.map((strength) => (
              <span
                key={strength}
                className="rounded-full border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-700 transition-all duration-300 hover:-translate-y-1 hover:shadow-md dark:border-gray-800 dark:bg-gray-950 dark:text-gray-300"
              >
                {strength}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
