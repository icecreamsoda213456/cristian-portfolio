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

const experiences = [
  {
    role: "E-commerce and data operations",
    company: "Thirdynal E-Commerce Corporation",
    summary: "Kept customer and product information accurate while supporting inquiries and complete day-to-day records.",
    points: [
      "Encoded customer and product information in an e-commerce system.",
      "Maintained updated records and dependable data handling.",
      "Responded to product inquiries and followed up for complete details.",
    ],
  },
  {
    role: "IT and office operations",
    company: "Project Link Global Technologies Corporation",
    summary: "Supported administrative work, document preparation, and the dependable handling of operational information.",
    points: [
      "Assisted with data encoding and office documentation.",
      "Used Excel and Word for everyday operational tasks.",
      "Built stronger habits around organization and time management.",
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="border-b border-border bg-background py-20 md:py-28">
      <div className="mx-auto grid max-w-[1240px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
        <motion.div
          className="lg:sticky lg:top-28 lg:h-fit"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={revealGroup}
        >
          <motion.p variants={revealItem} className="text-xs font-bold tracking-widest text-accent-dark">04 / EXPERIENCE</motion.p>
          <motion.h2 variants={revealItem} className="mt-5 font-grotesk text-4xl font-bold leading-[1.02] tracking-normal md:text-6xl">
            Work shaped by accuracy.
          </motion.h2>
          <motion.p variants={revealItem} className="mt-6 max-w-sm leading-relaxed text-muted">
            My professional experience has taught me that the small details are often where trust is won.
          </motion.p>
        </motion.div>

        <div className="border-t border-border">
          {experiences.map((job, index) => (
            <motion.article
              key={job.company}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: index * 0.1 }}
              className="border-b border-border py-8 md:py-10"
            >
              <div className="grid gap-4 md:grid-cols-[80px_1fr]">
                <span className="font-grotesk text-lg font-bold text-accent-dark">0{index + 1}</span>
                <div>
                  <p className="text-xs font-bold tracking-widest text-accent-dark">{job.role.toUpperCase()}</p>
                  <h3 className="mt-3 font-grotesk text-2xl font-bold md:text-3xl">{job.company}</h3>
                  <p className="mt-4 max-w-2xl leading-relaxed text-muted">{job.summary}</p>
                  <ul className="mt-6 grid gap-3 text-sm leading-relaxed text-foreground/80">
                    {job.points.map((point) => (
                      <li key={point} className="flex gap-3">
                        <span className="mt-2 size-1.5 shrink-0 bg-[#72bca9]" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
