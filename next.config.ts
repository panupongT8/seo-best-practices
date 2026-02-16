import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  productionBrowserSourceMaps: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com", // อนุญาตโดเมนนี้
        pathname: "/fedeperin/potterapi/**", // (Optional) ระบุ path ย่อยเพื่อความปลอดภัย
      },
    ],
  },
};

export default nextConfig;
