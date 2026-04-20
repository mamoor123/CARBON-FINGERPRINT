# 🌍 Carbon Fingerprint

**Discover Your Climate Identity** — powered by 144 years of planetary data.

A single-page web app that calculates your personal carbon footprint through 5 simple questions, then visualizes it as a unique "Carbon Fingerprint" with animated SVG rings, real climate data from NASA/NOAA, and personalized insights based on IPCC AR6 emission factors. Covers **1,001 cities** across every continent.

## ✨ Features

- **5-Question Lifestyle Quiz** — Transport (incl. EV), Diet, Energy, Consumption, Flights
- **IPCC AR6 Calibrated** — Emission factors from peer-reviewed climate science
- **Animated Fingerprint Visualization** — Unique organic SVG pattern per user, seeded from answers
- **1,001 Cities** — Searchable dropdown with climate data for 165 US cities, 231 European, 306 Asian, 107 African, 44 Canadian, 44 South American, and more across 6 continents
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

## 🏙️ 1,000+ Cities Worldwide

Searchable dropdown with instant filtering. Each city includes local temperature, temperature rise since pre-industrial era, CO₂ levels, sea level rise, and extreme weather days — sourced from regional meteorological services and IPCC AR6 chapters.

### Coverage by Region

| Region | Cities | Key Countries |
|--------|--------|---------------|
| 🇺🇸 United States | 165 | All 50 states, top metros + mid-size cities |
| 🇪🇺 Europe | 231 | UK, France, Germany, Italy, Spain, Nordics, Eastern Europe, Baltics, Balkans |
| 🌏 Asia | 306 | China, India, Japan, South Korea, SE Asia, Pakistan, Bangladesh, Central Asia |
| 🌍 Africa | 107 | Nigeria, South Africa, Kenya, Egypt, Morocco, DRC, Ethiopia, West/East/Southern Africa |
| 🇨🇦 Canada | 44 | All provinces, from Whitehorse to Halifax |
| 🌎 South America | 44 | Brazil, Argentina, Colombia, Chile, Peru, Venezuela, Ecuador, Bolivia, Paraguay, Uruguay |
| 🕌 Middle East | 42 | Saudi Arabia, UAE, Turkey, Iran, Iraq, Israel/Palestine, Jordan, Lebanon, Gulf states |
| 🌴 Oceania & Pacific | 31 | Australia, New Zealand, Fiji, Papua New Guinea, Samoa, Solomon Islands, Kiribati, Marshall Islands |
| 🌎 Mexico, Central America & Caribbean | 20 | Mexico, Cuba, DR, Costa Rica, Panama, Guatemala, Jamaica |

**Total: 1,001 cities**

### Data Per City

Each city includes 4 climate indicators:
- 🌡️ **Local Temperature** — Current average + rise since pre-industrial
- 🏭 **CO₂ Concentration** — Atmospheric CO₂ (421 ppm, 2024)
- 🌊 **Sea Level Rise** — Projected/regional rise in meters
- ⚡ **Extreme Weather Days** — Annual heat/cold/flood event days

### Data Sources by Region

| Region | Meteorological Source | IPCC Chapter |
|--------|----------------------|-------------|
| US & Canada | NOAA NCEI, ECCC | AR6 WG2 Ch.13 |
| Europe | Met Office, DWD, Météo-France, SMHI, etc. | AR6 WG2 Ch.13 |
| Asia | CMA, JMA, KMA, IMD, BMKG, PAGASA, etc. | AR6 WG2 Ch.10 |
| Africa | SAWS, NiMet, KMD, EMA, national services | AR6 WG2 Ch.9 |
| Middle East | MGM, PME, NCM, IRIMO, etc. | AR6 WG2 Ch.9 |
| South America | INPE, SMN, IDEAM, SENAMHI, etc. | AR6 WG2 Ch.12 |
| Oceania | BoM, NIWA, Pacific island services | AR6 WG2 Ch.11 |

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
