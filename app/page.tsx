import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Domain from "@/components/Domain";
import { FeaturesSection } from "@/components/FeatureSection";
import Testimonials from "@/components/Testimonials";

const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <Domain />
      <FeaturesSection />
      <Testimonials />
      <Contact />
    </>
  );
};

export default Home;
