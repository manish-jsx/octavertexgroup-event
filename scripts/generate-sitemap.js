// const fs = require('fs');
// const { SitemapStream } = require('sitemap');

// // Example of static pages
// const staticPages = [
//   '/',
//   '/about',
//   '/contact-us',
//   '/portfolio',
//   '/privacy-policy',
//   '/registration',
//   '/terms-of-service',
// ];

// const generateSitemap = async () => {
//   try {
//     const links = staticPages.map((page) => ({
//       url: page,
//       changefreq: 'daily',
//       priority: 0.7,
//     }));

//     const stream = new SitemapStream({ hostname: 'https://www.octavertexmedia.com' });

//     // Write sitemap to public directory
//     const writeStream = fs.createWriteStream('public/sitemap.xml');
//     stream.pipe(writeStream);

//     links.forEach((link) => stream.write(link));
//     stream.end();

//     console.log('Sitemap generated!');
//   } catch (error) {
//     console.error('Error generating sitemap:', error);
//   }
// };

// generateSitemap();

const fs = require('fs');
const { SitemapStream } = require('sitemap');

// Static pages with their priorities
const staticPages = [
  { url: '/', priority: 1.00 },
  { url: '/contact-us', priority: 0.80 },
  { url: '/portfolio', priority: 0.80 },
  { url: '/privacy-policy', priority: 0.80 },
  { url: '/terms-of-service', priority: 0.80 },
];

// Case studies pages with their priorities
const caseStudies = [
  { url: '/case-studies/tech-corp', priority: 0.64 },
  { url: '/case-studies/fashion-forward', priority: 0.64 },
  { url: '/case-studies/global-logistics', priority: 0.64 },
  { url: '/case-studies/nextgen-bank', priority: 0.64 },
  { url: '/case-studies/smart-city', priority: 0.64 },
  { url: '/case-studies/edutech', priority: 0.64 },
  { url: '/case-studies/metropolitan-council', priority: 0.51 },
  { url: '/case-studies/healthcare-ai', priority: 0.51 },
  { url: '/case-studies/edutech-solutions', priority: 0.41 },
  { url: '/case-studies/green-energy', priority: 0.41 },
];

const generateSitemap = async () => {
  try {
    // Combine all pages with their respective configurations
    const links = [...staticPages, ...caseStudies].map((page) => ({
      url: page.url,
      changefreq: 'daily',
      priority: page.priority,
      lastmod: new Date().toISOString() // This will set today's date
    }));

    // Create sitemap stream
    const stream = new SitemapStream({ 
      hostname: 'https://www.octavertexmedia.com',
      xmlns: { 
        news: false,
        xhtml: false,
        image: false,
        video: false
      }
    });

    // Write sitemap to public directory
    const writeStream = fs.createWriteStream('public/sitemap.xml');
    stream.pipe(writeStream);

    // Write all links to the stream
    links.forEach((link) => stream.write(link));
    stream.end();

    console.log('Sitemap generated successfully!');
  } catch (error) {
    console.error('Error generating sitemap:', error);
    throw error;
  }
};

generateSitemap();