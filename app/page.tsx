import Image from 'next/image'
import Link from 'next/link'
import ParallaxHero from './components/ParallaxHero'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      {/* Hero Section with Parallax */}
      <ParallaxHero 
        imageSrc="/images/bootcamp24/bootcamp2024hero.jpeg"
        logoSrc="/bootcamp-logo-cs.svg"
        title="Human-Centered Medical AI Design Bootcamp"
        subtitle="A unique opportunity to learn design innovation methods to create effective Digital Health solutions"
        ctaLink="https://forms.office.com/e/5GrChP83AT"
        ctaText="Register Interest"
      />

      {/* Navigation Cards Section */}
      <section className="w-full py-20 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Explore Our Bootcamp</h2>
            <div className="w-24 h-1 bg-blue-600 dark:bg-blue-500 mx-auto"></div>
            <p className="mt-6 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Learn more about what makes our Human-Centered Medical AI Design Bootcamp special
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Speakers Card */}
            <Link href="/speakers" className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg transition-all hover:shadow-xl hover:-translate-y-1">
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                  Speakers
                  <span className="inline-block ml-2 transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                    →
                  </span>
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Experts and pioneers in the field, including Keynote Speech by Professor Ben Shneiderman.
                </p>
              </div>
            </Link>

            {/* Trainers Card */}
            <Link href="/trainers" className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg transition-all hover:shadow-xl hover:-translate-y-1">
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                  Trainers
                  <span className="inline-block ml-2 transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                    →
                  </span>
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Learn design innovation methods to create Digital Health solutions from our expert trainers.
                </p>
              </div>
            </Link>

            {/* Activities Card */}
            <Link href="/activities" className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg transition-all hover:shadow-xl hover:-translate-y-1">
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                  Activities
                  <span className="inline-block ml-2 transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                    →
                  </span>
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Bootcamp activities from design to prototyping. Take your solutions towards deployment!
                </p>
              </div>
            </Link>

            {/* Sponsors Card */}
            <Link href="/sponsors" className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg transition-all hover:shadow-xl hover:-translate-y-1">
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                  Sponsors
                  <span className="inline-block ml-2 transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                    →
                  </span>
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Be part of the unique AI Event at Oxford. Empower stakeholders in building Medical AI.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="w-full py-16 bg-blue-600 dark:bg-blue-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Join Us?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Register your interest for the upcoming Human-Centered Medical AI Design Bootcamp
          </p>
          <a 
            href="https://forms.office.com/e/5GrChP83AT"
            className="bg-white text-blue-600 dark:bg-blue-800 dark:text-white rounded-full px-8 py-3 text-lg font-medium inline-block transition-all hover:bg-blue-50 dark:hover:bg-blue-700"
            target="_blank"
            rel="noopener noreferrer"
          >
            Register Now
          </a>
        </div>
      </section>

      {/* Sponsors */}
      <section className="w-full py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-500 dark:text-gray-400 mb-4">Funded by</p>
          <div className="flex justify-center">
            <a
              className="flex place-items-center"
              href="https://www.arc-oxtv.nihr.ac.uk/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/funded-by-nihr-logo.png"
                alt="Funded by NIHR Logo"
                className="dark:invert(10%)"
                width={200}
                height={48}
                priority
              />
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
