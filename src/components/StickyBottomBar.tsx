import { SITE_CONFIG } from "../config/siteData";
import { CallButton, WhatsappButton } from "./ContactButtons";

export default function StickyBottomBar() {
  return (
    <div
      role="region"
      aria-label="Contacto rápido"
      className="pb-safe fixed right-0 bottom-0 left-0 z-50 flex gap-2 border-t border-guarnicion bg-asfalto/95 px-3 pt-3 backdrop-blur sm:hidden"
    >
      <CallButton size="bar" label="Llamar ahora" sublabel={SITE_CONFIG.phoneFormatted} />
      <WhatsappButton size="bar" label="WhatsApp" className="max-w-[42%]" />
    </div>
  );
}
