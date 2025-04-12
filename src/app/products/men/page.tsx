"use client";
import Image from "next/image";
import { Heart, Star, StarOff } from "lucide-react";
import products from "../../../../lib/Products";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";

export default function MenProducts() {
  const router = useRouter();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev === 0 ? 1 : 0));
    }, 3000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, []);

  const carouselItems = [
    {
      title: "Men's Collection",
      image: "/puff.png",
      subtitle: "New Arrivals"
    },
    {
      title: "Premium Styles",
      image: "/product1.png", // Add your second image path
      subtitle: "Limited Edition"
    }
  ];

  return (
    <>
    <Navbar/>
    <div className="px-2 sm:px-4 md:px-8 py-6 mt-14">
      {/* Carousel Section */}
      <div className="relative w-full h-[150px] sm:h-[250px] mb-5 rounded-3xl overflow-hidden">
        {carouselItems.map((item, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-[#8FC028] transition-opacity duration-1000 ${
              activeIndex === index ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="flex flex-row items-center justify-between h-full px-8">
              <div className="text-white z-10">
                <h2 className="text-lg sm:text-6xl md:text-6xl font-bold">
                  {item.title}
                </h2>
                <span className="text-xl sm:text-3xl mt-2 block">
                  {item.subtitle}
                </span>
              </div>
              <div className="relative  h-[150px] w-[170px] sm:h-[250px] sm:w-[250px]">
                  <Image
                    src={item.image}
                    alt={'Men Collection'}
                    fill
                    className="object-cover overflow-hidden"
                    style={{
                      position: 'absolute',
                      right: '0',
                      top: '50%',
                      transform: 'translateY(-50%)'
                    }}
                  />
                </div>
            </div>
          </div>
        ))}
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4">
        {products.men.map((item) => (
           <div
                      key={item.id}
                      className=" relative rounded-xl p-2 sm:p-3 flex flex-col shadow-md hover:shadow-lg transition-all"
                    >
                      <div
                      onClick={()=>{
                        router.push(`/products/${item.id}`)
                      }}
                        className="relative h-[150px] sm:h-[200px] w-full rounded-xl overflow-hidden"
                        style={{ backgroundColor: item.color || "#e0e0e0" }}
                      >
                        <Image
                          src={item.img}
                          alt={item.name}
                          fill
                          className="absolute object-cover object-bottom scale-110 rounded-xl"
                        />
                      </div>
                      <div className="text-gray-900 text-xs sm:text-sm font-semibold mt-2 line-clamp-1">
                        {item.name}
                      </div>
                      <div className="text-gray-500 text-[10px] sm:text-xs line-clamp-1">
                        {item.collection}
                      </div>
                      <div className="text-[#84E12E] font-bold text-xs sm:text-sm mt-1">
                        {item.price}
                      </div>
                      <div className="flex gap-1 mt-1">
                        {Array.from({ length: 5 }, (_, i) =>
                          i < Math.floor(item.rating) ? (
                            <Star key={i} size={14} className="text-yellow-400" />
                          ) : (
                            <StarOff key={i} size={14} className="text-gray-300" />
                          )
                        )}
                      </div>
                      <div className="flex justify-between mt-3 gap-2">
                        <button  onClick={()=>{
                        router.push(`/products/${item.id}`)
                      }} className="flex-1 bg-[#7DC23B] text-white text-[10px] sm:text-xs py-3 px-4 rounded-xl hover:bg-emerald-700 transition-all">
                          Buy
                        </button>
                        <button className="flex-1 border border-[#7DC23B]  text-[#7DC23B]  text-[10px] sm:text-xs py-3 px-4 rounded-xl hover:border-emerald-600 hover:text-emerald-700 transition-all">
                          Cart
                        </button>
                        <button className=" absolute top-[4%] right-5 p-1 text-red-500 hover:text-red-600 transition-all">
                          <Heart size={20} />
                        </button>
                      </div>
                    </div>
        ))}
      </div>
    </div>
    </>
  );
}