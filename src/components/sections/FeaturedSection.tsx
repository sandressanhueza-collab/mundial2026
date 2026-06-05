import { FEATURED_TEAMS } from "@/data";

const BG_MAP: Record<string, string> = {
  ar: "radial-gradient(circle at top right,rgba(116,172,223,0.2),transparent 70%)",
  br: "radial-gradient(circle at top right,rgba(0,156,59,0.2),transparent 70%)",
  co: "radial-gradient(circle at top right,rgba(253,209,22,0.15),transparent 70%)",
  uy: "radial-gradient(circle at top right,rgba(0,20,137,0.3),transparent 70%)",
  ec: "radial-gradient(circle at top right,rgba(255,209,0,0.15),transparent 70%)",
  mx: "radial-gradient(circle at top right,rgba(0,104,71,0.25),transparent 70%)",
};

export default function FeaturedSection() {
  return (
    <section id="destacados" style={{ background: "var(--bg2)", padding: "80px clamp(16px,4vw,40px)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{
          display: "inline-flex", alignItems: "center", gap: 6, fontSize: 10, fontWeight: 700,
          letterSpacing: "2.5px", textTransform: "uppercase", color: "var(--gold)",
          background: "rgba(201,168,76,0.07)", border: "1px solid rgba(201,168,76,0.2)",
          borderRadius: "100px", padding: "4px 14px", marginBottom: 14
        }}>⚡ Sudamérica</div>
        <h2 className="condensed" style={{ fontWeight: 900, fontSize: "clamp(38px,7vw,80px)", lineHeight: .95, textTransform: "uppercase", marginBottom: 10 }}>
          PARTIDOS<br />DESTACADOS
        </h2>
        <p style={{ color: "var(--txt2)", fontSize: 14, marginBottom: 40, maxWidth: 480, lineHeight: 1.7 }}>
          Los duelos más esperados de las selecciones latinoamericanas
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(270px, 1fr))", gap: 14 }}>
          {FEATURED_TEAMS.map((t) => (
            <div key={t.id} style={{
              background: "var(--glass)", border: "1px solid var(--border)", borderRadius: 16,
              padding: 22, position: "relative", overflow: "hidden", transition: "all .25s"
            }}>
              <div style={{
                position: "absolute", top: 0, right: 0, width: 120, height: 120,
                background: BG_MAP[t.id] || "transparent", pointerEvents: "none"
              }} />
              <div style={{
                display: "inline-flex", alignItems: "center", gap: 4, fontSize: 10,
                fontWeight: 700, letterSpacing: "1.5px", padding: "3px 10px",
                borderRadius: "100px", border: "1px solid rgba(201,168,76,0.3)",
                color: "var(--gold)", background: "rgba(201,168,76,0.07)", marginBottom: 10
              }}>
                {t.badge}
              </div>
              <span style={{ fontSize: 40, marginBottom: 6, display: "block", lineHeight: 1 }}>{t.flag}</span>
              <div className="condensed" style={{ fontSize: 30, fontWeight: 900, textTransform: "uppercase", marginBottom: 3, letterSpacing: ".5px" }}>
                {t.name}
              </div>
              <div style={{ fontSize: 11, color: "var(--txt2)", marginBottom: 12 }}>
                Fase de Grupos · 3 partidos
              </div>
              {t.matches.map((m) => (
                <div key={m.rival} style={{
                  display: "flex", justifyContent: "space-between", alignItems: "center",
                  padding: "7px 0", borderTop: "1px solid var(--border)", fontSize: 12, color: "var(--txt2)"
                }}>
                  <span>{m.rival}</span>
                  <span style={{ fontSize: 10 }}>{m.date} · {m.hora}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
