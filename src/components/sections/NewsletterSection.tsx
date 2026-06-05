"use client";

import { useState } from "react";

export default function NewsletterSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    if (!name || !email) { alert("Por favor completa tu nombre y correo."); return; }
    if (!email.includes("@")) { alert("Ingresa un correo válido."); return; }
    setName("");
    setEmail("");
    alert(`¡Listo, ${name}! 🎉\nTe avisaremos antes de cada partido del Mundial 2026. ⚽🏆`);
  };

  return (
    <section id="newsletter" style={{ padding: "80px clamp(16px,4vw,40px)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{
          background: "linear-gradient(135deg, var(--bg4), var(--bg2))",
          border: "1px solid var(--border2)", borderRadius: 24,
          padding: "clamp(32px,6vw,64px)", textAlign: "center",
          position: "relative", overflow: "hidden"
        }}>
          <div style={{
            position: "absolute", inset: 0,
            background: "radial-gradient(ellipse 60% 50% at 50% 0%,rgba(201,168,76,0.06),transparent)",
            pointerEvents: "none"
          }} />
          <div style={{ fontSize: 48, marginBottom: 16 }}>📬</div>
          <h2 className="condensed" style={{
            fontWeight: 900, fontSize: "clamp(28px,5vw,52px)",
            lineHeight: .95, textTransform: "uppercase", marginBottom: 8
          }}>
            NO TE PIERDAS<br />NINGÚN PARTIDO
          </h2>
          <p style={{ fontSize: 14, color: "var(--txt2)", lineHeight: 1.7, maxWidth: 480, margin: "0 auto 28px" }}>
            Recibe recordatorios, novedades y análisis del Mundial 2026 directamente en tu correo.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 10, maxWidth: 400, margin: "0 auto" }}>
            <input
              type="text"
              placeholder="Tu nombre"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{
                background: "var(--glass)", border: "1px solid var(--border)",
                color: "var(--txt)", fontSize: 14, padding: "12px 16px",
                borderRadius: 8, fontFamily: "'DM Sans', sans-serif", outline: "none"
              }}
            />
            <input
              type="email"
              placeholder="tu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                background: "var(--glass)", border: "1px solid var(--border)",
                color: "var(--txt)", fontSize: 14, padding: "12px 16px",
                borderRadius: 8, fontFamily: "'DM Sans', sans-serif", outline: "none"
              }}
            />
            <button
              onClick={handleSubmit}
              style={{
                background: "var(--gold)", color: "#000", fontWeight: 800,
                fontSize: 14, letterSpacing: ".5px", textTransform: "uppercase",
                padding: "14px", borderRadius: 8, border: "none", cursor: "pointer"
              }}
            >
              🚀 QUIERO RECIBIR ALERTAS
            </button>
            <p style={{ fontSize: 11, color: "var(--txt2)" }}>Sin spam · Solo lo más importante del Mundial</p>
          </div>
        </div>
      </div>
    </section>
  );
}
