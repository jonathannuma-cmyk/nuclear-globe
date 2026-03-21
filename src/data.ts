export type FacilityType = "icbm" | "submarine" | "airbase" | "storage" | "test";

export interface LikelyTarget {
  name: string;
  lat: number;
  lng: number;
}

export interface Facility {
  name: string;
  country: string;
  lat: number;
  lng: number;
  type: FacilityType;
  missiles: string;
  warheads: number;
  range: number;
  status: string;
  likelyTargets?: LikelyTarget[];
  baseName?: string;
}

export interface PatrolWaypoint {
  lat: number;
  lng: number;
}

export interface SubmarinePatrol {
  name: string;
  country: string;
  baseName: string;
  waypoints: PatrolWaypoint[];
  missiles: string;
  warheads: number;
  range: number;
}

export const COUNTRY_COLORS: Record<string, string> = {
  "United States": "#3b82f6",
  Russia: "#ef4444",
  China: "#f59e0b",
  France: "#8b5cf6",
  "United Kingdom": "#06b6d4",
  India: "#f97316",
  Pakistan: "#22c55e",
  Israel: "#a855f7",
  "North Korea": "#ec4899",
};

export const COUNTRY_WARHEADS: Record<string, number> = {
  "United States": 5044,
  Russia: 5580,
  China: 500,
  France: 290,
  "United Kingdom": 225,
  India: 172,
  Pakistan: 170,
  Israel: 90,
  "North Korea": 50,
};

/** Historical warhead counts by country and year (source years only). */
export const HISTORICAL_WARHEADS: Record<string, Record<number, number>> = {
  "United States": {
    1945: 6, 1950: 369, 1955: 3057, 1960: 20434, 1965: 31642,
    1970: 26662, 1975: 27519, 1980: 24304, 1985: 23368,
    1990: 21211, 1995: 10953, 2000: 10577, 2005: 10295,
    2010: 5113, 2015: 4571, 2020: 5800, 2025: 5044,
  },
  Russia: {
    1945: 0, 1950: 5, 1955: 200, 1960: 1627, 1965: 6144,
    1970: 11736, 1975: 23435, 1980: 30665, 1985: 39197,
    1990: 33417, 1995: 18399, 2000: 12188, 2005: 17000,
    2010: 12000, 2015: 7700, 2020: 6375, 2025: 5580,
  },
  China: {
    1945: 0, 1950: 0, 1955: 0, 1960: 0, 1965: 5,
    1970: 75, 1975: 185, 1980: 280, 1985: 425,
    1990: 430, 1995: 400, 2000: 400, 2005: 400,
    2010: 280, 2015: 260, 2020: 350, 2025: 500,
  },
  France: {
    1945: 0, 1950: 0, 1955: 0, 1960: 1, 1965: 32,
    1970: 36, 1975: 188, 1980: 250, 1985: 360,
    1990: 505, 1995: 500, 2000: 470, 2005: 350,
    2010: 300, 2015: 300, 2020: 290, 2025: 290,
  },
  "United Kingdom": {
    1945: 0, 1950: 0, 1955: 10, 1960: 30, 1965: 310,
    1970: 394, 1975: 350, 1980: 350, 1985: 300,
    1990: 300, 1995: 300, 2000: 280, 2005: 281,
    2010: 225, 2015: 215, 2020: 225, 2025: 225,
  },
  India: {
    1945: 0, 1950: 0, 1955: 0, 1960: 0, 1965: 0,
    1970: 0, 1975: 0, 1980: 0, 1985: 0,
    1990: 0, 1995: 0, 2000: 60, 2005: 40,
    2010: 80, 2015: 120, 2020: 156, 2025: 172,
  },
  Pakistan: {
    1945: 0, 1950: 0, 1955: 0, 1960: 0, 1965: 0,
    1970: 0, 1975: 0, 1980: 0, 1985: 0,
    1990: 0, 1995: 0, 2000: 24, 2005: 30,
    2010: 90, 2015: 130, 2020: 160, 2025: 170,
  },
  Israel: {
    1945: 0, 1950: 0, 1955: 0, 1960: 0, 1965: 0,
    1970: 8, 1975: 20, 1980: 37, 1985: 44,
    1990: 55, 1995: 64, 2000: 78, 2005: 82,
    2010: 80, 2015: 80, 2020: 90, 2025: 90,
  },
  "North Korea": {
    1945: 0, 1950: 0, 1955: 0, 1960: 0, 1965: 0,
    1970: 0, 1975: 0, 1980: 0, 1985: 0,
    1990: 0, 1995: 0, 2000: 0, 2005: 0,
    2010: 0, 2015: 10, 2020: 40, 2025: 50,
  },
};

const TIMELINE_YEARS = [1945, 1950, 1955, 1960, 1965, 1970, 1975, 1980, 1985, 1990, 1995, 2000, 2005, 2010, 2015, 2020, 2025];

function interpolateWarheads(countryData: Record<number, number>, year: number): number {
  if (countryData[year] !== undefined) return countryData[year];
  let prev = TIMELINE_YEARS[0];
  let next = TIMELINE_YEARS[TIMELINE_YEARS.length - 1];
  for (const y of TIMELINE_YEARS) {
    if (y <= year) prev = y;
    if (y >= year && next > year) {
      next = y;
      break;
    }
  }
  const a = countryData[prev] ?? 0;
  const b = countryData[next] ?? 0;
  if (prev === next) return a;
  const t = (year - prev) / (next - prev);
  return Math.round(a + t * (b - a));
}

export interface WarheadsByYear {
  total: number;
  byCountry: Record<string, number>;
  nuclearStatesCount: number;
}

export function getWarheadsForYear(year: number): WarheadsByYear {
  const byCountry: Record<string, number> = {};
  let total = 0;
  for (const country of Object.keys(HISTORICAL_WARHEADS)) {
    const count = interpolateWarheads(HISTORICAL_WARHEADS[country], year);
    byCountry[country] = count;
    total += count;
  }
  const nuclearStatesCount = Object.values(byCountry).filter((c) => c > 0).length;
  return { total, byCountry, nuclearStatesCount };
}

/** Year for which the deployed-warhead aggregate below is shown in the UI. */
export const DEPLOYED_WARHEADS_DATA_YEAR = 2025;

/**
 * Approximate count of warheads actively deployed worldwide (open estimates, 2025).
 * Breakdown: US 1,770; Russia 1,710; UK 120; France 280; China 24; others 0 officially deployed.
 */
export const DEPLOYED_WARHEADS_2025 = 3904;

export const TYPE_LABELS: Record<FacilityType, string> = {
  icbm: "ICBM / Missile Silo",
  submarine: "Submarine Base",
  airbase: "Nuclear Air Base",
  storage: "Storage / Production",
  test: "Test Site",
};

export interface MajorCity {
  name: string;
  country: string;
  lat: number;
  lng: number;
}

export const MAJOR_CITIES: MajorCity[] = [
  { name: "New York", country: "United States", lat: 40.71, lng: -74.01 },
  { name: "Washington DC", country: "United States", lat: 38.9, lng: -77.04 },
  { name: "Los Angeles", country: "United States", lat: 34.05, lng: -118.24 },
  { name: "Chicago", country: "United States", lat: 41.88, lng: -87.63 },
  { name: "San Francisco", country: "United States", lat: 37.77, lng: -122.42 },
  { name: "Houston", country: "United States", lat: 29.76, lng: -95.37 },
  { name: "Honolulu", country: "United States", lat: 21.31, lng: -157.86 },
  { name: "Toronto", country: "Canada", lat: 43.65, lng: -79.38 },
  { name: "London", country: "United Kingdom", lat: 51.51, lng: -0.13 },
  { name: "Paris", country: "France", lat: 48.86, lng: 2.35 },
  { name: "Berlin", country: "Germany", lat: 52.52, lng: 13.41 },
  { name: "Rome", country: "Italy", lat: 41.9, lng: 12.5 },
  { name: "Kyiv", country: "Ukraine", lat: 50.45, lng: 30.52 },
  { name: "Moscow", country: "Russia", lat: 55.75, lng: 37.62 },
  { name: "Beijing", country: "China", lat: 39.9, lng: 116.4 },
  { name: "Shanghai", country: "China", lat: 31.23, lng: 121.47 },
  { name: "Tokyo", country: "Japan", lat: 35.68, lng: 139.69 },
  { name: "Seoul", country: "South Korea", lat: 37.57, lng: 126.98 },
  { name: "Taipei", country: "Taiwan", lat: 25.03, lng: 121.57 },
  { name: "Mumbai", country: "India", lat: 19.08, lng: 72.88 },
  { name: "New Delhi", country: "India", lat: 28.61, lng: 77.21 },
  { name: "Islamabad", country: "Pakistan", lat: 33.69, lng: 73.04 },
  { name: "Tehran", country: "Iran", lat: 35.69, lng: 51.39 },
  { name: "Tel Aviv", country: "Israel", lat: 32.08, lng: 34.78 },
  { name: "Riyadh", country: "Saudi Arabia", lat: 24.71, lng: 46.68 },
  { name: "Dubai", country: "UAE", lat: 25.2, lng: 55.27 },
  { name: "Istanbul", country: "Turkey", lat: 41.01, lng: 28.98 },
  { name: "Singapore", country: "Singapore", lat: 1.35, lng: 103.82 },
  { name: "Sydney", country: "Australia", lat: -33.87, lng: 151.21 },
];

export const SUBMARINE_PATROLS: SubmarinePatrol[] = [
  {
    name: "Ohio-class SSBN (Atlantic)",
    country: "United States",
    baseName: "Kings Bay Naval Base",
    missiles: "Trident II D5",
    warheads: 192,
    range: 12000,
    waypoints: [
      { lat: 30.8, lng: -81.5 },
      { lat: 35.0, lng: -65.0 },
      { lat: 42.0, lng: -55.0 },
      { lat: 50.0, lng: -40.0 },
      { lat: 55.0, lng: -30.0 },
      { lat: 50.0, lng: -20.0 },
      { lat: 42.0, lng: -35.0 },
      { lat: 35.0, lng: -55.0 },
    ],
  },
  {
    name: "Ohio-class SSBN (Pacific)",
    country: "United States",
    baseName: "Bangor Naval Base",
    missiles: "Trident II D5",
    warheads: 192,
    range: 12000,
    waypoints: [
      { lat: 47.7, lng: -122.7 },
      { lat: 45.0, lng: -140.0 },
      { lat: 40.0, lng: -155.0 },
      { lat: 35.0, lng: -170.0 },
      { lat: 30.0, lng: 175.0 },
      { lat: 35.0, lng: -165.0 },
      { lat: 42.0, lng: -150.0 },
      { lat: 47.0, lng: -135.0 },
    ],
  },
  {
    name: "Borei-class SSBN (Northern Fleet)",
    country: "Russia",
    baseName: "Gadzhiyevo",
    missiles: "Bulava SLBM",
    warheads: 96,
    range: 9300,
    waypoints: [
      { lat: 69.2, lng: 33.3 },
      { lat: 72.0, lng: 25.0 },
      { lat: 75.0, lng: 15.0 },
      { lat: 78.0, lng: 5.0 },
      { lat: 80.0, lng: -10.0 },
      { lat: 78.0, lng: -20.0 },
      { lat: 74.0, lng: -5.0 },
      { lat: 71.0, lng: 20.0 },
    ],
  },
  {
    name: "Delta IV SSBN (Pacific Fleet)",
    country: "Russia",
    baseName: "Vilyuchinsk",
    missiles: "Sineva SLBM",
    warheads: 64,
    range: 11500,
    waypoints: [
      { lat: 52.9, lng: 158.4 },
      { lat: 55.0, lng: 165.0 },
      { lat: 58.0, lng: 175.0 },
      { lat: 55.0, lng: -175.0 },
      { lat: 50.0, lng: -170.0 },
      { lat: 48.0, lng: -178.0 },
      { lat: 50.0, lng: 170.0 },
      { lat: 52.0, lng: 162.0 },
    ],
  },
  {
    name: "Vanguard-class SSBN (CASD)",
    country: "United Kingdom",
    baseName: "HMNB Clyde (Faslane)",
    missiles: "Trident II D5",
    warheads: 40,
    range: 12000,
    waypoints: [
      { lat: 56.0, lng: -4.8 },
      { lat: 58.0, lng: -12.0 },
      { lat: 60.0, lng: -20.0 },
      { lat: 58.0, lng: -28.0 },
      { lat: 55.0, lng: -25.0 },
      { lat: 52.0, lng: -18.0 },
      { lat: 54.0, lng: -10.0 },
      { lat: 56.0, lng: -6.0 },
    ],
  },
  {
    name: "Triomphant-class SSBN",
    country: "France",
    baseName: "Île Longue",
    missiles: "M51 SLBM",
    warheads: 80,
    range: 10000,
    waypoints: [
      { lat: 48.3, lng: -4.5 },
      { lat: 46.0, lng: -10.0 },
      { lat: 43.0, lng: -15.0 },
      { lat: 40.0, lng: -20.0 },
      { lat: 38.0, lng: -25.0 },
      { lat: 40.0, lng: -22.0 },
      { lat: 44.0, lng: -14.0 },
      { lat: 47.0, lng: -8.0 },
    ],
  },
  {
    name: "Jin-class SSBN (Type 094)",
    country: "China",
    baseName: "Yulin Naval Base",
    missiles: "JL-3 SLBM",
    warheads: 72,
    range: 10000,
    waypoints: [
      { lat: 18.2, lng: 109.6 },
      { lat: 15.0, lng: 114.0 },
      { lat: 12.0, lng: 118.0 },
      { lat: 10.0, lng: 122.0 },
      { lat: 13.0, lng: 125.0 },
      { lat: 16.0, lng: 120.0 },
      { lat: 18.0, lng: 115.0 },
      { lat: 18.5, lng: 111.0 },
    ],
  },
  {
    name: "Arihant-class SSBN",
    country: "India",
    baseName: "INS Arihant Base",
    missiles: "K-4 SLBM",
    warheads: 12,
    range: 3500,
    waypoints: [
      { lat: 17.7, lng: 83.3 },
      { lat: 15.0, lng: 80.0 },
      { lat: 12.0, lng: 76.0 },
      { lat: 10.0, lng: 73.0 },
      { lat: 12.0, lng: 70.0 },
      { lat: 15.0, lng: 74.0 },
      { lat: 17.0, lng: 78.0 },
      { lat: 17.5, lng: 82.0 },
    ],
  },
];

const EARTH_RADIUS_KM = 6371;

const NUCLEAR_STATES = [
  "United States",
  "Russia",
  "China",
  "France",
  "United Kingdom",
  "India",
  "Pakistan",
  "Israel",
  "North Korea",
] as const;

const WESTERN_BLOC = new Set([
  "United States",
  "United Kingdom",
  "France",
]);

const WESTERN_ALIGNED = new Set([
  "United States",
  "United Kingdom",
  "France",
  "Germany",
  "Belgium",
  "Netherlands",
  "Italy",
  "Turkey",
  "Canada",
  "Japan",
  "South Korea",
  "Australia",
  "Poland",
  "Spain",
  "Portugal",
  "Norway",
  "Denmark",
  "Czech Republic",
  "Romania",
  "Bulgaria",
  "Greece",
  "Hungary",
  "Latvia",
  "Lithuania",
  "Estonia",
  "Croatia",
  "Slovenia",
  "Slovakia",
  "Albania",
  "Montenegro",
  "North Macedonia",
  "Finland",
  "Sweden",
  "Iceland",
  "Luxembourg",
  "Ukraine",
  "Taiwan",
  "Singapore",
  "UAE",
  "Israel",
  "Brazil",
  "Mexico",
  "Colombia",
  "Philippines",
  "Thailand",
]);

/**
 * Returns the list of nuclear state country names that are considered
 * potential threats to a target city in the given country.
 * Uses alliance/threat mapping: Western Bloc never threatens Western-aligned;
 * specific rules for Russia, China, India, Pakistan, Israel, North Korea;
 * neutral nations see all nuclear states as threats.
 */
export function getThreateningCountries(targetCountry: string): string[] {
  const excludeSelf = (list: string[]) =>
    list.filter((c) => c !== targetCountry);

  // Specific rivalries / regional threat assumptions for the threat assessment mode.
  if (targetCountry === "India") {
    return ["China", "Pakistan", "North Korea"];
  }
  if (targetCountry === "Pakistan") {
    return ["India", "Israel"];
  }
  if (targetCountry === "China") {
    return ["United States", "United Kingdom", "France", "India", "Russia"];
  }
  if (targetCountry === "Russia") {
    return ["United States", "United Kingdom", "France", "China"];
  }
  if (targetCountry === "North Korea") {
    return ["United States", "United Kingdom", "France"];
  }
  if (targetCountry === "Japan" || targetCountry === "South Korea") {
    return ["Russia", "China", "North Korea"];
  }
  if (targetCountry === "Iran") {
    return ["Israel", "United States", "United Kingdom", "France"];
  }
  if (targetCountry === "Israel") {
    // Israel is treated as an allied state in the visualization.
    // Keep only direct adversaries on the threat list.
    return ["Pakistan", "North Korea"];
  }
  if (WESTERN_BLOC.has(targetCountry) || WESTERN_ALIGNED.has(targetCountry)) {
    return excludeSelf([
      "Russia",
      "China",
      "North Korea",
      "India",
      "Pakistan",
    ]);
  }
  return excludeSelf([...NUCLEAR_STATES]);
}

/** Great-circle distance in km (Haversine). */
export function haversineDistanceKm(
  lat1: number,
  lng1: number,
  lat2: number,
  lng2: number
): number {
  const toRad = (d: number) => (d * Math.PI) / 180;
  const lat1R = toRad(lat1);
  const lat2R = toRad(lat2);
  const dLat = toRad(lat2 - lat1);
  const dLng = toRad(lng2 - lng1);
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(lat1R) * Math.cos(lat2R) * Math.sin(dLng / 2) ** 2;
  const c = 2 * Math.asin(Math.sqrt(a));
  return EARTH_RADIUS_KM * c;
}

/** Approx flight time in minutes: ICBM ~7 km/s, SLBM ~5 km/s, bomber ~0.28 km/s (Mach 0.85). */
export function getFlightTimeMinutes(
  facilityType: FacilityType,
  distanceKm: number
): number {
  let speedKmPerSec: number;
  if (facilityType === "icbm") speedKmPerSec = 7;
  else if (facilityType === "submarine") speedKmPerSec = 5;
  else if (facilityType === "airbase") speedKmPerSec = 0.28;
  else speedKmPerSec = 7; // storage/test default to ICBM-like
  return (distanceKm / speedKmPerSec) / 60;
}

export const facilities: Facility[] = [
  // UNITED STATES
  {
    name: "Malmstrom AFB",
    country: "United States",
    lat: 47.506,
    lng: -111.183,
    type: "icbm",
    missiles: "Minuteman III",
    warheads: 150,
    range: 13000,
    status: "Active",
    likelyTargets: [
      { name: "Moscow", lat: 55.75, lng: 37.62 },
      { name: "St Petersburg", lat: 59.93, lng: 30.32 },
      { name: "Novosibirsk", lat: 55.0, lng: 82.9 },
      { name: "Beijing", lat: 39.9, lng: 116.4 },
    ],
  },
  {
    name: "Minot AFB",
    country: "United States",
    lat: 48.416,
    lng: -101.358,
    type: "icbm",
    missiles: "Minuteman III",
    warheads: 150,
    range: 13000,
    status: "Active",
    likelyTargets: [
      { name: "Moscow", lat: 55.75, lng: 37.62 },
      { name: "St Petersburg", lat: 59.93, lng: 30.32 },
      { name: "Novosibirsk", lat: 55.0, lng: 82.9 },
      { name: "Beijing", lat: 39.9, lng: 116.4 },
    ],
  },
  {
    name: "F.E. Warren AFB",
    country: "United States",
    lat: 41.153,
    lng: -104.866,
    type: "icbm",
    missiles: "Minuteman III",
    warheads: 150,
    range: 13000,
    status: "Active",
    likelyTargets: [
      { name: "Moscow", lat: 55.75, lng: 37.62 },
      { name: "St Petersburg", lat: 59.93, lng: 30.32 },
      { name: "Novosibirsk", lat: 55.0, lng: 82.9 },
      { name: "Beijing", lat: 39.9, lng: 116.4 },
    ],
  },
  {
    name: "Kings Bay Naval Base",
    country: "United States",
    lat: 30.796,
    lng: -81.563,
    type: "submarine",
    missiles: "Trident II D5",
    warheads: 960,
    range: 12000,
    status: "Active",
    likelyTargets: [
      { name: "Moscow", lat: 55.75, lng: 37.62 },
      { name: "Beijing", lat: 39.9, lng: 116.4 },
      { name: "Pyongyang", lat: 39.03, lng: 125.73 },
    ],
  },
  {
    name: "Bangor Naval Base",
    country: "United States",
    lat: 47.722,
    lng: -122.714,
    type: "submarine",
    missiles: "Trident II D5",
    warheads: 960,
    range: 12000,
    status: "Active",
    likelyTargets: [
      { name: "Moscow", lat: 55.75, lng: 37.62 },
      { name: "Beijing", lat: 39.9, lng: 116.4 },
      { name: "Pyongyang", lat: 39.03, lng: 125.73 },
    ],
  },
  {
    name: "Whiteman AFB",
    country: "United States",
    lat: 38.73,
    lng: -93.548,
    type: "airbase",
    missiles: "B-2 Spirit / B-61, B-83",
    warheads: 20,
    range: 11100,
    status: "Active",
    likelyTargets: [
      { name: "Moscow", lat: 55.75, lng: 37.62 },
      { name: "Tehran", lat: 35.69, lng: 51.39 },
    ],
  },
  {
    name: "Barksdale AFB",
    country: "United States",
    lat: 32.501,
    lng: -93.663,
    type: "airbase",
    missiles: "B-52H / AGM-86B ALCM",
    warheads: 44,
    range: 16232,
    status: "Active",
    likelyTargets: [
      { name: "Moscow", lat: 55.75, lng: 37.62 },
      { name: "Tehran", lat: 35.69, lng: 51.39 },
    ],
  },
  {
    name: "Pantex Plant",
    country: "United States",
    lat: 35.317,
    lng: -101.571,
    type: "storage",
    missiles: "Assembly/Disassembly",
    warheads: 2000,
    range: 0,
    status: "Active",
  },
  {
    name: "Kirtland AFB Storage",
    country: "United States",
    lat: 35.049,
    lng: -106.567,
    type: "storage",
    missiles: "Underground Vaults",
    warheads: 0,
    range: 0,
    status: "Active",
  },
  {
    name: "Nevada National Security Site",
    country: "United States",
    lat: 37.0,
    lng: -116.05,
    type: "test",
    missiles: "Subcritical Tests",
    warheads: 0,
    range: 0,
    status: "Active",
  },
  // US facilities in Alaska
  {
    name: "Fort Greely (GBI Site)",
    country: "United States",
    lat: 63.96,
    lng: -145.73,
    type: "icbm",
    missiles: "Ground-Based Interceptors (GBI) - Missile Defense",
    warheads: 0,
    range: 6000,
    status: "Active",
    likelyTargets: [
      { name: "Pyongyang", lat: 39.03, lng: 125.73 },
    ],
  },
  {
    name: "Eielson AFB",
    country: "United States",
    lat: 64.66,
    lng: -147.1,
    type: "airbase",
    missiles: "F-35A (nuclear-capable, DCA role)",
    warheads: 0,
    range: 2200,
    status: "Active",
    likelyTargets: [],
  },
  {
    name: "Clear Space Force Station",
    country: "United States",
    lat: 64.29,
    lng: -149.19,
    type: "storage",
    missiles: "LRDR Missile Warning Radar",
    warheads: 0,
    range: 0,
    status: "Active",
  },
  // US nuclear sharing bases in Europe (NATO B-61 bombs)
  {
    name: "Büchel Air Base",
    country: "United States",
    lat: 50.17,
    lng: 7.06,
    type: "storage",
    missiles: "B-61 Tactical Nukes (NATO Sharing - Germany)",
    warheads: 20,
    range: 0,
    status: "Active",
  },
  {
    name: "Kleine Brogel Air Base",
    country: "United States",
    lat: 51.17,
    lng: 5.47,
    type: "storage",
    missiles: "B-61 Tactical Nukes (NATO Sharing - Belgium)",
    warheads: 20,
    range: 0,
    status: "Active",
  },
  {
    name: "Volkel Air Base",
    country: "United States",
    lat: 51.66,
    lng: 5.71,
    type: "storage",
    missiles: "B-61 Tactical Nukes (NATO Sharing - Netherlands)",
    warheads: 20,
    range: 0,
    status: "Active",
  },
  {
    name: "Aviano Air Base",
    country: "United States",
    lat: 46.03,
    lng: 12.6,
    type: "storage",
    missiles: "B-61 Tactical Nukes (NATO Sharing - Italy)",
    warheads: 40,
    range: 0,
    status: "Active",
  },
  {
    name: "Incirlik Air Base",
    country: "United States",
    lat: 37.0,
    lng: 35.43,
    type: "storage",
    missiles: "B-61 Tactical Nukes (NATO Sharing - Turkey)",
    warheads: 50,
    range: 0,
    status: "Active",
  },
  // RUSSIA
  {
    name: "Kozelsk (60th Missile Div.)",
    country: "Russia",
    lat: 54.033,
    lng: 36.0,
    type: "icbm",
    missiles: "SS-27 Topol-M",
    warheads: 60,
    range: 11000,
    status: "Active",
    likelyTargets: [
      { name: "Washington DC", lat: 38.9, lng: -77.04 },
      { name: "New York", lat: 40.71, lng: -74.01 },
      { name: "Chicago", lat: 41.88, lng: -87.63 },
      { name: "Los Angeles", lat: 34.05, lng: -118.24 },
    ],
  },
  {
    name: "Tatishchevo (60th Army)",
    country: "Russia",
    lat: 51.7,
    lng: 45.4,
    type: "icbm",
    missiles: "SS-27 / SS-29 Sarmat",
    warheads: 120,
    range: 18000,
    status: "Active",
    likelyTargets: [
      { name: "Washington DC", lat: 38.9, lng: -77.04 },
      { name: "New York", lat: 40.71, lng: -74.01 },
      { name: "Chicago", lat: 41.88, lng: -87.63 },
      { name: "Los Angeles", lat: 34.05, lng: -118.24 },
    ],
  },
  {
    name: "Dombarovsky",
    country: "Russia",
    lat: 50.75,
    lng: 59.53,
    type: "icbm",
    missiles: "SS-18 Satan / SS-29",
    warheads: 100,
    range: 16000,
    status: "Active",
    likelyTargets: [
      { name: "Washington DC", lat: 38.9, lng: -77.04 },
      { name: "New York", lat: 40.71, lng: -74.01 },
      { name: "Chicago", lat: 41.88, lng: -87.63 },
      { name: "Los Angeles", lat: 34.05, lng: -118.24 },
    ],
  },
  {
    name: "Uzhur (62nd Missile Div.)",
    country: "Russia",
    lat: 55.3,
    lng: 89.8,
    type: "icbm",
    missiles: "SS-18 Satan",
    warheads: 60,
    range: 16000,
    status: "Active",
    likelyTargets: [
      { name: "Washington DC", lat: 38.9, lng: -77.04 },
      { name: "New York", lat: 40.71, lng: -74.01 },
      { name: "Chicago", lat: 41.88, lng: -87.63 },
      { name: "Los Angeles", lat: 34.05, lng: -118.24 },
    ],
  },
  {
    name: "Novosibirsk (39th Div.)",
    country: "Russia",
    lat: 55.0,
    lng: 82.9,
    type: "icbm",
    missiles: "SS-25 Topol",
    warheads: 36,
    range: 10500,
    status: "Active",
    likelyTargets: [
      { name: "Washington DC", lat: 38.9, lng: -77.04 },
      { name: "New York", lat: 40.71, lng: -74.01 },
      { name: "Chicago", lat: 41.88, lng: -87.63 },
      { name: "Los Angeles", lat: 34.05, lng: -118.24 },
    ],
  },
  {
    name: "Yoshkar-Ola (14th Div.)",
    country: "Russia",
    lat: 56.6,
    lng: 47.9,
    type: "icbm",
    missiles: "Yars RS-24",
    warheads: 36,
    range: 12000,
    status: "Active",
    likelyTargets: [
      { name: "Washington DC", lat: 38.9, lng: -77.04 },
      { name: "New York", lat: 40.71, lng: -74.01 },
      { name: "Chicago", lat: 41.88, lng: -87.63 },
      { name: "Los Angeles", lat: 34.05, lng: -118.24 },
    ],
  },
  {
    name: "Gadzhiyevo (Northern Fleet)",
    country: "Russia",
    lat: 69.25,
    lng: 33.33,
    type: "submarine",
    missiles: "Bulava SLBM",
    warheads: 384,
    range: 9300,
    status: "Active",
    likelyTargets: [
      { name: "Washington DC", lat: 38.9, lng: -77.04 },
      { name: "London", lat: 51.51, lng: -0.13 },
      { name: "New York", lat: 40.71, lng: -74.01 },
    ],
  },
  {
    name: "Vilyuchinsk (Pacific Fleet)",
    country: "Russia",
    lat: 52.93,
    lng: 158.4,
    type: "submarine",
    missiles: "Sineva / Liner SLBM",
    warheads: 256,
    range: 11500,
    status: "Active",
    likelyTargets: [
      { name: "Washington DC", lat: 38.9, lng: -77.04 },
      { name: "London", lat: 51.51, lng: -0.13 },
      { name: "New York", lat: 40.71, lng: -74.01 },
    ],
  },
  {
    name: "Engels-2 Air Base",
    country: "Russia",
    lat: 51.483,
    lng: 46.2,
    type: "airbase",
    missiles: "Tu-160 / Kh-102 ALCM",
    warheads: 60,
    range: 5500,
    status: "Active",
    likelyTargets: [
      { name: "Washington DC", lat: 38.9, lng: -77.04 },
      { name: "Ramstein AFB Germany", lat: 49.44, lng: 7.6 },
    ],
  },
  {
    name: "Ukrainka Air Base",
    country: "Russia",
    lat: 51.17,
    lng: 128.4,
    type: "airbase",
    missiles: "Tu-95MS / Kh-55",
    warheads: 40,
    range: 3000,
    status: "Active",
    likelyTargets: [
      { name: "Washington DC", lat: 38.9, lng: -77.04 },
      { name: "Ramstein AFB Germany", lat: 49.44, lng: 7.6 },
    ],
  },
  {
    name: "Sarov (Arzamas-16)",
    country: "Russia",
    lat: 54.933,
    lng: 43.317,
    type: "storage",
    missiles: "Research/Production",
    warheads: 0,
    range: 0,
    status: "Active",
  },
  {
    name: "Novaya Zemlya Test Site",
    country: "Russia",
    lat: 73.37,
    lng: 54.97,
    type: "test",
    missiles: "Nuclear Test Range",
    warheads: 0,
    range: 0,
    status: "Standby",
  },
  // CHINA
  {
    name: "Jianshui (Base 63)",
    country: "China",
    lat: 23.6,
    lng: 102.8,
    type: "icbm",
    missiles: "DF-31AG",
    warheads: 12,
    range: 11200,
    status: "Active",
    likelyTargets: [
      { name: "Washington DC", lat: 38.9, lng: -77.04 },
      { name: "Los Angeles", lat: 34.05, lng: -118.24 },
      { name: "Guam", lat: 13.44, lng: 144.79 },
      { name: "New Delhi", lat: 28.61, lng: 77.21 },
    ],
  },
  {
    name: "Sundian (Base 65)",
    country: "China",
    lat: 40.5,
    lng: 110.3,
    type: "icbm",
    missiles: "DF-41",
    warheads: 36,
    range: 15000,
    status: "Active",
    likelyTargets: [
      { name: "Washington DC", lat: 38.9, lng: -77.04 },
      { name: "Los Angeles", lat: 34.05, lng: -118.24 },
      { name: "Guam", lat: 13.44, lng: 144.79 },
      { name: "New Delhi", lat: 28.61, lng: 77.21 },
    ],
  },
  {
    name: "Haiyan (Yumen Silos)",
    country: "China",
    lat: 40.1,
    lng: 97.0,
    type: "icbm",
    missiles: "DF-41 (silo-based)",
    warheads: 120,
    range: 15000,
    status: "Under Construction",
    likelyTargets: [
      { name: "Washington DC", lat: 38.9, lng: -77.04 },
      { name: "Los Angeles", lat: 34.05, lng: -118.24 },
      { name: "Guam", lat: 13.44, lng: 144.79 },
      { name: "New Delhi", lat: 28.61, lng: 77.21 },
    ],
  },
  {
    name: "Hami Silo Field",
    country: "China",
    lat: 42.8,
    lng: 93.5,
    type: "icbm",
    missiles: "DF-41 (silo-based)",
    warheads: 110,
    range: 15000,
    status: "Under Construction",
    likelyTargets: [
      { name: "Washington DC", lat: 38.9, lng: -77.04 },
      { name: "Los Angeles", lat: 34.05, lng: -118.24 },
      { name: "Guam", lat: 13.44, lng: 144.79 },
      { name: "New Delhi", lat: 28.61, lng: 77.21 },
    ],
  },
  {
    name: "Yulin Naval Base (Hainan)",
    country: "China",
    lat: 18.22,
    lng: 109.57,
    type: "submarine",
    missiles: "JL-3 SLBM",
    warheads: 72,
    range: 10000,
    status: "Active",
    likelyTargets: [
      { name: "Guam", lat: 13.44, lng: 144.79 },
      { name: "Honolulu", lat: 21.31, lng: -157.86 },
      { name: "Tokyo", lat: 35.68, lng: 139.69 },
    ],
  },
  {
    name: "Jianjiangkou Sub Base",
    country: "China",
    lat: 36.1,
    lng: 120.6,
    type: "submarine",
    missiles: "JL-2 SLBM",
    warheads: 48,
    range: 7400,
    status: "Active",
    likelyTargets: [
      { name: "Guam", lat: 13.44, lng: 144.79 },
      { name: "Honolulu", lat: 21.31, lng: -157.86 },
      { name: "Tokyo", lat: 35.68, lng: 139.69 },
    ],
  },
  {
    name: "Lop Nur Test Site",
    country: "China",
    lat: 41.55,
    lng: 88.37,
    type: "test",
    missiles: "Historic Test Range",
    warheads: 0,
    range: 0,
    status: "Inactive",
  },
  // FRANCE
  {
    name: "Île Longue Submarine Base",
    country: "France",
    lat: 48.3,
    lng: -4.517,
    type: "submarine",
    missiles: "M51 SLBM",
    warheads: 240,
    range: 10000,
    status: "Active",
    likelyTargets: [
      { name: "Moscow", lat: 55.75, lng: 37.62 },
      { name: "Tehran", lat: 35.69, lng: 51.39 },
    ],
  },
  {
    name: "Istres-Le Tubé Air Base",
    country: "France",
    lat: 43.517,
    lng: 4.917,
    type: "airbase",
    missiles: "ASMP-A / Rafale",
    warheads: 40,
    range: 600,
    status: "Active",
    likelyTargets: [
      { name: "Moscow", lat: 55.75, lng: 37.62 },
      { name: "Tehran", lat: 35.69, lng: 51.39 },
    ],
  },
  {
    name: "Saint-Dizier Air Base",
    country: "France",
    lat: 48.633,
    lng: 4.9,
    type: "airbase",
    missiles: "ASMP-A / Rafale",
    warheads: 20,
    range: 600,
    status: "Active",
    likelyTargets: [
      { name: "Moscow", lat: 55.75, lng: 37.62 },
      { name: "Tehran", lat: 35.69, lng: 51.39 },
    ],
  },
  // UNITED KINGDOM
  {
    name: "HMNB Clyde (Faslane)",
    country: "United Kingdom",
    lat: 56.067,
    lng: -4.817,
    type: "submarine",
    missiles: "Trident II D5",
    warheads: 225,
    range: 12000,
    status: "Active",
    likelyTargets: [
      { name: "Moscow", lat: 55.75, lng: 37.62 },
      { name: "St Petersburg", lat: 59.93, lng: 30.32 },
    ],
  },
  {
    name: "AWE Aldermaston",
    country: "United Kingdom",
    lat: 51.367,
    lng: -1.15,
    type: "storage",
    missiles: "Warhead Production",
    warheads: 0,
    range: 0,
    status: "Active",
  },
  {
    name: "RNAD Coulport",
    country: "United Kingdom",
    lat: 56.05,
    lng: -4.883,
    type: "storage",
    missiles: "Warhead Storage",
    warheads: 0,
    range: 0,
    status: "Active",
  },
  // INDIA
  {
    name: "INS Arihant Base (Vizag)",
    country: "India",
    lat: 17.7,
    lng: 83.3,
    type: "submarine",
    missiles: "K-4 / K-15 SLBM",
    warheads: 12,
    range: 3500,
    status: "Active",
    likelyTargets: [
      { name: "Islamabad", lat: 33.69, lng: 73.04 },
      { name: "Beijing", lat: 39.9, lng: 116.4 },
    ],
  },
  {
    name: "Agni Launch Complex (Wheeler Is.)",
    country: "India",
    lat: 20.74,
    lng: 87.09,
    type: "icbm",
    missiles: "Agni-V",
    warheads: 0,
    range: 5500,
    status: "Active",
    likelyTargets: [
      { name: "Islamabad", lat: 33.69, lng: 73.04 },
      { name: "Beijing", lat: 39.9, lng: 116.4 },
    ],
  },
  {
    name: "Chandipur (ITR)",
    country: "India",
    lat: 21.45,
    lng: 86.74,
    type: "test",
    missiles: "Missile Test Range",
    warheads: 0,
    range: 0,
    status: "Active",
  },
  {
    name: "Pokhran Test Range",
    country: "India",
    lat: 26.73,
    lng: 71.37,
    type: "test",
    missiles: "Nuclear Test Range",
    warheads: 0,
    range: 0,
    status: "Standby",
  },
  // PAKISTAN
  {
    name: "Sargodha Air Base",
    country: "Pakistan",
    lat: 32.05,
    lng: 72.67,
    type: "airbase",
    missiles: "Ra'ad ALCM / F-16",
    warheads: 36,
    range: 2750,
    status: "Active",
    likelyTargets: [
      { name: "New Delhi", lat: 28.61, lng: 77.21 },
      { name: "Mumbai", lat: 19.08, lng: 72.88 },
    ],
  },
  {
    name: "Giri Habibullah (storage)",
    country: "Pakistan",
    lat: 34.13,
    lng: 73.32,
    type: "storage",
    missiles: "Shaheen / Ghauri",
    warheads: 0,
    range: 2750,
    status: "Active",
  },
  {
    name: "Khuzdar (suspected)",
    country: "Pakistan",
    lat: 27.8,
    lng: 66.6,
    type: "storage",
    missiles: "Mobile TELs",
    warheads: 0,
    range: 1500,
    status: "Suspected",
  },
  {
    name: "Sonmiani Test Range",
    country: "Pakistan",
    lat: 25.2,
    lng: 66.6,
    type: "test",
    missiles: "Missile Test Range",
    warheads: 0,
    range: 0,
    status: "Active",
  },
  // ISRAEL
  {
    name: "Negev Nuclear Research Center",
    country: "Israel",
    lat: 31.0,
    lng: 35.15,
    type: "storage",
    missiles: "Estimated Jericho III",
    warheads: 90,
    range: 6500,
    status: "Undeclared",
  },
  {
    name: "Palmachim Air Base",
    country: "Israel",
    lat: 31.9,
    lng: 34.69,
    type: "icbm",
    missiles: "Jericho III",
    warheads: 0,
    range: 6500,
    status: "Undeclared",
    likelyTargets: [
      { name: "Tehran", lat: 35.69, lng: 51.39 },
      { name: "Damascus", lat: 33.51, lng: 36.29 },
    ],
  },
  {
    name: "Sdot Micha (Zekharyah)",
    country: "Israel",
    lat: 31.72,
    lng: 34.93,
    type: "icbm",
    missiles: "Jericho II/III",
    warheads: 25,
    range: 6500,
    status: "Undeclared",
    likelyTargets: [
      { name: "Tehran", lat: 35.69, lng: 51.39 },
      { name: "Damascus", lat: 33.51, lng: 36.29 },
    ],
  },
  // NORTH KOREA
  {
    name: "Yongbyon Nuclear Complex",
    country: "North Korea",
    lat: 39.8,
    lng: 125.75,
    type: "storage",
    missiles: "Plutonium Production",
    warheads: 0,
    range: 0,
    status: "Active",
  },
  {
    name: "Sanum-dong Missile Base",
    country: "North Korea",
    lat: 39.03,
    lng: 125.72,
    type: "icbm",
    missiles: "Hwasong-17/18",
    warheads: 10,
    range: 15000,
    status: "Active",
    likelyTargets: [
      { name: "Seoul", lat: 37.57, lng: 126.98 },
      { name: "Tokyo", lat: 35.68, lng: 139.69 },
      { name: "Guam", lat: 13.44, lng: 144.79 },
    ],
  },
  {
    name: "Sinpo Submarine Base",
    country: "North Korea",
    lat: 40.03,
    lng: 128.17,
    type: "submarine",
    missiles: "Pukguksong SLBM",
    warheads: 0,
    range: 2000,
    status: "Testing",
    likelyTargets: [
      { name: "Seoul", lat: 37.57, lng: 126.98 },
      { name: "Tokyo", lat: 35.68, lng: 139.69 },
      { name: "Guam", lat: 13.44, lng: 144.79 },
    ],
  },
  {
    name: "Punggye-ri Test Site",
    country: "North Korea",
    lat: 41.28,
    lng: 129.09,
    type: "test",
    missiles: "Nuclear Test Tunnels",
    warheads: 0,
    range: 0,
    status: "Collapsed/Standby",
  },
];

export function latLngToVector3(lat: number, lng: number, radius: number) {
  const phi = ((90 - lat) * Math.PI) / 180;
  const theta = ((lng + 180) * Math.PI) / 180;
  return {
    x: -radius * Math.sin(phi) * Math.cos(theta),
    y: radius * Math.cos(phi),
    z: radius * Math.sin(phi) * Math.sin(theta),
  };
}

/** Convert a point on the unit sphere (globe surface) to lat/lng in degrees. */
export function vector3ToLatLng(
  x: number,
  y: number,
  z: number
): { lat: number; lng: number } {
  const phi = Math.acos(Math.max(-1, Math.min(1, y)));
  const theta = Math.atan2(z, -x);
  const lat = 90 - (phi * 180) / Math.PI;
  const lng = (theta * 180) / Math.PI - 180;
  return { lat, lng };
}

