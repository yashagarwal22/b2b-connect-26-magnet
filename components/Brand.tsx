import Image from "next/image";
import { cn } from "@/lib/utils";
import shield from "@/public/i95dev-shield.png";

/** i95Dev brand lockup — the official interstate-shield mark + wordmark (spec §9). */
export function Brand({
  className,
  size = "md",
}: {
  className?: string;
  size?: "sm" | "md" | "lg";
}) {
  const mark = size === "lg" ? 44 : size === "sm" ? 26 : 32;
  const word =
    size === "lg" ? "text-2xl" : size === "sm" ? "text-base" : "text-lg";
  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      <Image src={shield} alt="i95Dev" width={mark} height={mark} priority />
      <span
        className={cn(
          "font-display font-bold tracking-tight text-foreground",
          word
        )}
      >
        i95Dev
      </span>
    </div>
  );
}

export function Tagline({ className }: { className?: string }) {
  return (
    <p className={cn("font-display text-sm font-semibold tracking-tight", className)}>
      Strategy. AI. Commerce. <span className="text-primary">Unified.</span>
    </p>
  );
}
