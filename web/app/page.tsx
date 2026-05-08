import { DownloadCTA } from "@/components/DownloadCTA";

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen max-w-3xl flex-col px-6 py-16 md:py-24">
      <Nav />

      <section className="flex flex-1 flex-col items-center justify-center pt-12 text-center md:pt-20">
        <Eyebrow>Tempo · v1.0 · iOS</Eyebrow>
        <h1 className="mt-6 text-balance text-5xl font-semibold tracking-tight md:text-7xl">
          The calendar that{" "}
          <span className="text-[color:var(--accent,#2c63d6)]">schedules itself.</span>
        </h1>
        <p className="mt-6 max-w-xl text-pretty text-lg text-[color:var(--muted)] md:text-xl">
          Tempo plans your day around what actually matters — events, focus time, and the
          gaps in between. Plug in your calendar and let it route the rest.
        </p>

        <div className="mt-10">
          <DownloadCTA />
        </div>

        <ReleaseMeta />
      </section>

      <Features />
      <Footer />
    </main>
  );
}

function Nav() {
  return (
    <nav className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Logo />
        <span className="font-semibold tracking-tight">Tempo</span>
      </div>
      <div className="flex items-center gap-6 text-sm text-[color:var(--muted)]">
        <a href="#features" className="hover:text-[color:var(--fg)]">Features</a>
        <a href="/PRIVACY_POLICY.html" className="hover:text-[color:var(--fg)]">Privacy</a>
        <a href="mailto:tempo.studios@proton.me" className="hover:text-[color:var(--fg)]">Contact</a>
      </div>
    </nav>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-[color:var(--rule)] bg-[color:var(--card)] px-3 py-1 text-xs font-medium text-[color:var(--muted)]">
      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
      {children}
    </span>
  );
}

function ReleaseMeta() {
  return (
    <p className="mt-6 text-xs text-[color:var(--muted)]">
      Latest release · v1.0.0 · Requires iOS 17 or later
    </p>
  );
}

function Features() {
  const items = [
    {
      title: "Auto-scheduling",
      body: "Tempo finds room for what you care about — focus blocks, errands, recovery — between fixed events.",
    },
    {
      title: "Works with everything",
      body: "Reads any calendar already in iOS Settings: iCloud, Google, Outlook, Exchange, CalDAV.",
    },
    {
      title: "Private by default",
      body: "Calendar events never leave your device. Optional AI prompts go to Anthropic's API and aren't logged by us.",
    },
    {
      title: "Sync across devices",
      body: "Your themes, tasks, and busy windows mirror via iCloud Key-Value. Sign in once, pick up anywhere.",
    },
  ];

  return (
    <section id="features" className="mt-32 grid gap-6 md:grid-cols-2">
      {items.map((item) => (
        <div
          key={item.title}
          className="rounded-2xl border border-[color:var(--rule)] bg-[color:var(--card)] p-6"
        >
          <h3 className="text-lg font-semibold">{item.title}</h3>
          <p className="mt-2 text-[color:var(--muted)]">{item.body}</p>
        </div>
      ))}
    </section>
  );
}

function Footer() {
  return (
    <footer className="mt-32 flex flex-col items-center gap-2 border-t border-[color:var(--rule)] pt-8 text-sm text-[color:var(--muted)]">
      <p>© {new Date().getFullYear()} Tempo Studios</p>
      <div className="flex gap-4">
        <a href="/PRIVACY_POLICY.html" className="hover:text-[color:var(--fg)]">Privacy</a>
        <a href="/TERMS_OF_USE.html" className="hover:text-[color:var(--fg)]">Terms</a>
        <a href="mailto:tempo.studios@proton.me" className="hover:text-[color:var(--fg)]">Support</a>
      </div>
    </footer>
  );
}

function Logo() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="2" y="2" width="20" height="20" rx="6" fill="currentColor" />
      <path
        d="M7 9h10M12 9v8"
        stroke="var(--bg)"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}
