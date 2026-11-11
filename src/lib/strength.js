export const ENGINES = [
  {
    kicker: "Engine",
    title: "Cycling raises the ceiling",
    short:
      "Aerobic work rebuilds the machinery that delivers oxygen and clears waste. It is the half of longevity you can measure on a bike computer.",
    points: [
      "Cardiorespiratory fitness is one of the strongest predictors of how long people live — stronger than smoking, diabetes or high blood pressure in some cohorts.",
      "Riding most weeks lowers resting blood pressure, improves how muscles take up glucose, and keeps arteries flexible.",
      "Low impact means you can accumulate hours without the joint cost that stops people running in their sixties.",
    ],
    limits:
      "But pedalling is non-weight-bearing and low-force. It builds an excellent engine inside a frame it does not reinforce.",
  },
  {
    kicker: "Frame",
    title: "Lifting keeps the structure",
    short:
      "Loading muscle against gravity is the only practical way to tell your body to keep bone, tendon and muscle that you would otherwise shed after 30.",
    points: [
      "Adults lose roughly 3–8% of muscle mass per decade after 30 unless they train against resistance; strength is what keeps you independent.",
      "Bone responds to load, not to sweat. Cyclists are often fitter than average and still have below-average bone density.",
      "Grip strength — a proxy for total-body strength — tracks all-cause and cardiovascular mortality in large cohorts.",
    ],
    limits:
      "But a strong body with a small aerobic base still struggles on stairs, hills and long days. Strength without endurance is a short race.",
  },
];

export const MARKERS = [
  { marker: "Aerobic capacity (VO₂ max)", ride: "Strong", lift: "Little" },
  { marker: "Muscle mass and strength", ride: "Modest", lift: "Strong" },
  { marker: "Bone mineral density", ride: "Little", lift: "Strong" },
  { marker: "Blood-sugar control", ride: "Strong", lift: "Strong" },
  { marker: "Resting blood pressure", ride: "Strong", lift: "Modest" },
  { marker: "Balance and fall risk", ride: "Modest", lift: "Strong" },
  { marker: "Tendon and joint resilience", ride: "Modest", lift: "Strong" },
  { marker: "Body composition", ride: "Modest", lift: "Strong" },
  { marker: "Mood and sleep quality", ride: "Strong", lift: "Modest" },
  { marker: "All-cause mortality risk", ride: "Strong", lift: "Strong" },
];

export const WEEK = [
  { day: "Mon", block: "Lift A", detail: "Squat, hinge, press, row — 40 min", tone: "lift" },
  { day: "Tue", block: "Ride", detail: "45–60 min easy, zone 2", tone: "ride" },
  { day: "Wed", block: "Rest", detail: "Walk, stretch, or nothing", tone: "rest" },
  { day: "Thu", block: "Lift B", detail: "Split squat, pull, carry, core — 40 min", tone: "lift" },
  { day: "Fri", block: "Ride", detail: "60–90 min steady, conversational", tone: "ride" },
  { day: "Sat", block: "Ride hard", detail: "30–40 min of intervals, or 2 h easy", tone: "ride" },
  { day: "Sun", block: "Rest", detail: "The session that makes the others count", tone: "rest" },
];

export const RULES = [
  {
    title: "Two lifts a week is the floor",
    body: "Two 30–45 minute full-body sessions cover everything that matters. Three is better if you recover well. Thirty minutes of weekly muscle-strengthening activity is where the mortality curves start separating.",
  },
  {
    title: "Lift heavy enough to change something",
    body: "Aim for 5–8 reps with one or two left in the tank on the big movements. If a set of ten feels the same as it did three months ago, the body has no reason to hold on to the tissue.",
  },
  {
    title: "Never skip the squat and the hinge",
    body: "Hips, spine and legs carry you up stairs, off the floor and off a chair at seventy. Those are the patterns that decide whether an injury becomes a permanent loss of ability.",
  },
  {
    title: "Decide the order on shared days",
    body: "Lift first, then ride, or split them by six hours. Training strength on already-depleted legs blunts the strength signal — the reason 'cardio kills gains' becomes true at high combined volume.",
  },
  {
    title: "Keep the easy rides genuinely easy",
    body: "Most of your riding should stay conversational. Two hard days a week, one on the bike and one in the gym, is a workload a body can absorb for decades.",
  },
  {
    title: "Eat like you are building something",
    body: "Around 1.4–1.8 g of protein per kilo of bodyweight a day, spread across meals. Under-eating quietly cancels resistance training, especially after 50.",
  },
];

export const MYTHS = [
  {
    claim: "Cardio kills your gains",
    truth:
      "Interference is real but modest. It shows up when endurance volume is large and hard sessions sit right next to lifting. Two or three rides a week beside two lifts is not that.",
  },
  {
    claim: "Light weights, high reps, for tone",
    truth:
      "Muscle responds to tension and progression, not to burn. Light sets are fine as a starting point, not as a permanent plan.",
  },
  {
    claim: "Cycling already trains my legs",
    truth:
      "Pedalling uses a fraction of your maximum force and loads almost no bone. Sprints help; they do not replace a squat.",
  },
  {
    claim: "I am too old to start",
    truth:
      "The oldest participants in strength trials gain muscle fastest in relative terms. Ninety-year-olds add strength and balance in twelve weeks.",
  },
];

export const SOURCES = [
  "Momma et al., British Journal of Sports Medicine, 2022 — 30–60 minutes of weekly muscle-strengthening activity associated with 10–17% lower all-cause mortality.",
  "Celis-Morales et al., BMJ, 2018 — grip strength and mortality across 500,000 UK Biobank participants.",
  "Mandsager et al., JAMA Network Open, 2018 — cardiorespiratory fitness and long-term mortality in 122,000 adults.",
  "Myers et al., New England Journal of Medicine, 2002 — exercise capacity as a stronger predictor of death than conventional risk factors.",
  "WHO physical activity guidance, 2020 — 150–300 minutes of moderate aerobic activity plus muscle-strengthening work on two or more days a week.",
  "Morton et al., British Journal of Sports Medicine, 2018 — protein intake and resistance-training gains, plateauing near 1.6 g/kg per day.",
  "Bone-density reviews in cyclists (e.g. Nichols & Rauh, Sports Medicine) — fit riders, thinner bones than expected.",
];