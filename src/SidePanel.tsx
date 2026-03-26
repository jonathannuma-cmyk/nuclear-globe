import { useState, useMemo } from "react";
import {
  COUNTRY_COLORS,
  COUNTRY_WARHEADS,
  DEPLOYED_WARHEADS_2025,
  DEPLOYED_WARHEADS_DATA_YEAR,
  MAJOR_CITIES,
  type MajorCity,
} from "./data";

export interface SidePanelProps {
  activeFilter: string;
  onChangeFilter: (filter: string) => void;
  activeCountry: string | null;
  onChangeCountry: (country: string | null) => void;
  /** When set (e.g. from timeline), overrides static warhead stats */
  totalWarheads?: number;
  warheadsByCountry?: Record<string, number>;
  nuclearStatesCount?: number;
  /** Threat assessment mode */
  threatMode?: boolean;
  onThreatModeChange?: (active: boolean) => void;
  selectedCity?: MajorCity | null;
  onSelectCity?: (city: MajorCity | null) => void;
  /** Timeline year; deployed aggregate only shown for {@link DEPLOYED_WARHEADS_DATA_YEAR}. */
  timelineYear?: number;
}

export function SidePanel({
  activeFilter,
  onChangeFilter,
  activeCountry,
  onChangeCountry,
  totalWarheads: totalWarheadsProp,
  warheadsByCountry: warheadsByCountryProp,
  nuclearStatesCount: nuclearStatesCountProp,
  threatMode = false,
  onThreatModeChange,
  selectedCity = null,
  onSelectCity,
  timelineYear = DEPLOYED_WARHEADS_DATA_YEAR,
}: SidePanelProps) {
  const [citySearch, setCitySearch] = useState("");
  const [cityDropdownOpen, setCityDropdownOpen] = useState(false);

  const filteredCities = useMemo(() => {
    if (!citySearch.trim()) return MAJOR_CITIES;
    const q = citySearch.trim().toLowerCase();
    return MAJOR_CITIES.filter(
      (c) =>
        c.name.toLowerCase().includes(q) ||
        c.country.toLowerCase().includes(q)
    );
  }, [citySearch]);

  const filters = [
    { id: "all", label: "All" },
    { id: "icbm", label: "ICBM Silo" },
    { id: "submarine", label: "Sub Base" },
    { id: "airbase", label: "Air Base" },
    { id: "storage", label: "Storage" },
    { id: "test", label: "Test Site" },
  ];

  const totalWarheads =
    totalWarheadsProp ?? Object.values(COUNTRY_WARHEADS).reduce((a, b) => a + b, 0);
  const warheadsByCountry = warheadsByCountryProp ?? COUNTRY_WARHEADS;
  const nuclearStatesCount =
    nuclearStatesCountProp ?? Object.values(warheadsByCountry).filter((c) => c > 0).length;

  const sortedCountries = Object.entries(warheadsByCountry).sort((a, b) => b[1] - a[1]);

  return (
    <div className="side-panel">
      {onThreatModeChange && (
        <div className="panel-card threat-toggle-card">
          <button
            type="button"
            className={`threat-toggle-btn ${threatMode ? "active" : ""}`}
            onClick={() => onThreatModeChange(!threatMode)}
          >
            <span className="threat-toggle-icon">⊕</span>
            THREAT ASSESSMENT
          </button>
          {threatMode && onSelectCity && (
            <div className="threat-city-picker">
              <input
                type="text"
                className="threat-city-search"
                placeholder="Type to search cities..."
                value={citySearch}
                onChange={(e) => {
                  setCitySearch(e.target.value);
                  setCityDropdownOpen(true);
                }}
                onFocus={() => setCityDropdownOpen(true)}
              />
              {cityDropdownOpen && (
                <>
                  <div
                    className="threat-city-dropdown-backdrop"
                    onClick={() => setCityDropdownOpen(false)}
                    aria-hidden
                  />
                  <div className="threat-city-dropdown">
                    <div className="threat-city-hint">
                      {citySearch.trim() ? "Select a city" : "Search or click a city marker on the globe"}
                    </div>
                    {filteredCities.slice(0, 50).map((city) => (
                      <button
                        key={`${city.name}-${city.country}`}
                        type="button"
                        className="threat-city-option"
                        onClick={() => {
                          onSelectCity(city);
                          setCityDropdownOpen(false);
                          setCitySearch("");
                        }}
                      >
                        <span className="threat-city-option-name">{city.name}</span>
                        <span className="threat-city-option-country">{city.country}</span>
                      </button>
                    ))}
                    {filteredCities.length === 0 && (
                      <div className="threat-city-empty">No cities match</div>
                    )}
                  </div>
                </>
              )}
              {selectedCity && (
                <div className="threat-city-selected">
                  {selectedCity.name}, {selectedCity.country}
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {!threatMode && (
        <>
          <div className="panel-card">
            <h3>Global Overview</h3>
            <div className="stat-grid">
              <div className="stat-item">
                <div className="stat-value" id="total-warheads">
                  {totalWarheads.toLocaleString()}
                </div>
                <div className="stat-label">Total Warheads</div>
              </div>
              <div className="stat-item">
                <div className="stat-value" id="nuclear-states-count">
                  {nuclearStatesCount}
                </div>
                <div className="stat-label">Nuclear States</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">
                  {timelineYear === DEPLOYED_WARHEADS_DATA_YEAR
                    ? DEPLOYED_WARHEADS_2025.toLocaleString()
                    : "—"}
                </div>
                <div className="stat-label">Deployed</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">70</div>
                <div className="stat-label">Known Facilities</div>
              </div>
            </div>
          </div>

          <div className="panel-card">
            <h3>Filter by Type</h3>
            <div className="filter-row">
              {filters.map((f) => (
                <button
                  key={f.id}
                  className={`filter-btn ${activeFilter === f.id ? "active" : ""}`}
                  onClick={() => onChangeFilter(f.id)}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>

          <div className="panel-card">
            <h3>Nuclear States</h3>
            <div className="country-list">
              {sortedCountries.map(([country, count]) => {
                const isActive = activeCountry === country;
                return (
                  <div
                    key={country}
                    className={`country-item ${isActive ? "active" : ""}`}
                    onClick={() => onChangeCountry(isActive ? null : country)}
                  >
                    <div className="country-left">
                      <div className="country-dot" style={{ background: COUNTRY_COLORS[country] }} />
                      <div className="country-name">{country}</div>
                    </div>
                    <div className="country-count">{count.toLocaleString()}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

