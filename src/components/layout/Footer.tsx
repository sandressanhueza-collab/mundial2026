"use client";

function share(net: string) {
  const msg = encodeURIComponent("Fixture completo del Mundial 2026 con horarios para Chile ⚽🏆 ");
  const url = encodeURIComponent("https://mundial2026.cl");
  const urls: Record<string, string> = {
    wa: `https://wa.me/?text=${msg}${url}`,
    fb: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
    x: `https://twitter.com/intent/tweet?text=${msg}&url=${url}`,
    tg: `https://t.me/share/url?url=${url}&text=${msg}`,
  };
  window.open(urls[net], "_blank", "width=600,height=400");
}

export default function Footer() {
  return (
    <>
      {/* Share bar */}
      <div style={{ background: "var(--bg2)", borderTop: "1px solid var(--border)", padding: "40px clamp(16px,4vw,40px)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", textAlign: "center" }}>
          <div className="condensed" style={{ fontSize: 22, fontWeight: 800, letterSpacing: 2, marginBottom: 8, textTransform: "uppercase" }}>
            Comparte con tus amigos
          </div>
          <p style={{ fontSize: 13, color: "var(--txt2)", marginBottom: 20 }}>
            &quot;Ya tengo todos los partidos del Mundial 2026 en mi calendario ⚽🏆&quot;
          </p>
          <div style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap" }}>
            {[
              { net: "wa", label: "💬 WhatsApp", bg: "#25D366", color: "#000" },
              { net: "fb", label: "📘 Facebook", bg: "#1877F2", color: "#fff" },
              { net: "x", label: "𝕏 Twitter / X", bg: "#000", color: "#fff" },
              { net: "tg", label: "✈️ Telegram", bg: "#229ED9", color: "#fff" },
            ].map((s) => (
              <button
                key={s.net}
                onClick={() => share(s.net)}
                style={{
                  background: s.bg, color: s.color, fontWeight: 700, fontSize: 13,
                  padding: "10px 20px", borderRadius: 8, border: "none", cursor: "pointer"
                }}
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <footer style={{
        background: "var(--bg)", borderTop: "1px solid var(--border)",
        padding: "32px clamp(16px,4vw,40px)", textAlign: "center"
      }}>
        <div className="condensed" style={{ fontSize: 22, fontWeight: 900, letterSpacing: 3, color: "var(--gold)", marginBottom: 8 }}>
          MUNDIAL 2026
        </div>
        <div style={{ fontSize: 13, color: "var(--txt2)", lineHeight: 1.8 }}>
          🇲🇽 México · 🇺🇸 Estados Unidos · 🇨🇦 Canadá<br />
          11 Junio – 19 Julio 2026 · 104 partidos · 48 selecciones<br />
          Horarios para Chile (GMT-4)
        </div>
        <div style={{ fontSize: 11, color: "var(--txt2)", marginTop: 16, opacity: .5 }}>
          Sitio no oficial · Información con fines informativos · No afiliado a FIFA
        </div>
      </footer>
    </>
  );
}
