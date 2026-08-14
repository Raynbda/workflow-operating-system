import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Check, ChevronDown, ShieldCheck } from "lucide-react";

const tiers = [
  {
    name: "Done With You",
    blurb: "I design the setup and give you a step-by-step plan. You put it in place.",
    price: "$500",
    featured: true,
    features: [
      "I study your recording and your answers in detail",
      "A personalised video walking through what to change and why",
      "A written, step-by-step plan you can follow at your own pace",
      "The right tools, shortcuts and settings for your work",
      "Templates and a clear place for your files, notes and tasks",
    ],
    cta: "Start with Done With You",
  },
  {
    name: "Done For You",
    blurb: "I set it all up on your machine, then show you how to use it.",
    price: "$1,000",
    features: [
      "Everything in Done With You",
      "I build the folders, templates and layouts for you",
      "Your apps installed, configured and set up around your work",
      "Rolled out in stages, so nothing breaks your current work",
      "A handover session so you actually use it",
    ],
    cta: "Get it done for me",
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="mx-auto max-w-5xl px-4 py-24 sm:px-6">
      <div className="mx-auto mb-16 max-w-2xl text-center">
        <span className="text-xs font-extrabold uppercase tracking-widest text-primary">
          Pricing
        </span>
        <h2 className="mt-2 text-3xl font-extrabold text-foreground sm:text-4xl">
          Two ways to work together
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Not sure which one? Fill in the form and I'll recommend one for you.
        </p>
      </div>

      <div className="grid items-stretch gap-8 md:grid-cols-2">
        {tiers.map((t) => (
          <div
            key={t.name}
            className={`relative flex flex-col justify-between rounded-2xl border p-7 transition-all ${
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
              <p className="mb-4 min-h-[40px] text-xs text-muted-foreground">{t.blurb}</p>
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
            <Link
              to="/apply"
              className={`w-full rounded-xl px-4 py-3 text-center text-sm font-bold transition-all ${
                t.featured
                  ? "bg-primary text-primary-foreground shadow-md hover:bg-primary-strong"
                  : "border border-border bg-secondary text-secondary-foreground hover:bg-accent"
              }`}
            >
              {t.cta}
            </Link>
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
            The "visibly faster" money-back guarantee
          </h2>
          <p className="mx-auto mb-6 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            If you aren't visibly faster, clearly more organised, and no longer starting things from
            a blank page by the end of our work together...
          </p>
          <div className="mb-4 inline-block rounded-xl border border-primary/25 bg-primary-soft px-6 py-3 text-sm font-bold text-primary sm:text-base">
            You get a full refund. No questions asked.
          </div>
          <p className="text-xs text-muted-foreground">
            About the recording: include everything, even the distractions. Just hide anything
            personal or financial — I only need to see how you work.
          </p>
        </div>
      </div>
    </section>
  );
}

const faqs = [
  [
    "What do I actually get?",
    "A personalised video plus a written plan: faster ways to do your daily tasks, the tools worth using, a clear place for your files, notes and tasks, and templates for the things you keep redoing. With Done For You, I also set it all up on your machine.",
  ],
  [
    "Why do you need a screen recording?",
    "Because most friction is habitual — you've stopped noticing it. Two or three minutes of normal work shows me more than an hour of conversation. Hide anything private; I only need to see how you work.",
  ],
  [
    "Do I have to get on a call?",
    "No. Everything runs through the form, your recording, and video replies. If you want a call, we can do one, but nothing depends on it.",
  ],
  [
    "Do I need to buy expensive software?",
    "No. I start with free, open-source and built-in tools. If a paid app is genuinely better, I tell you why and give you a free alternative too.",
  ],
  [
    "How fast do you reply?",
    "Your personalised video and written plan land in your inbox within 48 hours of your submission.",
  ],
  [
    "Windows 10 or Windows 11?",
    "Both. Most of it also applies if you use a Mac, since the thinking matters more than the operating system.",
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
        <h2 className="mt-2 text-3xl font-extrabold text-foreground">Frequently asked questions</h2>
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
    <section className="border-t border-border bg-ink py-20 text-ink-foreground">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <h2 className="text-3xl font-extrabold sm:text-4xl">
          Let's make your computer work the way you wish it did.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-sm text-ink-muted">
          Answer a few questions about how you work. You'll see your friction score right away, and
          your personalised plan follows within 48 hours.
        </p>
        <Link
          to="/apply"
          className="mt-8 inline-block rounded-xl bg-primary px-8 py-4 text-base font-bold text-primary-foreground transition-all hover:bg-primary-strong"
        >
          Get My Digital Workspace Audit
        </Link>
      </div>
    </section>
  );
}
