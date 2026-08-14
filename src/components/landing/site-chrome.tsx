import { Link } from "@tanstack/react-router";
import { ArrowRight, Search, Repeat, FolderTree, Zap } from "lucide-react";

const navLinks = [
  { href: "#proof", label: "Proof" },
  { href: "#what-you-get", label: "What you get" },
  { href: "#how-it-works", label: "How it works" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
];

export function AnnouncementBar() {
  return (
    <div className="flex items-center justify-center gap-2 border-b border-ink/40 bg-ink px-4 py-2.5 text-center text-xs font-medium text-ink-foreground sm:text-sm">
      <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-primary" />
      <span>I take a limited number of clients each month</span>
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
            Work<span className="text-primary">Better</span>
          </span>
        </a>
        <div className="hidden items-center gap-8 text-sm font-semibold text-muted-foreground md:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="transition-colors hover:text-primary">
              {link.label}
            </a>
          ))}
        </div>
        <Link
          to="/apply"
          className="rounded-lg bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground shadow-sm transition-all hover:bg-primary-strong"
        >
          Get my audit
        </Link>
      </div>
    </nav>
  );
}

const badges = [
  { icon: Zap, label: "Faster", value: "Fewer clicks, fewer steps" },
  { icon: Search, label: "Findable", value: "Stop losing your work" },
  { icon: Repeat, label: "Reusable", value: "Never start from zero" },
  { icon: FolderTree, label: "Clear", value: "Everything has a place" },
];

export function Hero() {
  return (
    <header
      id="top"
      className="bg-grid mx-auto max-w-7xl px-4 pt-16 pb-20 sm:px-6 md:pt-24 md:pb-28 lg:px-8"
    >
      <div className="mx-auto max-w-4xl text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary-soft px-3.5 py-1.5 text-xs font-semibold text-primary sm:text-sm">
          <Zap className="h-4 w-4" />
          I make your computer work the way you wish it did
        </div>

        <h1 className="mb-6 text-4xl font-extrabold leading-[1.15] tracking-tight text-foreground sm:text-5xl md:text-6xl">
          Get Your <span className="text-primary">Digital Life</span> Together
        </h1>

        <p className="mx-auto mb-10 max-w-3xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
          I look at how you work, what tools you use, and where you're wasting time, then show you
          exactly what to change to make work{" "}
          <strong className="text-foreground">faster, easier and more focused</strong>.
        </p>

        <div className="mb-4 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            to="/apply"
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-8 py-4 text-base font-bold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:-translate-y-0.5 hover:bg-primary-strong sm:w-auto"
          >
            Get My Digital Workspace Audit <ArrowRight className="h-4 w-4" />
          </Link>
          <a
            href="#what-you-get"
            className="w-full rounded-xl border border-border bg-secondary px-8 py-4 text-base font-semibold text-secondary-foreground transition-all hover:bg-accent sm:w-auto"
          >
            See what you get
          </a>
        </div>
        <p className="mb-12 text-xs text-muted-foreground">
          Takes about 2 minutes. You get your friction score straight away.
        </p>

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
          <span className="text-base font-bold tracking-tight">WorkBetter</span>
        </div>
        <p className="mx-auto mb-6 max-w-md text-xs text-ink-muted">
          I find what's making your work harder than it needs to be, then help you build a better
          way to work.
        </p>
        <p className="text-[11px] text-ink-muted">
          &copy; {new Date().getFullYear()} WorkBetter. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
