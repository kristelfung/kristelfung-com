import Image from "next/image";
import Link from "next/link";
import Footer from "./components/footer";
import FadeIn from "./components/fade_in";

export default function Home() {
  return (
    <FadeIn>
      <div className="py-8">
        <h1 className="text-5xl">
          <span className="block py-2">hi! i&apos;m kristel,</span>
          <span className="block py-2">a lifelong learner living in sf.</span>
        </h1>
        <div className="group ml-auto w-full max-w-[600px] relative pt-4">
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute -top-10 md:-top-20 right-[25%] z-10">
            <Image
              src="/lightbulb.png"
              alt="lightbulb"
              width={100}
              height={100}
              className="w-10 h-10 md:w-16 md:h-16"
            />
          </div>
          <Link href="/idea">
            <Image
              src="/home.png"
              alt="homepage-image"
              width={1063}
              height={308}
              className="w-full cursor-pointer"
            />
          </Link>
        </div>
      </div>
      <Footer />
    </FadeIn>
  );
}
