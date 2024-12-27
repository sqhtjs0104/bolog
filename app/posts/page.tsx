export const metadata = {
  title: "POSTS",
};

import { Post } from '@prisma/client';

export default async function Posts() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  const res = await fetch(`${baseUrl}/api/posts`, { cache: 'no-store' })
  const posts: Post[] = await res.json();

  return (
    <div>
      <h1>Blog Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}