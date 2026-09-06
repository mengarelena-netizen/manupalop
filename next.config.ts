import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Sin export estatico: /api/contacto necesita servidor. Las paginas siguen
  // siendo estaticas, Next las prerenderiza igual.
  // El sitio usa <img> en vez de next/image, asi que el optimizador no entra
  // en juego; se deja desactivado a proposito.
  images: { unoptimized: true },
};

export default nextConfig;
