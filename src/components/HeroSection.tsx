import { ArrowUpRight } from "lucide-react";
import { SITE_CONFIG } from "../config/siteData";
import { CallButton, WhatsappButton } from "./ContactButtons";
import { LiveBadge } from "./Navbar";

/**
 * Tarjeta de cobertura con el lenguaje de las señales informativas de
 * destino de las carreteras mexicanas: fondo verde, filete blanco, flechas.
 */
function CoverageSign() {
  const zones = SITE_CONFIG.zones.filter((z) => z !== "CDMX y Área Metropolitana");
  return (
    <section
      id="cobertura"
      aria-labelledby="cobertura-titulo"
      className="rounded-2xl bg-[#00663a] p-2 shadow-[0_0_0_2px_#003d22] sm:p-2.5"
    >
      <div className="rounded-xl border-[3px] border-white px-5 py-5 sm:px-6">
        <h2 id="cobertura-titulo" className="font-display text-2xl font-bold leading-tight text-white">
          Zonas con llegada prioritaria
        </h2>
        <ul className="mt-3 divide-y divide-white/25">
          {zones.map((zone, i) => (
            <li key={zone} className="flex items-center justify-between gap-4 py-2">
              <span className="font-display text-[1.35rem] font-semibold leading-tight text-white">{zone}</span>
              <ArrowUpRight
                aria-hidden
                strokeWidth={3}
                className={`size-6 shrink-0 text-white ${i % 2 ? "-rotate-90" : ""}`}
              />
            </li>
          ))}
        </ul>
        <p className="mt-3 border-t-[3px] border-white pt-3 font-sans text-base font-medium text-white">
          También cubrimos el resto de la CDMX y el área metropolitana. Pregunta por tu zona.
        </p>
      </div>
    </section>
  );
}

export default function HeroSection() {
  return (
    <section id="inicio" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 pt-8 pb-14 sm:px-6 sm:pt-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-14 lg:pb-20">
        <div>
          <div className="md:hidden">
            <LiveBadge />
          </div>

          <h1 className="mt-4 font-display text-[2.9rem] font-extrabold leading-[0.95] text-balance sm:text-6xl lg:text-7xl md:mt-0">
            ¿Necesitas una grúa en menos de 30&nbsp;minutos?
          </h1>

          <p className="mt-5 max-w-xl text-lg leading-relaxed text-suave sm:text-xl">
            Servicio rápido, seguro y confiable 24/7 en CDMX y zonas de cobertura. Te decimos el
            costo y el tiempo de llegada antes de salir.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <CallButton className="sm:flex-1" />
            <WhatsappButton className="sm:flex-1" />
          </div>

          <p className="mt-3 text-sm text-suave">
            Al enviar WhatsApp te pediremos permiso para adjuntar tu ubicación. Si no la
            compartes, puedes escribirla en el mensaje.
          </p>

          <p className="mt-6 font-display text-2xl font-semibold text-texto">
            <span className="text-suave">Línea directa: </span>
            <a href={SITE_CONFIG.telHref} className="text-acento underline-offset-4 hover:underline">
              {SITE_CONFIG.phoneFormatted}
            </a>
          </p>
        </div>

        <CoverageSign />
      </div>
    </section>
  );
}
