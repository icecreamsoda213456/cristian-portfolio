"use client"
import { motion } from "framer-motion"

const experiences = [
  {
    role: "E-COMMERCE • ENCODER",
    company: "Thirdynal E-Commerce Corporation",
    points: [
      "Encoded customer and product information in an e-commerce system while maintaining data accuracy.",
      "Kept records updated and supported overall data integrity through careful information handling.",
      "Responded to customer product inquiries and followed up for complete details.",
    ],
  },
  {
    role: "IT / OFFICE OPERATIONS • ENCODER",
    company: "Project Link Global Technologies Corporation",
    points: [
      "Assisted with administrative tasks, data encoding, and document preparation.",
      "Used Microsoft Excel and Word for office-related tasks.",
      "Developed stronger organizational and time-management skills through day-to-day operations.",
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="max-w-[1160px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Sticky left column */}
          <div className="lg:sticky lg:top-32 lg:h-fit">
            <p className="text-xs font-bold tracking-widest text-accent-dark mb-4">03 — EXPERIENCE</p>
            <h2 className="font-grotesk text-5xl font-bold mb-6">My Professional Journey</h2>
            <p className="text-muted max-w-sm">
              Scroll through the roles that shaped my career in information systems,
              data handling, and office operations.
            </p>
          </div>

          {/* Right column: jobs */}
          <div className="space-y-20">
            {experiences.map((job, i) => (
              <motion.article
                key={job.company}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl border border-border bg-surface p-8"
              >
                <div className="text-xs font-bold tracking-widest text-accent-dark mb-1">{job.role}</div>
                <h3 className="font-grotesk text-3xl font-bold mb-4">{job.company}</h3>
                <ul className="space-y-3 text-muted leading-relaxed">
                  {job.points.map((point) => (
                    <li key={point} className="flex gap-3">
                      <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}