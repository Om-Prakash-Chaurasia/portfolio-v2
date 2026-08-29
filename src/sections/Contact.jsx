import { motion } from "motion/react";
import { contactInfo } from "../data/portfolioData";

function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-gray-950 py-20 text-white sm:py-24 dark:bg-black"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-1/4 h-72 w-72 rounded-full bg-white/5 blur-3xl" />

        <div className="absolute bottom-1/4 right-1/4 h-72 w-72 rounded-full bg-white/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-5xl px-6 text-center lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-gray-400">
            Contact
          </p>

          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            {contactInfo.heading}
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-400 sm:mt-6 sm:text-lg sm:leading-8">
            {contactInfo.description}
          </p>

          {/* Email */}
          <motion.a
            href={`mailto:${contactInfo.email}`}
            whileHover={{ scale: 1.03 }}
            className="mt-8 inline-flex items-center rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-gray-950 shadow-xl transition-shadow duration-300 hover:shadow-2xl"
          >
            Get in Touch
            <span className="ml-2">↗</span>
          </motion.a>

          {/* Social links */}
          <div className="mt-8 flex flex-wrap justify-center gap-3 sm:mt-10 sm:gap-4">
            <SocialLink href={contactInfo.github} label="GitHub" />

            <SocialLink href={contactInfo.linkedin} label="LinkedIn" />

            <SocialLink href={`mailto:${contactInfo.email}`} label="Email" />
          </div>

          {/* Closing message */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-16 text-sm text-gray-500"
          >
            Thanks for taking the time to explore my portfolio.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

function SocialLink({ href, label }) {
  return (
    <motion.a
      href={href}
      target={href.startsWith("mailto:") ? undefined : "_blank"}
      rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
      whileHover={{ y: -4 }}
      className="rounded-full border border-gray-700 px-5 py-2.5 text-sm font-medium text-gray-300 transition-colors duration-300 hover:border-gray-400 hover:text-white"
    >
      {label}
    </motion.a>
  );
}

export default Contact;
