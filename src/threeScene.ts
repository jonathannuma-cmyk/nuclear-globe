import * as THREE from "three";
import {
  Facility,
  FacilityType,
  facilities,
  COUNTRY_COLORS,
  latLngToVector3,
  vector3ToLatLng,
  SUBMARINE_PATROLS,
  type SubmarinePatrol,
  type MajorCity,
} from "./data";

export type FilterType = FacilityType | "all";

export interface ThreatTarget {
  lat: number;
  lng: number;
  name: string;
  country: string;
}

export interface SceneCallbacks {
  onSelectFacility: (facility: Facility) => void;
  onHoverFacility: (
    facility: Facility | null,
    pos: { x: number; y: number } | null
  ) => void;
  onCityClick?: (city: MajorCity) => void;
}

export interface SceneApi {
  setFilter: (filter: FilterType) => void;
  setCountry: (country: string | null) => void;
  setWarheadsByYear: (byCountry: Record<string, number>) => void;
  addCountryBorders: (geojson: any) => void;
  showRangeForFacility: (facility: Facility | null) => void;
  showTargetsForFacility: (facility: Facility | null) => void;
  setThreatMode: (active: boolean) => void;
  setThreatTarget: (target: ThreatTarget | null) => void;
  setThreatArcs: (facilityList: Facility[]) => void;
  setThreatRangeDomes: (facilityList: Facility[]) => void;
  setCities: (cities: MajorCity[]) => void;
  centerGlobeOn: (lat: number, lng: number) => void;
  scheduleAutoRotateResume: () => void;
  flyCameraToDefault: () => Promise<void>;
  dispose: () => void;
}

export function createThreeScene(
  container: HTMLDivElement,
  callbacks: SceneCallbacks,
  options?: { initialCameraZ?: number }
): SceneApi {
  const scene = new THREE.Scene();

  const camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  const defaultCameraZ = 3.2;
  camera.position.z = options?.initialCameraZ ?? defaultCameraZ;

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setClearColor(0x0a0c10, 1);
  container.innerHTML = "";
  container.appendChild(renderer.domElement);

  const raycaster = new THREE.Raycaster();
  raycaster.params.Points = { threshold: 0.06 };
  const mouse = new THREE.Vector2();

  let isDragging = false;
  let prevMouse = { x: 0, y: 0 };
  let rotationVelocity = { x: 0, y: 0 };
  let targetRotation = { x: 0.3, y: 0 };
  let autoRotate = true;
  let autoRotateResumeTimeoutId: ReturnType<typeof setTimeout> | null = null;
  let cameraFlight:
    | {
        fromZ: number;
        toZ: number;
        startMs: number;
        durationMs: number;
        resolve: () => void;
      }
    | null = null;

  let activeFilter: FilterType = "all";
  let activeCountry: string | null = null;
  let selectedFacility: Facility | null = null;

  const points: {
    ring: THREE.Mesh;
    dot: THREE.Mesh;
    pulse: THREE.Mesh;
    facility: Facility;
    yearScale: number;
  }[] = [];

  let globe: THREE.Mesh;
  let bordersGroup: THREE.Group | null = null;
  let rangeDomesGroup: THREE.Group | null = null;
  let targetArcsGroup: THREE.Group | null = null;
  let threatMode = false;
  let threatTarget: ThreatTarget | null = null;
  let threatMarkerGroup: THREE.Group | null = null;
  let threatArcsGroup: THREE.Group | null = null;
  let patrolGroup: THREE.Group | null = null;
  let cityMarkers: { mesh: THREE.Mesh; city: MajorCity }[] = [];
  let cityMarkersGroup: THREE.Group | null = null;
  const patrolItems: {
    patrol: SubmarinePatrol;
    pathLine: THREE.Line;
    subMesh: THREE.Mesh;
    pathVecs: THREE.Vector3[];
    currentLat: number;
    currentLng: number;
  }[] = [];

  function createStarfield() {
    const geo = new THREE.BufferGeometry();
    const positions = new Float32Array(3000 * 3);
    for (let i = 0; i < 3000; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 100;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 100;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 100;
    }
    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const mat = new THREE.PointsMaterial({
      color: 0x334155,
      size: 0.08,
      sizeAttenuation: true,
    });
    scene.add(new THREE.Points(geo, mat));
  }

  function createGlobe() {
    const sphereGeo = new THREE.SphereGeometry(1, 64, 64);

    const texture = new THREE.TextureLoader().load("/earth-night.jpg");
    texture.wrapS = THREE.ClampToEdgeWrapping;
    texture.wrapT = THREE.ClampToEdgeWrapping;

    const sphereMat = new THREE.MeshPhongMaterial({
      map: texture,
      emissiveMap: texture,
      color: 0xffffff,
      emissive: 0x111111,
      emissiveIntensity: 0.8,
      specular: 0x1e3a5f,
      shininess: 18,
    });

    globe = new THREE.Mesh(sphereGeo, sphereMat);
    scene.add(globe);

    const wireGeo = new THREE.SphereGeometry(1.002, 36, 18);
    const wireMat = new THREE.MeshBasicMaterial({
      color: 0x1e3a5f,
      wireframe: true,
      transparent: true,
      opacity: 0.08,
    });
    const wire = new THREE.Mesh(wireGeo, wireMat);
    globe.add(wire);

    const ringGeo = new THREE.RingGeometry(1.003, 1.007, 128);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.1,
      side: THREE.DoubleSide,
    });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.rotation.x = Math.PI / 2;
    globe.add(ring);
  }

  function createFacilityPoints() {
    facilities.forEach((f, i) => {
      const pos = latLngToVector3(f.lat, f.lng, 1.01);
      const position = new THREE.Vector3(pos.x, pos.y, pos.z);
      const color = new THREE.Color(COUNTRY_COLORS[f.country] || "#ffffff");

      // Secondary facilities (storage, test) render at 50% of primary marker size
      const s = (f.type === "storage" || f.type === "test") ? 0.5 : 1.0;

      const ringGeo = new THREE.RingGeometry(0.015 * s, 0.025 * s, 16);
      const ringMat = new THREE.MeshBasicMaterial({
        color,
        transparent: true,
        opacity: 0.35,
        side: THREE.DoubleSide,
      });
      const ring = new THREE.Mesh(ringGeo, ringMat);
      ring.position.copy(position);
      ring.lookAt(position.clone().multiplyScalar(2));
      ring.userData = { facilityIndex: i };
      globe.add(ring);

      const dotGeo = new THREE.CircleGeometry(0.015 * s, 12);
      const dotMat = new THREE.MeshBasicMaterial({
        color,
        transparent: true,
        opacity: 0.9,
        side: THREE.DoubleSide,
      });
      const dot = new THREE.Mesh(dotGeo, dotMat);
      dot.position.copy(position);
      dot.lookAt(position.clone().multiplyScalar(2));
      dot.userData = { facilityIndex: i };
      globe.add(dot);

      const pulseGeo = new THREE.RingGeometry(0.014 * s, 0.018 * s, 16);
      const pulseMat = new THREE.MeshBasicMaterial({
        color,
        transparent: true,
        opacity: 0.5,
        side: THREE.DoubleSide,
      });
      const pulse = new THREE.Mesh(pulseGeo, pulseMat);
      pulse.position.copy(position);
      pulse.lookAt(position.clone().multiplyScalar(2));
      pulse.userData = { facilityIndex: i, isPulse: true };
      globe.add(pulse);

      points.push({ ring, dot, pulse, facility: f, yearScale: 1 });
    });
  }

  function setWarheadsByYear(byCountry: Record<string, number>) {
    points.forEach((p) => {
      const count = byCountry[p.facility.country] ?? 0;
      // Hide markers entirely for years before this country had nuclear weapons.
      // All visible markers use a fixed scale so size is uniform across countries.
      const scale = count === 0 ? 0 : 1;
      p.yearScale = scale;
      p.ring.scale.set(scale, scale, 1);
      p.dot.scale.set(scale, scale, 1);
    });
  }

  function patrolToFacility(patrol: SubmarinePatrol, lat: number, lng: number): Facility {
    return {
      name: patrol.name,
      country: patrol.country,
      lat,
      lng,
      type: "submarine",
      missiles: patrol.missiles,
      warheads: patrol.warheads,
      range: patrol.range,
      status: "Patrol",
      baseName: patrol.baseName,
    };
  }

  function createPatrolVisuals() {
    if (!globe) return;
    const group = new THREE.Group();
    patrolGroup = group;
    globe.add(group);
    const radius = 1.005;

    SUBMARINE_PATROLS.forEach((patrol) => {
      if (patrol.waypoints.length < 2) return;
      const color = new THREE.Color(COUNTRY_COLORS[patrol.country] || "#ffffff");
      const pathPoints = patrol.waypoints.map((w) => {
        const p = latLngToVector3(w.lat, w.lng, radius);
        return new THREE.Vector3(p.x, p.y, p.z);
      });
      pathPoints.push(pathPoints[0].clone());
      const pathGeo = new THREE.BufferGeometry().setFromPoints(pathPoints);
      const pathMat = new THREE.LineDashedMaterial({
        color,
        transparent: true,
        opacity: 0.15,
        dashSize: 0.015,
        gapSize: 0.01,
      });
      const pathLine = new THREE.Line(pathGeo, pathMat);
      pathLine.computeLineDistances();
      group.add(pathLine);

      const subGeo = new THREE.ConeGeometry(0.012, 0.028, 4);
      const subMat = new THREE.MeshBasicMaterial({
        color,
        transparent: true,
        opacity: 0.95,
        side: THREE.DoubleSide,
      });
      const subMesh = new THREE.Mesh(subGeo, subMat);
      subMesh.userData = { patrolIndex: patrolItems.length, isPatrolSub: true };
      const first = pathPoints[0];
      subMesh.position.copy(first);
      subMesh.lookAt(first.clone().multiplyScalar(2));
      group.add(subMesh);

      const pathVecs = patrol.waypoints.map((w) => {
        const p = latLngToVector3(w.lat, w.lng, radius);
        return new THREE.Vector3(p.x, p.y, p.z);
      });
      const w0 = patrol.waypoints[0];
      patrolItems.push({
        patrol,
        pathLine,
        subMesh,
        pathVecs,
        currentLat: w0.lat,
        currentLng: w0.lng,
      });
    });
  }

  function clearCityMarkers() {
    if (cityMarkersGroup && globe) {
      globe.remove(cityMarkersGroup);
      cityMarkersGroup.children.forEach((child) => {
        if (child instanceof THREE.Mesh) {
          child.geometry.dispose();
          (child.material as THREE.Material).dispose();
        }
      });
      cityMarkersGroup = null;
    }
    cityMarkers = [];
  }

  function createCityMarkers(cities: MajorCity[]) {
    if (!globe) return;
    clearCityMarkers();
    const group = new THREE.Group();
    group.visible = false;
    cityMarkersGroup = group;
    globe.add(group);
    const radius = 1.013;
    cities.forEach((city, i) => {
      const pos = latLngToVector3(city.lat, city.lng, radius);
      const posVec = new THREE.Vector3(pos.x, pos.y, pos.z);
      const geo = new THREE.CircleGeometry(0.013, 4);
      const mat = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0.55,
        side: THREE.DoubleSide,
      });
      const mesh = new THREE.Mesh(geo, mat);
      mesh.position.copy(posVec);
      mesh.lookAt(posVec.clone().multiplyScalar(2));
      mesh.rotateZ(Math.PI / 4);
      mesh.userData = { cityIndex: i };
      group.add(mesh);
      cityMarkers.push({ mesh, city });
    });
  }

  function updatePatrolVisibility() {
    if (!patrolGroup) return;
    const show =
      (activeFilter === "all" || activeFilter === "submarine") &&
      (!activeCountry || SUBMARINE_PATROLS.some((p) => p.country === activeCountry));
    patrolGroup.visible = show;
    if (!show) return;
    patrolItems.forEach((item) => {
      const countryMatch = !activeCountry || item.patrol.country === activeCountry;
      item.pathLine.visible = countryMatch;
      item.subMesh.visible = countryMatch;
    });
  }

  function createAtmosphere() {
    const atmosGeo = new THREE.SphereGeometry(1.05, 64, 64);
    const atmosMat = new THREE.ShaderMaterial({
      vertexShader: `
        varying vec3 vNormal;
        void main() {
          vNormal = normalize(normalMatrix * normal);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        varying vec3 vNormal;
        void main() {
          float intensity = pow(0.6 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.0);
          gl_FragColor = vec4(0.22, 0.74, 0.97, 0.15) * intensity;
        }
      `,
      blending: THREE.AdditiveBlending,
      side: THREE.BackSide,
      transparent: true,
    });
    scene.add(new THREE.Mesh(atmosGeo, atmosMat));
  }

  function setupLights() {
    scene.add(new THREE.AmbientLight(0x334155, 1.2));
    const dirLight = new THREE.DirectionalLight(0x94a3b8, 1.5);
    dirLight.position.set(5, 3, 5);
    scene.add(dirLight);
    const rimLight = new THREE.DirectionalLight(0x38bdf8, 0.3);
    rimLight.position.set(-5, -2, -3);
    scene.add(rimLight);
  }

  function isVisible(f: Facility) {
    if (activeFilter !== "all" && f.type !== activeFilter) return false;
    if (activeCountry && f.country !== activeCountry) return false;
    return true;
  }

  function updatePointVisibility() {
    points.forEach((p) => {
      const vis = isVisible(p.facility) && p.yearScale > 0;
      p.ring.visible = vis;
      p.dot.visible = vis;
      p.pulse.visible = vis;
    });
    updatePatrolVisibility();
  }

  function clearRangeDomes() {
    if (rangeDomesGroup && globe) {
      globe.remove(rangeDomesGroup);
      rangeDomesGroup.children.forEach((child) => {
        const mesh = child as THREE.Mesh;
        mesh.geometry.dispose();
        (mesh.material as THREE.ShaderMaterial).dispose();
      });
      rangeDomesGroup = null;
    }
  }

  function clearCountryBorders() {
    if (bordersGroup && globe) {
      globe.remove(bordersGroup);
      bordersGroup.children.forEach((child) => {
        const line = child as THREE.Line;
        line.geometry.dispose();
        (line.material as THREE.LineBasicMaterial).dispose();
      });
      bordersGroup = null;
    }
  }

  function addCountryBorders(geojson: any) {
    if (!globe) return;
    clearCountryBorders();

    bordersGroup = new THREE.Group();
    globe.add(bordersGroup);

    const nuclearStates = new Set([
      "United States",
      "Russia",
      "China",
      "France",
      "United Kingdom",
      "India",
      "Pakistan",
      "Israel",
      "North Korea",
    ]);

    const features: any[] = geojson.features || [];

    features.forEach((feature) => {
      const geom = feature.geometry;
      if (!geom) return;

      const adminName: string =
        feature.properties?.ADMIN ||
        feature.properties?.SOVEREIGNT ||
        feature.properties?.NAME ||
        "";

      const isNuclear = nuclearStates.has(adminName);
      const opacity = isNuclear ? 0.7 : 0.3;

      const processPolygon = (coords: number[][][]) => {
        coords.forEach((ring) => {
          const points: THREE.Vector3[] = [];

          ring.forEach(([lng, lat]) => {
            const p = latLngToVector3(lat, lng, 1.003);
            points.push(new THREE.Vector3(p.x, p.y, p.z));
          });

          if (points.length < 2) return;
          const first = points[0];
          const last = points[points.length - 1];
          if (!first.equals(last)) {
            points.push(first.clone());
          }

          const geo = new THREE.BufferGeometry().setFromPoints(points);
          const mat = new THREE.LineBasicMaterial({
            color: 0x1e3a5f,
            transparent: true,
            opacity,
          });
          const line = new THREE.Line(geo, mat);
          bordersGroup?.add(line);
        });
      };

      if (geom.type === "Polygon") {
        processPolygon(geom.coordinates as number[][][]);
      } else if (geom.type === "MultiPolygon") {
        (geom.coordinates as number[][][][]).forEach((poly) =>
          processPolygon(poly)
        );
      }
    });
  }

  function addRangeDome(f: Facility) {
    if (!f.range) return;

    const radius = 1.02;
    const angularRadius = f.range / 6371;
    const d = latLngToVector3(f.lat, f.lng, 1);
    const centerDir = new THREE.Vector3(d.x, d.y, d.z).normalize();

    const domeGeo = new THREE.SphereGeometry(radius, 64, 64);

    const uniforms = {
      uCenterDir: { value: centerDir },
      uCosRadius: { value: Math.cos(angularRadius) },
    };

    const domeMat = new THREE.ShaderMaterial({
      uniforms,
      vertexShader: `
        varying float vDot;
        uniform vec3 uCenterDir;
        void main() {
          vec3 n = normalize(position);
          vDot = dot(n, normalize(uCenterDir));
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        varying float vDot;
        uniform float uCosRadius;
        void main() {
          float edgeDist = vDot - uCosRadius;
          if (edgeDist < 0.0) discard;
          float edgeWidth = 0.015;
          float alpha;
          if (edgeDist < edgeWidth) {
            alpha = 0.7;
          } else {
            alpha = 0.08;
          }
          gl_FragColor = vec4(0.93, 0.27, 0.27, alpha);
        }
      `,
      transparent: true,
      depthWrite: false,
      side: THREE.DoubleSide,
    });

    const dome = new THREE.Mesh(domeGeo, domeMat);
    rangeDomesGroup?.add(dome);
  }

  function showRangeForFacilityImpl(f: Facility | null) {
    clearRangeDomes();
    if (!f || !f.range) return;
    rangeDomesGroup = new THREE.Group();
    globe.add(rangeDomesGroup);
    addRangeDome(f);
  }

  function clearTargetArcs() {
    if (targetArcsGroup && globe) {
      globe.remove(targetArcsGroup);
      targetArcsGroup.children.forEach((child) => {
        if (child instanceof THREE.Line) {
          child.geometry.dispose();
          (child.material as THREE.Material).dispose();
        } else if (child instanceof THREE.Mesh) {
          child.geometry.dispose();
          (child.material as THREE.Material).dispose();
        }
      });
      targetArcsGroup = null;
    }
  }

  function showTargetsForFacilityImpl(f: Facility | null) {
    clearTargetArcs();
    if (!f || !f.likelyTargets?.length) return;

    const radius = 1.01;
    const midRadius = 1.01 + 0.3;
    const startPos = latLngToVector3(f.lat, f.lng, radius);
    const startVec = new THREE.Vector3(startPos.x, startPos.y, startPos.z);
    const countryColor = new THREE.Color(COUNTRY_COLORS[f.country] || "#ffffff");

    targetArcsGroup = new THREE.Group();
    globe.add(targetArcsGroup);

    f.likelyTargets.forEach((target) => {
      const endPos = latLngToVector3(target.lat, target.lng, radius);
      const endVec = new THREE.Vector3(endPos.x, endPos.y, endPos.z);
      const midDir = new THREE.Vector3()
        .addVectors(startVec, endVec)
        .normalize();
      const midVec = midDir.multiplyScalar(midRadius);

      const curve = new THREE.QuadraticBezierCurve3(startVec, midVec, endVec);
      const points = curve.getPoints(64);
      const geo = new THREE.BufferGeometry().setFromPoints(points);
      const mat = new THREE.LineBasicMaterial({
        color: countryColor,
        transparent: true,
        opacity: 0.6,
      });
      const line = new THREE.Line(geo, mat);
      targetArcsGroup!.add(line);

      const diamondGeo = new THREE.OctahedronGeometry(0.018, 0);
      const diamondMat = new THREE.MeshBasicMaterial({
        color: 0xef4444,
        transparent: true,
        opacity: 0.95,
      });
      const diamond = new THREE.Mesh(diamondGeo, diamondMat);
      diamond.position.copy(endVec);
      diamond.lookAt(endVec.clone().multiplyScalar(2));
      diamond.userData = { isTargetDiamond: true };
      targetArcsGroup!.add(diamond);
    });
  }

  function clearThreatMarker() {
    if (threatMarkerGroup && globe) {
      globe.remove(threatMarkerGroup);
      threatMarkerGroup.children.forEach((child) => {
        if (child instanceof THREE.Line || child instanceof THREE.Mesh) {
          child.geometry.dispose();
          (child.material as THREE.Material).dispose();
        }
      });
      threatMarkerGroup = null;
    }
  }

  function clearThreatArcs() {
    if (threatArcsGroup && globe) {
      globe.remove(threatArcsGroup);
      threatArcsGroup.children.forEach((child) => {
        if (child instanceof THREE.Line) {
          child.geometry.dispose();
          (child.material as THREE.Material).dispose();
        } else if (child instanceof THREE.Mesh) {
          child.geometry.dispose();
          (child.material as THREE.Material).dispose();
        }
      });
      threatArcsGroup = null;
    }
  }

  function setThreatTargetImpl(target: ThreatTarget | null) {
    clearThreatMarker();
    threatTarget = target;
    if (!target) return;
    const radius = 1.01;
    const pos = latLngToVector3(target.lat, target.lng, radius);
    const posVec = new THREE.Vector3(pos.x, pos.y, pos.z);
    threatMarkerGroup = new THREE.Group();
    threatMarkerGroup.position.copy(posVec);
    threatMarkerGroup.lookAt(posVec.clone().multiplyScalar(2));
    const size = 0.035;
    const crossGeo = new THREE.BufferGeometry().setFromPoints([
      new THREE.Vector3(-size, 0, 0),
      new THREE.Vector3(size, 0, 0),
      new THREE.Vector3(0, -size, 0),
      new THREE.Vector3(0, size, 0),
    ]);
    const crossMat = new THREE.LineBasicMaterial({
      color: 0xef4444,
      transparent: true,
      opacity: 0.9,
      linewidth: 1,
    });
    const crossLine = new THREE.LineSegments(crossGeo, crossMat);
    crossLine.userData = { isThreatMarker: true };
    threatMarkerGroup.add(crossLine);
    const ringGeo = new THREE.RingGeometry(0.012, 0.02, 16);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0xef4444,
      transparent: true,
      opacity: 0.8,
      side: THREE.DoubleSide,
    });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.userData = { isThreatMarker: true };
    threatMarkerGroup.add(ring);
    globe.add(threatMarkerGroup);
  }

  function setThreatArcsImpl(facilityList: Facility[]) {
    clearThreatArcs();
    if (!threatTarget || !facilityList.length) return;
    const radius = 1.01;
    const midRadius = 1.01 + 0.3;
    const endPos = latLngToVector3(threatTarget.lat, threatTarget.lng, radius);
    const endVec = new THREE.Vector3(endPos.x, endPos.y, endPos.z);
    threatArcsGroup = new THREE.Group();
    globe.add(threatArcsGroup);
    const redColor = new THREE.Color(0xef4444);
    facilityList.forEach((f) => {
      const startPos = latLngToVector3(f.lat, f.lng, radius);
      const startVec = new THREE.Vector3(startPos.x, startPos.y, startPos.z);
      const midDir = new THREE.Vector3()
        .addVectors(startVec, endVec)
        .normalize();
      const midVec = midDir.clone().multiplyScalar(midRadius);
      const curve = new THREE.QuadraticBezierCurve3(startVec, midVec, endVec);
      const pts = curve.getPoints(48);
      const geo = new THREE.BufferGeometry().setFromPoints(pts);
      const mat = new THREE.LineBasicMaterial({
        color: redColor,
        transparent: true,
        opacity: 0.7,
        linewidth: 1,
      });
      const line = new THREE.Line(geo, mat);
      threatArcsGroup!.add(line);
      const dotGeo = new THREE.CircleGeometry(0.006, 12);
      const dotMat = new THREE.MeshBasicMaterial({
        color: redColor,
        transparent: true,
        opacity: 0.95,
        side: THREE.DoubleSide,
      });
      const dot = new THREE.Mesh(dotGeo, dotMat);
      dot.position.copy(startVec);
      dot.lookAt(startVec.clone().multiplyScalar(2));
      threatArcsGroup!.add(dot);
    });
  }

  function setThreatRangeDomesImpl(facilityList: Facility[]) {
    clearRangeDomes();
    if (!facilityList.length) return;
    rangeDomesGroup = new THREE.Group();
    globe.add(rangeDomesGroup);
    facilityList.forEach((f) => {
      if (f.range > 0) addRangeDome(f);
    });
  }

  function centerGlobeOnImpl(lat: number, lng: number) {
    targetRotation.x = lat * (Math.PI / 180);
    targetRotation.y = -(lng + 90) * (Math.PI / 180);
    autoRotate = false;
  }

  function checkHover(e: MouseEvent) {
    const rect = renderer.domElement.getBoundingClientRect();
    mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
    raycaster.setFromCamera(mouse, camera);
    const meshes = points.flatMap((p) => [p.ring, p.dot]);
    const intersects = raycaster.intersectObjects(meshes);

    if (intersects.length > 0) {
      const idx = (intersects[0].object.userData as any)
        .facilityIndex as number | undefined;
      if (idx !== undefined) {
        const f = facilities[idx];
        if (isVisible(f)) {
          callbacks.onHoverFacility(f, {
            x: e.clientX + 14,
            y: e.clientY - 10,
          });
          renderer.domElement.style.cursor = "pointer";
          return;
        }
      }
    }
    if (patrolGroup?.visible) {
      const subMeshes = patrolItems.filter((i) => i.subMesh.visible).map((i) => i.subMesh);
      const patrolHits = raycaster.intersectObjects(subMeshes);
      if (patrolHits.length > 0) {
        const patrolIdx = (patrolHits[0].object.userData as any).patrolIndex as number | undefined;
        if (patrolIdx !== undefined && patrolItems[patrolIdx]) {
          const item = patrolItems[patrolIdx];
          const fac = patrolToFacility(item.patrol, item.currentLat, item.currentLng);
          callbacks.onHoverFacility(fac, { x: e.clientX + 14, y: e.clientY - 10 });
          renderer.domElement.style.cursor = "pointer";
          return;
        }
      }
    }
    if (threatMode && cityMarkersGroup?.visible) {
      const cityMeshes = cityMarkers.map((c) => c.mesh);
      const cityHits = raycaster.intersectObjects(cityMeshes);
      if (cityHits.length > 0) {
        callbacks.onHoverFacility(null, null);
        renderer.domElement.style.cursor = "pointer";
        return;
      }
    }
    callbacks.onHoverFacility(null, null);
    renderer.domElement.style.cursor = "grab";
  }

  function checkClick(e: MouseEvent) {
    const rect = renderer.domElement.getBoundingClientRect();
    mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
    raycaster.setFromCamera(mouse, camera);

    if (threatMode && callbacks.onCityClick && cityMarkersGroup?.visible) {
      const cityMeshes = cityMarkers.map((c) => c.mesh);
      const cityHits = raycaster.intersectObjects(cityMeshes);
      if (cityHits.length > 0) {
        const cityIdx = (cityHits[0].object.userData as any).cityIndex as number | undefined;
        if (cityIdx !== undefined && cityMarkers[cityIdx]) {
          callbacks.onCityClick(cityMarkers[cityIdx].city);
          return;
        }
      }
    }

    let meshes = points.flatMap((p) => [p.ring, p.dot]);
    let intersects = raycaster.intersectObjects(meshes);
    if (intersects.length > 0) {
      const idx = (intersects[0].object.userData as any)
        .facilityIndex as number | undefined;
      if (idx !== undefined) {
        const f = facilities[idx];
        if (isVisible(f)) {
          showTargetsForFacilityImpl(null);
          selectedFacility = f;
          callbacks.onSelectFacility(f);
          if (autoRotateResumeTimeoutId) {
            clearTimeout(autoRotateResumeTimeoutId);
            autoRotateResumeTimeoutId = null;
          }
          autoRotate = false;
          centerGlobeOnImpl(f.lat, f.lng);
          clearRangeDomes();
        }
      }
      return;
    }
    if (patrolGroup?.visible) {
      const subMeshes = patrolItems.filter((i) => i.subMesh.visible).map((i) => i.subMesh);
      intersects = raycaster.intersectObjects(subMeshes);
      if (intersects.length > 0) {
        const patrolIdx = (intersects[0].object.userData as any).patrolIndex as number | undefined;
        if (patrolIdx !== undefined && patrolItems[patrolIdx]) {
          const item = patrolItems[patrolIdx];
          const fac = patrolToFacility(item.patrol, item.currentLat, item.currentLng);
          showTargetsForFacilityImpl(null);
          selectedFacility = fac;
          callbacks.onSelectFacility(fac);
          if (autoRotateResumeTimeoutId) {
            clearTimeout(autoRotateResumeTimeoutId);
            autoRotateResumeTimeoutId = null;
          }
          autoRotate = false;
          centerGlobeOnImpl(item.currentLat, item.currentLng);
          clearRangeDomes();
        }
      }
    }
  }

  function scheduleAutoRotateResume() {
    if (threatMode) return;
    if (autoRotateResumeTimeoutId) clearTimeout(autoRotateResumeTimeoutId);
    autoRotateResumeTimeoutId = setTimeout(() => {
      autoRotateResumeTimeoutId = null;
      autoRotate = true;
    }, 3000);
  }

  function setupEvents() {
    const canvas = renderer.domElement;

    canvas.addEventListener("mousedown", (e) => {
      isDragging = true;
      autoRotate = false;
      prevMouse = { x: e.clientX, y: e.clientY };
    });

    canvas.addEventListener("mousemove", (e) => {
      const rect = renderer.domElement.getBoundingClientRect();
      mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

      if (isDragging) {
        const dx = e.clientX - prevMouse.x;
        const dy = e.clientY - prevMouse.y;
        rotationVelocity = { x: dy * 0.003, y: dx * 0.003 };
        targetRotation.x += rotationVelocity.x;
        targetRotation.y += rotationVelocity.y;
        prevMouse = { x: e.clientX, y: e.clientY };
      }

      checkHover(e);
    });

    canvas.addEventListener("mouseup", () => {
      isDragging = false;
      scheduleAutoRotateResume();
    });

    canvas.addEventListener(
      "wheel",
      (e) => {
        e.preventDefault();
        camera.position.z = Math.max(
          1.8,
          Math.min(6, camera.position.z + e.deltaY * 0.002)
        );
      },
      { passive: false }
    );

    canvas.addEventListener("click", (e) => {
      checkClick(e);
    });

    window.addEventListener("resize", () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    });
  }

  function easeOutCubic(t: number) {
    return 1 - Math.pow(1 - t, 3);
  }

  function flyCameraToZImpl(targetZ: number, durationMs: number) {
    const fromZ = camera.position.z;
    const startMs = Date.now();
    if (cameraFlight) {
      cameraFlight.resolve();
      cameraFlight = null;
    }
    autoRotate = false;

    return new Promise<void>((resolve) => {
      cameraFlight = {
        fromZ,
        toZ: targetZ,
        startMs,
        durationMs,
        resolve,
      };
    });
  }

  function animate() {
    requestAnimationFrame(animate);

    if (autoRotate) {
      targetRotation.y += 0.0006;
    }

    rotationVelocity.x *= 0.92;
    rotationVelocity.y *= 0.92;

    globe.rotation.x += (targetRotation.x - globe.rotation.x) * 0.05;
    globe.rotation.y += (targetRotation.y - globe.rotation.y) * 0.05;

    if (cameraFlight) {
      const nowMs = Date.now();
      const t = (nowMs - cameraFlight.startMs) / cameraFlight.durationMs;
      const clamped = Math.min(1, Math.max(0, t));
      const eased = easeOutCubic(clamped);
      camera.position.z =
        cameraFlight.fromZ +
        (cameraFlight.toZ - cameraFlight.fromZ) * eased;

      if (clamped >= 1) {
        const resolve = cameraFlight.resolve;
        cameraFlight = null;
        autoRotate = true;
        resolve();
      }
    }

    const time = Date.now() * 0.001;
    points.forEach((p, i) => {
      if (p.pulse.visible && p.yearScale > 0) {
        const scale = p.yearScale * (1 + Math.sin(time * 2 + i * 0.5) * 0.8);
        p.pulse.scale.set(scale, scale, 1);
        const mat = p.pulse.material as THREE.MeshBasicMaterial;
        mat.opacity = 0.4 * (1 - (scale / p.yearScale - 1) / 0.8);
      }
    });
    if (targetArcsGroup) {
      targetArcsGroup.children.forEach((child) => {
        if (child instanceof THREE.Mesh && (child.userData as { isTargetDiamond?: boolean }).isTargetDiamond) {
          const s = 0.85 + Math.sin(time * 2.5) * 0.2;
          child.scale.set(s, s, s);
        }
      });
    }
    if (threatMarkerGroup) {
      const s = 0.92 + Math.sin(time * 2.2) * 0.1;
      threatMarkerGroup.scale.set(s, s, 1);
    }

    const patrolT = (Date.now() / 60000) % 1;
    patrolItems.forEach((item, i) => {
      const n = item.pathVecs.length;
      const seg = (patrolT * n) % n;
      const idx = Math.floor(seg) % n;
      const u = seg - Math.floor(seg);
      const a = item.pathVecs[idx];
      const b = item.pathVecs[(idx + 1) % n];
      const pos = new THREE.Vector3().lerpVectors(a, b, u);
      item.subMesh.position.copy(pos);
      const tangent = new THREE.Vector3().subVectors(b, a).normalize();
      item.subMesh.lookAt(pos.clone().add(tangent));
      const { lat, lng } = vector3ToLatLng(pos.x, pos.y, pos.z);
      item.currentLat = lat;
      item.currentLng = lng;
      const pulseScale = 0.95 + Math.sin(time * 2.5 + i * 0.7) * 0.1;
      item.subMesh.scale.set(pulseScale, pulseScale, pulseScale);
    });

    renderer.render(scene, camera);
  }

  createStarfield();
  createGlobe();
  createFacilityPoints();
  createPatrolVisuals();
  createAtmosphere();
  setupLights();
  setupEvents();
  updatePointVisibility();
  animate();

  return {
    setFilter(filter: FilterType) {
      activeFilter = filter;
      updatePointVisibility();
    },
    setCountry(country: string | null) {
      activeCountry = country;
      updatePointVisibility();
    },
    setWarheadsByYear(byCountry: Record<string, number>) {
      setWarheadsByYear(byCountry);
      updatePointVisibility();
    },
    setCities(cities: MajorCity[]) {
      createCityMarkers(cities);
    },
    addCountryBorders,
    showRangeForFacility(facility: Facility | null) {
      showRangeForFacilityImpl(facility);
    },
    showTargetsForFacility(facility: Facility | null) {
      showTargetsForFacilityImpl(facility);
    },
    setThreatMode(active: boolean) {
      threatMode = active;
      if (active) {
        clearRangeDomes();
        if (cityMarkersGroup) cityMarkersGroup.visible = true;
        if (autoRotateResumeTimeoutId) {
          clearTimeout(autoRotateResumeTimeoutId);
          autoRotateResumeTimeoutId = null;
        }
        autoRotate = false;
      } else {
        setThreatTargetImpl(null);
        clearThreatArcs();
        clearRangeDomes();
        if (cityMarkersGroup) cityMarkersGroup.visible = false;
        autoRotate = true;
      }
      renderer.domElement.style.cursor = "grab";
    },
    setThreatTarget(target: ThreatTarget | null) {
      setThreatTargetImpl(target);
      if (target) centerGlobeOnImpl(target.lat, target.lng);
    },
    setThreatArcs(facilityList: Facility[]) {
      setThreatArcsImpl(facilityList);
    },
    setThreatRangeDomes(facilityList: Facility[]) {
      setThreatRangeDomesImpl(facilityList);
    },
    centerGlobeOn(lat: number, lng: number) {
      centerGlobeOnImpl(lat, lng);
    },
    scheduleAutoRotateResume() {
      scheduleAutoRotateResume();
    },
    flyCameraToDefault() {
      return flyCameraToZImpl(defaultCameraZ, 2000);
    },
    dispose() {
      if (autoRotateResumeTimeoutId) {
        clearTimeout(autoRotateResumeTimeoutId);
        autoRotateResumeTimeoutId = null;
      }
      clearRangeDomes();
      clearTargetArcs();
      clearThreatMarker();
      clearThreatArcs();
      clearCountryBorders();
      if (patrolGroup && globe) {
        patrolItems.forEach((item) => {
          item.pathLine.geometry.dispose();
          (item.pathLine.material as THREE.Material).dispose();
          item.subMesh.geometry.dispose();
          (item.subMesh.material as THREE.Material).dispose();
        });
        patrolItems.length = 0;
        globe.remove(patrolGroup);
        patrolGroup = null;
      }
      renderer.dispose();
      container.innerHTML = "";
    },
  };
}

