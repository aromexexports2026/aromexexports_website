import { SITE, trackEvent } from "@/lib/site";

export default function WhatsAppFloat() {
  return (
    <a
      href={SITE.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackEvent("whatsapp_click", { location: "float" })}
      aria-label="Chat with us on WhatsApp"
      className="group fixed bottom-5 right-5 z-50 inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-luxe animate-wa-pulse hover:scale-110 transition-transform"
    >
      <svg viewBox="0 0 32 32" className="w-7 h-7 fill-current" aria-hidden="true">
        <path d="M16 .5C7.4.5.5 7.4.5 16c0 2.8.7 5.5 2.1 7.9L.5 31.5l7.8-2c2.3 1.3 4.9 1.9 7.7 1.9 8.6 0 15.5-6.9 15.5-15.5S24.6.5 16 .5zm0 28c-2.5 0-4.9-.7-7-2l-.5-.3-4.6 1.2 1.2-4.5-.3-.5C3.6 20.4 3 18.2 3 16 3 8.8 8.8 3 16 3s13 5.8 13 13-5.8 12.5-13 12.5zm7.2-9.3c-.4-.2-2.3-1.1-2.7-1.3-.4-.1-.6-.2-.9.2-.3.4-1 1.3-1.2 1.5-.2.2-.4.3-.8.1s-1.7-.6-3.2-2c-1.2-1-2-2.4-2.2-2.8-.2-.4 0-.6.2-.8.2-.2.4-.5.5-.7.2-.2.2-.4.3-.6.1-.2.1-.4 0-.6-.1-.2-.9-2.1-1.2-2.9-.3-.7-.6-.6-.9-.7h-.7c-.2 0-.6.1-.9.4-.3.4-1.2 1.2-1.2 2.8s1.2 3.3 1.4 3.5c.2.2 2.4 3.7 5.9 5.2 2.1.9 2.9 1 4 .8.7-.1 2.3-.9 2.6-1.8.3-.9.3-1.7.2-1.8-.1-.2-.4-.3-.8-.5z" />
      </svg>
      <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-md bg-foreground text-background text-xs font-medium px-3 py-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
        Chat with us on WhatsApp
      </span>
    </a>
  );
}
