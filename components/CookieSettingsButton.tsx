"use client";

import { abrirPanelCookies } from "./CookieConsent";
import { MotionButton } from "@/components/motion/primitives";
import { lift } from "@/components/motion/config";
import { btn } from "@/lib/site-ui";

export default function CookieSettingsButton() {
  return (
    <MotionButton
      type="button"
      className={btn()}
      onClick={abrirPanelCookies}
      {...lift}
    >
      Configurar cookies
    </MotionButton>
  );
}
