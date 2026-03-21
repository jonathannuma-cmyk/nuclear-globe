import { useMemo } from "react";
import { Color, Vector3 } from "three";
import { Facility, FacilityType, COUNTRY_COLORS, TYPE_LABELS, latLngToVector3 } from "./data";
import { ThreeEvent } from "@react-three/fiber";

export interface FacilityPointsProps {
  facilities: Facility[];
  activeFilter: FacilityType | "all";
  activeCountry: string | null;
  selectedFacility: Facility | null;
  onFacilityClick: (facility: Facility) => void;
  onFacilityHover: (facility: Facility | null, event?: ThreeEvent<PointerEvent>) => void;
}

interface FacilityMeshes {
  position: Vector3;
  color: Color;
  facility: Facility;
}

export function FacilityPoints({
  facilities,
  activeFilter,
  activeCountry,
  onFacilityClick,
  onFacilityHover,
}: FacilityPointsProps) {
  const meshes: FacilityMeshes[] = useMemo(
    () =>
      facilities.map((f) => {
        const { x, y, z } = latLngToVector3(f.lat, f.lng, 1.01);
        return {
          position: new Vector3(x, y, z),
          color: new Color(COUNTRY_COLORS[f.country] || "#ffffff"),
          facility: f,
        };
      }),
    [facilities]
  );

  const isVisible = (f: Facility) => {
    if (activeFilter !== "all" && f.type !== activeFilter) return false;
    if (activeCountry && f.country !== activeCountry) return false;
    return true;
  };

  return (
    <>
      {meshes.map(({ position, color, facility }, index) => {
        const visible = isVisible(facility);
        const commonProps = {
          position,
          lookAt: position.clone().multiplyScalar(2),
          visible,
          onClick: (e: ThreeEvent<MouseEvent>) => {
            e.stopPropagation();
            onFacilityClick(facility);
          },
          onPointerOver: (e: ThreeEvent<PointerEvent>) => {
            e.stopPropagation();
            if (visible) onFacilityHover(facility, e);
          },
          onPointerMove: (e: ThreeEvent<PointerEvent>) => {
            e.stopPropagation();
            if (visible) onFacilityHover(facility, e);
          },
          onPointerOut: (e: ThreeEvent<PointerEvent>) => {
            e.stopPropagation();
            onFacilityHover(null);
          },
        };

        return (
          <group key={facility.name + index}>
            {/* Outer glow ring */}
            <mesh {...commonProps}>
              <ringGeometry args={[0.012, 0.022, 16]} />
              <meshBasicMaterial color={color} transparent opacity={0.35} side={2} />
            </mesh>

            {/* Inner dot */}
            <mesh {...commonProps}>
              <circleGeometry args={[0.009, 12]} />
              <meshBasicMaterial color={color} transparent opacity={0.9} side={2} />
            </mesh>

            {/* Pulse ring */}
            <mesh {...commonProps} userData={{ isPulse: true, facility }}>
              <ringGeometry args={[0.009, 0.011, 16]} />
              <meshBasicMaterial color={color} transparent opacity={0.5} side={2} />
            </mesh>
          </group>
        );
      })}
    </>
  );
}

