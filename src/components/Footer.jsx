import { motion } from "motion/react";
import { personalInfo } from "../data/portfolioData";

function Footer() {
  const footerLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Certifications", href: "#certifications" },
    { label: "Contact", href: "#contact" },
  ];

  const scrollToSection = (event, href) => {
    event.preventDefault();

    const target = document.querySelector(href);

    if (target) {
      const headerOffset = 80;

      const targetPosition =
        target.getBoundingClientRect().top + window.scrollY - headerOffset;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  };

  const scrollToTop = (event) => {
    event.preventDefault();

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="border-t border-gray-800 bg-gray-950 text-gray-400 dark:bg-black">
      <div className="mx-auto max-w-7xl px-6 py-10 sm:py-12 lg:px-8">
        {/* Main Footer */}
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          {/* Brand */}
          <div className="max-w-sm">
            <a
              href="#home"
              onClick={scrollToTop}
              className="text-xl font-bold tracking-tight text-white"
            >
              OP<span className="text-gray-500">.</span>
            </a>

            <p className="mt-4 text-sm leading-6 text-gray-500">
              {personalInfo.role}
            </p>

            <p className="mt-2 text-sm leading-6 text-gray-600">
              Building practical solutions through software development,
              problem-solving, and continuous learning.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
              Navigate
            </p>

            <div className="mt-4 flex flex-wrap gap-x-6 gap-y-3 md:justify-end">
              {footerLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(event) => scrollToSection(event, link.href)}
                  className="text-sm text-gray-500 transition-colors duration-200 hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 flex flex-col gap-5 border-t border-gray-800 pt-6 sm:mt-12 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} {personalInfo.name}. All rights
            reserved.
          </p>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-medium text-gray-500 transition-colors duration-200 hover:text-white"
            >
              GitHub ↗
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-medium text-gray-500 transition-colors duration-200 hover:text-white"
            >
              LinkedIn ↗
            </a>

            <motion.a
              href="#home"
              onClick={scrollToTop}
              whileHover={{ y: -2 }}
              className="text-xs font-medium text-gray-500 transition-colors duration-200 hover:text-white"
            >
              Back to top ↑
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
