"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Boxes, ExternalLink, FolderKanban, ShoppingCart } from "lucide-react"
import Link from "next/link"
import { projects } from "@/lib/projects"
import LiveDemoModal from "@/components/LiveDemoModal"

const icons = [Boxes, ShoppingCart, FolderKanban]

export default function Projects() {
  return (
    <section id="projects" className="py-20 md:py-32 bg-surface">
      <div className="max-w-[1160px] mx-auto">
        <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-bold tracking-widest text-accent-dark mb-4">
              03 — PROJECTS
            </p>
            <h2 className="font-grotesk text-3xl md:text-5xl font-bold">
              Demos and sample work.
            </h2>
          </div>
          <Link
            href="/projects"
            className="inline-flex h-11 w-fit items-center justify-center rounded-full border border-border bg-background px-5 text-sm font-semibold hover:bg-secondary"
          >
            View all projects
            <ExternalLink className="ml-2 size-4" />
          </Link>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {projects.map((project, index) => {
            const Icon = icons[index] ?? FolderKanban

            return (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ y: -8 }}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-background shadow-sm"
              >
                {project.imageSrc && (
                  <div className="relative h-52 overflow-hidden bg-dark">
                    <Image
                      src={project.imageSrc}
                      alt={`${project.title} preview`}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                )}

                <div className="flex flex-1 flex-col p-6">
                <div className="mb-5 flex items-start justify-between gap-4">
                  <div className="flex size-11 items-center justify-center rounded-xl bg-secondary text-accent-dark">
                    <Icon className="size-5" />
                  </div>
                  <span className="rounded-full bg-accent/15 px-3 py-1 text-xs font-bold text-accent-dark">
                    {project.type}
                  </span>
                </div>

                <h3 className="font-grotesk text-2xl font-bold">{project.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {project.description}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-foreground/80">
                  {project.impact}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-border bg-surface px-3 py-1 text-xs font-semibold text-muted"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex flex-wrap gap-3 pt-8">
                  {project.demoHref ? (
                    project.demoHref.startsWith("http") ? (
                      <LiveDemoModal demoUrl={project.demoHref} title={project.title} />
                    ) : (
                      <Link
                        href={project.demoHref}
                        className="inline-flex h-10 items-center justify-center rounded-full bg-primary px-4 text-sm font-semibold text-primary-foreground hover:bg-primary/80"
                      >
                        Live demo
                        <ExternalLink className="ml-2 size-4" />
                      </Link>
                    )
                  ) : project.privateDemo ? (
                    <span className="inline-flex h-10 items-center justify-center rounded-full border border-dashed border-border px-4 text-sm font-semibold text-muted">
                      Private demo available on request
                    </span>
                  ) : (
                    <span className="inline-flex h-10 items-center justify-center rounded-full border border-dashed border-border px-4 text-sm font-semibold text-muted">
                      Demo link needed
                    </span>
                  )}

                </div>
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
