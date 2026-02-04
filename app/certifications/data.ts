export interface Certification {
  title: string
  date: string
  credentialId: string
  verificationUrl: string
  logo: string
  color: string
}

export const certifications: Certification[] = [
  {
    title: "Microsoft Certified: Azure Fundamentals",
    date: "Issued Feb 2026",
    credentialId: "AZ-900",
    verificationUrl:
      "https://learn.microsoft.com/en-us/users/karabetian/credentials/62f498239b70e961?ref=https%3A%2F%2Fwww.linkedin.com%2F",
    logo: "/certifications/azure-az-900.webp",
    color: "#0064b4",
  },
  {
    title: "Microsoft Certified: Azure AI Fundamentals",
    date: "Issued Jul 2025",
    credentialId: "AI-900",
    verificationUrl:
      "https://www.credly.com/badges/69dda3e5-82fc-43ac-91be-db508da458af/linked_in_profile",
    logo: "/certifications/azure-ai-900.webp",
    color: "#0064b4",
  },
]
