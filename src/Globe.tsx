import { useRef, useState } from "react";
import { Group, Mesh, Vector3, DoubleSide, LineBasicMaterial, BufferGeometry, Line } from "three";
import { useFrame, useThree, ThreeEvent } from "@react-three/fiber";
import { Facility, FacilityType, facilities as allFacilities, TYPE_LABELS, latLngToVector3 } from "./data";
import { FacilityPoints } from "./FacilityPoints";

export interface GlobeProps {
  activeFilter: FacilityType | "all";
  activeCountry: string | null;
  selectedFacility: Facility | null;
  onSelectFacility: (facility: Facility | null) => void;
  onHoverFacility: (facility: Facility | null, event?: ThreeEvent<PointerEvent>) => void;
}

export function Globe({
  activeFilter,
  activeCountry,
  selectedFacility,
  onSelectFacility,
  onHoverFacility,
}: GlobeProps) {
  const globeRef = useRef<Group>(null);
  const pulseGroupRef = useRef<Group>(null);
  const rangeRingRef = useRef<Line | null>(null);
  const { camera } = useThree();

  const [isDragging, setIsDragging] = useState(false);
  const [prevMouse, setPrevMouse] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [rotationVelocity, setRotationVelocity] = useState({ x: 0, y: 0 });
  const [targetRotation, setTargetRotation] = useState({ x: 0.3, y: 0 });
  const [autoRotate, setAutoRotate] = useState(true);

  useFrame(() => {
    const globe = globeRef.current;
    if (!globe) return;

    const vel = {
      x: rotationVelocity.x * 0.92,
      y: rotationVelocity.y * 0.92,
    };

    if (autoRotate) {
      setTargetRotation((prev) => ({ ...prev, y: prev.y + 0.0012 }));
    }

    globe.rotation.x += (targetRotation.x - globe.rotation.x) * 0.05;
    globe.rotation.y += (targetRotation.y - globe.rotation.y) * 0.05;

    // Pulse animation
    const time = Date.now() * 0.001;
    pulseGroupRef.current?.children.forEach((child, index) => {
      if (!child.visible) return;
      const scale = 1 + Math.sin(time * 2 + index * 0.5) * 0.8;
      child.scale.set(scale, scale, 1);
      const mat = (child as Mesh).material as any;
      if (mat) {
        mat.opacity = 0.4 * (1 - (scale - 1) / 0.8);
      }
    });

    setRotationVelocity(vel);
  });

  const onPointerDown = (e: ThreeEvent<PointerEvent>) => {
    e.stopPropagation();
    setIsDragging(true);
    setAutoRotate(false);
    setPrevMouse({ x: e.clientX, y: e.clientY });
  };

  const onPointerMove = (e: ThreeEvent<PointerEvent>) => {
    if (!isDragging) return;
    e.stopPropagation();
    const dx = e.clientX - prevMouse.x;
    const dy = e.clientY - prevMouse.y;
    const newVel = { x: dy * 0.003, y: dx * 0.003 };
    setRotationVelocity(newVel);
    setTargetRotation((prev) => ({
      x: prev.x + newVel.x,
      y: prev.y + newVel.y,
    }));
    setPrevMouse({ x: e.clientX, y: e.clientY });
  };

  const onPointerUp = (e: ThreeEvent<PointerEvent>) => {
    e.stopPropagation();
    setIsDragging(false);
    setTimeout(() => setAutoRotate(true), 3000);
  };

  const handleSelectFacility = (facility: Facility) => {
    onSelectFacility(facility);
    drawRangeRing(facility);
  };

  const drawRangeRing = (facility: Facility | null) => {
    const globe = globeRef.current;
    if (!globe) return;

    if (rangeRingRef.current) {
      globe.remove(rangeRingRef.current);
      rangeRingRef.current.geometry.dispose();
      (rangeRingRef.current.material as LineBasicMaterial).dispose();
      rangeRingRef.current = null;
    }

    if (!facility || facility.range <= 0) return;

    const angularRadius = facility.range / 6371;
    const ringPoints: Vector3[] = [];
    const segments = 64;

    for (let i = 0; i <= segments; i++) {
      const angle = (i / segments) * Math.PI * 2;
      const lat1 = (facility.lat * Math.PI) / 180;
      const lng1 = (facility.lng * Math.PI) / 180;
      const lat2 = Math.asin(
        Math.sin(lat1) * Math.cos(angularRadius) +
          Math.cos(lat1) * Math.sin(angularRadius) * Math.cos(angle)
      );
      const lng2 =
        lng1 +
        Math.atan2(
          Math.sin(angle) * Math.sin(angularRadius) * Math.cos(lat1),
          Math.cos(angularRadius) - Math.sin(lat1) * Math.sin(lat2)
        );
      const { x, y, z } = latLngToVector3((lat2 * 180) / Math.PI, (lng2 * 180) / Math.PI, 1.012);
      ringPoints.push(new Vector3(x, y, z));
    }

    const geo = new BufferGeometry().setFromPoints(ringPoints);
    const mat = new LineBasicMaterial({ color: 0xef4444, transparent: true, opacity: 0.6 });
    const line = new Line(geo, mat);
    globe.add(line);
    rangeRingRef.current = line;
  };

  return (
    <group ref={globeRef} onPointerDown={onPointerDown} onPointerMove={onPointerMove} onPointerUp={onPointerUp} onPointerLeave={onPointerUp}>
      {/* Main globe surface */}
      <mesh>
        <sphereGeometry args={[1, 64, 64]} />
        <meshPhongMaterial
          color={0x0c1220}
          emissive={0x050a14}
          specular={0x1e3a5f}
          shininess={15}
          transparent
          opacity={0.95}
        />
      </mesh>

      {/* Wireframe grid */}
      <mesh>
        <sphereGeometry args={[1.002, 36, 18]} />
        <meshBasicMaterial color={0x1e3a5f} wireframe transparent opacity={0.08} />
      </mesh>

      {/* Equator ring */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[1.003, 1.007, 128]} />
        <meshBasicMaterial color={0x38bdf8} transparent opacity={0.1} side={DoubleSide} />
      </mesh>

      {/* Lights */}
      <ambientLight color={0x334155} intensity={0.6} />
      <directionalLight color={0x94a3b8} intensity={0.8} position={[5, 3, 5]} />
      <directionalLight color={0x38bdf8} intensity={0.3} position={[-5, -2, -3]} />

      {/* Facilities */}
      <group ref={pulseGroupRef}>
        <FacilityPoints
          facilities={allFacilities}
          activeFilter={activeFilter}
          activeCountry={activeCountry}
          selectedFacility={selectedFacility}
          onFacilityClick={handleSelectFacility}
          onFacilityHover={onHoverFacility}
        />
      </group>
    </group>
  );
}

