const fs = require('fs');
const { SitemapStream } = require('sitemap');

// Example of static pages
const staticPages = [
  '/',
  '/about',
  '/contact-us',
  '/portfolio',
  '/privacy-policy',
  '/registration',
  '/terms-of-service',
];

const generateSitemap = async () => {
  try {
    const links = staticPages.map((page) => ({
      url: page,
      changefreq: 'daily',
      priority: 0.7,
    }));

    const stream = new SitemapStream({ hostname: 'https://www.octavertexmedia.com' });

    // Write sitemap to public directory
    const writeStream = fs.createWriteStream('public/sitemap.xml');
    stream.pipe(writeStream);

    links.forEach((link) => stream.write(link));
    stream.end();

    console.log('Sitemap generated!');
  } catch (error) {
    console.error('Error generating sitemap:', error);
  }
};

generateSitemap();
