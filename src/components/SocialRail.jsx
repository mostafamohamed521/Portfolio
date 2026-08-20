import React, { useEffect, useState } from "react";
import { SOCIALS } from "../data/skills.js";
import SkillMark from "./SkillMark.jsx";

/** Fixed vertical strip of contact icons, right edge of the viewport. Pops in one after another, same feel as the intro. */
export default function SocialRail({ revealed }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!revealed) return;
    const t = setTimeout(() => setShow(true), 500);
    return () => clearTimeout(t);
  }, [revealed]);

  return (
    <div className={`social-rail ${show ? "show" : ""}`}>
      <span className="social-rail-line" />
      {SOCIALS.map((s, i) => (
        <a
          key={s.id}
          href={s.href}
          target="_blank"
          rel="noreferrer"
          aria-label={s.label}
          title={s.label}
          style={{ transitionDelay: `${i * 90}ms` }}
        >
          <SkillMark skill={s} size={18} />
        </a>
      ))}
      <span className="social-rail-line" />
    </div>
  );
}
