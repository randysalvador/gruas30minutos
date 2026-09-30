# Grúas 30 Minutos CDMX

Landing page de emergencia vial: React 19 + Vite 7 + TypeScript + Tailwind CSS v4 + Framer Motion + Lucide.

## Uso

```bash
npm install
npm run dev       # desarrollo en http://localhost:5173
npm run build     # compila a dist/
npm run preview   # sirve la versión compilada
```

## Dónde cambiar cosas

- **Teléfono, WhatsApp, mensaje y zonas:** `src/config/siteData.ts`. Ningún componente tiene estos datos escritos a mano.
- **Colores y tipografías:** bloque `@theme` en `src/index.css`.
- **SEO, Open Graph y datos estructurados (JSON-LD):** `index.html`.

## Estructura

```
src/
  config/siteData.ts                 Datos de contacto y constructor de URL de WhatsApp
  hooks/useWhatsappWithLocation.ts   Abre WhatsApp y adjunta la ubicación si hay permiso
  components/
    Navbar.tsx          Marca, indicador 24/7, secciones y llamada rápida
    HeroSection.tsx     Titular, CTA dual y tarjeta de cobertura (#cobertura)
    ContactButtons.tsx  Botones de llamada y WhatsApp reutilizables
    QuickServices.tsx   Servicios (#servicios)
    HowItWorks.tsx      Proceso en 3 pasos (#como-funciona)
    WhyUs.tsx           Diferenciadores
    StickyBottomBar.tsx Barra fija de contacto, solo en móvil
    Footer.tsx
```

## Pendientes antes de publicar

- Subir `public/og-image.jpg` (1200×630) para la vista previa al compartir por WhatsApp.
- Confirmar la URL canónica en `index.html` si el dominio cambia.
- Revisar con Lighthouse en modo móvil tras el deploy.
