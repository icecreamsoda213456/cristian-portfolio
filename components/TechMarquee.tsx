const signals = [
  {
    number: "01",
    label: "Build",
    detail: "Interfaces and systems with a real purpose.",
  },
  {
    number: "02",
    label: "Organize",
    detail: "Data, records, and workflows that stay dependable.",
  },
  {
    number: "03",
    label: "Support",
    detail: "Teams that need clear, careful operational help.",
  },
]

export default function TechMarquee() {
  return (
    <section className="border-b border-[#13231d] bg-[#d9eee5] text-[#13231d]">
      <div className="mx-auto grid max-w-[1240px] divide-y divide-[#13231d]/20 px-5 sm:px-8 md:grid-cols-3 md:divide-x md:divide-y-0">
        {signals.map((signal) => (
          <div key={signal.number} className="flex gap-4 py-6 md:px-6 md:first:pl-0 md:last:pr-0">
            <span className="font-grotesk text-sm font-bold text-[#e15d43]">{signal.number}</span>
            <div>
              <p className="font-grotesk text-lg font-bold">{signal.label}</p>
              <p className="mt-1 text-sm leading-relaxed text-[#13231d]/70">{signal.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
