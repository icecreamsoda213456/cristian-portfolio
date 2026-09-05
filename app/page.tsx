"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Menu, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import Scene from "@/components/Scene";
import { About } from "@/components/About";
import Projects from "@/components/Projects";
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
  { href: "#projects", label: "Projects" },
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
  const portraitY = useTransform(scrollYProgress, [0, 0.2], [24, -24]);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="mx-auto min-w-0 w-full max-w-[1160px] overflow-x-clip px-5 md:px-6">
      {/* Navbar */}
      <nav className="sticky top-0 h-[76px] flex items-center justify-between bg-background/90 backdrop-blur-md border-b border-black/10 dark:border-white/10 z-50">
        <ScrollProgress />
        <a href="#hero" className="font-grotesk text-lg font-bold sm:text-2xl">
          Cristian Espiritu<span className="text-accent-dark">.</span>
        </a>
        <div className="hidden md:flex gap-8 text-sm font-semibold text-muted">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-accent-dark">
              {link.label}
            </a>
          ))}
        </div>
        {/* Mobile menu — slide-out sheet */}
        <div className="md:hidden">
          <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
            <SheetTrigger
              aria-label="Open menu"
              className="p-2 -mr-2 rounded-md hover:bg-muted active:bg-muted"
            >
              <Menu className="size-6" />
            </SheetTrigger>
            <SheetContent side="right">
              <SheetTitle className="text-accent font-bold text-2xl">
                CE.
              </SheetTitle>
              <nav className="flex flex-col gap-6 mt-10 font-grotesk text-2xl">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="hover:text-accent"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
              <div className="mt-auto pt-6">
                <a href="#contact" onClick={() => setMenuOpen(false)} className="block">
                  <Button size="lg" className="w-full rounded-full h-12">
                    Let&apos;s Connect
                  </Button>
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>

      {/* Hero Section with 3D background */}
      <section
        id="hero"
        className="relative isolate grid min-w-0 min-h-[calc(100vh-76px)] grid-cols-1 items-center gap-10 overflow-hidden py-12 md:py-16 lg:grid-cols-[minmax(0,1.05fr)_minmax(360px,.95fr)] lg:py-20 xl:gap-14"
      >
        <Scene />
        <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-background/45 via-background/5 to-background/60" />

        <div className="relative z-10 min-w-0 max-w-2xl">
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-xs font-bold tracking-widest text-accent-dark mb-4">
            INFORMATION SYSTEMS • IT • OPERATIONS
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="break-words font-grotesk text-3xl font-bold leading-[1.08] sm:text-5xl md:text-6xl xl:text-7xl">
            Hi, I&apos;m <span className="text-accent-dark">Cristian</span>.<br />
            I turn organized work<br />
            into better solutions.
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="mt-6 min-w-0 max-w-lg text-base text-muted sm:text-lg">
            Information Systems Professional with hands-on experience in data encoding,
            e-commerce support, document preparation, and office operations. I value
            accuracy, reliability, continuous learning, and practical problem-solving.
          </motion.p>

          {/* Mini-stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-8 flex flex-wrap gap-x-8 gap-y-4 border-t border-black/10 pt-6 dark:border-white/10"
          >
            {heroStats.map((s) => (
              <div key={s.span}>
                <strong className="font-grotesk text-2xl">{s.strong}</strong>
                <span className="block text-xs text-muted">{s.span}</span>
              </div>
            ))}
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.65 }} className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
            <a href="#experience" className="w-full sm:w-auto"><Button size="lg" className="h-12 w-full rounded-full px-8 sm:w-auto">View My Experience</Button></a>
            <a href="#contact" className="w-full sm:w-auto"><Button variant="outline" size="lg" className="h-12 w-full rounded-full bg-surface px-8 sm:w-auto">Contact Me</Button></a>
          </motion.div>
        </div>

        <motion.div
          style={{ y: portraitY }}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="relative z-10 min-h-[420px] min-w-0 w-full overflow-hidden rounded-[28px] bg-dark shadow-2xl sm:aspect-[4/5] sm:min-h-0 lg:aspect-auto lg:h-[min(620px,calc(100vh-140px))] lg:min-h-[520px]"
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

      {/* Floating mobile CTA — always-visible contact shortcut */}
      <div className="fixed bottom-5 right-5 z-40 md:hidden">
        <a
          href="#contact"
          aria-label="Message me"
          className="flex w-14 h-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-2xl active:scale-95 transition-transform"
        >
          <MessageCircle className="size-6" />
        </a>
      </div>

      {/* Tech marquee */}
      <TechMarquee />

      {/* Sections */}
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Highlight />
      <Contact />
    </main>
  );
}
