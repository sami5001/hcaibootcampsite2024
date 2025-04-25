import Image from 'next/image';
import { getSortedContentData } from '@/lib/content';
import SponsorCard from '@/app/components/SponsorCard';

export default async function Sponsors() {
  // Get all sponsors data
  const allSponsorsData = await getSortedContentData('sponsors');
  
  return (
    <main className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-900 dark:to-black py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">Our Sponsors</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Organizations partnering with us to make the Human-Centered Medical AI Design Bootcamp possible
          </p>
        </div>
      </section>
      
      {/* Sponsors Section */}
      <section className="w-full py-20 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Our Partners</h2>
            <div className="w-24 h-1 bg-blue-600 dark:bg-blue-500 mx-auto"></div>
            <p className="mt-6 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We&apos;re grateful for the support of these organizations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allSponsorsData.map((sponsor: any) => (
              <SponsorCard 
                key={sponsor.id}
                id={sponsor.id}
                name={sponsor.name || sponsor.id}
                description={sponsor.description || ''}
                image={sponsor.image || '/images/become-a-sponsor.svg'}
                url={sponsor.website}
              />
            ))}
            
            {/* Become a Sponsor Card */}
            <div className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg transition-all hover:shadow-xl border-2 border-dashed border-blue-300 dark:border-blue-700">
              <div className="p-6 text-center py-12">
                <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden mb-6 bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                  <svg className="w-16 h-16 text-blue-400 dark:text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">Become a Sponsor</h3>
                <p className="text-blue-600 dark:text-blue-400 font-medium mb-4">Join our community</p>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Be part of this unique AI Event at Oxford and help empower stakeholders in building Medical AI.
                </p>
                <a 
                  href="mailto:info@hcaibootcamp.site"
                  className="bg-blue-600 dark:bg-blue-700 text-white rounded-full px-6 py-2 text-sm font-medium inline-block transition-all hover:bg-blue-700 dark:hover:bg-blue-600"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="w-full py-16 bg-blue-600 dark:bg-blue-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Interested in Sponsoring?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Sponsorship opportunities are still available for this unique event at Oxford University
          </p>
          <a 
            href="mailto:info@hcaibootcamp.site"
            className="bg-white text-blue-600 dark:bg-blue-800 dark:text-white rounded-full px-8 py-3 text-lg font-medium inline-block transition-all hover:bg-blue-50 dark:hover:bg-blue-700"
          >
            Contact Us
          </a>
        </div>
      </section>
    </main>
  )
}
