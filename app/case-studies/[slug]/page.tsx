// app/case-studies/[slug]/page.tsx
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import CaseStudyContent from './case-study-content';
import { caseStudies } from '@/lib/case-studies';

interface Props {
  params: { slug: string }
}

export function generateMetadata({ params }: Props): Metadata {
  const caseStudy = caseStudies.find(study => study.slug === params.slug);
  
  if (!caseStudy) return { title: 'Case Study Not Found' };
  
  return {
    title: `${caseStudy.title} - Case Study | OctaVertex Media`,
    description: caseStudy.description,
  };
}

export async function generateStaticParams() {
  return caseStudies.map((study) => ({
    slug: study.slug,
  }));
}

export default function CaseStudyPage({ params }: Props) {
  const caseStudy = caseStudies.find(study => study.slug === params.slug);
  
  if (!caseStudy) return notFound();
  
  return <CaseStudyContent study={caseStudy} />;
}