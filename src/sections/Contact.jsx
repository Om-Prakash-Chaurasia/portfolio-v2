import { motion } from "motion/react";
import { contactInfo } from "../data/portfolioData";

function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-gray-950 py-24 text-white dark:bg-black"
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
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-gray-400">
            Contact
          </p>

          <h2 className="text-4xl font-bold tracking-tight sm:text-6xl">
            {contactInfo.heading}
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-400">
            {contactInfo.description}
          </p>

          {/* Email */}
          <motion.a
            href={`mailto:${contactInfo.email}`}
            whileHover={{ scale: 1.03 }}
            className="mt-10 inline-flex items-center rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-gray-950 shadow-xl transition-shadow duration-300 hover:shadow-2xl"
          >
            Get in Touch
            <span className="ml-2">↗</span>
          </motion.a>

          {/* Social links */}
          <div className="mt-10 flex justify-center gap-4">
            <SocialLink href={contactInfo.github} label="GitHub" />

            <SocialLink href={contactInfo.linkedin} label="LinkedIn" />

            <SocialLink href={`mailto:${contactInfo.email}`} label="Email" />
          </div>
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
