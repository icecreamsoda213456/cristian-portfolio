import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowUpRight, ExternalLink } from "lucide-react"
import LiveDemoModal from "@/components/LiveDemoModal"
import { projects } from "@/lib/projects"

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[#f2f6f2] text-[#132019]">
      <header className="bg-[#0d1210] text-[#f3f7f1]">
        <div className="mx-auto max-w-[1240px] px-5 py-8 sm:px-8 md:py-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-bold text-white/65 transition-colors hover:text-[#72ddc7]"
          >
            <ArrowLeft className="size-4" />
            Back to portfolio
          </Link>

          <div className="mt-16 grid gap-10 pb-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="text-xs font-bold tracking-widest text-[#72ddc7]">SELECTED WORK / 2026</p>
              <h1 className="mt-5 font-grotesk text-5xl font-bold leading-[0.98] tracking-normal md:text-7xl">
                Selected projects.
              </h1>
            </div>
            <p className="max-w-xl text-lg leading-relaxed text-white/65 lg:justify-self-end">
              A closer look at the products and systems I have built around real workflows,
              records, and everyday human needs.
            </p>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-[1240px] px-5 py-16 sm:px-8 md:py-24">
        <div className="divide-y divide-[#132019]/15 border-y border-[#132019]/15">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className={`grid gap-8 py-10 md:py-14 lg:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.9fr)] lg:gap-14 ${index % 2 === 1 ? "lg:[&>figure]:order-2" : ""}`}
            >
              <figure className="min-w-0 self-start">
                <div className="relative aspect-[36/25] overflow-hidden border border-[#132019]/15 bg-[#dfeae6]">
                {project.imageSrc && (
                  <Image
                    src={project.imageSrc}
                    alt={`${project.title} preview`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 58vw"
                    className="object-contain"
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
                  <h2 className="mt-3 font-grotesk text-3xl font-bold leading-tight md:text-4xl">{project.title}</h2>
                  <p className="mt-5 leading-relaxed text-[#132019]/72">{project.description}</p>
                  <p className="mt-5 border-l-2 border-[#72bca9] pl-4 leading-relaxed text-[#132019]/82">{project.impact}</p>
                  {project.privateDemo && (
                    <p className="mt-5 text-sm font-semibold text-[#132019]/60">
                      Private mobile app with a separate public demo.
                    </p>
                  )}
                  <div className="mt-7 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className="border border-[#132019]/20 px-2.5 py-1 text-xs font-semibold text-[#132019]/70">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-9 flex flex-wrap gap-3">
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
                  ) : (
                    <a
                      href="mailto:cristianespiritu23@gmail.com?subject=Project%20demo%20request"
                      className="inline-flex h-11 items-center gap-2 border border-[#132019] px-4 text-sm font-bold transition-colors hover:border-[#bd4936] hover:text-[#bd4936]"
                    >
                      Request a walkthrough
                      <ArrowUpRight className="size-4" />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
