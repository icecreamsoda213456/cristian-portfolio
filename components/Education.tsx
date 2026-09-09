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

const education = [
  {
    years: "2020 - 2024",
    title: "Bachelor of Science in Information Systems",
    school: "Richwell Colleges, Incorporated",
  },
  {
    years: "2017 - 2018",
    title: "Information and Communications Technology",
    school: "ACLC College of Malolos",
  },
]

export default function Education() {
  return (
    <section id="education" className="bg-[#e7f0eb] py-20 text-[#132019] md:py-28">
      <div className="mx-auto grid max-w-[1240px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={revealGroup}
        >
          <motion.p variants={revealItem} className="text-xs font-bold tracking-widest text-[#bd4936]">05 / EDUCATION</motion.p>
          <motion.h2 variants={revealItem} className="mt-5 font-grotesk text-4xl font-bold leading-[1.02] tracking-normal md:text-6xl">
            A grounded technical start.
          </motion.h2>
        </motion.div>

        <div className="border-t border-[#132019]/15">
          {education.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="grid gap-3 border-b border-[#132019]/15 py-7 sm:grid-cols-[130px_1fr]"
            >
              <p className="text-sm font-bold text-[#bd4936]">{item.years}</p>
              <div>
                <h3 className="font-grotesk text-xl font-bold md:text-2xl">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#132019]/65">{item.school}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
