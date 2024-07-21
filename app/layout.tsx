// import '../styles/globals.css';

// export default function RootLayout({ children }) {
//   return (
//     <html lang='en'>
//       <body>{children}</body>
//     </html>
//   );
// }





// components/Layout.tsx
'use client';

import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/navbar.css';
import '../styles/globals.css';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main className="container mx-auto py-12">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;