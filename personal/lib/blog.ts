import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import remarkHtml from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'content/posts');

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  tags: string[];
  category: string;
  excerpt?: string;
  content: string;
}

export interface BlogPostMetadata {
  slug: string;
  title: string;
  date: string;
  tags: string[];
  category: string;
  excerpt?: string;
}

export function getAllBlogPosts(): BlogPostMetadata[] {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '');
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const matterResult = matter(fileContents);

      return {
        slug,
        title: matterResult.data.title,
        date: matterResult.data.date,
        tags: matterResult.data.tags || [],
        category: matterResult.data.category || 'Uncategorized',
        excerpt: matterResult.data.excerpt,
      };
    });

  // Sort posts by date (newest first)
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    // Convert markdown to HTML
    const processedContent = await remark()
      .use(remarkHtml)
      .process(matterResult.content);
    const contentHtml = processedContent.toString();

    return {
      slug,
      title: matterResult.data.title,
      date: matterResult.data.date,
      tags: matterResult.data.tags || [],
      category: matterResult.data.category || 'Uncategorized',
      excerpt: matterResult.data.excerpt,
      content: contentHtml,
    };
  } catch {
    return null;
  }
}

export function getAllTags(): string[] {
  const posts = getAllBlogPosts();
  const allTags = posts.flatMap(post => post.tags);
  return [...new Set(allTags)].sort();
}

export function getAllCategories(): string[] {
  const posts = getAllBlogPosts();
  const allCategories = posts.map(post => post.category);
  return [...new Set(allCategories)].sort();
}

export function getPostsByTag(tag: string): BlogPostMetadata[] {
  const posts = getAllBlogPosts();
  return posts.filter(post => post.tags.includes(tag));
}

export function getPostsByCategory(category: string): BlogPostMetadata[] {
  const posts = getAllBlogPosts();
  return posts.filter(post => post.category === category);
}