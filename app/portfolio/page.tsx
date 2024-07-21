import { Metadata } from 'next';
import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import '../../styles/navbar.css';

export const metadata: Metadata = {
  title: 'Portfolio',
};

export async function generateStaticParams() {
  return [
    {
      params: {},
    },
  ];
}

const Portfolio: React.FC = () => {
  return (
    <div>
      <Navbar />
      <main className="container mx-auto py-12">
        <h1 className="text-4xl font-bold mb-4">Portfolio</h1>
        <p className="mb-4">Information about your portfolio...</p>
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;
