import { useEffect } from "react";
import { SceneApi } from "./threeScene";

export interface CountryBordersProps {
  getSceneApi: () => SceneApi | null;
}

export function CountryBorders({ getSceneApi }: CountryBordersProps) {
  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        const res = await fetch("/ne_110m_admin_0_countries.geojson");
        if (!res.ok) return;
        const data = await res.json();

        const attach = () => {
          if (cancelled) return;
          const api = getSceneApi();
          if (!api) {
            // Scene not ready yet; retry shortly
            setTimeout(attach, 100);
            return;
          }
          api.addCountryBorders(data);
        };

        attach();
      } catch {
        // Ignore fetch errors silently for now
      }
    }

    load();

    return () => {
      cancelled = true;
    };
  }, [getSceneApi]);

  return null;
}

