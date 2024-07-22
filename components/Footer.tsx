import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='py-8 bg-gray-800 text-white'>
      <div className='container mx-auto px-4 text-center'>
        <div className='logo-container mb-4 flex justify-center items-left'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" className='logo'>
            <defs>
              <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#FF5733', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: '#C70039', stopOpacity: 1 }} />
              </linearGradient>
              <filter id="f1" x="0" y="0" width="150%" height="150%">
                <feOffset result="offOut" in="SourceAlpha" dx="5" dy="5" />
                <feGaussianBlur in="offOut" result="blurOut" stdDeviation="3" />
                <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
              </filter>
            </defs>
          
            <g filter="url(#f1)">
              <polygon points="0,0 100,0 50,100" fill="url(#gradient1)" />
              <polygon points="100,0 200,0 150,100" fill="url(#gradient1)" />
              <polygon points="50,100 150,100 100,200" fill="url(#gradient1)" />
            </g>
          </svg>
          <div className='brand-name'>
          <img src="./logo/OctaVertex.svg" alt="OctaVertex" className="octavertex" />
          <img src="./logo/Media.svg" alt="Media" className="media" />
        </div>
        </div>
        <ul className='flex justify-center space-x-8 mb-4'>
          <li><Link href='/'>Home</Link></li>
          <li><Link href='#services'>Services</Link></li>
          <li><Link href="/portfolio">Portfolio</Link></li>
          <li><Link href='#contact'>Contact Us</Link></li>
        </ul>
        <p>© 2024 OctaVertex Media. All rights reserved.</p>
        <div className='space-x-2'>
          <Link href='/privacy-policy'>Privacy Policy</Link> | <Link href='/terms-of-service'>Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
