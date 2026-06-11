import heroImg from "@/assets/hero-export.jpg";
import { SITE, trackEvent } from "@/lib/site";
import { ArrowRight, MessageCircle } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[100svh] flex items-center overflow-hidden pt-20">
      <img
        src={heroImg}
        alt="Cargo ship delivering Indian agricultural exports across the world"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

      <div className="relative mx-auto max-w-7xl container-px py-20 w-full">
        <div className="max-w-3xl text-white animate-fade-up">
          <div className="flex items-center gap-3 text-gold/90">
            <span className="h-px w-12 bg-gold/70" />
            <span className="text-[11px] md:text-xs font-medium tracking-[0.32em] uppercase">
              Est. Global Agro Exporter
            </span>
          </div>
          <h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.05]">
            Premium Indian{" "}
            <span className="text-gradient-gold italic">Turmeric (Haldi) & Spices</span>{" "}
            for Global Buyers
          </h1>
          <p className="mt-6 text-base md:text-lg text-white/85 max-w-2xl leading-relaxed">
            Aromex Global Exports delivers high-curcumin turmeric, authentic Indian spices, fresh
            vegetables, fruits, herbs and agro commodities — sourced direct from farms and shipped
            to 30+ countries under strict export quality standards.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#products"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-gold text-gold-foreground font-semibold hover:brightness-105 transition shadow-luxe"
            >
              Explore Products <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-white/10 text-white font-semibold backdrop-blur hover:bg-white/20 border border-white/30 transition"
            >
              Contact Us
            </a>
            <a
              href={SITE.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent("whatsapp_click", { location: "hero" })}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-[#25D366] text-white font-semibold hover:brightness-110 transition"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp Us
            </a>
          </div>

          <dl className="mt-12 grid grid-cols-3 gap-6 max-w-xl border-t border-white/15 pt-6">
            {[
              { k: "30+", v: "Countries Served" },
              { k: "100%", v: "Quality Assured" },
              { k: "24/7", v: "Buyer Support" },
            ].map((s, i) => (
              <div
                key={s.v}
                className={i > 0 ? "sm:border-l sm:border-white/10 sm:pl-6" : ""}
              >
                <dt className="text-2xl md:text-3xl font-display text-gold">{s.k}</dt>
                <dd className="text-xs md:text-sm text-white/75 mt-1">{s.v}</dd>
              </div>
            ))}
          </dl>
        </div>

      </div>
    </section>
  );
}
