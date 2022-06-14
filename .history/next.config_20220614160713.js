/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    disableStaticImages: true
  },

  eslint: {
    ignoreDuringBuilds: true
  }
};

module.exports = nextConfig;

const withImages = require("next-images");
module.exports = withImages();
