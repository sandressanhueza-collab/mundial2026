"use client";

export default function CalendarSection() {
  const handleDownload = () => {
    alert(
      "✅ Para agregar el calendario:\n\n1. Guarda el archivo FIFA_World_Cup_2026_Chile.ics\n2. Ábrelo con tu app de calendario favorita\n3. ¡Listo! Todos los partidos con recordatorios automáticos\n\n📱 Compatible con iPhone, Android, Google Calendar y Outlook."
    );
  };

  const COMPAT = [
    { icon: "📱", name: "iPhone" },
    { icon: "🤖", name: "Android" },
    { icon: "📅", name: "Google Calendar" },
    { icon: "📧", name: "Outlook" },
    { icon: "🖥️", name: "macOS" },
    { icon: "🪟", name: "Windows" },
  ];

  return (
    <section id="calendario" style={{ background: "var(--bg2)", padding: "80px clamp(16px,4vw,40px)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{
          display: "inline-flex", alignItems: "center", gap: 6, fontSize: 10, fontWeight: 700,
          letterSpacing: "2.5px", textTransform: "uppercase", color: "var(--gold)",
          background: "rgba(201,168,76,0.07)", border: "1px solid rgba(201,168,76,0.2)",
          borderRadius: "100px", padding: "4px 14px", marginBottom: 14
        }}>📅 Calendario</div>
        <h2 className="condensed" style={{ fontWeight: 900, fontSize: "clamp(38px,7vw,80px)", lineHeight: .95, textTransform: "uppercase", marginBottom: 10 }}>
          AGREGA AL<br />CALENDARIO
        </h2>
        <p style={{ color: "var(--txt2)", fontSize: 14, marginBottom: 40, maxWidth: 480, lineHeight: 1.7 }}>
          Todos los 104 partidos con horarios de Chile (GMT-4), alertas y recordatorios automáticos.
        </p>

        <div style={{
          background: "var(--glass)", border: "1px solid var(--border)", borderRadius: 20,
          padding: "clamp(28px,5vw,56px)", textAlign: "center", marginBottom: 28,
          position: "relative", overflow: "hidden"
        }}>
          <div style={{
            position: "absolute", inset: 0,
            background: "radial-gradient(ellipse 60% 50% at 50% 0%,rgba(201,168,76,0.08),transparent)",
            pointerEvents: "none"
          }} />
          <span style={{ fontSize: 64, marginBottom: 20, display: "block" }}>📅</span>
          <h3 className="condensed" style={{ fontSize: "clamp(28px,5vw,48px)", fontWeight: 900, letterSpacing: 1, marginBottom: 10 }}>
            FIFA WORLD CUP 2026
          </h3>
          <p style={{ fontSize: 14, color: "var(--txt2)", marginBottom: 28, lineHeight: 1.7 }}>
            104 partidos · Horarios Chile (GMT-4) · Con recordatorios automáticos<br />
            Formato estándar .ICS · Compatible con todos los calendarios
          </p>
          <button
            onClick={handleDownload}
            style={{
              display: "inline-flex", alignItems: "center", gap: 10,
              background: "var(--gold)", color: "#000", fontWeight: 800,
              fontSize: 14, letterSpacing: ".5px", textTransform: "uppercase",
              padding: "18px 40px", borderRadius: 10, border: "none",
              cursor: "pointer", transition: "all .25s", marginBottom: 8
            }}
          >
            ⬇️ Descargar Calendario .ICS
          </button>
          <p style={{ fontSize: 11, color: "var(--txt2)", letterSpacing: ".3px" }}>
            Gratis · Sin registro · Descarga inmediata
          </p>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
            gap: 10, marginTop: 28
          }}>
            {COMPAT.map((c) => (
              <div key={c.name} style={{
                background: "var(--glass2)", border: "1px solid var(--border)",
                borderRadius: 10, padding: "16px 12px", textAlign: "center"
              }}>
                <div style={{ fontSize: 26, marginBottom: 6 }}>{c.icon}</div>
                <div style={{ fontSize: 11, fontWeight: 600, color: "var(--txt2)" }}>{c.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
