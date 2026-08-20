import React, { useEffect, useRef, useState } from "react";
import { User } from "lucide-react";
import { PROFILE_IMAGE, SIGNATURE } from "../data/skills.js";

const FOCUS_AREAS = [
  "Full-Stack Development",
  "Django & REST APIs",
  ".NET",
  "React & TypeScript",
  "Security-Conscious Engineering",
];

export default function About() {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    if (!("IntersectionObserver" in window)) {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => setInView(e.isIntersecting)),
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className={`about ${inView ? "in-view" : ""}`}>
      <div className="about-visual">
        <div className="about-photo-frame">
          {PROFILE_IMAGE ? (
            <img src={PROFILE_IMAGE} alt={SIGNATURE} />
          ) : (
            <User className="ph-icon" />
          )}
        </div>
      </div>

      <div className="about-content">
        <span className="about-kicker">About</span>
        <h2 className="about-heading display-font">
          Full-stack developer, building <em>systems end to end</em>.
        </h2>
        <p className="about-text">
          I'm a final-year Computer Science student (Software Development track) at Mansoura
          University, working across React on the frontend paired with Django or .NET on the
          backend. I've shipped seven real projects — from solo builds with live deployments and
          security-hardening passes, to team projects covering frontend and SDK development.
        </p>
        <div className="about-tags">
          {FOCUS_AREAS.map((f) => (
            <span key={f} className="about-tag">{f}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
