import { Moon, Sun } from "lucide-react";
import { useTheme } from "../hooks/useTheme";

export default function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const isDark = theme === "dark";
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
      title={isDark ? "Modo claro" : "Modo oscuro"}
      className="grid size-11 place-items-center rounded-lg border border-borde text-texto transition-colors hover:bg-superficie"
    >
      {isDark ? <Sun aria-hidden className="size-5" /> : <Moon aria-hidden className="size-5" />}
    </button>
  );
}
