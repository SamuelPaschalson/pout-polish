"use client";

import Hero from "@/components/Hero";
import Feature from "@/components/Feature";
import NewArrival from "@/components/NewArrival";
import Category from "@/components/Category";
import PromoBanner from "@/components/PromoBanner";
import BlogSection from "@/components/BlogSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <Feature />
      <NewArrival />
      <Category />
      <PromoBanner />
      <BlogSection />
    </main>
  );
}
