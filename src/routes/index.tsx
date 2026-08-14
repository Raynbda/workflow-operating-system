import { createFileRoute } from "@tanstack/react-router";

import { AnnouncementBar, Footer, Hero, Nav } from "@/components/landing/site-chrome";
import {
  BeforeAfter,
  Problems,
  Proof,
  WhatYouGet,
  WhoItsFor,
} from "@/components/landing/system-sections";
import { Process } from "@/components/landing/templatization-process";
import { RoiCalculator } from "@/components/landing/widgets";
import { Faq, FinalCta, Guarantee, Pricing } from "@/components/landing/offer";

const title = "Get Your Digital Life Together — Personal Workflow Audit";
const description =
  "I look at how you work, what tools you use, and where you're wasting time, then show you exactly what to change to make work faster, easier and more focused.";

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
        <Proof />
        <BeforeAfter />
        <WhatYouGet />
        <Problems />
        <WhoItsFor />
        <RoiCalculator />
        <Process />
        <Pricing />
        <Guarantee />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
