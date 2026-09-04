"use client"
import { motion } from "framer-motion"

export function About() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="py-24 bg-surface"
    >
      <div className="max-w-4xl mx-auto px-6">
        <p className="eyebrow text-xs font-bold tracking-widest text-accent-dark mb-4">01 — ABOUT ME</p>
        <h2 className="font-grotesk text-5xl font-bold mb-8">Reliable, adaptable, and ready to grow.</h2>
        <p className="text-lg text-muted leading-relaxed">
          I am an Information Systems graduate who is building my career around IT,
          business technology, and efficient digital workflows. My experience has helped
          me develop strong attention to detail, organization, communication, and time
          management.
        </p>
        <p className="text-lg text-muted leading-relaxed mt-4">
          I enjoy learning new tools, supporting day-to-day operations, and finding
          practical ways technology can make work more accurate and efficient.
        </p>
        <div className="qualities flex flex-wrap gap-3 mt-8">
          {["Detail-oriented", "Quick learner", "Team player", "Reliable", "Adaptable", "Deadline-focused"].map((q) => (
            <span key={q} className="px-4 py-2 rounded-full bg-secondary text-sm font-semibold text-secondary-foreground">
              ✓ {q}
            </span>
          ))}
        </div>
      </div>
    </motion.section>
  )
}