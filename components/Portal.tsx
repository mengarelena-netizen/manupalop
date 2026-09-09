"use client";

import { useSyncExternalStore } from "react";
import { createPortal } from "react-dom";

// Mismo patron que el ano del pie: en el servidor no hay document, asi que
// el portal solo existe despues de hidratar.
const noop = () => () => {};
const onClient = () => true;
const onServer = () => false;

export default function Portal({ children }: { children: React.ReactNode }) {
  const mounted = useSyncExternalStore(noop, onClient, onServer);

  if (!mounted) return null;
  return createPortal(children, document.body);
}
