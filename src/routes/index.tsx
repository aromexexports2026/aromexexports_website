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

const TITLE = "Aromex Global Exports | Indian Turmeric (Haldi) & Spices Exporter";
const DESC =
  "Aromex Global Exports — leading Indian exporter of premium turmeric (haldi), spices, vegetables, fruits, herbs and agricultural commodities to 30+ countries. High-curcumin haldi, ISO/FSSAI quality.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "turmeric exporter India, haldi exporter, Indian turmeric powder exporter, high curcumin turmeric, Indian spice exporter, red chili exporter, cumin exporter, cardamom exporter, agricultural exporters India, vegetable exporters India, fruit exporters India, basmati rice exporter, Aromex Global Exports" },
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
          email: "aromexexports@gmail.com",
          telephone: "+91 9866673011",
          address: { "@type": "PostalAddress", addressCountry: "IN" },
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
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
