export interface Education {
  title: string
  school: string
  isLatest: boolean
  date: string
  location: string
  description: string
}

export const education: Education[] = [
  {
    title: "Master's Degree in Computer Science",
    school: "Dpt. Informatics and Telematics · Harokopio University of Athens",
    isLatest: true,
    date: "Sep. 2025 - Present",
    location: "Athens, Greece",
    description:
      "I've started my Master of Science (MSc) in Informatics and Telematics at Harokopio University, focusing on Cloud and Edge Systems, Applications, and Cloud Solutions Architecture, as part of my journey to deepen my expertise and grow as a professional in modern computing technologies.",
  },
  {
    title: "Bachelor's Degree in Computer Science",
    school: "Dpt. Digital Systems · University of Piraeus",
    isLatest: false,
    date: "Sep. 2017 - Sep. 2023",
    location: "Piraeus, Greece",
    description:
      "I have successfully completed my Bachelor's Degree in Digital Systems at the University of Piraeus. My studies have provided me with a solid foundation in computer science, software engineering, and digital systems design. I have gained practical experience through various projects and coursework, enhancing my skills in programming, web development, and data analysis.",
  },
]
