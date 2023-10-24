import Link from "next/link";

const Intro = () => {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-12">
      <a href="/">
        {" "}
        {/* switch to Next Link */}
        <h1 className="text-4xl md:text-2xl text-gradient bg-gradient-to-r from-blue-600 to-blue-400 font-bold tracking-tighter leading-tight md:pr-8 hover:opacity-75 duration-200">
          shamdasani.org
        </h1>
      </a>
      <div className="text-center md:text-left">
        <Link href="/writing">
          <span className="hover:text-blue-600 duration-200 transition-colors mr-4 text-xl text-gray-900">
            writing
          </span>
        </Link>

        <Link href="/projects">
          <span className="hover:text-blue-600 duration-200 transition-colors mr-4 text-xl text-gray-900">
            projects
          </span>
        </Link>
        {/* <a
          href=""
          className="hover:text-blue-600 duration-200 transition-colors text-xl text-gray-900"
        >
          now (log/metrics of life) + realtime
        </a> */}
        {/* <a
          href=""
          className="hover:text-blue-600 duration-200 transition-colors text-xl text-gray-900"
        >
          links -- links that inspire me
        </a> */}
        {/* <a
          href=""
          className="hover:text-blue-600 duration-200 transition-colors text-xl text-gray-900"
        >
        admiinnn??
          
        </a> */}
      </div>
    </section>
  );
};

export default Intro;

{
  /* switch to Next Link */
}
{
  /* switch to Next Image */
}
