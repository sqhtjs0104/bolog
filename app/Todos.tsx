"use client";

import { useEffect, useState, FormEvent } from "react";
import Loading from "./components/Loading";

interface ITodo {
  id: number;
  content: string;
  completed: boolean;
  createdAt: Date;
}

export default function Todos() {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [loading, setIsLoading] = useState(true);

  const getTodos = () => {
    fetch('/api/todos')
      .then((res) => res.json())
      .then((data) => {
        setTodos(data);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getTodos();
  }, []);

  const onAddTodo = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);

    const form = event.currentTarget as HTMLFormElement;
    const formData = new FormData(form);
    const content = formData.get("content")?.toString().trim();

    if (!content) {
      setIsLoading(false);
      return;
    }

    try {
      const res = await fetch('/api/todos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ content }),
      });

      if (!res.ok) {
        throw new Error(res.statusText)
      }

      form.reset();
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
      getTodos();
    }
  }

  const onComplete = async (todo: ITodo) => {
    if (!todo) return;

    setIsLoading(true);

    try {
      const res = await fetch(`/api/todos/${todo.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          content: todo.content,
          completed: true,
        }),
      });

      if (!res.ok) {
        throw new Error(res.statusText)
      }
    } catch (error) {
      console.error(error);
    } finally {
      getTodos();
    }
  }

  return (
    <div className="flex flex-col min-h-80">
      <div className="flex-1">
        <p className="mb-3">
          To-Do
        </p>
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)] flex flex-col gap-1">
          {
            loading ? (
              <Loading />
            ) : (
              <>
                {
                  todos && todos.map((todo) => (
                    <div key={todo.id} className="group relative">
                      <li dangerouslySetInnerHTML={{ __html: todo.content }}></li>
                      <div className="flex w-full justify-end gap-1 opacity-0 bg-gradient-to-r from-transparent via-transparent to-transparent group-hover:via-[#ffffff33] group-hover:to-[#ffffff] group-hover:opacity-100 absolute top-1/2 right-0 -translate-y-1/2">
                        <button onClick={() => onComplete(todo)}>
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4">
                            <path fillRule="evenodd" d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z" clipRule="evenodd" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  ))
                }
              </>
            )
          }
        </ol>
      </div>
      <form onSubmit={onAddTodo} className="w-full">
        <input type="text" name="content" placeholder="Somthing to do?(HTML)" className="border-b text-sm pb-1 px-1 outline-none w-full" disabled={loading} />
      </form>
    </div>
  );
}