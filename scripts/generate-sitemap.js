const fs = require('fs');
const { SitemapStream, streamToPromise } = require('sitemap');
const { Readable } = require('stream');

// Example of static pages
const staticPages = [
  '/',
  '/about',
  '/contact-us',
  '/blog',
  '/portfolio',

];

// Function to generate sitemap
const generateSitemap = async () => {
  const links = staticPages.map(page => ({
    url: page,
    changefreq: 'daily',
    priority: 0.7,
  }));

  // If you have dynamic routes, you can fetch them from your CMS or API
  // For example:
  // const dynamicPages = await fetch('https://example.com/api/pages').then(res => res.json());
  // dynamicPages.forEach(page => {
  //   links.push({
  //     url: `/dynamic/${page.slug}`,
  //     changefreq: 'weekly',
  //     priority: 0.7,
  //   });
  // });

  const stream = new SitemapStream({ hostname: 'https://octavertexmedia.com' });
  const sitemap = await streamToPromise(Readable.from(links).pipe(stream)).then(data =>
    data.toString()
  );

  fs.writeFileSync('public/sitemap.xml', sitemap);
  console.log('Sitemap generated!');
};

generateSitemap();
