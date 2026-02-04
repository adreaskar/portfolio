export interface Presentation {
  title: string
  date: string
  event: string
  description: string
  id: string
  location: string
  tags: string[]
  images: string[]
}

export const presentations: Presentation[] = [
  {
    title: "AWS x UniPi Workshop",
    date: "June 1, 2024",
    location: "University of Piraeus, Athens, Greece",
    event: "AWS Cloud Club Greece",
    description:
      "I had the pleasure to demonstrate some AWS Amplify services, in this collaborative event by AWS Cloud Club Greece x University of Piraeus. \n\n The event was focused on showcasing the capabilities of AWS Amplify and how it can be used to build web applications, as well as AWS DynamoDB and AWS Cognito.",
    id: "aws-x-unipi-workshop",
    images: [
      "/talks-img/aws1.jpg",
      "/talks-img/aws2.jpg",
      "/talks-img/aws3.jpg",
      "/talks-img/aws4.jpg",
      "/talks-img/aws5.jpg",
      "/talks-img/aws6.jpg",
    ],
    tags: [
      "Workshop",
      "AWS",
      "Web Development",
      "Cloud Services",
      "Student Event",
      "AWS Cloud Club Greece",
      "University of Piraeus",
    ],
  },
  {
    title: "University of Piraeus Workshop",
    date: "May 31, 2024",
    location: "University of Piraeus, Athens, Greece",
    event: "IEEE Tech Seminars UniPi",
    description:
      "I had the pleasure to co-host a workshop session with my friend and colleague Panagiotis Karamolegkos. This event was organised by IEEE University of Piraeus Student Branch. \n\n Our session, titled 'My first website with a glimpse of AI', showcased web development principles, cloud services using Google Firebase and AI assistants using Meta's Llama 3.1.",
    id: "university-of-piraeus-workshop",
    images: [
      "/talks-img/workshop1.jpg",
      "/talks-img/workshop2.jpg",
      "/talks-img/workshop3.jpg",
      "/talks-img/workshop4.jpg",
      "/talks-img/workshop5.jpg",
      "/talks-img/workshop6.jpg",
    ],
    tags: [
      "Workshop",
      "AI",
      "Web Development",
      "Cloud Services",
      "Student Event",
      "IEEE",
      "University of Piraeus",
      "Open Source",
    ],
  },

  {
    title: "AI4Gov Project first progress report",
    date: "March 14, 2024",
    location: "European Research Executive Agency, Brussels, Belgium",
    event: "EU HORIZON Project Meeting",
    description:
      "First progress report of the AI4Gov project, presented to the EU Commission. \n Really proud of our achievements during the first year of the project. ",
    id: "ai4gov-progress-report",
    images: [
      "/talks-img/comission1.jpg",
      "/talks-img/comission2.jpg",
      "/talks-img/comission3.jpg",
    ],
    tags: [
      "Progress Report",
      "AI4Gov",
      "EU",
      "HORIZON Research Project",
      "EU Commission",
    ],
  },
  {
    title: " AI4Gov Use Case initial demonstrations",
    date: "November 8, 2023",
    location: "St Raphael Resort, Limassol, Cyprus",
    event: "EU HORIZON Project Meeting",
    description:
      "Really happy to showcase the AI4Gov 's Use Case initial demonstrations live on our 3rd Plenary Meeting in Limassol, Cyprus. \n Key parts of the presentation were: \n\n - The Bias Detector Toolkit, where ML engineers can learn about bias in ai. \n - The PolicyBot, a question-answering system that analyzes OECD policy documents.",
    id: "ai4gov-use-case-initial-demonstrations",
    images: [
      "/talks-img/limassol1.jpg",
      "/talks-img/limassol2.jpg",
      "/talks-img/limassol3.jpg",
    ],
    tags: [
      "Plenary Meeting",
      "AI4Gov",
      "EU",
      "HORIZON Research Project",
      "Use Cases",
    ],
  },
  {
    title: "AI4Gov Project Kickoff Meeting",
    date: "February 21, 2023",
    location: "Stratos Vassilikos Hotel, Athens, Greece",
    event: "EU HORIZON Project Meeting",
    description:
      "Initial presentation of the AI4Gov project, what a great experience! \n\n Got to meet a lot of interesting people and discuss about the future of AI in the public sector.  Really looking forward to the next 3 years of this project!",
    id: "ai4gov-kickoff-meeting",
    images: [
      "/talks-img/ai4gov1.jpg",
      "/talks-img/ai4gov2.jpg",
      "/talks-img/ai4gov_group.jpg",
    ],
    tags: ["Kickoff Meeting", "AI4Gov", "EU", "HORIZON Research Project"],
  },
  {
    title: "Presenting the Dimensioning Workbench tool",
    date: "July 18, 2022",
    location: "Ionian University, Corfu, Greece",
    event: "The 13th IISA International Conference",
    description:
      "My first presentation of a research publication, really excited! \n\n I presented the Dimensioning Workbench tool, which is a tool that I co-developed along with my research colleagues for the DIASTEMA research project. The tool is used to dimension the resources of a cloud application based on its requirements and the available resources of the cloud provider, through a user friendly interface.",
    id: "iisa-dimensioning-workbench",
    images: [
      "/talks-img/iisa_1.jpg",
      "/talks-img/iisa_2.jpg",
      "/talks-img/iisa_3.jpg",
      "/talks-img/iisa_4.jpg",
      "/talks-img/iisa_5.jpg",
    ],
    tags: ["Conference", "Research Paper", "Cloud Computing"],
  },
]
