
import AboutUs from "@/Pages/AboutUs";
import Hero from "@/Pages/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <div className="mt-">
      <Hero />
      <AboutUs />
    </div>
  );
}
