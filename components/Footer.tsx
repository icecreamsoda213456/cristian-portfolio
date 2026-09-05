"use client"

export default function Footer() {
  return (
    <footer className="py-10 px-5 md:px-6 border-t border-border bg-background">
      <div className="max-w-[1160px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted">
        <span>
          © <span className="font-semibold">2026</span> Cristian Espiritu
        </span>
        <span>Built with Next.js, React Three Fiber &amp; Tailwind CSS.</span>
      </div>
    </footer>
  )
}