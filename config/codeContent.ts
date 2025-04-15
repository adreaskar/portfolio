export const code = {
  welcome: `import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ message: "Hello traveller" });
}
`,

  aboutMe: `const superpower = () => "Missing deadlines and procrastinating.";
console.log(\`My superpower is: \${superpower()}\`);
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

  educationJourney: `const educationJourney = {
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
};
