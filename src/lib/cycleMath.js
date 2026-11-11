export const INTENSITIES = [
  { id: "leisure", label: "Leisure", detail: "Under 16 km/h, chatting pace", met: 4 },
  { id: "moderate", label: "Moderate", detail: "16–19 km/h, breathing deeper", met: 6.8 },
  { id: "brisk", label: "Brisk", detail: "19–22 km/h, steady effort", met: 8 },
  { id: "vigorous", label: "Vigorous", detail: "22–26 km/h, working hard", met: 10 },
  { id: "racing", label: "Racing", detail: "26 km/h and up, or hard intervals", met: 12 },
];

/** ACSM metabolic equation: kcal/min = MET × 3.5 × kg ÷ 200. */
export const caloriesBurned = ({ weightKg, minutes, met }) =>
  Math.round(((met * 3.5 * weightKg) / 200) * minutes);

export const maxHeartRate = (age) => Math.round(208 - 0.7 * age);

export const HR_ZONES = [
  {
    id: "z1",
    name: "Zone 1",
    label: "Recovery",
    from: 0.5,
    to: 0.6,
    purpose: "Easy spinning, warm-ups, and the day after a hard ride.",
  },
  {
    id: "z2",
    name: "Zone 2",
    label: "Endurance",
    from: 0.6,
    to: 0.7,
    purpose: "The base of everything: fat oxidation, capillaries, aerobic fitness.",
  },
  {
    id: "z3",
    name: "Zone 3",
    label: "Tempo",
    from: 0.7,
    to: 0.8,
    purpose: "Steady and slightly uncomfortable. Good for a sustained commute.",
  },
  {
    id: "z4",
    name: "Zone 4",
    label: "Threshold",
    from: 0.8,
    to: 0.9,
    purpose: "Hard, held for minutes at a time. Raises your ceiling.",
  },
  {
    id: "z5",
    name: "Zone 5",
    label: "VO₂ max",
    from: 0.9,
    to: 1,
    purpose: "Short and very hard. Once a week at most.",
  },
];

/** Karvonen method: zone bpm = resting + (%intensity × (max − resting)). */
export const heartRateZones = ({ age, resting }) => {
  const max = maxHeartRate(age);
  const reserve = Math.max(max - resting, 1);
  return HR_ZONES.map((zone) => ({
    ...zone,
    low: Math.round(resting + reserve * zone.from),
    high: Math.round(resting + reserve * zone.to),
  }));
};

export const GOALS = [
  { id: "health", label: "Heart health", blurb: "Steady aerobic minutes, with a little intensity." },
  { id: "weight", label: "Weight & energy", blurb: "Longer, calmer rides that burn without wrecking you." },
  { id: "endurance", label: "Endurance", blurb: "Build toward longer rides, one long day a week." },
  { id: "start", label: "Getting started", blurb: "Short and forgiving. Gentle enough to repeat." },
];

export const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const LAYOUTS = {
  2: [1, 5],
  3: [0, 2, 5],
  4: [0, 1, 3, 5],
  5: [0, 1, 3, 4, 5],
  6: [0, 1, 2, 3, 4, 5],
};

const PATTERNS = {
  health: ["easy", "intervals", "long", "easy", "tempo", "long"],
  weight: ["steady", "easy", "long", "steady", "intervals", "long"],
  endurance: ["easy", "tempo", "long", "easy", "intervals", "long"],
  start: ["easy", "easy", "easy", "easy", "easy", "easy"],
};

export const SESSIONS = {
  easy: {
    name: "Easy spin",
    zone: "Zone 2",
    factor: 1,
    note: "Nose-breathing pace. If you cannot hold a conversation, slow down.",
  },
  steady: {
    name: "Steady ride",
    zone: "Zone 2–3",
    factor: 1.15,
    note: "Continuous, even effort. The workhorse session for energy balance.",
  },
  intervals: {
    name: "Intervals",
    zone: "Zone 4",
    factor: 0.85,
    note: "Warm up, then 4 × 2 min hard with 2 min easy between. Cool down.",
  },
  tempo: {
    name: "Tempo blocks",
    zone: "Zone 3",
    factor: 1,
    note: "Two blocks of 8–10 min at a pace you could just about talk through.",
  },
  long: {
    name: "Long ride",
    zone: "Zone 2",
    factor: 1.6,
    note: "The one that builds everything. Keep it easy and take fuel with you.",
  },
};

export function buildWeek({ goal, days, minutes }) {
  const slots = LAYOUTS[days] ?? LAYOUTS[3];
  const pattern = PATTERNS[goal] ?? PATTERNS.health;

  const week = DAYS.map((day, index) => {
    const slotIndex = slots.indexOf(index);
    if (slotIndex === -1) return { day, session: null, minutes: 0 };
    const key = pattern[slotIndex % pattern.length];
    const session = SESSIONS[key];
    return {
      day,
      key,
      session,
      minutes: Math.max(15, Math.round((minutes * session.factor) / 5) * 5),
    };
  });

  return {
    week,
    sessions: slots.length,
    totalMinutes: week.reduce((sum, item) => sum + item.minutes, 0),
  };
}