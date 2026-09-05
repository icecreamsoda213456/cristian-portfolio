export type Project = {
  title: string
  type: string
  description: string
  impact: string
  tech: string[]
  imageSrc?: string
  demoHref?: string
  privateDemo?: boolean
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
    title: "Panpanskii Couple App",
    type: "Private Flutter Mobile App",
    imageSrc: "/panpanskii-app.png",
    privateDemo: true,
    description:
      "A private two-user mobile app designed for shared moments, personal notes, couple dates, and meaningful daily interactions.",
    impact:
      "Shows mobile app development, authenticated user experiences, real-time cloud features, notifications, and thoughtful product design.",
    tech: ["Flutter", "Dart", "Supabase", "Firebase", "Push Notifications", "Realtime"],
    demoHref: "https://panpanskii-app-demo.vercel.app/",
  },
]
