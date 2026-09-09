"use client";

import { abrirPanelCookies } from "./CookieConsent";
import { btn } from "@/lib/site-ui";

export default function CookieSettingsButton() {
  return (
    <button type="button" className={btn()} onClick={abrirPanelCookies}>
      Configurar cookies
    </button>
  );
}
