"use client";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import Scene from "@/components/Scene";
import { About } from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Highlight from "@/components/Highlight";
import Contact from "@/components/Contact";
import TechMarquee from "@/components/TechMarquee";
import ScrollProgress from "@/components/ScrollProgress";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

const heroStats = [
  { strong: "1+", span: "Years Working" },
  { strong: "3+", span: "Projects Built" },
  { strong: "100%", span: "Commitment" },
];

export default function Home() {
  // Global scroll progress — no target ref, so the framer-motion
  // "Target ref is defined but not hydrated" error can never occur.
  const { scrollYProgress } = useScroll();
  const portraitY = useTransform(scrollYProgress, [0, 0.2], [80, -80]);

  return (
    <main className="max-w-[1160px] mx-auto px-6 w-full">
      {/* Navbar */}
      <nav className="sticky top-0 h-[76px] flex items-center justify-between bg-background/90 backdrop-blur-md border-b border-black/10 dark:border-white/10 z-50">
        <ScrollProgress />
        <a href="#hero" className="font-grotesk text-2xl font-bold">
          CE<span className="text-accent-dark">.</span>
        </a>
        <div className="hidden md:flex gap-8 text-sm font-semibold text-muted">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-accent-dark">
              {link.label}
            </a>
          ))}
        </div>
      </nav>

      {/* Hero Section with 3D background */}
      <section
        id="hero"
        className="relative isolate min-h-[calc(100vh-76px)] grid lg:grid-cols-[1.1fr_.9fr] items-start gap-10 overflow-hidden py-20"
      >
        <Scene />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/20 to-background/70 pointer-events-none" />

        <div className="relative z-10">
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-xs font-bold tracking-widest text-accent-dark mb-4">
            INFORMATION SYSTEMS • IT • OPERATIONS
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-grotesk text-5xl md:text-7xl font-bold tracking-tighter leading-[1.05]">
            Hi, I&apos;m <span className="text-accent-dark">Cristian</span>.<br />
            I turn organized work<br />
            into better solutions.
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="mt-6 text-lg text-muted max-w-lg">
            Information Systems Professional with hands-on experience in data encoding,
            e-commerce support, document preparation, and office operations. I value
            accuracy, reliability, continuous learning, and practical problem-solving.
          </motion.p>

          {/* Mini-stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-8 flex gap-8 border-t border-black/10 dark:border-white/10 pt-6"
          >
            {heroStats.map((s) => (
              <div key={s.span}>
                <strong className="font-grotesk text-2xl">{s.strong}</strong>
                <span className="block text-xs text-muted">{s.span}</span>
              </div>
            ))}
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.65 }} className="mt-8 flex gap-4">
            <a href="#experience"><Button size="lg" className="rounded-full h-12 px-8">View My Experience</Button></a>
            <a href="#contact"><Button variant="outline" size="lg" className="rounded-full h-12 px-8 bg-surface">Contact Me</Button></a>
          </motion.div>
        </div>

        <motion.div
          style={{ y: portraitY }}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="relative min-h-[540px] bg-dark rounded-[30px] overflow-hidden shadow-2xl"
        >
          <Image
            src="/portrait.jpg"
            alt="Cristian Espiritu"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 480px"
            className="object-cover object-top"
          />
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black to-transparent z-10" />
          <div className="absolute inset-0 z-20 flex items-end p-6 text-white">
            <div>
              <span className="text-xs font-bold tracking-widest uppercase bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm">
                Open to opportunities
              </span>
              <h2 className="font-grotesk text-3xl mt-3">Cristian Espiritu</h2>
              <p className="text-gray-300 text-sm">Information Systems Professional</p>
            </div>
          </div>
          <div className="absolute z-20 top-6 right-6 font-mono text-xs text-accent bg-black/40 px-3 py-2 rounded-full backdrop-blur">
            &lt;problem-solving /&gt;
          </div>
        </motion.div>
      </section>

      {/* Tech marquee */}
      <TechMarquee />

      {/* Sections */}
      <About />
      <Skills />
      <Experience />
      <Education />
      <Highlight />
      <Contact />
    </main>
  );
}