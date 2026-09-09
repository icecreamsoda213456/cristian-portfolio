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
    imageSrc: "/fabians-dashboard.png",
    description:
      "An offline point-of-sale and inventory system for managing products, sales, users, receipts, and reports.",
    impact:
      "Brings product stock, checkout, receipts, and sales reporting together in a desktop-ready workflow with role-based access.",
    tech: ["React", "Vite", "Express", "PostgreSQL", "Electron", "JWT"],
    demoHref: "https://frontend-murex-ten-51.vercel.app/",
  },
  {
    title: "Panpanskii Couple App",
    type: "Private Flutter Mobile App",
    imageSrc: "/panpanskii-home.png",
    privateDemo: true,
    description:
      "A private two-user mobile app designed for shared moments, personal notes, couple dates, and meaningful daily interactions.",
    impact:
      "Combines authenticated access, shared real-time data, and push notifications in a personal two-user mobile experience.",
    tech: ["Flutter", "Dart", "Supabase", "Firebase", "Push Notifications", "Realtime"],
    demoHref: "https://panpanskii-app-demo.vercel.app/",
  },
]
