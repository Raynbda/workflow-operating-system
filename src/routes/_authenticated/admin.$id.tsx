import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { getSubmission, type SubmissionRow } from "@/lib/admin.functions";
import { coreQuestions, frictionBand, professions } from "@/lib/professions";

export const Route = createFileRoute("/_authenticated/admin/$id")({
  head: () => ({
    meta: [
      { title: "Submission — Admin" },
      { name: "description", content: "Full intake submission detail." },
      { name: "robots", content: "noindex, nofollow" },
      { property: "og:title", content: "Submission — Admin" },
      { property: "og:description", content: "Full intake submission detail." },
    ],
  }),
  component: AdminDetail,
});

function labelFor(key: string, profession: string | null): string {
  const core = coreQuestions.find((q) => q.id === key);
  if (core) return core.label;
  const p = professions.find(
    (pr) => key.startsWith(`${pr.id}_`) || pr.label === (profession ?? ""),
  );
  const match = key.match(/^(.*)_(\d+)$/);
  if (match) {
    const prof = professions.find((pr) => pr.id === match[1]);
    const idx = Number(match[2]);
    if (prof?.questions[idx]) return prof.questions[idx];
  }
  if (key === "extra") return "What haven't I asked that you think I should know?";
  if (key === "dread") return "What part of your work do you dread most?";
  void p;
  return key.replace(/_/g, " ");
}

function toPlainText(s: SubmissionRow) {
  const lines = [
    `Name: ${s.name}`,
    `Email: ${s.email}`,
    `Profession: ${s.profession ?? "—"}`,
    `Submitted: ${new Date(s.created_at).toLocaleString()}`,
    `Friction score: ${s.friction_score}/9`,
    `Preferred tier: ${s.preferred_tier ?? "—"}`,
    `Tools: ${s.tools?.join(", ") || "—"}`,
    `Recording: ${s.recording_link ?? "—"}`,
    `Voice note: ${s.voice_note_link ?? "—"}`,
    "",
  ];
  for (const [k, v] of Object.entries(s.answers ?? {})) {
    if (!v) continue;
    lines.push(labelFor(k, s.profession), v, "");
  }
  return lines.join("\n");
}

function AdminDetail() {
  const { id } = Route.useParams();
  const fetchOne = useServerFn(getSubmission);
  const [copied, setCopied] = useState(false);

  const { data, isLoading, error } = useQuery({
    queryKey: ["submission", id],
    queryFn: () => fetchOne({ data: { id } }),
    retry: false,
  });

  if (isLoading) {
    return <main className="mx-auto max-w-3xl px-4 py-16 text-sm text-muted-foreground">Loading…</main>;
  }

  if (error || !data) {
    const forbidden = error instanceof Error && error.message.includes("FORBIDDEN");
    return (
      <main className="mx-auto max-w-3xl px-4 py-16">
        <p className="text-sm font-semibold text-destructive">
          {forbidden ? "This account isn't an admin." : "Couldn't load this submission."}
        </p>
        <Link to="/admin" className="mt-4 inline-block text-sm font-bold text-primary">
          ← Back to all submissions
        </Link>
      </main>
    );
  }

  const s = data.submission;
  const band = frictionBand(s.friction_score);
  const professionEntry = professions.find((p) => p.label === (s.profession ?? ""));
  const entries = Object.entries(s.answers ?? {}).filter(([, v]) => v && v.trim());
  const professionEntries = professionEntry
    ? entries.filter(([k]) => k.startsWith(`${professionEntry.id}_`))
    : [];
  const coreEntries = entries.filter(([k]) => !professionEntries.some(([pk]) => pk === k));

  return (
    <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <Link to="/admin" className="text-sm font-bold text-primary">
          ← All submissions
        </Link>
        <div className="flex items-center gap-2 text-sm">
          <span className="text-muted-foreground">
            {data.position} of {data.total}
          </span>
          {data.prevId ? (
            <Link
              to="/admin/$id"
              params={{ id: data.prevId }}
              className="rounded-lg border border-border px-3 py-1 font-semibold"
            >
              Newer
            </Link>
          ) : null}
          {data.nextId ? (
            <Link
              to="/admin/$id"
              params={{ id: data.nextId }}
              className="rounded-lg border border-border px-3 py-1 font-semibold"
            >
              Older
            </Link>
          ) : null}
        </div>
      </div>

      <header className="mt-6 rounded-3xl border border-border bg-card p-6">
        <h1 className="text-3xl font-black tracking-tight text-foreground">{s.name}</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          <a href={`mailto:${s.email}`} className="font-semibold text-primary">
            {s.email}
          </a>{" "}
          · {s.profession || "No profession"} · {new Date(s.created_at).toLocaleString()}
        </p>

        <div className="mt-4 flex flex-wrap gap-2 text-sm">
          <span className="rounded-full bg-primary-soft px-3 py-1 font-bold text-primary">
            Friction {s.friction_score}/9 — {band.title}
          </span>
          {s.preferred_tier ? (
            <span className="rounded-full border border-border px-3 py-1 font-semibold text-foreground">
              Tier: {s.preferred_tier}
            </span>
          ) : null}
        </div>

        {s.tools?.length ? (
          <p className="mt-4 text-sm text-foreground">
            <span className="font-bold">Tools:</span> {s.tools.join(", ")}
          </p>
        ) : null}

        <div className="mt-5 flex flex-wrap gap-3">
          {s.recording_link ? (
            <a
              href={s.recording_link}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl bg-primary px-4 py-2 text-sm font-bold text-primary-foreground"
            >
              Open screen recording
            </a>
          ) : null}
          {s.voice_note_link ? (
            <a
              href={s.voice_note_link}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-border px-4 py-2 text-sm font-bold text-foreground"
            >
              Open voice note
            </a>
          ) : null}
          <button
            type="button"
            onClick={async () => {
              await navigator.clipboard.writeText(toPlainText(s));
              setCopied(true);
              setTimeout(() => setCopied(false), 2000);
            }}
            className="rounded-xl border border-border px-4 py-2 text-sm font-bold text-foreground"
          >
            {copied ? "Copied" : "Copy as text"}
          </button>
        </div>
      </header>

      <Section title="Their answers" entries={coreEntries} profession={s.profession} />
      {professionEntries.length ? (
        <Section
          title={`${s.profession} questions`}
          entries={professionEntries}
          profession={s.profession}
        />
      ) : null}
    </main>
  );
}

function Section({
  title,
  entries,
  profession,
}: {
  title: string;
  entries: [string, string][];
  profession: string | null;
}) {
  if (!entries.length) return null;
  return (
    <section className="mt-8">
      <h2 className="text-lg font-black tracking-tight text-foreground">{title}</h2>
      <div className="mt-4 space-y-4">
        {entries.map(([key, value]) => (
          <div key={key} className="rounded-2xl border border-border bg-card p-5">
            <p className="text-sm font-bold text-foreground">{labelFor(key, profession)}</p>
            <p className="mt-2 whitespace-pre-wrap text-sm text-muted-foreground">{value}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
