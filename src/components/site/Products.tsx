import turmeric from "@/assets/product-turmeric.jpg";
import spices from "@/assets/product-spices.jpg";
import vegetables from "@/assets/product-vegetables.jpg";
import fruits from "@/assets/product-fruits.jpg";
import herbs from "@/assets/product-herbs.jpg";
import commodities from "@/assets/product-commodities.jpg";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { trackEvent } from "@/lib/site";

const featured = [
  {
    title: "Turmeric (Haldi)",
    img: turmeric,
    desc: "Our flagship export — high-curcumin Indian turmeric (haldi) fingers, polished bulbs and stone-ground powder. Sun-dried, lab-tested and packed to international food-grade standards.",
    tags: ["High Curcumin 5%+", "ALLPEY • ARAKU • ERODE Origin", "Whole • Powder • Fingers"],
  },
  {
    title: "Premium Indian Spices",
    img: spices,
    desc: "Red chili, cumin, coriander, cardamom, black pepper, cloves, fennel and mustard — sourced direct from farms across India and export-graded for aroma, color and purity.",
    tags: ["Steam Sterilized", "ISO • FSSAI", "Whole & Ground"],
  },
];

const products = [
  { title: "Fresh Vegetables", img: vegetables, desc: "Onions, tomatoes, okra, green chilies and seasonal produce, farm-fresh." },
  { title: "Fruits", img: fruits, desc: "Alphonso mangoes, pomegranates, bananas, grapes and tropical specialties." },
  { title: "Herbs", img: herbs, desc: "Basil, mint, curry leaves, coriander and medicinal herbs of premium grade." },
  { title: "Agricultural Commodities", img: commodities, desc: "Basmati rice, pulses, lentils, wheat and oilseeds in bulk export quantities." },
];

export default function Products() {
  return (
    <section id="products" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl container-px">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold tracking-[0.25em] uppercase text-gold">Our Specialty</span>
          <h2 className="mt-3 text-3xl md:text-5xl font-semibold text-primary leading-tight">
            Turmeric (Haldi) & Indian Spices —{" "}
            <span className="text-gradient-gold">Our Flagship Exports</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Aromex Global Exports specializes in premium-grade Indian turmeric (haldi) and a full
            range of authentic spices, alongside vegetables, fruits, herbs and agro commodities for
            buyers worldwide.
          </p>
        </div>

        {/* Featured: Turmeric (Haldi) + Spices */}
        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {featured.map((p, i) => (
            <article
              key={p.title}
              className="group relative overflow-hidden rounded-3xl bg-card border-2 border-gold/40 hover:border-gold shadow-luxe transition-all duration-500"
            >
              <div className="absolute top-4 left-4 z-10 inline-flex items-center gap-1.5 bg-gold text-gold-foreground text-[11px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-full shadow">
                <Sparkles className="h-3.5 w-3.5" /> {i === 0 ? "Flagship Product" : "Bestseller Range"}
              </div>
              <div className="relative h-72 md:h-80 overflow-hidden">
                <img
                  src={p.img}
                  alt={`Premium export-quality ${p.title} from India — Aromex Global Exports`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  width={1024}
                  height={1024}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent" />
              </div>
              <div className="p-7">
                <h3 className="text-2xl md:text-3xl font-display font-semibold text-primary">{p.title}</h3>
                <p className="mt-3 text-sm md:text-base text-muted-foreground leading-relaxed">{p.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-primary/5 text-primary border border-primary/15">
                      {t}
                    </span>
                  ))}
                </div>
                <a
                  href="#contact"
                  onClick={() => trackEvent("product_inquiry_click", { product: p.title })}
                  className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition shadow-luxe"
                >
                  Request a Quote <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 max-w-2xl">
          <span className="text-xs font-semibold tracking-[0.25em] uppercase text-gold">More Categories</span>
          <h3 className="mt-2 text-2xl md:text-3xl font-semibold text-primary">Other Export Categories</h3>
        </div>


        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p) => (
            <article
              key={p.title}
              className="group relative overflow-hidden rounded-2xl bg-card border border-border hover:border-gold/60 hover:shadow-luxe transition-all duration-500"
            >
              <div className="relative h-60 overflow-hidden">
                <img
                  src={p.img}
                  alt={`Premium export-quality ${p.title.toLowerCase()} from India`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  width={800}
                  height={800}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/10 to-transparent opacity-60 group-hover:opacity-80 transition" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-primary">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                <a
                  href="#contact"
                  onClick={() => trackEvent("product_inquiry_click", { product: p.title })}
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-gold transition"
                >
                  Enquire Now <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
