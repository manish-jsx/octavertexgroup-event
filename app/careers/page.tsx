'use client';
import HeroSection from "@/components/careers/HeroSection";
import JobListings from "@/components/careers/JobListings";
import ResumeUploader from "@/components/careers/ResumeUploader";
import CareerBenefits from "@/components/careers/CareerBenefits";
import CultureSection from "@/components/careers/CultureSection";

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-[rgb(15,24,41)]">
      <HeroSection />
      <JobListings />
      <CareerBenefits />
      <CultureSection />
      <ResumeUploader />
    </div>
  );
}