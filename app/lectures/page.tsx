import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { getSortedContentData } from '../../lib/content';
import { getTagBadgeClasses } from '@/lib/tagUtils';

interface LectureProps {
  id: string;
  title: string;
  presenterName: string;
  presenterTitle: string;
  presenterOrg: string;
  imageUrl: string;
  tags?: string[];
}

const Lecture: React.FC<LectureProps> = ({ 
  id,
  title, 
  presenterName, 
  presenterTitle,
  presenterOrg,
  imageUrl,
  tags
}) => {
  return (
    <Link href={`/lectures/${id}`} className="group">
      <div className="flex flex-col">
        <div className="relative h-64 w-full mb-4 rounded-xl overflow-hidden shadow-lg">
          <Image
            src={imageUrl}
            alt={title}
            fill
            style={{ objectFit: 'cover' }}
            className="transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
        </div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{title}</h3>
        <p className="text-blue-600 dark:text-blue-400 font-medium">
          {presenterName}
        </p>
        <p className="text-gray-600 dark:text-gray-400 text-sm">
          {presenterTitle}
          {presenterOrg && (
            <>
              <br/>
              {presenterOrg}
            </>
          )}
        </p>
        
        {/* Add tags display */}
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-3">
            {tags.map((tag) => (
              <span 
                key={tag} 
                className={getTagBadgeClasses(tag)}
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </Link>
  );
};

export default async function Lectures() {
  // Fetch lecture data from markdown files
  const lecturesData = await getSortedContentData('lectures');
  
  // Split the lectures into rows for display (50% in first row, rest in second)
  const splitIndex = Math.ceil(lecturesData.length / 2);
  const firstRow = lecturesData.slice(0, splitIndex);
  const secondRow = lecturesData.slice(splitIndex);

  return (
    <main className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-900 dark:to-black py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">Lectures and Talks</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Learn from experts across various disciplines in healthcare, AI, and innovation
          </p>
        </div>
      </section>
      
      {/* Lectures Section - First Row */}
      <section className="w-full py-20 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-16 pl-6">Lectures and Talks</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {firstRow.map((lecture) => (
              <Lecture 
                key={lecture.id}
                id={lecture.id}
                title={lecture.title as string}
                presenterName={lecture.presenterName as string}
                presenterTitle={lecture.presenterTitle as string}
                presenterOrg={lecture.presenterOrg as string}
                imageUrl={lecture.imageUrl as string}
                tags={lecture.tags as string[]}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Lectures Section - Second Row */}
      {secondRow.length > 0 && (
        <section className="w-full py-16 bg-white dark:bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
              {secondRow.map((lecture) => (
                <Lecture 
                  key={lecture.id}
                  id={lecture.id}
                  title={lecture.title as string}
                  presenterName={lecture.presenterName as string}
                  presenterTitle={lecture.presenterTitle as string}
                  presenterOrg={lecture.presenterOrg as string}
                  imageUrl={lecture.imageUrl as string}
                  tags={lecture.tags as string[]}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Call to Action */}
      <section className="w-full py-16 bg-blue-600 dark:bg-blue-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Join Our Next Bootcamp</h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Experience these lectures and more at the upcoming Human-Centered Medical AI Design Bootcamp
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
  );
}