// const fs = require('fs');
// const { SitemapStream, streamToPromise } = require('sitemap');
// const { Readable } = require('stream');

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


// // Function to generate sitemap
// const generateSitemap = async () => {
//   try {
//     const links = staticPages.map(page => ({
//       url: page,
//       changefreq: 'daily',
//       priority: 0.7,
//     }));

//   // If you have dynamic routes, you can fetch them from your CMS or API
//   // For example:
//   // const dynamicPages = await fetch('https://example.com/api/pages').then(res => res.json());
//   // dynamicPages.forEach(page => {
//   //   links.push({
//   //     url: `/dynamic/${page.slug}`,
//   //     changefreq: 'weekly',
//   //     priority: 0.7,
//   //   });
//   // });

//   const stream = new SitemapStream({ hostname: 'https://octavertexmedia.com' });

//     // Create a stream to write to
 
//     const stream = new SitemapStream({ hostname: 'https://www.octavertexmedia.com' });
//     // Return a promise that resolves with your XML string
//     const sitemap = await streamToPromise(Readable.from(links).pipe(stream)).then(data =>
//       data.toString()
//     );

//     // Write sitemap to public directory
//     fs.writeFileSync('public/sitemap.xml', sitemap);
//     console.log('Sitemap generated!');
//   } catch (error) {
//     console.error('Error generating sitemap:', error);
//   }
// };

// generateSitemap();


const fs = require('fs');
const { SitemapStream, streamToPromise } = require('sitemap');
const { Readable } = require('stream');

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
    const links = staticPages.map(page => ({
      url: page,
      changefreq: 'daily',
      priority: 0.7,
    }));

    // Create a stream to write to
    const stream = new SitemapStream({ hostname: 'https://www.octavertexmedia.com' });

    // Return a promise that resolves with your XML string
    const sitemap = await streamToPromise(Readable.from(links).pipe(stream)).then(data =>
      data.toString()
    );

    // Write sitemap to public directory
    fs.writeFileSync('public/sitemap.xml', sitemap);
    console.log('Sitemap generated!');
  } catch (error) {
    console.error('Error generating sitemap:', error);
  }
};

generateSitemap();
