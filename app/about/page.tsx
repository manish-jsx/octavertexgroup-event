import { Metadata } from 'next';
import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import '../../styles/navbar.css'; // Ensure the path is correct

export const metadata: Metadata = {
  title: 'About',
};

export async function generateStaticParams() {
  return [
    {
      params: {},
    },
  ];
}

const About: React.FC = () => {
  return (
    <div>
      <Navbar />
      <main className="container mx-auto py-12">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="mb-4">Information about your company or project goes here...</p>
      </main>
      <Footer />
    </div>
  );
};

export default About;
