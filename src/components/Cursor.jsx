import React, { useEffect, useRef, useState } from "react";

/** Replaces the default arrow with a small circle that grows over links/buttons. Desktop (fine pointer) only. */
export default function Cursor() {
  const ref = useRef(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    setEnabled(mq.matches);
    const onChange = () => setEnabled(mq.matches);
    mq.addEventListener?.("change", onChange);
    return () => mq.removeEventListener?.("change", onChange);
  }, []);

  useEffect(() => {
    if (!enabled) return;
    const el = ref.current;
    if (!el) return;

    const move = (e) => {
      el.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
    };
    const over = (e) => {
      if (e.target.closest("a, button, [data-cursor-hover]")) el.classList.add("hover");
    };
    const out = (e) => {
      if (e.target.closest("a, button, [data-cursor-hover]")) el.classList.remove("hover");
    };

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseover", over);
    document.addEventListener("mouseout", out);
    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", over);
      document.removeEventListener("mouseout", out);
    };
  }, [enabled]);

  if (!enabled) return null;
  return <div ref={ref} className="custom-cursor" />;
}
