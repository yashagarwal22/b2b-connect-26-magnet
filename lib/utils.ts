import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Format a [lo, hi] $M range as "$X–$YM". Avoids false precision (spec §8). */
export function fmtRange([lo, hi]: [number, number], unit = "M"): string {
  const f = (n: number) =>
    Number.isInteger(n) ? `${n}` : n.toFixed(1).replace(/\.0$/, "");
  if (lo === hi) return `$${f(lo)}${unit}`;
  return `$${f(lo)}–$${f(hi)}${unit}`;
}
