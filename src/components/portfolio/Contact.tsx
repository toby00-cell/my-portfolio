import { profile } from "@/data/portfolio";
import { Mail, MessageCircle, MapPin } from "lucide-react";

export function Contact() {
  const wa = `https://wa.me/${profile.whatsapp}?text=${encodeURIComponent("Hi Bright, I'd like to start a project.")}`;
  return (
    <section id="contact" className="px-2 py-16">
      <div className="torn-wrap mx-auto max-w-6xl">
        <div className="torn on-dark px-6 py-24 text-center">
          <h2 className="font-display text-5xl leading-tight md:text-6xl">
            Have a project in mind?
            <br />
            <span className="marker">Let's talk.</span>
          </h2>
          <p className="mx-auto mt-7 max-w-lg opacity-80">
            WhatsApp is the fastest way to reach me. You can also send an email. Just tell me what you're building.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-6">
            <a href={wa} target="_blank" rel="noreferrer" className="btn-yellow"><MessageCircle className="h-4 w-4" /> WhatsApp me</a>
            <a href={`mailto:${profile.email}`} className="btn-outline"><Mail className="h-4 w-4" /> Send an email</a>
          </div>
          <div className="mt-10 flex items-center justify-center gap-2 text-sm opacity-70">
            <MapPin className="h-4 w-4" /> {profile.location}
          </div>
        </div>
      </div>
    </section>
  );
}