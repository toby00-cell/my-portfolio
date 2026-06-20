import { ArrowUpRight } from "lucide-react";
import { Link } from "@tanstack/react-router";

const experience = [
  {
    title: "Frontend Developer",
    company: "Zeenom Tech",
    location: "Remote",
    period: "Apr 2026 — Present",
    description:
      "Working on frontend web development tasks and contributing to user interface work across multiple projects. Stack includes JavaScript, Git and modern frontend tooling.",
  },
  {
    title: "AI & Machine Learning Intern",
    company: "Techy Jaunt",
    location: "Remote",
    period: "Apr 2026 — Present",
    description:
      "Undergoing structured training in Artificial Intelligence and Machine Learning — covering core ML concepts, Python, Git and applied AI techniques.",
  },
  {
    title: "Python Programming Intern",
    company: "HiiT Plc",
    location: "Remote",
    period: "Feb 2026 — Apr 2026",
    description:
      "Completed an intensive online Python programming internship focused on core programming fundamentals, data structures and GitHub workflows.",
  },
  {
    title: "IT Intern",
    company: "Elkanah IT Technologies Ltd.",
    location: "Ilorin, Kwara State · On-site",
    period: "Sep 2025 — Dec 2025",
    description:
      "Assisted with software and IT-related tasks while gaining hands-on experience in full-stack development, Git workflows and real-world software delivery.",
  },
];

export function Experience() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-6xl px-4 py-20">
        <div className="mb-12 flex items-end justify-between gap-6 border-b border-border pb-6">
          <div>
            <div className="mono-label !text-primary"> Experience</div>
            <h2 className="mt-2 font-display text-4xl uppercase md:text-5xl">
              Where the work <span className="text-primary">happened.</span>
            </h2>
          </div>
          <Link to="/about" className="hidden md:inline-flex mono-label hover:text-primary">
            Full bio →
          </Link>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border" />

          <div className="space-y-12">
            {experience.map((job, i) => (
              <div key={i} className="relative pl-8">
                {/* Dot */}
                <div className="absolute left-0 top-1.5 h-4 w-4 rounded-full border-2 border-primary bg-background" />

                <div className="mono-label !text-primary mb-1">{job.period}</div>
                <h3 className="font-display text-xl uppercase">{job.title}</h3>
                <div className="mt-0.5 font-mono text-sm text-muted-foreground">
                  {job.company} · {job.location}
                </div>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {job.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 md:hidden">
          <Link to="/about" className="btn-outline">
            Full bio <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}