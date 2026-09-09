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
        render={<Button className="h-11 rounded-md bg-[#132019] px-4 text-sm font-semibold text-white hover:bg-[#bd4936]" />}
      >
        <MonitorPlay className="size-4" />
        Try live demo
      </DialogTrigger>
      <DialogContent className="h-[min(820px,calc(100dvh-2rem))] max-h-[calc(100dvh-2rem)] max-w-6xl rounded-lg">
        <div className="flex shrink-0 items-center gap-1 border-b border-white/10 bg-zinc-950 px-2 py-2 sm:gap-3 sm:px-4">
          <div className="hidden gap-1.5 sm:flex" aria-hidden="true">
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
            className="grid size-11 shrink-0 place-items-center rounded-md text-zinc-400 transition-colors hover:bg-white/10 hover:text-white"
          >
            <Maximize2 className="size-4" />
          </a>
          <DialogClose
            aria-label="Close live demo"
            title="Close"
            className="grid size-11 shrink-0 place-items-center rounded-md text-zinc-400 transition-colors hover:bg-white/10 hover:text-white"
          >
            <X className="size-4" />
          </DialogClose>
        </div>
        <DialogTitle className="sr-only">{title} live demo</DialogTitle>
        <iframe
          src={demoUrl}
          title={`${title} live demo`}
          className="min-h-0 w-full flex-1 bg-white"
        />
        <div className="flex shrink-0 items-center justify-end gap-4 border-t border-white/10 bg-zinc-950 px-4 text-xs text-zinc-400">
          <a
            href={demoUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-11 shrink-0 items-center gap-1.5 font-semibold text-white hover:text-accent"
          >
            Open full screen
            <ExternalLink className="size-3.5" />
          </a>
        </div>
      </DialogContent>
    </Dialog>
  )
}
