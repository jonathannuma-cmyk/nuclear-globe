import { useEffect, useRef, useState, useCallback } from "react";
import { NavBar } from "./NavBar";
import {
  createMEScene,
  getBaseColor,
  ME_COUNTRY_COLORS,
  type MEFilter,
  type MESceneApi,
} from "./middleEastScene";
import {
  MIDDLE_EAST_BASES,
  MIDDLE_EAST_COUNTRIES,
  type MiddleEastBase,
  type SystemType,
} from "./data/middleEastMissiles";
import {
  IRAN_STRIKES,
  DAILY_STRIKE_DATA,
  type IranStrike,
  type DailyStrikeData,
} from "./data/iranStrikes";
import { COUNTRY_PROFILES } from "./data/countryProfiles";

// ── Helpers ──────────────────────────────────────────────────────────────────

const SYSTEM_TYPE_LABELS: Record<SystemType, string> = {
  ballistic: "Ballistic",
  cruise: "Cruise",
  sam: "SAM",
  thaad: "THAAD/BMD",
  mixed: "Mixed",
};

const SYSTEM_TYPE_COLORS: Record<SystemType, string> = {
  ballistic: "#ef4444",
  cruise: "#f97316",
  sam: "#22d3ee",
  thaad: "#3b82f6",
  mixed: "#a78bfa",
};

const MAX_SYSTEM_RANGE = 7000; // km, for bar scaling

/** Get bases for a country profile key (handles "Yemen" → "Yemen (Houthi)"). */
function getBasesForProfile(profileKey: string): MiddleEastBase[] {
  if (profileKey === "Yemen") {
    return MIDDLE_EAST_BASES.filter(
      (b) => b.country === "Yemen" || b.country === "Yemen (Houthi)"
    );
  }
  return MIDDLE_EAST_BASES.filter((b) => b.country === profileKey);
}

/** Derive a CSS class from an air-defense status string. */
function adStatusClass(status: string): string {
  const s = status.toLowerCase();
  if (
    s.includes("operational") ||
    s.includes("active") ||
    s.includes("deployed")
  )
    return "ad-status-green";
  if (
    s.includes("degraded") ||
    s.includes("limited") ||
    s.includes("partial") ||
    s.includes("development") ||
    s.includes("ordered") ||
    s.includes("integrating") ||
    s.includes("ioc") ||
    s.includes("unknown")
  )
    return "ad-status-amber";
  if (
    s.includes("non-operational") ||
    s.includes("destroyed") ||
    s.includes("withdrawn") ||
    s.includes("failed") ||
    s.includes("n/a")
  )
    return "ad-status-red";
  return "ad-status-dim";
}

function baseCounts() {
  const domestic = MIDDLE_EAST_BASES.filter((b) => b.type === "domestic").length;
  const allied = MIDDLE_EAST_BASES.filter((b) => b.type === "us_allied").length;
  const systems = MIDDLE_EAST_BASES.reduce(
    (acc, b) => acc + b.systems.length,
    0
  );
  return { domestic, allied, systems };
}

function countryBaseCounts(): Record<string, number> {
  const counts: Record<string, number> = {};
  MIDDLE_EAST_BASES.forEach((b) => {
    counts[b.country] = (counts[b.country] ?? 0) + 1;
  });
  return counts;
}

// ── Strike campaign grouping (computed once from static data) ─────────────────

const CAMPAIGN_ORDER: string[] = [];
const STRIKES_BY_CAMPAIGN: Record<string, IranStrike[]> = {};
IRAN_STRIKES.forEach((strike) => {
  const key = strike.campaign ?? "";
  if (!STRIKES_BY_CAMPAIGN[key]) {
    STRIKES_BY_CAMPAIGN[key] = [];
    CAMPAIGN_ORDER.push(key);
  }
  STRIKES_BY_CAMPAIGN[key].push(strike);
});

// ── Strike category + filter chips ───────────────────────────────────────────

const STRIKE_FILTER_CHIPS = [
  { id: "all",            label: "All",              color: "#94a3b8" },
  { id: "iran-israel",    label: "Iran → Israel",    color: "#ef4444" },
  { id: "iran-gulf",      label: "Iran → Gulf",      color: "#f97316" },
  { id: "us-israel-iran", label: "Israel/US → Iran", color: "#3b82f6" },
  { id: "shipping",       label: "Shipping",          color: "#14b8a6" },
  { id: "major",          label: "Major Event",       color: "#facc15" },
] as const;

type StrikeFilterId = typeof STRIKE_FILTER_CHIPS[number]["id"];

function getStrikeCategory(
  strike: IranStrike
): Exclude<StrikeFilterId, "all" | "major"> | "other" {
  const oLabels = strike.launchOrigins.map((o) => o.label).join(" ").toLowerCase();
  const tLabels = strike.targets.map((t) => t.label).join(" ").toLowerCase();
  const text = `${strike.title} ${strike.description}`.toLowerCase();

  const fromIran =
    oLabels.includes("iran") || oLabels.includes("irgc") || oLabels.includes("tehran");
  const toIsrael =
    tLabels.includes("israel") || tLabels.includes("tel aviv") ||
    tLabels.includes("haifa") || tLabels.includes("bnei") ||
    tLabels.includes("petah") || tLabels.includes("ramat") ||
    tLabels.includes("hakirya") || tLabels.includes("sharif");
  const toGulf =
    tLabels.includes("kuwait") || tLabels.includes("saudi") ||
    tLabels.includes("riyadh") || tLabels.includes("bahrain") ||
    tLabels.includes("qatar") || tLabels.includes("arifjan") ||
    tLabels.includes("erbil") || tLabels.includes("jubail") ||
    tLabels.includes("al salem") || tLabels.includes("duqm");
  const toIran =
    tLabels.includes("iran") || tLabels.includes("tehran") ||
    tLabels.includes("natanz") || tLabels.includes("fordow") ||
    tLabels.includes("karaj") || tLabels.includes("bushehr") ||
    tLabels.includes("kharg") || tLabels.includes("south pars") ||
    tLabels.includes("beheshti") || tLabels.includes("pardis");
  const isShipping =
    text.includes("tanker") || text.includes("shipping") ||
    text.includes("vessel") || tLabels.includes("hormuz");

  if (fromIran && toIsrael) return "iran-israel";
  if (fromIran && toGulf) return "iran-gulf";
  if (toIran) return "us-israel-iran";
  if (isShipping) return "shipping";
  return "other";
}

// Pre-compute which strike IDs fall on a "major event" day (has notes in DAILY_STRIKE_DATA)
const MAJOR_EVENT_STRIKE_IDS = new Set<string>();
DAILY_STRIKE_DATA.filter((d) => d.notes).forEach((d) => {
  const dt = new Date(d.date + "T00:00:00Z");
  const month = dt.toLocaleDateString("en-US", { month: "short", timeZone: "UTC" }).toUpperCase();
  const dayN = dt.getUTCDate();
  const year = dt.getUTCFullYear();
  const re = new RegExp(`\\b${dayN}\\b`);
  IRAN_STRIKES.forEach((strike) => {
    const u = strike.date.toUpperCase();
    if (u.includes(month) && u.includes(String(year)) && re.test(u)) {
      MAJOR_EVENT_STRIKE_IDS.add(strike.id);
    }
  });
});

// ── Strike Volume Chart ───────────────────────────────────────────────────────

const CHART_MARGIN_LEFT = 32;
const CHART_MARGIN_TOP = 8;
const CHART_H = 100;
const X_LABEL_H = 26;
// 3 bars per day: Iranian out (left), US/Israel on Iran (middle), shipping (right)
const DAY_W = 17;
const BAR_W = 4;
const BAR_GAP = 1;

function formatChartDate(iso: string): string {
  const d = new Date(iso + "T00:00:00Z");
  return d.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  });
}

function StrikeVolumeChart({
  onSelectDay,
  expanded = false,
  onExpand,
  onClose,
}: {
  onSelectDay?: (day: DailyStrikeData) => void;
  expanded?: boolean;
  onExpand?: () => void;
  onClose?: () => void;
}) {
  const outerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const [tooltip, setTooltip] = useState<{
    day: DailyStrikeData;
    x: number;
    y: number;
  } | null>(null);

  const dayW   = expanded ? 28  : DAY_W;
  const barW   = expanded ? 7   : BAR_W;
  const barGap = expanded ? 2   : BAR_GAP;
  const chartH = expanded ? 180 : CHART_H;
  const xLbH   = expanded ? 36  : X_LABEL_H;
  const svgH   = CHART_MARGIN_TOP + chartH + xLbH;
  const svgW   = CHART_MARGIN_LEFT + DAILY_STRIKE_DATA.length * dayW;

  // Auto-scale Y axis
  const maxVal = Math.max(
    ...DAILY_STRIKE_DATA.map((d) =>
      Math.max(
        d.iranOnIsrael + d.iranOnGulf,
        d.usIsraelOnIran
      )
    )
  );
  const yMax = Math.ceil(maxVal / 25) * 25;
  const toH = (v: number) => (v / yMax) * chartH;
  const toY = (v: number) => CHART_MARGIN_TOP + chartH - toH(v);

  const gridStep = expanded ? 100 : 25;
  const gridVals: number[] = [];
  for (let v = 0; v <= yMax; v += gridStep) gridVals.push(v);

  const handleMouseMove = (e: React.MouseEvent<SVGSVGElement>) => {
    if (!svgRef.current || !outerRef.current) return;
    const svgRect = svgRef.current.getBoundingClientRect();
    const outerRect = outerRef.current.getBoundingClientRect();
    const svgX = e.clientX - svgRect.left;
    const dayIdx = Math.floor((svgX - CHART_MARGIN_LEFT) / dayW);
    if (dayIdx >= 0 && dayIdx < DAILY_STRIKE_DATA.length) {
      setTooltip({
        day: DAILY_STRIKE_DATA[dayIdx],
        x: Math.max(4, Math.min(e.clientX - outerRect.left - 80, outerRect.width - 164)),
        y: Math.max(4, e.clientY - outerRect.top - 110),
      });
    } else {
      setTooltip(null);
    }
  };

  return (
    <div ref={outerRef} className="strike-chart-outer">
      <div className="strike-chart-title-row">
        <div className="strike-chart-title">DAILY STRIKE VOLUME — 2026 IRAN WAR</div>
        {expanded ? (
          <button type="button" className="chart-modal-close-btn" onClick={onClose}>✕</button>
        ) : (
          <button type="button" className="chart-expand-btn" onClick={onExpand} title="Expand chart">⤢</button>
        )}
      </div>
      <div className="strike-chart-scroll">
        <svg
          ref={svgRef}
          width={svgW}
          height={svgH}
          onMouseMove={handleMouseMove}
          onMouseLeave={() => setTooltip(null)}
          style={{ cursor: "default", display: "block" }}
        >
          {/* Gridlines + Y labels */}
          {gridVals.map((v) => (
            <g key={v}>
              <line
                x1={CHART_MARGIN_LEFT}
                y1={toY(v)}
                x2={svgW}
                y2={toY(v)}
                stroke={v === 0 ? "#334155" : "#1a2332"}
                strokeWidth={v === 0 ? 1 : 0.75}
              />
              {v > 0 && (
                <text
                  x={CHART_MARGIN_LEFT - 4}
                  y={toY(v) + 3.5}
                  fill="#475569"
                  fontSize={expanded ? 9 : 7}
                  textAnchor="end"
                  fontFamily="JetBrains Mono, monospace"
                >
                  {v}
                </text>
              )}
            </g>
          ))}

          {/* Bars */}
          {DAILY_STRIKE_DATA.map((d, i) => {
            const dX     = CHART_MARGIN_LEFT + i * dayW;
            const leftX  = dX + 1;
            const midX   = dX + 1 + barW + barGap;
            const rightX = dX + 1 + (barW + barGap) * 2;
            const isrH   = toH(d.iranOnIsrael);
            const gulfH  = toH(d.iranOnGulf);
            const iusH   = toH(d.usIsraelOnIran);
            const shipH  = d.shippingAttacks > 0 ? Math.max(toH(d.shippingAttacks), 2) : 0;
            const baseY  = CHART_MARGIN_TOP + chartH;
            const isHovered = tooltip?.day.date === d.date;

            return (
              <g
                key={d.date}
                onClick={() => onSelectDay?.(d)}
                style={{ cursor: onSelectDay ? "pointer" : "default" }}
              >
                {/* Hover / click highlight band */}
                <rect
                  x={dX}
                  y={CHART_MARGIN_TOP}
                  width={dayW}
                  height={chartH}
                  fill={isHovered ? "rgba(255,255,255,0.06)" : "transparent"}
                  stroke={isHovered ? "rgba(255,255,255,0.08)" : "none"}
                  strokeWidth={0.5}
                />
                {/* Left bar: red (Iran→Israel) at bottom, orange (Iran→Gulf) above */}
                {isrH > 0 && (
                  <rect x={leftX} y={baseY - isrH} width={barW} height={isrH}
                    fill="#ef4444" opacity={isHovered ? 1 : 0.88} />
                )}
                {gulfH > 0 && (
                  <rect x={leftX} y={baseY - isrH - gulfH} width={barW} height={gulfH}
                    fill="#f97316" opacity={isHovered ? 1 : 0.88} />
                )}
                {/* Middle bar: blue (US/Israel→Iran) */}
                {iusH > 0 && (
                  <rect x={midX} y={baseY - iusH} width={barW} height={iusH}
                    fill="#3b82f6" opacity={isHovered ? 1 : 0.88} />
                )}
                {/* Right bar: teal (shipping attacks) */}
                {shipH > 0 && (
                  <rect x={rightX} y={baseY - shipH} width={barW} height={shipH}
                    fill="#14b8a6" opacity={isHovered ? 1 : 0.9} />
                )}
              </g>
            );
          })}

          {/* X-axis date labels every 3rd day (every 2nd when expanded) */}
          {DAILY_STRIKE_DATA.map((d, i) => {
            if (!expanded && i % 3 !== 0) return null;
            if (expanded && i % 2 !== 0) return null;
            const cx = CHART_MARGIN_LEFT + i * dayW + dayW / 2;
            const labelY = CHART_MARGIN_TOP + chartH + (expanded ? 16 : 14);
            return (
              <text
                key={d.date}
                x={cx}
                y={labelY}
                fill="#475569"
                fontSize={expanded ? 9 : 7}
                textAnchor="middle"
                fontFamily="JetBrains Mono, monospace"
              >
                {formatChartDate(d.date)}
              </text>
            );
          })}

          {/* Note spike markers */}
          {DAILY_STRIKE_DATA.map((d, i) => {
            if (!d.notes) return null;
            const cx = CHART_MARGIN_LEFT + i * dayW + dayW / 2;
            return (
              <circle
                key={d.date}
                cx={cx}
                cy={CHART_MARGIN_TOP + 4}
                r={expanded ? 3 : 2}
                fill="#facc15"
                opacity={0.7}
              />
            );
          })}
        </svg>
        {/* Tooltip */}
        {tooltip && (
          <div
            className="strike-chart-tooltip"
            style={{ left: tooltip.x, top: tooltip.y }}
          >
            <div className="strike-chart-tooltip-date">
              {formatChartDate(tooltip.day.date)}
              <span style={{ color: "#64748b", marginLeft: 6 }}>Day {tooltip.day.day}</span>
            </div>
            <div className="strike-chart-tooltip-row">
              <span className="strike-chart-swatch" style={{ background: "#ef4444" }} />
              Iran → Israel: <strong>{tooltip.day.iranOnIsrael}</strong>
            </div>
            <div className="strike-chart-tooltip-row">
              <span className="strike-chart-swatch" style={{ background: "#f97316" }} />
              Iran → Gulf States: <strong>{tooltip.day.iranOnGulf}</strong>
            </div>
            <div className="strike-chart-tooltip-row">
              <span className="strike-chart-swatch" style={{ background: "#3b82f6" }} />
              Israel/US → Iran: <strong>{tooltip.day.usIsraelOnIran}</strong>
            </div>
            <div className="strike-chart-tooltip-row">
              <span className="strike-chart-swatch" style={{ background: "#14b8a6" }} />
              Shipping attacks: <strong>{tooltip.day.shippingAttacks}</strong>
            </div>
            {tooltip.day.notes && (
              <div className="strike-chart-tooltip-notes">{tooltip.day.notes}</div>
            )}
          </div>
        )}
      </div>
      {/* Legend */}
      <div className="strike-chart-legend">
        <span>
          <span className="strike-chart-swatch" style={{ background: "#ef4444" }} />
          Iran → Israel
        </span>
        <span>
          <span className="strike-chart-swatch" style={{ background: "#f97316" }} />
          Iran → Gulf
        </span>
        <span>
          <span className="strike-chart-swatch" style={{ background: "#3b82f6" }} />
          Israel/US → Iran
        </span>
        <span>
          <span className="strike-chart-swatch" style={{ background: "#14b8a6" }} />
          Shipping
        </span>
        <span className="strike-chart-legend-note">
          <span className="strike-chart-swatch" style={{ background: "#facc15" }} />
          Major event
        </span>
      </div>
    </div>
  );
}

// ── Strike helpers ────────────────────────────────────────────────────────────

const MONTH_ABBR: Record<string, number> = {
  Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5,
  Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11,
};

function getWarDay(dateStr: string): number {
  const m = dateStr.match(/^(\w+)\s+(\d+),\s+(\d+)$/);
  if (!m) return 1;
  const ms = Date.UTC(parseInt(m[3]), MONTH_ABBR[m[1]] ?? 0, parseInt(m[2]));
  return Math.max(1, Math.round((ms - Date.UTC(2026, 1, 28)) / 86400000) + 1);
}

const CATEGORY_COLORS: Record<string, string> = {
  "iran-israel":    "#ef4444",
  "iran-gulf":      "#f97316",
  "us-israel-iran": "#3b82f6",
  "shipping":       "#14b8a6",
  "other":          "#64748b",
};

function getStrikeAttackerTarget(strike: IranStrike): string {
  const from = (strike.launchOrigins[0]?.label ?? "").split("—")[0].split(",")[0].trim();
  const to   = (strike.targets[0]?.label ?? "").split("—")[0].split(",")[0].trim();
  if (!from && !to) return "";
  if (!from) return `→ ${to}`;
  if (!to)   return from;
  return `${from} → ${to}`;
}

function extractCasualties(outcome: string): string {
  const killed = outcome.match(/(\d[\d,]*\+?)\s+killed/i);
  if (!killed) return "";
  const wounded = outcome.match(/(\d[\d,]*\+?)\s+(wounded|injured)/i);
  return wounded
    ? `${killed[1]} killed, ${wounded[1]} ${wounded[2].toLowerCase()}`
    : `${killed[1]} killed`;
}

// ── War Stats Bar ─────────────────────────────────────────────────────────────

function WarStatsBar() {
  return (
    <div className="war-stats-bar">
      {(
        [
          { num: "40",     label: "DAYS",              color: "#e2e8f0" },
          { num: "3,636",  label: "KILLED IN IRAN",    color: "#f87171" },
          { num: "23",     label: "KILLED IN ISRAEL",  color: "#60a5fa" },
          { num: "13",     label: "US KIA",             color: "#e2e8f0" },
          { num: "1,700+", label: "KILLED IN LEBANON", color: "#fb923c" },
        ] as const
      ).map(({ num, label, color }) => (
        <div key={label} className="war-stat">
          <div className="war-stat-num" style={{ color }}>{num}</div>
          <div className="war-stat-label">{label}</div>
        </div>
      ))}
    </div>
  );
}

// ── Epic Fury Summary ────────────────────────────────────────────────────────

const EF_TOTAL_US_ISRAEL  = DAILY_STRIKE_DATA.reduce((s, d) => s + d.usIsraelOnIran,  0);
const EF_TOTAL_IRAN_ISRAEL = DAILY_STRIKE_DATA.reduce((s, d) => s + d.iranOnIsrael,    0);
const EF_TOTAL_IRAN_GULF   = DAILY_STRIKE_DATA.reduce((s, d) => s + d.iranOnGulf,      0);
const EF_TOTAL_SHIPPING    = DAILY_STRIKE_DATA.reduce((s, d) => s + d.shippingAttacks, 0);
const EF_GRAND_TOTAL = EF_TOTAL_US_ISRAEL + EF_TOTAL_IRAN_ISRAEL + EF_TOTAL_IRAN_GULF + EF_TOTAL_SHIPPING;

const EPIC_FURY_MILESTONES: { day: number; date: string; color: string; text: string }[] = [
  { day: 1,  date: "Feb 28, 2026", color: "#3b82f6", text: "Khamenei killed in opening salvo — 900 strikes in 12 hours" },
  { day: 2,  date: "Mar 1, 2026",  color: "#f97316", text: "6 US soldiers killed at Port Shuaiba, Kuwait" },
  { day: 3,  date: "Mar 2, 2026",  color: "#ef4444", text: "Hezbollah enters war — fires on northern Israel" },
  { day: 5,  date: "Mar 4, 2026",  color: "#3b82f6", text: "Iranian Navy declared combat ineffective" },
  { day: 9,  date: "Mar 8, 2026",  color: "#facc15", text: "First oil facility strikes — Brent crosses $100/barrel" },
  { day: 13, date: "Mar 12, 2026", color: "#3b82f6", text: "Kharg Island struck — 90 military targets destroyed" },
  { day: 18, date: "Mar 17, 2026", color: "#3b82f6", text: "Larijani killed — Israel invades southern Lebanon" },
  { day: 19, date: "Mar 18, 2026", color: "#facc15", text: "South Pars gas field struck — Iran retaliates on Qatar LNG" },
  { day: 21, date: "Mar 20, 2026", color: "#3b82f6", text: "Natanz nuclear facility hit with bunker busters" },
  { day: 22, date: "Mar 21, 2026", color: "#ef4444", text: "Dimona/Arad struck — 190+ injured near Israeli nuclear site" },
  { day: 28, date: "Mar 27, 2026", color: "#14b8a6", text: "Hormuz formally closed — E-3 Sentry destroyed at Prince Sultan" },
  { day: 29, date: "Mar 28, 2026", color: "#facc15", text: "Houthis enter war — missiles at Beersheba and Eilat" },
  { day: 35, date: "Apr 3, 2026",  color: "#facc15", text: "US F-15E shot down over Iran — 2-day rescue operation" },
  { day: 38, date: "Apr 6, 2026",  color: "#3b82f6", text: "South Pars petrochemicals: 85% of Iran's exports offline" },
  { day: 40, date: "Apr 8, 2026",  color: "#facc15", text: "Ceasefire agreed — Operation Eternal Darkness in Lebanon" },
];

function EpicFurySummary({ onToggle }: { onToggle: () => void }) {
  return (
    <button type="button" className="ef-trigger" onClick={onToggle}>
      <span className="ef-trigger-arrow">▸</span>
      OPERATION <span className="ef-accent">EPIC FURY</span>
    </button>
  );
}

// ── Component ────────────────────────────────────────────────────────────────

export function MiddleEastPage() {
  const canvasContainerRef = useRef<HTMLDivElement | null>(null);
  const sceneApiRef = useRef<MESceneApi | null>(null);

  const [selectedBase, setSelectedBase] = useState<MiddleEastBase | null>(null);
  const [hoveredBase, setHoveredBase] = useState<MiddleEastBase | null>(null);
  const [tooltipPos, setTooltipPos] = useState<{ x: number; y: number } | null>(null);
  const [activeFilter, setActiveFilter] = useState<MEFilter>("all");
  const [activeCountry, setActiveCountry] = useState<string | null>(null);
  // Set of system indices (within selectedBase.systems) that have a range ring shown
  const [activeRings, setActiveRings] = useState<Set<number>>(new Set());
  const [strikeHistoryOpen, setStrikeHistoryOpen] = useState(true);
  const [selectedStrike, setSelectedStrike] = useState<IranStrike | null>(null);
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const [collapsedSections, setCollapsedSections] = useState<Set<string>>(new Set());
  const [expandedDates, setExpandedDates] = useState<Set<string>>(new Set());
  const [strikeFilter, setStrikeFilter] = useState<StrikeFilterId>("all");
  const [chartExpanded, setChartExpanded] = useState(false);
  const [expandedStrikes, setExpandedStrikes] = useState<Set<string>>(new Set());
  const [epicFuryExpanded, setEpicFuryExpanded] = useState(false);
  const dateGroupRefs = useRef<Record<string, HTMLDivElement | null>>({});

  // Create scene on mount
  useEffect(() => {
    if (!canvasContainerRef.current || sceneApiRef.current) return;
    sceneApiRef.current = createMEScene(canvasContainerRef.current, {
      onSelectBase: (base) => {
        setSelectedBase(base);
        setActiveRings(new Set());
        setSelectedStrike(null);
        setSelectedCountry(null);
        sceneApiRef.current?.clearStrikeArcs();
        sceneApiRef.current?.setSelectedCountry(null);
      },
      onHoverBase: (base, pos) => {
        setHoveredBase(base);
        setTooltipPos(pos);
      },
      onSelectCountry: (profileKey) => {
        if (COUNTRY_PROFILES[profileKey]) {
          setSelectedCountry(profileKey);
          setCollapsedSections(new Set());
          setSelectedBase(null);
          setActiveRings(new Set());
          setSelectedStrike(null);
          sceneApiRef.current?.clearAllRanges();
          sceneApiRef.current?.clearStrikeArcs();
          sceneApiRef.current?.setSelectedCountry(profileKey);
        }
      },
      onClickEmpty: () => {
        setSelectedBase(null);
        setSelectedStrike(null);
        setSelectedCountry(null);
        setActiveRings(new Set());
        sceneApiRef.current?.clearAllRanges();
        sceneApiRef.current?.clearStrikeArcs();
        sceneApiRef.current?.setSelectedCountry(null);
      },
    });

    // Load country borders
    fetch("/ne_110m_admin_0_countries.geojson")
      .then((r) => r.json())
      .then((data) => sceneApiRef.current?.addCountryBorders(data))
      .catch(() => {});

    return () => {
      sceneApiRef.current?.dispose();
      sceneApiRef.current = null;
    };
  }, []);

  // Sync filter
  useEffect(() => {
    sceneApiRef.current?.setFilter(activeFilter);
  }, [activeFilter]);

  // Sync country
  useEffect(() => {
    sceneApiRef.current?.setActiveCountry(activeCountry);
  }, [activeCountry]);

  // Center globe when a country is selected
  useEffect(() => {
    if (!activeCountry) return;
    const base = MIDDLE_EAST_BASES.find((b) => b.country === activeCountry);
    if (base) sceneApiRef.current?.centerGlobeOn(base.lat, base.lon);
  }, [activeCountry]);

  const handleCloseDetail = useCallback(() => {
    setSelectedBase(null);
    setSelectedCountry(null);
    setActiveRings(new Set());
    sceneApiRef.current?.clearAllRanges();
    sceneApiRef.current?.setSelectedCountry(null);
    sceneApiRef.current?.scheduleAutoRotateResume();
  }, []);

  const handleToggleRing = useCallback(
    (sysIdx: number) => {
      if (!selectedBase) return;
      setActiveRings((prev) => {
        const next = new Set(prev);
        if (next.has(sysIdx)) {
          sceneApiRef.current?.hideSystemRange(sysIdx);
          next.delete(sysIdx);
        } else {
          sceneApiRef.current?.showSystemRange(selectedBase, sysIdx);
          next.add(sysIdx);
        }
        return next;
      });
    },
    [selectedBase]
  );

  const handleClearRanges = useCallback(() => {
    setActiveRings(new Set());
    sceneApiRef.current?.clearAllRanges();
  }, []);

  const handleSelectStrike = useCallback((strike: IranStrike) => {
    setSelectedStrike(strike);
    setSelectedBase(null);
    setSelectedCountry(null);
    setActiveRings(new Set());
    sceneApiRef.current?.clearAllRanges();
    sceneApiRef.current?.setSelectedCountry(null);
    sceneApiRef.current?.showStrikeArcs(strike);
    // Center globe on geographic midpoint — only when coordinates are present.
    // Strikes with no coordinates (e.g. ongoing-attrition summary entries) are
    // skipped; calling centerGlobeOn(NaN, NaN) would corrupt globe.rotation and
    // make the entire globe and all its children invisible.
    const all = [...strike.launchOrigins, ...strike.targets];
    if (all.length > 0) {
      const lat = all.reduce((s, p) => s + p.lat, 0) / all.length;
      const lng = all.reduce((s, p) => s + p.lng, 0) / all.length;
      sceneApiRef.current?.centerGlobeOn(lat, lng);
    }
  }, []);

  const handleClearStrikes = useCallback(() => {
    setSelectedStrike(null);
    sceneApiRef.current?.clearStrikeArcs();
  }, []);

  const handleChartSelectDay = useCallback((day: DailyStrikeData) => {
    const dt = new Date(day.date + "T00:00:00Z");
    const month = dt.toLocaleDateString("en-US", { month: "short", timeZone: "UTC" }).toUpperCase();
    const dayN = dt.getUTCDate();
    const year = dt.getUTCFullYear();
    const re = new RegExp(`\\b${dayN}\\b`);

    const matchingDates = new Set<string>();
    IRAN_STRIKES.forEach((strike) => {
      const u = strike.date.toUpperCase();
      if (u.includes(month) && u.includes(String(year)) && re.test(u)) {
        matchingDates.add(strike.date);
      }
    });

    if (matchingDates.size > 0) {
      setExpandedDates((prev) => new Set([...prev, ...matchingDates]));
      const firstDate = [...matchingDates][0];
      setTimeout(() => {
        dateGroupRefs.current[firstDate]?.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
        });
      }, 80);
    }
  }, []);

  const handleCloseCountry = useCallback(() => {
    setSelectedCountry(null);
    sceneApiRef.current?.setSelectedCountry(null);
  }, []);

  const handleSelectBaseFromProfile = useCallback(
    (base: MiddleEastBase) => {
      setSelectedBase(base);
      setSelectedCountry(null);
      setActiveRings(new Set());
      sceneApiRef.current?.setSelectedCountry(null);
      sceneApiRef.current?.clearAllRanges();
      sceneApiRef.current?.centerGlobeOn(base.lat, base.lon);
    },
    []
  );

  const toggleSection = useCallback((key: string) => {
    setCollapsedSections((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  }, []);

  const { domestic, allied, systems } = baseCounts();
  const countryCounts = countryBaseCounts();

  // Countries sorted: domestic first, then allied hosts
  const domesticCountries = Object.keys(ME_COUNTRY_COLORS).filter((c) =>
    MIDDLE_EAST_BASES.some((b) => b.country === c && b.type === "domestic")
  );
  const alliedOnlyCountries = MIDDLE_EAST_COUNTRIES.filter(
    (c) =>
      !domesticCountries.includes(c) &&
      MIDDLE_EAST_BASES.some((b) => b.country === c && b.type === "us_allied")
  );

  const filteredCountries =
    activeFilter === "domestic"
      ? domesticCountries
      : activeFilter === "us_allied"
      ? alliedOnlyCountries
      : [...domesticCountries, ...alliedOnlyCountries];

  return (
    <>
      <div id="canvas-container" ref={canvasContainerRef} />

      <NavBar />

      <div className="me-ui-layer">
        {/* ── Header ── */}
        <header className="header">
          <div className="header-left">
            <div className="me-logo-icon" />
            <h1>
              Middle East <span className="me-accent">Missile</span> Tracker
            </h1>
          </div>
          <div className="header-right">
            <div>
              <span className="live-dot" style={{ background: "#f97316" }} />
              OPEN SOURCE INTELLIGENCE
            </div>
            <div style={{ marginTop: 2, opacity: 0.6 }}>
              DATA: FAS / CSIS MISSILE THREAT / NTI / IISS — EST. 2025
            </div>
          </div>
        </header>

        {/* ── Side Panel ── */}
        <div className="side-panel">
          {/* Strike History — primary feature, shown first and expanded by default */}
          <div className="panel-card">
            <div className="me-strike-history-header">
              <h3 style={{ margin: 0 }}>Strike History</h3>
              <button
                type="button"
                className={`filter-btn ${strikeHistoryOpen ? "active" : ""}`}
                style={{ fontSize: 9, padding: "3px 8px" }}
                onClick={() => {
                  setStrikeHistoryOpen((v) => !v);
                  if (strikeHistoryOpen) handleClearStrikes();
                }}
              >
                {strikeHistoryOpen ? "HIDE" : "SHOW"}
              </button>
            </div>
            {strikeHistoryOpen && (
              <>
                {/* Operation Epic Fury — trigger button only; modal rendered at top level */}
                <EpicFurySummary
                  onToggle={() => setEpicFuryExpanded((v) => !v)}
                />

                <div className="me-strike-timeline">
                {/* Daily volume chart — click title row button to expand */}
                <StrikeVolumeChart
                  onSelectDay={handleChartSelectDay}
                  onExpand={() => setChartExpanded(true)}
                />

                {/* War summary stats */}
                <WarStatsBar />

                {/* Category filter chips */}
                <div className="me-strike-filter-chips">
                  {STRIKE_FILTER_CHIPS.map((chip) => (
                    <button
                      key={chip.id}
                      type="button"
                      className={`me-strike-chip ${strikeFilter === chip.id ? "active" : ""}`}
                      style={
                        strikeFilter === chip.id
                          ? {
                              background: chip.color + "22",
                              borderColor: chip.color + "88",
                              color: chip.color,
                            }
                          : undefined
                      }
                      onClick={() => setStrikeFilter(chip.id)}
                    >
                      {chip.label}
                    </button>
                  ))}
                </div>

                {/* Strike list: campaign sections → collapsible date headers → compact entries */}
                {CAMPAIGN_ORDER.map((campaign) => {
                  const campaignStrikes = STRIKES_BY_CAMPAIGN[campaign].filter(
                    (strike) => {
                      if (strikeFilter === "all") return true;
                      if (strikeFilter === "major")
                        return MAJOR_EVENT_STRIKE_IDS.has(strike.id);
                      return getStrikeCategory(strike) === strikeFilter;
                    }
                  );
                  if (campaignStrikes.length === 0) return null;

                  // Group by date (preserves original order)
                  const dateMap: Record<string, IranStrike[]> = {};
                  const dateOrder: string[] = [];
                  campaignStrikes.forEach((strike) => {
                    if (!dateMap[strike.date]) {
                      dateMap[strike.date] = [];
                      dateOrder.push(strike.date);
                    }
                    dateMap[strike.date].push(strike);
                  });

                  return (
                    <div key={campaign || "historical"}>
                      {campaign && (
                        <div className="me-campaign-header">{campaign}</div>
                      )}
                      {dateOrder.map((date) => {
                        const group = dateMap[date];
                        const isDateExpanded = expandedDates.has(date);
                        const warDay = getWarDay(date);
                        return (
                          <div
                            key={date}
                            ref={(el) => {
                              dateGroupRefs.current[date] = el;
                            }}
                          >
                            <button
                              type="button"
                              className="me-date-header"
                              onClick={() =>
                                setExpandedDates((prev) => {
                                  const next = new Set(prev);
                                  if (next.has(date)) next.delete(date);
                                  else next.add(date);
                                  return next;
                                })
                              }
                            >
                              <span className={`me-date-chevron ${isDateExpanded ? "open" : ""}`} />
                              <span className="me-date-label">
                                {date}
                                <span className="me-date-day-num"> · Day {warDay}</span>
                              </span>
                              <span className="me-date-count">{group.length} events</span>
                            </button>
                            {isDateExpanded && (
                              <div className="me-date-group">
                                {group.map((strike) => {
                                  const cat = getStrikeCategory(strike);
                                  const catColor = CATEGORY_COLORS[cat] ?? "#64748b";
                                  const route = getStrikeAttackerTarget(strike);
                                  const cas = extractCasualties(strike.outcome);
                                  const isStrikeExpanded = expandedStrikes.has(strike.id);
                                  return (
                                    <div
                                      key={strike.id}
                                      className={`me-strike-compact-v2 ${selectedStrike?.id === strike.id ? "active" : ""}`}
                                    >
                                      <div
                                        className="me-strike-row"
                                        onClick={() => handleSelectStrike(strike)}
                                      >
                                        <div
                                          className="me-strike-cat-bar"
                                          style={{ background: catColor }}
                                        />
                                        <div className="me-strike-row-content">
                                          <div className="me-strike-row-title">{strike.title}</div>
                                          {(route || cas) && (
                                            <div className="me-strike-row-meta">
                                              {route && <span className="me-strike-row-route">{route}</span>}
                                              {cas && <span className="me-strike-row-casualties">{cas}</span>}
                                            </div>
                                          )}
                                        </div>
                                        <button
                                          type="button"
                                          className={`me-strike-expand-btn ${isStrikeExpanded ? "open" : ""}`}
                                          onClick={(e) => {
                                            e.stopPropagation();
                                            setExpandedStrikes((prev) => {
                                              const next = new Set(prev);
                                              if (next.has(strike.id)) next.delete(strike.id);
                                              else next.add(strike.id);
                                              return next;
                                            });
                                          }}
                                        >›</button>
                                      </div>
                                      {isStrikeExpanded && (
                                        <div className="me-strike-details">
                                          {strike.munitions && (
                                            <div className="me-strike-detail-row">
                                              <span className="me-strike-dl">MUNITIONS</span>
                                              <span>{strike.munitions}</span>
                                            </div>
                                          )}
                                          {strike.outcome && (
                                            <div className="me-strike-detail-row">
                                              <span className="me-strike-dl">OUTCOME</span>
                                              <span>{strike.outcome}</span>
                                            </div>
                                          )}
                                          <div className="me-strike-detail-desc">{strike.description}</div>
                                        </div>
                                      )}
                                    </div>
                                  );
                                })}
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  );
                })}
              </div>
              </>
            )}
          </div>

          {/* Overview stats */}
          <div className="panel-card">
            <h3>Regional Overview</h3>
            <div className="stat-grid">
              <div className="stat-item">
                <div className="stat-value">{domestic}</div>
                <div className="stat-label">Missile Sites</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">{allied}</div>
                <div className="stat-label">US/Allied Bases</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">{systems}</div>
                <div className="stat-label">Systems Tracked</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">{MIDDLE_EAST_COUNTRIES.length}</div>
                <div className="stat-label">Countries</div>
              </div>
            </div>
          </div>

          {/* Filter */}
          <div className="panel-card">
            <h3>Filter</h3>
            <div className="filter-row">
              {(
                [
                  { id: "all", label: "All" },
                  { id: "domestic", label: "Missile Sites" },
                  { id: "us_allied", label: "US-Allied" },
                ] as const
              ).map((f) => (
                <button
                  key={f.id}
                  type="button"
                  className={`filter-btn ${activeFilter === f.id ? "active" : ""}`}
                  onClick={() => setActiveFilter(f.id)}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>

          {/* Country list */}
          <div className="panel-card">
            <h3>Countries</h3>
            <div className="country-list">
              {filteredCountries.map((country) => {
                const color = ME_COUNTRY_COLORS[country] ?? "#64748b";
                const count = countryCounts[country] ?? 0;
                const isActive = activeCountry === country;
                return (
                  <div
                    key={country}
                    className={`country-item ${isActive ? "active" : ""}`}
                    style={isActive ? { borderColor: color } : undefined}
                    onClick={() =>
                      setActiveCountry(isActive ? null : country)
                    }
                  >
                    <div className="country-left">
                      <div
                        className="country-dot"
                        style={{ background: color }}
                      />
                      <div className="country-name">{country}</div>
                    </div>
                    <div className="country-count">
                      {count} {count === 1 ? "base" : "bases"}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Legend */}
          <div className="panel-card">
            <h3>Legend</h3>
            <div className="me-legend">
              <div className="me-legend-section">
                <div className="me-legend-heading">Domestic Missile Programs</div>
                {domesticCountries.map((c) => (
                  <div key={c} className="me-legend-row">
                    <div
                      className="me-legend-dot me-legend-dot--pulse"
                      style={{ background: ME_COUNTRY_COLORS[c] ?? "#ef4444" }}
                    />
                    <span>{c}</span>
                  </div>
                ))}
              </div>
              <div className="me-legend-divider" />
              <div className="me-legend-section">
                <div className="me-legend-heading">US / Allied Bases</div>
                {alliedOnlyCountries.map((c) => (
                  <div key={c} className="me-legend-row">
                    <div
                      className="me-legend-dot"
                      style={{ background: ME_COUNTRY_COLORS[c] ?? "#3b82f6" }}
                    />
                    <span>{c}</span>
                  </div>
                ))}
                {/* Saudi Arabia also has allied presence */}
                <div className="me-legend-row">
                  <div
                    className="me-legend-dot"
                    style={{ background: "#1d4ed8" }}
                  />
                  <span>Saudi Arabia (US base)</span>
                </div>
                <div className="me-legend-row">
                  <div
                    className="me-legend-dot"
                    style={{ background: "#818cf8" }}
                  />
                  <span>Turkey (NATO base)</span>
                </div>
              </div>
              <div className="me-legend-divider" />
              <div className="me-legend-section">
                <div className="me-legend-heading">System Types</div>
                {(
                  Object.entries(SYSTEM_TYPE_LABELS) as [SystemType, string][]
                ).map(([type, label]) => (
                  <div key={type} className="me-legend-row">
                    <div
                      className="me-badge"
                      style={{
                        background: SYSTEM_TYPE_COLORS[type] + "22",
                        border: `1px solid ${SYSTEM_TYPE_COLORS[type]}55`,
                        color: SYSTEM_TYPE_COLORS[type],
                      }}
                    >
                      {label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── Detail Panel ── */}
        <div className={`me-detail-panel ${(selectedBase || selectedStrike || selectedCountry) ? "open" : ""}`}>
          {selectedBase && (
            <div className="panel-card me-detail-card">
              <div className="detail-header">
                <div>
                  <div className="detail-title">{selectedBase.name}</div>
                  <div className="me-detail-meta">
                    <span
                      className="me-type-badge"
                      style={{
                        background:
                          selectedBase.type === "domestic"
                            ? "rgba(239,68,68,0.15)"
                            : "rgba(59,130,246,0.15)",
                        borderColor:
                          selectedBase.type === "domestic"
                            ? "rgba(239,68,68,0.4)"
                            : "rgba(59,130,246,0.4)",
                        color:
                          selectedBase.type === "domestic"
                            ? "#f87171"
                            : "#60a5fa",
                      }}
                    >
                      {selectedBase.type === "domestic"
                        ? "MISSILE PROGRAM"
                        : "US / ALLIED"}
                    </span>
                    <span
                      className="me-country-label"
                      style={{ color: getBaseColor(selectedBase) }}
                    >
                      {selectedBase.country}
                    </span>
                  </div>
                </div>
                <button
                  type="button"
                  className="detail-close"
                  onClick={handleCloseDetail}
                >
                  ✕
                </button>
              </div>

              {/* Systems */}
              <div className="me-systems-label-row">
                <span className="me-systems-label">Tracked Systems</span>
                {activeRings.size > 0 && (
                  <button
                    type="button"
                    className="me-clear-ranges-btn"
                    onClick={handleClearRanges}
                  >
                    Clear Ranges
                  </button>
                )}
              </div>
              <div className="me-systems-list">
                {selectedBase.systems.map((sys, i) => {
                  const rangePct = Math.min(
                    (sys.range_km / MAX_SYSTEM_RANGE) * 100,
                    100
                  );
                  const ringActive = activeRings.has(i);
                  return (
                    <div key={i} className="me-system-item">
                      <div className="me-system-header">
                        <span className="me-system-name">{sys.name}</span>
                        <div className="me-system-header-right">
                          <div
                            className="me-badge"
                            style={{
                              background:
                                SYSTEM_TYPE_COLORS[sys.type] + "22",
                              border: `1px solid ${SYSTEM_TYPE_COLORS[sys.type]}55`,
                              color: SYSTEM_TYPE_COLORS[sys.type],
                            }}
                          >
                            {SYSTEM_TYPE_LABELS[sys.type]}
                          </div>
                          {sys.range_km > 0 && (
                            <button
                              type="button"
                              className={`me-range-btn ${ringActive ? "active" : ""}`}
                              style={ringActive ? {
                                borderColor: getBaseColor(selectedBase),
                                color: getBaseColor(selectedBase),
                                background: getBaseColor(selectedBase) + "18",
                              } : undefined}
                              onClick={() => handleToggleRing(i)}
                            >
                              {ringActive ? "HIDE" : "SHOW"}
                            </button>
                          )}
                        </div>
                      </div>
                      {sys.range_km > 0 && (
                        <div className="me-system-range">
                          <div className="range-bar-bg">
                            <div
                              className="range-bar-fill"
                              style={{
                                width: `${rangePct}%`,
                                background:
                                  SYSTEM_TYPE_COLORS[sys.type],
                              }}
                            />
                          </div>
                          <div className="me-system-range-km">
                            {sys.range_km.toLocaleString()} km
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Description */}
              <div className="me-description">{selectedBase.description}</div>
            </div>
          )}

          {/* Strike detail card */}
          {selectedStrike && (
            <div className="panel-card me-detail-card">
              <div className="detail-header">
                <div>
                  <div className="detail-title me-strike-title">
                    {selectedStrike.codename}
                  </div>
                  <div className="me-detail-meta">
                    <span className="me-type-badge" style={{
                      background: "rgba(249,115,22,0.15)",
                      borderColor: "rgba(249,115,22,0.4)",
                      color: "#fb923c",
                    }}>
                      {selectedStrike.date}
                    </span>
                  </div>
                </div>
                <button type="button" className="detail-close" onClick={handleClearStrikes}>✕</button>
              </div>

              <div className="me-strike-section-label">LAUNCH ORIGINS</div>
              <div className="me-strike-point-list">
                {selectedStrike.launchOrigins.map((o, i) => (
                  <div key={i} className="me-strike-point me-strike-point--origin">
                    ↑ {o.label}
                  </div>
                ))}
              </div>

              <div className="me-strike-section-label">TARGETS</div>
              <div className="me-strike-point-list">
                {selectedStrike.targets.map((t, i) => (
                  <div key={i} className="me-strike-point me-strike-point--target">
                    ✕ {t.label}
                  </div>
                ))}
              </div>

              <div className="me-strike-section-label">MUNITIONS</div>
              <div className="me-strike-detail-text">{selectedStrike.munitions}</div>

              <div className="me-strike-section-label">OUTCOME</div>
              <div className="me-strike-detail-text">{selectedStrike.outcome}</div>

              <div className="me-description">{selectedStrike.description}</div>
            </div>
          )}

          {/* Country Profile Card */}
          {selectedCountry && !selectedBase && !selectedStrike && (() => {
            const profile = COUNTRY_PROFILES[selectedCountry];
            if (!profile) return null;
            const countryBases = getBasesForProfile(selectedCountry);
            const uniqueSystems = new Set(
              countryBases.flatMap((b) => b.systems.map((s) => s.name))
            ).size;
            return (
              <div className="panel-card me-detail-card me-country-profile">
                <div className="detail-header">
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div className="me-country-profile-flag">{profile.flag}</div>
                    <div className="detail-title">{profile.name}</div>
                  </div>
                  <button type="button" className="detail-close" onClick={handleCloseCountry}>✕</button>
                </div>

                <div className="me-description" style={{ marginBottom: 12 }}>{profile.overview}</div>

                {/* Missile Bases */}
                {countryBases.length > 0 && (
                  <div className="me-profile-section">
                    <button
                      type="button"
                      className="me-profile-section-header"
                      onClick={() => toggleSection("bases")}
                    >
                      <span>MISSILE &amp; MILITARY BASES</span>
                      <span className="me-profile-section-meta">
                        {countryBases.length} {countryBases.length === 1 ? "base" : "bases"} · {uniqueSystems} systems
                      </span>
                      <span className="me-profile-chevron">{collapsedSections.has("bases") ? "▶" : "▼"}</span>
                    </button>
                    {!collapsedSections.has("bases") && (
                      <div className="me-profile-section-body">
                        {countryBases.map((base, i) => (
                          <button
                            key={i}
                            type="button"
                            className="me-profile-base-item"
                            onClick={() => handleSelectBaseFromProfile(base)}
                          >
                            <div className="me-profile-base-top">
                              <span className="me-profile-base-name">{base.name}</span>
                              <span
                                className="me-type-badge"
                                style={{
                                  background: base.type === "domestic" ? "rgba(239,68,68,0.12)" : "rgba(59,130,246,0.12)",
                                  borderColor: base.type === "domestic" ? "rgba(239,68,68,0.35)" : "rgba(59,130,246,0.35)",
                                  color: base.type === "domestic" ? "#f87171" : "#60a5fa",
                                  fontSize: 8,
                                }}
                              >
                                {base.type === "domestic" ? "MISSILE SITE" : "US / ALLIED"}
                              </span>
                            </div>
                            <div className="me-profile-base-systems">
                              {base.systems.slice(0, 4).map((s, j) => (
                                <span key={j} className="me-profile-system-chip"
                                  style={{ color: SYSTEM_TYPE_COLORS[s.type] }}
                                >{s.name}</span>
                              ))}
                              {base.systems.length > 4 && (
                                <span className="me-profile-system-chip" style={{ color: "#64748b" }}>
                                  +{base.systems.length - 4} more
                                </span>
                              )}
                            </div>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                {/* Air Defense */}
                {profile.airDefense && (
                  <div className="me-profile-section">
                    <button
                      type="button"
                      className="me-profile-section-header"
                      onClick={() => toggleSection("airdefense")}
                    >
                      <span>AIR DEFENSE SYSTEMS</span>
                      <span className="me-profile-section-meta">{profile.airDefense.systems.length} systems</span>
                      <span className="me-profile-chevron">{collapsedSections.has("airdefense") ? "▶" : "▼"}</span>
                    </button>
                    {!collapsedSections.has("airdefense") && (
                      <div className="me-profile-section-body">
                        {profile.airDefense.systems.map((sys, i) => (
                          <div key={i} className="me-profile-ad-row">
                            <div className="me-profile-ad-top">
                              <span className="me-profile-ad-name">{sys.name}</span>
                              <span className={`me-profile-ad-status ${adStatusClass(sys.status)}`}>{sys.status}</span>
                            </div>
                            <div className="me-profile-ad-meta">
                              <span className="me-profile-ad-type">{sys.type}</span>
                              {sys.range_km > 0 && (
                                <span className="me-profile-ad-range">{sys.range_km.toLocaleString()} km</span>
                              )}
                            </div>
                            {sys.notes && <div className="me-profile-notes">{sys.notes}</div>}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                {/* Air Force */}
                {profile.airForce && (
                  <div className="me-profile-section">
                    <button
                      type="button"
                      className="me-profile-section-header"
                      onClick={() => toggleSection("airforce")}
                    >
                      <span>AIR FORCE</span>
                      <span className="me-profile-section-meta">{profile.airForce.aircraft.length} types</span>
                      <span className="me-profile-chevron">{collapsedSections.has("airforce") ? "▶" : "▼"}</span>
                    </button>
                    {!collapsedSections.has("airforce") && (
                      <div className="me-profile-section-body">
                        {profile.airForce.aircraft.map((ac, i) => (
                          <div key={i} className="me-profile-ac-row">
                            <div className="me-profile-ad-top">
                              <span className="me-profile-ad-name">{ac.name}</span>
                              <span className="me-profile-ac-qty">{ac.quantity}</span>
                            </div>
                            <div className="me-profile-ad-meta">
                              <span className="me-profile-ad-type">{ac.role}</span>
                            </div>
                            {ac.notes && <div className="me-profile-notes">{ac.notes}</div>}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                {/* Alliances */}
                {profile.alliances && profile.alliances.length > 0 && (
                  <div className="me-profile-section">
                    <button
                      type="button"
                      className="me-profile-section-header"
                      onClick={() => toggleSection("alliances")}
                    >
                      <span>ALLIANCES &amp; PARTNERSHIPS</span>
                      <span className="me-profile-chevron">{collapsedSections.has("alliances") ? "▶" : "▼"}</span>
                    </button>
                    {!collapsedSections.has("alliances") && (
                      <div className="me-profile-section-body">
                        {profile.alliances.map((a, i) => (
                          <div key={i} className="me-profile-alliance-item">· {a}</div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })()}
        </div>

        {/* ── Tooltip ── */}
        {hoveredBase && tooltipPos && (
          <div
            className="tooltip visible"
            style={{ left: tooltipPos.x, top: tooltipPos.y }}
          >
            <div className="tooltip-name">{hoveredBase.name}</div>
            <div
              className="tooltip-type"
              style={{ color: getBaseColor(hoveredBase) }}
            >
              {hoveredBase.country} ·{" "}
              {hoveredBase.type === "domestic"
                ? "Missile Program"
                : "US/Allied Base"}
            </div>
          </div>
        )}

        {/* ── Chart Modal Overlay ── */}
        {chartExpanded && (
          <div
            className="chart-modal-backdrop"
            onClick={() => setChartExpanded(false)}
          >
            <div
              className="chart-modal-inner"
              onClick={(e) => e.stopPropagation()}
            >
              <StrikeVolumeChart
                onSelectDay={handleChartSelectDay}
                expanded
                onClose={() => setChartExpanded(false)}
              />
            </div>
          </div>
        )}

        {/* ── Epic Fury Modal Overlay ── */}
        {epicFuryExpanded && (
          <div
            className="ef-modal-backdrop"
            onClick={() => setEpicFuryExpanded(false)}
          >
            <div
              className="ef-modal-panel"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="ef-modal-header">
                <div className="ef-modal-title-block">
                  <div className="ef-modal-title">
                    OPERATION <span className="ef-accent">EPIC FURY</span>
                  </div>
                  <div className="ef-modal-subtitle">FEB 28 – APR 8, 2026 · 40 DAYS</div>
                </div>
                <button
                  type="button"
                  className="ef-modal-close"
                  onClick={() => setEpicFuryExpanded(false)}
                >✕</button>
              </div>

              <div className="ef-modal-divider" />

              {/* Casualties */}
              <div className="ef-modal-section-label">CASUALTIES</div>
              <div className="ef-modal-stat-row">
                {(
                  [
                    { num: "3,636",  label: "KILLED IN IRAN",    color: "#f87171", border: "rgba(248,113,113,0.3)", bg: "rgba(248,113,113,0.07)" },
                    { num: "23",     label: "KILLED IN ISRAEL",  color: "#60a5fa", border: "rgba(96,165,250,0.3)",  bg: "rgba(96,165,250,0.07)"  },
                    { num: "13",     label: "US KIA",             color: "#e2e8f0", border: "rgba(226,232,240,0.2)", bg: "rgba(255,255,255,0.03)" },
                    { num: "1,700+", label: "KILLED IN LEBANON", color: "#fb923c", border: "rgba(251,146,60,0.3)",  bg: "rgba(251,146,60,0.07)"  },
                    { num: "520+",   label: "US WOUNDED",         color: "#e2e8f0", border: "rgba(226,232,240,0.2)", bg: "rgba(255,255,255,0.03)" },
                  ] as const
                ).map(({ num, label, color, border, bg }) => (
                  <div
                    key={label}
                    className="ef-modal-stat"
                    style={{ background: bg, borderColor: border }}
                  >
                    <div className="ef-modal-stat-num" style={{ color }}>{num}</div>
                    <div className="ef-modal-stat-label">{label}</div>
                  </div>
                ))}
              </div>

              <div className="ef-modal-divider" />

              {/* Strike Totals */}
              <div className="ef-modal-section-label">STRIKE TOTALS</div>
              <div className="ef-modal-grand-total">
                TOTAL STRIKES:{" "}
                <span className="ef-modal-grand-num">{EF_GRAND_TOTAL.toLocaleString()}</span>
              </div>
              <div className="ef-modal-breakdown">
                <span style={{ color: "#3b82f6" }}>US/Israel → Iran: <strong>{EF_TOTAL_US_ISRAEL.toLocaleString()}</strong></span>
                <span className="ef-sep">|</span>
                <span style={{ color: "#ef4444" }}>Iran → Israel: <strong>{EF_TOTAL_IRAN_ISRAEL.toLocaleString()}</strong></span>
                <span className="ef-sep">|</span>
                <span style={{ color: "#f97316" }}>Iran → Gulf: <strong>{EF_TOTAL_IRAN_GULF.toLocaleString()}</strong></span>
                <span className="ef-sep">|</span>
                <span style={{ color: "#14b8a6" }}>Shipping: <strong>{EF_TOTAL_SHIPPING.toLocaleString()}</strong></span>
              </div>
              <div className="ef-modal-context">
                80+ verified events tracked · 12 countries involved · $120B+ estimated regional damage · 20,000 seafarers stranded in Hormuz
              </div>

              <div className="ef-modal-divider" />

              {/* Key Milestones — 2-column grid */}
              <div className="ef-modal-section-label">KEY MILESTONES</div>
              <div className="ef-modal-milestones-grid">
                <div className="ef-modal-milestone-col">
                  {EPIC_FURY_MILESTONES.slice(0, 6).map((m) => (
                    <button
                      key={m.day}
                      type="button"
                      className="ef-modal-milestone"
                      onClick={() => {
                        setEpicFuryExpanded(false);
                        setExpandedDates((prev) => new Set([...prev, m.date]));
                        setTimeout(() => {
                          dateGroupRefs.current[m.date]?.scrollIntoView({
                            behavior: "smooth",
                            block: "nearest",
                          });
                        }, 80);
                      }}
                    >
                      <div className="ef-milestone-bar" style={{ background: m.color }} />
                      <span className="ef-milestone-day">DAY {m.day}</span>
                      <span className="ef-milestone-text">{m.text}</span>
                      <span className="ef-milestone-arrow">›</span>
                    </button>
                  ))}
                </div>
                <div className="ef-modal-milestone-col">
                  {EPIC_FURY_MILESTONES.slice(6).map((m) => (
                    <button
                      key={m.day}
                      type="button"
                      className="ef-modal-milestone"
                      onClick={() => {
                        setEpicFuryExpanded(false);
                        setExpandedDates((prev) => new Set([...prev, m.date]));
                        setTimeout(() => {
                          dateGroupRefs.current[m.date]?.scrollIntoView({
                            behavior: "smooth",
                            block: "nearest",
                          });
                        }, 80);
                      }}
                    >
                      <div className="ef-milestone-bar" style={{ background: m.color }} />
                      <span className="ef-milestone-day">DAY {m.day}</span>
                      <span className="ef-milestone-text">{m.text}</span>
                      <span className="ef-milestone-arrow">›</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ── Controls hint ── */}
        <div className="controls-hint">
          Drag to rotate · Scroll to zoom · Click markers for details
        </div>
      </div>
    </>
  );
}
