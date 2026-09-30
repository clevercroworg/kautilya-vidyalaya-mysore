import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["192.168.29.202", "192.168.29.*", "localhost"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.youtube.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "i.ytimg.com",
        pathname: "/**",
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/360",
        destination: "https://www.turiya.co/360/Kautilya/",
      },
      {
        source: "/360/",
        destination: "https://www.turiya.co/360/Kautilya/",
      },
      {
        source: "/360/:path*",
        destination: "https://www.turiya.co/360/Kautilya/:path*",
      },
    ];
  },
};

export default nextConfig;
