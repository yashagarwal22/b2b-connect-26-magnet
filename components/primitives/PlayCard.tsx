"use client";
import { Target, Trophy, Wrench } from "lucide-react";
import type { Play } from "@/lib/types";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CredibilityBadge } from "./CredibilityBadge";
import { SourceTooltip } from "./SourceTooltip";
import { Badge } from "@/components/ui/badge";
import { PILLARS } from "@/lib/content";
import { track } from "@/lib/posthog";

/** A play card: play → problem → named lookalike → ROI → what i95Dev does (spec §6 Module 6). */
export function PlayCard({ play, index }: { play: Play; index: number }) {
  return (
    <Card className="h-full overflow-hidden">
      <CardContent className="p-0">
        <Accordion type="single" collapsible>
          <AccordionItem value={play.id} className="border-b-0">
            <div className="px-5 pt-5">
              <div className="mb-2 flex items-center justify-between gap-2">
                <Badge variant="outline" className="font-display text-[11px] uppercase tracking-wider">
                  {PILLARS[play.pillar].label}
                </Badge>
                <CredibilityBadge variant={play.credibility} />
              </div>
              <h3 className="font-display text-lg font-semibold leading-tight tracking-tight">
                {play.title}
              </h3>
              <p className="mt-2 flex gap-2 text-sm text-muted-foreground">
                <Target className="mt-0.5 size-4 shrink-0 text-primary" />
                <span>{play.problem}</span>
              </p>
            </div>
            <AccordionTrigger
              className="px-5 text-accent"
              onClick={() => track("play_card_expanded", { play_id: play.id })}
            >
              The case & the ROI
            </AccordionTrigger>
            <AccordionContent className="px-5">
              <div className="space-y-3">
                <div className="flex gap-2">
                  <Trophy className="mt-0.5 size-4 shrink-0 text-accent" />
                  <p className="text-sm text-foreground">
                    <span className="font-semibold">{play.caseName}.</span>{" "}
                    {play.caseDetail}
                    {play.source ? <SourceTooltip source={play.source} /> : null}
                  </p>
                </div>
                <p className="rounded-md bg-secondary/20 px-3 py-2 text-sm text-foreground">
                  <span className="font-semibold text-accent">ROI: </span>
                  {play.roi}
                </p>
                <div className="flex gap-2">
                  <Wrench className="mt-0.5 size-4 shrink-0 text-primary" />
                  <p className="text-sm text-muted-foreground">
                    <span className="font-semibold text-foreground">What i95Dev does:</span>{" "}
                    {play.whatI95Does}
                  </p>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  );
}
