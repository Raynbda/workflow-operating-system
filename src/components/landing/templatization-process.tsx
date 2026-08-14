const steps = [
  {
    n: "01",
    title: "You tell me how you work",
    body: "A short form about your work, your tools, and what keeps slowing you down.",
  },
  {
    n: "02",
    title: "You send a short recording",
    body: "2–3 minutes of a normal work session. I see the friction you've stopped noticing.",
  },
  {
    n: "03",
    title: "I study how you work",
    body: "I go through it step by step and mark everything slow, repeated, scattered or missing.",
  },
  {
    n: "04",
    title: "I build the setup",
    body: "Faster ways to do your daily tasks, the right tools, a clear place for everything, and templates for what you repeat.",
  },
  {
    n: "05",
    title: "I hand it over",
    body: "A personalised video and written plan, step by step — or I set the whole thing up for you.",
  },
];

export function Process() {
  return (
    <section id="how-it-works" className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
      <div className="mx-auto mb-14 max-w-2xl text-center">
        <span className="text-xs font-extrabold uppercase tracking-widest text-primary">
          How it works
        </span>
        <h2 className="mt-2 text-3xl font-extrabold text-foreground sm:text-4xl">
          Five steps, no calls required
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
      <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-muted-foreground">
        Everything is tailored to your level, your tools and your work. You never sit through things
        you already know.
      </p>
    </section>
  );
}
