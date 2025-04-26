import { notFound } from 'next/navigation';
import Image from 'next/image';
import { getAllContentIds, getContentData } from '@/lib/content';
import { getTagBadgeClasses } from '@/lib/tagUtils';

export const dynamicParams = true;

export async function generateStaticParams() {
  const paths = getAllContentIds('lectures');
  return paths;
}

export default async function LecturePage({ params }: { params: { slug: string } }) {
  try {
    const lecture = await getContentData('lectures', params.slug);

    return (
      <main className="flex min-h-screen flex-col items-center justify-between bg-white dark:bg-black">
        {/* Hero Section with Background Image */}
        <div className="relative w-full h-96">
          <div className="absolute inset-0 z-0">
            <Image
              src={lecture.image as string || '/images/lectures/default.jpg'}
              alt={lecture.title as string}
              fill
              style={{ objectFit: 'cover' }}
              className="brightness-50"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 z-10"></div>
          <div className="relative z-20 h-full flex flex-col justify-end p-6 sm:p-10 max-w-7xl mx-auto">
            <h1 className="text-3xl sm:text-5xl font-bold text-white mb-4">
              {lecture.title}
            </h1>
            <p className="text-xl text-white mb-2">
              {lecture.presenterName}
            </p>
            <p className="text-white opacity-80">
              {lecture.presenterTitle}
              {lecture.presenterOrg && (
                <>
                  <br/>
                  {lecture.presenterOrg}
                </>
              )}
            </p>
            
            {/* Add tags display */}
            {lecture.tags && (lecture.tags as string[]).length > 0 && (
              <div className="flex flex-wrap gap-2 mt-4">
                {(lecture.tags as string[]).map((tag) => (
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
        </div>

        {/* Content Section */}
        <div className="max-w-4xl w-full py-16 px-6">
          {/* Video Player */}
          {lecture.youtubeVideoUrl ? (
            <div className="mb-12">
              <div className="aspect-w-16 aspect-h-9 w-full">
                <iframe
                  src={`https://www.youtube.com/embed/${getYouTubeID(lecture.youtubeVideoUrl as string)}`}
                  title={`${lecture.title} Video`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full rounded-lg shadow-lg"
                ></iframe>
              </div>
            </div>
          ) : (
            <div className="mb-12 p-8 bg-gray-100 dark:bg-gray-800 rounded-lg text-center">
              <p className="text-gray-600 dark:text-gray-300">Video will be available soon.</p>
            </div>
          )}

          {/* Lecture Content */}
          <div 
            className="prose prose-blue dark:prose-invert max-w-none text-gray-900 dark:text-gray-100 [&>p]:mb-4"
            dangerouslySetInnerHTML={{ __html: lecture.contentHtml || '' }} 
          />
        </div>
      </main>
    );
  } catch (error) {
    console.error("Error loading lecture:", error);
    notFound();
  }
}

// Helper function to extract YouTube video ID from URL
function getYouTubeID(url: string): string {
  // Handle different YouTube URL formats
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const match = url.match(regExp);
  
  return (match && match[2].length === 11) ? match[2] : '';
}