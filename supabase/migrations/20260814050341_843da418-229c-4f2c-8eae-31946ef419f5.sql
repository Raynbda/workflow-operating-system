CREATE TABLE public.audit_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  profession TEXT,
  tools TEXT[] NOT NULL DEFAULT '{}',
  friction_score INTEGER NOT NULL DEFAULT 0,
  answers JSONB NOT NULL DEFAULT '{}'::jsonb,
  recording_link TEXT,
  voice_note_link TEXT,
  preferred_tier TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

GRANT INSERT ON public.audit_submissions TO anon, authenticated;
GRANT ALL ON public.audit_submissions TO service_role;

ALTER TABLE public.audit_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit the intake form"
ON public.audit_submissions
FOR INSERT
TO anon, authenticated
WITH CHECK (true);