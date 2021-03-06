import Post from "../types/post";
import Link from "next/link";

type Props = {
  posts: Post[];
};

const Posts = ({ posts }: Props) => {
  return (
    <section className="mt-2">
        {posts.map(post => (
          <div key={post.slug} className="py-1">
            <Link as={`/posts/${post.slug}`} href="/posts/[slug]">
              <a className="text-xl hover:underline">{post.title}</a>
            </Link>
          </div>

          //   <PostPreview
          //     key={post.slug}
          //     title={post.title}
          //     coverImage={post.coverImage}
          //     date={post.date}
          //     author={post.author}
          //     slug={post.slug}
          //     excerpt={post.excerpt}
          //   />
        ))}
    </section>
  );
};

export default Posts;
