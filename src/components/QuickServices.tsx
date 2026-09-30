import { BatteryCharging, Fuel, ReceiptText, Siren, Truck, Wrench } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Service = { icon: LucideIcon; title: string; text: string; items?: { icon: LucideIcon; label: string }[] };

const SERVICES: Service[] = [
  {
    icon: Truck,
    title: "Arrastre y traslado",
    text: "Llevamos tu auto al taller, a tu casa o a la agencia. Grúa de plataforma para autos, camionetas y motos.",
  },
  {
    icon: Wrench,
    title: "Auxilio vial",
    text: "Si el problema se resuelve en el lugar, no necesitas arrastre.",
    items: [
      { icon: BatteryCharging, label: "Paso de corriente" },
      { icon: Wrench, label: "Cambio de llanta" },
      { icon: Fuel, label: "Suministro de gasolina" },
    ],
  },
  {
    icon: Siren,
    title: "Rescate de emergencia 24/7",
    text: "Choques, autos atascados o varados en vía rápida, a cualquier hora y cualquier día del año.",
  },
  {
    icon: ReceiptText,
    title: "Tarifa antes de salir",
    text: "Te damos el costo total por teléfono o WhatsApp. Lo que te cotizamos es lo que pagas.",
  },
];

export default function QuickServices() {
  return (
    <section id="servicios" aria-labelledby="servicios-titulo" className="bg-carril">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <h2 id="servicios-titulo" className="font-display text-4xl font-bold sm:text-5xl">
          Servicios
        </h2>
        <p className="mt-3 max-w-xl text-lg text-niebla">
          Una sola llamada para cualquier problema con tu vehículo en la calle.
        </p>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2">
          {SERVICES.map(({ icon: Icon, title, text, items }) => (
            <li key={title} className="rounded-xl border-l-4 border-senal bg-asfalto p-6">
              <div className="flex items-start gap-4">
                <Icon aria-hidden className="mt-0.5 size-8 shrink-0 text-senal" strokeWidth={2} />
                <div>
                  <h3 className="font-display text-2xl font-bold leading-tight">{title}</h3>
                  <p className="mt-2 text-base leading-relaxed text-niebla">{text}</p>
                  {items && (
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {items.map(({ icon: ItemIcon, label }) => (
                        <li
                          key={label}
                          className="inline-flex items-center gap-1.5 rounded-md bg-carril px-3 py-1.5 text-sm font-semibold text-pintura"
                        >
                          <ItemIcon aria-hidden className="size-4 text-senal" />
                          {label}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
