import type { Metadata } from "next";
import CookieConsent from "@/components/CookieConsent";
import "./globals.css";
export const metadata: Metadata = {
  metadataBase: new URL("https://manupalop.com"),
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <head>
        {/* Misma fuente y mismo orden de carga que el sitio original. Se usa
            el <link> de Google Fonts en vez de next/font a proposito: next/font
            sirve la fuente desde otro origen y con otro nombre de familia, y eso
            cambiaria el renderizado respecto al sitio actual.
            eslint-disable-next-line @next/next/no-page-custom-font */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
