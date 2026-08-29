import { motion } from "motion/react";
import { certifications, education } from "../data/portfolioData";

function Certifications() {
  return (
    <section id="certifications" className="bg-gray-50 py-24 dark:bg-gray-900">
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
            Education & Certifications
          </p>

          <h2 className="text-4xl font-bold tracking-tight text-gray-950 sm:text-5xl dark:text-white">
            Learning never stops
          </h2>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-600 dark:text-gray-300">
            My academic foundation and continuous learning journey across
            software development and technology.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm dark:border-gray-800 dark:bg-gray-950"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">
              Education
            </p>

            <div className="mt-8">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gray-100 text-lg dark:bg-gray-900">
                🎓
              </div>

              <h3 className="text-xl font-bold text-gray-950 dark:text-white">
                {education.degree}
              </h3>

              <p className="mt-3 text-gray-600 dark:text-gray-300">
                {education.institution}
              </p>

              <div className="mt-6 flex items-center justify-between border-t border-gray-100 pt-5 text-sm dark:border-gray-800">
                <span className="text-gray-400">{education.period}</span>

                <span className="font-semibold text-gray-700 dark:text-gray-200">
                  {education.grade}
                </span>
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
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  whileHover={{ y: -5 }}
                  className="rounded-2xl border border-gray-200 bg-white p-6 transition-shadow duration-300 hover:shadow-lg dark:border-gray-800 dark:bg-gray-950"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-widest text-gray-400">
                        Certification
                      </p>

                      <h3 className="mt-3 font-semibold text-gray-900 dark:text-white">
                        {certification.title}
                      </h3>

                      <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                        {certification.issuer}
                      </p>
                    </div>

                    <span className="text-gray-300 dark:text-gray-700">↗</span>
                  </div>
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
