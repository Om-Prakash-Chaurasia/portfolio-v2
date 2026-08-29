import { motion } from "motion/react";
import { skills } from "../data/portfolioData";

function Skills() {
  return (
    <section id="skills" className="bg-white py-20 sm:py-24 dark:bg-gray-950">
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
            Skills
          </p>

          <h2 className="max-w-2xl text-3xl font-bold tracking-tight text-gray-950 sm:text-5xl dark:text-white">
            Technologies I work with
          </h2>

          <p className="mt-4 max-w-2xl text-base leading-7 text-gray-600 sm:mt-5 sm:text-lg sm:leading-8 dark:text-gray-300">
            A collection of technologies and computer science fundamentals I use
            across development, problem-solving, and technical mentoring.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              whileHover={{ y: -6 }}
              className="group rounded-3xl border border-gray-200 bg-gray-50 p-5 sm:p-6 transition-shadow duration-300 hover:shadow-xl dark:border-gray-800 dark:bg-gray-900"
            >
              {/* Category number */}
              <div className="mb-6 flex items-center justify-between">
                <span className="text-xs font-semibold tracking-widest text-gray-400">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="h-2 w-2 rounded-full bg-gray-300 transition-all duration-300 group-hover:scale-150 dark:bg-gray-700" />
              </div>

              <h3 className="mb-5 text-lg font-semibold text-gray-900 dark:text-white">
                {skillGroup.category}
              </h3>

              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-gray-200 bg-white px-3 py-1.5 text-xs font-medium text-gray-600 transition-colors duration-200 group-hover:border-gray-300 dark:border-gray-700 dark:bg-gray-950 dark:text-gray-300 dark:group-hover:border-gray-600"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
