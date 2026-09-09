"use client"

import { motion } from "framer-motion"

const revealGroup = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
} as const

const revealItem = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
} as const

const capabilities = [
  {
    number: "01",
    title: "Application development",
    description: "I create responsive web and mobile experiences with clear interactions, useful data, and thoughtful user flows.",
    tools: "React, Next.js, Flutter, PHP, Laravel, JavaScript, HTML, CSS",
  },
  {
    number: "02",
    title: "Data and systems",
    description: "I work comfortably with the details behind an application: structured data, authentication, records, and reliable everyday workflows.",
    tools: "PostgreSQL, MySQL, Supabase, Firebase, SQL, REST APIs, JWT, Express",
  },
  {
    number: "03",
    title: "Operations and support",
    description: "I bring the practical habits that keep teams steady: accurate encoding, clear communication, troubleshooting, and follow-through.",
    tools: "Excel, Power BI, Git, Postman, Selenium, n8n, Windows support",
  },
]

const stackGroups = [
  {
    number: "01",
    title: "Frontend and mobile",
    tools: ["React", "Next.js", "TypeScript", "JavaScript", "Flutter", "Dart", "Riverpod", "jQuery", "HTML5", "CSS3", "Tailwind CSS", "Framer Motion", "Three.js", "Vite"],
  },
  {
    number: "02",
    title: "Backend and data",
    tools: ["Node.js", "Express", "PHP", "Laravel", "Python", "Flask", "PostgreSQL", "MySQL", "Supabase", "Firebase / Firestore", "phpMyAdmin", "SQL", "REST APIs", "JWT"],
  },
  {
    number: "03",
    title: "Automation and analytics",
    tools: ["Microsoft Excel", "Microsoft Word", "Power BI", "Tableau", "QlikView", "Selenium", "n8n", "Browser Automation", "Workflow Automation"],
  },
  {
    number: "04",
    title: "Delivery and support",
    tools: ["Git", "GitHub", "VS Code", "XAMPP", "Android Studio", "Postman", "Render", "Electron", "Windows Support", "PC Troubleshooting", "Peripheral Setup", "Network Troubleshooting"],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="bg-[#13231d] py-20 text-[#eff7f1] md:py-28">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
          <motion.div
            className="lg:sticky lg:top-28 lg:h-fit"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={revealGroup}
          >
            <motion.p variants={revealItem} className="text-xs font-bold tracking-widest text-[#72ddc7]">03 / CAPABILITIES</motion.p>
            <motion.h2 variants={revealItem} className="mt-5 font-grotesk text-4xl font-bold leading-[1.02] tracking-normal md:text-6xl">
              A useful mix of product, systems, and operations.
            </motion.h2>
            <motion.p variants={revealItem} className="mt-6 max-w-md text-base leading-relaxed text-white/62">
              I am strongest where technology has to support real people, repeatable work, and the details that make a system dependable.
            </motion.p>
          </motion.div>

          <div className="border-t border-white/15">
            {capabilities.map((capability, index) => (
              <motion.article
                key={capability.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: index * 0.08 }}
                className="grid gap-4 border-b border-white/15 py-7 sm:grid-cols-[72px_1fr] sm:py-9"
              >
                <span className="font-grotesk text-xl font-bold text-[#ff9a7e]">{capability.number}</span>
                <div>
                  <h3 className="font-grotesk text-2xl font-bold">{capability.title}</h3>
                  <p className="mt-3 max-w-2xl leading-relaxed text-white/65">{capability.description}</p>
                  <p className="mt-5 border-l border-[#72ddc7] pl-3 text-sm font-semibold leading-relaxed text-[#bfeede]">
                    {capability.tools}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        <div className="mt-16 border-t border-white/15 pt-7 md:mt-24 md:pt-10">
          <div className="grid gap-6 md:grid-cols-[0.72fr_1.28fr] md:items-end">
            <div>
              <p className="text-xs font-bold tracking-widest text-[#72ddc7]">TECH STACK INDEX</p>
              <h3 className="mt-3 font-grotesk text-4xl font-bold leading-none tracking-normal md:text-5xl">
                Tools behind the work.
              </h3>
            </div>
            <p className="max-w-2xl text-sm leading-relaxed text-white/60 md:justify-self-end">
              A broad, practical stack lets me move from interface to database to delivery while keeping the end user and daily workflow in view.
            </p>
          </div>

          <div className="mt-10 grid border-l border-t border-white/15 md:grid-cols-2">
            {stackGroups.map((group, index) => (
              <motion.article
                key={group.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: index * 0.06 }}
                className="border-b border-r border-white/15 p-5 transition-colors hover:bg-white/[0.04] sm:p-7"
              >
                <div className="flex items-baseline justify-between gap-4">
                  <p className="font-grotesk text-sm font-bold text-[#ff9a7e]">{group.number}</p>
                  <p className="text-xs font-bold tracking-widest text-white/60">{group.tools.length} SKILLS</p>
                </div>
                <h4 className="mt-5 font-grotesk text-2xl font-bold">{group.title}</h4>
                <div className="mt-6 flex flex-wrap gap-2">
                  {group.tools.map((tool) => (
                    <span key={tool} className="border border-white/15 px-2.5 py-1.5 text-xs font-semibold text-white/75 transition-colors hover:border-[#72ddc7] hover:text-[#72ddc7]">
                      {tool}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
