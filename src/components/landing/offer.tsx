import { useState } from "react";
import { Check, ChevronDown, ShieldCheck } from "lucide-react";

const tiers = [
  {
    name: "Workflow Audit",
    blurb: "Send a recording of real work; get the diagnosis plus your first reusable assets.",
    price: "$150",
    features: [
      "15-minute increment Workflow Audit",
      "Ranked list of your highest-ROI fixes",
      "Starter template pack for your most repeated project",
      "Personal Resource Library: cheat sheets & shortcut guides",
    ],
    cta: "Get the audit",
  },
  {
    name: "System Blueprint",
    blurb: "The audit plus the written handbook that removes daily decisions.",
    price: "$250",
    features: [
      "Everything in the Workflow Audit",
      "Personal Operating Manual (files, ideas, tasks, email, desktop)",
      "Digital Workspace Redesign plan",
      "1:1 strategy call to walk through the system",
    ],
    cta: "Get the blueprint",
  },
  {
    name: "Personal Workflow System",
    blurb: "Live shadowing plus the full build — all seven deliverables, handed over.",
    price: "$500",
    featured: true,
    features: [
      "Live 1:1 shadowing session of your real work",
      "Full Personal Operating Manual + Workspace Redesign",
      "Workflow Templatization pack: project, app, folder & doc templates",
      "App Optimization, Custom Toolkit & Resource Library",
      "2 days/week guidance for 3 weeks + Visibly Faster guarantee",
    ],
    cta: "Build my system",
  },
  {
    name: "Done For You",
    blurb: "I build and install the entire system on your machine, in phases.",
    price: "$779",
    features: [
      "Everything in the Personal Workflow System",
      "White-glove build: templates and folders created for you",
      "Phased rollout, unlocked as each step is in real use",
      "Curated software stack installed and configured",
    ],
    cta: "Get it done for me",
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="mx-auto max-w-7xl px-4 py-24 sm:px-6">
      <div className="mx-auto mb-16 max-w-2xl text-center">
        <span className="text-xs font-extrabold uppercase tracking-widest text-primary">
          Offer stack
        </span>
        <h2 className="mt-2 text-3xl font-extrabold text-foreground sm:text-4xl">
          Choose How Much Of The System You Want Built
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Every tier ends with assets you keep — not a list of recommendations.
        </p>
      </div>

      <div className="grid items-stretch gap-8 md:grid-cols-2 lg:grid-cols-4">
        {tiers.map((t) => (
          <div
            key={t.name}
            className={`relative flex flex-col justify-between rounded-2xl border p-6 transition-all ${
              t.featured
                ? "border-2 border-primary bg-card shadow-xl"
                : "border-border bg-card hover:shadow-lg"
            }`}
          >
            {t.featured && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider text-primary-foreground">
                Most popular
              </span>
            )}
            <div>
              <h3 className="mt-1 mb-1 text-lg font-bold text-foreground">{t.name}</h3>
              <p className="mb-4 min-h-[48px] text-xs text-muted-foreground">{t.blurb}</p>
              <div className="mb-6">
                <span
                  className={`text-4xl font-extrabold ${t.featured ? "text-primary" : "text-foreground"}`}
                >
                  {t.price}
                </span>
              </div>
              <ul className="mb-6 space-y-3 text-xs text-muted-foreground">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <a
              href="#contact"
              className={`w-full rounded-xl px-4 py-3 text-center text-sm font-bold transition-all ${
                t.featured
                  ? "bg-primary text-primary-foreground shadow-md hover:bg-primary-strong"
                  : "border border-border bg-secondary text-secondary-foreground hover:bg-accent"
              }`}
            >
              {t.cta}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Guarantee() {
  return (
    <section className="border-y border-border bg-surface py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="rounded-3xl border border-border bg-card p-8 text-center shadow-sm sm:p-12">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-soft text-primary">
            <ShieldCheck className="h-9 w-9" />
          </div>
          <h2 className="mb-4 text-2xl font-extrabold text-foreground sm:text-3xl">
            The "Visibly Faster" Money-Back Guarantee
          </h2>
          <p className="mx-auto mb-6 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            Take the $500 Personal Workflow System or the $779 Done For You build. If you aren't
            visibly faster, noticeably more organized, and no longer starting projects from a blank
            page by the end of our work together...
          </p>
          <div className="mb-4 inline-block rounded-xl border border-primary/25 bg-primary-soft px-6 py-3 text-sm font-bold text-primary sm:text-base">
            I issue a full 100% refund. Zero questions asked.
          </div>
          <p className="text-xs text-muted-foreground">
            Recording privacy note: include everything in your screen recording, even distractions.
            Hide any personal or financial data — I only need to see how you work.
          </p>
        </div>
      </div>
    </section>
  );
}

const faqs = [
  [
    "What exactly do I walk away with?",
    "Files you own: a Workflow Audit, a Personal Operating Manual, a template pack for your recurring projects, a workspace layout, an app optimization guide, a curated software stack, and a personal resource library. It's a system, not a call recording.",
  ],
  [
    "How does the recording review work?",
    "You record your screen during a real project from start to finish using OBS or Loom. Include everything — even breaks or distractions (hide anything private). I analyze the footage in 15-minute increments to map exactly where time is lost and what you rebuild from scratch.",
  ],
  [
    "What does 'templatization' actually mean for my work?",
    "I look for every task that starts from a blank page — a video edit, a client doc, a project folder, a recurring email — and turn it into a template, checklist, or SOP you reuse. Most future projects then begin 30–80% finished.",
  ],
  [
    "Do I need to buy expensive software?",
    "No. The stack prioritizes free, open-source, and built-in tools. If a paid app is genuinely better, I say why and give you a free alternative with the trade-offs.",
  ],
  [
    "What if I'm not comfortable with live 1:1 calls?",
    "Take the $150 audit or the $779 Done For You build — both run asynchronously through structured video reports and step-by-step handoffs.",
  ],
  [
    "Windows 10 or Windows 11?",
    "Both. The system is designed on Windows 11, but the workspace architecture, templates, manual, and shortcuts apply equally to Windows 10.",
  ],
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="mx-auto max-w-4xl px-4 py-20 sm:px-6">
      <div className="mb-12 text-center">
        <span className="text-xs font-extrabold uppercase tracking-widest text-primary">
          Questions
        </span>
        <h2 className="mt-2 text-3xl font-extrabold text-foreground">
          Frequently Asked Questions
        </h2>
      </div>
      <div className="space-y-4">
        {faqs.map(([q, a], i) => (
          <div key={q} className="overflow-hidden rounded-xl border border-border bg-card">
            <button
              onClick={() => setOpen(open === i ? null : i)}
              aria-expanded={open === i}
              className="flex w-full items-center justify-between p-5 text-left text-sm font-bold text-foreground transition-colors hover:bg-surface"
            >
              <span>{q}</span>
              <ChevronDown
                className={`h-4 w-4 shrink-0 text-muted-foreground transition-transform ${
                  open === i ? "rotate-180" : ""
                }`}
              />
            </button>
            {open === i && (
              <div className="border-t border-border bg-surface/60 p-5 text-xs leading-relaxed text-muted-foreground">
                {a}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export function FinalCta() {
  return (
    <section id="contact" className="border-t border-border bg-ink py-20 text-ink-foreground">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <h2 className="text-3xl font-extrabold sm:text-4xl">
          Stop paying for advice. Start owning a system.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-sm text-ink-muted">
          Tell me how you work and which projects keep starting from scratch. I'll come back with
          the exact system I'd build for you.
        </p>
        <a
          href="mailto:hello@workflowsystems.co?subject=Personal%20Workflow%20System"
          className="mt-8 inline-block rounded-xl bg-primary px-8 py-4 text-base font-bold text-primary-foreground transition-all hover:bg-primary-strong"
        >
          Claim a client slot
        </a>
      </div>
    </section>
  );
}
