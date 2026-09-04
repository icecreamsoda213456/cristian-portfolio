let isOpen = false;

const listeners = new Set<() => void>();

export function getCommandPaletteOpen() {
  return isOpen;
}

export function setCommandPaletteOpen(next: boolean) {
  isOpen = next;
  listeners.forEach((listener) => listener());
}

export function subscribeCommandPalette(listener: () => void) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}