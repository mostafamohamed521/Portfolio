import React, { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { User } from "lucide-react";
import { SKILLS, SIGNATURE, PROFILE_IMAGE } from "../data/skills.js";
import SkillMark from "./SkillMark.jsx";

/**
 * Intro sequence:
 *
 *  scatter    -> every skill icon pops in, one after another, at a random spot
 *  ring       -> they drift together and settle into a perfect ring
 *  lines      -> a thread is drawn from every icon to the center
 *  absorb     -> each icon is pulled inward along its own thread and shrinks away
 *  image      -> the profile photo grows out of the center, as if built from the icons
 *  signature  -> the name is "signed" letter by letter beneath the photo
 *  shrink     -> the photo settles a little smaller (quick)
 *  grow       -> the same circle expands until it covers the whole screen — the wipe that reveals home
 *  exit       -> the loader fades, revealing the site underneath
 */
export default function IntroLoader({ onDone }) {
  const [phase, setPhase] = useState("scatter");
  const N = SKILLS.length;
  const timers = useRef([]);

  const finish = useCallback(() => {
    timers.current.forEach(clearTimeout);
    setPhase("shrink");
    timers.current.push(
      setTimeout(() => {
        setPhase("grow");
        timers.current.push(
          setTimeout(() => {
            setPhase("exit");
            timers.current.push(setTimeout(onDone, 450));
          }, 620)
        );
      }, 260)
    );
  }, []);

  // random scatter spot per icon — evenly spread using a jittered sector
  // grid so icons cover the whole stage instead of clumping together
  const scatterPositions = useMemo(() => {
    const cols = 6;
    const cellW = 100 / cols;
    const rows = Math.ceil(N / cols);
    const cellH = 100 / rows;
    return SKILLS.map((_, i) => {
      const col = i % cols;
      const row = Math.floor(i / cols);
      const cx = -50 + cellW * (col + 0.5);
      const cy = -46 + cellH * (row + 0.5);
      const jitterX = (Math.random() - 0.5) * cellW * 0.7;
      const jitterY = (Math.random() - 0.5) * cellH * 0.7;
      return { x: cx + jitterX, y: cy + jitterY };
    });
  }, [N]);

  useEffect(() => {
    const reduced = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduced) { finish(); return; }

    const push = (fn, ms) => timers.current.push(setTimeout(fn, ms));

    const T_SCATTER = N * 100 + 700;
    const T_RING = T_SCATTER + 1450;
    const T_LINES = T_RING + 1100;
    const T_ABSORB = T_LINES + 1000;
    const T_IMAGE = T_ABSORB + 1000;
    const T_SIG = T_IMAGE + 800;
    const T_FINISH = T_SIG + SIGNATURE.length * 110 + 500; // no extra hold after typing finishes

    push(() => setPhase("ring"), T_SCATTER);
    push(() => setPhase("lines"), T_RING);
    push(() => setPhase("absorb"), T_LINES);
    push(() => setPhase("image"), T_ABSORB);
    push(() => setPhase("signature"), T_IMAGE);
    push(() => finish(), T_FINISH);

    return () => timers.current.forEach(clearTimeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const radius = "min(40vw,230px)";
  const stage = 600;
  const center = stage / 2;
  const isRinged = ["ring", "lines"].includes(phase);
  const isAbsorbed = ["absorb", "image", "signature", "shrink", "grow", "exit"].includes(phase);
  const lineVisible = phase === "lines";
  const coreShown = ["image", "signature", "shrink", "grow", "exit"].includes(phase);
  const isGrown = ["grow", "exit"].includes(phase);

  return (
    <div className={`intro ${phase === "exit" ? "exit" : ""}`}>
      <div className="intro-stage">
        <svg className="intro-lines" viewBox={`0 0 ${stage} ${stage}`}>
          {SKILLS.map((s, i) => {
            const angle = (i / N) * Math.PI * 2 - Math.PI / 2;
            const x = center + Math.cos(angle) * 226;
            const y = center + Math.sin(angle) * 226;
            const cls = isAbsorbed ? "absorb" : lineVisible ? "show" : "";
            return (
              <line
                key={s.id}
                x1={x} y1={y} x2={center} y2={center}
                className={cls}
                style={{ transitionDelay: `${i * 16}ms` }}
              />
            );
          })}
        </svg>

        {SKILLS.map((s, i) => {
          const angle = (i / N) * Math.PI * 2 - Math.PI / 2;
          const scatter = scatterPositions[i];
          let ml, mt;
          if (isAbsorbed) { ml = 0; mt = 0; }
          else if (isRinged) {
            ml = `calc(${Math.cos(angle)} * ${radius})`;
            mt = `calc(${Math.sin(angle)} * ${radius})`;
          } else {
            ml = `${scatter.x}%`;
            mt = `${scatter.y}%`;
          }
          return (
            <div
              key={s.id}
              className={`ring-icon ${isAbsorbed ? "absorb" : ""}`}
              style={{
                left: "50%",
                top: "50%",
                marginLeft: ml,
                marginTop: mt,
                animationDelay: `${i * 100}ms`,
                transitionDelay: isAbsorbed ? `${i * 26}ms` : `${i * 22}ms`,
              }}
              title={s.label}
            >
              <SkillMark skill={s} size={22} />
            </div>
          );
        })}

        <div className={`core-glow ${coreShown ? "show" : ""}`} />

        <div className={`intro-core ${coreShown ? "show" : ""} ${isGrown ? "grow" : ""}`}>
          <div className={`intro-photo ${phase === "shrink" ? "shrink" : ""} ${isGrown ? "grow" : ""}`}>
            {PROFILE_IMAGE ? (
              <img src={PROFILE_IMAGE} alt={SIGNATURE} />
            ) : (
              <User className="ph-icon" style={{ color: "var(--muted)", width: 64, height: 64 }} />
            )}
          </div>
          <div className={`intro-sig signature-font ${["signature", "shrink", "grow"].includes(phase) ? "show" : ""}`}>
            {SIGNATURE.split("").map((ch, i) => (
              <span
                key={i}
                style={{
                  transitionDelay: `${i * 105}ms`,
                  opacity: ["signature", "shrink", "grow"].includes(phase) ? 1 : 0,
                  transform: ["signature", "shrink", "grow"].includes(phase) ? "translateY(0)" : "translateY(10px)",
                }}
              >
                {ch === " " ? "\u00A0" : ch}
              </span>
            ))}
          </div>
        </div>
      </div>
      <button className="intro-skip" onClick={finish}>Skip</button>
    </div>
  );
}
