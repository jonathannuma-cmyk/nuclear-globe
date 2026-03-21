import { useEffect, useMemo, useRef, useState } from "react";

export interface LandingScreenProps {
  showLanding: boolean;
  blockSceneInteraction: boolean;
  onEnter: () => void;
}

export function LandingScreen({
  showLanding,
  blockSceneInteraction,
  onEnter,
}: LandingScreenProps) {
  const lines = useMemo(
    () => [
      "> INITIALIZING SECURE CONNECTION...",
      "> LOADING GEOSPATIAL DATA...",
      "> MAPPING 70 NUCLEAR FACILITIES...",
      "> TRACKING 9 NUCLEAR STATES...",
      "> CALCULATING THREAT VECTORS...",
      "> SYSTEM READY",
    ],
    []
  );

  const [typedLines, setTypedLines] = useState<string[]>([]);
  const [isReady, setIsReady] = useState(false);
  const enteredRef = useRef(false);

  useEffect(() => {
    let cancelled = false;
    enteredRef.current = false;
    setTypedLines([]);
    setIsReady(false);

    async function sleep(ms: number) {
      return new Promise((r) => setTimeout(r, ms));
    }

    (async function run() {
      const acc: string[] = [];
      for (let i = 0; i < lines.length; i++) {
        if (cancelled) return;
        acc.push("");
        setTypedLines([...acc]);

        if (i > 0) await sleep(400);

        const full = lines[i];
        // Type out each line character-by-character (terminal-style).
        for (let j = 0; j < full.length; j++) {
          if (cancelled) return;
          acc[i] = full.slice(0, j + 1);
          setTypedLines([...acc]);
          await sleep(18);
        }
      }
      setIsReady(true);
    })();

    return () => {
      cancelled = true;
    };
  }, [lines]);

  return (
    <div
      className={`landing-overlay ${showLanding ? "show" : "hide"}`}
      style={{ pointerEvents: blockSceneInteraction ? "auto" : "none" }}
      aria-hidden={!showLanding}
    >
      <div className="landing-content">
        <div className="landing-symbol" aria-hidden>
          ☢
        </div>
        <div className="landing-title">GLOBAL NUCLEAR ARSENAL TRACKER</div>
        <div className="landing-subtitle">
          Real-time visualization of the world&apos;s nuclear forces
        </div>
        <div className="landing-data-line">Data sourced from FAS • SIPRI • NTI</div>

        <div className="landing-terminal">
          {typedLines.map((t, idx) => (
            <div key={idx} className="landing-terminal-line">
              {t}
            </div>
          ))}
        </div>

        <div className="landing-enter-row">
          {isReady && (
            <button
              type="button"
              className="landing-enter-btn"
              onClick={() => {
                if (enteredRef.current) return;
                enteredRef.current = true;
                onEnter();
              }}
            >
              ENTER
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

