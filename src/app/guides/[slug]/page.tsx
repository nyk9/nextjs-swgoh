import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllGuideSlugs, getGuide } from "@/lib/guides";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllGuideSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  if (!getAllGuideSlugs().includes(slug)) return {};

  const { frontmatter } = getGuide(slug);
  return {
    title: frontmatter.title,
    description: frontmatter.description,
    alternates: { canonical: `/guides/${slug}` },
    openGraph: {
      type: "article",
      url: `/guides/${slug}`,
      title: frontmatter.title,
      description: frontmatter.description,
      publishedTime: frontmatter.date,
    },
    twitter: {
      card: "summary_large_image",
      title: frontmatter.title,
      description: frontmatter.description,
    },
  };
}

export default async function GuidePage({ params }: Props) {
  const { slug } = await params;
  if (!getAllGuideSlugs().includes(slug)) notFound();

  const { frontmatter } = getGuide(slug);
  const { default: GuideContent } = await import(
    `../../../../content/guides/${slug}.mdx`
  );

  const dateLabel = new Date(frontmatter.date).toLocaleDateString("ja-JP", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="min-h-screen">
      <div className="max-w-3xl mx-auto px-4 py-12">
        <nav className="text-sm text-[hsl(var(--muted-foreground))] mb-8 flex items-center gap-2">
          <Link href="/" className="hover:text-[hsl(var(--foreground))] transition-colors">
            ホーム
          </Link>
          <span>/</span>
          <Link href="/guides" className="hover:text-[hsl(var(--foreground))] transition-colors">
            ガイド
          </Link>
          <span>/</span>
          <span className="text-[hsl(var(--foreground))] truncate max-w-[200px]">
            {frontmatter.title}
          </span>
        </nav>

        <header className="mb-10">
          <div className="flex flex-wrap gap-2 mb-4">
            {frontmatter.tags?.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2 py-0.5 rounded-full bg-[hsl(var(--secondary))] text-[hsl(var(--muted-foreground))]"
              >
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-3xl font-bold leading-tight text-[hsl(var(--foreground))] mb-3">
            {frontmatter.title}
          </h1>
          <time className="text-sm text-[hsl(var(--muted-foreground))]">{dateLabel}</time>
        </header>

        <article className="prose prose-invert max-w-none
          prose-headings:text-[hsl(var(--foreground))] prose-headings:font-bold
          prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4 prose-h2:pb-2 prose-h2:border-b prose-h2:border-[hsl(var(--border))]
          prose-h3:text-lg prose-h3:mt-8 prose-h3:mb-3
          prose-p:text-[hsl(220,14%,72%)] prose-p:leading-relaxed
          prose-strong:text-[hsl(var(--foreground))]
          prose-a:text-[hsl(var(--primary))] prose-a:no-underline hover:prose-a:underline
          prose-table:text-sm
          prose-th:text-[hsl(var(--foreground))] prose-th:bg-[hsl(var(--secondary))] prose-th:px-4 prose-th:py-2
          prose-td:text-[hsl(220,14%,72%)] prose-td:px-4 prose-td:py-2
          prose-tr:border-b prose-tr:border-[hsl(var(--border))]
          prose-code:text-[hsl(var(--primary))] prose-code:bg-[hsl(var(--secondary))] prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:before:content-none prose-code:after:content-none
          prose-pre:bg-[hsl(var(--secondary))] prose-pre:border prose-pre:border-[hsl(var(--border))]
          prose-blockquote:border-l-[hsl(var(--primary))] prose-blockquote:text-[hsl(var(--muted-foreground))]
          prose-ul:text-[hsl(220,14%,72%)] prose-ol:text-[hsl(220,14%,72%)]
          prose-li:marker:text-[hsl(var(--primary))]
          prose-hr:border-[hsl(var(--border))]">
          <GuideContent />
        </article>

        <footer className="mt-16 pt-8 border-t border-[hsl(var(--border))]">
          <Link
            href="/guides"
            className="text-sm text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] transition-colors"
          >
            ← ガイド一覧に戻る
          </Link>
        </footer>
      </div>
    </div>
  );
}
