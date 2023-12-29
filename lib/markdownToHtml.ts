import { remark } from "remark";
import html from "remark-html";
import gfm from "remark-gfm";

export default async function markdownToHtml(markdown: string) {
  const result = await remark()
    .use(html, { sanitize: false })
    .use(gfm)
    .process(markdown);

  let htmlString = result.toString();
  // Regular expression to match external links
  htmlString = htmlString.replace(
    /<a href="(https?:\/\/|\/\/)/g,
    '<a target="_blank" href="$1'
  );

  return htmlString;
}
