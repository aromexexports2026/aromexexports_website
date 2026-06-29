import { useEffect, useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import logo from "../../assets/aromex-logo.png";
import { SITE, trackEvent } from "@/lib/site";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Why Us", href: "#why" },
  { label: "Global", href: "#global" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur shadow-sm border-b border-border" : "bg-background/80 backdrop-blur-sm"
      }`}
    >
      <nav className="mx-auto max-w-7xl container-px flex items-center justify-between h-16 md:h-20">
        <a href="#home" className="flex items-center gap-3 shrink-0" aria-label="Aromex  Exports home">
          <span className="inline-flex items-center justify-center h-11 w-11 md:h-14 md:w-14 rounded-full bg-white ring-2 ring-gold/70 shadow-luxe overflow-hidden">
            <img src={logo} alt="Aromex Global Exports — Indian turmeric (haldi) and spices exporter logo" className="h-full w-full object-contain p-1" />
          </span>
          <span className="hidden sm:flex flex-col leading-tight">
            <span className="font-display text-base md:text-lg font-semibold text-primary">Aromex  Exports</span>
            <span className="text-[10px] md:text-xs tracking-[0.18em] uppercase text-gold">Haldi • Spices • Agro</span>
          </span>
        </a>

        <ul className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors relative after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-gold after:transition-all hover:after:w-full"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <a
            href={SITE.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent("whatsapp_click", { location: "navbar" })}
            className="inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-md border border-primary/20 text-primary hover:bg-primary/5 transition"
          >
            <MessageCircle className="h-4 w-4" /> WhatsApp
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 shadow-luxe transition"
          >
            Get Quote
          </a>
        </div>

        <button
          className="lg:hidden p-2 text-primary"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <ul className="px-5 py-4 space-y-3">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-2 text-base font-medium text-foreground hover:text-primary"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="flex flex-col gap-2 pt-2">
              <a
                href={SITE.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => { trackEvent("whatsapp_click", { location: "mobile_menu" }); setOpen(false); }}
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-md border border-primary/20 text-primary"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp Us
              </a>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center px-4 py-2.5 rounded-md bg-primary text-primary-foreground font-semibold"
              >
                Get Quote
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
