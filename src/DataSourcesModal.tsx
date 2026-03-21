import { useEffect } from "react";

export interface DataSourcesModalProps {
  open: boolean;
  onClose: () => void;
}

export function DataSourcesModal({ open, onClose }: DataSourcesModalProps) {
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="data-sources-backdrop"
      role="dialog"
      aria-modal="true"
      aria-label="Data Sources & Methodology"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="data-sources-modal">
        <div className="data-sources-header">
          <div className="data-sources-title">
            DATA SOURCES &amp; METHODOLOGY
          </div>
          <button
            type="button"
            className="data-sources-close"
            onClick={onClose}
            aria-label="Close sources modal"
          >
            ✕
          </button>
        </div>

        <div className="data-sources-body">
          <div className="data-sources-section">
            <div className="data-sources-section-title">
              Primary Data Sources
            </div>

            <div className="data-sources-paragraph">
              <b>Federation of American Scientists (FAS)</b> — Warhead counts,{" "}
              facility locations, deployment status. Nuclear Notebook series by
              Hans Kristensen &amp; Matt Korda.{" "}
              <a
                href="https://fas.org/issues/nuclear-weapons/status-world-nuclear-forces"
                target="_blank"
                rel="noreferrer"
              >
                fas.org
              </a>
            </div>

            <div className="data-sources-paragraph">
              <b>Stockholm International Peace Research Institute (SIPRI)</b> —
              Historical warhead data, annual yearbook estimates.{" "}
              <a href="https://sipri.org/yearbook" target="_blank" rel="noreferrer">
                sipri.org
              </a>
            </div>

            <div className="data-sources-paragraph">
              <b>Nuclear Threat Initiative (NTI)</b> — Country profiles, facility
              details, treaty information.{" "}
              <a href="https://nti.org" target="_blank" rel="noreferrer">
                nti.org
              </a>
            </div>

            <div className="data-sources-paragraph">
              <b>CSIS Missile Threat Project</b> — Missile specifications, range
              data, technical capabilities.{" "}
              <a
                href="https://missilethreat.csis.org"
                target="_blank"
                rel="noreferrer"
              >
                missilethreat.csis.org
              </a>
            </div>
          </div>

          <div className="data-sources-section">
            <div className="data-sources-section-title">
              Important Disclaimers
            </div>

            <div className="data-sources-disclaimer">
              &quot;This visualization uses publicly available estimates from
              open-source intelligence. Exact warhead counts, facility
              capabilities, and deployment details are classified by all nuclear
              states.&quot;
            </div>
            <div className="data-sources-disclaimer">
              &quot;Targeting trajectories shown are educated estimates based on
              publicly known strategic doctrine, geography, and deterrence
              theory. They do not represent confirmed targeting data.&quot;
            </div>
            <div className="data-sources-disclaimer">
              &quot;Submarine patrol routes are approximate representations of
              general patrol areas known from open-source analysis. Actual
              patrol routes are among the most closely guarded military secrets.&quot;
            </div>
            <div className="data-sources-disclaimer">
              &quot;This tool is for educational and research purposes only.&quot;
            </div>
          </div>

          <div className="data-sources-section">
            <div className="data-sources-section-title">Last Updated</div>
            <div className="data-sources-last-updated">March 2025</div>
          </div>
        </div>
      </div>
    </div>
  );
}

