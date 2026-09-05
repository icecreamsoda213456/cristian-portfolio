import { ArrowLeft, ExternalLink } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { projects } from "@/lib/projects"

export default function ProjectsPage() {
  return (
    <main className="mx-auto w-full max-w-[1160px] px-5 py-12 md:px-6 md:py-16">
      <Link
        href="/"
        className="mb-10 inline-flex items-center text-sm font-semibold text-muted hover:text-accent-dark"
      >
        <ArrowLeft className="mr-2 size-4" />
        Back to portfolio
      </Link>

      <div className="mb-12 max-w-3xl">
        <p className="mb-4 text-xs font-bold tracking-widest text-accent-dark">
          PROJECT DEMOS
        </p>
        <h1 className="font-grotesk text-4xl font-bold leading-tight md:text-6xl">
          Selected work and demo-ready projects.
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-muted">
          These projects show practical experience in systems, operations,
          frontend development, backend workflows, and database-backed tools.
        </p>
      </div>

      <div className="grid gap-6">
        {projects.map((project) => (
          <article
            key={project.title}
            className="grid gap-6 overflow-hidden rounded-2xl border border-border bg-surface md:grid-cols-[1fr_260px]"
          >
            <div className="p-6 md:p-8">
              <div className="mb-3 text-xs font-bold tracking-widest text-accent-dark">
                {project.type}
              </div>
              <h2 className="font-grotesk text-3xl font-bold">
                {project.title}
              </h2>
              <p className="mt-4 leading-relaxed text-muted">
                {project.description}
              </p>
              <p className="mt-4 leading-relaxed text-foreground/80">
                {project.impact}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-border bg-background px-3 py-1 text-xs font-semibold text-muted"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col justify-between gap-4 bg-background p-5">
              {project.imageSrc && (
                <div className="relative aspect-video overflow-hidden rounded-xl bg-dark">
                  <Image
                    src={project.imageSrc}
                    alt={`${project.title} preview`}
                    fill
                    sizes="260px"
                    className="object-cover"
                  />
                </div>
              )}
              <div>
                <p className="text-sm font-semibold">What to add next</p>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  Add a screenshot, live demo link, or short video walkthrough
                  when ready.
                </p>
              </div>

              <div className="flex flex-col gap-3">
                {project.demoHref ? (
                  <Link
                    href={project.demoHref}
                    className="inline-flex h-10 items-center justify-center rounded-full bg-primary px-4 text-sm font-semibold text-primary-foreground hover:bg-primary/80"
                  >
                    Open demo
                    <ExternalLink className="ml-2 size-4" />
                  </Link>
                ) : (
                  <span className="inline-flex h-10 items-center justify-center rounded-full border border-dashed border-border px-4 text-sm font-semibold text-muted">
                    Demo link needed
                  </span>
                )}

              </div>
            </div>
          </article>
        ))}
      </div>
    </main>
  )
}
