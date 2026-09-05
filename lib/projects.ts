export type Project = {
  title: string
  type: string
  description: string
  impact: string
  tech: string[]
  imageSrc?: string
  demoHref?: string
}

export const projects: Project[] = [
  {
    title: "Fabian's Car Care POS",
    type: "POS & Inventory System",
    imageSrc: "/fabians-car-care.png",
    description:
      "An offline point-of-sale and inventory system for managing products, sales, users, receipts, and reports.",
    impact:
      "Shows full-stack development, database-backed workflows, role-based operations, and desktop packaging with Electron.",
    tech: ["React", "Vite", "Express", "PostgreSQL", "Electron", "JWT"],
    demoHref: "https://frontend-murex-ten-51.vercel.app/",
  },
  {
    title: "E-commerce Support Workflow",
    type: "Operations Case Study",
    description:
      "A sample workflow based on product encoding, customer inquiry handling, and record accuracy.",
    impact:
      "Highlights attention to detail, data quality, communication, and e-commerce operations support.",
    tech: ["Excel", "Data Encoding", "Product Records", "Customer Support"],
  },
  {
    title: "Personal Portfolio Website",
    type: "Live Website",
    description:
      "A responsive portfolio built to present professional experience, skills, education, and contact details.",
    impact:
      "Demonstrates frontend development, responsive UI design, animation, and deployment-ready project structure.",
    tech: ["Next.js", "React", "Tailwind CSS", "Three.js", "Framer Motion"],
    demoHref: "/",
  },
]
