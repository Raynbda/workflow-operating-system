# Reposition the offer: from advice to a Personal Workflow System

Rebuild the uploaded landing page in the app at `/`, with the offer rewritten around tangible, permanent deliverables instead of recommendations. Positioning shifts from "Windows productivity consultant" to **Workflow Systems Designer**, and **Workflow Templatization** becomes the centerpiece.

## Core message

Hero headline: the promise of a new operating system for how you work, not a faster PC.

Lead sentence used verbatim under the headline:

> I analyze how you work, identify everything that's slowing you down, and leave you with a complete operating system for your work — so every future project is faster, more organized, and starts with reusable systems instead of a blank page.

Supporting line: advice is consumed once, assets compound forever.

## Page structure

1. **Announcement bar + nav** — nav links: The System, Templatization, Process, Pricing, FAQ.
2. **Hero** — new headline, the sentence above, two CTAs, four trust badges (1:1 shadowing, deliverables you keep, Visibly Faster guarantee, limited slots).
3. **Positioning strip** — "You're not buying advice. You're buying assets." Short contrast block: Advice (consumed once) vs. System (compounds forever).
4. **The Personal Workflow System** — the 7 deliverables as the main section, each a card with what it is and concrete contents:
   - Workflow Audit — the diagnosis: where time leaks, bottlenecks, highest-ROI fixes.
   - Personal Operating Manual — the handbook answering where every file/idea/task goes, which app for what, what a workday looks like, email processing, capture, desktop.
   - Workflow Templatization — headline deliverable (see below).
   - Digital Workspace Redesign — file system, browser, bookmarks, downloads, notes, task manager, desktop, project organization, knowledge management.
   - App Optimization — per app: hidden features, settings, shortcuts, plugins, layouts, unused capability.
   - Custom Toolkit — a curated software stack: "the exact tools I'd install if I used your computer every day."
   - Personal Resource Library — cheat sheets, shortcut guides, templates, checklists, resources, learning roadmap.
5. **Templatization spotlight** (full-width feature section) — "Every future project starts 30–80% finished." Tag grid of template types: Premiere, Photoshop, Notion, Obsidian, folder and project templates, naming conventions, checklists, SOPs, prompt libraries, email templates, meeting templates, reusable asset libraries. Closing line: after this audit, you never start the same kind of project from scratch again.
6. **Interactive widgets kept from the upload**, reframed as React components: friction self-audit quiz, time-wasted/ROI calculator, before/after 15-minute increment audit view.
7. **Process** — how the engagement runs (shadow → diagnose → design → build the assets → handoff).
8. **Pricing** — same four tiers ($150 / $250 / $500 / $779) with feature lists rewritten as deliverables from the system above, so the $500 tier visibly hands over the Operating Manual + template pack. Templates add-on banner removed (templatization is now core, not an upsell).
9. **Guarantee**, **FAQ accordion**, **Footer**.

## Removals

- All automation and scripting-as-a-service language: "Practical AI Layer" automation framing, "Maintenance Script", "custom scripts" in the DFY tier, automation copy in FAQ/bonuses. Prompt libraries stay, but only as reusable templates.
- The old module grid whose deliverables were "recommendations", replaced by the 7 deliverables.

## Technical notes

- Single route: rewrite `src/routes/index.tsx` (replacing the placeholder), with section components under `src/components/landing/`.
- Design tokens: port the blue/slate system into `src/styles.css` as semantic oklch tokens (background, foreground, primary, muted, accent, border) plus a dotted-grid utility; no hardcoded color classes in components.
- Plus Jakarta Sans loaded via a `<link>` in `src/routes/__root.tsx`.
- Icons via `lucide-react`; the quiz/calculator/toggle/FAQ become React state instead of the inline scripts.
- Route `head()` on `/` with a workflow-systems title, description, og and twitter tags.
- No backend; CTAs point to placeholder links until a checkout target is provided.
