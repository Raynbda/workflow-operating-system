import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { listSubmissions } from "@/lib/admin.functions";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/_authenticated/admin/")({
  head: () => ({
    meta: [
      { title: "Submissions — Admin" },
      { name: "description", content: "All intake submissions." },
      { name: "robots", content: "noindex, nofollow" },
      { property: "og:title", content: "Submissions — Admin" },
      { property: "og:description", content: "All intake submissions." },
    ],
  }),
  component: AdminList,
});

function AdminList() {
  const fetchAll = useServerFn(listSubmissions);
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { data, isLoading, error } = useQuery({
    queryKey: ["submissions"],
    queryFn: () => fetchAll(),
    retry: false,
  });

  async function signOut() {
    await queryClient.cancelQueries();
    queryClient.clear();
    await supabase.auth.signOut();
    navigate({ to: "/auth", replace: true });
  }

  const forbidden = error instanceof Error && error.message.includes("FORBIDDEN");

  return (
    <main className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black tracking-tight text-foreground">Submissions</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            {data ? `${data.length} total` : "Loading…"}
          </p>
        </div>
        <button
          onClick={signOut}
          className="rounded-xl border border-border px-4 py-2 text-sm font-bold text-foreground"
        >
          Sign out
        </button>
      </div>

      {isLoading ? <p className="mt-10 text-sm text-muted-foreground">Loading submissions…</p> : null}

      {forbidden ? (
        <div className="mt-10 rounded-2xl border border-border bg-card p-6">
          <p className="text-sm font-bold text-foreground">No access</p>
          <p className="mt-1 text-sm text-muted-foreground">
            This account isn't an admin, so it can't view submissions.
          </p>
        </div>
      ) : null}

      {error && !forbidden ? (
        <p className="mt-10 text-sm font-semibold text-destructive">
          Couldn't load submissions. Try refreshing.
        </p>
      ) : null}

      {data && data.length === 0 ? (
        <p className="mt-10 text-sm text-muted-foreground">No submissions yet.</p>
      ) : null}

      <div className="mt-8 space-y-3">
        {data?.map((s) => (
          <Link
            key={s.id}
            to="/admin/$id"
            params={{ id: s.id }}
            className="block rounded-2xl border border-border bg-card p-5 transition hover:border-primary"
          >
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-base font-bold text-foreground">{s.name}</p>
                <p className="text-sm text-muted-foreground">
                  {s.profession || "No profession"} · {s.email}
                </p>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <span className="rounded-full bg-primary-soft px-3 py-1 font-bold text-primary">
                  Friction {s.friction_score}/9
                </span>
                {s.preferred_tier ? (
                  <span className="rounded-full border border-border px-3 py-1 font-semibold text-foreground">
                    {s.preferred_tier}
                  </span>
                ) : null}
                <span className="text-muted-foreground">
                  {new Date(s.created_at).toLocaleDateString()}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
