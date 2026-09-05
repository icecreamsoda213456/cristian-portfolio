"use client"

import { ExternalLink, Maximize2, MonitorPlay, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

type LiveDemoModalProps = {
  demoUrl: string
  title: string
}

export default function LiveDemoModal({ demoUrl, title }: LiveDemoModalProps) {
  return (
    <Dialog>
      <DialogTrigger
        render={<Button className="h-10 rounded-full bg-primary px-4 text-sm font-semibold text-primary-foreground hover:bg-primary/80" />}
      >
        <MonitorPlay className="size-4" />
        Try live demo
      </DialogTrigger>
      <DialogContent className="h-[min(820px,88vh)] max-w-6xl">
        <div className="flex items-center gap-3 border-b border-white/10 bg-zinc-950 px-4 py-3">
          <div className="flex gap-1.5" aria-hidden="true">
            <span className="size-3 rounded-full bg-red-400" />
            <span className="size-3 rounded-full bg-amber-300" />
            <span className="size-3 rounded-full bg-emerald-400" />
          </div>
          <div className="min-w-0 flex-1 truncate rounded-md bg-zinc-900 px-3 py-2 font-mono text-xs text-zinc-400">
            {demoUrl}
          </div>
          <a
            href={demoUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="Open live demo in a new tab"
            title="Open in new tab"
            className="rounded-md p-2 text-zinc-400 transition-colors hover:bg-white/10 hover:text-white"
          >
            <Maximize2 className="size-4" />
          </a>
          <DialogClose
            aria-label="Close live demo"
            title="Close"
            className="rounded-md p-2 text-zinc-400 transition-colors hover:bg-white/10 hover:text-white"
          >
            <X className="size-4" />
          </DialogClose>
        </div>
        <DialogTitle className="sr-only">{title} live demo</DialogTitle>
        <iframe
          src={demoUrl}
          title={`${title} live demo`}
          className="min-h-0 flex-1 bg-white"
        />
        <div className="flex items-center justify-between gap-4 border-t border-white/10 bg-zinc-950 px-4 py-3 text-xs text-zinc-400">
          <span>Interactive demo with temporary sample data</span>
          <a
            href={demoUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex shrink-0 items-center gap-1.5 font-semibold text-white hover:text-accent"
          >
            Open full screen
            <ExternalLink className="size-3.5" />
          </a>
        </div>
      </DialogContent>
    </Dialog>
  )
}
