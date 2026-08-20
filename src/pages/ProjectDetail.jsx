import React, { useEffect, useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, ExternalLink, Github, Code2 } from "lucide-react";
import { WORKS } from "../data/works.js";
import { SIGNATURE } from "../data/skills.js";

export default function ProjectDetail() {
  const { id } = useParams();
  const project = WORKS.find((w) => w.id === id);
  const [dark] = useState(() => {
    try { return localStorage.getItem("pf_theme") !== "light"; } catch { return true; }
  });
  const [heroIdx, setHeroIdx] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    setHeroIdx(0);
  }, [id]);

  if (!project) return <Navigate to="/" replace />;

  const heroImages = project.images?.length ? project.images : [""];
  const heroImg = heroImages[heroIdx];
  const galleryShots = project.images?.length ? project.images : ["", "", "", ""];

  return (
    <div
      key={id}
      className={`pf-root project-page ${dark ? "" : "theme-light"}`}
      style={project.color ? { "--project-tint": `#${project.color}` } : undefined}
    >
      {/* ---- Hero banner: project photo as full-bleed background ---- */}
      <section className="pd-hero">
        <div className="pd-hero-bg">
          {heroImg ? (
            <img src={heroImg} alt={project.name} />
          ) : (
            <div className="pd-hero-fallback" />
          )}
        </div>
        <div className="pd-hero-scrim" />

        {heroImages.length > 1 && (
          <>
            <button className="pd-hero-nav left" onClick={() => setHeroIdx((i) => (i - 1 + heroImages.length) % heroImages.length)} aria-label="Previous">
              <ArrowLeft size={20} />
            </button>
            <button className="pd-hero-nav right" onClick={() => setHeroIdx((i) => (i + 1) % heroImages.length)} aria-label="Next">
              <ArrowRight size={20} />
            </button>
          </>
        )}

        <Link to="/#works" className="pd-back">
          <ArrowLeft size={16} /> Back to Works
        </Link>

        <div className="pd-hero-content">
          <h1 className="pd-hero-title display-font">{project.name}</h1>
          <div className="pd-badges">
            <span className="pd-badge pd-badge--category">{project.category}</span>
            <span className="pd-badge pd-badge--tag">{project.tag}</span>
          </div>
          <div className="pd-pills">
            {project.stack.slice(0, 4).map((s) => (
              <span key={s} className="pd-pill">{s}</span>
            ))}
          </div>
          <p className="pd-meta-line">{project.role} · {project.category} · Personal Project</p>

          <div className="pd-hero-actions">
            {project.liveUrl ? (
              <a href={project.liveUrl} target="_blank" rel="noreferrer" className="btn btn-primary">
                Live Demo <ExternalLink size={16} />
              </a>
            ) : (
              <span className="btn btn-primary btn-disabled">Live Demo — soon</span>
            )}
            {project.repoUrl ? (
              <a href={project.repoUrl} target="_blank" rel="noreferrer" className="btn btn-outline pd-btn-dark">
                View Code <Github size={16} />
              </a>
            ) : (
              <span className="btn btn-outline pd-btn-dark btn-disabled">View Code — private</span>
            )}
          </div>
        </div>
      </section>

      {/* ---- Body: details + screenshots on the left, sticky summary card on the right ---- */}
      <main className="pd-body">
        <div className="pd-main">
          <section className="pd-section">
            <h2 className="project-eyebrow">The Challenge</h2>
            <p className="project-lede">{project.overview}</p>
            <p>{project.problem}</p>
          </section>

          <section className="pd-section">
            <h2 className="project-eyebrow">What I Focused On</h2>
            <ol className="project-focus-list">
              {project.highlights.map((h, i) => (
                <li key={i}>
                  <span className="project-focus-num">{String(i + 1).padStart(2, "0")}</span>
                  <span>{h}</span>
                </li>
              ))}
            </ol>
          </section>

          <section className="pd-section">
            <h2 className="project-eyebrow">Screenshots</h2>
            <div className="pd-gallery">
              {galleryShots.map((src, i) => (
                <div key={i} className="pd-shot">
                  {src ? <img src={src} alt="" /> : <Code2 className="project-shot-icon" />}
                </div>
              ))}
            </div>
          </section>
        </div>

        <aside className="pd-side">
          <div className="pd-side-card">
            <span className="nav-brand signature-font pd-side-sig">{SIGNATURE}</span>
            <h3 className="pd-side-title display-font">{project.name}</h3>
            <p className="pd-side-summary">{project.summary}</p>

            <span className="project-side-label">Technologies</span>
            <div className="about-tags pd-side-stack">
              {project.stack.map((s) => (
                <span key={s} className="about-tag">{s}</span>
              ))}
            </div>

            {project.liveUrl ? (
              <a href={project.liveUrl} target="_blank" rel="noreferrer" className="btn btn-primary project-live-btn">
                Live Demo <ExternalLink size={16} />
              </a>
            ) : (
              <span className="btn btn-primary btn-disabled project-live-btn">Live Demo — coming soon</span>
            )}
          </div>
        </aside>
      </main>
    </div>
  );
}
