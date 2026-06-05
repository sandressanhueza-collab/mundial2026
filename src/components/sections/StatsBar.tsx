const STATS = [
  { val: "104", lbl: "Partidos" },
  { val: "48", lbl: "Selecciones" },
  { val: "16", lbl: "Estadios" },
  { val: "3", lbl: "Países" },
  { val: "39", lbl: "Días" },
];

export default function StatsBar() {
  return (
    <div style={{
      background: "var(--bg2)",
      borderTop: "1px solid var(--border)",
      borderBottom: "1px solid var(--border)",
      padding: "20px clamp(16px,4vw,40px)",
      display: "flex",
      gap: 0,
      justifyContent: "center",
      overflowX: "auto",
    }}>
      {STATS.map((s, i) => (
        <div key={s.lbl} style={{
          display: "flex", flexDirection: "column", alignItems: "center", gap: 4,
          padding: "0 clamp(20px,4vw,48px)",
          borderRight: i < STATS.length - 1 ? "1px solid var(--border)" : "none",
          flexShrink: 0,
        }}>
          <div className="condensed" style={{ fontSize: 32, fontWeight: 900, color: "var(--gold)", letterSpacing: "-.5px" }}>
            {s.val}
          </div>
          <div style={{ fontSize: 10, letterSpacing: "1.5px", textTransform: "uppercase", color: "var(--txt2)", fontWeight: 600 }}>
            {s.lbl}
          </div>
        </div>
      ))}
    </div>
  );
}
