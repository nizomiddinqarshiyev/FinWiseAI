/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  // MUHIM: Netlify uchun static export
  output: 'export',
  
  // Image optimization o'chirish (Netlify free plan)
  images: {
    unoptimized: true,
  },
  
  // Trailing slash qo'shish
  trailingSlash: true,
}

module.exports = nextConfig