import { useState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import { trackEvent } from "@/lib/site";

export default function InquiryForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const formEl = e.currentTarget;
    const data = new FormData(formEl);

    const message = `
*New Buyer Inquiry - Aromex Global Exports*

Name: ${data.get("full_name")}
Company: ${data.get("company")}
Country: ${data.get("country")}
Email: ${data.get("email")}
Phone: ${data.get("phone")}
Product: ${data.get("product")}
Quantity: ${data.get("quantity")}

Message:
${data.get("message")}
`;

    const whatsappNumber = "919866673011";

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );

    trackEvent("inquiry_form_submit", {
      country: data.get("country"),
    });

    formEl.reset();
    setStatus("success");
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl bg-primary/5 border border-primary/20 p-8 text-center">
        <CheckCircle2 className="mx-auto h-12 w-12 text-primary" />
        <h3 className="mt-4 text-xl font-semibold text-primary">
          Redirected to WhatsApp
        </h3>
        <p className="mt-2 text-muted-foreground">
          Please send the pre-filled WhatsApp message to complete your inquiry.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 inline-flex px-5 py-2.5 rounded-md bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90"
        >
          Send another inquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid sm:grid-cols-2 gap-4">
      <Field label="Full Name *" name="full_name" required minLength={2} maxLength={100} />
      <Field label="Company Name" name="company" maxLength={120} />
      <Field label="Country *" name="country" required maxLength={80} />
      <Field label="Email Address *" name="email" type="email" required maxLength={150} />
      <Field label="Phone Number *" name="phone" type="tel" required minLength={6} maxLength={25} />
      <Field label="Product Interested In *" name="product" required maxLength={120} />
      <Field label="Quantity Requirement" name="quantity" maxLength={80} />

      <div className="sm:col-span-2">
        <label className="block text-sm font-medium text-foreground mb-1.5">
          Message
        </label>
        <textarea
          name="message"
          rows={4}
          maxLength={1500}
          className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold/60"
          placeholder="Tell us about your requirements, destination port, and timeline."
        />
      </div>

      <div className="sm:col-span-2">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-7 py-3 rounded-md bg-primary text-primary-foreground font-semibold hover:bg-primary/90 shadow-luxe transition disabled:opacity-60"
        >
          {status === "submitting" ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Opening WhatsApp...
            </>
          ) : (
            "Send Inquiry"
          )}
        </button>

        <p className="mt-3 text-xs text-muted-foreground">
          By submitting, you agree to be contacted by Aromex Global Exports regarding your inquiry.
        </p>
      </div>
    </form>
  );
}

function Field(
  props: React.InputHTMLAttributes<HTMLInputElement> & { label: string }
) {
  const { label, ...rest } = props;

  return (
    <div>
      <label className="block text-sm font-medium text-foreground mb-1.5">
        {label}
      </label>
      <input
        {...rest}
        className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold/60"
      />
    </div>
  );
}