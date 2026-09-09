"use client"

import * as React from "react"
import { Dialog } from "@base-ui/react/dialog"
import { cn } from "cn"

/**
 * Sheet built on Base UI's Dialog primitive (matches this project's
 * shadcn v4 / @base-ui setup — Radix is not used here).
 * Renders a slide-in panel from any side, plus backdrop & close parts.
 */

type SheetSide = "top" | "bottom" | "left" | "right"

const sideClasses: Record<SheetSide, string> = {
  right: "inset-y-0 right-0 h-dvh w-[300px] max-w-[85vw] border-l data-[starting-style]:translate-x-full data-[ending-style]:translate-x-full",
  left: "inset-y-0 left-0 h-dvh w-[300px] max-w-[85vw] border-r data-[starting-style]:-translate-x-full data-[ending-style]:-translate-x-full",
  top: "inset-x-0 top-0 w-full max-h-[85vh] border-b data-[starting-style]:-translate-y-full data-[ending-style]:-translate-y-full",
  bottom:
    "inset-x-0 bottom-0 w-full max-h-[85vh] border-t data-[starting-style]:translate-y-full data-[ending-style]:translate-y-full",
}

function Sheet(props: Dialog.Root.Props) {
  return <Dialog.Root {...props} />
}

function SheetTrigger(props: Dialog.Trigger.Props) {
  return <Dialog.Trigger {...props} />
}

function SheetClose(props: Dialog.Close.Props) {
  return <Dialog.Close {...props} />
}

function SheetContent({
  className,
  children,
  side = "right",
  ...props
}: Dialog.Popup.Props & { side?: SheetSide }) {
  return (
    <Dialog.Portal>
      <Dialog.Backdrop
        className={cn(
          "fixed inset-0 z-50 bg-black/60 transition-opacity duration-300",
          "data-[starting-style]:opacity-0 data-[ending-style]:opacity-0",
        )}
      />
      <Dialog.Popup
        data-side={side}
        data-lenis-prevent
        className={cn(
          "fixed z-50 flex flex-col gap-4 overflow-y-auto overscroll-contain rounded-none bg-dark p-6 pb-[max(1.5rem,env(safe-area-inset-bottom))] text-white shadow-2xl outline-none [&>*]:shrink-0",
          "border-white/10 transition-transform duration-300 ease-out will-change-transform",
          sideClasses[side],
          className,
        )}
        {...props}
      >
        {children}
      </Dialog.Popup>
    </Dialog.Portal>
  )
}

function SheetHeader({ className, ...props }: React.ComponentProps<"div">) {
  return <div className={cn("flex flex-col gap-1.5", className)} {...props} />
}

function SheetFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("mt-auto flex flex-col gap-2 pt-4", className)}
      {...props}
    />
  )
}

function SheetTitle({ className, ...props }: Dialog.Title.Props) {
  return (
    <Dialog.Title
      className={cn("font-grotesk text-lg font-semibold", className)}
      {...props}
    />
  )
}

function SheetDescription({ className, ...props }: Dialog.Description.Props) {
  return (
    <Dialog.Description
      className={cn("text-sm text-muted", className)}
      {...props}
    />
  )
}

export {
  Sheet,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
}
