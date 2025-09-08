export interface Project {
  title: string;
  description: string;
  tags: string[];
  live?: string;
  github?: string;
}

export const projects: Project[] = [
  {
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
  {
    title: "ExpenseTracker · Full Stack web application for tracking expenses",
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
  {
    title: "CovidTrakcer · A web application for tracking COVID-19 cases",
    description:
      "CovidTracker is a web application that provides real-time tracking of COVID-19 cases. It offers users the ability to monitor the spread of the virus, view statistics, and stay informed about the latest developments.",
    tags: ["Next.js", "Full Stack", "Web Application", "Open Source"],
    live: "https://covidtracker.karabetian.dev",
    github: "https://github.com/adreaskarabetian/covid19-tracker",
  },
  {
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
];
