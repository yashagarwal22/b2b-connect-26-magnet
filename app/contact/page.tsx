import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Brand, Tagline } from "@/components/Brand";
import { ContactForm } from "@/components/ContactForm";

export const dynamic = "force-dynamic";

/** Generic capture for companies not in our prepared set (spec §5 fallback). */
export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ company?: string; email?: string }>;
}) {
  const { company, email } = await searchParams;

  return (
    <main className="relative mx-auto flex min-h-[100dvh] w-full max-w-md flex-col px-5 pb-12 pt-6 sm:max-w-2xl sm:px-8">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-72 bg-[radial-gradient(60%_100%_at_50%_0%,hsl(var(--accent)/0.12),transparent_70%)]"
      />

      <header className="flex items-center justify-between">
        <Link href="/" aria-label="Home">
          <Brand />
        </Link>
        <span className="rounded-full border border-border px-2.5 py-1 text-[11px] text-muted-foreground">
          B2B Connect 2026
        </span>
      </header>

      <div className="flex flex-1 flex-col justify-center py-10">
        <Link
          href="/"
          className="mb-6 inline-flex w-fit items-center gap-1.5 text-xs text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="size-3.5" /> Back to company search
        </Link>

        <span className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs font-medium text-muted-foreground">
          <span className="size-1.5 rounded-full bg-accent" />
          {company ? `We don't have ${company} yet` : "Not on the attendee list?"}
        </span>

        <h1 className="font-display text-[28px] font-bold leading-[1.1] tracking-tight text-balance sm:text-4xl">
          Let&apos;s build <span className="text-accent">your</span> AI-in-commerce read.
        </h1>
        <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-muted-foreground sm:text-base">
          We prepared reports for the companies attending B2B Connect 2026. Drop your details
          and we&apos;ll put together the same CFO-grade read for your business and follow up
          right after the event.
        </p>

        <div className="mt-8 rounded-2xl border border-border bg-card/50 p-5 sm:p-6">
          <ContactForm defaultCompany={company ?? ""} defaultEmail={email ?? ""} />
        </div>
      </div>

      <footer className="mt-auto flex flex-col items-center gap-3 border-t border-border pt-5 text-center text-xs text-muted-foreground sm:flex-row sm:justify-between sm:text-left">
        <Tagline className="text-xs" />
        <span>500+ B2B brands · 25+ years · 1,200+ projects</span>
      </footer>
    </main>
  );
}
