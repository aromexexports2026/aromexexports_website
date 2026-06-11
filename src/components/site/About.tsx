import farmImg from "@/assets/about-farm.jpg";
import { Award, Leaf, Package, Globe2, Truck, Heart } from "lucide-react";

const highlights = [
  { icon: Award, label: "Premium Quality" },
  { icon: Leaf, label: "Hygienic Processing" },
  { icon: Package, label: "Export Grade Packaging" },
  { icon: Globe2, label: "Global Standards" },
  { icon: Truck, label: "Reliable Logistics" },
  { icon: Heart, label: "Customer Satisfaction" },
];

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-cream">
      <div className="mx-auto max-w-7xl container-px grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="relative">
          <img
            src={farmImg}
            alt="Indian agricultural fields at sunrise"
            className="rounded-2xl shadow-luxe w-full h-[420px] md:h-[520px] object-cover"
            width={1200}
            height={800}
            loading="lazy"
          />
          <div className="hidden md:block absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-luxe max-w-[220px]">
            <div className="text-3xl font-display text-gold">15+ Years</div>
            <div className="text-sm text-primary-foreground/85 mt-1">of agricultural sourcing expertise</div>
          </div>
        </div>

        <div>
          <span className="text-xs font-semibold tracking-[0.25em] uppercase text-gold">About Us</span>
          <h2 className="mt-3 text-3xl md:text-5xl font-semibold text-primary leading-tight">
            About Aromex Global Exports
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            Aromex Global Exports is committed to delivering premium-quality agricultural and food
            products from India to international markets. We ensure exceptional quality, hygienic
            handling, and reliable delivery while building long-term partnerships worldwide.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            We specialize in sourcing premium agricultural commodities directly from trusted suppliers
            and farms, maintaining strict quality standards, export-grade packaging, and customer
            satisfaction.
          </p>

          <ul className="mt-8 grid grid-cols-2 gap-4">
            {highlights.map((h) => (
              <li
                key={h.label}
                className="flex items-center gap-3 p-3 rounded-lg bg-background border border-border hover:border-gold/50 hover:shadow-sm transition"
              >
                <span className="inline-flex items-center justify-center w-9 h-9 rounded-md bg-primary/10 text-primary">
                  <h.icon className="h-5 w-5" />
                </span>
                <span className="text-sm font-medium text-foreground">{h.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
