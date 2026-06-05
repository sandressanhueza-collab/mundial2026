# ⚽ Mundial FIFA 2026 — Fixture Completo

Web app con el fixture completo del Mundial FIFA 2026, horarios para Chile (GMT-4), predicciones, estadios y calendario descargable.

## 🚀 Instalación y ejecución

```bash
# 1. Instalar dependencias
npm install

# 2. Correr en desarrollo
npm run dev

# 3. Abrir en el navegador
# http://localhost:3000
```

## 🏗️ Estructura del proyecto

```
src/
├── app/
│   ├── layout.tsx          # Layout raíz con metadata SEO
│   ├── page.tsx            # Página principal
│   └── globals.css         # Variables CSS y estilos globales
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx      # Navegación fija con scroll activo
│   │   └── Footer.tsx      # Footer con botones de compartir
│   ├── sections/
│   │   ├── HeroSection.tsx     # Hero con cuenta regresiva en vivo
│   │   ├── StatsBar.tsx        # Barra de estadísticas
│   │   ├── CalendarSection.tsx # Descarga de calendario .ICS
│   │   ├── FeaturedSection.tsx # Partidos destacados LATAM
│   │   └── NewsletterSection.tsx # Formulario de newsletter
│   ├── fixture/
│   │   └── FixtureSection.tsx  # Fixture completo con filtros
│   ├── predictions/
│   │   └── PredictionsSection.tsx # Predicciones y bracket
│   └── stadiums/
│       └── StadiumsSection.tsx # Grid de estadios
├── data/
│   └── index.ts            # Todos los datos: partidos, estadios, predicciones
└── types/
    └── index.ts            # TypeScript interfaces
```

## ✨ Features

- ⏱️ **Cuenta regresiva en vivo** hasta el partido inaugural
- ⚽ **Fixture completo** — 104 partidos con filtros por fase, equipo y búsqueda
- 📅 **Calendario ICS** descargable para Google Calendar, iPhone, Outlook
- 🌎 **Horarios Chile (GMT-4)** en todos los partidos
- 🇦🇷 **Sección Sudamérica** con los equipos latinoamericanos destacados
- 🔮 **Predicciones** con probabilidades y bracket proyectado
- 🏟️ **16 estadios** en México, EE.UU. y Canadá
- 📬 **Newsletter** con recordatorios de partidos
- 📱 **Responsive** en mobile, tablet y desktop

## 🛠️ Stack tecnológico

- **Next.js 15** (App Router)
- **React 19**
- **TypeScript**
- **Tailwind CSS**

## 📦 Deploy en Vercel

```bash
npm run build
vercel deploy
```

O conecta el repositorio directamente en [vercel.com](https://vercel.com).

---

Sitio no oficial · No afiliado a FIFA · Información con fines informativos
# fixture-mundial-2026
