import Container from "../components/container";
import Posts from "../components/posts";
import Intro from "../components/intro";
import Layout from "../components/layout";
import Head from "next/head";
import Post from "../types/post";

const Projects = () => {
  return (
    <>
      <Layout>
        <Head>
          <title>Projects | Samay Shamdasani</title>
        </Head>
        <Container>
          <Intro />
          <h1 className="text-2xl font-bold text-gray-900 tracking-tight mt-6">
            Projects
          </h1>
          <div className="my-2 text-gray-900">
            {/* image, description, tags (side-proejct, hackathon, etc) */}

            <a
              target="_blank"
              className="underline hover:opacity-75 text-xl"
              href="https://v1michigan.com"
            >
              V1
            </a>
          </div>
          <div className="my-2 text-gray-900">
            <a
              target="_blank"
              className="underline hover:opacity-75 text-xl"
              href="https://enlight.nyc"
            >
              Enlight
            </a>
          </div>
          <div className="my-2">
            <a
              target="_blank"
              className="underline hover:opacity-75 text-xl"
              href="https://2019.makespp.com"
            >
              MakeSPP
            </a>
          </div>
          <div className="my-2">
            <a
              target="_blank"
              className="underline hover:opacity-75 text-xl"
              href="https://www.issacaption.com/"
            >
              Issa Caption
            </a>
          </div>
          <div className="my-2">
            <a
              target="_blank"
              className="underline hover:opacity-75 text-xl"
              href="https://github.com/ReflectUs/Reflect"
            >
              Reflect
            </a>
          </div>
          <div className="my-2">
            <a
              target="_blank"
              className="underline hover:opacity-75 text-xl"
              href="https://devpost.com/software/blink-9o2iln"
            >
              Blink
            </a>
          </div>
          <div className="my-2">
            <a
              target="_blank"
              className="underline hover:opacity-75 text-xl"
              href="https://ticktockinc.com"
            >
              Tick Tock Inc.
            </a>{" "}
          </div>
          <div className="my-2">
            <a
              target="_blank"
              className="underline hover:opacity-75 text-xl"
              href="https://vidyapith-act.netlify.app/"
            >
              Food Drive Counter
            </a>
          </div>
          <div className="my-2">
            <a
              target="_blank"
              className="underline hover:opacity-75 text-xl"
              href="https://github.com/shamdasani/SwiftFrameworks"
            >
              Swift Frameworks (WWDC 18){" "}
            </a>
          </div>
          <div className="my-2">
            <a
              target="_blank"
              className="underline hover:opacity-75 text-xl"
              href="https://github.com/shamdasani/peters"
            >
              Peters
            </a>
          </div>
          <div className="my-2">
            <a
              target="_blank"
              className="underline hover:opacity-75 text-xl"
              href="https://devpost.com/software/safefront"
            >
              SafeFront
            </a>
          </div>
          <div className="my-2">
            <a
              target="_blank"
              className="underline hover:opacity-75 text-xl"
              href="https://devpost.com/software/twext-5kmngj"
            >
              Twext
            </a>
          </div>
          <div className="my-2">
            <a
              target="_blank"
              className="underline hover:opacity-75 text-xl"
              href="https://www.producthunt.com/posts/enlight-3"
            >
              Enlight 1.0
            </a>
          </div>
          <div className="my-2">
            <a className="text-xl text-gray-900">Siimply Tech</a>
          </div>
          <div className="my-2">
            <a
              target="_blank"
              className="underline hover:opacity-75 text-xl"
              href="https://youtube.com/samayshamdasani"
            >
              YouTube
            </a>
          </div>
          <div className="my-2">
            <a className="text-xl text-gray-900">Shoveling Business</a>
          </div>
        </Container>
      </Layout>
    </>
  );
};

export default Projects;
