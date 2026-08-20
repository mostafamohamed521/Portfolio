import React from "react";
import { ArrowRight, Download, User, Code2 } from "lucide-react";
import { SIGNATURE, ROLE, PROFILE_IMAGE, CV_URL } from "../data/skills.js";

export default function Hero({ revealed }) {
  return (
    <header id="home" className={`hero ${revealed ? "reveal" : ""}`}>
      <div className="hero-text">
        <p className="hero-hi">Hi there, I'm</p>
        <h1 className="hero-name display-font">{SIGNATURE}</h1>
        <p className="hero-role">I'm a {ROLE}</p>
        <p className="hero-tagline">
          I build full-stack applications with React on the frontend and Django or .NET on the
          backend — from database to API to a polished UI in production.
        </p>
        <div className="hero-actions">
          <a href="#contact" className="btn btn-primary">
            Get In Touch <ArrowRight size={16} />
          </a>
          <a href={CV_URL} download className="btn btn-outline">
            Download CV <Download size={16} />
          </a>
        </div>
      </div>

      <div className="hero-visual">
        <span className="hero-ring" />
        <span className="hero-blob" />
        <span className="hero-dot d1" />
        <span className="hero-dot d2" />
        <span className="hero-dot d3" />
        <span className="hero-dot d4" />

        <div className="hero-photo-wrap">
          <div className="hero-photo">
            {PROFILE_IMAGE ? <img src={PROFILE_IMAGE} alt={SIGNATURE} /> : <User className="ph-icon" />}
          </div>
          <span className="hero-badge">
            <Code2 size={14} /> {ROLE}
          </span>
        </div>
        <span className="hero-sig signature-font">{SIGNATURE}</span>
      </div>

      <div className="scroll-cue">
        <span className="scroll-cue-line" />
        Scroll
      </div>
    </header>
  );
}
