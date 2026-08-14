export const PAYMENT_URL =
  "https://link.payoneer.com/Token?t=2DC993AF112A411EB9EF0E95051EBA3F&src=pl";

export type Profession = {
  id: string;
  label: string;
  problems: string[];
  solution: string;
  questions: string[];
};

export const professions: Profession[] = [
  {
    id: "video-editor",
    label: "Video editor",
    problems: [
      "You spend too much time clicking through menus.",
      "You know your editing app can do more, but not which parts matter to you.",
      "You rebuild the same project setup every single time.",
      "You recreate effects, graphics and presets you already made.",
      "You waste time looking for old footage and assets.",
      "You have a library of assets but rarely reuse it.",
    ],
    solution: "A faster editing setup built around the way you actually edit.",
    questions: [
      "What editing software do you use, and what version?",
      "Walk me through how you start a new project.",
      "What do you rebuild from scratch every time?",
      "How do you store and find footage or assets you want to reuse?",
      "What's the most repetitive part of your editing process?",
    ],
  },
  {
    id: "content-creator",
    label: "Content creator",
    problems: [
      "Your ideas are scattered across different places.",
      "You lose useful research after finishing a video.",
      "Your old videos aren't helping you make new ones.",
      "Every video starts from scratch.",
      "You spend too much time looking for assets.",
      "You have too many tools but no clear job for each one.",
    ],
    solution: "A content setup that makes it easier to create, find and reuse your work.",
    questions: [
      "Walk me through your process from idea to published video.",
      "Where do new ideas and research end up?",
      "How do you reuse material from old videos?",
      "What do you rebuild for every video?",
      "Which part of making a video takes longer than it should?",
    ],
  },
  {
    id: "graphic-designer",
    label: "Graphic designer",
    problems: [
      "You repeatedly recreate the same things.",
      "Fonts, assets, templates and references are scattered.",
      "You waste time finding old projects.",
      "You have hundreds of assets but can't quickly find the right one.",
      "Setting up a new project takes too long.",
      "You know your design app can do more than you use it for.",
    ],
    solution: "A design setup that makes creating, finding and reusing your work faster.",
    questions: [
      "What design software do you use?",
      "Where do you keep fonts, references, templates and assets?",
      "What do you repeatedly recreate?",
      "How do you find old designs?",
      "What design task do you wish took one click?",
    ],
  },
  {
    id: "writer",
    label: "Writer",
    problems: [
      "Your ideas are scattered everywhere.",
      "You don't know where to put a new idea.",
      "You lose research you already collected.",
      "You save a lot of information but struggle to use it.",
      "Your notes are hard to turn into actual work.",
      "You struggle to keep track of unfinished pieces.",
    ],
    solution: "A writing setup that makes it easier to capture, find, develop and reuse your ideas.",
    questions: [
      "Where do ideas, research and drafts currently live?",
      "How do you find old research?",
      "What do you repeatedly search for?",
      "Which part of writing takes longer than it should?",
      "How do you turn an idea into a finished piece?",
    ],
  },
  {
    id: "videographer",
    label: "Videographer",
    problems: [
      "You waste time finding footage from previous shoots.",
      "Your footage and assets are hard to organise.",
      "You set up the same projects over and over.",
      "You have no easy way to reuse your favourite assets.",
      "Your editing app isn't configured around how you work.",
      "Useful footage gets forgotten.",
    ],
    solution: "A setup that makes your footage easier to manage, edit and reuse.",
    questions: [
      "What does your path from shoot to edit to archive look like?",
      "How do you name and store footage?",
      "What do you set up again for every shoot?",
      "How do you find a clip from six months ago?",
      "What's the most repetitive part of your process?",
    ],
  },
  {
    id: "other",
    label: "Something else",
    problems: [
      "You think there must be a faster way to do your daily tasks.",
      "You know your apps can do more, but not how.",
      "You lose time looking for files, notes and links.",
      "You redo work you've already done once.",
      "You have stuff everywhere and no clear place for anything.",
      "You can't keep it all in your head.",
    ],
    solution: "A setup built around your work, not a generic productivity system.",
    questions: [
      "What software do you use most, and what for?",
      "What do you do over and over again?",
      "What do you struggle to find?",
      "What do you set up from scratch each time?",
      "What's the one thing you'd want faster?",
    ],
  },
];

export const frictionQuestions = [
  {
    id: "tracking",
    question: "How do you currently keep track of tasks?",
    options: [
      { label: "I mostly remember them or use sticky notes", points: 3 },
      { label: "A spreadsheet or plain notes app", points: 2 },
      { label: "A task app, but I don't fully trust it", points: 1 },
      { label: "A system I actually follow", points: 0 },
    ],
  },
  {
    id: "slips",
    question: "How often does something slip through the cracks?",
    options: [
      { label: "Daily", points: 3 },
      { label: "Weekly", points: 2 },
      { label: "Rarely", points: 1 },
      { label: "Never", points: 0 },
    ],
  },
  {
    id: "hours",
    question: "How many hours a week do you lose to mess, tool-switching or redoing things?",
    options: [
      { label: "6+ hours", points: 3 },
      { label: "3–6 hours", points: 2 },
      { label: "1–3 hours", points: 1 },
      { label: "Less than 1 hour", points: 0 },
    ],
  },
] as const;

export function frictionBand(score: number) {
  if (score <= 2)
    return {
      title: "Low friction",
      body: "Your setup is mostly solid — I'll likely find one or two specific leaks rather than a systemic problem.",
    };
  if (score <= 5)
    return {
      title: "Moderate friction",
      body: "You have a workable setup with real cracks in it — the kind that quietly cost a few hours a week without you noticing.",
    };
  return {
    title: "High friction",
    body: "This is costing you real time every day. The good news: setups like yours are the easiest to get quick wins from.",
  };
}

export const coreQuestions: { id: string; label: string; hint?: string }[] = [
  {
    id: "work",
    label: "What do you do for work, and what does a normal workday actually look like?",
    hint: "Don't give me your job title — tell me what you spend time doing.",
  },
  {
    id: "process",
    label: "Walk me through how you do your main type of work, from start to finish.",
  },
  { id: "tools_detail", label: "What are the 3–5 apps you use most, and what do you use each for?" },
  {
    id: "underused_tool",
    label: "Which tool do you feel you could get much more out of, and what do you wish it could do?",
  },
  {
    id: "slow",
    label: "What do you regularly do that feels slower or more complicated than it should?",
    hint: "2–3 specific examples.",
  },
  { id: "repeat", label: "What do you find yourself doing over and over again?" },
  {
    id: "from_scratch",
    label: "What do you repeatedly create or set up from scratch?",
    hint: "Files, folders, projects, graphics, documents, settings…",
  },
  { id: "cant_find", label: "What do you regularly struggle to find?" },
  {
    id: "last_lost",
    label: "Tell me about the last thing you couldn't find. What happened?",
  },
  {
    id: "where_lives",
    label: "Where does your information live right now?",
    hint: "Ideas, tasks, notes, research, files, bookmarks, things you might need later.",
  },
  {
    id: "mess",
    label: "What's currently the biggest mess or source of overload?",
    hint: "Tabs, files, downloads, notes, email, bookmarks, tasks, apps…",
  },
  { id: "recreate", label: "What work do you recreate because you can't find or reuse the original?" },
  { id: "tried", label: "What have you already tried to improve the way you work? What worked?" },
  { id: "dread", label: "What's one task you dread doing every week?" },
  { id: "one_fix", label: "If I could fix one thing about the way you work, what would you choose?" },
  { id: "wish", label: "Finish this sentence: “I wish my computer could…”" },
];

export const toolOptions = [
  "Notion",
  "Obsidian",
  "Google Workspace",
  "Microsoft 365",
  "Slack / Teams",
  "Email (Gmail / Outlook)",
  "A task app (Todoist, Trello, Asana…)",
  "Premiere / DaVinci Resolve",
  "Photoshop / Illustrator / Figma",
  "Windows built-in apps only",
];
