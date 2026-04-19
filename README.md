# 🌍 Carbon Fingerprint

**Discover Your Climate Identity** — powered by 144 years of planetary data.

A beautiful, single-page web app that calculates your personal carbon footprint through 5 simple questions, then visualizes it as a unique "Carbon Fingerprint" with animated SVG rings, city-specific climate data from NASA/NOAA, and personalized insights based on IPCC AR6 emission factors.

## ✨ Features

- **5-Question Lifestyle Quiz** — Transport, Diet, Energy, Consumption, Flights
- **IPCC AR6 Calibrated** — Emission factors from the latest climate science
- **Animated Fingerprint Visualization** — Concentric SVG rings with real fingerprint patterns
- **City Climate Data** — 6 cities with NASA GISS temperature data (1880–2024)
- **Personalized Insights** — Contextual tips with specific CO₂ savings
- **Share Card Generator** — html2canvas-powered PNG export with all your data
- **100% Client-Side** — Zero backend, zero API keys, ~66KB single file

## 🚀 Quick Start

```bash
# Just open index.html in a browser
open index.html

# Or serve locally
python3 -m http.server 8080
```

## 🌡️ Climate Data Sources

| Source | Data | Coverage |
|--------|------|----------|
| NASA GISS | Temperature anomalies | 1880–2024 |
| NOAA | Climate indicators | Global |
| NSIDC | Arctic ice extent | 1979–2024 |
| IRENA | Renewable energy share | 2000–2024 |
| WWF | Biodiversity index | 1970–2024 |
| IPCC AR6 | Emission factors | Current |
| FAO | Food system emissions | Current |

## 🏙️ Supported Cities

New York · London · Tokyo · Delhi · São Paulo · Sydney

## 📸 Share Card

The share card includes:
- Your Carbon Fingerprint visualization
- Breakdown by category (Transport, Diet, Energy, Flights)
- Comparison bars (You vs Global Average vs 1.5°C Target)
- City-specific climate data
- 1080×1350px PNG output (Instagram/social-ready)

## 📄 License

MIT
