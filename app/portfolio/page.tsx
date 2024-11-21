// app/portfolio/page.tsx
import { Metadata } from 'next';
import Portfolio from './portfolio-contents';

export const metadata: Metadata = {
  title: 'Portfolio | OctaVertex Media',
  description: 'Explore our innovative digital solutions and success stories'
};

export default function PortfolioPage() {
  return <Portfolio />;
}