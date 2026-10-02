const principles = [
    { t: "I build for your customers.", d: "Most of them are on phones with slow data. If it isn't quick and easy to use there, it isn't done." },
    { t: "You always know where things stand.", d: "Scope, price and timeline are agreed before I start, and I send updates without you having to chase me." },
    { t: "I test before I hand over.", d: "Not just when everything goes right. I try bad connections and wrong inputs too, so you don't find the problems first." },
    { t: "Easy for the next person to take over.", d: "I keep the code tidy so you or another developer can pick it up later without a headache." },
  ];
  
  export function Process() {
    return (
      <section className="py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-[1fr_2.2fr]">
          <div className="md:sticky md:top-28 md:self-start">
            <h2 className="font-display text-5xl md:text-6xl">
              How I <span className="marker">work</span>
            </h2>
            <p className="mt-5 text-foreground/75">A few things I stick to on every project.</p>
          </div>
          <div className="space-y-5">
            {principles.map((p, i) => (
              <div key={p.t} className="flex items-start gap-6 rounded-md bg-card p-7 shadow-md md:gap-8 md:p-8">
                <div className="font-display text-5xl"><span className="scribble">{String(i + 1).padStart(2, "0")}</span></div>
                <div>
                  <h3 className="font-display text-2xl">{p.t}</h3>
                  <p className="mt-2 text-foreground/75">{p.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }