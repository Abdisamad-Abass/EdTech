
import AboutUs from "@/Pages/AboutUs";
import Community from "@/Pages/Community";
import Courses from "@/Pages/Courses";
import Hero from "@/Pages/Hero";
import Mentors from "@/Pages/Mentors";
import Price from "@/Pages/Price";
import Subscription from "@/Pages/Subscription";

export default function Home() {
  return (
    <div className="mt-">
      <Hero />
      <AboutUs />
      <Courses />
      <Mentors />
      <Community />
      <Price />
      <Subscription />
      
    </div>
  );
}
