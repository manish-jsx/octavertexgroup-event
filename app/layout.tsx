// // app/layout.tsx

// import "@/styles/globals.css";
// import { Inter } from "next/font/google";

// const inter = Inter({
//   subsets: ["latin"],
//   variable: "--font-inter",
// });
// import Navbar from "@/components/Navbar";

// import FloatingNavbar from "@/components/FloatingNavbar";
// import Footer from "@/components/Footer";
// import ResponsiveNavbar from "@/components/ResponsiveNavbar";
// import { ThemeProvider } from "@/components/theme-provider";

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en" className={inter.variable}>
      

//       <body className={`font-sans antialiased ${inter.className}`}>
//         <ThemeProvider
//           attribute="class"
//           defaultTheme="dark"
//           enableSystem
//           disableTransitionOnChange
//         >
//           <ResponsiveNavbar />
//           <FloatingNavbar />
//           {children}
//           <Footer />
//         </ThemeProvider>
//       </body>
//     </html>
//   );
// }

import "@/styles/globals.css";
import { Inter } from "next/font/google";
import Script from "next/script";
import Navbar from "@/components/Navbar";
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
  ogImage: '/logo/og-image-light.png', // Path to your Open Graph image
  ogUrl: 'https://octavertexmedia.com',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
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
      <body className={`font-sans antialiased ${inter.className}`}>
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