import Image from 'next/image';
import Link from 'next/link';
import { getSortedContentData, getContentByType } from '@/lib/content';
import { getTagBadgeClasses } from '@/lib/tagUtils';
import SpeakerCard from '@/app/components/SpeakerCard';

export const dynamic = 'force-dynamic';

export default async function Speakers() {
  // Getting data using async functions
  const keynoteSpeakers = await getContentByType('speakers', 'keynote');
  const lectureSpeakers = await getContentByType('speakers', 'lectures');
  const regularSpeakers = await getContentByType('speakers', 'speaker');
  
  return (
    <main className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-900 dark:to-black py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">Our Distinguished Speakers</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Learn from world-renowned experts in Human-Centered AI and medical technology
          </p>
        </div>
      </section>
      
      {/* Keynote Speakers */}
      {keynoteSpeakers.length > 0 && (
        <section className="w-full py-20 bg-white dark:bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Keynote Speakers</h2>
              <div className="w-24 h-1 bg-blue-600 dark:bg-blue-500 mx-auto"></div>
            </div>
            
            {keynoteSpeakers.map((speaker, index) => (
              <div key={speaker.id} className={`flex flex-col lg:flex-row ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''} items-center gap-12 mb-20`}>
                <div className="w-full lg:w-1/3 flex justify-center">
                  {speaker.image && (
                    <div className="relative w-72 h-72 rounded-2xl overflow-hidden shadow-xl dark:shadow-gray-800 transition-transform hover:scale-105">
                      <Image
                        src={speaker.image}
                        alt={speaker.name}
                        fill
                        style={{ objectFit: 'cover' }}
                        className="transition-transform duration-500 hover:scale-110"
                        priority
                      />
                    </div>
                  )}
                </div>
                <div className="w-full lg:w-2/3">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{speaker.name}</h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium mb-4">
                    <span dangerouslySetInnerHTML={{ __html: speaker.title || '' }}></span>
                    {speaker.title && speaker.organization && ', '}
                    <span dangerouslySetInnerHTML={{ __html: speaker.organization || '' }}></span>
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {speaker.tags && speaker.tags.map((tag: string) => (
                      <span 
                        key={tag} 
                        className={getTagBadgeClasses(tag)}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div 
                    className="prose prose-blue dark:prose-invert text-gray-900 dark:text-gray-100 text-justify [&>p]:mb-4" 
                    dangerouslySetInnerHTML={{ __html: speaker.content }} 
                  />
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
      
      {/* Lecture Speakers */}
      {lectureSpeakers.length > 0 && (
        <section className="w-full py-20 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Featured Lectures</h2>
              <div className="w-24 h-1 bg-blue-600 dark:bg-blue-500 mx-auto"></div>
            </div>
            
            {lectureSpeakers.map((speaker, index) => (
              <div key={speaker.id} className={`flex flex-col lg:flex-row ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''} items-center gap-12 mb-20`}>
                <div className="w-full lg:w-1/3 flex justify-center">
                  {speaker.image && (
                    <div className="relative w-72 h-72 rounded-2xl overflow-hidden shadow-xl dark:shadow-gray-800 transition-transform hover:scale-105">
                      <Image
                        src={speaker.image}
                        alt={speaker.name}
                        fill
                        style={{ objectFit: 'cover' }}
                        className="transition-transform duration-500 hover:scale-110"
                        priority
                      />
                    </div>
                  )}
                </div>
                <div className="w-full lg:w-2/3">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{speaker.name}</h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium mb-4">
                    <span dangerouslySetInnerHTML={{ __html: speaker.title || '' }}></span>
                    {speaker.title && speaker.organization && ', '}
                    <span dangerouslySetInnerHTML={{ __html: speaker.organization || '' }}></span>
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {speaker.tags && speaker.tags.map((tag: string) => (
                      <span 
                        key={tag} 
                        className={getTagBadgeClasses(tag)}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div 
                    className="prose prose-blue dark:prose-invert text-gray-900 dark:text-gray-100 text-justify [&>p]:mb-4" 
                    dangerouslySetInnerHTML={{ __html: speaker.content }} 
                  />
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
      
      {/* Regular Speakers */}
      {regularSpeakers.length > 0 && (
        <section className="w-full py-20 bg-white dark:bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Featured Speakers</h2>
              <div className="w-24 h-1 bg-blue-600 dark:bg-blue-500 mx-auto"></div>
              <p className="mt-6 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Our bootcamp features a diverse range of experts sharing their knowledge and experience
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularSpeakers.map((speaker) => (
                <SpeakerCard 
                  key={speaker.id}
                  id={speaker.id}
                  name={speaker.name}
                  title={speaker.title}
                  organization={speaker.organization}
                  image={speaker.image}
                  tags={speaker.tags}
                  content={speaker.content}
                />
              ))}
            </div>
          </div>
        </section>
      )}
      
      {/* Call to Action */}
      <section className="w-full py-16 bg-blue-600 dark:bg-blue-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Interested in Speaking at Our Bootcamp?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            If you&apos;re an expert in human-centered AI, healthcare innovation, or related fields and would like to share your knowledge, we&apos;d love to hear from you.
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
  );
}