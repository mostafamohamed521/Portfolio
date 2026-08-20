import React from "react";
import { ArrowUpRight, Mail, Phone, MapPin, Clock } from "lucide-react";
import { SOCIALS, SIGNATURE } from "../data/skills.js";
import SkillMark from "./SkillMark.jsx";
import Reveal from "./Reveal.jsx";

/** Replace these with your real details. */
const EMAIL = "mostafamohamed92895@gmail.com";
const PHONE_DISPLAY = "+20 106 569 2895";
const WHATSAPP_HREF = SOCIALS.find((s) => s.id === "whatsapp")?.href || "#";
const LOCATION = "Mansoura, Egypt"; // adjust if you're based elsewhere
const AVAILABILITY = "Open to internships & junior full-stack roles";

const INFO_ROWS = [
  { icon: Mail, label: "Email", value: EMAIL, href: `mailto:${EMAIL}` },
  { icon: Phone, label: "Phone / WhatsApp", value: PHONE_DISPLAY, href: WHATSAPP_HREF },
  { icon: MapPin, label: "Location", value: LOCATION },
  { icon: Clock, label: "Availability", value: AVAILABILITY },
];

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact-layout">
        <Reveal className="contact-intro">
          <span className="about-kicker">Contact</span>
          <h2 className="contact-title display-font">
            Let's build <em>something reliable.</em>
          </h2>
          <p className="contact-text">
            Open to internships and junior full-stack roles. The fastest way to reach me is email —
            I'll get back to you soon.
          </p>
          <a href={`mailto:${EMAIL}`} className="btn btn-primary contact-cta">
            <Mail size={16} /> Send an Email <ArrowUpRight size={16} />
          </a>
        </Reveal>

        <Reveal className="contact-card">
          {INFO_ROWS.map((row) => (
            <div className="contact-row" key={row.label}>
              <row.icon size={17} className="contact-row-icon" />
              <div>
                <span className="project-side-label">{row.label}</span>
                {row.href ? (
                  <a href={row.href} target={row.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="contact-row-value contact-row-link">
                    {row.value}
                  </a>
                ) : (
                  <p className="contact-row-value">{row.value}</p>
                )}
              </div>
            </div>
          ))}

          <div className="contact-socials">
            {SOCIALS.map((s) => (
              <a key={s.id} href={s.href} target="_blank" rel="noreferrer" className="contact-social" title={s.label}>
                <SkillMark skill={s} size={17} />
              </a>
            ))}
          </div>
        </Reveal>
      </div>

      <footer className="site-footer">
        <span>© {new Date().getFullYear()} {SIGNATURE}.</span>
        <span>Built from scratch, in React.</span>
      </footer>
    </section>
  );
}
