// app/layout.tsx

import "@/styles/globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter", 
});
import Navbar from '@/components/Navbar';

import FloatingNavbar from '@/components/FloatingNavbar';
import Footer from '@/components/Footer';
import ResponsiveNavbar from "@/components/ResponsiveNavbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
    <body className={`font-sans antialiased ${inter.className}`}>
    <ResponsiveNavbar/>
        <FloatingNavbar/>
        {children}
        <Footer />
      </body>
    </html>
  );
}
