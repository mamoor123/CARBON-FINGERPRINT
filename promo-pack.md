# 📣 Promotion Pack — Carbon Fingerprint

## 1. Google Search Console Setup (Do This First — 2 min)

1. Go to https://search.google.com/search-console/
2. Click "Add Property" → Enter `carbonprint.earth`
3. Choose "HTML tag" verification method
4. Copy the `content="..."` value from the meta tag they give you
5. Add it to `index.html` in the `<head>` section:
   ```html
   <meta name="google-site-verification" content="YOUR_CODE_HERE">
   ```
6. Click "Verify" in GSC
7. Go to "Sitemaps" → Add `sitemap.xml` → Submit
8. Go to "URL Inspection" → paste `https://carbonprint.earth/` → Request Indexing

## 2. Bing Webmaster Tools (Free extra traffic — 2 min)

1. Go to https://www.bing.com/webmasters/
2. Import from Google Search Console (easiest) OR add manually
3. Submit sitemap: `https://carbonprint.earth/sitemap.xml`

---

## 3. Reddit Posts

### r/environment (3.2M members)
**Title:** I built a carbon footprint calculator that generates unique SVG fingerprints from your answers — powered by 144 years of NASA climate data

**Post:**
Hey r/environment! I built a carbon footprint calculator with a twist — instead of just giving you a number, it generates a unique organic SVG fingerprint pattern based on your specific answers. No two fingerprints are the same.

It uses IPCC AR6 emission factors, real NASA GISS temperature data (1880–2025), and covers 5,012 cities across 157+ countries. 5 questions, 60 seconds, zero backend.

Some things that might interest this sub:
- Your result is compared against the 1.5°C target (2.3t CO₂/person)
- Each city shows local temperature rise since pre-industrial times
- The 144-year temperature timeline hits different when you see the actual data

Would love feedback from this community. [Try it here](https://carbonprint.earth/)

### r/sustainability (189K members)
**Title:** Made a free carbon footprint calculator — 5 questions, 60 seconds, unique fingerprint visualization

**Post:**
Hey everyone! I built a free carbon footprint calculator that creates a unique SVG fingerprint from your answers. It uses real IPCC AR6 data and NASA climate records.

What makes it different:
- 5 simple questions (no 30-minute form)
- Your result is a visual fingerprint that's unique to you
- Share card generator — PNG export for Instagram/social
- Covers 5,012 cities with real local climate data
- 10 languages, works offline as a PWA

Completely free, zero backend, privacy-respecting (no cookies, no tracking). Would love to hear what you think!

[carbonprint.earth](https://carbonprint.earth/)

### r/webdev (2.1M members)
**Title:** I built an entire carbon footprint calculator in a single HTML file — zero backend, SVG fingerprint generator, 5,012 cities, 10 languages

**Post:**
The whole app is one `index.html` file. No frameworks, no build step, no `node_modules`. CSS in `<style>`, JS in `<script>`, all data embedded.

Features:
- Procedurally generated SVG fingerprint (sine wave perturbation, seeded from user answers)
- 144 years of embedded NASA GISS temperature data
- 5,012 cities with IPCC AR6 climate indicators
- PWA with offline support
- i18n for 10 languages
- html2canvas share card generator
- `prefers-color-scheme` dark/light mode
- ARIA roles, keyboard nav, `prefers-reduced-motion`

Deployed on Vercel with zero config. Sometimes simple is better.

[Live demo](https://carbonprint.earth/) | [GitHub](https://github.com/mamoor123/CARBON-FINGERPRINT)

### r/opensource (447K members)
**Title:** Open-sourced my carbon footprint calculator — single HTML file, NASA climate data, SVG fingerprint visualization

**Post:**
Just open-sourced a carbon footprint calculator I've been building. MIT licensed, single HTML file, zero dependencies.

What it does:
- 5 lifestyle questions → unique SVG fingerprint visualization
- Real IPCC AR6 emission factors
- 144 years of NASA GISS temperature data
- 5,012 cities, 10 languages, PWA
- Share card PNG export + shareable URLs

Looking for contributors, feedback, or just people to try it out.

[GitHub](https://github.com/mamoor123/CARBON-FINGERPRINT) | [Live](https://carbonprint.earth/)

### r/InternetIsBeautiful (19.3M members)
**Title:** A carbon footprint calculator that generates a unique SVG fingerprint from your answers — 5 questions, 60 seconds

**Post:**
Really cool tool I found/made: you answer 5 quick questions about your lifestyle, and it generates a unique organic SVG fingerprint visualization based on your answers. No two people get the same pattern.

It's backed by real NASA climate data (144 years!) and IPCC emission factors. Covers 5,012 cities worldwide. Completely free, no sign-up, works offline.

[Check it out](https://carbonprint.earth/)

### r/dataisbeautiful (31M members)
**Title:** [OC] Visualizing 144 years of NASA global temperature data (1880–2025) alongside personal carbon footprint fingerprints

**Post:**
Built an interactive carbon footprint calculator that generates unique SVG fingerprints based on user answers, with embedded real NASA GISS temperature anomaly data from 1880 to 2025.

The fingerprint encodes your lifestyle data — ridge patterns are seeded from your answers, and category arcs scale with your emissions. The 144-year temperature timeline shows the unmistakable warming trend.

All data is real (not simulated). 5,012 cities, IPCC AR6 emission factors.

[Try it](https://carbonprint.earth/) | [Source](https://github.com/mamoor123/CARBON-FINGERPRINT)

---

## 4. Twitter/X Thread

**Tweet 1:**
I built a carbon footprint calculator that generates unique SVG fingerprints 🌍

5 questions. 60 seconds. Zero backend.

Backed by 144 years of NASA climate data + IPCC AR6 emission factors.

No two fingerprints are alike. Here's how it works 🧵

**Tweet 2:**
Each answer seeds a procedural algorithm that generates organic ridge patterns — concentric rings perturbed by overlapping sine waves, a central spiral whorl, and category-specific arcs.

Heavy meat eater? Your diet arc glows longer.
Frequent flyer? Your transport ring dominates.

**Tweet 3:**
The results include real NASA GISS temperature anomaly data from 1880 to 2025.

When someone sees their carbon fingerprint next to 144 years of actual temperature measurements, it hits different than a bar chart.

**Tweet 4:**
Covers 5,012 cities across 157+ countries with real climate indicators:
🌡️ Local temperature + rise since pre-industrial
🏭 CO₂ levels
🌊 Sea level rise
⚡ Extreme weather days

All sourced from IPCC AR6 regional chapters.

**Tweet 5:**
Tech stack: one HTML file.

No frameworks. No build step. No node_modules. CSS in style, JS in script, all data embedded.

PWA with offline support. 10 languages. Deployed on Vercel with zero config.

Sometimes simple is better.

**Tweet 6:**
Try it → [carbonprint.earth](https://carbonprint.earth/)
Star it → [github.com/mamoor123/CARBON-FINGERPRINT](https://github.com/mamoor123/CARBON-FINGERPRINT)

Happy Earth Day 2026 🌍

---

## 5. Hacker News "Show HN"

**Title:** Show HN: Carbon footprint calculator with unique SVG fingerprint visualization

**Body:**
I built a carbon footprint calculator that generates a unique organic SVG fingerprint based on your answers — no two are the same.

5 questions, 60 seconds, zero backend. One HTML file. Uses real IPCC AR6 emission factors and 144 years of NASA GISS temperature data.

5,012 cities, 10 languages, PWA, share card export.

[Live](https://carbonprint.earth/) | [Source](https://github.com/mamoor123/CARBON-FINGERPRINT)
