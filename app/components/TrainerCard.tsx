// Description: This file contains the trainer card component.
import Image from 'next/image';
import Link from 'next/link';
import { getTagBadgeClasses } from '@/lib/tagUtils';

interface TrainerCardProps {
  id: string;
  name: string;
  title: string;
  organization: string;
  image: string;
  tags?: string[];
  content?: string;
  showLink?: boolean;
}

export default function TrainerCard({
  id,
  name,
  title,
  organization,
  image,
  tags,
  content,
  showLink = true
}: TrainerCardProps) {
  return (
    <div className="flex flex-col">
      <div className="relative w-full h-80 rounded-2xl overflow-hidden shadow-xl dark:shadow-gray-800 mb-8">
        <Image
          src={image}
          alt={name}
          fill
          style={{ objectFit: 'cover' }}
          className="transition-transform duration-500 hover:scale-105"
          priority
        />
      </div>
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{name}</h3>
      <p className="text-blue-600 dark:text-blue-400 font-medium mb-4">
        <span dangerouslySetInnerHTML={{ __html: title }} />
        {title && organization && ', '}
        <span dangerouslySetInnerHTML={{ __html: organization }} />
      </p>
      
      {tags && tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
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

      {content && (
        <div 
          className="prose prose-blue dark:prose-invert text-gray-900 dark:text-gray-100 text-justify [&>p]:mb-4 max-w-none"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      )}
      
      {showLink && (
        <Link
          href={`/trainers/${id}`}
          className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium hover:text-blue-800 dark:hover:text-blue-300 mt-auto"
        >
          Read more
          <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      )}
    </div>
  );
}