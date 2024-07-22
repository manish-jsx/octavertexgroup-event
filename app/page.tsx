import Hero from '../components/Hero';
import Services from '../components/Services';
import Works from '../components/Works';
import Contact from '../components/Contact';
import Newsletter from '../components/Newsletter';

import '../styles/globals.css';
import '../styles/navbar.css';
import '../styles/pattern-reveal.css';


import Link from 'next/link';  // Import Link component

const Home = () => {
  return (
    <>
      
      <Hero />
      <Services />
   
      {/* Add a button or link to navigate to the registration page */}
      <div className="text-center mt-8">
        <Link href="/registration" legacyBehavior>
          <a className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
            Register Now
          </a>
        </Link>
      </div>
      <Works />
      <Contact />
      <Newsletter />

      
    </>
  );
}

export default Home;
