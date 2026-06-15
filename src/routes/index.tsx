import { createFileRoute } from "@tanstack/react-router";
import Navbar from "@/components/site/Navbar";
import Hero from "@/components/site/Hero";
import About from "@/components/site/About";
import Products from "@/components/site/Products";
import WhyChooseUs from "@/components/site/WhyChooseUs";
import GlobalPresence from "@/components/site/GlobalPresence";
import Contact from "@/components/site/Contact";
import Footer from "@/components/site/Footer";
import WhatsAppFloat from "@/components/site/WhatsAppFloat";

const TITLE =
  "Aromex Global Exports | Indian Turmeric (Haldi) & Spices Exporter";

const DESC =
  "Aromex Global Exports — leading Indian exporter of premium turmeric (haldi), spices, vegetables, fruits, herbs and agricultural commodities to 30+ countries. High-curcumin haldi, ISO/FSSAI quality.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      {
        name: "keywords",
        content:
          "turmeric exporter India, haldi exporter, Indian turmeric powder exporter, high curcumin turmeric, Indian spice exporter, red chili exporter, cumin exporter, cardamom exporter, agricultural exporters India, vegetable exporters India, fruit exporters India, basmati rice exporter, Aromex Global Exports",
      },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Aromex Global Exports",
          description: DESC,
          email: "sales@aromexexports.com",
          telephone: "+91 9866673011",
          address: {
            "@type": "PostalAddress",
            addressCountry: "IN",
          },
          slogan: "Global Reach. Natural Excellence.",
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Products />
      <WhyChooseUs />
      <GlobalPresence />

      {/* Leadership Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 text-center">
          <p className="uppercase tracking-[5px] text-[#c89b3c] text-sm">
            Leadership
          </p>

          <h2 className="text-5xl md:text-7xl font-serif text-green-800 mt-4">
            Meet Our Founders
          </h2>

          <div className="w-28 h-[3px] bg-[#c89b3c] mx-auto mt-6"></div>

          <p className="text-gray-600 text-lg md:text-xl mt-8 max-w-4xl mx-auto leading-relaxed">
            The visionaries leading Aromex Global Exports with passion,
            integrity, and a commitment to excellence.
          </p>

          <div className="grid md:grid-cols-2 gap-10 mt-20">
            {/* Founder 1 */}
            <div className="bg-[#f8f5ec] rounded-[30px] p-12 text-center shadow-md hover:shadow-xl transition duration-300">
              <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-br from-green-800 to-green-600 flex items-center justify-center text-white text-6xl font-bold shadow-lg">
                RR
              </div>

              <h3 className="text-4xl md:text-5xl font-serif text-green-800 mt-8">
                Reshav Reddy
              </h3>

              <div className="w-20 h-[3px] bg-[#c89b3c] mx-auto mt-4"></div>

              <p className="uppercase tracking-[4px] text-[#c89b3c] mt-5 text-lg">
                Founder & Director
              </p>

              <p className="text-gray-600 mt-6 text-lg leading-relaxed">
                Visionary leader driving Aromex Global Exports' mission to
                deliver premium Indian agricultural products to international
                markets with uncompromising quality and trust.
              </p>
            </div>

            {/* Founder 2 */}
            <div className="bg-[#f8f5ec] rounded-[30px] p-12 text-center shadow-md hover:shadow-xl transition duration-300">
              <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-br from-green-800 to-green-600 flex items-center justify-center text-white text-6xl font-bold shadow-lg">
                RR
              </div>

              <h3 className="text-4xl md:text-5xl font-serif text-green-800 mt-8">
                Rohith Raj
              </h3>

              <div className="w-20 h-[3px] bg-[#c89b3c] mx-auto mt-4"></div>

              <p className="uppercase tracking-[4px] text-[#c89b3c] mt-5 text-lg">
                Co-Founder & Director
              </p>

              <p className="text-gray-600 mt-6 text-lg leading-relaxed">
                Strategist behind global partnerships and operations —
                ensuring world-class sourcing, hygienic processing, and
                reliable supply chains for every shipment.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Contact />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}

