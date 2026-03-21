import { Facility, TYPE_LABELS } from "./data";

export interface DetailPanelProps {
  facility: Facility | null;
  onClose: () => void;
  rangeDomeVisible?: boolean;
  onShowRange?: (facility: Facility) => void;
  onHideRange?: () => void;
  onShowTargets?: (facility: Facility) => void;
}

export function DetailPanel({ facility, onClose, rangeDomeVisible = false, onShowRange, onHideRange, onShowTargets }: DetailPanelProps) {
  const isOpen = Boolean(facility);
  const maxRange = 18000;
  const rangePct =
    facility && facility.range
      ? Math.min((facility.range / maxRange) * 100, 100)
      : 0;

  return (
    <div className={`detail-panel ${isOpen ? "open" : ""}`}>
      <div className="panel-card">
        <div className="detail-header">
          <div className="detail-title">{facility ? facility.name : "—"}</div>
          <button className="detail-close" onClick={onClose}>
            ✕
          </button>
        </div>
        <div id="detail-content">
          {facility && (
            <>
              <div className="detail-row">
                <span className="detail-label">Country</span>
                <span className="detail-value">{facility.country}</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Type</span>
                <span className="detail-value">
                  {TYPE_LABELS[facility.type]}
                </span>
              </div>
              <div className="detail-row">
                <span className="detail-label">System</span>
                <span className="detail-value">{facility.missiles}</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Status</span>
                <span className="detail-value">{facility.status}</span>
              </div>
              {facility.baseName ? (
                <div className="detail-row">
                  <span className="detail-label">Base</span>
                  <span className="detail-value">{facility.baseName}</span>
                </div>
              ) : null}
              {facility.warheads ? (
                <div className="detail-row">
                  <span className="detail-label">Est. Warheads</span>
                  <span
                    className="detail-value"
                    style={{ color: "var(--danger)" }}
                  >
                    {facility.warheads.toLocaleString()}
                  </span>
                </div>
              ) : null}

              {facility.range > 0 && (
                <div className="detail-range">
                  <div className="detail-range-title">Maximum Range</div>
                  <div className="range-bar-bg">
                    <div
                      className="range-bar-fill"
                      style={{ width: `${rangePct}%` }}
                    />
                  </div>
                  <div className="range-km">
                    {facility.range.toLocaleString()} km
                  </div>
                </div>
              )}

              <div className="detail-actions">
                {facility.range > 0 && (onShowRange || onHideRange) && (
                  <button
                    type="button"
                    className="detail-action-btn"
                    onClick={() => rangeDomeVisible ? onHideRange?.() : onShowRange?.(facility)}
                  >
                    {rangeDomeVisible ? "Hide Range" : "Show Range"}
                  </button>
                )}
                {(["icbm", "submarine", "airbase"] as const).includes(facility.type) &&
                  facility.likelyTargets?.length &&
                  onShowTargets && (
                  <button
                    type="button"
                    className="detail-action-btn"
                    onClick={() => onShowTargets(facility)}
                  >
                    Show Targets
                  </button>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

