import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Domain from "@/components/Domain";
import { FeaturesSection } from "@/components/FeatureSection";

import TestimonialCarousel from "@/components/TestimonialCarousel";


const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <Domain />
      <FeaturesSection />

      <section className="relative min-h-screen py-16 overflow-hidden bg-[rgb(15,24,41)] w-screen">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        <div className="relative z-10 w-full">
          <div className="space-y-4 text-center max-w-3xl mx-auto mb-16 px-4">
            <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[rgb(121,205,255)] to-[rgb(199,210,254)]">
              What Our Customers Say
            </h2>
            <p className="text-[rgb(199,210,254)]/70 text-lg">
              Discover why businesses trust us for their digital transformation journey
            </p>
          </div>
          <TestimonialCarousel />
        </div>
      </section>

      <Contact />
    </>
  );
};

export default Home;
