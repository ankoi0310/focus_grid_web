import Link from "next/link";

export default function LegalPageLayout({
  title,
  eyebrow,
  lastUpdated,
  children,
}: {
  title: string;
  eyebrow: string;
  lastUpdated: string;
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-full flex-1">
      <header className="border-b border-white/10 bg-[rgba(22,22,42,0.55)] backdrop-blur-md">
        <div className="mx-auto flex w-full max-w-3xl items-center justify-between px-5 py-5 sm:px-8">
          <Link
            href="/"
            className="font-display text-sm tracking-[0.22em] text-white/80 transition hover:text-white hover:neon-blue rounded-xl px-3 py-2"
          >
            ← FOCUS GRID
          </Link>
          <span className="text-[10px] uppercase tracking-[0.28em] text-white/45">
            HUD // LEGAL
          </span>
        </div>
      </header>

      <main className="mx-auto w-full max-w-3xl px-5 py-12 sm:px-8 sm:py-16">
        <div className="glass hud-border rounded-3xl p-8 sm:p-10">
          <p className="font-display text-xs uppercase tracking-[0.32em] text-white/55">
            {eyebrow}
          </p>
          <h1 className="font-display mt-3 text-3xl tracking-tight text-white/95 sm:text-4xl">
            {title}
          </h1>
          <p className="mt-3 text-sm text-white/55">Last updated: {lastUpdated}</p>

          <article className="prose-legal mt-10 space-y-8 text-sm leading-relaxed text-white/70">
            {children}
          </article>
        </div>

        <footer className="mt-10 flex flex-wrap items-center justify-between gap-4 text-xs text-white/50">
          <span>© Focus Grid</span>
          <div className="flex gap-4">
            <Link href="/privacy" className="transition hover:text-white/90">
              Privacy
            </Link>
            <Link href="/terms" className="transition hover:text-white/90">
              Terms
            </Link>
            <Link href="/" className="transition hover:text-white/90">
              Home
            </Link>
          </div>
        </footer>
      </main>
    </div>
  );
}

function LegalSection({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24">
      <h2 className="font-display text-base tracking-[0.12em] text-white/90">
        {title}
      </h2>
      <div className="mt-3 space-y-3">{children}</div>
    </section>
  );
}

export { LegalSection };
