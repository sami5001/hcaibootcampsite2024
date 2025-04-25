import { notFound } from 'next/navigation';
import { getAllContentIds, getContentData } from '@/lib/content';
import { getTagBadgeClasses } from '@/lib/tagUtils';

export const dynamicParams = true;

export async function generateStaticParams() {
  const paths = getAllContentIds('bootcamp');
  return paths;
}

export default async function BootcampPage({ params }: { params: { slug: string } }) {
  try {
    const content = await getContentData('bootcamp', params.slug);

    return (
      <main className="flex min-h-screen flex-col items-center justify-between pt-24 px-6 bg-white dark:bg-black">
        <div className="max-w-4xl w-full">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            {content.title}
          </h1>

          {content.tags && content.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 justify-center mb-8">
              {content.tags.map((tag: string) => (
                <span 
                  key={tag} 
                  className={getTagBadgeClasses(tag)}
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          <div 
            className="prose prose-blue dark:prose-invert max-w-none text-gray-900 dark:text-gray-100 text-justify [&>p]:mb-4"
            dangerouslySetInnerHTML={{ __html: content.contentHtml || '' }} 
          />
        </div>
      </main>
    );
  } catch (error) {
    notFound();
  }
}