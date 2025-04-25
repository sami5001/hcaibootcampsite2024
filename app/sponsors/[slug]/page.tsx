import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getAllContentIds, getContentData } from '@/lib/content';
import { getTagBadgeClasses } from '@/lib/tagUtils';

export const dynamicParams = true;

export async function generateStaticParams() {
  const paths = getAllContentIds('sponsors');
  return paths;
}

interface SponsorData {
  id: string;
  name: string;
  image?: string;
  url?: string;
  website?: string;
  tags?: string[];
  contentHtml: string;
}

export default async function SponsorPage({ params }: { params: { slug: string } }) {
  try {
    const sponsor = await getContentData('sponsors', params.slug) as SponsorData;

    return (
      <main className="flex min-h-screen flex-col items-center justify-between pt-24 px-6 bg-white dark:bg-black">
        <div className="max-w-4xl w-full">
          <div className="flex flex-col items-center mb-12">
            {sponsor.image && (
              <div className="relative w-64 h-64 overflow-hidden mb-8 shadow-xl dark:shadow-gray-800 rounded-lg">
                <Image
                  src={sponsor.image}
                  alt={sponsor.name}
                  fill
                  style={{ objectFit: 'contain' }}
                  className="transition-transform duration-500 dark:brightness-110"
                  priority
                />
              </div>
            )}
            
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2 text-center">
              {sponsor.name}
            </h1>
            
            {(sponsor.url || sponsor.website) && (
              <a 
                href={sponsor.url || sponsor.website}
                className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 mb-4"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Website
              </a>
            )}

            {sponsor.tags && sponsor.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 justify-center mb-8">
                {sponsor.tags.map((tag: string) => (
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

          <div 
            className="prose prose-blue dark:prose-invert max-w-none text-gray-900 dark:text-gray-100 text-justify [&>p]:mb-4"
            dangerouslySetInnerHTML={{ __html: sponsor.contentHtml }} 
          />

          <div className="mt-12 flex justify-center">
            <Link
              href="/sponsors"
              className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Sponsors
            </Link>
          </div>
        </div>
      </main>
    );
  } catch (error) {
    notFound();
  }
}