

import "@/styles/globals.css";
import { Inter } from "next/font/google";
import Script from "next/script";
import FloatingNavbar from "@/components/FloatingNavbar";
import Footer from "@/components/Footer";
import ResponsiveNavbar from "@/components/ResponsiveNavbar";
import { ThemeProvider } from "@/components/theme-provider";


const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: 'OctaVertex Media | Digital Marketing, Web Development & Branding Agency',
  description:
    'OctaVertex Media is a top-rated agency in New Delhi, India, offering expert digital marketing, software, and web application development services. We craft innovative branding strategies and impactful digital experiences that help businesses thrive. Our tailored solutions include website design, SEO, content marketing, and branding to elevate your online presence and drive business growth. Partner with OctaVertex Media for creative, data-driven strategies that deliver measurable results.',
  keywords: [
    'OctaVertex Media',
    'digital marketing agency in India',
    'web application development',
    'branding agency in New Delhi',
    'SEO services',
    'content marketing',
    'website design',
    'business growth solutions',
    'innovative digital strategies',
  ],
  author: 'OctaVertex Media',
  ogTitle: 'OctaVertex Media | Elevate Your Brand with Expert Marketing & Development',
  ogDescription:
    'Discover OctaVertex Media, the premier agency for digital marketing, web development, and branding. Drive growth with innovative solutions tailored to your business.',
  ogImage: '/logo/og-image-light.png',
  ogUrl: 'https://octavertexmedia.com',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* Initial consent configuration - Must be first */}
        <Script id="consent-configuration" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            
            gtag('consent', 'default', {
              'ad_storage': 'denied',
              'ad_user_data': 'denied',
              'ad_personalization': 'denied',
              'analytics_storage': 'denied'
            });
          `}
        </Script>

        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-N6THP38P');
          `}
        </Script>

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-PTWLPT9LZC"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-PTWLPT9LZC');
          `}
        </Script>
      </head>
      <body className={`font-sans antialiased ${inter.className}`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-N6THP38P"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <ResponsiveNavbar />
          <FloatingNavbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}