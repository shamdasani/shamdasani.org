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
          <title>Investments</title>
        </Head>
        <Container>
          <Intro />
          <h1 className="text-2xl font-bold text-gray-900 tracking-tight mt-6">
            Investments
          </h1>
          <div className="my-2 text-gray-900">
            <a
              target="_blank"
              className="underline hover:opacity-75 text-xl"
              href="https://getcobblestone.com/"
            >
              Shade
            </a>{" "}
            - AI-powered asset explorer (2021)
          </div>
          <div className="my-2 text-gray-900">
            <a
              target="_blank"
              className="underline hover:opacity-75 text-xl"
              href="https://getcobblestone.com/"
            >
              Cobblestone
            </a>{" "}
            - real estate leasing platform (2022)
          </div>
          <div className="my-2 text-gray-900">
            <a
              target="_blank"
              className="underline hover:opacity-75 text-xl"
              href="https://www.link.mobi/"
            >
              Link Mobile
            </a>{" "}
            - connecting providers+health systems to patients (2023)
          </div>
          <div className="my-2 text-gray-900">
            <a
              target="_blank"
              className="underline hover:opacity-75 text-xl"
              href="https://www.silnahealth.com/"
            >
              Silna Health
            </a>{" "}
            - benefits and prior authorization automation (2023)
          </div>
          <div className="my-2 text-gray-900">
            <a
              target="_blank"
              className="underline hover:opacity-75 text-xl"
              href="https://rivet.tax/"
            >
              Rivet
            </a>{" "}
            - corporate & personal tax prep firm (2024)
          </div>
          <div className="my-2 text-gray-900">
            <a
              target="_blank"
              className="underline hover:opacity-75 text-xl"
              href="https://www.getmcard.com/"
            >
              MCard
            </a>{" "}
            - earn rewards on mortgage payments (2024)
          </div>
          <div className="my-2 text-gray-900">
            <a
              target="_blank"
              className="underline hover:opacity-75 text-xl"
              href="https://www.cognition-labs.com/"
            >
              Cognition
            </a>{" "}
            - AI software engineer (2024)
          </div>
          <div className="my-2 text-gray-900">
            <a
              target="_blank"
              className="underline hover:opacity-75 text-xl"
              href="https://www.taiki.ai/"
            >
              Taiki
            </a>{" "}
            - API for tax forms (2024)
          </div>
          <div className="my-2 text-gray-900">
            <a
              target="_blank"
              className="underline hover:opacity-75 text-xl"
              href="https://www.trymoab.com/"
            >
              Moab
            </a>{" "}
            - equipment dealer and renter software (2024)
          </div>
          <p className="text-sm text-gray-600 italic mt-4">
            My favorite part of being in the technology industry is meeting so
            many smart and ambitious people. I've been lucky enough to invest in
            a few of them and support them where I can (product, engineering,
            hiring, etc).
          </p>
          <p className="text-sm text-gray-600 italic my-2">
            If you're working on something interesting, please reach out.
            Alternatively, if you're interested in exploring new roles, I'm
            always happy to chat and share exciting opportunities within my
            network. I can be reached via email at samayshamdasani [at] gmail
            [dot] com.
          </p>
        </Container>
      </Layout>
    </>
  );
};

export default Projects;
