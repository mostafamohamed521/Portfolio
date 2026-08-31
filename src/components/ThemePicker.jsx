import React, { useEffect, useState } from "react";

/**
 * A live color-swatch picker (bottom-left corner) so you can preview every
 * accent color option instantly, without asking me to guess one at a time.
 *
 * Once you've picked your favorite: tell me which one, and I'll make it the
 * permanent default and remove this picker.
 */
const defaultAccent = "gold";

const ACCENTS = [
  { key: "burgundy", label: "Dark Burgundy", swatch: "#9c2545" },
  { key: "navy", label: "Steel Navy", swatch: "#3e5c87" },
  { key: "teal", label: "Teal", swatch: "#35b5a6" },
  { key: "gold", label: "Light Gold", swatch: "#d9bd7a" },
  { key: "emerald", label: "Emerald", swatch: "#34d399" },
  { key: "slate", label: "Slate Blue", swatch: "#6c8cff" },
  { key: "violet", label: "Royal Violet", swatch: "#8b5cf6" },
  { key: "copper", label: "Copper", swatch: "#c2703d" },
  { key: "crimson", label: "Crimson", swatch: "#dc2626" },
  { key: "ocean", label: "Ocean Blue", swatch: "#0ea5e9" },
  { key: "sapphire", label: "Sapphire", swatch: "#2952cc" },
  { key: "ruby", label: "Ruby", swatch: "#a31432" },
  { key: "jade", label: "Jade", swatch: "#1f7a5c" },
  { key: "graphite", label: "Graphite", swatch: "#6b7280" },
  { key: "rose", label: "Rose", swatch: "#ec4899" },
  { key: "amber", label: "Warm Amber", swatch: "#e8a33d" },
];

export default function ThemePicker() {
  const [active, setActive] = useState(
    () => localStorage.getItem("accent") || defaultAccent
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-accent", active);
    localStorage.setItem("accent", active);
  }, [active]);

  return (
    <div className="theme-picker" role="group" aria-label="Choose accent color">
      {ACCENTS.map((a) => (
        <button
          key={a.key}
          type="button"
          className={`theme-picker-swatch${active === a.key ? " is-active" : ""}`}
          style={{ background: a.swatch }}
          title={a.label}
          aria-label={a.label}
          aria-pressed={active === a.key}
          onClick={() => setActive(a.key)}
        />
      ))}
    </div>
  );
}
