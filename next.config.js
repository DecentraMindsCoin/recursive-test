/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa");

module.exports = withPWA({
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    // ssr and displayName are configured by default
    styledComponents: false,
  },
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === "development"
  },
  images: {
    domains: [
      "res.cloudinary.com",
      "media.graphcms.com",
      "media.graphassets.com",
    ],
  },
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
})
