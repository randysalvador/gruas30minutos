import { Phone } from "lucide-react";
import { NAV_LINKS, SITE_CONFIG } from "../config/siteData";

export function LiveBadge() {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-400/10 px-3 py-1 text-sm font-semibold text-emerald-300">
      <span className="relative flex size-2.5" aria-hidden>
        <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
        <span className="relative inline-flex size-2.5 rounded-full bg-emerald-400" />
      </span>
      Servicio activo 24/7
    </span>
  );
}

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-guarnicion/60 bg-asfalto/95 backdrop-blur supports-[backdrop-filter]:bg-asfalto/80">
      <nav
        aria-label="Principal"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6"
      >
        <a href="#inicio" className="flex items-center gap-2.5">
          <span
            aria-hidden
            className="grid size-8 rotate-45 place-items-center rounded-[5px] border-2 border-asfalto bg-senal outline-2 outline-senal"
          >
            <span className="-rotate-45 font-display text-sm font-extrabold text-asfalto">30</span>
          </span>
          <span className="font-display text-xl font-bold leading-none">
            Grúas 30 Minutos <span className="text-niebla">CDMX</span>
          </span>
        </a>

        <ul className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="font-medium text-niebla transition-colors hover:text-senal">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <span className="hidden md:inline-flex">
            <LiveBadge />
          </span>
          <a
            href={SITE_CONFIG.telHref}
            className="inline-flex min-h-11 items-center gap-2 rounded-lg bg-alerta px-3 font-display text-lg font-bold text-asfalto sm:px-4"
            aria-label={`Llamar al ${SITE_CONFIG.phoneFormatted}`}
          >
            <Phone aria-hidden className="size-5" strokeWidth={2.5} />
            <span className="hidden sm:inline">{SITE_CONFIG.phoneFormatted}</span>
          </a>
        </div>
      </nav>
    </header>
  );
}
