import fs from "fs";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";

export default async function About() {
  const postPath = path.join(process.cwd(), "src/app/about/content/index.mdx");
  const content = fs.readFileSync(postPath, "utf8");

  const { content: Content } = await compileMDX({
    source: content,
  });

  return (
    <div className="py-6">
      <h1 className="text-5xl">more on me...</h1>
      <article className="prose max-w-none py-8">{Content}</article>
    </div>
  );
}
