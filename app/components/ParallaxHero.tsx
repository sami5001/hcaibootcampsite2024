"use client";

import { useEffect, useRef } from 'react';
import Image from 'next/image';

interface ParallaxHeroProps {
  imageSrc: string;
  logoSrc: string;
  title: string;
  subtitle: string;
  ctaLink: string;
  ctaText: string;
}

export default function ParallaxHero({
  imageSrc,
  logoSrc,
  title,
  subtitle,
  ctaLink,
  ctaText
}: ParallaxHeroProps) {
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (imageRef.current) {
        const scrollPosition = window.scrollY;
        // Move the background image at a slower rate than the scroll
        imageRef.current.style.transform = `translateY(${scrollPosition * 0.4}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="w-full relative h-[80vh] flex flex-col items-center justify-center overflow-hidden">
      {/* Parallax Background Image */}
      <div ref={imageRef} className="absolute inset-0 w-full h-full">
        <Image
          src={imageSrc}
          alt="Hero Background"
          fill
          style={{ objectFit: 'cover', objectPosition: 'center' }}
          className="brightness-50"
          priority
        />
      </div>
      
      {/* Content overlay */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="relative w-96 h-96 mb-6 mx-auto">
          <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
            src={logoSrc}
            alt="Logo"
            fill
            style={{ objectFit: 'contain' }}
            priority
          />
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">{title}</h1>
        <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
          {subtitle}
        </p>
        <a 
          href={ctaLink}
          className="bg-white text-blue-600 dark:bg-blue-800 dark:text-white rounded-full px-8 py-3 text-lg font-medium inline-block transition-all hover:bg-blue-50 dark:hover:bg-blue-700"
          target="_blank"
          rel="noopener noreferrer"
        >
          {ctaText}
        </a>
      </div>
    </section>
  );
}