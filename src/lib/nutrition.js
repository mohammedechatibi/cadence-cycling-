/** Shared copy and figures for the nutrition page. */

export const NUMBERS = [
  {
    value: "60–90 g",
    label: "Carbohydrate per hour",
    note: "On rides longer than about two and a half hours, in small amounts from the start.",
  },
  {
    value: "6–10 g/kg",
    label: "Carbs on a big day",
    note: "Body weight in kilograms. A hard four-hour day is not a normal eating day.",
  },
  {
    value: "1.6–2.2 g/kg",
    label: "Protein per day",
    note: "Enough to rebuild muscle, spread over three or four meals rather than one.",
  },
];

export const PILLARS = [
  {
    n: "01",
    title: "Total energy",
    lede: "The foundation everything else sits on.",
    body: "Eat less than you burn for long enough and the body starts trimming the expensive parts: hormones, bone, immune function, then muscle. Performance falls before the scales look alarming.",
    detail:
      "Weigh yourself once a week, same day, same time. A slow drift is signal; a single reading is noise.",
  },
  {
    n: "02",
    title: "Carbohydrate timing",
    lede: "Fuel the work, not the guilt.",
    body: "Carbs are the fastest fuel for hard efforts and the only fuel that refills glycogen. Put most of them around the rides that matter, and the easy days look after themselves.",
    detail:
      "Nothing magic about the timing after training — the old 30-minute window is closer to a few hours.",
  },
  {
    n: "03",
    title: "Protein spread",
    lede: "Four modest servings beat one large one.",
    body: "Muscle rebuilding responds to each meal, not to a daily total arriving at 22:00. Twenty to forty grams per meal, from real food where you can manage it.",
    detail:
      "A yogurt, eggs, fish, lentils or a shake all count. Supplements are a convenience, not a requirement.",
  },
  {
    n: "04",
    title: "Fluid and salt",
    lede: "Match what you lose, roughly.",
    body: "Sweat rates vary enormously between riders and with the weather. Losing two per cent of body weight in fluid is enough to make a hard ride feel harder than it should.",
    detail:
      "For most rides under two hours in cool weather, water is enough. Long hot days want a pinch of salt and real food.",
  },
];

export const DAY = {
  eyebrow: "A day around a long ride",
  title: "What fuelling looks like in practice",
  lede:
    "A four-hour ride with a couple of climbs, eaten for by someone who also has a job. Nothing weighed to the gram, nothing bought in a plastic tub.",
  rows: [
    {
      time: "07:00",
      what: "Porridge, milk, banana, coffee",
      why: "Easy carbohydrate and a little protein before the road.",
    },
    {
      time: "08:30",
      what: "Ride out, bottle with a pinch of salt",
      why: "Start drinking early; thirst arrives late.",
    },
    {
      time: "09:15",
      what: "First bar or banana",
      why: "Twenty to thirty minutes in, then keep topping up.",
    },
    {
      time: "10:00–11:30",
      what: "60–90 g carbs per hour, split across bars, gels and drink",
      why: "Small and often beats one big stop at the café.",
    },
    {
      time: "12:30",
      what: "Home: rice, eggs and vegetables",
      why: "Carbohydrate and protein within the hour, from a normal plate.",
    },
    {
      time: "16:00",
      what: "Toast, fruit, a yogurt",
      why: "Bridges the gap so dinner is not a raid on the cupboard.",
    },
    {
      time: "19:30",
      what: "Fish or lentils, potatoes, greens",
      why: "Protein for repair, carbohydrate to finish refilling.",
    },
    {
      time: "22:00",
      what: "Glass of milk or a yogurt before bed",
      why: "Slow protein overnight, alongside the sleep that does the work.",
    },
  ],
  footer:
    "On an easy hour, most of this is unnecessary: water, normal meals, and nothing to think about. Fuelling scales with the ride in front of you.",
};

export const MYTHS = [
  {
    myth: "“You need a supplement to recover.”",
    truth:
      "Food does the job. Protein powder is convenient when you cannot cook; it is not better than the meal it replaces.",
  },
  {
    myth: "“Carbohydrates after 6pm turn into fat.”",
    truth:
      "Total intake over the day decides that, not the clock. An evening meal after a long ride is usually the most useful one you will eat.",
  },
  {
    myth: "“You must eat within 30 minutes or the ride is wasted.”",
    truth:
      "The window is wider than the marketing suggests. Getting a proper meal within a couple of hours is enough for most riders.",
  },
  {
    myth: "“Electrolytes in every bottle.”",
    truth:
      "Short, cool rides need water. Salt matters on long hot days and for heavy sweaters, not as a default.",
  },
];

export const NUTRITION_SOURCES = [
  "Thomas, D.T., Erdman, K.A., Burke, L.M. Position of the Academy of Nutrition and Dietetics, Dietitians of Canada, and the American College of Sports Medicine: Nutrition and athletic performance. Journal of the Academy of Nutrition and Dietetics, 2016.",
  "Burke, L.M. et al. Carbohydrates for training and competition. Journal of Sports Sciences, 2011.",
  "Jäger, R. et al. International Society of Sports Nutrition position stand: protein and exercise. Journal of the International Society of Sports Nutrition, 2017.",
  "Jeukendrup, A. A step towards personalized sports nutrition: carbohydrate intake during exercise. Sports Medicine, 2014.",
  "Sawka, M.N. et al. American College of Sports Medicine position stand: exercise and fluid replacement. Medicine & Science in Sports & Exercise, 2007.",
  "Areta, J.L. et al. Timing and distribution of protein ingestion during prolonged recovery from resistance exercise alters myofibrillar protein synthesis. Journal of Physiology, 2013.",
];