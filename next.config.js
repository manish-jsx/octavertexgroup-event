

// Example next.config.js
module.exports = {
  reactStrictMode: true,
  // Ensure no custom configurations are affecting static files
  // output: 'export',
  // Other Next.js config options
  images: {
    domains: ['images.unsplash.com', 'assets.aceternity.com', 'aceternity.com', 'pbs.twimg.com'],
  },
  async rewrites() {
    return [
      {
        source: '/sitemap.xml',
        destination: '/sitemap.xml',
      },
    ];
  },

};