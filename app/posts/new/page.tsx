"use client";

import Button from '@/app/components/Button';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

export default function CreatePost() {
  const router = useRouter();

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [loading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsLoading(true);

    await fetch('/api/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, content }),
    })
      .then((response) => {
        if (response.ok) router.push('/posts');
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='flex flex-col gap-2 p-3 justify-between flex-1'
    >
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className='px-3 py-2 border border-gray-400 rounded-md'
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className='flex-1 px-3 py-2 border border-gray-400 rounded-md resize-none'
      ></textarea>
      <Button type="submit" disabled={loading}>
        {loading ? "Loading..." : "Create Post"}
      </Button>
    </form>
  );
}
