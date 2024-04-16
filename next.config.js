/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "hygraph.com",
      "media.graphassets.com",
      "us-east-1-shared-usea1-02.graphassets.com",
    ],
  },
};

module.exports = nextConfig;
