import { useState } from "react";
import {
  Boxes,
  Brain,
  FolderTree,
  Gauge,
  Repeat,
  Search,
  UserCog,
  Wrench,
} from "lucide-react";

const principles = [
  {
    title: "I know when not to use a tool",
    body: "Simple beats clever. I don't add apps you'll abandon in a week.",
  },
  {
    title: "I remove before I add",
    body: "Fewer steps, fewer apps, fewer decisions — first. New tools come after.",
  },
  {
    title: "Everything is written down",
    body: "The setup keeps working when I'm not there, because it's yours to keep.",
  },
  {
    title: "Tested on real work",
    body: "These are systems I use daily, not ideas I read about.",
  },
];

export function Proof() {
  return (
    <section id="proof" className="border-y border-border bg-surface py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-12">
        <div className="rounded-3xl bg-primary p-8 text-primary-foreground shadow-xl sm:p-10 lg:col-span-5">
          <span className="text-xs font-bold uppercase tracking-widest opacity-80">
            Who builds it
          </span>
          <h3 className="mt-2 mb-6 text-2xl font-extrabold sm:text-3xl">
            Someone who has done this to his own setup, for years
          </h3>
          <div className="space-y-4 text-sm leading-relaxed opacity-90">
            <p>
              I've spent 3+ years making technical content about Windows and testing more than 100
              apps and utilities to see which ones actually hold up in daily work.
            </p>
            <p>
              I don't hand out tips. I test setups for months, keep what survives, and then build
              that for you.
            </p>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-4 border-t border-primary-foreground/25 pt-6">
            {[
              ["100+", "Tools tested"],
              ["20 → 80", "WPM typing speed"],
              ["2,500+", "Curated bookmarks"],
              ["3,000+", "Notes written"],
            ].map(([v, l]) => (
              <div key={l}>
                <span className="block text-2xl font-black">{v}</span>
                <span className="text-xs opacity-80">{l}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6 lg:col-span-7">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-widest text-primary">
              Why this works
            </span>
            <h2 className="mt-1 text-3xl font-extrabold text-foreground">
              Real experience, not generic productivity advice
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {principles.map((p) => (
              <div key={p.title} className="rounded-xl border border-border bg-card p-4">
                <h4 className="mb-1 text-sm font-bold text-foreground">{p.title}</h4>
                <p className="text-xs text-muted-foreground">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function BeforeAfter() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-20 sm:px-6">
      <div className="mx-auto mb-12 max-w-2xl text-center">
        <span className="text-xs font-extrabold uppercase tracking-widest text-primary">
          The change
        </span>
        <h2 className="mt-2 text-3xl font-extrabold text-foreground">
          From “where did I put that?” to “I know exactly where it is”
        </h2>
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="rounded-2xl border border-border bg-card p-6 opacity-90">
          <span className="text-xs font-extrabold uppercase tracking-widest text-muted-foreground">
            Before
          </span>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground">
            “Where did I put that? There must be a faster way. Which app should I use? I know I
            already made this. Why does everything take so long?”
          </p>
        </div>
        <div className="rounded-2xl border border-primary/30 bg-primary-soft p-6">
          <span className="text-xs font-extrabold uppercase tracking-widest text-primary">
            After
          </span>
          <p className="mt-3 text-base font-medium leading-relaxed text-foreground">
            “I know where everything goes. I know how to do things quickly. My tools work together.
            And I can actually focus on my work.”
          </p>
        </div>
      </div>
    </section>
  );
}

const gets = [
  {
    icon: Gauge,
    title: "Faster ways to work",
    body: "Shortcuts, better ways to do common tasks, and a lot less clicking.",
  },
  {
    icon: Wrench,
    title: "Better tools",
    body: "Apps and features that solve the problems you currently struggle with.",
  },
  {
    icon: FolderTree,
    title: "A cleaner system",
    body: "Files, notes, tasks, tabs and information all have a clear place.",
  },
  {
    icon: Search,
    title: "Easy to find everything",
    body: "Stop losing things or recreating work you already did.",
  },
  {
    icon: Repeat,
    title: "More reuse",
    body: "Turn past work into templates, assets and resources you can use again.",
  },
  {
    icon: Brain,
    title: "Less mental clutter",
    body: "Get information and tasks out of your head and into something you trust.",
  },
  {
    icon: Boxes,
    title: "A smoother workflow",
    body: "Fewer repeated steps, fewer decisions, less jumping between apps.",
  },
  {
    icon: UserCog,
    title: "A setup built for you",
    body: "Not another generic productivity system you'll abandon.",
  },
];

export function WhatYouGet() {
  return (
    <section id="what-you-get" className="border-y border-border bg-surface py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="text-xs font-extrabold uppercase tracking-widest text-primary">
            What you get
          </span>
          <h2 className="mt-2 text-3xl font-extrabold text-foreground sm:text-4xl">
            Eight things that change about your day
          </h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {gets.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-0.5 hover:shadow-lg"
            >
              <div className="mb-4 inline-flex rounded-xl bg-primary-soft p-2.5 text-primary">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mb-1.5 text-base font-bold text-foreground">{title}</h3>
              <p className="text-xs leading-relaxed text-muted-foreground">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const mainProblems = [
  ["“There must be a faster way.”", "I find faster ways to do the things you do every day."],
  [
    "“I know this app can do it, but I don't know how.”",
    "I help you get more out of the software you already use.",
  ],
  [
    "“I don't know if there's a tool for this.”",
    "I find the right tools for the problems you actually have.",
  ],
  [
    "“I'm doing the same things over and over.”",
    "I turn repeated work into something you can do quickly.",
  ],
  ["“I know I have this somewhere.”", "I make everything you need easy to find."],
  [
    "“I've already made this, but I'm making it again.”",
    "I turn your old work into things you can reuse.",
  ],
  ["“I have too much stuff everywhere.”", "I give everything a clear place."],
  ["“I don't know where this should go.”", "I create simple rules for where things go."],
  ["“I have information everywhere.”", "I bring it into one system you can actually use."],
  [
    "“I can't keep all of this in my head.”",
    "I get things out of your head and into a system you trust.",
  ],
  ["“Every project starts from zero.”", "I build a starting point you reuse for every project."],
];

const smallerProblems = [
  "Make it easier to move between the things you use.",
  "Stop making the same small decisions over and over.",
  "Make it easy to pick up where you left off.",
  "Give every tool a clear job.",
];

export function Problems() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
      <div className="mx-auto mb-14 max-w-2xl text-center">
        <span className="text-xs font-extrabold uppercase tracking-widest text-primary">
          Sound familiar?
        </span>
        <h2 className="mt-2 text-3xl font-extrabold text-foreground sm:text-4xl">
          The problems I fix
        </h2>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {mainProblems.map(([q, a]) => (
          <div key={q} className="rounded-xl border border-border bg-card p-5">
            <p className="text-sm font-bold text-foreground">{q}</p>
            <p className="mt-1.5 text-xs text-muted-foreground">{a}</p>
          </div>
        ))}
      </div>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        {smallerProblems.map((p) => (
          <span
            key={p}
            className="rounded-xl border border-border bg-surface px-4 py-2.5 text-xs font-semibold text-muted-foreground"
          >
            {p}
          </span>
        ))}
      </div>
    </section>
  );
}

import { professions } from "@/lib/professions";

export function WhoItsFor() {
  const [active, setActive] = useState(professions[0]!.id);
  const current = professions.find((p) => p.id === active)!;

  return (
    <section className="border-y border-border bg-surface py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <span className="text-xs font-extrabold uppercase tracking-widest text-primary">
            Who it's for
          </span>
          <h2 className="mt-2 text-3xl font-extrabold text-foreground sm:text-4xl">
            Pick your work and see your version of it
          </h2>
        </div>

        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {professions.map((p) => (
            <button
              key={p.id}
              onClick={() => setActive(p.id)}
              className={`rounded-xl border px-4 py-2.5 text-sm font-semibold transition-all ${
                p.id === active
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-card text-muted-foreground hover:border-primary/40"
              }`}
            >
              {p.label}
            </button>
          ))}
        </div>

        <div className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
          <ul className="grid gap-3 sm:grid-cols-2">
            {current.problems.map((p) => (
              <li key={p} className="flex items-start gap-2 text-sm text-muted-foreground">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                {p}
              </li>
            ))}
          </ul>
          <p className="mt-6 rounded-xl border border-primary/25 bg-primary-soft p-4 text-sm font-bold text-primary">
            {current.solution}
          </p>
        </div>
      </div>
    </section>
  );
}
