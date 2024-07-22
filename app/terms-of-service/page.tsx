import { Metadata } from 'next';
import React from 'react';


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
  
      <main className="container mx-auto py-12">
        <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
        <p className="mb-4">Information about your terms of service...</p>
      </main>

  );
};

export default TermsOfService;
