# Private Admin Area for Intake Submissions

A password-protected admin area where you can read every intake submission in full.

## What you get

- **Sign-in page** (`/auth`) — email + password. Only accounts you approve can see data.
- **Submissions list** (`/admin`) — newest first, showing name, profession, friction score, chosen tier, and date. Click any row to open it.
- **Full detail view** (`/admin/<submission>`) — everything the person sent:
  - Name, email (click to reply), profession, date submitted
  - Friction score with the three diagnostic answers spelled out
  - Every open-ended answer, question text above each answer
  - Profession-specific answers in their own block
  - Screen recording and voice note links as clickable buttons
  - Preferred tier
  - Copy-to-clipboard for the whole submission as plain text (handy for pasting into notes before a session)
- Back link to the list, plus previous/next navigation between submissions.

Nothing about the public site or the intake form changes.

## Access control

Submissions contain names and emails, so access is locked down:

- A separate admin-roles table decides who is an admin — never a flag on a user profile.
- The submissions table stays insert-only for the public; reading is allowed only for admin accounts.
- The admin pages live behind the signed-in-only area; a non-admin who signs in sees "no access", not data.
- Your own account gets the admin role granted directly in the database after you create it.

## Technical notes

- Migration: `app_role` enum + `user_roles` table with grants, RLS, and a `has_role()` security-definer function; add an admin-only SELECT policy on `audit_submissions` (existing anon INSERT policy untouched).
- Routes: `src/routes/auth.tsx` (public sign-in), `src/routes/_authenticated/route.tsx` gate, `src/routes/_authenticated/admin.index.tsx` (list), `src/routes/_authenticated/admin.$id.tsx` (detail).
- Data via `createServerFn` with `requireSupabaseAuth` (`listSubmissions`, `getSubmission`) in `src/lib/submissions.functions.ts`, each verifying `has_role(userId, 'admin')` before returning rows; loaders are safe under `_authenticated`.
- Question text for rendering answers reuses `src/lib/professions.ts` plus the core question list from the intake form, extracted into a shared module so labels stay in sync.
- Admin routes get `robots: noindex` metadata.

## Step after approval

Sign up once at `/auth`; I then grant your account the admin role so the pages unlock.
