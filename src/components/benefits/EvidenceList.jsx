const SOURCES = [
  "World Health Organization. WHO Guidelines on Physical Activity and Sedentary Behaviour. 2020.",
  "Celis-Morales CA, et al. Association between active commuting and incident cardiovascular disease, cancer, and mortality. BMJ. 2017;357:j1456.",
  "Myers J, et al. Exercise capacity and mortality among men referred for exercise testing. N Engl J Med. 2002;346:793–801.",
  "Pedersen BK, Saltin B. Exercise as medicine — evidence for prescribing exercise as therapy in 26 chronic diseases. Scand J Med Sci Sports. 2015;25(S3):1–72.",
  "Erickson KI, et al. Exercise training increases size of hippocampus and improves memory. PNAS. 2011;108(7):3017–3022.",
  "Barton J, Pretty J. What is the best dose of nature and green exercise for improving mental health? Environ Sci Technol. 2010;44(10):3947–3955.",
  "Tanaka H, Monahan KD, Seals DR. Age-predicted maximal heart rate revisited. J Am Coll Cardiol. 2001;37(1):153–156.",
  "Ainsworth BE, et al. Compendium of Physical Activities. Med Sci Sports Exerc. 2011.",
  "Academy of Medical Royal Colleges. Exercise: the miracle cure. 2015.",
];

export default function EvidenceList() {
  return (
    <section id="evidence" className="scroll-mt-28 border-t border-border py-12 md:py-16">
      <div className="grid gap-8 md:grid-cols-[minmax(0,0.34fr)_minmax(0,0.66fr)] md:gap-14">
        <div>
          <p className="label-mono text-accent">Sources</p>
          <h2 className="display-tight mt-3 text-3xl md:text-4xl">The evidence</h2>
        </div>
        <div>
          <ol className="space-y-4">
            {SOURCES.map((source, index) => (
              <li key={source} className="flex gap-4 text-sm leading-relaxed">
                <span className="label-mono mt-1 shrink-0 text-muted-foreground">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-foreground/80">{source}</span>
              </li>
            ))}
          </ol>

          <div className="mt-10 border-t border-border pt-6">
            <p className="label-mono text-muted-foreground">Read this before you plan</p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Most of the largest studies here are observational: they follow large
              groups over years and show that cyclists fare better, but they cannot
              prove that cycling alone caused the difference. People who ride to work
              also tend to differ in other ways. What lifts the case is that the same
              direction of effect turns up across different countries, different
              designs and controlled trials of exercise itself.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Numbers on this site are rounded, population-level estimates. Individual
              responses vary, and if you have a heart condition, uncontrolled blood
              pressure, joint trouble or you are returning after a long break, check
              with a clinician before you build up.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}