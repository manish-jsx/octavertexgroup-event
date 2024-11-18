import Hero from '@/components/Hero';
import Services from '@/components/Services';

import Contact from '../components/Contact';



import '../styles/globals.css';
import '../styles/navbar.css';



import Link from 'next/link';  // Import Link component
import Domain from '@/components/Domain';
import { FeaturesSection } from '@/components/FeatureSection';



const Home = () => {
  return (
    (
      <>
      <Hero/>
       
  
      <Services />
   
      {/* Add a button or link to navigate to the registration page
      <div className="text-center mt-8">
        <Link href="/registration" legacyBehavior>
          <a className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
            Register Now
          </a>
        </Link>
      </div> */}
      <Domain/>

<FeaturesSection/>
      <Contact />


      </>
    )
  );
}

export default Home;
