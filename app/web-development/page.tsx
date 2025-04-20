"use client"
// import { Metadata } from "next/metadata";
import { useRef, useEffect } from "react";
import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// export const metadata: Metadata = {
//   title: "Web Development",
// };

const WebDevelopmentPage = () => {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: contentRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.5, // Adjust for smooth/rough scrolling effect
      },
    });

    tl.to(
      contentRef.current,
      {
        duration: 1,
        y: "0%",
      },
      0 // Adjust the starting position
    );


    tl.to(".section-title", { duration: 0.75, opacity: 1, y: 0, stagger: 0.25 });
    tl.to(".section-content", { duration: 0.75, opacity: 1, y: 0, stagger: 0.25 });
    tl.to(".section-list-item", { duration: 0.75, opacity: 1, y: 0, stagger: 0.1});


    return () => gsap.killTweensOf(contentRef.current); // Clean up on unmount
  }, []);

  return (
    <main className="container mx-auto py-12 px-4" ref={contentRef}>
      <h1 className="text-4xl font-bold mb-8 section-title">Web Development</h1>
      <section className="section-content">
        <p>
          We offer full-stack web development solutions, from initial design to launch and maintenance. Our skilled team delivers robust, scalable, and secure web applications tailored to your specific business needs.
        </p>
        <ul className="list-disc list-inside section-list">
          <li className="section-list-item">Custom Web Applications</li>
          <li className="section-list-item">E-commerce Solutions</li>
          <li className="section-list-item">Responsive Design</li>
          <li className="section-list-item">API Integration</li>
          <li className="section-list-item">SEO Optimization</li>
          <li className="section-list-item">CMS Integration</li>
        </ul>

        <div className="mt-8">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Learn More
          </button>
        </div>
      </section>
    </main>
  );
};

export default WebDevelopmentPage;

