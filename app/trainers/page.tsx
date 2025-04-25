// Description: This page displays all trainers data.
import Image from 'next/image';
import { getSortedContentData } from '@/lib/content';
import TrainerCard from '@/app/components/TrainerCard';

export default async function Trainers() {
  // Get all trainers data
  const allTrainersData = await getSortedContentData('trainers');
  
  return (
    <main className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-900 dark:to-black py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">Meet Our Expert Trainers</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Learn from professionals who will guide you through the bootcamp experience
          </p>
        </div>
      </section>
      
      {/* Trainers Section */}
      <section className="w-full py-20 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {allTrainersData.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {allTrainersData.map((trainer) => (
                <div key={trainer.id} className="flex flex-col">
                  {trainer.image && (
                    <div className="relative w-full h-80 rounded-2xl overflow-hidden shadow-xl dark:shadow-gray-800 mb-8">
                      <Image
                        src={trainer.image}
                        alt={trainer.name}
                        fill
                        style={{ objectFit: 'cover' }}
                        className="transition-transform duration-500 hover:scale-105"
                        priority
                      />
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{trainer.name}</h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium mb-4">
                    <span dangerouslySetInnerHTML={{ __html: trainer.title || '' }} />
                    {trainer.title && trainer.organization && ', '}
                    <span dangerouslySetInnerHTML={{ __html: trainer.organization || '' }} />
                  </p>
                  <div 
                    className="prose prose-blue dark:prose-invert text-gray-900 dark:text-gray-100 text-justify [&>p]:mb-4"
                    dangerouslySetInnerHTML={{ __html: trainer.content }}
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Trainers Coming Soon</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                We&apos;re finalizing our trainer lineup. Check back soon for updates!
              </p>
            </div>
          )}
          
          <div className="mt-12 p-8 bg-gray-50 dark:bg-gray-900 rounded-2xl shadow-lg dark:shadow-gray-800">
            <p className="text-xl text-gray-700 dark:text-gray-300 text-center">
              Together, our trainers have developed this bootcamp, tailored to the medical field to train participants on advanced methods in design innovation that will enable multiple stakeholders, regardless of their experience level, to engage in creating prototypes for Medical AI.
            </p>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="w-full py-16 bg-blue-600 dark:bg-blue-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Join Our Next Bootcamp</h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Learn from our expert trainers and facilitators at the upcoming Human-Centered Medical AI Design Bootcamp
          </p>
          <a 
            href="https://forms.office.com/e/HukNaP5vQ6"
            className="bg-white text-blue-600 dark:bg-blue-800 dark:text-white rounded-full px-8 py-3 text-lg font-medium inline-block transition-all hover:bg-blue-50 dark:hover:bg-blue-700"
            target="_blank"
            rel="noopener noreferrer"
          >
            Register Interest
          </a>
        </div>
      </section>
    </main>
  )
}