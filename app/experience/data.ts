export interface Experience {
  title: string
  company: string
  isLatest: boolean
  date: string
  location: string
  description: string
}

export const experience: Experience[] = [
  {
    title: "Cloud Engineer",
    company: "EY Greece",
    isLatest: true,
    date: "Nov. 2025 - Present",
    location: "Athens, Greece (Hybrid)",
    description:
      "As a Cloud Engineer at EY Greece, I am responsible for designing and implementing cloud solutions for the company. My role involves collaborating with cross-functional teams to implement Azure cloud-based solutions that enhance efficiency and scalability.",
  },
  {
    title: "Researcher / Software Engineer",
    company: "AI4Gov",
    isLatest: false,
    date: "Jan. 2023 - Dec. 2025",
    location: "Piraeus, Greece",
    description:
      "Worked as a researcher and software engineer at the HORIZON EU project AI4Gov, where I focused on developing innovative solutions for public sector challenges. My role involved collaborating with cross-functional teams to design and implement software applications that leverage artificial intelligence and data analytics.",
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
    title: "Researcher / Software Engineer",
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
]
