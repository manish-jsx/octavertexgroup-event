"use client"; // Add this line
import Head from 'next/head';
import AnimatedComponent from './components/AnimatedComponent';
import ThreeCanvas from './components/ThreeCanvas';
import styles from './page.module.css';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Octavertex Group</title>
        <meta name="description" content="Bold Models Wanted!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1>Welcome to Octavertex Group</h1>
        <AnimatedComponent />
        <ThreeCanvas />
      </main>
    </div>
  );
}
