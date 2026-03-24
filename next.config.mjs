/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: false, // Using next/image, but letting it handle optimization
  },
};

export default nextConfig;