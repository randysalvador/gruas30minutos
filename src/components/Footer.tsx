import { NAV_LINKS, SITE_CONFIG } from "../config/siteData";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-guarnicion">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:grid-cols-3 sm:px-6">
        <div>
          <p className="font-display text-2xl font-bold">{SITE_CONFIG.brand}</p>
          <p className="mt-2 text-niebla">Grúas y auxilio vial las 24 horas, todos los días.</p>
        </div>

        <div>
          <h2 className="font-display text-xl font-bold">Contacto</h2>
          <ul className="mt-3 space-y-2 text-niebla">
            <li>
              Teléfono y WhatsApp:{" "}
              <a href={SITE_CONFIG.telHref} className="font-semibold text-senal hover:underline">
                {SITE_CONFIG.phoneFormatted}
              </a>
            </li>
            <li>Horario: 24 horas, los 365 días del año</li>
            <li>Zona de atención: {SITE_CONFIG.zones.join(", ")}</li>
          </ul>
        </div>

        <nav aria-label="Pie de página">
          <h2 className="font-display text-xl font-bold">Secciones</h2>
          <ul className="mt-3 space-y-2">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-niebla hover:text-senal">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <p className="border-t border-guarnicion px-4 py-5 text-center text-sm text-niebla">
        © {year} {SITE_CONFIG.brand}. Todos los derechos reservados.
      </p>
    </footer>
  );
}
