import { createServerFn } from "@tanstack/react-start";
import { createClient } from "@supabase/supabase-js";
import { z } from "zod";

const submissionSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  profession: z.string().trim().max(60).optional().default(""),
  tools: z.array(z.string().trim().max(80)).max(30).default([]),
  frictionScore: z.number().int().min(0).max(9),
  answers: z.record(z.string(), z.string().max(4000)).default({}),
  recordingLink: z.string().trim().max(500).optional().default(""),
  voiceNoteLink: z.string().trim().max(500).optional().default(""),
  preferredTier: z.string().trim().max(40).optional().default(""),
});

export type SubmissionInput = z.input<typeof submissionSchema>;

export const submitAudit = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => submissionSchema.parse(data))
  .handler(async ({ data }) => {
    const url = process.env["VITE_SUPABASE_URL"]!;
    const key = process.env["VITE_SUPABASE_PUBLISHABLE_KEY"]!;
    const supabase = createClient(url, key, {
      auth: { persistSession: false, autoRefreshToken: false },
    });

    const { error } = await supabase.from("audit_submissions").insert({
      name: data.name,
      email: data.email,
      profession: data.profession || null,
      tools: data.tools,
      friction_score: data.frictionScore,
      answers: data.answers,
      recording_link: data.recordingLink || null,
      voice_note_link: data.voiceNoteLink || null,
      preferred_tier: data.preferredTier || null,
    });

    if (error) {
      console.error("audit submission failed", error.message);
      throw new Error("Could not save your answers. Please try again.");
    }

    return { ok: true as const };
  });
