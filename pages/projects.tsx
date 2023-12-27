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
          <title>Projects</title>
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
            </a>{" "}
            - community for student builders
          </div>
          <div className="my-2 text-gray-900">
            <a
              target="_blank"
              className="underline hover:opacity-75 text-xl"
              href="https://enlight.nyc"
            >
              Enlight
            </a>{" "}
            - network to learn to code by building projects
          </div>
          <div className="my-2">
            <a
              target="_blank"
              className="underline hover:opacity-75 text-xl"
              href="https://2019.makespp.com"
            >
              MakeSPP
            </a>{" "}
            - largest HS hackathon in NJ area
          </div>
          <div className="my-2">
            <a
              target="_blank"
              className="underline hover:opacity-75 text-xl"
              href="https://syessa.com"
            >
              Syessa
            </a>{" "}
            - DTC eCommerce store
          </div>
          <div className="my-2">
            <a
              target="_blank"
              className="underline hover:opacity-75 text-xl"
              href="https://www.issacaption.com/"
            >
              Issa Caption
            </a>{" "}
            - find the perfect caption for your Instagram posts
          </div>
          <div className="my-2">
            <a
              target="_blank"
              className="underline hover:opacity-75 text-xl"
              href="https://github.com/ReflectUs/Reflect"
            >
              Reflect
            </a>{" "}
            - reflect on social engagement
          </div>
          <div className="my-2">
            <a
              target="_blank"
              className="underline hover:opacity-75 text-xl"
              href="https://devpost.com/software/blink-9o2iln"
            >
              Blink
            </a>{" "}
            - communication for locked-in patients
          </div>
          <div className="my-2">
            <a
              target="_blank"
              className="underline hover:opacity-75 text-xl"
              href="https://ticktockinc.com"
            >
              Tick Tock Inc.
            </a>{" "}
            - b2b eCommerce store
          </div>
          <div className="my-2">
            <a
              target="_blank"
              className="underline hover:opacity-75 text-xl"
              href="https://vidyapith-act.netlify.app/"
            >
              Food Drive Counter
            </a>
            - tracker for community food drive
          </div>
          <div className="my-2">
            <a
              target="_blank"
              className="underline hover:opacity-75 text-xl"
              href="https://github.com/shamdasani/SwiftFrameworks"
            >
              Swift Frameworks (WWDC 18){" "}
            </a>{" "}
            — WWDC scholarship submission
          </div>
          <div className="my-2">
            <a
              target="_blank"
              className="underline hover:opacity-75 text-xl"
              href="https://github.com/shamdasani/peters"
            >
              Peters
            </a>{" "}
            - app for my high school
          </div>
          <div className="my-2">
            <a
              target="_blank"
              className="underline hover:opacity-75 text-xl"
              href="https://devpost.com/software/safefront"
            >
              SafeFront
            </a>
            - next-gen 911 response system
          </div>
          <div className="my-2">
            <a
              target="_blank"
              className="underline hover:opacity-75 text-xl"
              href="https://devpost.com/software/twext-5kmngj"
            >
              Twext
            </a>
            - early hackathon project; search tweets
          </div>
          <div className="my-2">
            <a
              target="_blank"
              className="underline hover:opacity-75 text-xl"
              href="https://www.producthunt.com/posts/enlight-3"
            >
              Enlight 1.0
            </a>{" "}
            - project tutorials; my first time launching something
          </div>
          <div className="my-2">
            <a className="text-xl text-gray-900">Siimply Tech (blog)</a> - tech
            news blog
          </div>
          <div className="my-2">
            <a
              target="_blank"
              className="underline hover:opacity-75 text-xl"
              href="https://youtube.com/samayshamdasani"
            >
              YouTube channel
            </a>{" "}
            - tech reviews and vlogs
          </div>
          <div className="my-2">
            <a className="text-xl text-gray-900">Shoveling business</a> -
            bootstrapped enough $$$ to buy my first laptop
          </div>
        </Container>
      </Layout>
    </>
  );
};

export default Projects;
