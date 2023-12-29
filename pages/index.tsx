import Container from "../components/container";
import Newsletter from "../components/newsletter";
import Posts from "../components/posts";
// import MoreStories from "../components/more-stories";
// import HeroPost from "../components/hero-post";
import Intro from "../components/intro";
import Layout from "../components/layout";
import { getAllPosts } from "../lib/api";
import Head from "next/head";
import { CMS_NAME } from "../lib/constants";
import Post from "../types/post";
import Image from "next/image";

type Props = {
  allPosts: Post[];
};

const Index = ({ allPosts }: Props) => {
  return (
    <>
      <Layout>
        <Head>
          <title>Samay Shamdasani</title>
          <meta property="og:image" content="/logo.png" />
        </Head>
        <Container>
          <Intro />
          <div className="mb-6">
            <h1 className="text-4xl font-bold text-gray-900 tracking-tight">
              Hello, I'm Samay.
            </h1>

            <div>
              <p className="text-lg text-gray-800 mt-4 mb-2">
                I'm a software engineer at{" "}
                <a
                  target="_blank"
                  className="underline hover:opacity-75"
                  href="https://ramp.com"
                >
                  Ramp
                </a>
                .{" "}
              </p>
              <p className="text-lg text-gray-800 my-2">
                In the past, I have spent my time building{" "}
                <a
                  target="_blank"
                  className="underline hover:opacity-75"
                  href="https://v1michigan.com"
                >
                  V1
                </a>
                , the community for ambitious student builders at the University
                of Michigan, and&nbsp;
                <a
                  target="_blank"
                  className="underline hover:opacity-75"
                  href="https://enlight.nyc"
                >
                  Enlight
                </a>
                , the network to learn to code by building projects.{" "}
              </p>
              {/* <p className="text-lg text-gray-800 my-2">
                My interest in technology goes back to middle school where I
                used to create video reviews on{" "}
                <a
                  target="_blank"
                  className="underline hover:opacity-75"
                  href="https://youtube.com/samayshamdasani"
                >
                  YouTube
                </a>
                . Soon after, I found myself learning to code and creating apps
                and websites for fun. This led to me building a handful of{" "}
                <a
                  target="_blank"
                  className="underline hover:opacity-75"
                  href="/projects"
                >
                  {" "}
                  side-projects
                </a>
                .
              </p>
              <p className="text-lg text-gray-800 my-2">
                Previously, I've interned at{" "}
                <a
                  target="_blank"
                  className="underline hover:opacity-75"
                  href="https://datacamp.com"
                >
                  DataCamp,
                </a>{" "}
                working on engineering efforts focused on conversion and
                platform growth. I also started{" "}
                <a
                  target="_blank"
                  className="underline hover:opacity-75"
                  href="https://2019.makespp.com"
                >
                  MakeSPP
                </a>
                , NJ's largest HS hackathon. In 2018, I was an Apple WWDC
                scholar.
              </p> */}
              <p className="text-lg text-gray-800 my-2">
                I am incredibly impact-driven and passionate about building for
                a better tomorrow.
              </p>
              <p className="text-md text-gray-600 mt-2">
                samayshamdasani [at] gmail [dot] com
              </p>
              ——
              <h1 className="text-2xl font-bold text-gray-900 tracking-tight my-6">
                Writing
              </h1>
              {allPosts.length > 0 && <Posts posts={allPosts} />}
            </div>
          </div>
        </Container>
      </Layout>
    </>
  );
};

export default Index;

export const getStaticProps = async () => {
  const allPosts = getAllPosts(["title", "date", "slug", "category", "image"]);

  return {
    props: { allPosts },
  };
};

// Technical
// Componentize the pages
// SEO
// Integrate Next Image component
// Add views to posts

// Product
// Projects page -- detailed links
// Year in Review + Newsletter
// Personal Workflow tools
// Footer -- like this? Follow on Twitter + join newsletter ;)
