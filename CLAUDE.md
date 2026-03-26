# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm install --legacy-peer-deps   # Install dependencies (legacy flag required for peer dep conflicts)
npm run dev                      # Start dev server at http://localhost:5173
npm run build                    # Type-check + Vite production build
npm run preview                  # Preview production build
npm run lint                     # ESLint with --max-warnings 0 (strict — zero warnings allowed)
```

## Architecture

This is a single-page React/TypeScript app that renders an interactive 3D globe visualizing the global nuclear arsenal. There is no backend — all data is hardcoded or loaded from static assets.

### Rendering model

The app mixes two rendering systems:
- **React DOM** for all UI (panels, sliders, modals)
- **Three.js (via @react-three/fiber)** for the 3D globe scene

`threeScene.ts` is the core of the 3D layer — it creates and manages the Three.js scene imperatively, not through React Three Fiber components. It exposes a `SceneApi` object for calling methods from React (e.g., `setFacilityFilter`, `showRangeDome`, `setThreatMode`). `App.tsx` holds all shared state and passes it down to both the UI components and the scene via callbacks.

### Data layer (`src/data.ts`)

All domain data lives here:
- 70+ nuclear facility definitions (lat/lng, type, country, warhead count, missile range)
- `HISTORICAL_WARHEADS` — per-country warhead counts from 1945–2025
- `MAJOR_CITIES` — target cities for threat assessment
- `SUBMARINE_PATROLS` — patrol route waypoints
- Utility functions: `latLngToVector3()`, `haversineDistanceKm()`, `getFlightTimeMinutes()`, `getWarheadsForYear()`

### Static assets (`public/`)

- `earth-night.jpg` — Earth night-lights texture used as the globe surface
- `ne_110m_admin_0_countries.geojson` — Country border polygons for the globe overlay

### Component responsibilities

| File | Role |
|---|---|
| `App.tsx` | Root state, filter/timeline/threat state, wires scene + UI |
| `threeScene.ts` | Three.js scene creation, globe, facility markers, range domes, threat arcs, submarine animations |
| `SidePanel.tsx` | Filter controls, country selection, warhead stats, threat mode toggle |
| `DetailPanel.tsx` | Selected facility info, range/target buttons |
| `ThreatPanel.tsx` | Target city threat assessment, flight times |
| `TimelineSlider.tsx` | 1945–2025 animated timeline, historical event markers |
| `LandingScreen.tsx` | Intro splash with terminal animation |
| `DataSourcesModal.tsx` | Data provenance info and disclaimers |
