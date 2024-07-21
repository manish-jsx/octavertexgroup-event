import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='py-8 bg-gray-800 text-white'>
      <div className='container mx-auto px-4 text-center'>
        <ul className='flex justify-center space-x-8 mb-4'>
          <li><Link href='/'>Home</Link></li>
          <li><Link href='#services'>Services</Link></li>
          <li><Link href='#works'>Portfolio</Link></li>
          <li><Link href='#contact'>Contact Us</Link></li>
        </ul>
        <p>© 2024 OctaVertex Media. All rights reserved.</p>
        <Link href='/privacy-policy'>Privacy Policy</Link> | <Link href='/terms-of-service'>Terms of Service</Link>
      </div>
    </footer>
  );
}

export default Footer;
