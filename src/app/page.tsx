// import Image from "next/image";
import Categories from "@/components/Categories";
import Hero from "@/components/Hero";
// import Navbar from "@/components/Navbar";
import Products from "@/components/Products";
import About from "@/components/about";
import FeaturesSection from "@/components/featuresection";
export default function Home() {
  return (
    <div>
    {/* <Navbar/> */}
     <Hero/>
     <Categories/>
     <Products/>
     <About/>
     <FeaturesSection/>
    </div>
    
  );
}
