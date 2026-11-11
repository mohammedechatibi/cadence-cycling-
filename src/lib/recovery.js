/** Shared copy and figures for the recovery page. */

export const NUMBERS = [
  {
    value: "7–9 h",
    label: "Sleep per night",
    note: "Elite riders routinely need the top of that range, plus a nap.",
  },
  {
    value: "−40%",
    label: "Volume in a deload week",
    note: "Cut the hours, keep a few sharp efforts so the legs don't go flat.",
  },
  {
    value: "1.6–2.2",
    label: "Grams of protein per kg",
    note: "Per day, spread over three or four meals rather than one shake.",
  },
];

export const LEVERS = [
  {
    n: "01",
    title: "Sleep",
    lede: "The one lever with no substitute.",
    body: [
      "Sleep is when growth hormone peaks and when the adaptations you trained for are actually consolidated. Cut it and everything downstream gets worse: perceived effort, mood, glucose control, immune function.",
      "Aim for a fixed wake time, seven to nine hours, and a dark room. After a big day, add a 20-minute nap rather than sleeping in by two hours.",
    ],
    detail: "Keep the room cool and phone out of reach; caffeine after 2pm costs deep sleep even when you fall asleep fine.",
  },
  {
    n: "02",
    title: "Easy days that are actually easy",
    lede: "Most riders fail here, not on the hard days.",
    body: [
      "If every ride sits in the middle, nothing is hard enough to drive adaptation and nothing is easy enough to let it happen. The middle is where riders accumulate fatigue that never clears.",
      "Easy means you can hold a conversation in full sentences. Heart rate drifting up on a flat, steady spin is the sign to back off, not to push.",
    ],
    detail: "Rough split for a training week: about four out of five rides should feel genuinely comfortable.",
  },
  {
    n: "03",
    title: "Food and fluid",
    lede: "Refuelling is recovery, not reward.",
    body: [
      "Glycogen refills fastest in the first few hours after a long ride, and protein spread across the day is what rebuilds the muscle you broke down. Under-eating shows up as flat legs weeks later, not that evening.",
      "Weigh yourself before and after a long ride in the heat: every kilogram lost is roughly a litre to replace, with a pinch of salt.",
    ],
    detail: "A normal plate within an hour of finishing beats a perfect recovery shake two hours later.",
  },
  {
    n: "04",
    title: "Load management",
    lede: "The plan is the recovery plan.",
    body: [
      "Fatigue accumulates on a delay: three hard weeks feel fine until week four arrives. Building in a lighter week every third or fourth week is cheaper than the two weeks off the bike that an injury or illness forces.",
      "Increase weekly volume by small steps, not leaps. A jump of more than about a tenth is where most overuse problems start.",
    ],
    detail: "Three weeks on, one week light is the standard rhythm. Riders over fifty usually do better on two on, one light.",
  },
  {
    n: "05",
    title: "Mobility and strength",
    lede: "Twenty minutes twice a week keeps the position.",
    body: [
      "Cycling is a narrow range of motion repeated a few thousand times. Hips, thoracic spine and hamstrings shorten; the low back takes the bill on long days.",
      "Two short sessions of hip hinging, split squats and trunk work hold the position and reduce the stiffness that turns into back pain in week three of a block.",
    ],
    detail: "Foam rolling and massage make sore legs feel better; they don't measurably speed recovery.",
  },
  {
    n: "06",
    title: "Signals worth tracking",
    lede: "Trends, not single readings.",
    body: [
      "Resting heart rate, sleep quality and how motivated you feel on waking are cheap to record and reliable across a fortnight. One bad night or one high morning reading means nothing on its own.",
      "Two weeks of worsening numbers while training load stays flat is the pattern that says cut back now.",
    ],
    detail: "Write it down or it didn't happen — memory edits a bad week into a good one.",
  },
];

export const SIGNALS = [
  {
    signal: "Resting heart rate up 5–10 bpm for several days",
    means: "The nervous system is still loaded, or you are getting ill.",
    action: "Turn the next hard session into an easy spin and re-check in 48 hours.",
  },
  {
    signal: "Sleep gets worse as training gets harder",
    means: "A classic early sign of accumulated fatigue, not of fitness.",
    action: "Cut the week's volume by a third before it becomes a fortnight off.",
  },
  {
    signal: "Power or pace falls at the same effort",
    means: "Adaptation has stalled; the training is no longer being absorbed.",
    action: "Take a lighter week, then retest rather than training harder.",
  },
  {
    signal: "Mood flat, motivation gone, irritable",
    means: "Often the first symptom riders notice, and the last one they trust.",
    action: "Treat it as data. Reduce load, protect sleep, eat properly.",
  },
  {
    signal: "Colds or sore throats that keep returning",
    means: "Immune function is down, usually with under-fuelling or poor sleep.",
    action: "Easy riding only until it clears, with more food and more hours in bed.",
  },
  {
    signal: "A niggle that stays in the same place",
    means: "Load is outrunning tissue tolerance, not a character flaw.",
    action: "Change position, drop volume, and get it looked at if it lasts a fortnight.",
  },
];

export const DELOAD = {
  eyebrow: "A lighter week, written out",
  title: "What a recovery week looks like",
  lede:
    "Half the hours of a normal build week, one short effort to keep the legs awake, and no long ride. This is not a week off — it is the week the previous three get absorbed.",
  rows: [
    { day: "Monday", session: "Off", note: "Walk, eat, sleep. Nothing to make up." },
    { day: "Tuesday", session: "45 min easy", note: "Zone 1–2 spin, high cadence, no hills." },
    { day: "Wednesday", session: "Off or mobility", note: "Twenty minutes of hips and back." },
    { day: "Thursday", session: "60 min easy + 3 × 1 min", note: "Short efforts just above tempo, full recovery between." },
    { day: "Friday", session: "Off", note: "Second full rest day of the week." },
    { day: "Saturday", session: "90 min steady", note: "Comfortable endurance pace, no group sprint." },
    { day: "Sunday", session: "Off", note: "Then start the next block fresh." },
  ],
  footer: "Roughly four hours against ten to twelve in a build week — about a 40 per cent drop in volume with a little intensity left in.",
};

export const RECOVERY_SOURCES = [
  "Mah, C.D. et al. The effects of sleep extension on the athletic performance of collegiate basketball players. Sleep, 2011.",
  "Milewski, M.D. et al. Chronic lack of sleep is associated with increased sports injuries in adolescent athletes. Journal of Pediatric Orthopaedics, 2014.",
  "Fullagar, H.H.K. et al. Sleep and athletic performance: the effects of sleep loss on exercise performance and physiological and cognitive responses to exercise. Sports Medicine, 2015.",
  "Jäger, R. et al. International Society of Sports Nutrition position stand: protein and exercise. Journal of the International Society of Sports Nutrition, 2017.",
  "Seiler, S. What is best practice for training intensity and duration distribution in endurance athletes? International Journal of Sports Physiology and Performance, 2010.",
  "Meeusen, R. et al. Prevention, diagnosis and treatment of the overtraining syndrome: joint consensus statement of the European College of Sport Science and the American College of Sports Medicine. European Journal of Sport Science, 2013.",
  "Peake, J.M. et al. Recovery from training: a brief review. Journal of Strength and Conditioning Research, 2017.",
  "Roberts, L.A. et al. Post-exercise cold water immersion attenuates acute anabolic signalling and long-term adaptations in muscle to strength training. Journal of Physiology, 2015.",
];