import { motion } from "motion/react";
import { experience } from "../data/portfolioData";

function Experience() {
  return (
    <section id="experience" className="bg-gray-50 py-24 dark:bg-gray-900">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-gray-500 dark:text-gray-400">
            Experience
          </p>

          <h2 className="text-4xl font-bold tracking-tight text-gray-950 sm:text-5xl dark:text-white">
            Where I've worked
          </h2>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-600 dark:text-gray-300">
            A journey across software development, technical mentoring,
            documentation, and professional experiences.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-3 top-0 h-full w-px bg-gray-200 dark:bg-gray-800 md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-12">
            {experience.map((item, index) => {
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={`${item.company}-${item.role}`}
                  initial={{
                    opacity: 0,
                    x: isLeft ? -40 : 40,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.2,
                  }}
                  transition={{
                    duration: 0.6,
                  }}
                  className="relative md:grid md:grid-cols-2 md:gap-12"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-3 top-8 z-10 h-3 w-3 -translate-x-1/2 rounded-full bg-gray-950 ring-4 ring-gray-50 dark:bg-white dark:ring-gray-900 md:left-1/2" />

                  {/* Desktop left */}
                  <div
                    className={`hidden md:block ${isLeft ? "text-right" : ""}`}
                  >
                    {isLeft && (
                      <TimelineDate period={item.period} type={item.type} />
                    )}
                  </div>

                  {/* Desktop right */}
                  <div className="hidden md:block">
                    {!isLeft && (
                      <TimelineDate period={item.period} type={item.type} />
                    )}
                  </div>

                  {/* Mobile + content */}
                  <div className="ml-8 md:col-span-2 md:ml-0">
                    <div
                      className={`md:grid md:grid-cols-2 md:gap-12 ${
                        isLeft ? "" : ""
                      }`}
                    >
                      <div
                        className={`${
                          isLeft
                            ? "md:col-start-1 md:row-start-1"
                            : "md:col-start-2 md:row-start-1"
                        }`}
                      >
                        <div className="rounded-3xl border border-gray-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-gray-800 dark:bg-gray-950">
                          {/* Mobile date */}
                          <div className="mb-5 md:hidden">
                            <TimelineDate
                              period={item.period}
                              type={item.type}
                            />
                          </div>

                          <p className="text-sm font-medium text-gray-400">
                            {item.company}
                          </p>

                          <h3 className="mt-1 text-xl font-bold text-gray-950 dark:text-white">
                            {item.role}
                          </h3>

                          <p className="mt-4 text-sm leading-6 text-gray-600 dark:text-gray-300">
                            {item.description}
                          </p>

                          <ul className="mt-5 space-y-3">
                            {item.responsibilities.map((responsibility) => (
                              <li
                                key={responsibility}
                                className="flex gap-3 text-sm leading-6 text-gray-600 dark:text-gray-400"
                              >
                                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400" />

                                <span>{responsibility}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineDate({ period, type }) {
  return (
    <div>
      <p className="text-sm font-semibold text-gray-900 dark:text-white">
        {period}
      </p>

      <p className="mt-1 text-xs uppercase tracking-widest text-gray-400">
        {type}
      </p>
    </div>
  );
}

export default Experience;
