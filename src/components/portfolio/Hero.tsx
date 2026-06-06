import { profile } from "@/data/portfolio";
import { TrendingUp, FolderOpen, Clock, Zap } from "lucide-react";
import profilePic from "@/assets/profile.png";

const icons = [TrendingUp, FolderOpen, Clock, Zap];

const floatStyles = [
  { animation: "float 3s ease-in-out infinite" },
  { animation: "float 3.5s ease-in-out infinite" },
  { animation: "float 4s ease-in-out infinite" },
  { animation: "float 3.2s ease-in-out infinite" },
];

export function Hero() {
  return (
    <section id="top" className="mx-auto mt-12 max-w-6xl px-4 md:mt-20">
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
      `}</style>

      <div className="grid items-center gap-12 md:grid-cols-2">
        <div>
          <div className="mb-8 flex items-center gap-4">
            <div className="flex h-20 w-20 items-center justify-center overflow-hidden rounded-full bg-primary-soft ring-2 ring-primary/20">
              <img src={profilePic} alt={profile.name} className="h-full w-full object-cover" />
            </div>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs text-muted-foreground">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Available for new projects
            </span>
          </div>

          <h1 className="text-5xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
            Hi, I'm {profile.name.split(" ")[0]}.
            <br />
            <span className="text-foreground">{profile.role}</span>
          </h1>

          <p className="mt-6 max-w-md text-base text-muted-foreground md:text-lg">
            {profile.blurb}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-[var(--shadow-soft)] transition hover:brightness-110"
            >
              Let's talk now
              <Zap className="h-4 w-4" />
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-medium text-foreground transition hover:bg-secondary"
            >
              View projects
            </a>
          </div>
        </div>

        <div className="rounded-3xl border border-border bg-card p-4 shadow-[var(--shadow-card)] md:p-6">
          <div className="grid grid-cols-2 gap-3 md:gap-4">
            {profile.stats.map((s, i) => {
              const Icon = icons[i % icons.length];
              const isAccent = i === 3;
              return (
                <div
                  key={s.label}
                  style={floatStyles[i]}
                  className={`rounded-2xl p-5 ${
                    isAccent
                      ? "bg-primary text-primary-foreground"
                      : "bg-primary-soft/50 text-foreground"
                  }`}
                >
                  <div
                    className={`mb-10 inline-flex h-9 w-9 items-center justify-center rounded-lg ${
                      isAccent ? "bg-white/20" : "bg-primary text-primary-foreground"
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                  </div>
                  <div className={`text-sm ${isAccent ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                    {s.label}
                  </div>
                  <div className="mt-1 text-2xl font-semibold tracking-tight md:text-3xl">
                    {s.value}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}