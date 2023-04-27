/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['www.bing.com'],
},
env: {
  "RapidAPI" : process.env.RapidAPI
}
}

module.exports = nextConfig
