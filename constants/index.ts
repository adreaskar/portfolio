export const skillCategories = [
  {
    category: "Web Development",
    skills: [
      { title: "HTML", icon: "html" },
      { title: "CSS", icon: "css" },
      { title: "JavaScript", icon: "javascript" },
      { title: "ReactJS", icon: "react" },
      { title: "NextJS", icon: "nextjs" },
      { title: "Tailwind CSS", icon: "tailwind" },
    ],
  },
  {
    category: "Backend & Databases",
    skills: [
      { title: "NodeJS", icon: "nodejs" },
      { title: "ExpressJS", icon: "express" },
      { title: "MongoDB", icon: "mongodb" },
    ],
  },
  {
    category: "Cloud & DevOps",
    skills: [
      { title: "Azure", icon: "azure" },
      { title: "Azure DevOps", icon: "azureDevops" },
      { title: "Kubernetes", icon: "kubernetes" },
      { title: "Docker", icon: "docker" },
      { title: "Linux", icon: "linux" },
    ],
  },
  {
    category: "Tools & Platforms",
    skills: [
      { title: "Git", icon: "git" },
      { title: "GitHub", icon: "gitHub" },
      { title: "Postman", icon: "postman" },
      { title: "npm", icon: "npm" },
      { title: "macOS", icon: "macos" },
      { title: "Windows", icon: "windows" },
    ],
  },
]

// Flat array for backward compatibility
export const mySkills = skillCategories.flatMap((cat) => cat.skills)
