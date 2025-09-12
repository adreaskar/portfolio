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
    title: "Bachelor's Degree in Digital Systems",
    school: "Dpt. Digital Systems · University of Piraeus",
    isLatest: true,
    date: "Sep. 2017 - Sep. 2023",
    location: "Piraeus, Greece",
    description:
      "I have successfully completed my Bachelor's Degree in Digital Systems at the University of Piraeus. My studies have provided me with a solid foundation in computer science, software engineering, and digital systems design. I have gained practical experience through various projects and coursework, enhancing my skills in programming, web development, and data analysis.",
  },
]
