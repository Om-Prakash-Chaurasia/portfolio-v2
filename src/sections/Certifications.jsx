import { motion } from "motion/react";
import { certifications, education } from "../data/portfolioData";

function Certifications() {
  return (
    <section
      id="certifications"
      className="bg-gray-50 py-20 sm:py-24 dark:bg-gray-900"
    >
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
            Education & Certifications
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-gray-950 sm:text-5xl dark:text-white">
            Learning never stops
          </h2>

          <p className="mt-4 max-w-2xl text-base leading-7 text-gray-600 sm:mt-5 sm:text-lg sm:leading-8 dark:text-gray-300">
            My academic foundation and continuous learning journey across
            software development and technology.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -5 }}
            className="rounded-3xl border border-gray-200 bg-white p-6 sm:p-8 shadow-sm transition-shadow duration-300 hover:shadow-xl dark:border-gray-800 dark:bg-gray-950"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">
              Education
            </p>

            <div className="mt-8">
              {/* Icon */}
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gray-100 text-lg dark:bg-gray-900">
                🎓
              </div>

              <h3 className="mt-6 text-xl font-bold leading-7 text-gray-950 dark:text-white">
                {education.degree}
              </h3>

              <p className="mt-3 leading-6 text-gray-600 dark:text-gray-300">
                {education.institution}
              </p>

              <div className="mt-6 border-t border-gray-100 pt-5 dark:border-gray-800">
                <p className="text-sm text-gray-400">{education.period}</p>

                <p className="mt-2 text-sm font-semibold text-gray-700 dark:text-gray-200">
                  {education.grade}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Certifications */}
          <div className="lg:col-span-2">
            <div className="grid gap-4 sm:grid-cols-2">
              {certifications.map((certification, index) => (
                <motion.div
                  key={certification.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  whileHover={{ y: -5 }}
                  className="group rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:shadow-lg dark:border-gray-800 dark:bg-gray-950"
                >
                  {/* Header */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="min-w-0">
                      <p className="text-xs font-semibold uppercase tracking-widest text-gray-400">
                        Certification
                      </p>

                      <h3 className="mt-3 font-semibold leading-6 text-gray-900 dark:text-white">
                        {certification.title}
                      </h3>

                      <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                        {certification.issuer}
                      </p>
                    </div>

                    {/* Decorative indicator */}
                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-gray-300 transition-transform duration-300 group-hover:scale-150 dark:bg-gray-700" />
                  </div>

                  {/* Verification */}
                  {certification.verificationUrl && (
                    <div className="mt-6 border-t border-gray-100 pt-5 dark:border-gray-800">
                      <a
                        href={certification.verificationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-gray-700 transition-colors duration-200 hover:text-gray-950 dark:text-gray-300 dark:hover:text-white"
                      >
                        Verify Certificate
                        <span className="transition-transform duration-200 group-hover:translate-x-1">
                          ↗
                        </span>
                      </a>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Certifications;
