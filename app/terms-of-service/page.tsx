import { Metadata } from 'next';
import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import '../../styles/navbar.css';

export const metadata: Metadata = {
  title: 'Terms of Service',
};

export async function generateStaticParams() {
  return [
    {
      params: {},
    },
  ];
}

const TermsOfService: React.FC = () => {
  return (
    <div>
      <Navbar />
      <main className="container mx-auto py-12">
        <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
        <p className="mb-4">Information about your terms of service...</p>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfService;
