import Container from "../components/container";
import Head from "next/head";
import Layout from "../components/layout";
import Intro from "../components/intro";
import { getAllPosts } from "../lib/api";
import type Post from "../types/post";

type Props = {
  allPosts: Post[];
};

const Index = ({ allPosts }: Props) => {
  return (
    <Layout>
      <Head>
        <title>Samay Shamdasani</title>
        <meta property="og:image" content="/logo.png" />
      </Head>

      <Container>
        <Intro />

        <div className="mb-6">
          <h1 className="text-xl font-bold text-gray-900 tracking-tight">
            Hello, I'm Samay.
          </h1>

          <div>
            <p className="text-lg text-gray-800 my-2">
              I am currently a software engineer at{" "}
              <a
                href="https://ramp.com"
                target="_blank"
                className="underline hover:opacity-75"
              >
                Ramp
              </a>
              .
            </p>

            <p className="text-lg text-gray-800 my-2">
              I spend time{" "}
              <a href="/projects" className="underline hover:opacity-75">
                building
              </a>{" "}
              side projects and{" "}
              <a href="/investments" className="underline hover:opacity-75">
                investing
              </a>{" "}
              in startups. I am incredibly impact-driven and passionate about
              building for a better tomorrow.
            </p>

            <p className="text-md text-gray-600 mt-2">
              You can reach me at samayshamdasani [at] gmail [dot] com. I'm also
              active on{" "}
              <a
                href="https://twitter.com/samaysham"
                target="_blank"
                className="underline hover:opacity-75"
              >
                Twitter
              </a>{" "}
              and{" "}
              <a
                href="https://linkedin.com/in/samayshamdasani"
                target="_blank"
                className="underline hover:opacity-75"
              >
                LinkedIn
              </a>
              .
            </p>
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default Index;

export const getStaticProps = async () => {
  const allPosts = getAllPosts(["title", "date", "slug", "category", "image"]);

  return {
    props: { allPosts },
  };
};
