import { ShieldCheck, Sparkles, Ship, BadgeDollarSign, Clock, Handshake } from "lucide-react";

const features = [
  { icon: ShieldCheck, title: "Premium Quality", desc: "Strict quality control at every stage from source to shipment." },
  { icon: Sparkles, title: "Hygienic Processing", desc: "Food-safe handling, cleaning and processing facilities." },
  { icon: Ship, title: "Global Logistics", desc: "Seamless shipping with trusted freight partners worldwide." },
  { icon: BadgeDollarSign, title: "Competitive Pricing", desc: "Direct sourcing keeps prices fair without compromising quality." },
  { icon: Clock, title: "Timely Delivery", desc: "On-schedule dispatch and end-to-end shipment tracking." },
  { icon: Handshake, title: "Trusted Export Partner", desc: "Long-term partnerships built on transparency and trust." },
];

export default function WhyChooseUs() {
  return (
    <section id="why" className="py-20 md:py-28 bg-gradient-hero text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 [background-image:radial-gradient(circle_at_2px_2px,white_1px,transparent_0)] [background-size:32px_32px]" />
      <div className="relative mx-auto max-w-7xl container-px">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold tracking-[0.25em] uppercase text-gold">Why Choose Us</span>
          <h2 className="mt-3 text-3xl md:text-5xl font-semibold leading-tight">
            A partner built for international buyers
          </h2>
          <p className="mt-4 text-primary-foreground/80">
            Everything we do is engineered to make your sourcing simple, reliable and profitable.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f) => (
            <div
              key={f.title}
              className="group p-6 rounded-2xl bg-white/5 backdrop-blur border border-white/10 hover:border-gold/60 hover:bg-white/10 transition-all duration-500"
            >
              <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gold/20 text-gold ring-1 ring-gold/30 group-hover:scale-110 transition">
                <f.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-4 text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-primary-foreground/75 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
