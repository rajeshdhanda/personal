/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  ...(process.env.NODE_ENV === 'production' && {
    basePath: '/personal', // Repository name-based basePath
    assetPrefix: '/personal',
  }),
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig