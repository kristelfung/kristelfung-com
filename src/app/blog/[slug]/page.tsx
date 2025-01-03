import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { compileMDX } from "next-mdx-remote/rsc";
import rehypePrettyCode from "rehype-pretty-code";

import { formatDate } from "@/utils/date";
import Link from "next/link";
import FadeIn from "@/app/components/fade_in";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;

  const postPath = path.join(process.cwd(), `src/app/blog/content/${slug}.mdx`);
  const fileContent = fs.readFileSync(postPath, "utf8");

  const {
    data: { title, date },
    content,
  } = matter(fileContent);
  const formattedDate = formatDate(date);

  const { content: Content } = await compileMDX({
    source: content,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        rehypePlugins: [rehypePrettyCode],
      },
    },
  });

  return (
    <FadeIn>
      <div className="py-6">
        <Link href="/blog" className="py-4 relative group inline-block">
          &lt;&lt; back to posts
          <span
            className={`
            absolute inline-block -left-6 top-2
            bg-highlight w-[100%] h-[40%] -z-10 
            transition-opacity duration-200
            opacity-0 group-hover:opacity-100
          `}
          />
        </Link>
        <h1 className="text-5xl py-4">{title}</h1>
        <p className="text-xl">{formattedDate}</p>
        <article className="prose py-8 max-w-none">{Content}</article>
      </div>
    </FadeIn>
  );
}

export async function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), "src/app/blog/content");
  const files = fs.readdirSync(postsDirectory);

  return files
    .filter((filename) => filename.endsWith(".mdx"))
    .map((filename) => ({
      slug: filename.replace(".mdx", ""),
    }));
}
