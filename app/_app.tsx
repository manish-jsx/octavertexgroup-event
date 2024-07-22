// import '../styles/globals.css';
// import type { AppProps } from 'next/app'; // Import the AppProps type

// function MyApp({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />;
// }

// export default MyApp;


import '../styles/globals.css';
import '../styles/navbar.css';
import '../styles/pattern-reveal.css';

function MyApp({ Component, pageProps }: { Component: any; pageProps: any }) {
  return <Component {...pageProps} />;
}

export default MyApp;