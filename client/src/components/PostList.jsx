import { useState, useEffect } from 'react';

export default function PostList() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      setLoading(true);
      const response = await fetch('http://localhost:5000/api/posts');
      if (!response.ok) {
        throw new Error('Failed to fetch posts');
      }
      const data = await response.json();
      setPosts(data);
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[200px]" role="status" aria-label="Loading posts">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-lg p-4">
        <p className="text-red-600">Error: {error}</p>
        <button
          onClick={fetchPosts}
          className="mt-2 text-blue-600 hover:text-blue-800 underline"
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold mb-4">Posts</h2>
      {posts.length === 0 ? (
        <p className="text-gray-500">No posts found</p>
      ) : (
        <div className="grid gap-4">
          {posts.map((post) => (
            <div
              key={post._id}
              className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
              <p className="text-gray-600 mb-2">{post.content}</p>
              <div className="flex items-center justify-between text-sm text-gray-500">
                <span>By: {post.author?.username || 'Unknown'}</span>
                <span>{new Date(post.createdAt).toLocaleDateString()}</span>
              </div>
              {post.category && (
                <span className="inline-block mt-2 px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                  {post.category}
                </span>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
