"use client"

import { motion } from "framer-motion"

const strengths = [
  ["Clear thinking", "I turn messy tasks into steps people can follow."],
  ["Care with detail", "Accurate records and complete information matter to me."],
  ["Momentum", "I learn quickly and keep work moving without losing quality."],
]

const aboutGroup = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
} as const

const aboutItem = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
} as const

export function About() {
  return (
    <section id="about" className="border-b border-border bg-background py-20 md:py-28">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={aboutGroup}
        className="mx-auto grid max-w-[1240px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.35fr] lg:gap-20"
      >
        <motion.div variants={aboutItem}>
          <p className="text-xs font-bold tracking-widest text-accent-dark">02 / PROFILE</p>
          <h2 className="mt-5 font-grotesk text-4xl font-bold leading-[1.02] tracking-normal md:text-6xl">
            Dependable where it counts.
          </h2>
        </motion.div>

        <motion.div variants={aboutItem}>
          <p className="max-w-2xl text-lg leading-relaxed text-muted md:text-xl">
            I am an Information Systems graduate building a career around business technology,
            practical IT support, and efficient digital workflows. I bring the patience to
            understand the work first, then improve it with the right tools.
          </p>

          <div className="mt-12 border-t border-border">
            {strengths.map(([title, detail], index) => (
              <div key={title} className="grid gap-3 border-b border-border py-5 sm:grid-cols-[90px_180px_1fr] sm:items-baseline">
                <span className="font-grotesk text-sm font-bold text-accent-dark">0{index + 1}</span>
                <h3 className="font-grotesk text-lg font-bold">{title}</h3>
                <p className="text-sm leading-relaxed text-muted">{detail}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
