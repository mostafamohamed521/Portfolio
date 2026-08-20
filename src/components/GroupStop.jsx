import React from "react";
import { motion, useTransform } from "framer-motion";
import { SKILLS } from "../data/skills.js";
import SkillMark from "./SkillMark.jsx";

export default function GroupStop({ group, index, activeIndex }) {
  const diff = useTransform(activeIndex, (v) => index - v);
  const opacity = useTransform(diff, (d) => Math.max(0, 1 - Math.abs(d) * 1.35));
  const scale = useTransform(diff, (d) => 1 - Math.min(Math.abs(d), 1) * 0.08);
  const y = useTransform(diff, (d) => `${d * 30}px`);
  const blur = useTransform(diff, (d) => Math.min(8, Math.abs(d) * 10));
  const filter = useTransform(blur, (b) => `blur(${b}px)`);

  const groupSkills = group.ids.map((id) => SKILLS.find((s) => s.id === id)).filter(Boolean);

  return (
    <motion.div className="group-stop" style={{ opacity, scale, y, filter }}>
      <span className="group-stop-num">{String(index + 1).padStart(2, "0")}</span>
      <h3 className="group-stop-title display-font">{group.title}</h3>
      <p className="group-stop-desc">{group.description}</p>
      <div className="group-stop-chips">
        {groupSkills.map((s) => (
          <span key={s.id} className="group-chip">
            <SkillMark skill={s} size={16} />
            {s.label}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
