import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { compileMDX } from "next-mdx-remote/rsc";
import rehypePrettyCode from "rehype-pretty-code";

import { formatDate } from "@/utils/date";
import Link from "next/link";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;

  // Read the MDX file
  const postPath = path.join(process.cwd(), `src/app/blog/content/${slug}.mdx`);
  const fileContent = fs.readFileSync(postPath, "utf8");

  // Parse and strip frontmatter
  const {
    data: { title, date },
    content,
  } = matter(fileContent);
  const formattedDate = formatDate(date);

  // Compile the MDX content without frontmatter
  const { content: Content } = await compileMDX({
    source: content,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        rehypePlugins: [[rehypePrettyCode]],
      },
    },
  });

  return (
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
  );
}
