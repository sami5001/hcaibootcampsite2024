// Description: The header component of the website.
"use client";

import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import DarkModeToggle from './DarkModeToggle';

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    
    // Check if dark mode is enabled
    const checkDarkMode = () => {
      setIsDarkMode(document.documentElement.classList.contains('dark'));
    };
    
    // Initial check
    checkDarkMode();
    
    // Set up observer for dark mode changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          checkDarkMode();
        }
      });
    });
    
    observer.observe(document.documentElement, { attributes: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white dark:bg-gray-900 shadow-md' 
        : 'bg-gradient-to-r from-blue-600/80 to-blue-800/80 backdrop-blur-md dark:from-blue-900/90 dark:to-black/90'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 md:h-24">
          {/* Logos */}
          <Link href="/" className="flex items-center">
            <div className="flex items-center">
              {/* Oxford Logo - Different versions for light/dark mode */}
              <Image
                src={isDarkMode ? "/oxford-logo-dark.svg" : "/oxford-logo.svg"}
                alt="University of Oxford"
                width={40}
                height={40}
                className="h-16 w-auto"
                priority
              />
              
              {/* Compute Logo */}
              <Image
                src="/compute-logo.svg"
                alt="Compute"
                width={40}
                height={40}
                className="h-16 w-auto ml-3"
                priority
              />
              
              {/* HcAI Logo */}
              <Image
                src="/oxhcai-logo.svg"
                alt="HcAI Bootcamp"
                width={50}
                height={50}
                className="h-16 w-auto ml-3"
                priority
              />
            </div>
            
            <span className={`ml-3 text-xl font-semibold tracking-tight whitespace-nowrap ${
              scrolled ? 'text-gray-800 dark:text-white' : 'text-white'
            }`}></span>
          </Link>
          
          {/* Mobile menu and dark mode toggle */}
          <div className="md:hidden flex items-center gap-2">
            <DarkModeToggle />
            <button 
              onClick={() => setMenuOpen(!menuOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md ${
                scrolled ? 'text-gray-700 dark:text-gray-300' : 'text-white'
              }`}
            >
              <svg className={`h-6 w-6 ${menuOpen ? 'hidden' : 'block'}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg className={`h-6 w-6 ${menuOpen ? 'block' : 'hidden'}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex space-x-8">
              {[
                { name: 'Home', href: '/' },
                { name: 'Speakers', href: '/speakers' },
                { name: 'Trainers', href: '/trainers' },
                { name: 'Activities', href: '/activities' },
                { name: 'Lectures', href: '/lectures' },
                { name: 'Agenda', href: '/agenda' },
                { name: 'Sponsors', href: '/sponsors' },
              ].map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-base font-medium transition-colors duration-300 ${
                    pathname === item.href 
                      ? scrolled 
                          ? 'text-blue-600 dark:text-blue-400' 
                          : 'text-white font-bold'
                      : scrolled 
                          ? 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400' 
                          : 'text-white/90 hover:text-white'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
            
            <DarkModeToggle />
            
            <Link 
              href="https://forms.office.com/e/HukNaP5vQ6"
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 hover:shadow-lg whitespace-nowrap ${
                scrolled 
                  ? 'bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600' 
                  : 'bg-white text-blue-600 hover:bg-blue-50 dark:bg-blue-800 dark:text-white dark:hover:bg-blue-700'
              }`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Register Now
            </Link>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={`md:hidden ${menuOpen ? 'block' : 'hidden'} bg-white dark:bg-gray-900 shadow-md`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {[
            { name: 'Home', href: '/' },
            { name: 'Speakers', href: '/speakers' },
            { name: 'Trainers', href: '/trainers' },
            { name: 'Activities', href: '/activities' },
            { name: 'Lectures', href: '/lectures' },
            { name: 'Agenda', href: '/agenda' },
            { name: 'Sponsors', href: '/sponsors' },
          ].map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                pathname === item.href 
                  ? 'text-blue-600 bg-blue-50 dark:text-blue-400 dark:bg-blue-900/30'
                  : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30'
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <Link 
            href="https://forms.office.com/e/HukNaP5vQ6"
            className="block w-full text-center bg-blue-600 dark:bg-blue-700 text-white rounded-full px-5 py-2 text-base font-medium mt-4"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
          >
            Register Now
          </Link>
        </div>
      </div>
    </header>
  );
}