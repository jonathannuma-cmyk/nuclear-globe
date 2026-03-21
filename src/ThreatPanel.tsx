import { Facility, getFlightTimeMinutes } from "./data";

export interface ThreateningFacility {
  facility: Facility;
  distanceKm: number;
}

export interface ThreatTargetCity {
  name: string;
  country: string;
  lat: number;
  lng: number;
}

export interface ThreatPanelProps {
  targetCity: ThreatTargetCity;
  threateningFacilities: ThreateningFacility[];
  onClose: () => void;
}

function formatFlightTime(facility: Facility, distanceKm: number): string {
  const minutes = getFlightTimeMinutes(facility.type, distanceKm);
  if (minutes < 1) return "< 1 min";
  if (minutes < 60) return `~${Math.round(minutes)} min`;
  const hours = minutes / 60;
  return `~${hours.toFixed(1)} hr`;
}

export function ThreatPanel({
  targetCity,
  threateningFacilities,
  onClose,
}: ThreatPanelProps) {
  const totalWarheads = threateningFacilities.reduce(
    (sum, t) => sum + (t.facility.warheads || 0),
    0
  );

  const byCountry = threateningFacilities.reduce<
    Record<string, ThreateningFacility[]>
  >((acc, t) => {
    const c = t.facility.country;
    if (!acc[c]) acc[c] = [];
    acc[c].push(t);
    return acc;
  }, {});

  const countryOrder = Object.keys(byCountry).sort();

  return (
    <div className="threat-panel open">
      <div className="threat-panel-card">
        <div className="threat-panel-header">
          <div className="threat-panel-title-block">
            <span className="threat-panel-badge">THREAT ASSESSMENT</span>
            <h2 className="threat-panel-city">{targetCity.name}</h2>
            <div className="threat-panel-country">{targetCity.country}</div>
          </div>
          <button
            type="button"
            className="threat-panel-close"
            onClick={onClose}
            aria-label="Close threat assessment"
          >
            ✕
          </button>
        </div>

        <div className="threat-panel-stats">
          <div className="threat-stat">
            <span className="threat-stat-value">
              {threateningFacilities.length}
            </span>
            <span className="threat-stat-label">Facilities in range</span>
          </div>
          <div className="threat-stat">
            <span className="threat-stat-value">
              {totalWarheads.toLocaleString()}
            </span>
            <span className="threat-stat-label">Warheads in range</span>
          </div>
        </div>

        <div className="threat-panel-list-label">Threatening facilities</div>
        <div className="threat-panel-list">
          {countryOrder.map((country) => (
            <div key={country} className="threat-country-group">
              <div className="threat-country-name">{country}</div>
              {byCountry[country].map(({ facility, distanceKm }) => (
                <div key={`${facility.name}-${facility.lat}`} className="threat-facility-row">
                  <div className="threat-facility-main">
                    <span className="threat-facility-name">{facility.name}</span>
                    <span className="threat-facility-missiles">
                      {facility.missiles}
                    </span>
                  </div>
                  <div className="threat-facility-time">
                    {formatFlightTime(facility, distanceKm)}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
