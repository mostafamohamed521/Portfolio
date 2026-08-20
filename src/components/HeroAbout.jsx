import React, { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { ArrowRight, Download, User } from "lucide-react";
import { SIGNATURE, PROFILE_IMAGE, CV_URL } from "../data/skills.js";

const FOCUS_AREAS = [
  "Backend API Engineering",
  "Software Architecture",
  "Database Schema Design",
  "Testing at System Boundaries",
  "Authentication Design",
];

/**
 * One continuous scene: Home -> About. The photo never unmounts and never
 * plays a one-shot animation — its position, scale, rotation and blur are
 * pure functions of scrollYProgress (Framer Motion's useScroll), so
 * scrolling up reverses the motion exactly, frame for frame, for free.
 */
export default function HeroAbout({ revealed }) {
  const wrapRef = useRef(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: wrapRef,
    offset: ["start start", "end end"],
  });

  // top-right (Home) -> bottom-left (About)
  const photoX = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : ["24vw", "-27vw"]);
  const photoY = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : ["-16vh", "17vh"]);
  const photoScale = useTransform(scrollYProgress, [0, 1], reduceMotion ? [1, 1] : [1, 0.8]);
  const photoRotate = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [0, -4]);
  const photoBlur = useTransform(scrollYProgress, [0, 0.45, 0.55, 1], [0, 1.5, 1.5, 0]);
  const photoFilter = useTransform(photoBlur, (v) => `blur(${v}px)`);

  const heroOpacity = useTransform(scrollYProgress, [0, 0.3, 0.4], [1, 0, 0]);
  const heroY = useTransform(scrollYProgress, [0, 0.35], reduceMotion ? [0, 0] : [0, -26]);

  const aboutOpacity = useTransform(scrollYProgress, [0.55, 0.82, 1], [0, 1, 1]);
  const aboutY = useTransform(scrollYProgress, [0.5, 0.85], reduceMotion ? [0, 0] : [26, 0]);

  return (
    <div className="scene-wrap" ref={wrapRef}>
      <span id="about" className="scroll-anchor" aria-hidden="true" />
      <div className="scene-sticky">
        <motion.div
          className="scene-photo-outer"
          style={{ x: photoX, y: photoY, scale: photoScale, rotate: photoRotate, filter: photoFilter }}
        >
          <div className="hero-photo-wrap">
            <div className={`hero-photo ${revealed ? "lit" : "dim"}`}>
              <div className="base-layer">
                {PROFILE_IMAGE ? <img src={PROFILE_IMAGE} alt={SIGNATURE} /> : <User className="ph-icon" />}
              </div>
              <div className="bright-layer">
                {PROFILE_IMAGE ? <img src={PROFILE_IMAGE} alt={SIGNATURE} /> : <User className="ph-icon" />}
              </div>
            </div>
          </div>
          <span className="hero-sig signature-font">{SIGNATURE}</span>
        </motion.div>

        <motion.div className="scene-hero-text" style={{ opacity: heroOpacity, y: heroY }}>
          <p className="hero-hi">Hi there, I'm</p>
          <h1 className="hero-name display-font">{SIGNATURE}</h1>
          <p className="hero-role">I'm a Software Engineer</p>
          <p className="hero-tagline">
            I build reliable backend systems and clean, well-structured web applications —
            from database to API to production.
          </p>
          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary">Get In Touch <ArrowRight size={16} /></a>
            <a href={CV_URL} download className="btn btn-outline">Download CV <Download size={16} /></a>
          </div>
        </motion.div>

        <motion.div className="scene-about-text" style={{ opacity: aboutOpacity, y: aboutY }}>
          <span className="about-kicker">About</span>
          <h2 className="about-heading display-font">
            Backend engineer, focused on <em>systems that hold up</em>.
          </h2>
          <p className="about-text">
            I work primarily in Laravel/PHP, designing layered, boundary-conscious systems —
            thin controllers, isolated business logic, and a data layer that stays honest about
            what it owns. I write decisions down, including the alternatives I didn't choose,
            and I'd rather verify against real behavior than trust an assumption.
          </p>
          <div className="about-tags">
            {FOCUS_AREAS.map((f) => (
              <span key={f} className="about-tag">{f}</span>
            ))}
          </div>
        </motion.div>

        <div className={`scroll-cue ${revealed ? "reveal" : ""}`}>
          <span className="scroll-cue-line" />
          Scroll
        </div>
      </div>
    </div>
  );
}
