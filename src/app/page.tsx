// import Image from "next/image";
import Categories from "@/components/Categories";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Products from "@/components/Products";
import SearchBar from "@/components/SearchBar";
import About from "@/components/about";
import FeaturesSection from "@/components/featuresection";
// import Photo from "@/components/photos";
export default function Home() {
  return (
    <div>
    <Navbar/>
     <Hero/>
     {/* <Photo/> */}
     <Categories/>
     <SearchBar/>
     <Products/>
     <About/>
     <FeaturesSection/>
    </div>
    
  );
}
