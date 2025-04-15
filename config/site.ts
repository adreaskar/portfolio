export const siteConfig = {
  name: "karabetian.dev",
  url: "https://abhishekg.com.np",
  ogImage: "https://abhishekg.com.np/og.jpg",
  description: "Portfolio of Andreas Karabetian",
  links: {
    twitter: "https://x.com/adreaskar",
    github: "https://github.com/adreaskar",
    githubProfile: "https://github.com/adreaskar",
    resume: "resume.pdf",
    githubUsername: "adreaskar",
    blog: "https://blog.karabetian.dev/",
    linkedin: "https://www.linkedin.com/in/andreaskarabetian/",
  },
  bitinfonepal: "https://bitinfonepal.com",
  projects: {
    javascriptgr: {
      title: "javascript.gr · An educational website for JavaScript in Greek",
      description:
        "javascript.gr is a comprehensive educational website for JavaScript in Greek. It serves as a valuable resource for learners and developers, offering tutorials, articles, and documentation to enhance their understanding of JavaScript concepts and practices.",
      tags: [
        "JavaScript",
        "React",
        "Tailwind CSS",
        "Web Application",
        "Open Source",
        "Documentation",
      ],
      live: "https://javascript.gr",
      github: "https://github.com/adreaskar/javascript.gr",
    },
    expensetracker: {
      title:
        "ExpenseTracker · Full Stack web application for tracking expenses",
      description:
        "ExpenseTracker is a full-stack web application designed to help users track their expenses efficiently. With a user-friendly interface and robust backend, it allows users to manage their finances effectively.",
      tags: [
        "Next.js",
        "React",
        "Node.js",
        "Express.js",
        "Tailwind CSS",
        "PostgreSQL",
        "Prisma",
        "Bcrypt",
        "Full Stack",
        "Web Application",
      ],
    },
    covidtracker: {
      title: "CovidTrakcer · A web application for tracking COVID-19 cases",
      description:
        "CovidTracker is a web application that provides real-time tracking of COVID-19 cases. It offers users the ability to monitor the spread of the virus, view statistics, and stay informed about the latest developments.",
      tags: ["Next.js", "Full Stack", "Web Application"],
      live: "https://covidtracker.karabetian.dev",
      github: "https://github.com/adreaskarabetian/covid19-tracker",
    },
    webdevwithai: {
      title: "My first website with a glimpse of AI · IEEE UniPi Workshop",
      description:
        "Application built during the IEEE workshop 'My first website with a glimpse of AI', presented by Adreas Karabetian and Panagiotis Karamolegkos.",
      tags: [
        "HTML",
        "CSS",
        "JavaScript",
        "Firebase",
        "Web Development",
        "LLM",
        "AI",
        "Workshop",
        "Open Source",
      ],
      github: "https://github.com/ieee-unipi-sb/web-dev-with-ai",
    },
  },
  experiences: [
    {
      title: "Researcher / Software Engineer",
      company: "AI4Gov",
      isLatest: true,
      date: "Jan. 2023 - Present",
      location: "Piraeus, Greece",
      description:
        "Currently working as a researcher and software engineer at the HORIZON EU project AI4Gov, where I focus on developing innovative solutions for public sector challenges. My role involves collaborating with cross-functional teams to design and implement software applications that leverage artificial intelligence and data analytics.",
    },
    {
      title: "Laboratory Teaching Assistant",
      company: "University of Piraeus",
      isLatest: false,
      date: "Apr. 2024 - Sep. 2024",
      location: "Piraeus, Greece",
      description:
        "Worked as a Laboratory Teaching Assistant at the University of Piraeus, where I assist in teaching web development courses. My role involves preparing lab materials, guiding students through practical exercises, and providing support for their projects.",
    },
    {
      title: "Researcher / Web Developer",
      company: "DIASTEMA",
      isLatest: false,
      date: "Dec. 2020 - May 2023",
      location: "Remote",
      description:
        "Worked as a researcher and web developer at DIASTEMA, where I focused on web development and data visualization. I was responsible for creating interactive web applications that visualized complex data sets, making it easier for researchers to analyze and interpret their findings.",
    },
    {
      title: "Website Developer",
      company: "Freelance",
      isLatest: false,
      date: "Sept. 2018 - Sept. 2023",
      location: "Remote",
      description:
        "Worked as a freelance website developer, where I designed and developed websites for small businesses and individuals, using WordPress and custom HTML/CSS solutions. This experience honed my skills in web development and client communication.",
    },
  ],
  education: [
    {
      title: "Bachelor's Degree in Digital Systems",
      company: "Dpt. Digital Systems · University of Piraeus",
      isLatest: true,
      date: "Sep. 2017 - Sep. 2023",
      location: "Piraeus, Greece",
      description:
        "I have successfully completed my Bachelor's Degree in Digital Systems at the University of Piraeus. My studies have provided me with a solid foundation in computer science, software engineering, and digital systems design. I have gained practical experience through various projects and coursework, enhancing my skills in programming, web development, and data analysis.",
    },
  ],
};

export type SiteConfig = typeof siteConfig;

export const META_THEME_COLORS = {
  light: "#ffffff",
  dark: "#09090b",
};
