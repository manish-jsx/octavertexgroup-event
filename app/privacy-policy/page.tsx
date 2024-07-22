import { Metadata } from 'next';
import React from 'react';


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
   
      <main className="container mx-auto py-12">
        <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
        <p className="mb-4">Information about your privacy policy...</p>
      </main>
  
  );
};

export default PrivacyPolicy;
