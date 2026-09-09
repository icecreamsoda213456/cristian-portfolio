"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowUpRight, ExternalLink } from "lucide-react"
import LiveDemoModal from "@/components/LiveDemoModal"
import { projects } from "@/lib/projects"

const pjGroup = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
} as const

const pjItem = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
} as const

export default function Projects() {
  return (
    <section id="projects" className="bg-[#f2f6f2] py-20 text-[#132019] md:py-28">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={pjGroup}
          className="grid gap-8 border-b border-[#132019]/15 pb-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end"
        >
          <motion.div variants={pjItem}>
            <p className="text-xs font-bold tracking-widest text-[#bd4936]">01 / SELECTED WORK</p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-[#132019]/65">
              A few projects that show how I think through products, data, and real user needs.
            </p>
          </motion.div>
          <motion.div variants={pjItem} className="lg:justify-self-end lg:text-right">
            <h2 className="max-w-3xl font-grotesk text-4xl font-bold leading-[1.02] tracking-normal md:text-6xl">
              Useful systems, made tangible.
            </h2>
            <Link
              href="/projects"
              className="mt-6 inline-flex items-center gap-2 border-b border-[#132019] pb-1 text-sm font-bold transition-colors hover:border-[#bd4936] hover:text-[#bd4936]"
            >
              Explore all project details
              <ArrowUpRight className="size-4" />
            </Link>
          </motion.div>
        </motion.div>

        <div className="divide-y divide-[#132019]/15">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className={`group grid gap-7 py-10 md:py-14 lg:grid-cols-[minmax(0,1.1fr)_minmax(300px,0.9fr)] lg:gap-12 ${index % 2 === 1 ? "lg:[&>figure]:order-2" : ""}`}
            >
              <figure className="min-w-0 self-start">
                <div className="relative aspect-[36/25] overflow-hidden border border-[#132019]/15 bg-[#dfeae6]">
                {project.imageSrc && (
                  <Image
                    src={project.imageSrc}
                    alt={`${project.title} preview`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 58vw"
                    className="object-contain transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                )}
                </div>
                <figcaption className="border-b border-[#132019]/15 py-3 text-xs font-bold text-[#132019]/65">
                  {String(index + 1).padStart(2, "0")} / {project.type.toUpperCase()}
                </figcaption>
              </figure>

              <div className="flex flex-col justify-between py-1">
                <div>
                  <p className="text-sm font-bold text-[#bd4936]">{project.type}</p>
                  <h3 className="mt-3 font-grotesk text-3xl font-bold leading-tight md:text-4xl">
                    {project.title}
                  </h3>
                  <p className="mt-5 leading-relaxed text-[#132019]/72">{project.description}</p>
                  <p className="mt-4 border-l-2 border-[#72bca9] pl-4 text-sm leading-relaxed text-[#132019]/82">
                    {project.impact}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className="border border-[#132019]/20 px-2.5 py-1 text-xs font-semibold text-[#132019]/70">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  {project.demoHref ? (
                    project.demoHref.startsWith("http") ? (
                      <LiveDemoModal demoUrl={project.demoHref} title={project.title} />
                    ) : (
                      <Link
                        href={project.demoHref}
                        className="inline-flex h-11 items-center gap-2 bg-[#132019] px-4 text-sm font-bold text-white transition-colors hover:bg-[#bd4936]"
                      >
                        Open project
                        <ExternalLink className="size-4" />
                      </Link>
                    )
                  ) : project.privateDemo ? (
                    <span className="inline-flex h-11 items-center border border-dashed border-[#132019]/30 px-4 text-sm font-bold text-[#132019]/65">
                      Private demo available on request
                    </span>
                  ) : null}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
