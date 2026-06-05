import { FAVORITOS, LATAM, BRACKET_PHASES } from "@/data";

export default function PredictionsSection() {
  return (
    <section id="predicciones" style={{ background: "var(--bg3)", padding: "80px clamp(16px,4vw,40px)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{
          display: "inline-flex", alignItems: "center", gap: 6, fontSize: 10, fontWeight: 700,
          letterSpacing: "2.5px", textTransform: "uppercase", color: "var(--gold)",
          background: "rgba(201,168,76,0.07)", border: "1px solid rgba(201,168,76,0.2)",
          borderRadius: "100px", padding: "4px 14px", marginBottom: 14
        }}>🔮 Predicciones</div>
        <h2 className="condensed" style={{ fontWeight: 900, fontSize: "clamp(38px,7vw,80px)", lineHeight: .95, textTransform: "uppercase", marginBottom: 10 }}>
          PREDICCIONES<br />DEL TORNEO
        </h2>
        <p style={{ color: "var(--txt2)", fontSize: 14, marginBottom: 40, maxWidth: 480, lineHeight: 1.7 }}>
          Análisis y probabilidades basadas en rankings FIFA y rendimiento histórico
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
          {/* Favorites */}
          <div style={{ background: "var(--glass2)", border: "1px solid var(--border)", borderRadius: 16, padding: 24 }}>
            <div className="condensed" style={{ fontSize: 18, fontWeight: 800, letterSpacing: 2, textTransform: "uppercase", color: "var(--gold)", marginBottom: 18 }}>
              🏆 Favoritos al Título
            </div>
            {FAVORITOS.map((f, i) => (
              <div key={f.nombre} style={{
                display: "flex", alignItems: "center", gap: 10,
                padding: "9px 0", borderBottom: i < FAVORITOS.length - 1 ? "1px solid var(--border)" : "none"
              }}>
                <div className="condensed" style={{ fontSize: 22, fontWeight: 900, color: "rgba(201,168,76,0.3)", minWidth: 22, textAlign: "center" }}>
                  {i + 1}
                </div>
                <div style={{ fontSize: 22, minWidth: 28, textAlign: "center" }}>{f.bandera}</div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontWeight: 600, fontSize: 14 }}>{f.nombre}</div>
                  <div style={{ fontSize: 11, color: "var(--txt2)", marginTop: 1, lineHeight: 1.4 }}>{f.razon}</div>
                  <div style={{ height: 3, background: "rgba(255,255,255,0.06)", borderRadius: 2, marginTop: 5, overflow: "hidden" }}>
                    <div style={{ height: "100%", borderRadius: 2, background: "linear-gradient(90deg,var(--gold),var(--gold2))", width: `${f.prob / 20 * 100}%` }} />
                  </div>
                </div>
                <div style={{ textAlign: "right", minWidth: 44 }}>
                  <div className="condensed" style={{ fontSize: 26, fontWeight: 900, color: "var(--gold)", lineHeight: 1 }}>{f.prob}%</div>
                  <div style={{ fontSize: 9, color: "var(--txt2)", letterSpacing: 1 }}>campeón</div>
                </div>
              </div>
            ))}
          </div>

          {/* LATAM */}
          <div style={{ background: "var(--glass2)", border: "1px solid var(--border)", borderRadius: 16, padding: 24 }}>
            <div className="condensed" style={{ fontSize: 18, fontWeight: 800, letterSpacing: 2, textTransform: "uppercase", color: "var(--gold)", marginBottom: 18 }}>
              ⚡ Sudamérica en el Mundial
            </div>
            {LATAM.map((l, i) => (
              <div key={l.nombre} style={{
                display: "flex", alignItems: "center", gap: 10,
                padding: "9px 0", borderBottom: i < LATAM.length - 1 ? "1px solid var(--border)" : "none"
              }}>
                <div style={{ fontSize: 22, minWidth: 28, textAlign: "center" }}>{l.bandera}</div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontWeight: 600, fontSize: 14 }}>{l.nombre}</div>
                  <div style={{ fontSize: 11, color: "var(--txt2)", display: "flex", gap: 8, marginTop: 2 }}>
                    <span>Cuartos: <b style={{ color: "var(--txt)" }}>{l.prob_cuartos}%</b></span>
                    <span>Semis: <b style={{ color: "var(--txt)" }}>{l.prob_semi}%</b></span>
                  </div>
                  <div style={{ height: 3, background: "rgba(255,255,255,0.06)", borderRadius: 2, marginTop: 5, overflow: "hidden" }}>
                    <div style={{ height: "100%", borderRadius: 2, background: "linear-gradient(90deg,var(--gold),var(--gold2))", width: `${l.prob_cuartos}%` }} />
                  </div>
                </div>
                <div style={{ textAlign: "right", minWidth: 44 }}>
                  <div className="condensed" style={{ fontSize: 26, fontWeight: 900, color: "var(--gold)", lineHeight: 1 }}>{l.prob_campeon}%</div>
                  <div style={{ fontSize: 9, color: "var(--txt2)", letterSpacing: 1 }}>campeón</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bracket */}
        <div className="condensed" style={{ fontSize: 16, fontWeight: 800, letterSpacing: "2.5px", textTransform: "uppercase", color: "var(--txt2)", margin: "36px 0 16px" }}>
          Bracket proyectado — Fase Final
        </div>
        <div style={{ display: "flex", gap: 14, overflowX: "auto", paddingBottom: 12 }}>
          {BRACKET_PHASES.map((ph) => (
            <div key={ph.label} style={{ minWidth: 150 }}>
              <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", color: "var(--gold)", marginBottom: 10, textAlign: "center" }}>
                {ph.label}
              </div>
              {ph.matches.map((m, i) => (
                <div key={i} style={{
                  background: m.champion ? "rgba(201,168,76,0.08)" : "var(--glass2)",
                  border: m.champion ? "1px solid rgba(201,168,76,0.4)" : "1px solid var(--border)",
                  borderRadius: 8, padding: m.champion ? "18px 11px" : "9px 11px",
                  marginBottom: 9, fontSize: 12, textAlign: m.champion ? "center" : undefined
                }}>
                  {m.champion ? (
                    <>
                      <div style={{ fontSize: 28, marginBottom: 6 }}>🇦🇷</div>
                      <div style={{ fontWeight: 800, color: "var(--gold)", fontSize: 13 }}>ARGENTINA</div>
                      <div style={{ fontSize: 9, color: "var(--txt2)", marginTop: 3, letterSpacing: 1 }}>CAMPEÓN PROYECTADO</div>
                    </>
                  ) : (
                    <>
                      <div style={{ display: "flex", alignItems: "center", gap: 6, padding: "3px 0", fontWeight: 700, color: "#fff", fontSize: 12 }}>{m.a}</div>
                      <div style={{ borderTop: "1px solid var(--border)", margin: "3px 0" }} />
                      <div style={{ display: "flex", alignItems: "center", gap: 6, padding: "3px 0", color: "var(--txt2)", fontSize: 12 }}>{m.b}</div>
                    </>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
