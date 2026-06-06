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

const SKILL_GROUPS = [
  {
    label: "Frontend",
    skills: [
      {
        name: "TypeScript",
        icon: (
          <svg viewBox="0 0 128 128" className="h-7 w-7">
            <rect width="128" height="128" rx="6" fill="#3178C6" />
            <path fill="#fff" d="M22 63h21v8H33v34h-11zm76 0h-32v8h10v34h11V71h11z" />
            <path fill="#fff" d="M71 97c2 3 5 5 9 5s7-2 7-5c0-4-3-5-8-7l-3-1c-8-3-12-7-12-14 0-8 6-13 16-13 7 0 12 2 15 7l-8 5c-1-3-4-4-7-4s-5 1-5 4c0 3 2 4 6 5l3 1c9 3 14 7 14 15 0 9-7 14-18 14-8 0-14-3-17-8z" />
          </svg>
        ),
      },
      {
        name: "React",
        icon: (
          <svg viewBox="0 0 128 128" className="h-7 w-7">
            <circle cx="64" cy="64" r="11.4" fill="#61DAFB" />
            <g fill="none" stroke="#61DAFB" strokeWidth="5.5">
              <ellipse rx="46" ry="18" cx="64" cy="64" />
              <ellipse rx="46" ry="18" cx="64" cy="64" transform="rotate(60 64 64)" />
              <ellipse rx="46" ry="18" cx="64" cy="64" transform="rotate(120 64 64)" />
            </g>
          </svg>
        ),
      },
    ],
  },
  {
    label: "Backend",
    skills: [
      {
        name: "Node.js",
        icon: (
          <svg viewBox="0 0 128 128" className="h-7 w-7">
            <path fill="#339933" d="M64 3L4 37v54l60 34 60-34V37zm0 10l50 28v46L64 115 14 87V41z" />
            <path fill="#5cb85c" d="M64 28L35 44v32l29 16 29-16V44zm0 8l21 12v24L64 84 43 72V48z" />
          </svg>
        ),
      },
      {
        name: "C#",
        icon: (
          <svg viewBox="0 0 128 128" className="h-7 w-7">
            <path fill="#9B4F96" d="M115 33L67 5a8 8 0 00-6 0L13 33a8 8 0 00-4 7v54a8 8 0 004 7l48 28a8 8 0 006 0l48-28a8 8 0 004-7V40a8 8 0 00-4-7z" />
            <path fill="#fff" d="M63 36c-16 0-28 12-28 28s12 28 28 28c10 0 19-5 24-13l-10-6c-3 5-8 8-14 8-10 0-17-7-17-17s7-17 17-17c6 0 11 3 14 8l10-6c-5-8-14-13-24-13zm27 19h-3v-5h-4v5h-3v4h3v5h4v-5h3zm11 0h-3v-5h-4v5h-3v4h3v5h4v-5h3z" />
          </svg>
        ),
      },
      {
        name: "ASP.NET Core",
        icon: (
          <svg viewBox="0 0 128 128" className="h-7 w-7">
            <path fill="#512BD4" d="M64 4C31 4 4 31 4 64s27 60 60 60 60-27 60-60S97 4 64 4z" />
            <path fill="#fff" d="M34 88V40h14l16 30 16-30h14v48H82V58L66 86h-4L46 58v30z" />
          </svg>
        ),
      },
      {
        name: "Python",
        icon: (
          <svg viewBox="0 0 128 128" className="h-7 w-7">
            <path fill="#3776AB" d="M63 4c-18 0-17 8-17 8v8h35v4H38s-21-2-21 21 19 22 19 22h11v-11s-1-19 19-19h33s18 1 18-17V22S119 4 63 4zm-7 12a5 5 0 110 10 5 5 0 010-10z" />
            <path fill="#FFD43B" d="M65 124c18 0 17-8 17-8v-8H47v-4h42s21 2 21-21-19-22-19-22h-11v11s1 19-19 19H28s-18-1-18 17v19s-2 17 55 17zm7-12a5 5 0 110-10 5 5 0 010 10z" />
          </svg>
        ),
      },
      {
        name: "ML Tools",
        icon: (
          <svg viewBox="0 0 128 128" className="h-7 w-7">
            <path fill="#FF6F00" d="M64 8L16 56v60h96V56z" opacity=".2" />
            <path fill="#FF6F00" d="M64 8L16 56v60h96V56zm0 12l40 40v48H24V60z" />
            <circle cx="64" cy="72" r="12" fill="#FF6F00" />
            <line x1="58" y1="72" x2="70" y2="72" stroke="#fff" strokeWidth="2.5" />
            <line x1="64" y1="66" x2="64" y2="78" stroke="#fff" strokeWidth="2.5" />
          </svg>
        ),
      },
    ],
  },
  {
    label: "Database",
    skills: [
      {
        name: "Supabase",
        icon: (
          <svg viewBox="0 0 128 128" className="h-7 w-7">
            <path fill="#3ECF8E" d="M73 7L16 73h35v48l57-66H73z" />
          </svg>
        ),
      },
      {
        name: "PostgreSQL",
        icon: (
          <svg viewBox="0 0 128 128" className="h-7 w-7">
            <path fill="#4169E1" d="M93 9c-8-2-16 0-22 4A36 36 0 0049 9C28 9 11 26 11 47c0 10 4 19 11 25 3 3 4 6 3 9l-3 16 16-6c3-1 6-1 9 0 4 2 9 3 14 3a36 36 0 0036-36V47c0-21-17-38-37-38h-1z" />
            <circle cx="56" cy="46" r="5" fill="#fff" />
            <circle cx="74" cy="46" r="5" fill="#fff" />
          </svg>
        ),
      },
      {
        name: "SQL Server",
        icon: (
          <svg viewBox="0 0 128 128" className="h-7 w-7">
            <ellipse cx="64" cy="32" rx="50" ry="20" fill="#CC2927" />
            <path fill="#CC2927" d="M14 32v20c0 11 22 20 50 20s50-9 50-20V32c0 11-22 20-50 20S14 43 14 32z" />
            <path fill="#CC2927" d="M14 52v20c0 11 22 20 50 20s50-9 50-20V52c0 11-22 20-50 20S14 63 14 52z" opacity=".75" />
            <path fill="#CC2927" d="M14 72v20c0 11 22 20 50 20s50-9 50-20V72c0 11-22 20-50 20S14 83 14 72z" opacity=".5" />
          </svg>
        ),
      },
      {
        name: "MongoDB",
        icon: (
          <svg viewBox="0 0 128 128" className="h-7 w-7">
            <path fill="#47A248" d="M64 8s-30 28-30 62c0 20 12 36 30 42 18-6 30-22 30-42C94 36 64 8 64 8z" />
            <path fill="#fff" d="M67 100V44l-3-5-3 5v56l3 5z" />
          </svg>
        ),
      },
    ],
  },
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

      <div className="grid items-start gap-12 md:grid-cols-2">
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

          <div className="mt-12 space-y-8">
            {SKILL_GROUPS.map((group) => (
              <div key={group.label}>
                <p className="mb-3 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  {group.label}
                </p>
                <div className="flex flex-wrap gap-3">
                  {group.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex flex-col items-center gap-2 rounded-2xl border border-border bg-card px-4 py-3 transition hover:-translate-y-1 hover:border-primary/30 hover:shadow-[var(--shadow-soft)]"
                    >
                      {skill.icon}
                      <span className="text-[0.7rem] font-medium text-muted-foreground">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="sticky top-24 rounded-3xl border border-border bg-card p-4 shadow-[var(--shadow-card)] md:p-6">
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