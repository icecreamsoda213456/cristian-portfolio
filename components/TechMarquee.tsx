"use client";
import { motion } from "framer-motion";

const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "Sanity.io",
  "Tailwind",
  "Framer Motion",
  "Three.js",
  "Node.js",
];

const repeatedSkills = [...skills, ...skills];

export default function TechMarquee() {
  return (
    <div className="py-8 border-y border-border overflow-x-hidden whitespace-nowrap bg-background">
      <motion.div
        animate={{ x: "-50%" }}
        transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
        className="inline-flex gap-8"
      >
        {repeatedSkills.map((skill, i) => (
          <span
            key={i}
            className="text-3xl font-grotesk font-bold text-muted/30 hover:text-accent transition-colors"
          >
            {skill} <span className="text-accent">✦</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}