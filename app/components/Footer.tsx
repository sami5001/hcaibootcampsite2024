// Description: The footer component of the website.
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center">
              <Image
                src="/oxhcai-logo.svg"
                alt="HcAI Bootcamp"
                width={40}
                height={40}
                className="h-8 w-auto"
              />
              <span className="ml-2 text-lg font-semibold tracking-tight text-gray-900 dark:text-white">HcAI Design Bootcamp</span>
            </Link>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              Human-Centred Medical AI Design Bootcamp - University of Oxford
            </p>
            <div className="mt-4 flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>
          
          {/* Navigation links */}
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white tracking-wider uppercase">Navigate</h3>
            <ul className="mt-4 space-y-2">
              {[
                { name: 'Home', href: '/' },
                { name: 'Speakers', href: '/speakers' },
                { name: 'Trainers', href: '/trainers' },
                { name: 'Activities', href: '/activities' },
                { name: 'Lectures', href: '/lectures' },
                { name: 'Agenda', href: '/agenda' },
                { name: 'Sponsors', href: '/sponsors' },
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-base text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Partners */}
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white tracking-wider uppercase">Partners</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="https://www.phc.ox.ac.uk/" className="text-base text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
                  University of Oxford
                </a>
              </li>
              <li>
                <a href="https://www.arc-oxtv.nihr.ac.uk/" className="text-base text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
                  NIHR ARC OxTV
                </a>
              </li>
              <li>
                <a href="https://www.st-hughs.ox.ac.uk/" className="text-base text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
                  St Hugh&apos;s College
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white tracking-wider uppercase">Contact</h3>
            <div className="mt-4 space-y-2">
              <p className="text-base text-gray-600 dark:text-gray-300">
                <a href="mailto:info@hcaibootcamp.site" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
                  info@hcaibootcamp.site
                </a>
              </p>
              <p className="text-base text-gray-600 dark:text-gray-300">
                Nuffield Department of Primary Care Health Sciences, University of Oxford
              </p>
              <p className="text-base text-gray-600 dark:text-gray-300">
                Oxford, United Kingdom
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-12 border-t border-gray-200 dark:border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-base text-gray-500 dark:text-gray-400">&copy; {new Date().getFullYear()} HcAI Design Bootcamp. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <Link href="/privacy-policy" className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">Privacy Policy</Link>
            <Link href="/terms-of-service" className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}