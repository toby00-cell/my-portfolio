import { profile } from "@/data/portfolio";
import { Mail, MessageCircle, MapPin, ArrowRight } from "lucide-react";

export function Contact() {
  const whatsappUrl = `https://wa.me/${profile.whatsapp}?text=${encodeURIComponent("Hi Bright, I'd like to start a project.")}`;
  return (
    <section id="contact" className="border-b border-border bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-20">
        <div className="grid items-start gap-12 md:grid-cols-[1.2fr_1fr]">
          <div>
            <div className="mono-label !text-primary"> 05 · Get in touch</div>
            <h2 className="mt-2 font-display text-5xl uppercase leading-[0.95] md:text-6xl">
              Got a project?
              <br />
              <span className="text-primary">Let's ship it.</span>
            </h2>
            <p className="mt-6 max-w-md text-foreground/75">
              Reach out via WhatsApp for the fastest reply, or send a detailed email.
              Most projects start within a week.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href={whatsappUrl} target="_blank" rel="noreferrer" className="btn-yellow">
                <MessageCircle className="h-4 w-4" /> WhatsApp Me <ArrowRight className="h-4 w-4" />
              </a>
              <a href={`mailto:${profile.email}`} className="btn-outline">
                <Mail className="h-4 w-4" /> Send Email
              </a>
            </div>
          </div>

          <div className="relative border border-border bg-card p-6">
            <span className="fig-tag">CONTACT</span>
            <div className="space-y-5">
              <Row icon={<Mail className="h-4 w-4" />} label="Email" value={profile.email} href={`mailto:${profile.email}`} />
              <Row icon={<MessageCircle className="h-4 w-4" />} label="WhatsApp" value={`+${profile.whatsapp}`} href={whatsappUrl} />
              <Row icon={<MapPin className="h-4 w-4" />} label="Location" value={profile.location} />
            </div>
            <div className="mt-6 border-t border-border pt-4">
              <div className="mono-label">Response time</div>
              <div className="mt-1 font-display text-2xl text-primary">≤ 24 hrs</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Row({ icon, label, value, href }: { icon: React.ReactNode; label: string; value: string; href?: string }) {
  const content = (
    <>
      <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center border border-primary bg-primary/10 text-primary">
        {icon}
      </div>
      <div className="min-w-0">
        <div className="mono-label">{label}</div>
        <div className="truncate font-mono text-sm">{value}</div>
      </div>
    </>
  );
  return href ? (
    <a href={href} target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-primary">
      {content}
    </a>
  ) : (
    <div className="flex items-center gap-3">{content}</div>
  );
}
