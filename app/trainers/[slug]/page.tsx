import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getAllContentIds, getContentData } from '@/lib/content';
import { getTagBadgeClasses } from '@/lib/tagUtils';

export const dynamicParams = true;

export async function generateStaticParams() {
  const paths = getAllContentIds('trainers');
  return paths;
}

export default async function TrainerPage({ params }: { params: { slug: string } }) {
  try {
    const trainer = await getContentData('trainers', params.slug);

    return (
      <main className="flex min-h-screen flex-col items-center justify-between pt-24 px-6 bg-white dark:bg-black">
        <div className="max-w-4xl w-full">
          <div className="flex flex-col items-center mb-12">
            {trainer.image && (
              <div className="relative w-64 h-64 rounded-2xl overflow-hidden shadow-xl dark:shadow-gray-800 mb-8">
                <Image
                  src={trainer.image}
                  alt={trainer.name}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="transition-transform duration-500"
                  priority
                />
              </div>
            )}
            
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2 text-center">
              {trainer.name}
            </h1>
            
            <p className="text-xl text-blue-600 dark:text-blue-400 mb-4 text-center">
              <span dangerouslySetInnerHTML={{ __html: trainer.title || '' }} />
              {trainer.title && trainer.organization && ', '}
              <span dangerouslySetInnerHTML={{ __html: trainer.organization || '' }} />
            </p>

            {trainer.tags && trainer.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 justify-center mb-8">
                {trainer.tags.map((tag: string) => (
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
            dangerouslySetInnerHTML={{ __html: trainer.contentHtml || '' }} 
          />

          <div className="mt-12 flex justify-center">
            <Link
              href="/trainers"
              className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Trainers
            </Link>
          </div>
        </div>
      </main>
    );
  } catch (error) {
    notFound();
  }
}