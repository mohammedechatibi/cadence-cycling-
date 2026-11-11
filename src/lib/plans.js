const round5 = (value) => Math.round(value / 5) * 5;

export const KIND_LABEL = {
  easy: "Easy",
  long: "Long",
  hard: "Hard",
  lift: "Lift",
  rest: "Rest",
};

export const PLANS = [
  {
    id: "cycle",
    name: "Cycling only",
    kicker: "One engine",
    who: "You already ride and want the most health out of the hours you have. Four rides, two easy days, one hard session.",
    sessions: [
      {
        day: "Mon",
        title: "Recovery spin",
        detail: "Zone 1–2, legs turning, no effort to chase.",
        kind: "easy",
        base: 40,
      },
      {
        day: "Tue",
        title: "Intervals",
        detail: "15 min warm-up, then 4 × 4 min hard with 3 min easy between.",
        kind: "hard",
        base: 55,
      },
      {
        day: "Wed",
        title: "Rest",
        detail: "Walk, stretch, or nothing at all.",
        kind: "rest",
        base: 0,
      },
      {
        day: "Thu",
        title: "Endurance ride",
        detail: "Steady zone 2, conversational the whole way.",
        kind: "easy",
        base: 60,
      },
      {
        day: "Fri",
        title: "Rest",
        detail: "Two clear days a week keeps the rest of it honest.",
        kind: "rest",
        base: 0,
      },
      {
        day: "Sat",
        title: "Long ride",
        detail: "The week's main session. Constant pace, fuel every 45 minutes.",
        kind: "long",
        base: 90,
      },
      {
        day: "Sun",
        title: "Easy spin",
        detail: "Short and flat — or skip it if Saturday was big.",
        kind: "easy",
        base: 45,
      },
    ],
    weeks: [
      {
        label: "Week 1",
        focus: "Establish",
        factor: 1,
        note: "Finish every session feeling you could do one more. That is the whole target this week.",
      },
      {
        label: "Week 2",
        focus: "Repeat",
        factor: 1.1,
        note: "Same shape, slightly longer. Nothing new is added.",
      },
      {
        label: "Week 3",
        focus: "Load",
        factor: 1.25,
        note: "The hard week: one extra interval, the long ride at the top of your range.",
      },
      {
        label: "Week 4",
        focus: "Absorb",
        factor: 0.7,
        note: "Back off on purpose. The fitness lands here, not in week three.",
      },
    ],
  },
  {
    id: "lift",
    name: "Cycling + lifting",
    kicker: "Two engines",
    who: "You want the heart and the structure. Two short full-body lifts beside three rides, with the hard work split across both.",
    sessions: [
      {
        day: "Mon",
        title: "Lift A",
        detail: "Squat, hinge, press, row — 5–8 reps with two left in the tank.",
        kind: "lift",
        base: 45,
        exercises: [
          { name: "Back squat or leg press", sets: "3 × 5–6" },
          { name: "Romanian deadlift", sets: "3 × 6–8" },
          { name: "Standing overhead press", sets: "3 × 6–8" },
          { name: "Single-arm dumbbell row", sets: "3 × 8 / side" },
        ],
      },
      {
        day: "Tue",
        title: "Easy ride",
        detail: "Zone 2 the whole way. Legs should feel better afterwards.",
        kind: "easy",
        base: 45,
      },
      {
        day: "Wed",
        title: "Rest",
        detail: "Two clear days a week keeps the rest of it honest.",
        kind: "rest",
        base: 0,
      },
      {
        day: "Thu",
        title: "Lift B",
        detail: "Split squat, pull, carry, core — heavy, never to failure.",
        kind: "lift",
        base: 45,
        exercises: [
          { name: "Dumbbell split squat", sets: "3 × 8 / leg" },
          { name: "Chin-up or lat pulldown", sets: "3 × 5–8" },
          { name: "Kettlebell suitcase carry", sets: "3 × 30 m / side" },
          { name: "Plank or dead bug", sets: "3 × 45 s" },
        ],
      },
      {
        day: "Fri",
        title: "Endurance ride",
        detail: "Steady zone 2, conversational. If you double up today, lift first.",
        kind: "easy",
        base: 60,
      },
      {
        day: "Sat",
        title: "Bike intervals",
        detail: "15 min warm-up, 4 × 4 min hard, easy spinning home.",
        kind: "hard",
        base: 50,
      },
      {
        day: "Sun",
        title: "Rest",
        detail: "The session that makes the others count.",
        kind: "rest",
        base: 0,
      },
    ],
    weeks: [
      {
        label: "Week 1",
        focus: "Learn the lifts",
        factor: 1,
        note: "Modest weights, strict form. Every ride this week stays easy.",
      },
      {
        label: "Week 2",
        focus: "Settle",
        factor: 1.1,
        note: "A little more time on the bike. Nothing changes on the bar yet.",
      },
      {
        label: "Week 3",
        focus: "Add weight",
        factor: 1.2,
        note: "Heavier sets, not more sessions. Bike volume stays where it is.",
      },
      {
        label: "Week 4",
        focus: "Absorb",
        factor: 0.75,
        note: "Shorter rides and the lifts at roughly two thirds of the load.",
      },
    ],
  },
];

export const buildPlanWeeks = (plan) =>
  plan.weeks.map((week) => {
    const days = plan.sessions.map((session) => ({
      ...session,
      minutes: session.base ? round5(session.base * week.factor) : 0,
    }));
    const total = days.reduce((sum, day) => sum + day.minutes, 0);
    return { ...week, days, total };
  });

export const PLAN_RULES = [
  "Run this block three times. At the start of each block, add 15 minutes to the long ride and nothing else.",
  "Two hard days a week is the ceiling. Everything else stays conversational.",
  "Missed a session? Skip it. Never stack two hard days to catch up.",
  "When a lift starts feeling easy, add weight before you add sets or reps.",
];