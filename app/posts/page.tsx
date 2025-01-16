export const metadata = {
  title: "POSTS",
};

import { Post } from '@prisma/client';
import Button from '../components/Button';

export default async function Posts() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  const res = await fetch(`${baseUrl}/api/posts`, { cache: 'no-store' })
  // const posts: Post[] = await res.json();

  const onNewPostClick = () => {

  }

  return (
    <div className='pt-2 sm:pt-6 flex flex-col gap-2'>
      <ul className='flex gap-2'>

      </ul>

      <div>
        <div className='flex justify-end'>
          <Button
            icon={(
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
              </svg>
            )}
          >
            New Post
          </Button>
        </div>

        <div className='grid'>

        </div>
      </div>
    </div>
  );
}