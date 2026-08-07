import { ArrowRight, Layers, ShieldCheck, Repeat, CalendarClock } from "lucide-react";

const navLinks = [
  { href: "#system", label: "The System" },
  { href: "#templatization", label: "Templatization" },
  { href: "#process", label: "Process" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
];

export function AnnouncementBar() {
  return (
    <div className="flex items-center justify-center gap-2 border-b border-ink/40 bg-ink px-4 py-2.5 text-center text-xs font-medium text-ink-foreground sm:text-sm">
      <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-primary" />
      <span>Workflow Systems Design — a limited number of client slots each month</span>
    </div>
  );
}

export function Nav() {
  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#top" className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-lg font-black text-primary-foreground">
            W
          </span>
          <span className="text-lg font-bold tracking-tight text-foreground">
            Workflow<span className="text-primary">Systems</span>
          </span>
        </a>
        <div className="hidden items-center gap-8 text-sm font-semibold text-muted-foreground md:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="transition-colors hover:text-primary">
              {link.label}
            </a>
          ))}
        </div>
        <a
          href="#pricing"
          className="rounded-lg bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground shadow-sm transition-all hover:bg-primary-strong"
        >
          Build My System
        </a>
      </div>
    </nav>
  );
}

const badges = [
  { icon: Layers, label: "You keep it", value: "Tangible deliverables" },
  { icon: Repeat, label: "Centerpiece", value: "Workflow templatization" },
  { icon: ShieldCheck, label: "Risk-free", value: "Visibly Faster guarantee" },
  { icon: CalendarClock, label: "1:1 service", value: "Live workflow shadowing" },
];

export function Hero() {
  return (
    <header id="top" className="bg-grid mx-auto max-w-7xl px-4 pt-16 pb-20 sm:px-6 md:pt-24 md:pb-28 lg:px-8">
      <div className="mx-auto max-w-4xl text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary-soft px-3.5 py-1.5 text-xs font-semibold text-primary sm:text-sm">
          <Layers className="h-4 w-4" />
          Workflow Systems Design — not productivity advice
        </div>

        <h1 className="mb-6 text-4xl font-extrabold leading-[1.15] tracking-tight text-foreground sm:text-5xl md:text-6xl">
          I Leave You With A Complete{" "}
          <span className="text-primary">Operating System For How You Work</span>
        </h1>

        <p className="mx-auto mb-10 max-w-3xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
          I analyze how you work, identify everything that's slowing you down, and leave you with a
          complete operating system for your work — so every future project is faster, more
          organized, and starts with{" "}
          <strong className="text-foreground">reusable systems instead of a blank page</strong>.
        </p>

        <div className="mb-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#pricing"
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-8 py-4 text-base font-bold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:-translate-y-0.5 hover:bg-primary-strong sm:w-auto"
          >
            Get My Workflow System <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#system"
            className="w-full rounded-xl border border-border bg-secondary px-8 py-4 text-base font-semibold text-secondary-foreground transition-all hover:bg-accent sm:w-auto"
          >
            See What You Keep
          </a>
        </div>

        <div className="grid grid-cols-2 gap-4 border-t border-border pt-8 text-left md:grid-cols-4">
          {badges.map(({ icon: Icon, label, value }) => (
            <div key={value} className="flex items-center gap-3">
              <div className="rounded-lg bg-primary-soft p-2 text-primary">
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-medium text-muted-foreground">{label}</p>
                <p className="text-xs font-bold text-foreground">{value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-ink/40 bg-ink py-12 text-ink-foreground">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <div className="mb-4 flex items-center justify-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary text-sm font-black text-primary-foreground">
            W
          </span>
          <span className="text-base font-bold tracking-tight">WorkflowSystems</span>
        </div>
        <p className="mx-auto mb-6 max-w-md text-xs text-ink-muted">
          Workflow systems design for knowledge workers, solo creators, and editors. I build the
          system; you keep it forever.
        </p>
        <p className="text-[11px] text-ink-muted">
          &copy; {new Date().getFullYear()} WorkflowSystems. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
