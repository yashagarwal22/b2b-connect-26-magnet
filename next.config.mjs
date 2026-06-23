/** @type {import('next').NextConfig} */
const nextConfig = {
  // Self-contained server bundle for Docker/Coolify (.next/standalone + server.js).
  output: "standalone",
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
