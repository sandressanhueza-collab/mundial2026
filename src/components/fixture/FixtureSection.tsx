"use client";

import { useState, useMemo } from "react";
import { MATCHES, FLAGS, LATAM_TEAMS } from "@/data";
import type { Match } from "@/types";

const PHASES = ["Grupos", "Ronda de 32", "Octavos de Final", "Cuartos de Final", "Semifinal", "3er Lugar", "Final"];
const TEAMS = ["Argentina", "Brasil", "Uruguay", "Colombia", "Ecuador", "Paraguay", "México", "España", "Francia", "Alemania", "Portugal", "Inglaterra"];

const TAG_CLASS: Record<string, string> = {
  inaugural: "t-inaugural", argentina: "t-argentina", brasil: "t-brasil",
  uruguay: "t-uruguay", clasico: "t-clasico", latam: "t-latam", final: "t-final"
};

function MatchCard({ m }: { m: Match }) {
  const f1 = FLAGS[m.eq1] || "";
  const f2 = FLAGS[m.eq2] || "";
  const l1 = LATAM_TEAMS.includes(m.eq1);
  const l2 = LATAM_TEAMS.includes(m.eq2);
  const tagCls = m.tag ? TAG_CLASS[m.tag] || "" : "";

  const chLabel = (c: string) =>
    c === "CHV" ? "📺 CHV" : c === "DSP" ? "📡 DSP" : "🎬 D+";
  const chCls = (c: string) =>
    c === "D+" ? "ch ch-Dp" : `ch ch-${c}`;

  return (
    <div style={{
      background: "var(--glass2)", border: m.tag ? `1px solid rgba(201,168,76,0.25)` : "1px solid var(--border)",
      borderLeft: m.tag ? "3px solid var(--gold)" : "1px solid var(--border)",
      borderRadius: 10, padding: "13px 16px", marginBottom: 5,
      display: "grid", gridTemplateColumns: "64px 1fr auto", gap: 14, alignItems: "center"
    }}>
      <div style={{ textAlign: "center" }}>
        <div className="condensed" style={{ fontSize: 26, fontWeight: 900, color: "var(--gold)", lineHeight: 1 }}>
          {m.hora}
        </div>
        {m.grupo ? (
          <span style={{
            display: "inline-block", background: "rgba(79,142,247,0.15)", color: "#93C5FD",
            fontSize: 9, fontWeight: 700, letterSpacing: 1, padding: "2px 7px", borderRadius: 4, marginTop: 3
          }}>GRP {m.grupo}</span>
        ) : (
          <span style={{ fontSize: 9, color: "var(--txt2)", letterSpacing: ".5px", marginTop: 3, display: "block" }}>
            {m.fase.slice(0, 7)}
          </span>
        )}
      </div>

      <div style={{ minWidth: 0 }}>
        {m.destacado && m.tag && (
          <div className={`m-tag ${tagCls}`} style={{
            display: "inline-flex", alignItems: "center", gap: 4,
            fontSize: 10, fontWeight: 700, letterSpacing: ".5px",
            padding: "2px 8px", borderRadius: 4, marginBottom: 5
          }}>
            {m.destacado}
          </div>
        )}
        <div style={{ fontSize: 15, fontWeight: 600, color: "var(--txt)", lineHeight: 1.35, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
          <span style={{ color: l1 ? "#93C5FD" : undefined }}>{f1} {m.eq1}</span>
          <span style={{ color: "var(--txt2)", fontWeight: 400, fontSize: 12, margin: "0 8px" }}>vs</span>
          <span style={{ color: l2 ? "#93C5FD" : undefined }}>{f2} {m.eq2}</span>
        </div>
        <div style={{ fontSize: 11, color: "var(--txt2)", marginTop: 3, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
          📍 {m.estadio} · {m.ciudad}
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 3, alignItems: "flex-end" }}>
        {m.canales.map((c) => (
          <span key={c} className={chCls(c)}>{chLabel(c)}</span>
        ))}
      </div>
    </div>
  );
}

export default function FixtureSection() {
  const [fPhase, setFPhase] = useState("all");
  const [fTeam, setFTeam] = useState("");
  const [fSearch, setFSearch] = useState("");

  const filtered = useMemo(() => {
    const q = fSearch.toLowerCase();
    return MATCHES.filter((m) => {
      const phOk = fPhase === "all" || m.fase === fPhase;
      const tmOk = !fTeam || m.eq1 === fTeam || m.eq2 === fTeam;
      const qOk = !q || [m.eq1, m.eq2, m.estadio, m.ciudad].some((s) => s.toLowerCase().includes(q));
      return phOk && tmOk && qOk;
    });
  }, [fPhase, fTeam, fSearch]);

  const grouped = useMemo(() => {
    const g: Record<string, Match[]> = {};
    filtered.forEach((m) => {
      if (!g[m.fecha]) g[m.fecha] = [];
      g[m.fecha].push(m);
    });
    return g;
  }, [filtered]);

  const fBtnStyle = (active: boolean) => ({
    background: active ? "var(--gold)" : "var(--glass2)",
    border: `1px solid ${active ? "var(--gold)" : "var(--border)"}`,
    color: active ? "#000" : "var(--txt2)",
    fontSize: 11, fontWeight: 600, letterSpacing: ".4px",
    padding: "7px 13px", borderRadius: 6, cursor: "pointer",
    transition: "all .15s", fontFamily: "'DM Sans', sans-serif"
  } as React.CSSProperties);

  return (
    <section id="fixture" style={{ background: "var(--bg3)", padding: "80px clamp(16px,4vw,40px)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{
          display: "inline-flex", alignItems: "center", gap: 6, fontSize: 10, fontWeight: 700,
          letterSpacing: "2.5px", textTransform: "uppercase", color: "var(--gold)",
          background: "rgba(201,168,76,0.07)", border: "1px solid rgba(201,168,76,0.2)",
          borderRadius: "100px", padding: "4px 14px", marginBottom: 14
        }}>⚽ Fixture</div>
        <h2 className="condensed" style={{ fontWeight: 900, fontSize: "clamp(38px,7vw,80px)", lineHeight: .95, textTransform: "uppercase", marginBottom: 10 }}>
          FIXTURE<br />COMPLETO
        </h2>
        <p style={{ color: "var(--txt2)", fontSize: 14, marginBottom: 28, maxWidth: 480, lineHeight: 1.7 }}>
          104 partidos con horarios para Chile (GMT-4). Filtra por fase, equipo o busca directamente.
        </p>

        {/* Phase filters */}
        <div id="phase-filters" style={{ display: "flex", flexWrap: "wrap", gap: 7, marginBottom: 10 }}>
          <button style={fBtnStyle(fPhase === "all")} onClick={() => setFPhase("all")}>Todos</button>
          {PHASES.map((ph) => (
            <button key={ph} style={fBtnStyle(fPhase === ph)} onClick={() => setFPhase(fPhase === ph ? "all" : ph)}>
              {ph}
            </button>
          ))}
        </div>

        {/* Team filters */}
        <div id="team-filters" style={{ display: "flex", flexWrap: "wrap", gap: 7, marginBottom: 20 }}>
          {TEAMS.map((t) => (
            <button key={t} style={fBtnStyle(fTeam === t)} onClick={() => setFTeam(fTeam === t ? "" : t)}>
              {t}
            </button>
          ))}
        </div>

        {/* Search */}
        <div style={{ position: "relative", marginBottom: 20 }}>
          <svg style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)", opacity: .35 }} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
          </svg>
          <input
            type="text"
            placeholder="Buscar equipo, ciudad o estadio..."
            value={fSearch}
            onChange={(e) => setFSearch(e.target.value)}
            style={{
              background: "var(--glass2)", border: "1px solid var(--border)",
              color: "var(--txt)", fontSize: 13, padding: "11px 16px 11px 42px",
              borderRadius: 8, width: "100%", maxWidth: 360,
              fontFamily: "'DM Sans', sans-serif", outline: "none"
            }}
          />
        </div>

        {/* Matches */}
        <div style={{ maxHeight: 660, overflowY: "auto", paddingRight: 2 }}>
          {Object.keys(grouped).length === 0 ? (
            <div style={{ textAlign: "center", padding: 48, color: "var(--txt2)", fontSize: 14 }}>
              No se encontraron partidos con esos filtros.
            </div>
          ) : (
            Object.entries(grouped).map(([date, matches]) => (
              <div key={date} style={{ marginBottom: 22 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10 }}>
                  <span className="condensed" style={{ fontSize: 16, fontWeight: 700, letterSpacing: 2, color: "var(--txt2)", textTransform: "uppercase" }}>
                    {date}
                  </span>
                  <div style={{ flex: 1, height: 1, background: "var(--border)" }} />
                </div>
                {matches.map((m, i) => <MatchCard key={i} m={m} />)}
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
