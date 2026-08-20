import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Code2, ArrowUpRight } from "lucide-react";
import { WORKS, WORK_FILTERS } from "../data/works.js";

export default function Works() {
  const [filter, setFilter] = useState("All");
  const [active, setActive] = useState(0);

  const items = useMemo(
    () => (filter === "All" ? WORKS : WORKS.filter((w) => w.category === filter)),
    [filter]
  );

  const go = (dir) => {
    setActive((i) => (i + dir + items.length) % items.length);
  };

  const changeFilter = (f) => {
    setFilter(f);
    setActive(0);
  };

  return (
    <section id="works" className="works">
      <div className="works-head">
        <div>
          <span className="about-kicker">Selected</span>
          <h2 className="works-title display-font">Works.</h2>
        </div>
        <div className="works-filters">
          {WORK_FILTERS.map((f) => (
            <button
              key={f}
              className={`works-filter ${filter === f ? "active" : ""}`}
              onClick={() => changeFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <div className="works-stage">
        {items.map((w, i) => {
          let offset = i - active;
          const half = items.length / 2;
          if (offset > half) offset -= items.length;
          if (offset < -half) offset += items.length;
          if (Math.abs(offset) > 2) return null;
          const isActive = offset === 0;
          return (
            <div
              key={w.id}
              className={`work-card ${isActive ? "is-active" : ""}`}
              style={{
                "--offset": offset,
                "--abs-offset": Math.min(2, Math.abs(offset)),
                zIndex: 10 - Math.abs(offset),
              }}
              onClick={() => !isActive && setActive(i)}
            >
              <div className="work-card-window">
                <div className="work-card-bar">
                  <span /><span /><span />
                </div>
                <div className="work-card-screen">
                  {w.images?.[0] ? <img src={w.images[0]} alt={w.name} /> : <Code2 className="work-card-icon" />}
                </div>
                {isActive && (
                  <Link to={`/works/${w.id}`} className="work-card-view">
                    View Project <ArrowUpRight size={14} />
                  </Link>
                )}
              </div>
              <p className="work-card-name">{w.name}</p>
              <span className="work-card-tag">{w.tag}</span>
            </div>
          );
        })}
      </div>

      <div className="works-nav">
        <button className="works-arrow" onClick={() => go(-1)} aria-label="Previous"><ArrowLeft size={18} /></button>
        <div className="works-dots">
          {items.map((w, i) => (
            <button
              key={w.id}
              className={`works-dot ${i === active ? "active" : ""}`}
              onClick={() => setActive(i)}
              aria-label={w.name}
            />
          ))}
        </div>
        <button className="works-arrow" onClick={() => go(1)} aria-label="Next"><ArrowRight size={18} /></button>
      </div>
    </section>
  );
}
