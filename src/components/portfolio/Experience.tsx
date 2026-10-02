import { ArrowUpRight } from "lucide-react";
import { Link } from "@tanstack/react-router";

const experience = [
  {
    title: "Frontend Developer",
    company: "Zeenom Tech",
    location: "Remote",
    period: "Apr 2026 to Present",
    description:
      "Working on frontend web development tasks and contributing to user interface work across multiple projects. Stack includes JavaScript, Git and modern frontend tooling.",
  },
  {
    title: "AI & Machine Learning Intern",
    company: "Techy Jaunt",
    location: "Remote",
    period: "Apr 2026 to Present",
    description:
      "Trained on data analysis and visualization using NumPy, Pandas, Matplotlib and Seaborn, strengthened my statistics and probability foundation, and built and deployed real machine learning models, covering the full pipeline from data to production.",
  },
  {
    title: "Python Developer",
    company: "HiiT Plc",
    location: "Remote",
    period: "Feb 2026 to Apr 2026",
    description:
      "Completed an intensive online Python programming internship focused on core programming fundamentals, data structures and GitHub workflows.",
  },
  {
    title: "Software Development Intern",
    company: "Elkanah IT Technologies Ltd.",
    location: "Ilorin, Kwara State · On-site",
    period: "Sep 2025 to Dec 2025",
    description:
      "Learned C# programming and backend development fundamentals, with some exposure to frontend work. Gained hands-on experience in full-stack development, Git workflows and real-world software delivery.",
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
              Where I've <span className="text-primary">worked</span>
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
                <div className="absolute left-0 top-1.5 h-4 w-4 rotate-45 border-2 border-primary bg-background" />

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