import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "⚽ Mundial FIFA 2026 — Fixture Completo | Horarios Chile",
  description:
    "Fixture completo del Mundial FIFA 2026. 104 partidos, 48 selecciones, horarios para Chile (GMT-4). México, USA y Canadá.",
  openGraph: {
    title: "Mundial FIFA 2026 — Fixture Completo",
    description: "104 partidos. 48 selecciones. Horarios Chile.",
    type: "website",
  },
  themeColor: "#0A0A0F",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
