"use client"
import { motion } from "framer-motion"

const education = [
  {
    years: "2020 — 2024",
    title: "Bachelor of Science in Information Systems",
    school: "Richwell Colleges, Incorporated",
  },
  {
    years: "2017 — 2018",
    title: "Information and Communications Technology (ICT)",
    school: "ACLC College of Malolos",
  },
]

export default function Education() {
  return (
    <section id="education" className="py-24 bg-surface">
      <div className="max-w-[1160px] mx-auto px-6">
        <p className="text-xs font-bold tracking-widest text-accent-dark mb-4">04 — EDUCATION</p>
        <h2 className="font-grotesk text-5xl font-bold mb-12">My academic foundation.</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {education.map((edu, i) => (
            <motion.div
              key={edu.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="rounded-2xl border border-border p-8 bg-background h-full">
                <span className="text-sm font-bold text-accent-dark">{edu.years}</span>
                <h3 className="font-grotesk text-2xl font-bold mt-2">{edu.title}</h3>
                <p className="text-muted mt-2">{edu.school}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}