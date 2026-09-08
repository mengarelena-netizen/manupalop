"use client";

import { abrirPanelCookies } from "./CookieConsent";

export default function CookieSettingsButton() {
  return (
    <button type="button" className="btn btn-accent" onClick={abrirPanelCookies}>
      Configurar cookies
    </button>
  );
}
