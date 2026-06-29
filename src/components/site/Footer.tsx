import logo from "@/assets/aromex-logo.png";
import { Mail, Phone, Linkedin, Instagram, MessageCircle } from "lucide-react";
import { SITE, trackEvent } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8">
      <div className="mx-auto max-w-7xl container-px grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="inline-flex items-center gap-3">
            <span className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-white ring-2 ring-gold/70 shadow-luxe overflow-hidden">
              <img src={logo} alt="Aromex Global Exports logo" className="h-full w-full object-contain p-1.5" />
            </span>
            <span className="font-display text-xl text-white">Aromex Exports</span>
          </div>
          <p className="mt-5 text-sm text-primary-foreground/80 max-w-md leading-relaxed">
            {SITE.tagline} — Premium-quality spices, vegetables, fruits, herbs and agricultural
            commodities delivered to buyers across the globe.
          </p>
          <div className="mt-5 flex gap-3">
            <a
              href={SITE.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent("whatsapp_click", { location: "footer" })}
              aria-label="WhatsApp"
              className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-[#25D366] transition"
            >
              <MessageCircle className="h-5 w-5" />
            </a>
            <a href="https://www.linkedin.com/company/aromexexports/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-gold hover:text-gold-foreground transition">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="https://www.instagram.com/aromexexports" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-gold hover:text-gold-foreground transition">
              <Instagram className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold tracking-widest uppercase text-gold">Quick Links</h4>
          <ul className="mt-4 space-y-2 text-sm">
            {[
              { l: "Home", h: "#home" },
              { l: "About", h: "#about" },
              { l: "Products", h: "#products" },
              { l: "Why Us", h: "#why" },
              { l: "Contact", h: "#contact" },
            ].map((i) => (
              <li key={i.h}>
                <a href={i.h} className="text-primary-foreground/80 hover:text-gold transition">{i.l}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold tracking-widest uppercase text-gold">Contact</h4>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a href={`tel:${SITE.phone.replace(/\s/g, "")}`} className="inline-flex items-center gap-2 text-primary-foreground/85 hover:text-gold">
                <Phone className="h-4 w-4" /> {SITE.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${SITE.email}`} className="inline-flex items-center gap-2 text-primary-foreground/85 hover:text-gold break-all">
                <Mail className="h-4 w-4" /> {SITE.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto max-w-7xl container-px mt-12 pt-6 border-t border-white/10 text-center text-xs text-primary-foreground/70">
        © {new Date().getFullYear()} Aromex Exports. All Rights Reserved.
      </div>
    </footer>
  );
}
