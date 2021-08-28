import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Container from "../../components/container";
import PostBody from "../../components/post-body";
import PostHeader from "../../components/post-header";
import Layout from "../../components/layout";
import { getPostBySlug, getAllPosts } from "../../lib/api";
import Head from "next/head";
import markdownToHtml from "../../lib/markdownToHtml";
import PostType from "../../types/post";
import Intro from "../../components/intro";

type Props = {
  post: PostType;
  morePosts: PostType[];
  preview?: boolean;
};

const Post = ({ post, preview }: Props) => {
  const router = useRouter();
  if (!router.isFallback && !post.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <Layout preview={preview}>
      <Container>
        {router.isFallback ? (
          <h1>Loading…</h1>
        ) : (
          <>
            <article className="mb-32">
              <Head>
                <title>{post.title} | Samay Shamdasani</title>
                <meta name="description" content={post.description} />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:creator" content="@samaysham" />
                <meta name="twitter:title" content={post.title} />
                <meta name="twitter:description" content={post.description} />
                {post.image && (
                  <>
                    <meta property="og:image" content={post.image} />
                    <meta name="twitter:image" content={post.image} />
                  </>
                )}
              </Head>
              <Intro />

              <PostHeader
                title={post.title}
                description={post.description}
                date={post.date}
                category={post.category}
              />
              <PostBody content={post.content} />
            </article>
          </>
        )}
      </Container>
    </Layout>
  );
};

export default Post;

type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug, [
    "title",
    "date",
    "slug",
    "description",
    "content",
    "image",
    "category",
  ]);
  const content = await markdownToHtml(post.content || "");

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"]);

  return {
    paths: posts.map((posts) => {
      return {
        params: {
          slug: posts.slug,
        },
      };
    }),
    fallback: false,
  };
}
