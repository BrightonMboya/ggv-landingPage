/** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   images: {
//     disableStaticImages: true
//   },

//   eslint: {
//     ignoreDuringBuilds: true
//   }
// };

export const eslint = {
  // Warning: This allows production builds to successfully complete even if
  // your project has ESLint errors.
  ignoreDuringBuilds: true
};
export const reactStrictMode = true;
export const images = {
  disableStaticImages: true
};
// module.exports = nextConfig;

import withImages from "next-images";
export default withImages();
