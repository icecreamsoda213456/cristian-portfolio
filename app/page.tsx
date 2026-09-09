"use client"

import { useState } from "react"
import Image from "next/image"
import dynamic from "next/dynamic"
import { motion } from "framer-motion"
import { ArrowDown, ArrowUpRight, Mail, Menu, X } from "lucide-react"
import {
  Sheet,
  SheetContent,
  SheetClose,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { About } from "@/components/About"
import Projects from "@/components/Projects"
import Skills from "@/components/Skills"
import Experience from "@/components/Experience"
import Education from "@/components/Education"
import Highlight from "@/components/Highlight"
import Contact from "@/components/Contact"
import TechMarquee from "@/components/TechMarquee"
import ScrollProgress from "@/components/ScrollProgress"

const Scene = dynamic(() => import("@/components/Scene"), { ssr: false })

const navLinks = [
  { href: "#projects", label: "Work" },
  { href: "#about", label: "Profile" },
  { href: "#skills", label: "Capabilities" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
]

const proofPoints = [
  { value: "02", label: "featured builds" },
  { value: "40+", label: "tools and platforms" },
  { value: "2024", label: "BSIS graduate" },
]

const heroLine = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
} as const

const heroList = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09 } },
} as const

const heroStagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
} as const

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <main id="main-content" className="min-w-0 w-full overflow-x-clip">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0d1210]/95 text-[#f3f7f1] backdrop-blur-md">
        <ScrollProgress />
        <nav className="portfolio-nav mx-auto flex h-[72px] max-w-[1240px] items-center justify-between gap-4 px-5 sm:px-8" aria-label="Primary navigation">
          <a href="#hero" aria-label="Cristian Espiritu, home" className="font-grotesk text-lg font-bold tracking-normal sm:text-xl">
            C<span className="text-[#72ddc7]">.</span>E
          </a>

          <div className="hidden items-center gap-7 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-semibold text-white/65 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className="ml-auto hidden min-h-11 shrink-0 items-center gap-2 border border-white/20 px-4 text-sm font-semibold text-white transition-colors hover:border-[#72ddc7] hover:text-[#72ddc7] sm:inline-flex lg:ml-0"
          >
            Start a conversation
            <ArrowUpRight className="size-4" />
          </a>

          <div className="flex items-center gap-3 lg:hidden">
            <a href="#contact" aria-label="Contact Cristian" title="Contact Cristian" className="grid size-11 place-items-center text-[#72ddc7] sm:hidden">
              <Mail className="size-5" />
            </a>
            <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
              <SheetTrigger
                aria-label="Open menu"
                title="Open menu"
                className="grid size-11 shrink-0 place-items-center text-white transition-colors hover:text-[#72ddc7]"
              >
                <Menu className="size-6" />
              </SheetTrigger>
              <SheetContent side="right" className="bg-[#101613] text-[#f3f7f1]">
                <div className="flex items-center justify-between">
                  <SheetTitle className="font-grotesk text-xl font-bold text-[#f3f7f1]">
                    C<span className="text-[#72ddc7]">.</span>E
                  </SheetTitle>
                  <SheetClose aria-label="Close menu" title="Close menu" className="grid size-11 place-items-center hover:text-[#72ddc7]">
                    <X className="size-5" />
                  </SheetClose>
                </div>
                <nav className="mt-6 flex flex-col gap-4 font-grotesk text-2xl" aria-label="Mobile navigation">
                  {navLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className="border-b border-white/10 pb-4 transition-colors hover:text-[#72ddc7]"
                    >
                      {link.label}
                    </a>
                  ))}
                </nav>
                <a
                  href="mailto:cristianespiritu23@gmail.com"
                  onClick={() => setMenuOpen(false)}
                  className="mt-12 inline-flex items-center gap-2 border border-[#72ddc7] px-4 py-3 text-sm font-semibold text-[#72ddc7]"
                >
                  Email Cristian
                  <Mail className="size-4" />
                </a>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </header>

      <section id="hero" className="portfolio-hero relative isolate overflow-hidden bg-[#0d1210] text-[#f3f7f1]">
        <Scene />
        <div className="hero-desktop-portrait absolute inset-y-0 right-0 z-[1] hidden w-[47%] overflow-hidden lg:block [clip-path:polygon(36%_0,100%_0,100%_100%,0_100%)]">
          <Image
            src="/portrait.jpg"
            alt="Cristian Espiritu at his graduation"
            fill
            loading="eager"
            sizes="47vw"
            className="object-cover object-[center_25%]"
          />
        </div>

        <motion.div
          className="hero-content relative z-20 mx-auto flex min-h-[min(740px,calc(88svh-72px))] max-w-[1240px] flex-col justify-center px-5 py-8 sm:px-8 sm:py-12 lg:py-10"
          variants={heroStagger}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={heroList} className="hero-intro min-w-0 max-w-[720px] lg:max-w-[58%]">
            <motion.p variants={heroLine} className="hero-eyebrow mb-4 flex items-center gap-3 text-xs font-bold tracking-widest text-[#72ddc7] sm:mb-6">
              <span className="size-2 shrink-0 bg-[#72ddc7]" />
              INFORMATION SYSTEMS / WEB / MOBILE
            </motion.p>

            <motion.div variants={heroLine} className="hero-identity grid grid-cols-[minmax(0,1fr)_112px] items-center gap-4 sm:grid-cols-[minmax(0,1fr)_180px] lg:block">
              <h1 className="min-w-0 max-w-full font-grotesk text-5xl font-bold leading-[0.97] sm:text-7xl xl:text-8xl">
                Cristian<br /><span className="text-[#ff8666]">Espiritu.</span>
              </h1>
              <div className="hero-mobile-portrait relative aspect-[4/5] overflow-hidden lg:hidden">
                <Image
                  src="/portrait.jpg"
                  alt="Cristian Espiritu at his graduation"
                  fill
                  loading="eager"
                  sizes="(min-width: 1024px) 1px, (min-width: 640px) 180px, 112px"
                  className="object-cover object-[center_25%]"
                />
              </div>
            </motion.div>

            <motion.p variants={heroLine} className="hero-tagline mt-5 max-w-lg font-grotesk text-xl font-medium leading-snug sm:text-2xl lg:text-3xl">
              From everyday workflows<br className="hidden sm:block" /> to working software.
            </motion.p>
            <motion.p variants={heroLine} className="hero-description mt-5 max-w-xl break-words text-[15px] leading-relaxed text-white/68 sm:mt-7 sm:text-lg">
              Web apps, mobile experiences, and dependable business systems.
              Built with an Information Systems background and hands-on experience in operations.
            </motion.p>

            <motion.div variants={heroLine} className="hero-actions mt-7 flex flex-col gap-3 sm:mt-9 sm:flex-row">
              <a
                href="#projects"
                className="inline-flex h-12 items-center justify-center gap-2 bg-[#72ddc7] px-5 text-sm font-bold text-[#0d1210] transition-colors hover:bg-[#9aead7] sm:w-auto"
              >
                View selected work
                <motion.span
                  aria-hidden="true"
                  animate={{ y: [0, 5, 0] }}
                  transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                  className="inline-flex"
                >
                  <ArrowDown className="size-4" />
                </motion.span>
              </a>
              <a
                href="#contact"
                className="hidden h-12 items-center justify-center gap-2 border border-white/25 px-5 text-sm font-bold text-white transition-colors hover:border-[#ff8666] hover:text-[#ffad97] sm:inline-flex sm:w-auto"
              >
                Get in touch
                <ArrowUpRight className="size-4" />
              </a>
            </motion.div>
          </motion.div>

          <motion.div variants={heroLine} className="hero-proof mt-8 grid min-w-0 max-w-2xl grid-cols-3 border-t border-white/15 pt-4 sm:mt-10 sm:pt-5 lg:max-w-[56%]">
            {proofPoints.map((item) => (
              <div key={item.label} className="min-w-0 border-l border-white/15 px-2 first:border-l-0 first:pl-0 sm:px-3">
                <p className="font-grotesk text-2xl font-bold text-white sm:text-3xl">{item.value}</p>
                <p className="mt-1 text-[10px] font-semibold tracking-wide text-white/55 sm:text-xs">{item.label}</p>
              </div>
            ))}
          </motion.div>

        </motion.div>
      </section>

      <TechMarquee />
      <Projects />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Highlight />
      <Contact />
    </main>
  )
}
