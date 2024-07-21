
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
      centerX: number;
      centerY: number;
      screenX: number;
      screenY: number;

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
      svgRect: DOMRect;
      viewBoxWidth: number;
      viewBoxHeight: number;

      constructor(public el: HTMLElement) {
        this.mount();
      }

      mount() {
        this.bindUI();
        this.bindEvents();
      }

      bindUI() {
        this.ui.$svg = this.el.querySelector('svg')!;
        this.ui.$polylines = this.ui.$svg.querySelectorAll('polyline');
        this.svgRect = this.ui.$svg.getBoundingClientRect();
        this.viewBoxWidth = 600;
        this.viewBoxHeight = 440;

        this.ui.$polylines = Array.from(this.ui.$polylines).map((polyline, i) => {
          const line = new Polyline(polyline, i);
          line.updateScreenPosition(this.svgRect, this.viewBoxWidth, this.viewBoxHeight);
          return line;
        });
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
          <polyline points="40 60 60 20 40 -20 80 -20 100 20" style={{ strokeDashoffset: '222.19px' }}></polyline>
          <polyline points="120 60 160 60 140 20 160 -20 120 -20 100 20" style={{ strokeDashoffset: '134.374px' }}></polyline>
          <polyline points="100 100 120 60 100 20 80 60 40 60 60 100" style={{ strokeDashoffset: '175.024px' }}></polyline>
          <polyline points="160 60 180 20 160 -20 200 -20 220 20" style={{ strokeDashoffset: '103.52px' }}></polyline>
          <polyline points="240 60 280 60 260 20 280 -20 240 -20 220 20" style={{ strokeDashoffset: '117.938px' }}></polyline>
          <polyline points="220 100 240 60 220 20 200 60 160 60 180 100" style={{ strokeDashoffset: '40.0356px' }}></polyline>
          <polyline points="280 60 300 20 280 -20 320 -20 340 20" style={{ strokeDashoffset: '178.281px' }}></polyline>
          <polyline points="360 60 400 60 380 20 400 -20 360 -20 340 20" style={{ strokeDashoffset: '240px' }}></polyline>
          <polyline points="340 100 360 60 340 20 320 60 280 60 300 100" style={{ strokeDashoffset: '179.7px' }}></polyline>
          <polyline points="400 60 420 20 400 -20 440 -20 460 20" style={{ strokeDashoffset: '240px' }}></polyline>
          <polyline points="480 60 520 60 500 20 520 -20 480 -20 460 20" style={{ strokeDashoffset: '240px' }}></polyline>
          <polyline points="460 100 480 60 460 20 440 60 400 60 420 100" style={{ strokeDashoffset: '240px' }}></polyline>
          <polyline points="520 60 540 20 520 -20 560 -20 580 20" style={{ strokeDashoffset: '240px' }}></polyline>
          <polyline points="600 60 640 60 620 20 640 -20 600 -20 580 20" style={{ strokeDashoffset: '240px' }}></polyline>
          <polyline points="580 100 600 60 580 20 560 60 520 60 540 100" style={{ strokeDashoffset: '240px' }}></polyline>
          <polyline points="60 180 80 140 60 100 100 100 120 140" style={{ strokeDashoffset: '172.472px' }}></polyline>
          <polyline points="140 180 180 180 160 140 180 100 140 100 120 140" style={{ strokeDashoffset: '80.7969px' }}></polyline>
          <polyline points="120 220 140 180 120 140 100 180 60 180 80 220" style={{ strokeDashoffset: '169.18px' }}></polyline>
          <polyline points="180 180 200 140 180 100 220 100 240 140" style={{ strokeDashoffset: '32.3748px' }}></polyline>
          <polyline points="260 180 300 180 280 140 300 100 260 100 240 140" style={{ strokeDashoffset: '111.06px' }}></polyline>
          <polyline points="240 220 260 180 240 140 220 180 180 180 200 220" style={{ strokeDashoffset: '97.6977px' }}></polyline>
          <polyline points="300 180 320 140 300 100 340 100 360 140" style={{ strokeDashoffset: '179.079px' }}></polyline>
          <polyline points="380 180 420 180 400 140 420 100 380 100 360 140" style={{ strokeDashoffset: '240px' }}></polyline>
          <polyline points="360 220 380 180 360 140 340 180 300 180 320 220" style={{ strokeDashoffset: '224.025px' }}></polyline>
          <polyline points="420 180 440 140 420 100 460 100 480 140" style={{ strokeDashoffset: '240px' }}></polyline>
          <polyline points="500 180 540 180 520 140 540 100 500 100 480 140" style={{ strokeDashoffset: '240px' }}></polyline>
          <polyline points="480 220 500 180 480 140 460 180 420 180 440 220" style={{ strokeDashoffset: '240px' }}></polyline>
          <polyline points="540 180 560 140 540 100 580 100 600 140" style={{ strokeDashoffset: '240px' }}></polyline>
          <polyline points="600 220 620 180 600 140 580 180 540 180 560 220" style={{ strokeDashoffset: '240px' }}></polyline>
          <polyline points="80 300 100 260 80 220 120 220 140 260" style={{ strokeDashoffset: '216.612px' }}></polyline>
          <polyline points="160 300 200 300 180 260 200 220 160 220 140 260" style={{ strokeDashoffset: '178.312px' }}></polyline>
          <polyline points="140 340 160 300 140 260 120 300 80 300 100 340" style={{ strokeDashoffset: '240px' }}></polyline>
          <polyline points="200 300 220 260 200 220 240 220 260 260" style={{ strokeDashoffset: '167.855px' }}></polyline>
          <polyline points="280 300 320 300 300 260 320 220 280 220 260 260" style={{ strokeDashoffset: '218.07px' }}></polyline>
          <polyline points="260 340 280 300 260 260 240 300 200 300 220 340" style={{ strokeDashoffset: '232.986px' }}></polyline>
          <polyline points="320 300 340 260 320 220 360 220 380 260" style={{ strokeDashoffset: '240px' }}></polyline>
          <polyline points="400 300 440 300 420 260 440 220 400 220 380 260" style={{ strokeDashoffset: '240px' }}></polyline>
          <polyline points="380 340 400 300 380 260 360 300 320 300 340 340" style={{ strokeDashoffset: '240px' }}></polyline>
          <polyline points="440 300 460 260 440 220 480 220 500 260" style={{ strokeDashoffset: '240px' }}></polyline>
          <polyline points="520 300 560 300 540 260 560 220 520 220 500 260" style={{ strokeDashoffset: '240px' }}></polyline>
          <polyline points="500 340 520 300 500 260 480 300 440 300 460 340" style={{ strokeDashoffset: '240px' }}></polyline>
          <polyline points="560 300 580 260 560 220 600 220 620 260" style={{ strokeDashoffset: '240px' }}></polyline>
          <polyline points="620 340 640 300 620 260 600 300 560 300 580 340" style={{ strokeDashoffset: '240px' }}></polyline>
          <polyline points="100 420 120 380 100 340 140 340 160 380" style={{ strokeDashoffset: '240px' }}></polyline>
          <polyline points="180 420 220 420 200 380 220 340 180 340 160 380" style={{ strokeDashoffset: '240px' }}></polyline>
          <polyline points="160 460 180 420 160 380 140 420 100 420 120 460" style={{ strokeDashoffset: '240px' }}></polyline>
          <polyline points="220 420 240 380 220 340 260 340 280 380" style={{ strokeDashoffset: '240px' }}></polyline>
          <polyline points="300 420 340 420 320 380 340 340 300 340 280 380" style={{ strokeDashoffset: '240px' }}></polyline>
          <polyline points="280 460 300 420 280 380 260 420 220 420 240 460" style={{ strokeDashoffset: '240px' }}></polyline>
          <polyline points="340 420 360 380 340 340 380 340 400 380" style={{ strokeDashoffset: '240px' }}></polyline>
          <polyline points="420 420 460 420 440 380 460 340 420 340 400 380" style={{ strokeDashoffset: '240px' }}></polyline>
          <polyline points="400 460 420 420 400 380 380 420 340 420 360 460" style={{ strokeDashoffset: '240px' }}></polyline>
          <polyline points="460 420 480 380 460 340 500 340 520 380" style={{ strokeDashoffset: '240px' }}></polyline>
          <polyline points="540 420 580 420 560 380 580 340 540 340 520 380" style={{ strokeDashoffset: '240px' }}></polyline>
          <polyline points="520 460 540 420 520 380 500 420 460 420 480 460" style={{ strokeDashoffset: '240px' }}></polyline>
          <polyline points="580 420 600 380 580 340 620 340 640 380" style={{ strokeDashoffset: '240px' }}></polyline>
          <polyline points="640 460 660 420 640 380 620 420 580 420 600 460" style={{ strokeDashoffset: '240px' }}></polyline>
          <polyline points="0 60 40 60 20 20 40 -20 0 -20 -20 20" style={{ strokeDashoffset: '240px' }}></polyline>
          <polyline points="20 180 60 180 40 140 60 100 20 100 0 140" style={{ strokeDashoffset: '240px' }}></polyline>
          <polyline points="0 220 20 180 0 140 -20 180 -60 180 -40 220" style={{ strokeDashoffset: '240px' }}></polyline>
          <polyline points="-40 300 -20 260 -40 220 0 220 20 260" style={{ strokeDashoffset: '240px' }}></polyline>
          <polyline points="40 300 80 300 60 260 80 220 40 220 20 260" style={{ strokeDashoffset: '240px' }}></polyline>
          <polyline points="20 340 40 300 20 260 0 300 -40 300 -20 340" style={{ strokeDashoffset: '240px' }}></polyline>
          <polyline points="-20 420 0 380 -20 340 20 340 40 380" style={{ strokeDashoffset: '240px' }}></polyline>
          <polyline points="60 420 100 420 80 380 100 340 60 340 40 380" style={{ strokeDashoffset: '240px' }}></polyline>
          <polyline points="40 460 60 420 40 380 20 420 -20 420 0 460" style={{ strokeDashoffset: '240px' }}></polyline>
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
