import { getAllPosts } from '@/lib/posts';
import PostCard from '@/components/PostCard';

export default function Home() {
  const posts = getAllPosts();

  if (posts.length === 0) {
    return (
      <div className="text-center py-16">
        <h2 className="text-2xl font-bold mb-4">No posts yet</h2>
        <p className="text-gray-600 dark:text-gray-400">
          Create your first post by adding a markdown file to the <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded">posts/</code> directory.
        </p>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-8">Recent Posts</h2>
      <div>
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
