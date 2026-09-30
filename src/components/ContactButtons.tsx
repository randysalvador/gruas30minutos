import { LoaderCircle, MessageCircle, Phone } from "lucide-react";
import { SITE_CONFIG } from "../config/siteData";
import { useWhatsappWithLocation } from "../hooks/useWhatsappWithLocation";

type Size = "lg" | "md" | "bar";

const sizes: Record<Size, string> = {
  lg: "min-h-16 px-6 text-xl gap-3",
  md: "min-h-12 px-4 text-base gap-2",
  bar: "min-h-14 px-3 text-lg gap-2 flex-1",
};

const base =
  "inline-flex items-center justify-center rounded-xl font-display font-bold tracking-wide transition-transform active:scale-[0.98] select-none";

type Props = { size?: Size; label?: string; sublabel?: string; className?: string };

export function CallButton({ size = "lg", label, sublabel, className = "" }: Props) {
  return (
    <a
      href={SITE_CONFIG.telHref}
      className={`${base} ${sizes[size]} bg-alerta text-asfalto hover:bg-[#ff7d1f] ${className}`}
      aria-label={`Llamar al ${SITE_CONFIG.phoneFormatted}`}
    >
      <Phone aria-hidden className="size-[1.15em] shrink-0" strokeWidth={2.5} />
      <span className="flex flex-col items-start leading-none">
        <span className="whitespace-nowrap">{label ?? "Llamar por teléfono"}</span>
        {sublabel && (
          <span className="mt-1 font-sans text-sm font-semibold tracking-normal whitespace-nowrap">
            {sublabel}
          </span>
        )}
      </span>
    </a>
  );
}

export function WhatsappButton({ size = "lg", label, className = "" }: Props) {
  const { send, isLocating } = useWhatsappWithLocation();
  return (
    <button
      type="button"
      onClick={send}
      disabled={isLocating}
      aria-busy={isLocating}
      className={`${base} ${sizes[size]} bg-wa text-wa-ink hover:bg-[#3ee07a] disabled:opacity-90 ${className}`}
    >
      {isLocating ? (
        <LoaderCircle aria-hidden className="size-[1.15em] shrink-0 animate-spin" strokeWidth={2.5} />
      ) : (
        <MessageCircle aria-hidden className="size-[1.15em] shrink-0" strokeWidth={2.5} />
      )}
      <span className="whitespace-nowrap">
        {isLocating ? (size === "bar" ? "Ubicando…" : "Obteniendo ubicación…") : (label ?? "Enviar WhatsApp")}
      </span>
    </button>
  );
}
