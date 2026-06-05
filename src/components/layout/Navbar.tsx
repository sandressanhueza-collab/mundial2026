"use client";

import { useEffect, useState } from "react";

const NAV_ITEMS = [
  { id: "hero", label: "Inicio" },
  { id: "calendario", label: "Calendario" },
  { id: "fixture", label: "Fixture" },
  { id: "destacados", label: "Destacados" },
  { id: "predicciones", label: "Predicciones" },
  { id: "estadios", label: "Estadios" },
];

export default function Navbar() {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + 80;
      for (const { id } of NAV_ITEMS) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (scrollY >= el.offsetTop && scrollY < el.offsetTop + el.offsetHeight) {
          setActive(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 200,
        background: "rgba(7,7,14,0.85)",
        backdropFilter: "blur(24px) saturate(180%)",
        borderBottom: "1px solid var(--border)",
        display: "flex",
        alignItems: "center",
        gap: 0,
        padding: "0 clamp(16px,4vw,40px)",
        height: 56,
      }}
    >
      <div
        className="condensed"
        style={{
          fontSize: 19,
          fontWeight: 900,
          color: "var(--gold)",
          letterSpacing: "2.5px",
          marginRight: "auto",
          display: "flex",
          alignItems: "center",
          gap: 8,
        }}
      >
        <span
          style={{
            width: 6,
            height: 6,
            background: "var(--gold)",
            borderRadius: "50%",
            display: "inline-block",
            animation: "pulse-dot 2s infinite",
          }}
        />
        MUNDIAL 2026
      </div>

      <div style={{ display: "flex", alignItems: "stretch", gap: 0 }}>
        {NAV_ITEMS.map(({ id, label }) => (
          <button
            key={id}
            onClick={() => scrollTo(id)}
            style={{
              background: "none",
              border: "none",
              color: active === id ? "var(--gold)" : "var(--txt2)",
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: ".8px",
              textTransform: "uppercase",
              padding: "0 14px",
              cursor: "pointer",
              height: 56,
              borderBottom: active === id ? "2px solid var(--gold)" : "2px solid transparent",
              transition: "all .2s",
              whiteSpace: "nowrap",
            }}
          >
            {label}
          </button>
        ))}
      </div>

      <button
        onClick={() => scrollTo("calendario")}
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 6,
          background: "var(--gold)",
          color: "#000",
          fontFamily: "'DM Sans', sans-serif",
          fontWeight: 700,
          fontSize: 11,
          letterSpacing: ".5px",
          padding: "7px 16px",
          borderRadius: "100px",
          border: "none",
          cursor: "pointer",
          marginLeft: 16,
          transition: "all .2s",
          whiteSpace: "nowrap",
        }}
      >
        📅 Calendario
      </button>
    </nav>
  );
}
