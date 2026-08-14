import { createFileRoute } from "@tanstack/react-router";

import { IntakeForm } from "@/components/apply/intake-form";

const title = "Get Your Digital Workspace Audit — 2-Minute Intake";
const description =
  "Answer a few questions about how you work and get your friction score instantly. Your personalised video and written plan follows within 48 hours.";

export const Route = createFileRoute("/apply")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ApplyPage,
});

function ApplyPage() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground antialiased">
      <IntakeForm />
    </div>
  );
}
