export const code = {
  welcome: `import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ message: "Hello traveller" });
}
`,

  skillsTools: `const getSkills = () => {
  return mySkills.length > 0 
    ? \`I have skills in: \${mySkills.join(", ")}! 💻🚀\`
    : "Skills not found... imposter syndrome activated! 😱";
};

console.log(getSkills());
`,

  experience: `experience.forEach((job) => {
  console.log(\`👨‍💻 \${job.role} at \${job.company} (\${job.duration}) 🚀 Skills: \${job.skills.join(", ")}\`);
});
`,

  projects: `const projectField = {
  idea: "Vibe coding hackathon",
  execution: "Debugging most of the time",
  outcome: "A website that works 50% of the time",
};

console.log("Project Field:", projectField);
`,

  education: `console.log(\`My Education: \${educationJourney.degrees}\`);
educationJourney.courses.forEach(course => console.log(\`- \${course}\`));
`,

  publications: `// Function to check if anyone actually read my papers
const checkReadership = (paper) => {
  return paper.citations > 0 ? "Someone read it! 🎉" : "Just me and my mom... 📚";
};
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
`,

  certifications: `const displayCerts = () => {
  certifications.forEach(cert => {
    console.log(\`🏆 \${cert.name} - Issued by \${cert.issuer}\`);
  });
};

displayCerts();
`,
}
