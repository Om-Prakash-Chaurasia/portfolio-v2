export const personalInfo = {
  name: "Om Prakash Chaurasia",
  role: "Full Stack Developer & Subject Matter Expert",
  location: "Bengaluru, Karnataka",
  email: "omchaurasia2024@gmail.com",
  phone: "+91 6282646554",
  linkedin: "https://www.linkedin.com/in/om-prakash-chaurasia/",
  github: "https://github.com/Om-Prakash-Chaurasia",

  introduction:
    "I build modern web applications and turn technical problems into practical solutions.",
};

export const aboutInfo = {
  heading: "A little about me",

  paragraphs: [
    "I'm a Full Stack Developer and Subject Matter Expert with experience building web applications and working across frontend, backend, databases, and REST APIs.",

    "My journey into software development started from an Aeronautical Engineering background and gradually evolved through technical documentation, web development, and full-stack engineering.",

    "Today, I work with technologies such as React.js, Node.js, Express.js, MongoDB, JavaScript, and Core Java while also helping learners understand programming and full-stack development concepts.",
  ],

  strengths: [
    "Problem Solving",
    "Analytical Thinking",
    "Technical Mentoring",
    "Teamwork & Collaboration",
    "Communication",
    "Continuous Learning",
  ],
};

export const skills = [
  {
    category: "Programming Languages",
    items: ["JavaScript", "Java", "Python", "HTML5"],
  },
  {
    category: "Frontend Development",
    items: ["React.js", "Redux", "Tailwind CSS", "CSS3"],
  },
  {
    category: "Backend Development",
    items: ["Node.js", "Express.js", "REST APIs"],
  },
  {
    category: "Databases",
    items: ["MongoDB", "MySQL"],
  },
  {
    category: "Core Computer Science",
    items: [
      "DSA",
      "Object-Oriented Programming",
      "Functional Programming",
      "Procedural Programming",
    ],
  },
  {
    category: "Development Tools",
    items: ["Git", "GitHub", "Postman", "Visual Studio Code"],
  },
  {
    category: "Operating Systems",
    items: ["macOS", "Windows", "Ubuntu Linux"],
  },
  {
    category: "Others",
    items: ["Machine Learning Fundamentals", "AI-Assisted Development Tools"],
  },
];

export const experience = [
  {
    period: "Dec 2025 — Present",
    company: "HCL Guvi",
    role: "Subject Matter Expert (SME)",
    type: "Current Role",
    description:
      "Providing technical guidance and subject-matter support in full-stack development and programming concepts.",
    responsibilities: [
      "Support learners in Java, JavaScript, web development, databases, and software development fundamentals.",
      "Analyze technical problems and provide structured solutions, debugging guidance, and conceptual explanations.",
      "Assist learners with DSA, OOPS programming, and full-stack development concepts.",
    ],
  },
  {
    period: "Jun 2024 — Dec 2025",
    company: "KGiSL Trust",
    role: "Junior Developer",
    type: "Full Stack Development",
    description:
      "Developed and maintained web-based applications using modern frontend and backend technologies.",
    responsibilities: [
      "Worked with React.js, JavaScript, Node.js, Express.js, MongoDB, and REST APIs.",
      "Implemented reusable frontend components and responsive interfaces using React.js and Tailwind CSS.",
      "Developed backend functionality and API integrations using Node.js and Express.js.",
      "Worked with MongoDB for data storage, querying, and application-level data management.",
      "Used Git, GitHub, and Postman for source control, collaboration, API testing, and debugging.",
    ],
  },
  {
    period: "Jan 2024 — May 2024",
    company: "Shiromani Institute Pvt. Ltd.",
    role: "Business Development Manager",
    type: "Professional Experience",
    description:
      "Managed client interactions and supported business development activities.",
    responsibilities: [
      "Coordinated with internal teams to support business and operational objectives.",
      "Developed communication, negotiation, relationship-management, and leadership skills.",
    ],
  },
  {
    period: "Oct 2022 — Aug 2023",
    company: "Newton School",
    role: "Web Developer Trainee",
    type: "Internship Experience",
    description:
      "Developed web applications while strengthening practical frontend development skills.",
    responsibilities: [
      "Worked with HTML, CSS, JavaScript, and React.js.",
      "Practiced component-based development and responsive web design.",
      "Applied programming fundamentals and problem-solving techniques to development tasks.",
      "Worked with Git and GitHub as part of the software development workflow.",
    ],
  },
  {
    period: "Apr 2022 — Oct 2022",
    company: "GLOINNT Solutions Pvt. Ltd.",
    role: "Technical Writer & Illustrator Trainee",
    type: "Internship Experience",
    description:
      "Created and organized aircraft technical documentation and instructional content.",
    responsibilities: [
      "Simplified technical concepts into structured and user-friendly documentation.",
      "Collaborated with team members to improve the clarity and presentation of technical content.",
    ],
  },
  {
    period: "Jan 2020 — Dec 2020",
    company: "School of Aeronautics, Neemrana",
    role: "Aircraft Maintenance Engineer (AME) Trainee",
    type: "Internship Experience",
    description:
      "Gained practical exposure to aircraft maintenance procedures, technical documentation, and safety-oriented processes.",
    responsibilities: [
      "Developed attention to detail, analytical thinking, and structured problem-solving skills.",
    ],
  },
];

export const projects = [
  {
    title: "TaskFlow — Notes & Task Management",
    category: "Full Stack MERN Application",
    image: "/projects/taskflow.png",
    description:
      "A full-stack notes and task management application featuring JWT authentication, task lifecycles, and automated email reminders powered by background cron jobs.",
    technologies: [
      "React.js",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB Atlas",
      "JWT",
      "Nodemailer",
      "REST APIs",
      "Axios",
    ],
    features: [
      "Secure user registration and login with JWT authentication.",
      "Full task CRUD operations with priority, deadlines, and status flags.",
      "Automated email reminders triggered via Nodemailer and background cron scheduling.",
      "Persistent cloud database storage powered by MongoDB Atlas.",
      "Production-ready deployment on Vercel with responsive UI.",
    ],
    github: "https://github.com/Om-Prakash-Chaurasia/notes-app",
    liveDemo: "https://notes-app-frontend-flax.vercel.app/",
  },

  {
    title: "Money Manager — Precision Wealth & Budget Tracker",
    category: "Full Stack Financial Platform",
    image: "/projects/moneymanager.png",
    description:
      "An enterprise-grade double-entry personal finance system managing multi-account ledgers, credit cards, budget rollups, recurring bills, and real-time cash flow analytics.",
    technologies: [
      "React 19",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Docker",
      "Swagger / OpenAPI",
      "Zod",
      "Vercel",
    ],
    features: [
      "Double-entry bookkeeping engine ensuring zero inflation and balanced ledgers.",
      "Multi-account management across bank accounts, cash, and metallic credit cards.",
      "Real-time 6-month cash flow trends, budget rollover meters, and expense analytics.",
      "13 automated integration test suites (131 tests) validating financial logic.",
      "Swagger OpenAPI 3.0 documentation, Docker containerization, and Quick Demo Login.",
    ],
    github: "https://github.com/Om-Prakash-Chaurasia/money-manager-app",
    liveDemo: "https://money-manager-app-gamma.vercel.app/",
  },
];

export const certifications = [
  {
    title: "Machine Learning",
    issuer: "HCL Guvi",
  },
  {
    title: "React by Meta",
    issuer: "Coursera",
    verificationUrl:
      "https://www.coursera.org/account/accomplishments/verify/TG32YTAN8FC7",
  },
  {
    title: "MERN Stack Development, Linux Administration & Cisco Networking",
    issuer: "KGiSL MicroCollege",
  },
  {
    title: "Core Java",
    issuer: "Newton School",
  },
];

export const education = {
  degree: "Bachelor of Technology in Aeronautical Engineering",
  institution: "School of Aeronautics, RTU (Rajasthan Technical University)",
  period: "Aug 2017 — Oct 2021",
  grade: "CGPA: 7.21",
};

export const contactInfo = {
  heading: "Let's build something together.",
  description:
    "I'm always open to discussing software development opportunities, interesting projects, and ideas worth building.",

  email: personalInfo.email,
  linkedin: personalInfo.linkedin,
  github: personalInfo.github,
};
