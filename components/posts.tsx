import Post from "../types/post";
import Link from "next/link";
import DateFormatter from "./date-formatter";

type Props = {
  posts: Post[];
};

const Posts = ({ posts }: Props) => {
  return (
    <section className="mt-2">
      {posts
        .filter((post) => post.category != "draft")
        .map((post) => (
          <div key={post.slug} className="py-1">
            <Link as={`/posts/${post.slug}`} href="/posts/[slug]">
              <span className="text-xl">
                {" "}
                <span className="hover:underline"> {post.title}</span>
                <span className="italic text-xs p-2">
                  <DateFormatter dateString={post.date} />
                </span>
              </span>
            </Link>
          </div>
        ))}
    </section>
  );
};

export default Posts;
