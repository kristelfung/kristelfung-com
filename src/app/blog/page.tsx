import { formatDate } from "@/utils/date";
import matter from "gray-matter";
import Link from "next/link";
import { readFile, readdir } from "node:fs/promises";
import path from "node:path";
import FadeIn from "../components/fade_in";
import Image from "next/image";

export default async function Blog() {
  const postsDirectory = path.join(process.cwd(), "src/app/blog/content");
  const files = await readdir(postsDirectory);

  const posts = await Promise.all(
    files
      .filter((file) => file.endsWith(".mdx"))
      .map(async (file) => {
        const content = await readFile(path.join(postsDirectory, file), "utf8");
        const { data: frontmatter } = matter(content);

        return {
          slug: file.replace(".mdx", ""),
          title: frontmatter.title,
          date: frontmatter.date,
          pinned: frontmatter.pinned,
          formattedDate: formatDate(frontmatter.date),
        };
      })
  );

  const pinnedPosts = posts
    .filter((post) => post.pinned)
    .sort((a, b) => {
      // First sort by pinnedOrder (lower numbers first)
      if (a.pinned !== b.pinned) {
        return a.pinned - b.pinned;
      }
      // If pinnedOrder is the same, sort by date (newest first)
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });

  const regularPosts = posts
    .filter((post) => !post.pinned)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  // Combine pinned posts at the top, followed by regular posts
  const sortedPosts = [...pinnedPosts, ...regularPosts];

  return (
    <FadeIn>
      <div className="py-6">
        <h1 className="text-5xl">recent thoughts...</h1>
        <div className="py-8">
          {sortedPosts.map((post) => {
            return (
              <div key={post.slug} className="py-4 relative group">
                <div
                  aria-hidden="true"
                  className="absolute -left-20 top-[10%] w-2 h-[80%] bg-highlight opacity-0 transition-opacity duration-100 ease-in-out group-hover:opacity-100"
                />
                {post.pinned && (
                  <Image
                    src="/pin.png"
                    alt="pin"
                    width={30}
                    height={30}
                    className="absolute top-5 -left-12"
                  />
                )}
                <Link href={`/blog/${post.slug}`}>
                  <h2 className="text-3xl">{post.title}</h2>
                  <p className="text-xl">{post.formattedDate}</p>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </FadeIn>
  );
}
