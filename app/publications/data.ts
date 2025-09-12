export interface Publication {
  title: string
  year: number
  publisher: string
  abstract: string
  url: string
  isLatest: boolean
}

export const publications: Publication[] = [
  {
    title:
      "Combining Explainable Artificial Intelligence (Xai) With Blockchain Towards Trustworthy Data-Driven Policies",
    year: 2025,
    publisher: "IEEE",
    abstract:
      "The paper proposes a data-driven policy-making approach that combines Explainable AI with blockchain to both clarify AI outputs and ensure their trustworthiness.",
    url: "https://ieeexplore.ieee.org/abstract/document/11096210",
    isLatest: true,
  },
  {
    title:
      "UI/UX Sustainable Design: Best Practices for Applications CO2 Emissions Reduction",
    year: 2024,
    publisher: "IEEE",
    abstract:
      "This paper presents best practices for designing environmentally sustainable UX/UI in web applications, demonstrating through evaluation that such practices reduce energy consumption and carbon emissions.",
    url: "https://ieeexplore.ieee.org/abstract/document/10612495",
    isLatest: false,
  },
  {
    title:
      "A Visual Programming Environment for Describing Complex Big Data Functions",
    year: 2023,
    publisher: "ACM",
    abstract:
      "This study introduces Pipeline Modeler, a Visual Programming Environment that translates graphical workflows into executable operations for big data scenarios, making complex pipeline management more accessible while supporting scalable deployment.",
    url: "https://dl.acm.org/doi/abs/10.1145/3625156.3625166",
    isLatest: false,
  },
  {
    title:
      "AI4Gov: Trusted AI for Transparent Public Governance Fostering Democratic Values",
    year: 2023,
    publisher: "IEEE",
    abstract:
      "This paper proposes a holistic ecosystem that integrates Trustworthy and Explainable AI, Big Data, IoT, and blockchain to ensure transparency, accountability, and fairness in AI-driven public governance and policy-making.",
    url: "https://ieeexplore.ieee.org/abstract/document/10257230",
    isLatest: false,
  },
  {
    title:
      "MathBlock: Performing Complex Mathematical Operations on Synthetic Data",
    year: 2023,
    publisher: "IEEE",
    abstract:
      "This paper presents MathBlock, a language-agnostic mathematical expression parser and executor for batch data that simplifies arithmetic, logical, comparison, and statistical operations across diverse datasets.",
    url: "https://ieeexplore.ieee.org/abstract/document/10080594",
    isLatest: false,
  },

  {
    title:
      "Diastema: data-driven stack for big data applications management and deployment",
    year: 2023,
    publisher: "Inderscience Publishers",
    abstract:
      "This paper introduces Diastema, a data-driven stack for big data management and deployment that delivers efficient data-as-a-service through distributed storage and analytics, demonstrated via a customer forecasting use case.",
    url: "https://www.inderscienceonline.com/doi/abs/10.1504/IJBDM.2023.133428",
    isLatest: false,
  },
  {
    title: "Data Processing Tools for Graph Data Modelling Big Data Analytics",
    year: 2022,
    publisher: "IEEE",
    abstract:
      "This paper presents an event-based, low-code data processing architecture with network-exposed services and scalable “Data Workers” that automate common Big Data tasks while minimizing user input.",
    url: "https://ieeexplore.ieee.org/abstract/document/10123672",
    isLatest: false,
  },
  {
    title:
      "A Comparison of Container Systems for Machine Learning Scenarios: Docker and Podman",
    year: 2022,
    publisher: "IEEE",
    abstract:
      "This paper benchmarks Docker and Podman, showing that while both offer standardized container runtimes, Docker outperforms slightly in performance and cost efficiency for cloud deployments.",
    url: "https://ieeexplore.ieee.org/abstract/document/10027159",
    isLatest: false,
  },
  {
    title:
      "An Environmentally-sustainable Dimensioning Workbench towards Dynamic Resource Allocation in Cloud-computing Environments",
    year: 2022,
    publisher: "IEEE",
    abstract:
      "This paper presents a machine learning–based dynamic resource allocation model for cloud environments that leverages user feedback to optimize scalability and application performance in Big Data scenarios.",
    url: "https://ieeexplore.ieee.org/abstract/document/9904367",
    isLatest: false,
  },
  {
    title:
      "	An Autoscaling Platform Supporting Graph Data Modelling Big Data Analytics.",
    year: 2022,
    publisher: "IOS Press",
    abstract:
      "This paper introduces Diastema, a domain-agnostic autoscaling Big Data analytics platform that provides user-friendly graph-based modeling for both technical and non-technical users, validated through a COVID-19 healthcare prediction case study.",
    url: "https://ebooks.iospress.nl/doi/10.3233/SHTI220743",
    isLatest: false,
  },
]
