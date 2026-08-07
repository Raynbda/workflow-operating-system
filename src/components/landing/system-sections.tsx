import {
  BookOpenCheck,
  Boxes,
  FolderTree,
  Library,
  Search,
  SlidersHorizontal,
  Wrench,
} from "lucide-react";

const contrast = [
  {
    title: "Advice",
    sub: "Consumed once",
    points: [
      "A list of recommendations you read and forget",
      "Tips that depend on you remembering them",
      "You still decide everything, every day",
      "Value decays the week after the call",
    ],
  },
  {
    title: "A system",
    sub: "Compounds forever",
    points: [
      "Assets you own: manuals, templates, libraries",
      "Decisions already made and written down",
      "Every project inherits the last one's structure",
      "Value grows with every project you run",
    ],
  },
];

export function Positioning() {
  return (
    <section className="border-y border-border bg-surface py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <span className="text-xs font-extrabold uppercase tracking-widest text-primary">
            Positioning
          </span>
          <h2 className="mt-2 text-2xl font-extrabold text-foreground sm:text-3xl">
            You're not buying advice. You're buying assets.
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Advice is consumed once. Assets compound forever. Everything below is something you keep
            after the engagement ends.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {contrast.map((col, i) => (
            <div
              key={col.title}
              className={`rounded-2xl border p-6 ${
                i === 1
                  ? "border-primary/30 bg-primary-soft"
                  : "border-border bg-card opacity-90"
              }`}
            >
              <h3 className="text-lg font-bold text-foreground">{col.title}</h3>
              <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                {col.sub}
              </p>
              <ul className="space-y-2.5 text-sm text-muted-foreground">
                {col.points.map((p) => (
                  <li key={p} className="flex gap-2">
                    <span className={i === 1 ? "text-primary" : "text-muted-foreground"}>—</span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const deliverables = [
  {
    icon: Search,
    n: "01",
    title: "Workflow Audit",
    lead: "The diagnosis.",
    points: [
      "Where you're losing time, logged in 15-minute increments",
      "Where the real bottlenecks are — not the obvious ones",
      "The highest-ROI improvements, ranked",
    ],
  },
  {
    icon: BookOpenCheck,
    n: "02",
    title: "Personal Operating Manual",
    lead: "Your handbook. Every recurring decision, already made.",
    points: [
      "Where should every file, idea, and task go?",
      "What app should I use for X?",
      "What should my workday look like?",
      "How should I process email and capture information?",
      "What should my desktop look like?",
    ],
  },
  {
    icon: Boxes,
    n: "03",
    title: "Workflow Templatization",
    lead: "The centerpiece. Every part of your work that starts from scratch becomes reusable.",
    points: [
      "Project, folder, and app templates for your real work",
      "Naming conventions, checklists, and SOPs",
      "Prompt, email, and meeting templates",
      "Every future project starts 30–80% finished",
    ],
    featured: true,
  },
  {
    icon: FolderTree,
    n: "04",
    title: "Digital Workspace Redesign",
    lead: "A workspace where everything has one obvious place.",
    points: [
      "File system, desktop, and downloads",
      "Browser, bookmarks, and tab discipline",
      "Notes, task manager, and knowledge management",
      "Project organization that survives busy weeks",
    ],
  },
  {
    icon: SlidersHorizontal,
    n: "05",
    title: "App Optimization",
    lead: "For each app you actually use — tuned to your workflow, not a generic list.",
    points: [
      "Hidden features and unused capabilities",
      "Better settings, layouts, and plugins",
      "Shortcut maps you'll genuinely use",
    ],
  },
  {
    icon: Wrench,
    n: "06",
    title: "Custom Toolkit",
    lead: "A curated software stack — the exact tools I'd install if I used your computer every day.",
    points: [
      "Chosen for your work, not for a top-10 list",
      "Free and open-source first, with trade-offs explained",
      "Install and configuration order included",
    ],
  },
  {
    icon: Library,
    n: "07",
    title: "Personal Resource Library",
    lead: "Not a pile of links. A library built for you.",
    points: [
      "Cheat sheets and shortcut guides",
      "Templates and checklists in one place",
      "Curated resources plus a learning roadmap",
    ],
  },
];

export function SystemDeliverables() {
  return (
    <section id="system" className="mx-auto max-w-7xl px-4 py-24 sm:px-6">
      <div className="mx-auto mb-16 max-w-2xl text-center">
        <span className="text-xs font-extrabold uppercase tracking-widest text-primary">
          The Deliverables
        </span>
        <h2 className="mt-2 text-3xl font-extrabold text-foreground sm:text-4xl">
          Your Personal Workflow System
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Seven tangible parts. You keep all of them.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {deliverables.map(({ icon: Icon, n, title, lead, points, featured }) => (
          <div
            key={n}
            className={`flex flex-col rounded-2xl border p-6 transition-all hover:shadow-lg ${
              featured
                ? "border-primary bg-primary-soft shadow-md lg:col-span-1"
                : "border-border bg-card"
            }`}
          >
            <div className="mb-4 flex items-center justify-between">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Icon className="h-5 w-5" />
              </span>
              <span className="text-xs font-black tracking-widest text-muted-foreground">{n}</span>
            </div>
            <h3 className="text-base font-bold text-foreground">{title}</h3>
            <p className="mt-1 mb-4 text-sm text-muted-foreground">{lead}</p>
            <ul className="mt-auto space-y-2 text-xs text-muted-foreground">
              {points.map((p) => (
                <li key={p} className="flex gap-2">
                  <span className="text-primary">•</span>
                  {p}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
