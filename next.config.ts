import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Export estatico: el sitio no tiene backend y asi Netlify Forms sigue
  // detectando el formulario de contacto en el HTML generado.
  output: "export",
  // El optimizador de imagenes necesita servidor; con export se desactiva.
  images: { unoptimized: true },
};

export default nextConfig;
