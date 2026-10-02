import type { NextConfig } from "next";

/** @type {NextConfig} */
const nextConfig: NextConfig = {
  // Enable static HTML export
  output: "export",

  // Enable React strict mode
  reactStrictMode: true,

  // Configure Turbopack workspace root
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
