"use client";

import { useEffect, useState } from "react";

function useCountdown(target: Date) {
  const [time, setTime] = useState({ d: "00", h: "00", m: "00", s: "00" });

  useEffect(() => {
    const tick = () => {
      const diff = target.getTime() - Date.now();
      if (diff <= 0) { setTime({ d: "00", h: "00", m: "00", s: "00" }); return; }
      const d = Math.floor(diff / 86400000);
      const h = Math.floor((diff % 86400000) / 3600000);
      const m = Math.floor((diff % 3600000) / 60000);
      const s = Math.floor((diff % 60000) / 1000);
      setTime({
        d: String(d).padStart(2, "0"),
        h: String(h).padStart(2, "0"),
        m: String(m).padStart(2, "0"),
        s: String(s).padStart(2, "0"),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [target]);

  return time;
}

export default function HeroSection() {
  const targetDate = new Date("2026-06-11T15:00:00-04:00");
  const time = useCountdown(targetDate);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "80px 20px 60px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background effects */}
      <div style={{
        position: "absolute", inset: 0, opacity: 0.03,
        backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")"
      }} />
      <div style={{
        position: "absolute", width: 700, height: 700, borderRadius: "50%",
        background: "radial-gradient(circle,rgba(201,168,76,0.1) 0%,transparent 70%)",
        top: -200, left: "50%", transform: "translateX(-50%)", pointerEvents: "none"
      }} />
      <div style={{
        position: "absolute",
        backgroundImage: "linear-gradient(rgba(255,255,255,0.018) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.018) 1px,transparent 1px)",
        backgroundSize: "80px 80px", inset: 0
      }} />

      <div style={{ position: "relative", zIndex: 2, maxWidth: 900 }}>
        <div style={{
          display: "inline-flex", alignItems: "center", gap: 8,
          background: "rgba(201,168,76,0.08)", border: "1px solid rgba(201,168,76,0.25)",
          borderRadius: "100px", padding: "5px 18px", fontSize: 11, fontWeight: 700,
          letterSpacing: "2.5px", textTransform: "uppercase", color: "var(--gold)",
          marginBottom: 28
        }}>
          ⚽ Fixture Oficial · Horarios Chile GMT-4
        </div>

        <h1 className="condensed" style={{
          fontWeight: 900, fontSize: "clamp(80px,18vw,200px)",
          lineHeight: .88, letterSpacing: -1, color: "#fff",
          marginBottom: 4, textTransform: "uppercase"
        }}>
          MUNDIAL
          <span style={{ color: "var(--gold)", display: "block" }}>2026</span>
        </h1>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, margin: "24px auto", flexWrap: "wrap" }}>
          {[
            { flag: "🇲🇽", name: "México" },
            { flag: "🇺🇸", name: "Estados Unidos" },
            { flag: "🇨🇦", name: "Canadá" },
          ].map((h) => (
            <div key={h.name} style={{
              display: "inline-flex", alignItems: "center", gap: 6,
              background: "var(--glass)", border: "1px solid var(--border)",
              borderRadius: 8, padding: "8px 14px", fontSize: 13, fontWeight: 600
            }}>
              <span style={{ fontSize: 18 }}>{h.flag}</span>
              {h.name}
            </div>
          ))}
        </div>

        <p style={{
          fontSize: "clamp(14px,2vw,17px)", color: "var(--txt2)", fontWeight: 300,
          maxWidth: 520, margin: "0 auto 36px", lineHeight: 1.7
        }}>
          104 partidos · 48 selecciones · 16 estadios<br />
          11 de Junio — 19 de Julio de 2026
        </p>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "center", marginBottom: 56 }}>
          <button
            onClick={() => scrollTo("fixture")}
            style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "var(--gold)", color: "#000", fontWeight: 700,
              fontSize: 13, letterSpacing: ".5px", textTransform: "uppercase",
              padding: "14px 28px", borderRadius: 8, border: "none", cursor: "pointer", transition: "all .25s"
            }}
          >
            ⚽ Ver Fixture Completo
          </button>
          <button
            onClick={() => scrollTo("calendario")}
            style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "var(--glass)", color: "var(--txt)", fontWeight: 600,
              fontSize: 13, letterSpacing: ".5px", textTransform: "uppercase",
              padding: "13px 28px", borderRadius: 8, border: "1px solid var(--border)",
              cursor: "pointer", transition: "all .25s"
            }}
          >
            📅 Agregar al Calendario
          </button>
        </div>

        {/* Countdown */}
        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
          {[
            { val: time.d, lbl: "DÍAS" },
            { sep: true },
            { val: time.h, lbl: "HORAS" },
            { sep: true },
            { val: time.m, lbl: "MIN" },
            { sep: true },
            { val: time.s, lbl: "SEG" },
          ].map((item, i) =>
            "sep" in item ? (
              <div key={i} className="condensed" style={{ fontSize: 48, color: "rgba(201,168,76,0.3)", alignSelf: "center", marginTop: -16, fontWeight: 900 }}>:</div>
            ) : (
              <div key={i} style={{
                textAlign: "center", background: "var(--glass)",
                border: "1px solid var(--border)", borderRadius: 14,
                padding: "22px 20px", minWidth: 86, position: "relative", overflow: "hidden"
              }}>
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg,rgba(201,168,76,0.04),transparent)", pointerEvents: "none" }} />
                <div className="condensed" style={{ fontWeight: 900, fontSize: 56, lineHeight: 1, color: "var(--gold)", letterSpacing: -1 }}>
                  {item.val}
                </div>
                <div style={{ fontSize: 9, letterSpacing: "2.5px", textTransform: "uppercase", color: "var(--txt2)", marginTop: 5, fontWeight: 600 }}>
                  {item.lbl}
                </div>
              </div>
            )
          )}
        </div>
        <div style={{ marginTop: 14, fontSize: 11, color: "var(--txt2)", letterSpacing: ".5px" }}>
          Para el partido <span style={{ color: "var(--gold)", fontWeight: 600 }}>México vs Sudáfrica</span> · Inaugural · Cd. de México
        </div>
      </div>
    </section>
  );
}
