// Combined export of all enhanced blog posts
import { enhancedBlogPosts, EnhancedBlogPost, BlogImage, BlogFAQ, BlogSection } from './blog-posts';
import { additionalBlogPosts } from './blog-posts-extended';
import { moreBlogPosts } from './blog-posts-more';
import { additionalBlogs } from './blog-posts-additional';

// Combine all blog posts (10 total)
export const allEnhancedBlogPosts: EnhancedBlogPost[] = [
  ...enhancedBlogPosts,        // 2 posts: facials, dermaplaning
  ...additionalBlogs,          // 4 posts: chemical peels, microneedling, lash lift, skincare routine
  ...additionalBlogPosts,      // 2 posts: hyperpigmentation, acne
  ...moreBlogPosts             // 2 posts: anti-aging, event prep
];

// Re-export types
export type { EnhancedBlogPost, BlogImage, BlogFAQ, BlogSection };

// Helper functions
export function getEnhancedBlogBySlug(slug: string): EnhancedBlogPost | undefined {
  return allEnhancedBlogPosts.find(post => post.slug === slug);
}

export function getAllEnhancedBlogSlugs(): string[] {
  return allEnhancedBlogPosts.map(post => post.slug);
}

export function getRelatedPosts(currentSlug: string, limit: number = 3): EnhancedBlogPost[] {
  const currentPost = getEnhancedBlogBySlug(currentSlug);
  if (!currentPost) return [];
  
  // Find posts with matching tags or category
  return allEnhancedBlogPosts
    .filter(post => post.slug !== currentSlug)
    .map(post => {
      const matchingTags = post.tags.filter(tag => currentPost.tags.includes(tag));
      const categoryMatch = post.category === currentPost.category ? 2 : 0;
      return { post, score: matchingTags.length + categoryMatch };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(item => item.post);
}

// Calculate average rating (for review schema)
export const blogStats = {
  totalPosts: allEnhancedBlogPosts.length,
  categories: [...new Set(allEnhancedBlogPosts.map(p => p.category))],
  allTags: [...new Set(allEnhancedBlogPosts.flatMap(p => p.tags))]
};

