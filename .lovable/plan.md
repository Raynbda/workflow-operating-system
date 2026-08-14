# Simpler offer, proof first, and a real intake form

Rewrite the page in plain language around one promise — "I make your computer work the way you wish it did" — cut it down to two prices, move proof to the top, and add the intake questionnaire with an instant Friction Score.

## New page order

1. Announcement bar + nav (links: Proof, What you get, How it works, Pricing, FAQ)
2. **Hero** — headline: "I make your computer work the way you wish it did." Sub: "I look at how you actually work, find what's slowing you down, and build you a simpler, faster way to get things done." One primary button: **Get your free Workflow Friction Score** (opens the form). Secondary link: See what you get.
3. **Proof (moved to top)** — the "Who builds it" block: 3+ years of technical Windows content, 100+ tools tested, 20 → 80 WPM, 2,500+ curated bookmarks, plus the four judgment principles, in simpler wording.
4. **Before / After** — two columns using the exact quotes:
   - Before: "Where did I put that? There must be a faster way. Which app should I use? I know I already made this. Why does everything take so long?"
   - After: "I know where everything goes. I know how to do things quickly. My tools work together. And I can actually focus on my work."
5. **"You'll get"** — 8 plain-language cards: faster ways to work, better tools, a cleaner system, easy to find everything, more reuse, less mental clutter, a smoother workflow, a setup built for you.
6. **Problems I solve** — short list in the user's own words ("There must be a faster way", "I know this app can do it but not how", "I'm doing the same things over and over", "I know I have this somewhere", "I've already made this but I'm making it again", "Too much stuff everywhere", "I can't keep all of this in my head", "Every project starts from zero"). Secondary ones phrased softly: moving between tools, repeated small decisions, picking up where you left off, every tool having a clear job.
7. **Who it's for** — tabbed strip (Video editor, Content creator, Graphic designer, Writer, Videographer) showing that profession's problem list and one-line solution.
8. **Time calculator** — kept, copy simplified.
9. **How it works (engagement)** — kept, 5 steps reworded plainly: you fill the form → you send a short screen recording → I study how you work → I build the setup → I hand it over and show you how to use it.
10. **Pricing — two tiers only**: Done-With-You **$500** (I design it, you implement it with my step-by-step plan) and Done-For-You **$1,000** (I set it up on your machine). Guarantee block kept.
11. FAQ, final CTA, footer.

Removed: the audit preview section, the friction self-assessment checklist widget, the $150 and $250 tiers, the "advice vs assets" positioning strip, and jargon like "templatization", "operating manual", "deliverables" (replaced with plain phrasing such as "reusable templates" and "a written guide to your setup").

## The intake form

A dedicated route at `/apply`, opened by every CTA button (no inline form on the landing page, so the page keeps one call to action).

Multi-step, ~2 minutes, in this order:

- **Step 1 — About you:** what kind of work you do (profession select), tools you use daily (multi-select + other).
- **Step 2 — Friction score (3 scored questions):** how you track tasks, how often things slip, hours lost per week. Scores 0–9.
- **Step 3 — Specifics (open text):** the 18-question short audit, trimmed to the ones that matter and shown as open text: what a normal workday looks like, how you do your main work start to finish, which tool you'd get more out of, what feels slower than it should, what you repeat, what you rebuild from scratch, what you struggle to find, the last thing you couldn't find, where your information lives, your biggest mess, what you recreate, what you've already tried, the one thing you'd fix, "I wish my computer could…".
- **Step 3b — Profession questions:** 3–5 extra questions based on the profession picked in step 1.
- **Step 4 — Evidence + fit:** screen-recording link (2–3 min), optional voice/video note link, "what haven't I asked?", preferred tier (DWY / DFY / not sure), name + email.
- **Results screen:** instant Friction Score band (low 0–2 / moderate 3–5 / high 6–9) with its message, a line referencing their dreaded-task answer, "your personalized video + written plan lands in your inbox within 48 hours", then the payment/booking link.

Only name, email and the friction questions are required; everything else can be skipped so people don't abandon.

## Technical notes

- Lovable Cloud is enabled for this: one `submissions` table storing profile, answers (JSON), friction score, chosen tier, name, email, created_at. Insert-only for the public; only you can read it. Validation with zod on both the client and the server function that writes the row.
- New route `src/routes/apply.tsx` with its own head() metadata; landing page stays `src/routes/index.tsx`.
- Reuse the existing design tokens in `src/styles.css` — no new colors. Delete `AuditPreview` and `FrictionQuiz` from `widgets.tsx`, keep `RoiCalculator`.
- Section components split under `src/components/landing/` and `src/components/apply/`; the profession question sets live in one shared data file so the landing tabs and the form stay in sync.
- Payment link is a placeholder until you give me the real checkout URL.
