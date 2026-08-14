import { useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { ArrowLeft, ArrowRight, CheckCircle2, Loader2 } from "lucide-react";

import {
  PAYMENT_URL,
  coreQuestions,
  frictionBand,
  frictionQuestions,
  professions,
  toolOptions,
} from "@/lib/professions";
import { submitAudit } from "@/lib/submissions.functions";

const steps = ["About you", "Quick check", "Your work", "Your work in detail", "Send it"];

export function IntakeForm() {
  const send = useServerFn(submitAudit);

  const [step, setStep] = useState(0);
  const [profession, setProfession] = useState("");
  const [tools, setTools] = useState<string[]>([]);
  const [otherTool, setOtherTool] = useState("");
  const [friction, setFriction] = useState<Record<string, number | undefined>>({});
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [recordingLink, setRecordingLink] = useState("");
  const [voiceNoteLink, setVoiceNoteLink] = useState("");
  const [extra, setExtra] = useState("");
  const [tier, setTier] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [sending, setSending] = useState(false);
  const [done, setDone] = useState(false);

  const selected = professions.find((p) => p.id === profession);
  const score = useMemo(
    () => frictionQuestions.reduce((sum, q) => sum + (friction[q.id] ?? 0), 0),
    [friction],
  );
  const frictionComplete = frictionQuestions.every((q) => friction[q.id] !== undefined);
  const band = frictionBand(score);

  function set(id: string, value: string) {
    setAnswers((prev) => ({ ...prev, [id]: value }));
  }

  function next() {
    setError(null);
    if (step === 1 && !frictionComplete) {
      setError("Please answer the three questions above so I can score your setup.");
      return;
    }
    setStep((s) => Math.min(s + 1, steps.length - 1));
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function back() {
    setError(null);
    setStep((s) => Math.max(s - 1, 0));
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    if (!name.trim() || !email.trim()) {
      setError("I need your name and email to send your plan.");
      return;
    }
    setSending(true);
    try {
      await send({
        data: {
          name: name.trim(),
          email: email.trim(),
          profession: selected?.label ?? "",
          tools: otherTool.trim() ? [...tools, otherTool.trim()] : tools,
          frictionScore: score,
          answers: { ...answers, extra, recording_notes: "" },
          recordingLink,
          voiceNoteLink,
          preferredTier: tier,
        },
      });
      setDone(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setSending(false);
    }
  }

  if (done) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-20 sm:px-6">
        <div className="rounded-3xl border border-border bg-card p-8 text-center shadow-sm sm:p-12">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-soft text-primary">
            <CheckCircle2 className="h-9 w-9" />
          </div>
          <span className="text-xs font-extrabold uppercase tracking-widest text-primary">
            Your friction score: {score}/9
          </span>
          <h1 className="mt-2 text-3xl font-extrabold text-foreground">{band.title}</h1>
          <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-muted-foreground">
            {band.body}
          </p>
          {answers["dread"] ? (
            <p className="mx-auto mt-5 max-w-lg rounded-xl border border-border bg-surface p-4 text-sm text-muted-foreground">
              Thanks {name.split(" ")[0]} — you mentioned “{answers["dread"]}”. That's exactly the
              kind of thing I look at first.
            </p>
          ) : null}
          <p className="mt-6 text-sm font-semibold text-foreground">
            Your personalised video and written plan will be in your inbox within 48 hours.
          </p>
          <a
            href={PAYMENT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-xl bg-primary px-8 py-4 text-base font-bold text-primary-foreground transition-all hover:bg-primary-strong"
          >
            Reserve my slot
          </a>
          <p className="mt-4 text-xs text-muted-foreground">
            Done With You $500 · Done For You $1,000
          </p>
          <div className="mt-8">
            <Link to="/" className="text-xs font-semibold text-primary hover:underline">
              Back to the site
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <Link to="/" className="text-xs font-semibold text-muted-foreground hover:text-primary">
        ← Back
      </Link>

      <div className="mt-6 mb-8">
        <h1 className="text-3xl font-extrabold text-foreground sm:text-4xl">
          Get your digital workspace audit
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          About 2 minutes. Only your name, email and the three scored questions are required — skip
          anything else.
        </p>
      </div>

      <div className="mb-8 flex gap-2">
        {steps.map((s, i) => (
          <div key={s} className="flex-1">
            <div
              className={`h-1.5 rounded-full ${i <= step ? "bg-primary" : "bg-secondary"}`}
              aria-hidden
            />
            <p
              className={`mt-2 text-[11px] font-semibold ${
                i <= step ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {s}
            </p>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="rounded-2xl border border-border bg-card p-6 sm:p-8">
        {step === 0 && (
          <div className="space-y-8">
            <Field label="What kind of work do you do?">
              <div className="flex flex-wrap gap-2">
                {professions.map((p) => (
                  <Choice
                    key={p.id}
                    active={profession === p.id}
                    onClick={() => setProfession(p.id)}
                  >
                    {p.label}
                  </Choice>
                ))}
              </div>
            </Field>
            <Field label="Which tools do you use daily?">
              <div className="flex flex-wrap gap-2">
                {toolOptions.map((t) => (
                  <Choice
                    key={t}
                    active={tools.includes(t)}
                    onClick={() =>
                      setTools((prev) =>
                        prev.includes(t) ? prev.filter((x) => x !== t) : [...prev, t],
                      )
                    }
                  >
                    {t}
                  </Choice>
                ))}
              </div>
              <input
                value={otherTool}
                onChange={(e) => setOtherTool(e.target.value)}
                maxLength={80}
                placeholder="Anything else?"
                className="mt-3 w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-foreground outline-none focus:border-primary"
              />
            </Field>
          </div>
        )}

        {step === 1 && (
          <div className="space-y-8">
            {frictionQuestions.map((q) => (
              <Field key={q.id} label={q.question}>
                <div className="flex flex-wrap gap-2">
                  {q.options.map((o) => (
                    <Choice
                      key={o.label}
                      active={friction[q.id] === o.points}
                      onClick={() => setFriction((prev) => ({ ...prev, [q.id]: o.points }))}
                    >
                      {o.label}
                    </Choice>
                  ))}
                </div>
              </Field>
            ))}
            {frictionComplete && (
              <div className="rounded-xl border border-primary/25 bg-primary-soft p-4">
                <p className="text-sm font-bold text-primary">
                  Friction score so far: {score}/9 — {band.title}
                </p>
              </div>
            )}
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6">
            {coreQuestions.map((q) => (
              <Field key={q.id} label={q.label} hint={q.hint}>
                <textarea
                  value={answers[q.id] ?? ""}
                  onChange={(e) => set(q.id, e.target.value)}
                  rows={3}
                  maxLength={4000}
                  className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-foreground outline-none focus:border-primary"
                />
              </Field>
            ))}
          </div>
        )}

        {step === 3 && (
          <div className="space-y-6">
            {selected ? (
              <>
                <p className="text-sm text-muted-foreground">
                  A few questions specific to your work as a {selected.label.toLowerCase()}.
                </p>
                {selected.questions.map((q, i) => (
                  <Field key={q} label={q}>
                    <textarea
                      value={answers[`${selected.id}_${i}`] ?? ""}
                      onChange={(e) => set(`${selected.id}_${i}`, e.target.value)}
                      rows={3}
                      maxLength={4000}
                      className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-foreground outline-none focus:border-primary"
                    />
                  </Field>
                ))}
              </>
            ) : (
              <p className="text-sm text-muted-foreground">
                Pick the kind of work you do in the first step and I'll ask a few questions specific
                to it. Otherwise, carry on.
              </p>
            )}
          </div>
        )}

        {step === 4 && (
          <div className="space-y-6">
            <Field
              label="Link to a short (2–3 min) screen recording of a normal work session"
              hint="Loom, Google Drive, Dropbox — anything I can open. This is the most useful thing you can give me."
            >
              <input
                value={recordingLink}
                onChange={(e) => setRecordingLink(e.target.value)}
                maxLength={500}
                placeholder="https://..."
                className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-foreground outline-none focus:border-primary"
              />
            </Field>
            <Field
              label="Optional: link to a 60-second voice or video note"
              hint="If you'd rather talk than type."
            >
              <input
                value={voiceNoteLink}
                onChange={(e) => setVoiceNoteLink(e.target.value)}
                maxLength={500}
                placeholder="https://..."
                className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-foreground outline-none focus:border-primary"
              />
            </Field>
            <Field label="What haven't I asked that you think I should know?">
              <textarea
                value={extra}
                onChange={(e) => setExtra(e.target.value)}
                rows={3}
                maxLength={4000}
                className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-foreground outline-none focus:border-primary"
              />
            </Field>
            <Field label="Which sounds like a better fit?">
              <div className="flex flex-wrap gap-2">
                {[
                  "Done With You — $500",
                  "Done For You — $1,000",
                  "Not sure — recommend one",
                ].map((t) => (
                  <Choice key={t} active={tier === t} onClick={() => setTier(t)}>
                    {t}
                  </Choice>
                ))}
              </div>
            </Field>
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Your name *">
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  maxLength={100}
                  required
                  className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-foreground outline-none focus:border-primary"
                />
              </Field>
              <Field label="Your email *">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  maxLength={255}
                  required
                  className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-foreground outline-none focus:border-primary"
                />
              </Field>
            </div>
          </div>
        )}

        {error && (
          <p className="mt-6 rounded-xl border border-destructive/30 bg-destructive/10 p-3 text-sm font-semibold text-destructive">
            {error}
          </p>
        )}

        <div className="mt-8 flex items-center justify-between gap-4">
          <button
            type="button"
            onClick={back}
            disabled={step === 0}
            className="inline-flex items-center gap-2 rounded-xl border border-border bg-secondary px-5 py-3 text-sm font-semibold text-secondary-foreground transition-all hover:bg-accent disabled:opacity-40"
          >
            <ArrowLeft className="h-4 w-4" /> Back
          </button>

          {step < steps.length - 1 ? (
            <button
              type="button"
              onClick={next}
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-bold text-primary-foreground transition-all hover:bg-primary-strong"
            >
              Continue <ArrowRight className="h-4 w-4" />
            </button>
          ) : (
            <button
              type="submit"
              disabled={sending}
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-bold text-primary-foreground transition-all hover:bg-primary-strong disabled:opacity-60"
            >
              {sending && <Loader2 className="h-4 w-4 animate-spin" />}
              See my friction score
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

function Field({
  label,
  hint,
  children,
}: {
  label: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="block text-sm font-bold text-foreground">{label}</label>
      {hint && <p className="mt-1 text-xs text-muted-foreground">{hint}</p>}
      <div className="mt-2">{children}</div>
    </div>
  );
}

function Choice({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`rounded-xl border px-4 py-2.5 text-sm font-semibold transition-all ${
        active
          ? "border-primary bg-primary text-primary-foreground"
          : "border-border bg-surface text-muted-foreground hover:border-primary/40"
      }`}
    >
      {children}
    </button>
  );
}
