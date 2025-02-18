import { Post } from "@prisma/client"
import { classNames, formatDateTime } from "../utils/custom";
import Link from "next/link";

interface IPostItemProps {
  post: Post
  mode: "card" | "list"
}

export default function PostItem({
  post,
  mode,
}: IPostItemProps) {
  return (
    <Link
      href={`/posts/${post.id}`}
      className={classNames(
        mode === "card"
          ? "flex-col aspect-square"
          : "",
        "flex rounded-md shadow-md border border-gray-300 hover:cursor-pointer hover:shadow-lg hover:scale-105 transition-all ease-in-out"
      )}
    >
      <div
        className={classNames(
          mode === "card"
            ? "border-b flex-1"
            : "border-r w-44",
          "border-gray-300 p-3"
        )}
      >

      </div>

      <div className="flex-1 flex flex-col justify-between h-full gap-3 py-5 px-5">
        <h5 className="text-2xl font-semibold text-neutral-700">{post.title}</h5>
        <p className="flex-1 text-neutral-500 pl-1 h-16 block overflow-hidden text-ellipsis whitespace-normal break-normal">{post.content?.slice(0, 150)}</p>
        <span className="text-neutral-500 text-sm ml-auto">
          {formatDateTime(post.updatedAt)}
        </span>
      </div>
    </Link>
  )
}