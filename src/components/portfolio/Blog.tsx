import { useState } from "react";
import { blogPosts } from "@/data/portfolio";
import { ArrowUpRight, X } from "lucide-react";

export function Blog() {
  const [open, setOpen] = useState<string | null>(null);
  const active = blogPosts.find((p) => p.id === open);

  return (
    <section id="blog" className="mx-auto mt-32 max-w-6xl px-4">
      <div className="mb-12">
        <p className="mb-2 text-sm font-medium uppercase tracking-wider text-primary">
          Blog
        </p>
        <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
          Tips for Nigerian businesses
        </h2>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Practical advice to help Nigerian founders and small businesses grow their online presence.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {blogPosts.map((post) => (
          <article
            key={post.id}
            className="group flex flex-col rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-card)] transition hover:-translate-y-1 hover:shadow-[var(--shadow-soft)]"
          >
            <div className="mb-4 flex items-center gap-2">
              <span className="rounded-full bg-primary-soft px-3 py-1 text-xs font-medium text-primary">
                {post.category}
              </span>
              <span className="text-xs text-muted-foreground">{post.readTime}</span>
            </div>

            <h3 className="text-lg font-semibold leading-snug tracking-tight">
              {post.title}
            </h3>

            <p className="mt-3 flex-1 text-sm text-muted-foreground leading-relaxed">
              {post.excerpt}
            </p>

            <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
              <span className="text-xs text-muted-foreground">{post.date}</span>
              <button
                onClick={() => setOpen(post.id)}
                className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
              >
                Read <ArrowUpRight className="h-4 w-4" />
              </button>
            </div>
          </article>
        ))}
      </div>

      {active && (
        <div
          className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-background/80 px-4 py-12 backdrop-blur-sm"
          onClick={() => setOpen(null)}
        >
          <div
            className="relative w-full max-w-2xl rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-soft)] md:p-12"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setOpen(null)}
              className="absolute right-5 top-5 inline-flex h-8 w-8 items-center justify-center rounded-full border border-border text-muted-foreground transition hover:bg-secondary"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="mb-4 flex items-center gap-2">
              <span className="rounded-full bg-primary-soft px-3 py-1 text-xs font-medium text-primary">
                {active.category}
              </span>
              <span className="text-xs text-muted-foreground">{active.readTime}</span>
              <span className="text-xs text-muted-foreground">· {active.date}</span>
            </div>

            <h2 className="text-2xl font-semibold leading-snug tracking-tight md:text-3xl">
              {active.title}
            </h2>

            <div className="mt-8 space-y-4">
              {active.content.split("\n\n").map((para, i) => (
                <p
                  key={i}
                  className={`leading-relaxed ${
                    para.match(/^\d\./) || para.length < 60
                      ? "text-base font-semibold text-foreground"
                      : "text-base text-foreground/80"
                  }`}
                >
                  {para}
                </p>
              ))}
            </div>

            <div className="mt-10 rounded-2xl bg-primary-soft p-6">
              <p className="text-sm font-medium text-primary">
                Need a website for your business?
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                I build fast, professional websites for Nigerian businesses. Let's talk.
              </p>
              <a
                href="#contact"
                onClick={() => setOpen(null)}
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition hover:brightness-110"
              >
                Get in touch
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}