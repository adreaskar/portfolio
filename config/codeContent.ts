export const code = {
  welcome: `import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ message: "Hello traveller" });
}
`,

  skillsTools: `const mySkills = [
  "HTML", "CSS", "JavaScript", "ReactJS", "NextJS", "Tailwind CSS", "NodeJS", "ExpressJS", 
  "MongoDB", "Git", "GitHub", "Postman", "Linux", "macOS", "Windows", "npm", "Docker"
];

const getSkills = () => {
  return mySkills.length > 0 
    ? \`I have skills in: \${mySkills.join(", ")}! 💻🚀\`
    : "Skills not found... imposter syndrome activated! 😱";
};

console.log(getSkills());
`,

  experience: `const experience = [
  {
    role: "Senior bug fixer",
    company: "Remote Office (My Desk)",
    duration: "Forever",
    skills: ["Bug Staring", "Keyboard Jamming"],
  },
  {
    role: "Full-Stack Developer",
    company: "Stack Overflow Solutions Inc.",
    duration: "When Google is Available",
    skills: ["Copy-Pasting", "Fixing Bugs with Console.log", "Deploying & Praying"],
  },
  {
    role: "Intern",
    company: "My Own Side Project",
    duration: "Since Birth",
    skills: ["Breaking Code", "Googling Errors", "Naming Variables Creatively"],
  },
];

experience.forEach((job) => {
  console.log(\`👨‍💻 \${job.role} at \${job.company} (\${job.duration}) \n🚀 Skills: \${job.skills.join(", ")}\`);
});
`,

  projects: `const projectField = {
  idea: "Vibe coding hackathon",
  execution: "Debugging most of the time",
  outcome: "A website that works 50% of the time",
};

console.log("Project Field:", projectField);
`,

  education: `const education = {
  degree: "Bachelor of Life Lessons (and Code)",
  courses: [
    "Advanced Imposter Syndrome",
    "Procrastination 101",
    "Debugging: The Final Frontier",
  ],
};

console.log(\`My Education: \${educationJourney.degree}\`);
educationJourney.courses.forEach(course => console.log(\`- \${course}\`));
`,

  publications: `const publications = [
  {
    title: "How to Write a Paper That Nobody Will Read",
    authors: ["Me", "My Imposter Syndrome", "Coffee"],
    year: 2023,
    abstract: "A groundbreaking study on the art of academic writing that results in papers with 0 citations but 100% existential dread.",
    citations: 0,
    readTime: "2 hours (mostly staring at the wall)",
  },
];

// Function to check if anyone actually read my papers
const checkReadership = (paper) => {
  return paper.citations > 0 ? "Someone read it! 🎉" : "Just me and my mom... 📚";
};

publications.forEach(paper => {
  console.log(\`📄 \${paper.title}\`);
  console.log(\`📊 \${checkReadership(paper)}\`);
  console.log(\`⏱️  Reading time: \${paper.readTime}\n\`);
});
`,

  presentations: `const presentations = [
  {
    title: "How to Make PowerPoint Slides That Don't Put People to Sleep",
    date: "2024-01-15",
    location: "Conference Room 404 (Not Found)",
    audience: "3 confused people and a janitor",
    slides: 47, // because 46 wasn't enough
    questions: 0, // crickets chirping
];

presentation.forEach(presentation => {
  console.log(\`📄 \${presentation.title}\`);
  console.log(\`📅 \${presentation.date}\`);
  console.log(\`📍 \${presentation.location}\`);
  console.log(\`👥 \${presentation.audience}\`);
  console.log(\`📊 \${presentation.slides}\`);
  console.log(\`❓ \${presentation.questions}\`);
});
`,
}
