import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import IntroLoader from "./components/IntroLoader.jsx";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import SocialRail from "./components/SocialRail.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Works from "./components/Works.jsx";
import Experience from "./components/Experience.jsx";
import Contact from "./components/Contact.jsx";

export default function Portfolio() {
  const location = useLocation();
  const [dark, setDark] = useState(() => {
    try { return localStorage.getItem("pf_theme") !== "light"; } catch { return true; }
  });
  const [showIntro, setShowIntro] = useState(() => {
    try {
      return sessionStorage.getItem("intro_played") !== "1";
    } catch {
      return true;
    }
  });
  const [revealed, setRevealed] = useState(!showIntro);

  const handleIntroDone = () => {
    try {
      sessionStorage.setItem("intro_played", "1");
    } catch {}
    setShowIntro(false);
    setRevealed(true);
  };

  useEffect(() => {
    try { localStorage.setItem("pf_theme", dark ? "dark" : "light"); } catch {}
  }, [dark]);

  useEffect(() => {
    if (!location.hash) return;
    const t = setTimeout(() => {
      const el = document.querySelector(location.hash);
      el?.scrollIntoView();
    }, 60);
    return () => clearTimeout(t);
  }, [location.hash]);

  return (
    <div className={`pf-root ${dark ? "" : "theme-light"}`}>
      <div className="ambient" />
      {showIntro && <IntroLoader onDone={handleIntroDone} />}
      <Navbar setDark={setDark} revealed={revealed} />
      <Hero revealed={revealed} />
      <SocialRail revealed={revealed} />
      <About />
      <Skills />
      <Works />
      <Experience />
      <Contact />
    </div>
  );
}
