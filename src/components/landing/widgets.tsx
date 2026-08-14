import { useState } from "react";
import { Link } from "@tanstack/react-router";

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
          Quick maths
        </span>
        <h2 className="mt-2 text-3xl font-extrabold text-foreground">
          What all that lost time costs you
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Searching for things, redoing work and jumping between apps adds up. Move the sliders.
        </p>
      </div>

      <div className="grid items-center gap-8 lg:grid-cols-12">
        <div className="space-y-6 rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8 lg:col-span-7">
          {[
            {
              label: "Hours a day on your computer",
              value: `${hours} hrs/day`,
              min: 3,
              max: 14,
              step: 1,
              v: hours,
              set: setHours,
            },
            {
              label: "What an hour of your time is worth",
              value: `$${rate} / hr`,
              min: 20,
              max: 250,
              step: 5,
              v: rate,
              set: setRate,
            },
            {
              label: "How much of the day is wasted friction",
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
                aria-label={s.label}
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
              Your numbers
            </span>
            <div className="mt-6 space-y-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-ink-muted">
                  Time lost each month
                </p>
                <p className="mt-1 text-3xl font-black">{monthlyHours} hours</p>
                <p className="mt-0.5 text-xs text-ink-muted">
                  About {Math.max(1, Math.round(monthlyHours / 8))} full workdays every month.
                </p>
              </div>
              <div className="border-t border-ink-muted/20 pt-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-ink-muted">
                  Cost over a year
                </p>
                <p className="mt-1 text-4xl font-black text-primary">
                  ${yearlyCost.toLocaleString()}
                </p>
              </div>
              <div className="border-t border-ink-muted/20 pt-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-ink-muted">
                  What a better setup gives back
                </p>
                <p className="mt-1 text-2xl font-bold text-success">~{savedHours} hours / month</p>
              </div>
            </div>
          </div>
          <Link
            to="/apply"
            className="mt-8 block rounded-xl bg-primary px-4 py-3.5 text-center font-bold text-primary-foreground transition-all hover:bg-primary-strong"
          >
            Get my audit
          </Link>
        </div>
      </div>
    </section>
  );
}
