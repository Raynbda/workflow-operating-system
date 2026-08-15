import { createServerFn } from "@tanstack/react-start";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";
import { z } from "zod";

export type SubmissionRow = {
  id: string;
  name: string;
  email: string;
  profession: string | null;
  tools: string[];
  friction_score: number;
  answers: Record<string, string>;
  recording_link: string | null;
  voice_note_link: string | null;
  preferred_tier: string | null;
  created_at: string;
};

async function assertAdmin(context: { supabase: any; userId: string }) {
  const { data, error } = await context.supabase.rpc("has_role", {
    _user_id: context.userId,
    _role: "admin",
  });
  if (error || !data) throw new Error("FORBIDDEN");
}

export const listSubmissions = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    await assertAdmin(context as never);
    const { data, error } = await context.supabase
      .from("audit_submissions")
      .select("*")
      .order("created_at", { ascending: false });
    if (error) throw new Error(error.message);
    return (data ?? []) as SubmissionRow[];
  });

export const getSubmission = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .inputValidator((data: unknown) => z.object({ id: z.string().uuid() }).parse(data))
  .handler(async ({ data, context }) => {
    await assertAdmin(context as never);
    const { data: rows, error } = await context.supabase
      .from("audit_submissions")
      .select("id, created_at")
      .order("created_at", { ascending: false });
    if (error) throw new Error(error.message);
    const list = (rows ?? []) as { id: string; created_at: string }[];
    const index = list.findIndex((r) => r.id === data.id);

    const { data: row, error: rowError } = await context.supabase
      .from("audit_submissions")
      .select("*")
      .eq("id", data.id)
      .maybeSingle();
    if (rowError) throw new Error(rowError.message);
    if (!row) throw new Error("NOT_FOUND");

    return {
      submission: row as SubmissionRow,
      prevId: index > 0 ? list[index - 1]!.id : null,
      nextId: index >= 0 && index < list.length - 1 ? list[index + 1]!.id : null,
      position: index + 1,
      total: list.length,
    };
  });
