# 🌍 Carbon Fingerprint

**Discover Your Climate Identity** — powered by 144 years of planetary data.

A single-page web app that calculates your personal carbon footprint through 5 simple questions, then visualizes it as a unique "Carbon Fingerprint" with animated SVG rings, real climate data from NASA/NOAA, and personalized insights based on IPCC AR6 emission factors.

## ✨ Features

- **5-Question Lifestyle Quiz** — Transport (incl. EV), Diet, Energy, Consumption, Flights
- **IPCC AR6 Calibrated** — Emission factors from peer-reviewed climate science
- **Animated Fingerprint Visualization** — Unique organic SVG pattern per user, seeded from answers
- **1,000+ Cities** — Searchable dropdown covering every continent and major region
- **Real NASA GISS Data** — Global temperature anomalies 1880–2025 (actual data, not estimates)
- **Personalized Insights** — Contextual tips with specific CO₂ savings
- **Share Card Generator** — PNG export + shareable URL links (`?r=base64`)
- **5 Languages** — EN, ES (Español), HI (हिन्दी), PT (Português), ZH (中文), auto-detected
- **Native Mobile Share** — `navigator.share()` with image on supported devices
- **Dark/Light Mode** — Automatic via `prefers-color-scheme`
- **PWA** — Installable on phones, works offline after first load
- **Privacy-Respecting Analytics** — Anonymous counters via countapi.xyz (no cookies, no PII)
- **100% Client-Side** — Zero backend, zero API keys, single HTML file
- **Accessible** — ARIA roles, keyboard navigation, skip link, `prefers-reduced-motion`

## 🚀 Quick Start

```bash
# Just open index.html in a browser
open index.html

# Or serve locally
python3 -m http.server 8080

# Or deploy to Vercel
vercel deploy
```

## 🔗 URL Sharing

Results are encoded as base64 in the URL query parameter:

```
https://your-domain.com/?r=MjIxMDE
```

Share this link and your friend sees your fingerprint instantly — then takes the quiz to compare.

## 🌡️ Climate Data Sources

| Source | Data | Coverage |
|--------|------|----------|
| NASA GISS (GISTEMP v4) | Global temperature anomalies | 1880–2025 |
| Mauna Loa / NOAA | CO₂ concentration | Current (421 ppm) |
| IPCC AR6 WG3 | Emission factors | Current |
| IPCC AR6 WG2 | Regional climate impacts | Current |
| IEA | Energy emission factors | 2023 |
| FAO / Poore & Nemecek | Food system emissions | 2018 |
| Global Carbon Project | National per-capita averages | 2023 |

## 🏙️ Cities

1,000+ cities across all continents. Searchable dropdown with instant filtering. Each city includes local temperature, temperature rise, CO₂ levels, sea level rise, and extreme weather days — sourced from regional meteorological services and IPCC AR6 chapters.

## 📸 Share Card

- Your Carbon Fingerprint visualization (unique per user)
- Breakdown by category (Transport, Diet, Energy, Flights, Shared)
- Comparison bars (You vs Global Average vs 1.5°C Target)
- City-specific climate data with source attribution
- 1080×1350px PNG output (Instagram/social-ready)
- Shareable URL link included

## 🌐 Languages

| Language | Code | Status |
|----------|------|--------|
| English | en | ✅ |
| Español | es | ✅ |
| हिन्दी | hi | ✅ |
| Português | pt | ✅ |
| 中文 | zh | ✅ |

Auto-detects browser language. Language selector in header. All UI text translated.

## 📄 License

MIT
