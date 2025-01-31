const fs = require('fs');
const { SitemapStream } = require('sitemap');

const links = [
    {
        url: '/',
        lastmod: '2025-01-31T18:48:47+01:00',
        priority: 0.2,
    },
    {
        url: '/contact-us',
        lastmod: '2025-01-31T18:48:47+01:00',
        priority: 0.1,
    },
    {
        url: '/careers/senior-full-stack-developer',
        lastmod: '2025-01-31T18:48:47+01:00',
        priority: 0.8,
    },
    {
        url: '/careers/devops-engineer',
        lastmod: '2025-01-31T18:48:47+01:00',
        priority: 0.1,
    },
    {
        url: '/careers/project-manager',
        lastmod: '2025-01-31T18:48:47+01:00',
        priority: 0.8,
    },
    {
        url: '/careers/digital-marketing-specialist',
        lastmod: '2025-01-31T18:48:47+01:00',
        priority: 0.8,
    },
    {
        url: '/careers',
        lastmod: '2025-01-31T18:48:47+01:00',
        priority: 0.1,
    },
    {
        url: '/privacy-policy',
        lastmod: '2025-01-31T18:48:47+01:00',
        priority: 0.1,
    },
    {
        url: '/terms-of-service',
        lastmod: '2025-01-31T18:48:47+01:00',
        priority: 0.1,
    },
    {
        url: '/cookie-policy',
        lastmod: '2025-01-31T18:48:47+01:00',
        priority: 0.1,
    },
    {
        url: '/about',
        lastmod: '2025-01-31T18:48:47+01:00',
        priority: 0.1,
    },
    {
        url: '/case-studies',
        lastmod: '2025-01-31T18:48:47+01:00',
        priority: 0.1,
    },
    {
        url: '/portfolio',
        lastmod: '2025-01-31T18:48:47+01:00',
        priority: 0.1,
    },
    {
        url: '/web-development',
        lastmod: '2025-01-31T18:48:47+01:00',
        priority: 0.1,
    },
    {
        url: '/mobile-development',
        lastmod: '2025-01-31T18:48:47+01:00',
        priority: 0.1,
    },
    {
        url: '/api-development',
        lastmod: '2025-01-31T18:48:47+01:00',
        priority: 0.1,
    },
    {
        url: '/ui-ux-design',
        lastmod: '2025-01-31T18:48:47+01:00',
        priority: 0.1,
    },
    {
        url: '/project-management',
        lastmod: '2025-01-31T18:48:47+01:00',
        priority: 0.1,
    },
      {
        url: '/products/cms',
        lastmod: '2025-01-31T18:48:47+01:00',
        priority: 0.1,
      },
      {
        url: '/products/hrms',
        lastmod: '2025-01-31T18:48:47+01:00',
        priority: 0.8,
      },
      {
        url: '/products/delivery',
        lastmod: '2025-01-31T18:48:47+01:00',
        priority: 0.8,
      },
      {
        url: '/products/ecommerce',
        lastmod: '2025-01-31T18:48:47+01:00',
        priority: 0.8,
      },
      {
        url: '/products/supply-chain',
        lastmod: '2025-01-31T18:48:47+01:00',
        priority: 0.8,
      },
      {
        url: '/products/budget',
        lastmod: '2025-01-31T18:48:47+01:00',
        priority: 0.8,
      },
        {
        url: '/products/scheduler',
        lastmod: '2025-01-31T18:48:47+01:00',
        priority: 0.8,
      },
        {
        url: '/products/analytics',
        lastmod: '2025-01-31T18:48:47+01:00',
        priority: 0.8,
      },
        {
        url: '/products/funnel',
        lastmod: '2025-01-31T18:48:47+01:00',
        priority: 0.8,
      },
        {
        url: '/products/chatbots',
        lastmod: '2025-01-31T18:48:47+01:00',
        priority: 0.8,
      },
        {
        url: '/products/ai-agents',
        lastmod: '2025-01-31T18:48:47+01:00',
        priority: 0.8,
      },
        {
        url: '/products/automation',
        lastmod: '2025-01-31T18:48:47+01:00',
        priority: 0.8,
      },
        {
            url: '/careers/1',
            lastmod: '2025-01-31T18:48:52+01:00',
            priority: 0.8,
        },
        {
            url: '/careers/2',
            lastmod: '2025-01-31T18:48:52+01:00',
            priority: 0.8,
        },
        {
            url: '/case-studies/tech-corp',
            lastmod: '2025-01-31T18:48:55+01:00',
            priority: 0.1,
        },
        {
            url: '/case-studies/fashion-forward',
            lastmod: '2025-01-31T18:48:55+01:00',
            priority: 0.4,
        },
        {
            url: '/case-studies/global-logistics',
            lastmod: '2025-01-31T18:48:55+01:00',
            priority: 0.8,
        },
        {
            url: '/case-studies/nextgen-bank',
            lastmod: '2025-01-31T18:48:55+01:00',
            priority: 0.8,
        },
         {
            url: '/case-studies/smart-city',
            lastmod: '2025-01-31T18:48:55+01:00',
            priority: 0.8,
        },
        {
            url: '/case-studies/edutech',
            lastmod: '2025-01-31T18:48:55+01:00',
            priority: 0.8,
        },
        {
            url: '/api/posts',
            lastmod: '2025-01-31T18:48:55+01:00',
            priority: 0.8,
        },
         {
            url: '/case-studies/metropolitan-council',
            lastmod: '2025-01-31T18:48:57+01:00',
            priority: 0.8,
        },
          {
            url: '/case-studies/healthcare-ai',
            lastmod: '2025-01-31T18:48:58+01:00',
             priority: 0.8,
        },
           {
            url: '/case-studies/edutech-solutions',
            lastmod: '2025-01-31T18:48:58+01:00',
            priority: 0.8,
        },
         {
            url: '/case-studies/green-energy',
            lastmod: '2025-01-31T18:48:58+01:00',
            priority: 0.8,
        },
];


const generateSitemap = async () => {
  try {
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