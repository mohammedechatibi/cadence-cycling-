export const BENEFITS = [
  {
    id: "heart",
    number: "01",
    title: "A heart that works less for the same effort",
    short:
      "Regular riding lowers your resting heart rate and raises your aerobic ceiling. Gaining fitness is not cosmetic — it changes how hard ordinary life feels.",
    stat: "5–15%",
    statLabel: "typical gain in VO₂ max after 8–12 weeks of regular riding",
    detail: [
      "Endurance riding makes the heart's left ventricle larger and stronger, so it pushes more blood with each beat. Resting heart rate typically drifts down, and the same hill at the same speed costs you less.",
      "Cardiorespiratory fitness is one of the strongest single predictors of how long and how well people live. In a landmark cohort study, low exercise capacity predicted death more strongly than smoking, diabetes or high blood pressure.",
    ],
    source: "Myers et al., New England Journal of Medicine, 2002",
  },
  {
    id: "pressure",
    number: "02",
    title: "Blood pressure that comes down",
    short:
      "Aerobic work like cycling is a first-line recommendation for mild hypertension — alongside, not instead of, whatever your doctor prescribes.",
    stat: "3–8 mmHg",
    statLabel: "typical systolic drop from regular aerobic exercise",
    detail: [
      "Repeated bouts of moderate aerobic exercise relax and remodel the lining of your arteries, improving their ability to widen on demand. The effect builds with consistency rather than intensity.",
      "Both European and American hypertension guidance list aerobic activity such as cycling among the lifestyle measures that measurably lower blood pressure. The benefit fades within weeks of stopping, which is the argument for a routine over a challenge.",
    ],
    source: "ESC/ESH hypertension guidelines; American College of Sports Medicine",
  },
  {
    id: "sugar",
    number: "03",
    title: "Better blood sugar, steadier weight",
    short:
      "Working muscles pull glucose out of the blood without needing much insulin. Ridden regularly, that adds up to a lower risk of type 2 diabetes.",
    stat: "2 × 20 min",
    statLabel: "weekly riding already associated with lower diabetes risk in cohort studies",
    detail: [
      "Cycling uses the largest muscles in your body for a sustained period, and those muscles refill their glycogen stores afterwards. That is why a ride can blunt a blood-sugar spike and why regular riders tend to have better insulin sensitivity.",
      "Energy balance still decides weight, but cycling has two practical advantages: it burns a meaningful number of calories per hour, and it is easy to fold into a commute you were making anyway.",
    ],
    source: "Pedersen & Saltin, Scandinavian Journal of Medicine & Science in Sports, 2015",
  },
  {
    id: "longevity",
    number: "04",
    title: "More years, and better ones",
    short:
      "The largest study of commuting habits found that people who rode to work had substantially lower rates of death and disease than those who drove.",
    stat: "−41%",
    statLabel: "all-cause mortality among bike commuters vs. car commuters",
    detail: [
      "UK Biobank followed roughly 264,000 adults for five years. Cycling to work was associated with 41% lower all-cause mortality, 45% lower cancer incidence and 46% lower cardiovascular disease incidence.",
      "The dose mattered: longer weekly riding time tracked with larger reductions. You do not need to race. You need to keep turning the pedals most weeks of the year.",
    ],
    source: "Celis-Morales et al., BMJ, 2017",
  },
  {
    id: "mind",
    number: "05",
    title: "A steadier head",
    short:
      "Moderate aerobic exercise reduces symptoms of anxiety and low mood, and doing it outdoors seems to add a little more.",
    stat: "150 min",
    statLabel: "weekly moderate activity in clinical guidance for mild depression",
    detail: [
      "Exercise influences mood through several routes at once: blood flow to the brain, endorphins, better sleep, and the simple structure of having a reason to leave the house. Reviews of the evidence find moderate aerobic activity a useful part of managing mild to moderate depression and anxiety.",
      "Outdoor sessions appear to add a small extra effect over the same effort indoors. A commute by bike also stacks the win: movement and daylight before the working day starts.",
    ],
    source: "Pedersen & Saltin, 2015; Barton & Pretty, Environmental Science & Technology, 2010",
  },
  {
    id: "joints",
    number: "06",
    title: "Kind to your joints",
    short:
      "Your bodyweight rides on the saddle instead of hammering through your knees. That makes cycling one of the safest ways to train when running hurts.",
    stat: "Low impact",
    statLabel: "non-weight-bearing loading, recommended for knee osteoarthritis",
    detail: [
      "In running, each footfall loads the leg with several times bodyweight. On a bike, load is shared with the saddle and the handlebars, so the knee tracks through a smooth, controlled range without impact.",
      "That is why cycling appears in osteoarthritis and rehabilitation guidance: it builds the quadriceps that support the knee while irritating it less. Saddle height matters more than people expect — too low is the usual cause of sore knees.",
    ],
    source: "ACSM exercise guidance; clinical recommendations for knee osteoarthritis",
  },
  {
    id: "sleep",
    number: "07",
    title: "Deeper sleep, fewer sniffles",
    short:
      "Daytime movement makes it easier to fall asleep and tends to improve sleep quality — and moderate exercisers report fewer colds.",
    stat: "−30%",
    statLabel: "typical reduction in time taken to fall asleep reported in trials",
    detail: [
      "Regular aerobic activity shortens the time it takes to fall asleep and increases the share of deep sleep, though the effect is strongest when sessions are not crammed right before bed.",
      "Moderate exercise is also associated with fewer and milder upper-respiratory infections, most likely because of the brief immune surveillance boost each session causes. Very heavy training loads do the opposite, which is the case for restraint as much as enthusiasm.",
    ],
    source: "Nieman, exercise immunology reviews; sleep and aerobic exercise meta-analyses",
  },
  {
    id: "brain",
    number: "08",
    title: "A brain and body that age well",
    short:
      "Aerobic fitness is linked to better memory and attention, larger hippocampal volume, and a lower risk of falls later in life.",
    stat: "+2%",
    statLabel: "hippocampal volume after a year of regular aerobic training in adults",
    detail: [
      "In a year-long trial of moderate aerobic exercise, adults grew hippocampal volume by around two percent — effectively reversing one to two years of age-related shrinkage — and improved on spatial memory tasks.",
      "Balance, reaction time and leg strength all respond to riding too, which is the machinery behind staying upright and independent. The people who keep cycling into their seventies are usually the ones who started gently and never stopped.",
    ],
    source: "Erickson et al., PNAS, 2011; WHO physical activity guidance",
  },
];

export const HOME_BENEFITS = BENEFITS.slice(0, 6);