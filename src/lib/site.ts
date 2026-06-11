export const SITE = {
  name: "Aromex Global Exports",
  tagline: "Global Reach. Natural Excellence.",
  phone: "+91 9866673011",
  phoneRaw: "919866673011",
  email: "sales@aromexexports.com",
  whatsappUrl:
    "https://wa.me/919866673011?text=Hello%20Aromex%20Global%20Exports,%20I%20am%20interested%20in%20your%20products.",
  // TODO: replace with your Web3Forms access key from https://web3forms.com
  web3formsAccessKey: "YOUR_WEB3FORMS_ACCESS_KEY",
  // TODO: replace with your Google Analytics 4 Measurement ID (e.g. G-XXXXXXXXXX)
  gaMeasurementId: "G-XXXXXXXXXX",
};

// Lightweight GA4 event tracker (safe no-op when GA not loaded)
export function trackEvent(name: string, params: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  const w = window as unknown as { gtag?: (...a: unknown[]) => void };
  if (typeof w.gtag === "function") {
    w.gtag("event", name, params);
  }
}
