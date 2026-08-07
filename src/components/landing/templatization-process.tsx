import { Sparkles } from "lucide-react";

const templates = [
  "Premiere project templates",
  "Photoshop templates",
  "Notion templates",
  "Obsidian templates",
  "Folder templates",
  "Project templates",
  "Naming conventions",
  "Checklists",
  "SOPs",
  "Prompt libraries",
  "Email templates",
  "Meeting templates",
  "Reusable asset libraries",
];

export function TemplatizationSpotlight() {
  return (
    <section id="templatization" className="border-y border-border bg-ink py-24 text-ink-foreground">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <span className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-primary">
              <Sparkles className="h-4 w-4" /> Headline deliverable
            </span>
            <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
              Every future project starts 30–80% finished
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-ink-muted">
              I identify every part of your work that currently starts from scratch, then turn it
              into a reusable system. Not a tip about templates — the actual templates, built around
              the work you really do.
            </p>
            <p className="mt-4 rounded-xl border border-primary/40 bg-primary/10 p-4 text-sm font-semibold">
              After this audit, you'll never start the same kind of project from scratch again.
            </p>
          </div>

          <div className="lg:col-span-7">
            <div className="flex flex-wrap gap-3">
              {templates.map((t) => (
                <span
                  key={t}
                  className="rounded-xl border border-ink-muted/25 bg-surface/60 px-4 py-2.5 text-sm font-semibold"
                >
                  {t}
                </span>
              ))}
            </div>
            <p className="mt-6 text-xs text-ink-muted">
              Blank pages are the single most expensive thing in creative and knowledge work. This
              removes them permanently.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

const steps = [
  {
    n: "01",
    title: "Shadow",
    body: "You record a real project end to end, or we run a live 1:1 session while I take notes in the background.",
  },
  {
    n: "02",
    title: "Diagnose",
    body: "I log your work in 15-minute increments and mark every friction point, bottleneck, and from-scratch step.",
  },
  {
    n: "03",
    title: "Design",
    body: "I design the workspace, the decision rules, and the tool stack that match how you actually think and work.",
  },
  {
    n: "04",
    title: "Build the assets",
    body: "Operating manual, templates, checklists, SOPs, prompt and resource libraries — built, not suggested.",
  },
  {
    n: "05",
    title: "Handoff",
    body: "You get the whole system plus a guided rollout, so it's running in your daily work — not sitting in a folder.",
  },
];

export function Process() {
  return (
    <section id="process" className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
      <div className="mx-auto mb-14 max-w-2xl text-center">
        <span className="text-xs font-extrabold uppercase tracking-widest text-primary">
          The Engagement
        </span>
        <h2 className="mt-2 text-3xl font-extrabold text-foreground sm:text-4xl">
          How Your System Gets Built
        </h2>
      </div>
      <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-5">
        {steps.map((s) => (
          <div key={s.n} className="rounded-2xl border border-border bg-card p-5">
            <span className="text-xs font-black tracking-widest text-primary">{s.n}</span>
            <h3 className="mt-2 text-base font-bold text-foreground">{s.title}</h3>
            <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{s.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

const principles = [
  {
    title: "Trade-off mastery",
    body: "I know when not to use a tool. Performance, simplicity, and speed stay balanced.",
  },
  {
    title: "Subtraction first",
    body: "A simple system is a better system. I remove steps, apps, and decisions before adding any.",
  },
  {
    title: "Designed for handoff",
    body: "Everything is written down so the system works when I'm not there — that's what makes it an asset.",
  },
  {
    title: "Built on real constraints",
    body: "Tested over months of real project work, not in a demo environment.",
  },
];

export function Authority() {
  return (
    <section className="border-y border-border bg-surface py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-12">
        <div className="rounded-3xl bg-primary p-8 text-primary-foreground shadow-xl sm:p-10 lg:col-span-5">
          <span className="text-xs font-bold uppercase tracking-widest opacity-80">
            Who builds it
          </span>
          <h3 className="mt-2 mb-6 text-2xl font-extrabold sm:text-3xl">
            A Workflow Systems Designer
          </h3>
          <div className="space-y-4 text-sm leading-relaxed opacity-90">
            <p>
              I've spent 3+ years creating technical content on Windows and testing 100+ utilities
              and productivity tools.
            </p>
            <p>
              I don't sell tips. I test systems over months under real constraints to find what
              actually scales — then I build that system for you and hand it over.
            </p>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-4 border-t border-primary-foreground/25 pt-6">
            {[
              ["100+", "Tools tested"],
              ["20 → 80", "WPM typing speed"],
              ["2,500+", "Curated work bookmarks"],
              ["3+ yrs", "Workflow system design"],
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
              Why trust the framework
            </span>
            <h2 className="mt-1 text-3xl font-extrabold text-foreground">
              Judgment, integration, and real experience
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
