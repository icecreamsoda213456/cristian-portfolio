"use client"
import { motion } from "framer-motion"

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-32">
      <div className="max-w-[1160px] mx-auto">
        <p className="text-xs font-bold tracking-widest text-accent-dark mb-4">05 — CONTACT</p>
        <h2 className="font-grotesk text-3xl md:text-5xl font-bold mb-12">Let&apos;s build something useful.</h2>
        <motion.div
          className="grid md:grid-cols-2 gap-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div>
            <p className="text-xl md:text-2xl font-semibold mb-6">
              Interested in working together or discussing an opportunity?
            </p>
            <a
              href="mailto:cristianespiritu23@gmail.com"
              className="font-grotesk text-xl md:text-2xl font-bold text-accent-dark hover:underline break-all"
            >
              cristianespiritu23@gmail.com
            </a>
          </div>
          <div className="space-y-6 text-muted">
            <p>
              <strong className="text-foreground">Phone</strong>
              <br />
              <a href="tel:+639923217914" className="hover:text-accent-dark">
                +63 992 321 7914
              </a>
            </p>
            <p>
              <strong className="text-foreground">Location</strong>
              <br />
              Plaridel, Bulacan, Philippines
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
