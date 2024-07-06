/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        hostname: 'source.unsplash.com'
      }
    ],
  }
};

export default nextConfig;
