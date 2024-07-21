import { Metadata } from 'next';
import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import '../../styles/navbar.css';

export const metadata: Metadata = {
  title: 'Privacy Policy',
};

export async function generateStaticParams() {
  return [
    {
      params: {},
    },
  ];
}

const PrivacyPolicy: React.FC = () => {
  return (
    <div>
      <Navbar />
      <main className="container mx-auto py-12">
        <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
        <p className="mb-4">Information about your privacy policy...</p>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
