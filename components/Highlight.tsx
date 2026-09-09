"use client"

import { motion } from "framer-motion"

const approach = [
  ["Listen", "Understand the people and workflow before deciding what to build."],
  ["Clarify", "Shape information and interactions so the next step is obvious."],
  ["Deliver", "Finish with care, communicate clearly, and keep improving the result."],
]

const hlGroup = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
} as const

const hlItem = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
} as const

export default function Highlight() {
  return (
    <section className="bg-[#ff8666] py-20 text-[#171915] md:py-28">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={hlGroup}
        className="mx-auto max-w-[1240px] px-5 sm:px-8"
      >
        <motion.p variants={hlItem} className="text-xs font-bold tracking-widest text-[#171915]/70">06 / APPROACH</motion.p>
        <div className="mt-6 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <motion.h2 variants={hlItem} className="font-grotesk text-4xl font-bold leading-[1.02] tracking-normal md:text-6xl">
            Calm in the details. Quick on the uptake.
          </motion.h2>
          <motion.div variants={hlGroup} className="border-t border-[#171915]/25">
            {approach.map(([title, detail], index) => (
              <motion.div
                key={title}
                variants={hlItem}
                className="grid gap-2 border-b border-[#171915]/25 py-5 sm:grid-cols-[52px_130px_1fr] sm:items-baseline"
              >
                <span className="font-grotesk text-sm font-bold">0{index + 1}</span>
                <h3 className="font-grotesk text-lg font-bold">{title}</h3>
                <p className="text-sm leading-relaxed text-[#171915]/75">{detail}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
