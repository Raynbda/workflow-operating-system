import { useMemo, useState } from "react";
import { AlertCircle, CheckCircle2 } from "lucide-react";

const frictionItems = [
  ["File retrieval delay", "I regularly spend >2 minutes searching for files or assets."],
  ["Tab & window overload", "20+ browser tabs open and a cluttered desktop."],
  ["Starting from scratch", "I rebuild the same project setup, doc, or edit every time."],
  ["Mouse-heavy navigation", "Rarely using shortcuts, presets, or saved layouts."],
  ["Frequent context switching", "Checking notifications while working on key tasks."],
  ["Disorganized knowledge", "Notes and assets scattered across apps and drives."],
  ["Morning decision friction", "Opening the laptop with no clear, pre-configured work setup."],
  ["No written rules", "Where a file or idea goes is decided fresh every single time."],
];

export function FrictionQuiz() {
  const [checked, setChecked] = useState<boolean[]>(() => frictionItems.map(() => false));
  const score = checked.filter(Boolean).length;

  const { status, rec } = useMemo(() => {
    if (score === 0)
      return {
        status: "Select options above to diagnose",
        rec: "Check the friction points you face to see the recommended tier.",
      };
    if (score <= 2)
      return {
        status: "Light friction — missing reusable assets",
        rec: "The Workflow Audit + template pack will give you the biggest jump.",
      };
    if (score <= 5)
      return {
        status: "Moderate friction — no operating manual",
        rec: "You're re-deciding too much. The full Personal Workflow System fits you.",
      };
    return {
      status: "Heavy friction — rebuild the whole system",
      rec: "Live shadowing plus a full system build is the recommended path.",
    };
  }, [score]);

  return (
    <section id="audit-quiz" className="border-y border-border bg-surface py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <span className="text-xs font-extrabold uppercase tracking-widest text-primary">
            Interactive assessment
          </span>
          <h2 className="mt-2 text-2xl font-extrabold text-foreground sm:text-3xl">
            Check Your Digital Friction Score
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Select every symptom you experience in a normal working day:
          </p>
        </div>

        <div className="rounded-2xl border border-border bg-card p-6 shadow-sm md:p-8">
          <div className="mb-8 grid gap-4 sm:grid-cols-2">
            {frictionItems.map(([title, desc], i) => (
              <label
                key={title}
                className="flex cursor-pointer items-start gap-3 rounded-xl border border-border bg-surface/60 p-4 transition-all hover:border-primary/40 hover:bg-primary-soft"
              >
                <input
                  type="checkbox"
                  checked={checked[i]}
                  onChange={() =>
                    setChecked((prev) => prev.map((v, idx) => (idx === i ? !v : v)))
                  }
                  className="range-brand mt-1 h-4 w-4 rounded border-border"
                />
                <span>
                  <span className="block text-sm font-semibold text-foreground">{title}</span>
                  <span className="text-xs text-muted-foreground">{desc}</span>
                </span>
              </label>
            ))}
          </div>

          <div className="flex flex-col items-center justify-between gap-4 rounded-xl border border-primary/25 bg-primary-soft p-5 sm:flex-row">
            <div className="flex items-center gap-4 text-center sm:text-left">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary text-xl font-extrabold text-primary-foreground">
                {score}/8
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  System diagnosis
                </span>
                <h4 className="text-base font-bold text-foreground">{status}</h4>
                <p className="mt-0.5 text-xs text-muted-foreground">{rec}</p>
              </div>
            </div>
            <a
              href="#pricing"
              className="shrink-0 rounded-lg bg-primary px-6 py-3 text-xs font-bold text-primary-foreground transition-all hover:bg-primary-strong sm:text-sm"
            >
              View recommended tier
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function RoiCalculator() {
  const [hours, setHours] = useState(8);
  const [rate, setRate] = useState(50);
  const [friction, setFriction] = useState(20);

  const dailyLost = (hours * friction) / 100;
  const monthlyHours = Math.round(dailyLost * 21);
  const yearlyCost = Math.round(dailyLost * 21 * 12 * rate);
  const savedHours = Math.round(monthlyHours * 0.7);

  return (
    <section id="calculator" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <div className="mx-auto mb-12 max-w-2xl text-center">
        <span className="text-xs font-extrabold uppercase tracking-widest text-primary">
          ROI calculator
        </span>
        <h2 className="mt-2 text-3xl font-extrabold text-foreground">
          Calculate Your Annual Friction Leakage
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          See what starting from scratch and hunting for files costs you every year.
        </p>
      </div>

      <div className="grid items-center gap-8 lg:grid-cols-12">
        <div className="space-y-6 rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8 lg:col-span-7">
          {[
            {
              label: "Daily computer work hours",
              value: `${hours} hrs/day`,
              min: 3,
              max: 14,
              step: 1,
              v: hours,
              set: setHours,
            },
            {
              label: "Your hourly rate / time value",
              value: `$${rate} / hr`,
              min: 20,
              max: 250,
              step: 5,
              v: rate,
              set: setRate,
            },
            {
              label: "Estimated digital friction level",
              value: `${friction}% of the day`,
              min: 5,
              max: 50,
              step: 1,
              v: friction,
              set: setFriction,
            },
          ].map((s) => (
            <div key={s.label}>
              <div className="mb-2 flex items-center justify-between">
                <label className="text-sm font-bold text-foreground">{s.label}</label>
                <span className="rounded-md bg-primary-soft px-2.5 py-1 text-sm font-extrabold text-primary">
                  {s.value}
                </span>
              </div>
              <input
                type="range"
                min={s.min}
                max={s.max}
                step={s.step}
                value={s.v}
                onChange={(e) => s.set(Number(e.target.value))}
                className="range-brand h-2 w-full cursor-pointer appearance-none rounded-lg bg-secondary"
              />
            </div>
          ))}
        </div>

        <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-2xl bg-ink p-8 text-ink-foreground shadow-xl lg:col-span-5">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-primary">
              Your personalized projection
            </span>
            <div className="mt-6 space-y-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-ink-muted">
                  Monthly time lost
                </p>
                <p className="mt-1 text-3xl font-black">{monthlyHours} hours</p>
                <p className="mt-0.5 text-xs text-ink-muted">
                  Roughly {Math.max(1, Math.round(monthlyHours / 8))} full workdays every month.
                </p>
              </div>
              <div className="border-t border-ink-muted/20 pt-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-ink-muted">
                  Annual cost
                </p>
                <p className="mt-1 text-4xl font-black text-primary">
                  ${yearlyCost.toLocaleString()}
                </p>
                <p className="mt-0.5 text-xs text-ink-muted">
                  Value of lost focus and output over 12 months.
                </p>
              </div>
              <div className="border-t border-ink-muted/20 pt-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-ink-muted">
                  Reclaimed with a workflow system
                </p>
                <p className="mt-1 text-2xl font-bold text-success">~{savedHours} hours / month</p>
              </div>
            </div>
          </div>
          <a
            href="#pricing"
            className="mt-8 block rounded-xl bg-primary px-4 py-3.5 text-center font-bold text-primary-foreground transition-all hover:bg-primary-strong"
          >
            Reclaim your time
          </a>
        </div>
      </div>
    </section>
  );
}

const beforeRows = [
  ["00:00 - 00:15", "Boot up, hunting the desktop and Downloads for the client brief", "Disorganized storage"],
  ["00:15 - 00:30", "Opened the editor, copy-pasting text, switching to Slack and YouTube", "Context switching"],
  ["00:30 - 00:45", "Rebuilding transitions and title cards from scratch — again", "No templates"],
  ["00:45 - 01:00", "Troubleshooting an export error across 15 forum tabs", "No resource library"],
];

const afterRows = [
  ["00:00 - 00:15", "Project template creates the folder tree, naming, and workspace in one step", "Zero decision friction"],
  ["00:15 - 00:30", "Operating manual says exactly where the brief lives; snippets expand standard text", "Decisions pre-made"],
  ["00:30 - 00:45", "Prebuilt title, transition, and asset library applied in one click", "Reusable assets"],
];

export function AuditPreview() {
  const [view, setView] = useState<"before" | "after">("before");
  const rows = view === "before" ? beforeRows : afterRows;

  return (
    <section className="border-y border-border bg-surface py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <span className="text-xs font-extrabold uppercase tracking-widest text-primary">
            Audit preview
          </span>
          <h2 className="mt-2 text-3xl font-extrabold text-foreground">
            Inside The 15-Minute Increment Audit
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            How I log where your time goes — and what the same project looks like once the system
            exists.
          </p>
        </div>

        <div className="mb-8 flex justify-center">
          <div className="flex gap-1 rounded-xl bg-secondary p-1">
            {(["before", "after"] as const).map((v) => (
              <button
                key={v}
                onClick={() => setView(v)}
                className={`rounded-lg px-5 py-2 text-xs font-bold transition-all sm:text-sm ${
                  view === v
                    ? "bg-card text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {v === "before" ? "Before (bleeding time)" : "After (system in place)"}
              </button>
            ))}
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
          <div
            className={`flex items-center justify-between border-b p-4 text-xs sm:text-sm ${
              view === "before"
                ? "border-danger/20 bg-danger-soft"
                : "border-success/20 bg-success-soft"
            }`}
          >
            <span className="flex items-center gap-2 font-bold text-foreground">
              {view === "before" ? (
                <AlertCircle className="h-4 w-4 text-danger" />
              ) : (
                <CheckCircle2 className="h-4 w-4 text-success" />
              )}
              {view === "before"
                ? "Sample log: unsystematized project work"
                : "Sample log: with the Personal Workflow System"}
            </span>
            <span className="font-semibold text-foreground">
              {view === "before" ? "Total: 2h 45m" : "Total: 1h 05m (60% faster)"}
            </span>
          </div>
          <div className="divide-y divide-border text-xs sm:text-sm">
            {rows.map(([time, desc, tag], i) => (
              <div
                key={time + tag}
                className={`flex flex-col justify-between gap-2 p-4 sm:flex-row sm:items-center ${
                  i % 2 === 1 ? "bg-surface/60" : ""
                }`}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`shrink-0 font-mono font-bold ${
                      view === "before" ? "text-muted-foreground" : "text-primary"
                    }`}
                  >
                    {time}
                  </span>
                  <span className="font-medium text-foreground">{desc}</span>
                </div>
                <span
                  className={`shrink-0 rounded px-2.5 py-1 text-xs font-bold ${
                    view === "before"
                      ? "bg-danger-soft text-danger"
                      : "bg-success-soft text-success"
                  }`}
                >
                  {tag}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
