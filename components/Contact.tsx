"use client"

import { motion } from "framer-motion"
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react"

const ctaGroup = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
} as const

const ctaItem = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
} as const

export default function Contact() {
  return (
    <section id="contact" className="bg-[#0d1210] py-20 text-[#f3f7f1] md:py-28">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        <motion.p
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={ctaItem}
          className="text-xs font-bold tracking-widest text-[#72ddc7]"
        >
          07 / CONTACT
        </motion.p>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={ctaGroup}
          className="mt-6 grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end"
        >
          <motion.div variants={ctaItem}>
            <h2 className="max-w-3xl font-grotesk text-5xl font-bold leading-[0.98] tracking-normal md:text-7xl">
              Bring the next useful thing.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/64">
              For a role, a project, or a good conversation about a better workflow, I would be glad to hear from you.
            </p>
            <a
              href="mailto:cristianespiritu23@gmail.com"
              className="mt-10 inline-flex max-w-full items-center gap-3 border-b border-[#72ddc7] pb-2 font-grotesk text-base font-bold text-[#72ddc7] transition-colors hover:border-[#ff8666] hover:text-[#ffad97] sm:text-2xl"
            >
              <Mail className="size-5 shrink-0" />
              <span className="min-w-0">cristianespiritu23<wbr />@gmail.com</span>
              <ArrowUpRight className="size-5 shrink-0" />
            </a>
          </motion.div>

          <motion.div variants={ctaItem} className="border-t border-white/15">
            <a href="tel:+639923217914" className="flex gap-4 border-b border-white/15 py-5 transition-colors hover:text-[#72ddc7]">
              <Phone className="mt-0.5 size-5 shrink-0 text-[#ff8666]" />
              <div>
                <p className="text-xs font-bold tracking-widest text-white/45">PHONE</p>
                <p className="mt-1 font-grotesk text-lg font-bold">+63 992 321 7914</p>
              </div>
            </a>
            <div className="flex gap-4 border-b border-white/15 py-5">
              <MapPin className="mt-0.5 size-5 shrink-0 text-[#ff8666]" />
              <div>
                <p className="text-xs font-bold tracking-widest text-white/45">BASED IN</p>
                <p className="mt-1 font-grotesk text-lg font-bold">Plaridel, Bulacan, Philippines</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
