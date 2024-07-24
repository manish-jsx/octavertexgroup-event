

// Example next.config.js
module.exports = {
  reactStrictMode: true,
  // Ensure no custom configurations are affecting static files
  async rewrites() {
    return [
      {
        source: '/sitemap.xml',
        destination: '/sitemap.xml',
      },
    ];
  },
};