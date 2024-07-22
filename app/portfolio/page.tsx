import { Metadata } from 'next';
import React from 'react';


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
  
      <main className="container mx-auto py-12">
        <h1 className="text-4xl font-bold mb-4">Portfolio</h1>
        <p className="mb-4">Information about your portfolio...</p>
      </main>
   
  );
};

export default Portfolio;
