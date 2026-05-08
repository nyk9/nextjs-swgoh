import fs from "fs";
import path from "path";
import matter from "gray-matter";

const GUIDES_DIR = path.join(process.cwd(), "content/guides");

export type GuideFrontmatter = {
  title: string;
  description: string;
  date: string;
  tags?: string[];
};

export type GuideListItem = GuideFrontmatter & { slug: string };

export function getGuide(slug: string): {
  frontmatter: GuideFrontmatter;
  content: string;
} {
  const file = fs.readFileSync(path.join(GUIDES_DIR, `${slug}.mdx`), "utf-8");
  const { data, content } = matter(file);
  return { frontmatter: data as GuideFrontmatter, content };
}

export function getAllGuides(): GuideListItem[] {
  if (!fs.existsSync(GUIDES_DIR)) return [];
  return fs
    .readdirSync(GUIDES_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => {
      const slug = f.replace(/\.mdx$/, "");
      const { frontmatter } = getGuide(slug);
      return { slug, ...frontmatter };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getAllGuideSlugs(): string[] {
  if (!fs.existsSync(GUIDES_DIR)) return [];
  return fs
    .readdirSync(GUIDES_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}
