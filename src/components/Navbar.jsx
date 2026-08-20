import React, { useState } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";
import { NAV_LINKS, SIGNATURE } from "../data/skills.js";

export default function Navbar({ setDark, revealed }) {
  const [open, setOpen] = useState(false);

  return (
    <nav className={`navbar ${revealed ? "reveal" : ""}`}>
      <span className="nav-brand signature-font">{SIGNATURE}</span>

      <ul className="nav-links">
        {NAV_LINKS.map((l) => (
          <li key={l}>
            <a href={`#${l.toLowerCase()}`}>{l}</a>
          </li>
        ))}
      </ul>

      <div className="nav-right">
        <button className="theme-toggle" onClick={() => setDark((d) => !d)} aria-label="Toggle theme">
          <Sun size={17} className="icon-sun" />
          <Moon size={17} className="icon-moon" />
        </button>
        <button className="nav-menu-btn" onClick={() => setOpen((o) => !o)} aria-label="Menu">
          {open ? <X size={19} /> : <Menu size={19} />}
        </button>
      </div>

      <div className={`nav-mobile-panel ${open ? "open" : ""}`}>
        {NAV_LINKS.map((l) => (
          <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)}>
            {l}
          </a>
        ))}
      </div>
    </nav>
  );
}
