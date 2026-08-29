import { personalInfo } from "../data/portfolioData";

function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-gray-950 py-8 text-gray-400 dark:bg-black">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 text-sm sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <p>
          © {new Date().getFullYear()} {personalInfo.name}
        </p>

        <p>Built with React & Tailwind CSS</p>
      </div>
    </footer>
  );
}

export default Footer;
