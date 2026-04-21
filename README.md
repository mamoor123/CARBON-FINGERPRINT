# 🌍 Carbon Fingerprint

**Discover Your Climate Identity** — powered by 144 years of planetary data.

A single-page web app that calculates your personal carbon footprint through 5 simple questions, then visualizes it as a unique "Carbon Fingerprint" with animated SVG rings, real climate data from NASA/NOAA, and personalized insights based on IPCC AR6 emission factors. Covers **3,705 cities** across every continent.

## ✨ Features

- **5-Question Lifestyle Quiz** — Transport (incl. EV), Diet, Energy, Consumption, Flights
- **IPCC AR6 Calibrated** — Emission factors from peer-reviewed climate science
- **Animated Fingerprint Visualization** — Unique organic SVG pattern per user, seeded from answers
- **3,659 Cities** — Searchable dropdown with climate data spanning 157+ countries across 6 continents
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

## 🏙️ 3,659 Cities Worldwide

Searchable dropdown with instant filtering. Each city includes local temperature, temperature rise since pre-industrial era, CO₂ levels, sea level rise, and extreme weather days — sourced from regional meteorological services and IPCC AR6 chapters.

### Coverage by Region

| Region | Cities | Key Countries |
|--------|--------|---------------|
| 🇺🇸 United States & 🇨🇦 Canada | 406 | All 50 US states + all Canadian provinces — from Whitehorse to Halifax |
| 🇪🇺 Europe | 991 | UK, France, Germany, Italy, Spain, Portugal, Netherlands, Belgium, Switzerland, Austria, Nordics, Poland, Czech Republic, Slovakia, Hungary, Romania, Bulgaria, Greece, Turkey, Baltics, Balkans, Ireland |
| 🌏 Asia | 976 | China, India, Japan, South Korea, Philippines, Indonesia, Vietnam, Thailand, Malaysia, Myanmar, Cambodia, Laos, Bangladesh, Pakistan, Central Asia (Kazakhstan, Uzbekistan, Kyrgyzstan, Tajikistan, Turkmenistan) |
| 🌍 Africa | 568 | Nigeria, South Africa, Kenya, Ethiopia, Tanzania, Egypt, Morocco, Algeria, Tunisia, DRC, Congo, Ghana, Senegal, Cameroon, Angola, Mozambique, Madagascar, West/East/Southern/Central Africa |
| 🌎 South/Central America | 305 | Brazil, Argentina, Colombia, Chile, Peru, Venezuela, Ecuador, Bolivia, Paraguay, Uruguay, Central America & Caribbean |
| 🌴 Oceania & Pacific | 129 | Australia, New Zealand, Papua New Guinea, Fiji, Solomon Islands, Vanuatu, Samoa, Tonga, Micronesia, Palau, Marshall Islands, Kiribati, Tuvalu, New Caledonia, French Polynesia, Guam |
| 🕌 Middle East | 130 | Iran, Iraq, Saudi Arabia, UAE, Turkey, Jordan, Lebanon, Syria, Yemen, Oman, Bahrain, Qatar, Kuwait, Israel/Palestine, Georgia, Armenia, Azerbaijan |

**Total: 3,705 cities across 157+ countries**

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
| Europe | Met Office, DWD, Météo-France, SMHI, KNMI, Met Éireann, MeteoSwiss, ZAMG, IMGW, AEMET, IPMA, etc. | AR6 WG2 Ch.13 |
| Asia | CMA, JMA, KMA, IMD, BMKG, PAGASA, TMD, MetMalaysia, etc. | AR6 WG2 Ch.10 |
| Africa | SAWS, NiMet, KMD, EMA, INAM, METTELSAT, GMet, etc. | AR6 WG2 Ch.9 |
| Middle East | IRIMO, PME, MGM, Iraqi Met, JMD, etc. | AR6 WG2 Ch.9 |
| South America | INMET, SMN, IDEAM, SENAMHI, INAMHI, DMC, etc. | AR6 WG2 Ch.12 |
| Oceania | BoM, NIWA, NWS PNG, Fiji Met, Pacific island services | AR6 WG2 Ch.11 |

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
