import React from "react";
import { motion, useTransform } from "framer-motion";
import SkillMark from "./SkillMark.jsx";

const ROW = 130; // px vertical spacing between stops

export default function SkillStop({ skill, index, activeIndex, side }) {
  const diff = useTransform(activeIndex, (v) => index - v);

  const y = useTransform(diff, (d) => `${d * ROW}px`);
  const titleOpacity = useTransform(diff, (d) => Math.max(0, 1 - Math.abs(d) * 0.72));
  const titleBlur = useTransform(diff, (d) => Math.min(6, Math.abs(d) * 4));
  const titleFilter = useTransform(titleBlur, (b) => `blur(${b}px)`);
  const detailOpacity = useTransform(diff, (d) => Math.max(0, 1 - Math.abs(d) * 2.6));
  const detailY = useTransform(diff, (d) => `${Math.abs(d) * 14}px`);

  return (
    <motion.div
      className={`skill-stop skill-stop--${side}`}
      style={{ y, opacity: titleOpacity, filter: titleFilter }}
    >
      <div className="skill-stop-head">
        <span className="skill-stop-num">{String(index + 1).padStart(2, "0")}</span>
        <span className="skill-stop-icon"><SkillMark skill={skill} size={22} /></span>
      </div>
      <h3 className="skill-stop-title display-font">{skill.label}</h3>
      <motion.p className="skill-stop-desc" style={{ opacity: detailOpacity, y: detailY }}>
        {skill.description}
      </motion.p>
    </motion.div>
  );
}
