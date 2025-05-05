/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'dist',
  images: {
    unoptimized: true
  },
  // Ensure trailing slash for static export
  trailingSlash: true
}

module.exports = nextConfig 