import { useRef, useEffect, useCallback, useState } from "react";
import { HISTORIC_EVENTS } from "./data";

const NORMAL_MIN_YEAR = 1945;
const HISTORIC_MIN_YEAR = 1939;
const MAX_YEAR = 2025;

const TIMELINE_EVENTS_NORMAL: { year: number; label: string }[] = [
  { year: 1945, label: "First Test (Trinity)" },
  { year: 1949, label: "USSR Tests" },
  { year: 1952, label: "US H-Bomb" },
  { year: 1962, label: "Cuban Missile Crisis" },
  { year: 1968, label: "NPT Signed" },
  { year: 1986, label: "Peak: ~70,300 Warheads" },
  { year: 1991, label: "START I / USSR Collapse" },
  { year: 1996, label: "CTBT" },
  { year: 2002, label: "SORT Treaty" },
  { year: 2010, label: "New START" },
  { year: 2023, label: "Russia Suspends New START" },
];

const HISTORIC_DECADE_TICKS = [1939, 1950, 1960, 1970, 1980, 1990, 2000, 2010, 2020];
const NORMAL_DECADE_TICKS = [1950, 1960, 1970, 1980, 1990, 2000, 2010, 2020];

export interface TimelineSliderProps {
  year: number;
  onChangeYear: (year: number) => void;
  totalWarheads: number;
  isPlaying: boolean;
  onPlayPause: () => void;
  historicMode?: boolean;
  onHistoricModeChange?: (active: boolean) => void;
}

export function TimelineSlider({
  year,
  onChangeYear,
  totalWarheads,
  isPlaying,
  onPlayPause,
  historicMode = false,
  onHistoricModeChange,
}: TimelineSliderProps) {
  const [expanded, setExpanded] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef(false);

  const minYear = historicMode ? HISTORIC_MIN_YEAR : NORMAL_MIN_YEAR;

  const yearToPercent = useCallback((y: number) => {
    return ((y - minYear) / (MAX_YEAR - minYear)) * 100;
  }, [minYear]);

  const percentToYear = useCallback((p: number) => {
    const y = minYear + (p / 100) * (MAX_YEAR - minYear);
    return Math.round(Math.max(minYear, Math.min(MAX_YEAR, y)));
  }, [minYear]);

  const handleTrackClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!trackRef.current || isDraggingRef.current) return;
      const rect = trackRef.current.getBoundingClientRect();
      const p = ((e.clientX - rect.left) / rect.width) * 100;
      onChangeYear(percentToYear(p));
    },
    [onChangeYear, percentToYear]
  );

  const handlePointerDown = useCallback(
    (e: React.PointerEvent) => {
      e.preventDefault();
      isDraggingRef.current = true;
      (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
    },
    []
  );

  const handlePointerMove = useCallback(
    (e: React.PointerEvent) => {
      if (!isDraggingRef.current || !trackRef.current) return;
      const rect = trackRef.current.getBoundingClientRect();
      const p = ((e.clientX - rect.left) / rect.width) * 100;
      onChangeYear(percentToYear(p));
    },
    [onChangeYear, percentToYear]
  );

  const handlePointerUp = useCallback(() => {
    isDraggingRef.current = false;
  }, []);

  useEffect(() => {
    const onGlobalPointerUp = () => {
      isDraggingRef.current = false;
    };
    window.addEventListener("pointerup", onGlobalPointerUp);
    return () => window.removeEventListener("pointerup", onGlobalPointerUp);
  }, []);

  const percent = yearToPercent(year);
  const decadeTicks = historicMode ? HISTORIC_DECADE_TICKS : NORMAL_DECADE_TICKS;
  const timelineEventDots = historicMode
    ? HISTORIC_EVENTS.map((e) => ({ year: e.year, label: e.title, category: e.category }))
    : TIMELINE_EVENTS_NORMAL.map((e) => ({ ...e, category: "development" as const }));

  return (
    <div
      className={`timeline-slider ${expanded ? "timeline-slider--expanded" : ""} ${historicMode ? "timeline-slider--historic" : ""}`}
    >
      <div
        className="timeline-bar"
        onClick={() => !expanded && setExpanded(true)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (!expanded && (e.key === "Enter" || e.key === " ")) {
            e.preventDefault();
            setExpanded(true);
          }
        }}
        aria-expanded={expanded}
        aria-label={expanded ? "Timeline expanded" : "Expand timeline"}
      >
        <div className="timeline-year-block">
          <span className="timeline-year-value" style={historicMode ? { color: "var(--warning)" } : undefined}>{year}</span>
          <span className="timeline-total-label">
            {historicMode ? "HISTORIC MODE" : `${totalWarheads.toLocaleString()} warheads`}
          </span>
        </div>
        <div className="timeline-bar-controls">
          {onHistoricModeChange && (
            <button
              type="button"
              className={`timeline-history-btn ${historicMode ? "active" : ""}`}
              onClick={(e) => {
                e.stopPropagation();
                onHistoricModeChange(!historicMode);
                if (!expanded) setExpanded(true);
              }}
              title={historicMode ? "Exit Historic Mode" : "Enter Historic Mode"}
              aria-label={historicMode ? "Exit Historic Mode" : "Historic Mode"}
            >
              {historicMode ? "EXIT HISTORY" : "HISTORY"}
            </button>
          )}
          {expanded ? (
            <>
              <button
                type="button"
                className="timeline-play-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  onPlayPause();
                }}
                title={isPlaying ? "Pause" : "Play"}
                aria-label={isPlaying ? "Pause" : "Play"}
              >
                {isPlaying ? "⏸ Pause" : "▶ Play"}
              </button>
              <button
                type="button"
                className="timeline-collapse-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  setExpanded(false);
                }}
                title="Collapse"
                aria-label="Collapse timeline"
              >
                ↓
              </button>
            </>
          ) : (
            <button
              type="button"
              className="timeline-expand-btn"
              onClick={(e) => {
                e.stopPropagation();
                setExpanded(true);
              }}
              title="Expand timeline"
              aria-label="Expand timeline"
            >
              ↑
            </button>
          )}
        </div>
      </div>

      <div className="timeline-expanded-content">
        <div
          ref={trackRef}
          className="timeline-track"
          onClick={handleTrackClick}
          role="slider"
          aria-valuemin={minYear}
          aria-valuemax={MAX_YEAR}
          aria-valuenow={year}
          aria-label="Timeline year"
        >
          <div className="timeline-track-fill" style={{ width: `${percent}%` }} />
          {decadeTicks.map((tick) => (
            <div
              key={tick}
              className="timeline-tick"
              style={{ left: `${yearToPercent(tick)}%` }}
            />
          ))}
          <div
            className="timeline-handle"
            style={{ left: `${percent}%` }}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerUp}
            onClick={(e) => e.stopPropagation()}
          >
            <span className="timeline-handle-inner" style={historicMode ? { background: "var(--warning)", boxShadow: "0 0 8px rgba(245,158,11,0.5)" } : undefined} />
          </div>
        </div>

        <div className="timeline-events">
          {timelineEventDots.map((ev) => {
            const left = yearToPercent(ev.year);
            if (left < 0 || left > 100) return null;
            const isPast = ev.year <= year;
            const dotColor = historicMode ? getCategoryColor(ev.category) : undefined;
            return (
              <div
                key={`${ev.year}-${ev.label}`}
                className={`timeline-event ${isPast ? "past" : ""}`}
                style={{ left: `${left}%` }}
                title={ev.label}
              >
                <span className="timeline-event-dot" style={isPast && dotColor ? { background: dotColor } : undefined} />
                <span className="timeline-event-tooltip">{ev.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function getCategoryColor(category: string): string {
  const map: Record<string, string> = {
    test: "#f59e0b",
    bombing: "#ef4444",
    close_call: "#f97316",
    treaty: "#38bdf8",
    development: "#8b5cf6",
    crisis: "#ef4444",
  };
  return map[category] ?? "#64748b";
}
