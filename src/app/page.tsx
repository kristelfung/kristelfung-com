import Image from "next/image";
import Footer from "./components/footer";
export default function Home() {
  return (
    <>
      <div className="py-8">
        <h1 className="text-5xl">
          <span className="block py-2">hi! i&apos;m kristel,</span>
          <span className="block py-2">a software engineer based in nyc.</span>
        </h1>
        <Image src="/home.png" alt="homepage-image" width={1920} height={316} />
      </div>
      <Footer />
    </>
  );
}
