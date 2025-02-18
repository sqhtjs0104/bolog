import Tooltip from "@/app/components/Tooltip";
import { formatDateTime } from "@/app/utils/custom";
import { Post as IPrismaPost } from "@prisma/client";

interface IPost extends IPrismaPost {
  series: { name: string };
  tags: { name: string }[];
}

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
const url = `${baseUrl}/api/posts`;

async function getPost(id: string) {
  const response = await fetch(`${url}/${id}`);
  return response.json();
}

interface IPostProps {
  params: { id: string };
}

export default async function Post({
  params,
}: IPostProps) {
  const { id } = await params;
  const post: IPost = await getPost(id);

  return (
    <div className="mt-10 flex flex-col gap-2 px-6">
      <div className="w-full flex flex-col gap-8 border-b border-dashed border-gray-200 pb-3 px-2">
        <h2 className="text-5xl font-bold text-neutral-800 text-center">{post.title}</h2>
        <span className="ml-auto text-sm text-neutral-500">
          <Tooltip title={(post.createdAt !== post.updatedAt) ? `게시일: ${formatDateTime(post.createdAt)}` : ""}>
            {post.createdAt !== post.updatedAt && "수정됨: "}
            {formatDateTime(post.createdAt)}
          </Tooltip>
        </span>
      </div>
      <div className="flex justify-between px-4 py-2 align-center">
        <span className="text-neutral-500 font-semibold">{post.series?.name}</span>
        <ul className="flex gap-3">
          {
            post.tags.map((tag, i) => (
              <li key={i} className="text-xs text-gray-500 bg-gray-100 py-1 px-3 rounded-2xl">{tag.name}</li>
            ))
          }
        </ul>
      </div>
      <div className="py-4 px-5 mt-4">
        <div
          className="text-center text-sm text-neutral-700"
          dangerouslySetInnerHTML={{ __html: post.content as TrustedHTML || undefined }}
        >

        </div>
      </div>
    </div >
  );
}