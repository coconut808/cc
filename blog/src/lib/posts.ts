import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'posts');

export interface PostMetadata {
  slug: string;
  title: string;
  date: string;
  excerpt?: string;
  author?: string;
  tags?: string[];
}

export interface Post extends PostMetadata {
  content: string;
}

/**
 * Get all post slugs from the posts directory
 */
export function getAllPostSlugs(): string[] {
  try {
    const fileNames = fs.readdirSync(postsDirectory);
    return fileNames
      .filter((fileName) => fileName.endsWith('.md'))
      .map((fileName) => fileName.replace(/\.md$/, ''));
  } catch (error) {
    // Return empty array if posts directory doesn't exist
    return [];
  }
}

/**
 * Get metadata for all posts, sorted by date (newest first)
 */
export function getAllPosts(): PostMetadata[] {
  const slugs = getAllPostSlugs();
  const posts = slugs.map((slug) => getPostMetadata(slug));

  // Sort posts by date in descending order
  return posts.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

/**
 * Get metadata for a single post by slug
 */
export function getPostMetadata(slug: string): PostMetadata {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data } = matter(fileContents);

  return {
    slug,
    title: data.title || 'Untitled',
    date: data.date || new Date().toISOString(),
    excerpt: data.excerpt,
    author: data.author,
    tags: data.tags,
  };
}

/**
 * Get full post data including content by slug
 */
export function getPostBySlug(slug: string): Post {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    slug,
    title: data.title || 'Untitled',
    date: data.date || new Date().toISOString(),
    excerpt: data.excerpt,
    author: data.author,
    tags: data.tags,
    content,
  };
}
