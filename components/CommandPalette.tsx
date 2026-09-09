"use client";
import { useEffect, useSyncExternalStore } from "react";
import { Command } from "cmdk";
import { useRouter } from "next/navigation";
import {
  getCommandPaletteOpen,
  setCommandPaletteOpen,
  subscribeCommandPalette,
} from "@/lib/command-palette";

const sections = [
  { id: "projects", label: "Selected Work" },
  { id: "about", label: "Profile" },
  { id: "skills", label: "Capabilities" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export default function CommandPalette() {
  const router = useRouter();
  const open = useSyncExternalStore(
    subscribeCommandPalette,
    getCommandPaletteOpen,
    getCommandPaletteOpen
  );

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "Escape") setCommandPaletteOpen(false);
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setCommandPaletteOpen(!getCommandPaletteOpen());
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 bg-black/50 z-[99] flex items-start justify-center p-4 pt-20"
      onClick={() => setCommandPaletteOpen(false)}
    >
      <div
        className="w-full max-w-lg rounded-lg shadow-2xl p-2 bg-popover text-popover-foreground ring-1 ring-border"
        onClick={(e) => e.stopPropagation()}
      >
        <Command>
          <Command.Input
            autoFocus
            aria-label="Search portfolio sections"
            placeholder="Search or jump to..."
            className="w-full p-3 outline-none border-b border-border bg-transparent"
          />
          <Command.List className="mt-2">
            <Command.Empty>No results found.</Command.Empty>
            <Command.Group heading="Sections">
              {sections.map((s) => (
                <Command.Item
                  key={s.id}
                  className="p-3 hover:bg-muted cursor-pointer rounded-md"
                  onSelect={() => {
                    router.push(`/#${s.id}`);
                    setCommandPaletteOpen(false);
                  }}
                >
                  {s.label}
                </Command.Item>
              ))}
            </Command.Group>
          </Command.List>
        </Command>
      </div>
    </div>
  );
}
