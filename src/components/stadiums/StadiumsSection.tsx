import { STADIUMS } from "@/data";

const COUNTRY_STYLE: Record<string, React.CSSProperties> = {
  mx: { background: "rgba(0,104,71,0.3)", color: "#86EFAC" },
  us: { background: "rgba(79,142,247,0.2)", color: "#93C5FD" },
  ca: { background: "rgba(255,69,58,0.2)", color: "#FF9D96" },
};

const COUNTRY_LABEL: Record<string, string> = {
  mx: "🇲🇽 MÉX",
  us: "🇺🇸 USA",
  ca: "🇨🇦 CAN",
};

export default function StadiumsSection() {
  return (
    <section id="estadios" style={{ background: "var(--bg2)", padding: "80px clamp(16px,4vw,40px)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{
          display: "inline-flex", alignItems: "center", gap: 6, fontSize: 10, fontWeight: 700,
          letterSpacing: "2.5px", textTransform: "uppercase", color: "var(--gold)",
          background: "rgba(201,168,76,0.07)", border: "1px solid rgba(201,168,76,0.2)",
          borderRadius: "100px", padding: "4px 14px", marginBottom: 14
        }}>🏟️ Sedes</div>
        <h2 className="condensed" style={{ fontWeight: 900, fontSize: "clamp(38px,7vw,80px)", lineHeight: .95, textTransform: "uppercase", marginBottom: 10 }}>
          ESTADIOS<br />DEL MUNDIAL
        </h2>
        <p style={{ color: "var(--txt2)", fontSize: 14, marginBottom: 40, maxWidth: 480, lineHeight: 1.7 }}>
          16 sedes en México, Estados Unidos y Canadá
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 12 }}>
          {STADIUMS.map((s) => (
            <div key={s.name} style={{
              background: "var(--glass2)", border: "1px solid var(--border)",
              borderRadius: 12, overflow: "hidden", transition: "all .2s"
            }}>
              <div style={{
                height: 90, display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 44, background: "var(--glass)", position: "relative"
              }}>
                {s.emoji}
                <span style={{
                  position: "absolute", top: 8, right: 8, fontSize: 9, fontWeight: 700,
                  letterSpacing: 1, padding: "2px 7px", borderRadius: 4,
                  ...COUNTRY_STYLE[s.country]
                }}>
                  {COUNTRY_LABEL[s.country]}
                </span>
              </div>
              <div style={{ padding: "12px 14px" }}>
                <div style={{ fontWeight: 700, fontSize: 13, marginBottom: 2, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                  {s.name}
                </div>
                <div style={{ fontSize: 11, color: "var(--txt2)" }}>{s.city}</div>
                <div style={{ fontSize: 10, color: "var(--txt2)", marginTop: 5, display: "flex", alignItems: "center", gap: 4 }}>
                  👥 {s.cap}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
