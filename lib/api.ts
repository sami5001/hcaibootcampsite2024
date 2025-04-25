import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

// Directories
const speakersDirectory = path.join(process.cwd(), 'content/speakers');
const trainersDirectory = path.join(process.cwd(), 'content/trainers');
const facilitatorsDirectory = path.join(process.cwd(), 'content/facilitators');
const sponsorsDirectory = path.join(process.cwd(), 'content/sponsors');
const bootcampDirectory = path.join(process.cwd(), 'content/bootcamp');

// Type definitions
export type PersonData = {
  slug: string;
  name: string;
  role: string;
  organization: string;
  location: string;
  image: string;
  tags?: string[];
  content: string;
  contentHtml: string;
};

export type SponsorData = {
  slug: string;
  name: string;
  description: string;
  image: string;
  website?: string;
  content: string;
  contentHtml: string;
};

export type BootcampData = {
  slug: string;
  title: string;
  description: string;
  date: string;
  venue: string;
  content: string;
  contentHtml: string;
};

// Helper function to get directory based on content type
function getDirectory(contentType: string): string {
  switch (contentType) {
    case 'speakers':
      return speakersDirectory;
    case 'trainers':
      return trainersDirectory;
    case 'facilitators':
      return facilitatorsDirectory;
    case 'sponsors':
      return sponsorsDirectory;
    case 'bootcamp':
      return bootcampDirectory;
    default:
      throw new Error(`Unknown content type: ${contentType}`);
  }
}

// Get all slugs for a content type
export function getAllSlugs(contentType: string) {
  const directory = getDirectory(contentType);
  const fileNames = fs.readdirSync(directory);
  return fileNames.map((fileName) => {
    return {
      params: {
        slug: fileName.replace(/\.md$/, ''),
      },
    };
  });
}

// Get all data entries for a content type
export async function getAllData(contentType: string) {
  const directory = getDirectory(contentType);
  const fileNames = fs.readdirSync(directory);
  const allData = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, '');
    const fullPath = path.join(directory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);
    
    return {
      slug,
      ...(matterResult.data as any),
      content: matterResult.content,
    };
  });
  
  return allData;
}

// Get data for a specific slug
export async function getDataBySlug(contentType: string, slug: string): Promise<any> {
  const directory = getDirectory(contentType);
  const fullPath = path.join(directory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const matterResult = matter(fileContents);
  
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();
  
  return {
    slug,
    ...(matterResult.data as any),
    content: matterResult.content,
    contentHtml,
  };
}