import { useEffect, useRef, useState } from "react";
import { Palette, Check } from "lucide-react";
import { THEMES, useTheme } from "./theme";

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-haspopup="menu"
        aria-label="Change accent theme"
        className="glass flex min-h-11 items-center gap-2 rounded-full px-4 py-2 text-sm font-medium"
      >
        <Palette className="size-4" aria-hidden="true" />
        <span className="hidden sm:inline">Theme</span>
        <span
          className="size-4 rounded-full"
          style={{ backgroundImage: "var(--gradient-accent)" }}
          aria-hidden="true"
        />
      </button>

      {open && (
        <div
          role="menu"
          aria-label="Accent themes"
          className="glass absolute right-0 z-50 mt-3 w-60 space-y-1 p-2"
        >
          {THEMES.map((t) => (
            <button
              key={t.id}
              type="button"
              role="menuitemradio"
              aria-checked={theme === t.id}
              onClick={() => {
                setTheme(t.id);
                setOpen(false);
              }}
              className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm transition-colors hover:bg-secondary"
            >
              <span
                className="size-5 shrink-0 rounded-full border border-border"
                style={{ backgroundImage: `linear-gradient(120deg, ${t.swatch[0]}, ${t.swatch[1]})` }}
                aria-hidden="true"
              />
              <span className="flex-1">{t.name}</span>
              {theme === t.id && <Check className="size-4 text-accent" aria-hidden="true" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
