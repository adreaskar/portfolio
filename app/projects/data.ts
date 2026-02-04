import {
  BookMarked,
  PiggyBank,
  HeartPulse,
  Code,
  Newspaper,
} from "lucide-react"

export interface Project {
  title: string
  description: string
  tags: string[]
  live?: string
  github?: string
  icon?: React.ElementType
}

export const projects: Project[] = [
  {
    title: "javascript.gr · Documentation for JavaScript in Greek",
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
    icon: BookMarked,
  },
  {
    title: "newsflow.gr · Your personalized news aggregator",
    description:
      "NewsFlow is a service that aggregates news from various sources, providing users with a comprehensive overview of current events. With personalized news feeds, users can stay informed about topics that matter most to them. Currently operating in beta with invite-only access.",
    tags: [
      "TypeScript",
      "React",
      "Vite",
      "Supabase",
      "Web Application",
      "SaaS",
    ],
    live: "https://newsflow.gr",
    icon: Newspaper,
  },
  {
    title: "ExpenseTracker · Web app for tracking expenses",
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
    icon: PiggyBank,
  },
  {
    title: "CovidTrakcer · Web app for tracking COVID-19 cases",
    description:
      "CovidTracker is a full-stack web application that provides real-time tracking of COVID-19 cases. It offers users the ability to monitor the spread of the virus, view statistics, and stay informed about the latest developments.",
    tags: ["Next.js", "Full Stack", "Web Application", "Open Source"],
    live: "https://covidtracker.karabetian.dev",
    github: "https://github.com/adreaskarabetian/covid19-tracker",
    icon: HeartPulse,
  },
  {
    title: "My first website with a glimpse of AI · Workshop",
    description:
      "Application built during the IEEE workshop 'My first website with a glimpse of AI', presented by Andreas Karabetian and Panagiotis Karamolegkos.",
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "Firebase",
      "LLM",
      "AI",
      "Workshop",
      "Open Source",
    ],
    github: "https://github.com/ieee-unipi-sb/web-dev-with-ai",
    icon: Code,
  },
]
