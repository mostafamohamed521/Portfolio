import React, { useEffect, useState } from "react";

/**
 * A small live color-swatch picker (bottom-left corner) so you can preview
 * every accent color option instantly, without touching any CSS.
 *
 * Once you've picked your favorite: set `defaultAccent` below to that key,
 * delete this file, remove <ThemePicker /> from App.jsx, and remove the
 * ".theme-picker*" block at the end of src/styles/index.css.
 */
const defaultAccent = "burgundy";

const ACCENTS = [
  { key: "burgundy", label: "Dark Burgundy", swatch: "#7a1f3d" },
  { key: "amber", label: "Warm Amber", swatch: "#e8a33d" },
  { key: "emerald", label: "Emerald", swatch: "#34d399" },
  { key: "slate", label: "Slate Blue", swatch: "#6c8cff" },
  { key: "teal", label: "Teal", swatch: "#14b8a6" },
  { key: "violet", label: "Royal Violet", swatch: "#8b5cf6" },
  { key: "copper", label: "Copper", swatch: "#c2703d" },
  { key: "crimson", label: "Crimson", swatch: "#dc2626" },
  { key: "ocean", label: "Ocean Blue", swatch: "#0ea5e9" },
  { key: "rose", label: "Rose", swatch: "#ec4899" },
  { key: "sapphire", label: "Sapphire", swatch: "#2952cc" },
  { key: "ruby", label: "Ruby", swatch: "#a31432" },
  { key: "gold", label: "Deep Gold", swatch: "#b08d2b" },
  { key: "amethyst", label: "Amethyst", swatch: "#6b2fa0" },
  { key: "jade", label: "Jade", swatch: "#1f7a5c" },
  { key: "garnet", label: "Garnet", swatch: "#8c2f1b" },
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
