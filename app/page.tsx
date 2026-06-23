import { listAccounts } from "@/lib/accounts";
import { Brand, Tagline } from "@/components/Brand";
import { CompanyFinder } from "@/components/CompanyFinder";

export const dynamic = "force-dynamic";

const VALUE_PROPS = [
  { k: "Grounded in your stack", v: "Your platform, vertical, and numbers — not a generic deck." },
  { k: "CFO-grade, not hype", v: "Where AI actually moves margin, working capital, and revenue." },
  { k: "Ready in 30 seconds", v: "We did the homework before the event. Just find your company." },
];

/** Landing — find-your-company entry point (spec §5 / §11.3). */
export default async function LandingPage() {
  const accounts = await listAccounts();

  return (
    <main className="relative mx-auto flex min-h-[100dvh] w-full max-w-md flex-col px-5 pb-12 pt-6 sm:max-w-2xl sm:px-8 lg:max-w-4xl lg:px-10">
      {/* soft brand glow backdrop */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-80 bg-[radial-gradient(60%_100%_at_50%_0%,hsl(var(--accent)/0.14),transparent_70%)]"
      />

      <header className="flex items-center justify-between">
        <Brand />
        <span className="rounded-full border border-border px-2.5 py-1 text-[11px] text-muted-foreground">
          B2B Connect 2026
        </span>
      </header>

      <div className="flex flex-1 flex-col justify-center py-10 sm:items-center sm:text-center">
        <span className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs font-medium text-muted-foreground">
          <span className="size-1.5 rounded-full bg-accent" />
          Personalized for B2B Connect 2026 attendees
        </span>

        <h1 className="max-w-2xl font-display text-[28px] font-bold leading-[1.08] tracking-tight text-balance sm:text-4xl lg:text-5xl">
          Everyone here is doing AI.{" "}
          <span className="text-accent">Almost no one is doing it in commerce.</span>
        </h1>
        <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-muted-foreground sm:text-base">
          A CFO-grade read on where AI actually pays in <em>your</em> commerce. Enter your
          work email or company name and we&apos;ll pull up the report we prepared for you.
        </p>

        <div className="mt-7 w-full max-w-xl">
          <CompanyFinder accounts={accounts} />
          <p className="mt-3 text-center text-xs text-muted-foreground sm:text-left">
            No password, no demo gate. We already did the homework on{" "}
            <span className="text-foreground">{accounts.length}</span>{" "}
            {accounts.length === 1 ? "company" : "companies"} attending.
          </p>
        </div>

        <ul className="mt-10 grid w-full max-w-xl gap-3 sm:grid-cols-3 sm:text-left">
          {VALUE_PROPS.map((p) => (
            <li
              key={p.k}
              className="rounded-xl border border-border bg-card/50 p-4"
            >
              <p className="font-display text-sm font-semibold text-foreground">{p.k}</p>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{p.v}</p>
            </li>
          ))}
        </ul>
      </div>

      <footer className="mt-auto flex flex-col items-center gap-3 border-t border-border pt-5 text-center text-xs text-muted-foreground sm:flex-row sm:justify-between sm:text-left">
        <Tagline className="text-xs" />
        <span>500+ B2B brands · 25+ years · 1,200+ projects</span>
      </footer>
    </main>
  );
}
