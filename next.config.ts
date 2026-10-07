import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: {
    // Serve the hero artwork as AVIF where supported, WebP otherwise.
    formats: ["image/avif", "image/webp"],
    qualities: [75],
  },
};

export default nextConfig;
