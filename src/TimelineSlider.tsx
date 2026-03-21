import { useRef, useEffect, useCallback, useState } from "react";

const MIN_YEAR = 1945;
const MAX_YEAR = 2025;

const TIMELINE_EVENTS: { year: number; label: string }[] = [
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

const DECADE_TICKS = [1950, 1960, 1970, 1980, 1990, 2000, 2010, 2020];

export interface TimelineSliderProps {
  year: number;
  onChangeYear: (year: number) => void;
  totalWarheads: number;
  isPlaying: boolean;
  onPlayPause: () => void;
}

export function TimelineSlider({
  year,
  onChangeYear,
  totalWarheads,
  isPlaying,
  onPlayPause,
}: TimelineSliderProps) {
  const [expanded, setExpanded] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef(false);

  const yearToPercent = useCallback((y: number) => {
    return ((y - MIN_YEAR) / (MAX_YEAR - MIN_YEAR)) * 100;
  }, []);

  const percentToYear = useCallback((p: number) => {
    const y = MIN_YEAR + (p / 100) * (MAX_YEAR - MIN_YEAR);
    return Math.round(Math.max(MIN_YEAR, Math.min(MAX_YEAR, y)));
  }, []);

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

  return (
    <div
      className={`timeline-slider ${expanded ? "timeline-slider--expanded" : ""}`}
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
          <span className="timeline-year-value">{year}</span>
          <span className="timeline-total-label">
            {totalWarheads.toLocaleString()} warheads
          </span>
        </div>
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

      <div className="timeline-expanded-content">
        <div
          ref={trackRef}
          className="timeline-track"
          onClick={handleTrackClick}
          role="slider"
          aria-valuemin={MIN_YEAR}
          aria-valuemax={MAX_YEAR}
          aria-valuenow={year}
          aria-label="Timeline year"
        >
          <div className="timeline-track-fill" style={{ width: `${percent}%` }} />
          {DECADE_TICKS.map((tick) => (
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
            <span className="timeline-handle-inner" />
          </div>
        </div>

        <div className="timeline-events">
          {TIMELINE_EVENTS.map((ev) => {
            const left = yearToPercent(ev.year);
            const isPast = ev.year <= year;
            return (
              <div
                key={ev.year}
                className={`timeline-event ${isPast ? "past" : ""}`}
                style={{ left: `${left}%` }}
                title={ev.label}
              >
                <span className="timeline-event-dot" />
                <span className="timeline-event-tooltip">{ev.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
