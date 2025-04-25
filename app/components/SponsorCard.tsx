// Description: This file contains the sponsor card component.
import Image from 'next/image';

interface SponsorCardProps {
  id: string;
  name: string;
  description: string;
  image: string;
  url?: string;
}

export default function SponsorCard({
  id,
  name,
  description,
  image,
  url
}: SponsorCardProps) {
  const content = (
    <div className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg h-full transition-transform hover:scale-105">
      <div className="relative h-48 bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
        <Image
          src={image}
          alt={name}
          width={200}
          height={150}
          style={{ maxWidth: '80%', maxHeight: '80%', objectFit: 'contain' }}
          className="dark:brightness-110"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
          <span dangerouslySetInnerHTML={{ __html: name }} />
        </h3>
        <p className="text-gray-600 dark:text-gray-300">
          <span dangerouslySetInnerHTML={{ __html: description }} />
        </p>
      </div>
    </div>
  );
  
  if (url) {
    return <a href={url} target="_blank" rel="noopener noreferrer" className="block h-full">{content}</a>;
  }
  
  return <div className="h-full">{content}</div>;
}