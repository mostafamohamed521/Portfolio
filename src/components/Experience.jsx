import React, { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { WORKS } from "../data/works.js";
import Reveal from "./Reveal.jsx";

function ExpItem({ w }) {
  const ref = useRef(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || !("IntersectionObserver" in window)) {
      setActive(true);
      return;
    }
    // a thin band near the vertical middle of the viewport — only the
    // item currently passing through it is "active"
    const observer = new IntersectionObserver(
      ([entry]) => setActive(entry.isIntersecting),
      { rootMargin: "-42% 0px -42% 0px", threshold: 0 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`exp-item ${active ? "is-active" : ""}`}>
      <span className="exp-dot" />
      <span className="exp-item-role">{w.role}</span>
      <h3 className="exp-item-name display-font">{w.name}</h3>
      <div className="exp-item-details">
        <p className="exp-item-desc">{w.summary}</p>
        <div className="about-tags exp-item-stack">
          {w.stack.slice(0, 4).map((s) => (
            <span key={s} className="about-tag">{s}</span>
          ))}
        </div>
        <Link to={`/works/${w.id}`} className="exp-item-link">
          View project <ArrowUpRight size={14} />
        </Link>
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="exp">
      <Reveal className="exp-head">
        <span className="about-kicker">Experience</span>
        <h2 className="exp-title display-font">Projects, end to end.</h2>
      </Reveal>

      <div className="exp-timeline">
        {WORKS.map((w) => (
          <ExpItem w={w} key={w.id} />
        ))}
      </div>
    </section>
  );
}
