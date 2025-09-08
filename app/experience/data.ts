export interface Experience {
  title: string;
  company: string;
  isLatest: boolean;
  date: string;
  location: string;
  description: string;
}

export const experience: Experience[] = [
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
];
