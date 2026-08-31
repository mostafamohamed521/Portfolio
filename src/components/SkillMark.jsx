import React, { useState } from "react";

/** Renders the real brand logo (Simple Icons CDN) or a fallback lucide icon for concept skills. */
export default function SkillMark({ skill, size = 20, color }) {
  const [failed, setFailed] = useState(false);
  const hex = color || skill.color;

  if (skill.slug && !failed) {
    return (
      <img
        src={`https://cdn.simpleicons.org/${skill.slug}/${hex}`}
        alt={skill.label}
        width={size}
        height={size}
        loading="eager"
        onError={() => setFailed(true)}
        style={{ display: "block", filter: "drop-shadow(0 1px 1px rgba(0,0,0,.25))" }}
      />
    );
  }
  // Either a concept skill (no real logo — uses its own lucide Icon), or the
  // CDN logo failed to load (bad slug, blocked domain, offline) — fall back
  // to a colored badge so nothing ever renders as a broken image.
  if (skill.Icon) {
    const Icon = skill.Icon;
    return <Icon size={size} color={`#${hex}`} strokeWidth={2} />;
  }
  // Show the full label when it's short enough to read as-is (e.g. "C#",
  // "CSS", ".NET") — a single first letter is ambiguous or outright
  // misleading for these (both "C#" and "CSS" reduce to just "C").
  const text = skill.label.length <= 4 ? skill.label : skill.label.slice(0, 2);
  const fontScale = text.length >= 4 ? 0.34 : text.length === 3 ? 0.42 : 0.55;
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: size,
        height: size,
        fontSize: size * fontScale,
        fontWeight: 700,
        fontFamily: "inherit",
        color: `#${hex}`,
        lineHeight: 1,
        letterSpacing: "-0.02em",
      }}
      aria-label={skill.label}
      title={skill.label}
    >
      {text}
    </span>
  );
}
