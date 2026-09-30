import { BadgeDollarSign, Clock, MapPinned, Timer } from "lucide-react";

const REASONS = [
  {
    icon: Clock,
    title: "Atención 24/7",
    text: "Contestamos de día, de noche, en fin de semana y en días festivos, los 365 días del año.",
  },
  {
    icon: Timer,
    title: "Rapidez",
    text: "Asignamos la unidad más cercana en cuanto confirmas. Nuestra meta es llegar en menos de 30 minutos.",
  },
  {
    icon: MapPinned,
    title: "Cobertura local",
    text: "Operadores que conocen las calles de la CDMX y el área metropolitana, incluidos accesos y horarios difíciles.",
  },
  {
    icon: BadgeDollarSign,
    title: "Precios transparentes",
    text: "Cotización previa por teléfono o WhatsApp, sin cargos ocultos al llegar.",
  },
];

export default function WhyUs() {
  return (
    <section aria-labelledby="porque-titulo" className="bg-superficie">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <h2 id="porque-titulo" className="font-display text-4xl font-bold sm:text-5xl">
          Por qué elegirnos
        </h2>

        <ul className="mt-10 grid gap-x-12 gap-y-9 sm:grid-cols-2">
          {REASONS.map(({ icon: Icon, title, text }) => (
            <li key={title} className="flex gap-5">
              <span
                aria-hidden
                className="mt-1 grid size-11 shrink-0 rotate-45 place-items-center rounded-md bg-senal"
              >
                <Icon className="size-6 -rotate-45 text-tinta" strokeWidth={2.25} />
              </span>
              <div>
                <h3 className="font-display text-2xl font-bold">{title}</h3>
                <p className="mt-1.5 text-base leading-relaxed text-suave">{text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
