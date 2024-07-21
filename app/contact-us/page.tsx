import { Metadata } from 'next';
import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import '../../styles/navbar.css';

export const metadata: Metadata = {
  title: 'Contact Us',
};

export async function generateStaticParams() {
  return [
    {
      params: {},
    },
  ];
}

const ContactUs: React.FC = () => {
  return (
    <div>
      <Navbar />
      <main className="container mx-auto py-12">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="mb-4">Information on how to contact us...</p>
      </main>
      <Footer />
    </div>
  );
};

export default ContactUs;
