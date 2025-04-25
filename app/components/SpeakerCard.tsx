import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { getTagBadgeClasses } from '@/lib/tagUtils';

interface SpeakerCardProps {
  id: string;
  name: string;
  title?: string;
  organization?: string;
  image?: string;
  tags?: string[];
  content?: string;
}

export default function SpeakerCard({ 
  id, 
  name, 
  title, 
  organization, 
  image, 
  tags,
  content
}: SpeakerCardProps) {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg transition-all hover:shadow-xl">
      <div className="p-6">
        {image && (
          <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden mb-6">
            <Image
              src={image}
              alt={name}
              fill
              style={{ objectFit: 'cover' }}
              className="transition-transform duration-500 hover:scale-110"
            />
          </div>
        )}
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{name}</h3>
        {title && organization && (
          <p className="text-blue-600 dark:text-blue-400 font-medium mb-4">
            <span dangerouslySetInnerHTML={{ __html: title }} />
            {', '}
            <span dangerouslySetInnerHTML={{ __html: organization }} />
          </p>
        )}
        {title && !organization && (
          <p className="text-blue-600 dark:text-blue-400 font-medium mb-4">
            <span dangerouslySetInnerHTML={{ __html: title }} />
          </p>
        )}
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
        <Link 
          href={`/speakers/${id}`}
          className="inline-block mt-4 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium transition-colors"
        >
          View Profile →
        </Link>
      </div>
    </div>
  );
}