"use client";

import Link from "next/link";
import { track } from "@vercel/analytics";

interface GuideListItemProps {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags?: string[];
}

export default function GuideListItem({
  slug,
  title,
  description,
  date,
  tags,
}: GuideListItemProps) {
  return (
    <Link
      href={`/guides/${slug}`}
      onClick={() => track("guide_clicked", { slug })}
      className="block p-5 rounded-lg border border-[hsl(var(--border))] bg-[hsl(var(--card))] hover:border-[hsl(var(--primary))] hover:bg-[hsl(var(--secondary))] transition-colors group"
    >
      <div className="flex flex-wrap gap-2 mb-2">
        {tags?.map((tag) => (
          <span
            key={tag}
            className="text-xs px-2 py-0.5 rounded-full bg-[hsl(var(--secondary))] text-[hsl(var(--muted-foreground))] group-hover:bg-[hsl(var(--muted))]"
          >
            {tag}
          </span>
        ))}
      </div>
      <h2 className="text-lg font-semibold text-[hsl(var(--foreground))] mb-1 group-hover:text-[hsl(var(--primary))] transition-colors">
        {title}
      </h2>
      <p className="text-sm text-[hsl(var(--muted-foreground))] line-clamp-2">
        {description}
      </p>
      <time className="text-xs text-[hsl(var(--muted-foreground))] mt-2 block">
        {new Date(date).toLocaleDateString("ja-JP", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </time>
    </Link>
  );
}
