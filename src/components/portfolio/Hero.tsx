import { profile } from "@/data/portfolio";
import profilePic from "@/assets/profile.png";
import { ArrowRight, FileDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const skills = [
  "TypeScript", "React", "Node.js", "Python",
  "C# / .NET", "Postgres", "Supabase", "MongoDB",
];

function useCountUp(target: string, duration = 1500) {
  const [display, setDisplay] = useState(target);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (target.includes("–") || target.includes("-")) {
      setDisplay(target);
      return;
    }
    const numeric = parseFloat(target.replace(/[^0-9.]/g, ""));
    const suffix = target.replace(/[0-9.]/g, "");
    if (isNaN(numeric)) { setDisplay(target); return; }

    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();
      let start = 0;
      const step = numeric / (duration / 16);
      const tick = () => {
        start = Math.min(start + step, numeric);
        setDisplay(
          (Number.isInteger(numeric) ? Math.floor(start) : start.toFixed(1)) + suffix
        );
        if (start < numeric) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    });

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);

  return { display, ref };
}

function StatCard({ label, value }: { label: string; value: string }) {
  const { display, ref } = useCountUp(value);
  return (
    <div ref={ref} className="px-4 py-5">
      <div className="mono-label">{label}</div>
      <div className="mt-1 font-display text-2xl text-primary md:text-3xl">{display}</div>
    </div>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative border-b border-border">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 md:grid-cols-[1.2fr_1fr] md:py-24">
        {/* LEFT */}
        <div>
          {/* Profile pic + availability badge */}
          <div className="mb-8 flex items-center gap-4">
            <div className="relative h-14 w-14 overflow-hidden rounded-full border-2 border-primary flex-shrink-0">
              <img
                src={profilePic}
                alt={profile.name}
                className="h-full w-full object-cover grayscale contrast-110"
              />
            </div>
            <div className="inline-flex items-center gap-3 border border-primary bg-primary/10 px-3 py-1.5">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              <span className="mono-label !text-primary">Available · {profile.location}</span>
            </div>
          </div>

          <h1 className="font-display text-5xl uppercase leading-[0.95] sm:text-6xl md:text-7xl">
            Code that ships.
            <br />
            <span className="text-primary">Products that scale.</span>
          </h1>

          <p className="mt-8 max-w-xl border-l-2 border-primary pl-5 text-base leading-relaxed text-foreground/80 md:text-lg">
            <span className="font-semibold text-foreground">I'm {profile.name.split(" ")[0]}</span> — a software engineer
            who builds websites, web apps and AI agents. I care about clean code,
            fast products and shipping things that actually work.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <a href="#contact" className="btn-yellow">
              Hire Me <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#projects" className="btn-outline">
              View Projects
            </a>
            <a href="/Bright_Joel_Resume.pdf" download className="btn-outline">
              Resume <FileDown className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-12">
            <div className="mono-label mb-3">Stack · /core</div>
            <div className="flex flex-wrap gap-2">
              {skills.map((s) => (
                <span
                  key={s}
                  className="border border-border bg-card px-3 py-1.5 font-mono text-xs text-foreground/90"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT — profile card, desktop only */}
        <div className="relative hidden md:block md:mt-4">
          <div className="relative border border-border bg-card p-4">
            <span className="fig-tag">FIG. 001</span>
            <div className="aspect-[4/5] overflow-hidden bg-surface">
              <img
                src={profilePic}
                alt={profile.name}
                className="h-full w-full object-cover grayscale contrast-110"
              />
            </div>
            <div className="mt-4 border-t border-border pt-3">
              <div className="mono-label">Operator</div>
              <div className="mt-1 font-display text-lg">{profile.name}</div>
              <div className="font-mono text-xs text-muted-foreground">{profile.role}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Metadata strip */}
      <div className="border-t border-border bg-surface">
        <div className="mx-auto grid max-w-6xl grid-cols-2 divide-x divide-border md:grid-cols-4">
          {profile.stats.map((s) => (
            <StatCard key={s.label} label={s.label} value={s.value} />
          ))}
        </div>
      </div>
    </section>
  );
}