import ApplyNow from "@/components/ApplyNow";
import Carousel from "@/components/Carousel";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import { getAllPosts } from "@/utils/markdown";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Uprise Cranes and Contractors",
  description: "Uprise Cranes and Contractors",
};

export default function Home() {
  const posts = getAllPosts(["title", "date", "excerpt", "coverImage", "slug"]);

  return (
    <main>
      <ScrollUp />
      <Hero />
      <Features />
      <Carousel />
      <ApplyNow />
      <Contact />
    </main>
  );
}
