import Link from 'next/link';
import type { PostMetadata } from '@/lib/posts';

interface PostCardProps {
  post: PostMetadata;
}

export default function PostCard({ post }: PostCardProps) {
  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <article className="mb-8 pb-8 border-b border-gray-200 dark:border-gray-800 last:border-0">
      <Link href={`/posts/${post.slug}`} className="group">
        <h2 className="text-2xl font-bold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {post.title}
        </h2>
      </Link>

      <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-3">
        <time dateTime={post.date}>{formattedDate}</time>
        {post.author && <span>by {post.author}</span>}
      </div>

      {post.excerpt && (
        <p className="text-gray-700 dark:text-gray-300 mb-3">
          {post.excerpt}
        </p>
      )}

      {post.tags && post.tags.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-xs rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </article>
  );
}
