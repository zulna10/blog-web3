import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { config } from "@/config";
import { signOgImageUrl } from "@/lib/og-image";
import Markdown from "react-markdown";

const content = `# About Me

![banner](https://service.zulnaaa.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FBaaner-web.e18be2ed.png&w=1080&q=75)

ZULNA is not just validators; we're like friendly guides. Located in the beautiful landscape of Indonesia, we're ready to show you how we work, introduce our amazing team, and share our history of doing things really well in the blockchain world. Our primary goal is to empower you with the essential tools and knowledge needed for seamless node operations.

This blog is where I'll be documenting web3, sharing my experiences, and hopefully inspiring others to follow their wanderlust. 


Let's go join in future!

Love,

zulna`;

export async function generateMetadata() {
  return {
    title: "About Me",
    description: "learn web3 and other",
    openGraph: {
      title: "About Me",
      description: "learn web3 and other",
      images: [
        signOgImageUrl({
          title: "Zulna",
          label: "About Me",
          brand: config.blog.name,
        }),
      ],
    },
  };
}

const Page = async () => {
  return (
    <div className="container mx-auto px-5">
      <Header />
      <div className="prose lg:prose-lg dark:prose-invert m-auto mt-20 mb-10 blog-content">
        <Markdown>{content}</Markdown>
      </div>
      <Footer />
    </div>
  );
};

export default Page;