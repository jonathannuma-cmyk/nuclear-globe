import { useEffect, useRef, useState, useMemo } from "react";
import { SidePanel } from "./SidePanel";
import { DetailPanel } from "./DetailPanel";
import { ThreatPanel } from "./ThreatPanel";
import { CountryBorders } from "./CountryBorders";
import { TimelineSlider } from "./TimelineSlider";
import { LandingScreen } from "./LandingScreen";
import { DataSourcesModal } from "./DataSourcesModal";
import {
  Facility,
  TYPE_LABELS,
  getWarheadsForYear,
  haversineDistanceKm,
  getThreateningCountries,
  facilities,
  MAJOR_CITIES,
  type MajorCity,
} from "./data";
import { createThreeScene, FilterType } from "./threeScene";

const TIMELINE_MIN = 1945;
const TIMELINE_MAX = 2025;
const PLAY_INTERVAL_MS = 200;

function App() {
  const [showLanding, setShowLanding] = useState(true);
  const [uiVisible, setUiVisible] = useState(false);
  const [entering, setEntering] = useState(false);
  const [showSources, setShowSources] = useState(false);

  const [activeFilter, setActiveFilter] = useState<FilterType>("all");
  const [activeCountry, setActiveCountry] = useState<string | null>(null);
  const [selectedFacility, setSelectedFacility] = useState<Facility | null>(
    null
  );
  const [hoveredFacility, setHoveredFacility] = useState<Facility | null>(null);
  const [tooltipPos, setTooltipPos] = useState<{ x: number; y: number } | null>(
    null
  );
  const [year, setYear] = useState(TIMELINE_MAX);
  const [isPlaying, setIsPlaying] = useState(false);
  const [threatMode, setThreatMode] = useState(false);
  const [threatTarget, setThreatTarget] = useState<MajorCity | null>(null);
  const [rangeDomeVisible, setRangeDomeVisible] = useState(false);
  const canvasContainerRef = useRef<HTMLDivElement | null>(null);
  const sceneApiRef =
    useRef<ReturnType<typeof createThreeScene> | null>(null);

  const warheadStats = useMemo(() => getWarheadsForYear(year), [year]);

  const threateningFacilities = useMemo(() => {
    if (!threatTarget) return [];
    const allowedCountries = new Set(getThreateningCountries(threatTarget.country));
    const list: { facility: Facility; distanceKm: number }[] = [];
    for (const f of facilities) {
      if (!allowedCountries.has(f.country)) continue;
      const d = haversineDistanceKm(f.lat, f.lng, threatTarget.lat, threatTarget.lng);
      if (f.range > 0 && f.range >= d) {
        list.push({ facility: f, distanceKm: d });
      }
    }
    return list;
  }, [threatTarget]);

  useEffect(() => {
    if (!canvasContainerRef.current || sceneApiRef.current) return;
    sceneApiRef.current = createThreeScene(canvasContainerRef.current, {
      onSelectFacility: (facility) => {
        setSelectedFacility(facility);
      },
      onHoverFacility: (facility, pos) => {
        setHoveredFacility(facility);
        setTooltipPos(pos);
      },
      onCityClick: (city) => {
        setThreatTarget(city);
      },
    }, { initialCameraZ: 8 });
    sceneApiRef.current.setCities(MAJOR_CITIES);
    return () => {
      sceneApiRef.current?.dispose();
      sceneApiRef.current = null;
    };
  }, []);

  const handleEnter = async () => {
    if (entering) return;
    setEntering(true);
    setShowLanding(false);
    try {
      await sceneApiRef.current?.flyCameraToDefault();
    } finally {
      setUiVisible(true);
    }
  };

  useEffect(() => {
    sceneApiRef.current?.setFilter(activeFilter);
  }, [activeFilter]);

  useEffect(() => {
    sceneApiRef.current?.setCountry(activeCountry);
  }, [activeCountry]);

  useEffect(() => {
    sceneApiRef.current?.setWarheadsByYear(warheadStats.byCountry);
  }, [warheadStats.byCountry]);

  useEffect(() => {
    sceneApiRef.current?.setThreatMode(threatMode);
  }, [threatMode]);

  useEffect(() => {
    if (!threatTarget) {
      sceneApiRef.current?.setThreatTarget(null);
      sceneApiRef.current?.setThreatArcs([]);
      return;
    }
    sceneApiRef.current?.setThreatTarget({
      lat: threatTarget.lat,
      lng: threatTarget.lng,
      name: threatTarget.name,
      country: threatTarget.country,
    });
    const facilityList = threateningFacilities.map((t) => t.facility);
    sceneApiRef.current?.setThreatArcs(facilityList);
    sceneApiRef.current?.centerGlobeOn(threatTarget.lat, threatTarget.lng);
  }, [threatTarget, threateningFacilities]);

  useEffect(() => {
    if (!isPlaying) return;
    const id = setInterval(() => {
      setYear((y) => {
        if (y >= TIMELINE_MAX) {
          setIsPlaying(false);
          return TIMELINE_MAX;
        }
        return y + 1;
      });
    }, PLAY_INTERVAL_MS);
    return () => clearInterval(id);
  }, [isPlaying]);

  useEffect(() => {
    setRangeDomeVisible(false);
  }, [selectedFacility]);

  const handleCloseDetail = () => {
    sceneApiRef.current?.showRangeForFacility(null);
    sceneApiRef.current?.showTargetsForFacility(null);
    setRangeDomeVisible(false);
    setSelectedFacility(null);
    sceneApiRef.current?.scheduleAutoRotateResume();
  };

  const handleShowRange = (facility: Facility) => {
    sceneApiRef.current?.showRangeForFacility(facility);
    setRangeDomeVisible(true);
  };

  const handleHideRange = () => {
    sceneApiRef.current?.showRangeForFacility(null);
    setRangeDomeVisible(false);
  };

  const handleShowTargets = (facility: Facility) => {
    sceneApiRef.current?.showTargetsForFacility(facility);
  };

  return (
    <>
      <div id="canvas-container" ref={canvasContainerRef} />

      <LandingScreen
        showLanding={showLanding}
        blockSceneInteraction={showLanding}
        onEnter={handleEnter}
      />

      <div className={`ui-layer ${uiVisible ? "ui-layer--visible" : ""}`}>
        <header className="header">
          <div className="header-left">
            <div className="logo-icon" />
            <h1>
              Global <span>Nuclear</span> Arsenal Tracker
            </h1>
          </div>
          <div className="header-right">
            <div>
              <span className="live-dot" />
              OPEN SOURCE INTELLIGENCE
            </div>
            <div style={{ marginTop: 2, opacity: 0.6 }}>
              DATA: FAS / SIPRI / NTI — EST. 2025
            </div>
            <button
              type="button"
              className="sources-button"
              onClick={() => setShowSources(true)}
              aria-label="Open data sources and methodology"
            >
              <span>ℹ</span>
              SOURCES
            </button>
          </div>
        </header>

        <SidePanel
          activeFilter={activeFilter}
          activeCountry={activeCountry}
          onChangeFilter={(f) => setActiveFilter(f as FilterType)}
          onChangeCountry={setActiveCountry}
          totalWarheads={warheadStats.total}
          warheadsByCountry={warheadStats.byCountry}
          nuclearStatesCount={warheadStats.nuclearStatesCount}
          threatMode={threatMode}
          onThreatModeChange={(active) => {
            setThreatMode(active);
            if (!active) setThreatTarget(null);
          }}
          selectedCity={threatTarget}
          onSelectCity={(city) => setThreatTarget(city)}
          timelineYear={year}
        />

        <CountryBorders getSceneApi={() => sceneApiRef.current} />

        {threatMode && threatTarget ? (
          <ThreatPanel
            targetCity={threatTarget}
            threateningFacilities={threateningFacilities}
            onClose={() => {
              setThreatMode(false);
              setThreatTarget(null);
            }}
          />
        ) : (
          <DetailPanel
            facility={selectedFacility}
            onClose={handleCloseDetail}
            rangeDomeVisible={rangeDomeVisible}
            onShowRange={handleShowRange}
            onHideRange={handleHideRange}
            onShowTargets={handleShowTargets}
          />
        )}

        {hoveredFacility && tooltipPos && (
          <div
            className={`tooltip ${hoveredFacility ? "visible" : ""}`}
            style={{ left: tooltipPos.x, top: tooltipPos.y }}
          >
            <div className="tooltip-name">{hoveredFacility.name}</div>
            <div className="tooltip-type">
              {hoveredFacility.country} · {TYPE_LABELS[hoveredFacility.type]}
            </div>
          </div>
        )}

        <div className="controls-hint">
          {threatMode
            ? "Drag to rotate · Scroll to zoom · Click a city marker for threat assessment"
            : "Drag to rotate · Scroll to zoom · Click markers for details"}
        </div>

        <TimelineSlider
          year={year}
          onChangeYear={setYear}
          totalWarheads={warheadStats.total}
          isPlaying={isPlaying}
          onPlayPause={() => setIsPlaying((p) => !p)}
        />

        <DataSourcesModal
          open={showSources}
          onClose={() => setShowSources(false)}
        />
      </div>
    </>
  );
}

export default App;

