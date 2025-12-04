import Link from "next/link";
import { BlogPost } from "@/data/blog";

interface BlogCardProps {
  post: BlogPost;
  index?: number;
}

export default function BlogCard({ post, index = 0 }: BlogCardProps) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group card flex flex-col h-full opacity-0 animate-fade-in-up"
      style={{ animationDelay: `${index * 100}ms`, animationFillMode: "forwards" }}
    >
      {/* Image Placeholder */}
      <div className="relative h-52 rounded-xl overflow-hidden mb-6 bg-gradient-to-br from-[var(--color-support)]/30 to-[var(--color-primary-light)]">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-14 h-14 rounded-full bg-white/60 flex items-center justify-center">
            <svg
              className="w-7 h-7 text-[var(--color-support-dark)]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
              />
            </svg>
          </div>
        </div>
        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="inline-block bg-white/90 backdrop-blur-sm text-[var(--color-text-main)] text-xs font-medium px-3 py-1 rounded-full">
            {post.category}
          </span>
        </div>
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-[var(--color-text-main)]/0 group-hover:bg-[var(--color-text-main)]/10 transition-colors duration-300" />
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col">
        {/* Meta */}
        <div className="flex items-center gap-3 text-sm text-[var(--color-text-muted)] mb-3">
          <span>
            {new Date(post.publishDate).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric"
            })}
          </span>
          <span>•</span>
          <span>{post.readTime}</span>
        </div>

        <h3 className="font-[family-name:var(--font-heading)] text-xl font-medium text-[var(--color-text-main)] mb-3 group-hover:text-[var(--color-support-dark)] transition-colors line-clamp-2">
          {post.title}
        </h3>
        
        <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4 flex-1 line-clamp-3">
          {post.excerpt}
        </p>

        {/* Author */}
        <div className="flex items-center gap-3 pt-4 border-t border-[var(--color-border-subtle)]">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] flex items-center justify-center text-white text-xs font-medium">
            K
          </div>
          <div className="text-sm">
            <span className="text-[var(--color-text-main)] font-medium">{post.author}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

