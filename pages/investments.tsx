import Head from "next/head";
import Container from "../components/container";
import Intro from "../components/intro";
import Layout from "../components/layout";

const INVESTMENTS = [
  {
    name: "Shade",
    url: "https://shade.inc/",
    description: "AI-powered asset explorer",
    year: 2021,
  },
  {
    name: "Cobblestone",
    url: "https://getcobblestone.com/",
    description: "real estate leasing platform",
    year: 2022,
  },
  {
    name: "Link Mobile",
    url: "https://www.link.mobi/",
    description: "connecting providers+health systems to patients",
    year: 2023,
  },
  {
    name: "Silna Health",
    url: "https://www.silnahealth.com/",
    description: "benefits and prior authorization automation",
    year: 2023,
  },
  {
    name: "Rivet",
    url: "https://rivet.tax/",
    description: "corporate & personal tax prep firm",
    year: 2024,
  },
  {
    name: "MCard",
    url: "https://www.getmcard.com/",
    description: "earn rewards on mortgage payments",
    year: 2024,
  },
  {
    name: "Cognition",
    url: "https://www.cognition-labs.com/",
    description: "AI software engineer",
    year: 2024,
  },
  {
    name: "Taiki",
    url: "https://www.taiki.ai/",
    description: "API for tax forms",
    year: 2024,
  },
  {
    name: "Moab",
    url: "https://www.trymoab.com/",
    description: "equipment dealer and renter software",
    year: 2024,
  },
  {
    name: "Unify",
    url: "https://www.unifygtm.com/",
    description: "warm outbound platform",
    year: 2024,
  },
  {
    name: "Revin",
    url: "https://www.revin.ai/",
    description: "AI for home services",
    year: 2024,
  },
  {
    name: "Endeavor",
    url: "https://www.endeavor.ai/",
    description: "AI for manufacturing",
    year: 2024,
  },
  {
    name: "Crosby Legal",
    url: "https://www.crosbylegal.com/",
    description: "AI for contract review",
    year: 2024,
  },
];

const Investments = () => {
  return (
    <Layout>
      <Head>
        <title>Investments</title>
      </Head>
      <Container>
        <Intro />
        <h1 className="text-2xl font-bold text-gray-900 tracking-tight mt-6">
          Investments
        </h1>

        {INVESTMENTS.map((investment) => (
          <div key={investment.name} className="my-2 text-gray-900">
            <a
              target="_blank"
              className="underline hover:opacity-75 text-xl"
              href={investment.url}
            >
              {investment.name}
            </a>{" "}
            - {investment.description} ({investment.year})
          </div>
        ))}

        <p className="text-sm text-gray-600 italic mt-4">
          My favorite part of being in the technology industry is meeting so
          many smart and ambitious people. I've been lucky enough to invest in a
          few of them and support them where I can (product, engineering,
          hiring, etc).
        </p>
        <p className="text-sm text-gray-600 italic my-2">
          If you're working on something interesting, please reach out.
          Alternatively, if you're interested in exploring new roles, I'm always
          happy to chat and share exciting opportunities within my network. I
          can be reached via email at samayshamdasani [at] gmail [dot] com.
        </p>
      </Container>
    </Layout>
  );
};

export default Investments;
