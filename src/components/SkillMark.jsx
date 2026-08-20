import React, { useState } from "react";

/** Renders the real brand logo (Simple Icons CDN) or a fallback lucide icon for concept skills. */
export default function SkillMark({ skill, size = 20 }) {
  const [failed, setFailed] = useState(false);

  if (skill.slug && !failed) {
    return (
      <img
        src={`https://cdn.simpleicons.org/${skill.slug}/${skill.color}`}
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
  // to a colored initial badge so nothing ever renders as a broken image.
  if (skill.Icon) {
    const Icon = skill.Icon;
    return <Icon size={size} color={`#${skill.color}`} strokeWidth={2} />;
  }
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: size,
        height: size,
        fontSize: size * 0.55,
        fontWeight: 700,
        fontFamily: "inherit",
        color: `#${skill.color}`,
        lineHeight: 1,
      }}
      aria-label={skill.label}
      title={skill.label}
    >
      {skill.label.charAt(0)}
    </span>
  );
}
