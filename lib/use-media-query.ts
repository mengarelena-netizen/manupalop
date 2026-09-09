"use client";

import { useCallback, useSyncExternalStore } from "react";

/** null hasta que hidrata: en el servidor no se sabe el ancho de la ventana. */
export function useMediaQuery(query: string): boolean | null {
  const subscribe = useCallback(
    (onChange: () => void) => {
      const list = window.matchMedia(query);
      list.addEventListener("change", onChange);
      return () => list.removeEventListener("change", onChange);
    },
    [query],
  );

  return useSyncExternalStore(
    subscribe,
    () => window.matchMedia(query).matches,
    () => null,
  );
}
