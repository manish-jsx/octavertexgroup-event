import { Metadata } from 'next';
import React from 'react';


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
  
  
      <main className="container mx-auto py-12">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="mb-4">Information on how to contact us...</p>
      </main>
    
  );
};

export default ContactUs;
