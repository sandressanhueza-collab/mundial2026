"use client";

import { BRACKET_PHASES, LATAM_TEAMS } from "@/data/constants";

export default function PredictionsSection() {
  return (
    <section style={{ padding: "20px 0" }}>
      {/* Resumen LATAM */}
      <div style={{ marginBottom: 30 }}>
        {LATAM_TEAMS.map((l, i) => (
          <div key={i} style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
            <div style={{ fontWeight: 600, fontSize: 14 }}>{l.nombre}</div>
            <div style={{ display: "flex", gap: 8, fontSize: 11, color: "var(--txt2)" }}>
              <span>Cuartos: <b style={{ color: "var(--txt)" }}>{l.prob_cuartos}%</b></span>
              <span>Semis: <b style={{ color: "var(--txt)" }}>{l.prob_semi}%</b></span>
            </div>
          </div>
        ))}
      </div>

      {/* Bracket */}
      <div className="condensed" style={{ fontSize: 16, fontWeight: 800, letterSpacing: "2.5px", textTransform: "uppercase", marginBottom: 15 }}>
        Bracket proyectado ⚽ Fase Final
      </div>
      
      <div style={{ display: "flex", gap: 14, overflowX: "auto", paddingBottom: 12 }}>
        {BRACKET_PHASES.map((ph) => (
          <div key={ph.label} style={{ minWidth: 150 }}>
            <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", color: "var(--gold)", marginBottom: 10 }}>
              {ph.label}
            </div>
            
            {ph.matches.map((m: any, i) => (
              <div key={i} style={{
                background: m.champion ? "rgba(201,168,76,0.08)" : "var(--glass2)",
                border: m.champion ? "1px solid rgba(201,168,76,0.4)" : "1px solid var(--border)",
                borderRadius: 8, 
                padding: m.champion ? "18px 11px" : "9px 11px",
                marginBottom: 9, 
                fontSize: 12, 
                textAlign: m.champion ? "center" : undefined
              }}>
                {m.champion ? (
                  <>
                    <div style={{ fontSize: 28, marginBottom: 6 }}>🏆</div>
                    <div style={{ fontWeight: 800, color: "var(--gold)", fontSize: 13 }}>ARGENTINA</div>
                    <div style={{ fontSize: 9, color: "var(--txt2)", marginTop: 3, letterSpacing: 1 }}>CAMPEÓN PROYECTADO</div>
                  </>
                ) : (
                  <>
                    <div style={{ display: "flex", alignItems: "center", gap: 6, padding: "3px 0", fontWeight: 700 }}>{m.eq1}</div>
                    <div style={{ borderTop: "1px solid var(--border)", margin: "3px 0" }} />
                    <div style={{ display: "flex", alignItems: "center", gap: 6, padding: "3px 0", color: "var(--txt2)" }}>{m.eq2}</div>
                  </>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
