import { profile } from "@/data/portfolio";
import profilePic from "@/assets/profile.png";
import { ArrowRight, FileDown } from "lucide-react";
import { Arrow } from "./Doodle";
import { useEffect, useRef, useState } from "react";

const skills = [
  "TypeScript", "React", "Next.js", "Expo", "Node.js", "NestJS", "ASP.NET Core",
  "Python", "PostgreSQL", "Redis", "Docker", "AWS", "Cloudflare",
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
    <div ref={ref} className="px-4 py-3 text-center">
      <div className="whitespace-nowrap font-display text-4xl text-primary md:text-5xl">{display}</div>
      <div className="mt-2 text-sm opacity-75">{label}</div>
    </div>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-4 pb-10 pt-14 md:grid-cols-[0.9fr_1.1fr] md:pt-20">
        <div className="mx-auto w-full max-w-sm md:max-w-none">
          <div className="polaroid tape -rotate-2">
            <div className="aspect-[4/5] overflow-hidden bg-surface">
              <img src={profilePic} alt={profile.name} className="h-full w-full object-cover contrast-105" />
            </div>
            <div className="note mt-4 text-xl">{profile.name}, {profile.location.split(",")[0]}</div>
          </div>
        </div>

        <div>
        
          <h1 className="font-display text-5xl leading-[1.05] sm:text-6xl md:text-7xl">
            Web And Mobile Application Development For Businesses And Startup Founders  <span className="marker">actually use.</span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-relaxed text-foreground/80 md:text-lg">
            Hi, I'm {profile.name}, a software developer in Abuja. I help founders and businesses get online
            with fast, good-looking websites and apps.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-5">
            <a href="#projects" className="btn-yellow">View my work <ArrowRight className="h-4 w-4" /></a>
            <a href="/Bright_Joel_Resume.pdf" download className="btn-outline">
              Download resume <FileDown className="h-4 w-4" />
            </a>
            <span className="note hidden items-start gap-1 text-lg lg:inline-flex">
              see what I've built <Arrow className="mt-3 h-8 w-10 -rotate-12" />
            </span>
          </div>

          <div className="mt-10 flex flex-wrap gap-2">
            {skills.map((s) => (
              <span key={s} className="rounded-sm border border-border bg-card px-2.5 py-1 font-mono text-xs">{s}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="torn-wrap mx-auto my-10 max-w-6xl px-2">
        <div className="torn on-dark px-6 py-14 md:px-12">
          <div className="grid items-center gap-8 md:grid-cols-[1fr_2fr]">
            <h2 className="font-display text-4xl md:text-5xl">
              The short <span className="marker">version.</span>
            </h2>
            <div className="grid grid-cols-2 gap-y-6 md:grid-cols-4">
              {profile.stats.map((s) => <StatCard key={s.label} label={s.label} value={s.value} />)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}