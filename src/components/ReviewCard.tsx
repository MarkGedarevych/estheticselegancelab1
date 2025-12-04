import { Review } from "@/data/reviews";

interface ReviewCardProps {
  review: Review;
  index?: number;
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-5 h-5 ${
            i < rating ? "text-amber-400" : "text-gray-200"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function ReviewCard({ review, index = 0 }: ReviewCardProps) {
  return (
    <div
      className="card opacity-0 animate-fade-in-up"
      style={{ animationDelay: `${index * 100}ms`, animationFillMode: "forwards" }}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div>
          <div className="flex items-center gap-3 mb-2">
            {/* Avatar */}
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] flex items-center justify-center text-white font-medium text-lg">
              {review.name.charAt(0)}
            </div>
            <div>
              <h4 className="font-medium text-[var(--color-text-main)]">
                {review.name}
              </h4>
              <p className="text-sm text-[var(--color-text-muted)]">
                {review.location}
              </p>
            </div>
          </div>
        </div>
        {review.verified && (
          <span className="inline-flex items-center gap-1 text-xs text-[var(--color-support-dark)] bg-[var(--color-support)]/30 px-2 py-1 rounded-full">
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Verified
          </span>
        )}
      </div>

      {/* Rating & Service */}
      <div className="flex items-center gap-3 mb-4">
        <StarRating rating={review.rating} />
        <span className="text-sm text-[var(--color-text-muted)]">•</span>
        <span className="text-sm text-[var(--color-support-dark)] font-medium">
          {review.service}
        </span>
      </div>

      {/* Review Text */}
      <p className="text-[var(--color-text-muted)] leading-relaxed mb-4">
        &ldquo;{review.text}&rdquo;
      </p>

      {/* Date */}
      <p className="text-sm text-[var(--color-text-muted)]/60">
        {new Date(review.date).toLocaleDateString("en-US", {
          month: "long",
          day: "numeric",
          year: "numeric"
        })}
      </p>
    </div>
  );
}

