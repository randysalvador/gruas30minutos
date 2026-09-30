export const SITE_CONFIG = {
  brand: "Grúas 30 Minutos CDMX",
  phone: "5527093155",
  phoneFormatted: "55 2709 3155",
  telHref: "tel:+525527093155",
  whatsappNumber: "525527093155",
  whatsappMessage: "Hola, necesito una grúa urgente. Mi ubicación es: ",
  zones: [
    "Coyoacán",
    "Tlalpan",
    "Xochimilco",
    "Roma Norte",
    "Roma Sur",
    "Tláhuac",
    "Iztapalapa",
    "CDMX y Área Metropolitana",
  ],
} as const;

export const buildWhatsappUrl = (extra: string = ""): string =>
  `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(
    SITE_CONFIG.whatsappMessage + extra,
  )}`;

export const NAV_LINKS = [
  { href: "#inicio", label: "Inicio" },
  { href: "#cobertura", label: "Cobertura" },
  { href: "#servicios", label: "Servicios" },
  { href: "#como-funciona", label: "Cómo funciona" },
] as const;
