// app/layout.tsx

import "@/styles/globals.css";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});
import Navbar from "@/components/Navbar";

import FloatingNavbar from "@/components/FloatingNavbar";
import Footer from "@/components/Footer";
import ResponsiveNavbar from "@/components/ResponsiveNavbar";
import { ThemeProvider } from "@/components/theme-provider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
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
