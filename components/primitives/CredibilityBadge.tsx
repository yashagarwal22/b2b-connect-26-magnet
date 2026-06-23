import { BadgeCheck, CircleDashed } from "lucide-react";
import type { Credibility } from "@/lib/types";
import { Badge } from "@/components/ui/badge";

/** Verified vs. Illustrative label on every case stat and ROI figure (spec §8.1). */
export function CredibilityBadge({ variant }: { variant: Credibility }) {
  if (variant === "verified") {
    return (
      <Badge variant="verified">
        <BadgeCheck className="size-3" /> Verified
      </Badge>
    );
  }
  return (
    <Badge variant="illustrative">
      <CircleDashed className="size-3" /> Illustrative
    </Badge>
  );
}
