import Disciplines from "@/components/home/Disciplines/Disciplines";
import FeaturedProjects from "@/components/home/FeaturedProjects/FeaturedProjects";
import FeaturedWork from "@/components/home/FeaturedWork/FeaturedWork";
import Hero from "@/components/home/Hero/Hero";
import HomeCTA from "@/components/home/HomeCTA/HomeCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Disciplines />
      <FeaturedWork />
      <FeaturedProjects />
      <HomeCTA />
    </>
  );
}