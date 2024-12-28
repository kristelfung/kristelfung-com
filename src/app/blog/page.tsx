import path from "path";
import fs from "fs";
import Link from "next/link";
import matter from "gray-matter";
import { formatDate } from "@/utils/date";

export default function Blog() {
  const postsDirectory = path.join(process.cwd(), "src/app/blog/content");
  const files = fs.readdirSync(postsDirectory);

  const posts = files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const content = fs.readFileSync(path.join(postsDirectory, file), "utf8");
      const { data: frontmatter } = matter(content);

      return {
        slug: file.replace(".mdx", ""),
        title: frontmatter.title,
        date: frontmatter.date,
        formattedDate: formatDate(frontmatter.date),
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div className="py-6">
      <h1 className="text-5xl">recent thoughts...</h1>
      <div className="py-8">
        {posts.map((post) => {
          return (
            <div key={post.slug} className="py-4 relative group">
              <div
                aria-hidden="true"
                className="absolute -left-8 top-[10%] w-2 h-[80%] bg-highlight opacity-0 transition-opacity duration-100 ease-in-out group-hover:opacity-100"
              />
              <Link href={`/blog/${post.slug}`}>
                <h2 className="text-3xl">{post.title}</h2>
                <p className="text-xl">{post.formattedDate}</p>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
