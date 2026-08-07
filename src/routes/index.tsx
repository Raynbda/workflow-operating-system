import { createFileRoute } from "@tanstack/react-router";

import { AnnouncementBar, Footer, Hero, Nav } from "@/components/landing/site-chrome";
import { Positioning, SystemDeliverables } from "@/components/landing/system-sections";
import {
  Authority,
  Process,
  TemplatizationSpotlight,
} from "@/components/landing/templatization-process";
import { AuditPreview, FrictionQuiz, RoiCalculator } from "@/components/landing/widgets";
import { Faq, FinalCta, Guarantee, Pricing } from "@/components/landing/offer";

const title = "Workflow Systems Design — A Complete Operating System For Your Work";
const description =
  "I analyze how you work, remove what slows you down, and hand you a Personal Workflow System: operating manual, reusable templates, workspace redesign and a curated toolkit.";

export const Route = createFileRoute("/")({
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
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen scroll-smooth bg-background font-sans text-foreground antialiased">
      <AnnouncementBar />
      <Nav />
      <main>
        <Hero />
        <Positioning />
        <SystemDeliverables />
        <TemplatizationSpotlight />
        <FrictionQuiz />
        <RoiCalculator />
        <AuditPreview />
        <Process />
        <Authority />
        <Pricing />
        <Guarantee />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
