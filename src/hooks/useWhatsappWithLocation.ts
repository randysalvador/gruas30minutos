import { useCallback, useState } from "react";
import { buildWhatsappUrl } from "../config/siteData";

type Status = "idle" | "locating";

/**
 * Abre WhatsApp con el mensaje predeterminado. Si el navegador permite
 * la geolocalización, agrega un enlace de Google Maps con la ubicación.
 * Si el usuario la niega o falla, abre WhatsApp igual: nunca se bloquea.
 */
export function useWhatsappWithLocation() {
  const [status, setStatus] = useState<Status>("idle");

  const open = useCallback((url: string) => {
    setStatus("idle");
    // Misma pestaña: en móvil abre la app de WhatsApp directamente
    // y evita el bloqueo de ventanas emergentes tras una espera async.
    window.location.assign(url);
  }, []);

  const send = useCallback(() => {
    if (status === "locating") return;

    if (!("geolocation" in navigator)) {
      open(buildWhatsappUrl());
      return;
    }

    setStatus("locating");
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        const lat = coords.latitude.toFixed(6);
        const lng = coords.longitude.toFixed(6);
        open(buildWhatsappUrl(`https://maps.google.com/?q=${lat},${lng}`));
      },
      () => open(buildWhatsappUrl()),
      { enableHighAccuracy: true, timeout: 8000, maximumAge: 60000 },
    );
  }, [open, status]);

  return { send, isLocating: status === "locating" };
}
