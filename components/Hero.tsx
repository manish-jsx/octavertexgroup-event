'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import '../styles/pattern-reveal.css'; // Ensure this path is correct and the CSS is being applied

const Hero = () => {
  useEffect(() => {
    class Polyline {
      constructor(public $element: SVGPolylineElement, public index: number) {
        this.STROKE_DASHOFFSET = 240;
        this.MAX_DISTANCE = 300;
        this.updateCenter();
      }

      STROKE_DASHOFFSET: number;
      MAX_DISTANCE: number;
      centerX!: number;
      centerY!: number;
      screenX!: number;
      screenY!: number;

      updateCenter() {
        const points = this.$element.getAttribute('points')!.split(' ');
        let xSum = 0;
        let ySum = 0;
        points.forEach((point, i) => {
          if (i % 2) {
            ySum += parseInt(point);
          } else {
            xSum += parseInt(point);
          }
        });
        this.centerX = xSum / (points.length / 2);
        this.centerY = ySum / (points.length / 2);
      }

      updateScreenPosition(svgRect: DOMRect, viewBoxWidth: number, viewBoxHeight: number) {
        const scaleX = svgRect.width / viewBoxWidth;
        const scaleY = svgRect.height / viewBoxHeight;
        this.screenX = svgRect.x + window.scrollX + this.centerX * scaleX;
        this.screenY = svgRect.y + window.scrollY + this.centerY * scaleY;
      }

      getDistance(dx: number, dy: number) {
        return Math.sqrt(dx * dx + dy * dy);
      }

      renderHover(hoverX: number, hoverY: number) {
        const dx = this.screenX - hoverX;
        const dy = this.screenY - hoverY;
        const distance = this.getDistance(dx, dy);
        const alpha = Math.max(0, Math.min(1, distance / this.MAX_DISTANCE));
        const offset = alpha * this.STROKE_DASHOFFSET;
        this.$element.style.strokeDashoffset = `${offset}px`;
      }
    }

    class PatternReveal {
      ui: {
        $svg?: SVGSVGElement;
        $polylines?: Polyline[];
      } = {};
      svgRect!: DOMRect;
      viewBoxWidth!: number;
      viewBoxHeight!: number;

      constructor(public el: HTMLElement) {
        this.mount();
      }

      mount() {
        this.bindUI();
        this.bindEvents();
      }

      bindUI() {
        this.ui.$svg = this.el.querySelector('svg')!;
        const polylineElements = this.ui.$svg.querySelectorAll('polyline');
        this.ui.$polylines = Array.from(polylineElements).map((polylineElement, index) => {
          const line = new Polyline(polylineElement, index);
          line.updateScreenPosition(this.svgRect, this.viewBoxWidth, this.viewBoxHeight);
          return line;
        });
        this.svgRect = this.ui.$svg.getBoundingClientRect();
        this.viewBoxWidth = 600;
        this.viewBoxHeight = 440;
      }

      bindEvents() {
        window.addEventListener('mousemove', this.onMouseover.bind(this));
      }

      onMouseover(event: MouseEvent) {
        const hoverX = event.pageX;
        const hoverY = event.pageY;

        this.ui.$polylines?.forEach((polyline) => {
          polyline.renderHover(hoverX, hoverY);
        });
      }
    }

    const patternElement = document.querySelector('.patternReveal') as HTMLElement;
    if (patternElement) {
      new PatternReveal(patternElement);
    }
  }, []);

  return (
    <section className='relative bg-black h-screen'>
      <div className='patternReveal absolute inset-0'>
        <svg viewBox="0 0 600 440" preserveAspectRatio="none" className='w-full h-full'>
          {/* Your polyline elements */}
        </svg>
      </div>
   
      <div className='relative z-10 text-white flex justify-center items-center h-full'>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className='text-center'
        >
          <h1 className='text-4xl md:text-6xl font-bold mb-4'>
            🚀 Attention Bold Models in Bhubaneswar! 🚀
          </h1>
          <p className='text-lg md:text-2xl mb-8'>
            Are you ready to take the fashion world by storm? Join our exciting new project and shine!
          </p>
          <Link href='/registration'>
            <span className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer'>
              Apply Now
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
