import { Globe2 } from "lucide-react";

const regions = [
  "Middle East", "Europe", "Southeast Asia", "North America",
  "Africa", "United Kingdom", "Australia", "Far East",
];

export default function GlobalPresence() {
  return (
    <section id="global" className="py-20 md:py-28 bg-cream">
      <div className="mx-auto max-w-7xl container-px text-center">
        <span className="text-xs font-semibold tracking-[0.25em] uppercase text-gold">Global Presence</span>
        <h2 className="mt-3 text-3xl md:text-5xl font-semibold text-primary leading-tight">
          Connecting Indian Agriculture to Global Markets
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
          We proudly deliver premium agricultural products to buyers worldwide with trust, reliability,
          and excellence.
        </p>

        <div className="relative mt-14 mx-auto max-w-4xl aspect-[2/1] rounded-2xl bg-background border border-border shadow-luxe overflow-hidden">
          <svg
            viewBox="0 0 1000 500"
            className="absolute inset-0 w-full h-full text-primary/15"
            aria-hidden="true"
          >
            <defs>
              <pattern id="dots" width="10" height="10" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1.2" fill="currentColor" />
              </pattern>
              <mask id="world">
                {/* Simplified continent silhouettes */}
                <rect width="1000" height="500" fill="black" />
                <ellipse cx="200" cy="200" rx="110" ry="80" fill="white" />
                <ellipse cx="250" cy="340" rx="60" ry="100" fill="white" />
                <ellipse cx="490" cy="180" rx="80" ry="70" fill="white" />
                <ellipse cx="540" cy="320" rx="70" ry="110" fill="white" />
                <ellipse cx="700" cy="220" rx="180" ry="110" fill="white" />
                <ellipse cx="820" cy="380" rx="80" ry="50" fill="white" />
              </mask>
            </defs>
            <rect width="1000" height="500" fill="url(#dots)" mask="url(#world)" />
          </svg>

          {/* India pulse */}
          <div className="absolute top-[42%] left-[64%] -translate-x-1/2 -translate-y-1/2">
            <span className="relative flex h-4 w-4">
              <span className="absolute inline-flex h-full w-full rounded-full bg-gold/60 animate-ping" />
              <span className="relative inline-flex h-4 w-4 rounded-full bg-gold ring-2 ring-background" />
            </span>
            <span className="absolute left-5 top-1/2 -translate-y-1/2 text-xs font-semibold text-primary whitespace-nowrap">
              India HQ
            </span>
          </div>

          {/* Sample destination markers */}
          {[
            { top: "30%", left: "20%" },
            { top: "32%", left: "48%" },
            { top: "55%", left: "30%" },
            { top: "65%", left: "80%" },
            { top: "40%", left: "82%" },
          ].map((p, i) => (
            <span
              key={i}
              className="absolute h-2.5 w-2.5 rounded-full bg-primary ring-2 ring-background animate-pulse"
              style={p}
            />
          ))}

          <div className="absolute bottom-4 right-4 inline-flex items-center gap-2 text-xs text-muted-foreground bg-background/80 backdrop-blur px-3 py-1.5 rounded-full border border-border">
            <Globe2 className="h-3.5 w-3.5 text-gold" /> Exporting across 30+ countries
          </div>
        </div>

        <ul className="mt-10 flex flex-wrap justify-center gap-2">
          {regions.map((r) => (
            <li
              key={r}
              className="px-4 py-1.5 rounded-full text-sm font-medium bg-background border border-border text-foreground/80 hover:border-gold/60 hover:text-primary transition"
            >
              {r}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
