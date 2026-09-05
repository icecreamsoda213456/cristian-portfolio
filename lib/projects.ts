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
]
