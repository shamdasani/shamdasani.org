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
              <p className="text-2xl text-gray-800 tracking-tight my-4">
                I'm an always-learning builder and creator.
              </p>
              <p className="text-xl text-gray-800">
                I'm a second-year student studying computer science at the
                University of Michigan. Currently, I spend my time building{" "}
                <a
                  target="_blank"
                  className="underline hover:opacity-75"
                  href="https://enlight.nyc"
                >
                  Enlight
                </a>
                , the network to learn to code by building projects. I'm also a
                venture partner at{" "}
                <a
                  target="_blank"
                  className="underline hover:opacity-75"
                  href="https://contrarycap.com/michigan"
                >
                  Contrary Capital
                </a>
                . This summer, I'll be interning at{" "}
                <a
                  target="_blank"
                  className="underline hover:opacity-75"
                  href="https://ramp.com"
                >
                  Ramp
                </a>
                .
              </p>
              <p className="text-xl text-gray-800 my-2">
                My interest in technology goes back to middle school when I used
                to create video reviews on{" "}
                <a
                  target="_blank"
                  className="underline hover:opacity-75"
                  href="https://youtube.com/samayshamdasani"
                >
                  YouTube
                </a>
                . Soon after, I found myself learning to code and creating apps
                and websites for fun. I used my skills to improve the
                communities that I'm a part of through a handful of{" "}
                <a
                  target="_blank"
                  className="underline hover:opacity-75"
                  href=""
                >
                  {" "}
                  side-projects
                </a>
                .
              </p>
              <p className="text-xl text-gray-800 my-2">
                Previously, I've interned at{" "}
                <a
                  target="_blank"
                  className="underline hover:opacity-75"
                  href="https://datacamp.com"
                >
                  DataCamp
                </a>{" "}
                , working on engineering efforts focused on conversion and
                platform growth. I also started{" "}
                <a
                  target="_blank"
                  className="underline hover:opacity-75"
                  href="https://makespp.com"
                >
                  MakeSPP
                </a>
                , NJ's largest HS hackathon. In 2018, I was an Apple{" "}
                <a
                  target="_blank"
                  className="underline hover:opacity-75"
                  href=""
                >
                  WWDC
                </a>{" "}
                scholar.
              </p>
              <p className="text-xl text-gray-800 my-2">
                I'm incredibly impact-driven and passionate about building for a
                better tomorrow.
              </p>
              ——
              <p className="text-xl text-gray-800 my-2">
                If you're interested in my thoughts on technology, business, the
                future, and everything in between (including life updates!),
                subscribe to my newsletter below.
              </p>
              <Newsletter />
              <h1 className="text-2xl font-bold text-gray-900 tracking-tight mt-8">
                Get in touch
              </h1>
              <p className="text-xl text-gray-800 my-2">
                I'm most active on{" "}
                <a
                  target="_blank"
                  className="underline hover:opacity-75"
                  href="https://twitter.com/samaysham"
                >
                  Twitter
                </a>
                . My email is my first name @ shamdasani.org — my DMs and inbox
                are always open.
              </p>
              <h1 className="text-2xl font-bold text-gray-900 tracking-tight mt-6">
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
  const allPosts = getAllPosts(["title", "date", "slug", "image"]);

  return {
    props: { allPosts }
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