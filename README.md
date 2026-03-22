# ☢ Global Nuclear Arsenal Tracker

An interactive 3D globe visualizing the world's nuclear forces using publicly available open-source intelligence data.

## Features

- **3D Interactive Globe** — Night lights Earth texture with country borders, drag to rotate, scroll to zoom
- **70+ Nuclear Facilities** — ICBM silos, submarine bases, air bases, storage sites, and test ranges across all 9 nuclear states
- **Targeting Arcs** — Visualize likely missile trajectories based on public strategic doctrine
- **Threat Assessment Mode** — Select any major city and see which nuclear facilities can reach it with estimated flight times
- **Submarine Patrols** — Animated submarine markers following estimated patrol routes
- **Range Visualization** — Toggle range domes showing missile reach
- **Historical Timeline** — Slider from 1945 to 2025 showing arsenal changes over 80 years
- **Country Filtering** — Filter by nuclear state or facility type

## Data Sources

- [Federation of American Scientists (FAS)](https://fas.org/issues/nuclear-weapons/status-world-nuclear-forces)
- [Stockholm International Peace Research Institute (SIPRI)](https://sipri.org/yearbook)
- [Nuclear Threat Initiative (NTI)](https://nti.org)
- [CSIS Missile Threat Project](https://missilethreat.csis.org)

## Disclaimer

This visualization uses publicly available estimates. Targeting trajectories and submarine patrol routes are educated estimates based on public strategic doctrine. For educational purposes only.

## Tech Stack

- React + TypeScript
- Three.js
- Vite
- GeoJSON (Natural Earth)

## Getting Started

npm install --legacy-peer-deps
npm run dev

Open http://localhost:5173

## Author

Jonathan Numa

## License

MIT
