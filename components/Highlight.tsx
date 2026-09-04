"use client"
import { motion } from "framer-motion"

export default function Highlight() {
  return (
    <section className="py-24 bg-dark text-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-xs font-bold tracking-widest text-accent mb-4">MY WORK STYLE</p>
          <h2 className="font-grotesk text-4xl md:text-5xl font-bold leading-tight">
            &ldquo;Learn fast. Work accurately. Keep improving.&rdquo;
          </h2>
          <p className="text-lg text-gray-300 mt-6 max-w-2xl mx-auto">
            I am open to feedback and new challenges, and I aim to contribute to teams
            where reliability, communication, and continuous improvement matter.
          </p>
        </motion.div>
      </div>
    </section>
  )
}