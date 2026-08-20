import React, { useEffect, useRef, useState } from "react";

/**
 * Wraps a section so it fades + rises into view the same way About does,
 * giving every section-to-section scroll the same cinematic reveal.
 * Includes a fallback timer so a section can never get stuck hidden.
 */
export default function Reveal({ as: Tag = "div", className = "", children, ...rest }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
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
    <Tag ref={ref} className={`reveal-block ${inView ? "in-view" : ""} ${className}`} {...rest}>
      {children}
    </Tag>
  );
}
