import { useState } from "react";
import { profile } from "@/data/portfolio";
import { Mail, MessageCircle, MapPin, Send } from "lucide-react";

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`New project inquiry from ${form.name}`);
    const body = encodeURIComponent(
      `Hi ${profile.name.split(" ")[0]},\n\n${form.message}\n\n— ${form.name} (${form.email})`,
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="mx-auto mt-32 max-w-6xl px-4">
      <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-[var(--shadow-card)]">
        <div className="grid md:grid-cols-5">
          <div className="relative bg-primary p-8 text-primary-foreground md:col-span-2 md:p-10">
            <div className="absolute inset-0 opacity-20" style={{ background: "var(--gradient-warm)" }} />
            <div className="relative">
              <p className="text-sm font-medium uppercase tracking-wider text-primary-foreground/80">
                Let's work together
              </p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">
                Have a project in mind?
              </h2>
              <p className="mt-3 text-primary-foreground/85">
                Tell me a bit about it and I'll get back within 12 hours.
              </p>

              <div className="mt-10 space-y-4 text-sm">
                <a href={`mailto:${profile.email}`} className="flex items-center gap-3 hover:underline">
                  <Mail className="h-4 w-4" /> {profile.email}
                </a>
                <a
                  href={`https://wa.me/${profile.whatsapp}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 hover:underline"
                >
                  <MessageCircle className="h-4 w-4" /> WhatsApp
                </a>
                <div className="flex items-center gap-3 text-primary-foreground/80">
                  <MapPin className="h-4 w-4" /> {profile.location}
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={onSubmit} className="space-y-4 p-8 md:col-span-3 md:p-10">
            <div>
              <label className="text-sm font-medium text-foreground">Your name</label>
              <input
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="mt-2 w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                placeholder="Jane Doe"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground">Email</label>
              <input
                required
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="mt-2 w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                placeholder="you@company.com"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground">Tell me about your project</label>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="mt-2 w-full resize-none rounded-xl border border-border bg-surface px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                placeholder="I need a landing page for my..."
              />
            </div>
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-[var(--shadow-soft)] transition hover:brightness-110 sm:w-auto"
            >
              Send message <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
