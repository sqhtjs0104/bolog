"use client";

import { Post } from '@prisma/client';
// import Button from '../components/Button';
import Link from 'next/link';
import Toggle from '../components/Toggle';
import ToggleButton from '../components/ToggleButton';
import { useEffect, useState } from 'react';
import Loading from '../components/Loading';
import useBreakpoint from '../hooks/use-breakpoint';
import PostItem from './PostItem';
import Tooltip from '../components/Tooltip';
import { classNames } from '../utils/custom';

export default function Posts() {
  const bp = useBreakpoint();

  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setIsLoading] = useState(true);
  const [viewMode, setViewMode] = useState<"list" | "card">("list");

  const gridTemplateColumns = `grid-cols-${bp === "xl" ? 3 : bp === "lg" ? 3 : bp === "md" ? 2 : 1}`;

  const getPosts = () => {
    fetch('/api/posts')
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className='pt-2 sm:pt-6 flex flex-col gap-2'>
      <ul className='flex gap-2'>

      </ul>

      <div>
        <div className='flex justify-between'>
          <div className='flex gap-2'>
            <Toggle
              value={viewMode}
              onChange={(v: string | number | boolean) => setViewMode(v as "list" | "card")}
            >
              <ToggleButton value={"list"}>
                <Tooltip title="리스트형 보기">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                  </svg>
                </Tooltip>
              </ToggleButton>
              <ToggleButton value={"card"}>
                <Tooltip title="카드형 보기">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" />
                  </svg>
                </Tooltip>
              </ToggleButton>
            </Toggle>
          </div>
          <div className='flex gap-2'>
            <Link href={"/posts/new"}>
              {/* <Button
                icon={(
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                  </svg>
                )}
              >
                New Post
              </Button> */}
            </Link>
          </div>
        </div>

        <div
          className={classNames(
            viewMode === "card"
              ? `grid ${gridTemplateColumns} gap-6`
              : `flex flex-col gap-4`,
            "py-2 mt-6 px-1"
          )}
        >
          {loading && <Loading />}

          {posts && posts.map((post, i) => <PostItem key={i} post={post} mode={viewMode} />)}
        </div>
      </div>
    </div>
  );
}