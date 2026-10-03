import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { remark } from "remark"
import remarkHtml from "remark-html"

const postsDirectory = path.join(process.cwd(), "content/posts")

export interface PostMetadata {
  slug: string
  title: string
  date: string
}

export interface Post extends PostMetadata {
  content: string
}

export function formatDate(date: string): string {
  return new Date(`${date}T00:00:00`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

export function getAllPosts(): PostMetadata[] {
  return fs
    .readdirSync(postsDirectory)
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => {
      const { data } = matter(fs.readFileSync(path.join(postsDirectory, fileName), "utf8"))
      return { slug: fileName.replace(/\.md$/, ""), title: data.title, date: data.date }
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1))
}

export async function getPost(slug: string): Promise<Post | null> {
  const fullPath = path.join(postsDirectory, `${slug}.md`)
  if (!fs.existsSync(fullPath)) return null

  const { data, content } = matter(fs.readFileSync(fullPath, "utf8"))
  const html = await remark().use(remarkHtml).process(content)

  return { slug, title: data.title, date: data.date, content: html.toString() }
}
