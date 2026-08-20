import React, { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { SKILL_GROUPS } from "../data/skills.js";
import GroupStop from "./GroupStop.jsx";

const ROW_VH = 80; // scroll distance dedicated to each group

export default function Skills() {
  const wrapRef = useRef(null);
  const reduceMotion = useReducedMotion();
  const N = SKILL_GROUPS.length;

  const { scrollYProgress } = useScroll({
    target: wrapRef,
    offset: ["start start", "end end"],
  });

  const activeIndex = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [0, N - 1]);

  return (
    <div className="skills-wrap" ref={wrapRef} style={{ height: `${N * ROW_VH + 100}vh` }}>
      <span id="skills" className="scroll-anchor" style={{ top: "2%" }} aria-hidden="true" />
      <div className="skills-sticky">
        <span className="about-kicker skills-kicker">Skills</span>

        <div className="group-stops">
          {SKILL_GROUPS.map((group, i) => (
            <GroupStop key={group.id} group={group} index={i} activeIndex={activeIndex} />
          ))}
        </div>

        <div className="skills-dots">
          {SKILL_GROUPS.map((_, i) => (
            <DotMarker key={i} index={i} activeIndex={activeIndex} />
          ))}
        </div>
      </div>
    </div>
  );
}

function DotMarker({ index, activeIndex }) {
  const diff = useTransform(activeIndex, (v) => index - v);
  const opacity = useTransform(diff, (d) => Math.max(0.25, 1 - Math.abs(d) * 0.75));
  const scale = useTransform(diff, (d) => (Math.abs(d) < 0.5 ? 1.4 : 1));
  return <motion.span className="skills-dot" style={{ opacity, scale }} />;
}
