// Description: This file contains functions to read content from markdown files.
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import breaks from 'remark-breaks';

const contentDirectory = path.join(process.cwd(), 'app/content');

interface ContentData {
  id: string;
  name: string;
  title?: string;
  organization?: string;
  image?: string;
  type?: string;
  tags?: string[];
  content: string;
  contentHtml?: string;
  order?: number;
  featured?: boolean;
}

export async function getSortedContentData(folder: string): Promise<ContentData[]> {
  // Get folder paths
  const folderPath = path.join(contentDirectory, folder);
  
  // Ensure the directory exists
  if (!fs.existsSync(folderPath)) {
    console.warn(`Directory does not exist: ${folderPath}`);
    return [];
  }
  
  // Get markdown files in the folder
  const fileNames = fs.readdirSync(folderPath);
  const allContentData = await Promise.all(fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map(async fileName => {
      // Remove ".md" from file name to get id
      const id = fileName.replace(/\.md$/, '');

      // Read markdown file as string
      const fullPath = path.join(folderPath, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');

      // Use gray-matter to parse the post metadata section
      const matterResult = matter(fileContents);

      // Process the markdown content
      const processedContent = await remark()
        .use(breaks)
        .use(html, { sanitize: false })
        .process(matterResult.content);

      // Combine the data with the id and processed content
      return {
        id,
        ...matterResult.data,
        content: processedContent.toString()
      } as ContentData;
    }));

  // Sort content by order if available, otherwise by name
  return allContentData.sort((a, b) => {
    if (a.order && b.order) {
      return a.order - b.order;
    }
    if (a.name && b.name) {
      return a.name.localeCompare(b.name);
    }
    return 0;
  });
}

export function getAllContentIds(folder: string) {
  const folderPath = path.join(contentDirectory, folder);
  
  // Ensure the directory exists
  if (!fs.existsSync(folderPath)) {
    return [];
  }
  
  const fileNames = fs.readdirSync(folderPath);

  return fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map(fileName => {
      return {
        params: {
          id: fileName.replace(/\.md$/, '')
        }
      };
    });
}

export async function getContentData(folder: string, id: string): Promise<ContentData> {
  const folderPath = path.join(contentDirectory, folder);
  const fullPath = path.join(folderPath, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(breaks)  // Add support for line breaks
    .use(html, { sanitize: false })  // Don't sanitize HTML to preserve line breaks
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    ...matterResult.data,
    content: matterResult.content
  } as ContentData;
}

export async function getContentByType(folder: string, type: string): Promise<ContentData[]> {
  const allContent = await getSortedContentData(folder);
  return allContent.filter(item => item.type === type);
}

export async function getFeaturedContent(folder: string): Promise<ContentData[]> {
  const allContent = await getSortedContentData(folder);
  return allContent.filter(item => item.featured === true);
}