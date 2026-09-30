import { motion } from "framer-motion";
import { SITE_CONFIG } from "../config/siteData";

const STEPS = [
  {
    title: "Contáctanos",
    text: `Envía tu ubicación por WhatsApp o llama directamente al ${SITE_CONFIG.phoneFormatted}.`,
  },
  {
    title: "Cotización inmediata",
    text: "Te confirmamos el tiempo estimado de llegada y un costo claro, sin sorpresas.",
  },
  {
    title: "Llegada y asistencia",
    text: "Nuestro operador llega a tu ubicación y se encarga de tu vehículo.",
  },
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" aria-labelledby="como-titulo">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <h2 id="como-titulo" className="font-display text-4xl font-bold sm:text-5xl">
          Cómo funciona
        </h2>
        <p className="mt-3 max-w-xl text-lg text-suave">Tres pasos entre la llamada y la grúa.</p>

        <div className="relative mt-12">
          {/* Línea de carril que une los pasos: el único momento animado de la página */}
          <motion.div
            aria-hidden
            className="lane-line absolute top-0 bottom-0 left-[27px] w-1.5 origin-top md:hidden"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1.1, ease: "easeOut" }}
          />
          <motion.div
            aria-hidden
            className="lane-line-x absolute top-[27px] right-[16%] left-[16%] hidden h-1.5 origin-left md:block"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 1.1, ease: "easeOut" }}
          />

          <ol className="relative grid gap-10 md:grid-cols-3 md:gap-8">
            {STEPS.map((step, i) => (
              <motion.li
                key={step.title}
                className="flex gap-5 md:flex-col md:items-center md:text-center"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.4, delay: 0.25 + i * 0.3 }}
              >
                <span
                  aria-hidden
                  className="grid size-[60px] shrink-0 place-items-center rounded-full border-4 border-fondo bg-senal font-display text-3xl font-extrabold text-tinta outline-2 outline-senal"
                >
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-display text-2xl font-bold">
                    <span className="sr-only">Paso {i + 1}: </span>
                    {step.title}
                  </h3>
                  <p className="mt-2 max-w-xs text-base leading-relaxed text-suave">{step.text}</p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
