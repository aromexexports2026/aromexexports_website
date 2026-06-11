import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import InquiryForm from "./InquiryForm";
import { SITE, trackEvent } from "@/lib/site";

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl container-px grid lg:grid-cols-5 gap-10">
        <div className="lg:col-span-2">
          <span className="text-xs font-semibold tracking-[0.25em] uppercase text-gold">Contact</span>
          <h2 className="mt-3 text-3xl md:text-5xl font-semibold text-primary leading-tight">
            Let's start your sourcing journey
          </h2>
          <p className="mt-4 text-muted-foreground">
            Reach out for a quote, product catalog, or partnership discussion. Our team responds within
            one business day.
          </p>

          <ul className="mt-8 space-y-4">
            <li className="flex items-start gap-4">
              <span className="inline-flex items-center justify-center w-11 h-11 rounded-lg bg-primary/10 text-primary shrink-0">
                <Phone className="h-5 w-5" />
              </span>
              <div>
                <div className="text-sm text-muted-foreground">Phone</div>
                <a href={`tel:${SITE.phone.replace(/\s/g, "")}`} className="font-semibold text-foreground hover:text-primary">
                  {SITE.phone}
                </a>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="inline-flex items-center justify-center w-11 h-11 rounded-lg bg-primary/10 text-primary shrink-0">
                <Mail className="h-5 w-5" />
              </span>
              <div>
                <div className="text-sm text-muted-foreground">Email</div>
                <a href={`mailto:${SITE.email}`} className="font-semibold text-foreground hover:text-primary break-all">
                  {SITE.email}
                </a>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="inline-flex items-center justify-center w-11 h-11 rounded-lg bg-primary/10 text-primary shrink-0">
                <MapPin className="h-5 w-5" />
              </span>
              <div>
                <div className="text-sm text-muted-foreground">Headquarters</div>
                <div className="font-semibold text-foreground">India</div>
              </div>
            </li>
          </ul>

          <a
            href={SITE.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent("whatsapp_click", { location: "contact" })}
            className="mt-6 inline-flex items-center gap-2 px-5 py-3 rounded-md bg-[#25D366] text-white font-semibold hover:brightness-110 transition"
          >
            <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
          </a>

          <div className="mt-8 rounded-xl overflow-hidden border border-border h-56">
            <iframe
              title="Aromex Global Exports location"
              src="https://www.google.com/maps?q=India&output=embed"
              className="w-full h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <div className="lg:col-span-3 rounded-2xl bg-cream p-6 md:p-8 border border-border">
          <h3 className="text-xl md:text-2xl font-semibold text-primary">Buyer Inquiry Form</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Share your requirement and our export team will respond within 24 hours.
          </p>
          <div className="mt-6">
            <InquiryForm />
          </div>
        </div>
      </div>
    </section>
  );
}
