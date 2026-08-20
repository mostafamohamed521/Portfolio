import React from "react";
import Reveal from "./Reveal.jsx";

/** Lightweight stub so the navbar has somewhere to scroll to — replace with the real section build. */
export default function Placeholder({ id, title }) {
  return (
    <Reveal
      as="section"
      id={id}
      className="placeholder-section"
    >
      <div className="placeholder-inner">
        <span className="placeholder-line" />
        <h2 className="display-font placeholder-title">{title}</h2>
        <p className="placeholder-note">Section coming in the next build phase.</p>
      </div>
    </Reveal>
  );
}
