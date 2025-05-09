import fs from "fs";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";
import FadeIn from "../components/fade_in";

export default async function Principles() {
  const postPath = path.join(
    process.cwd(),
    "src/app/principles/content/index.mdx"
  );
  const content = fs.readFileSync(postPath, "utf8");

  const { content: Content } = await compileMDX({
    source: content,
  });

  return (
    <FadeIn>
      <div className="py-6">
        <h1 className="text-5xl">ever-evolving list of principles</h1>
        <article className="prose max-w-none py-8">{Content}</article>
      </div>
    </FadeIn>
  );
}
