"use client";
import Image from "next/image";
import { Heart, Star, StarOff, Filter, X } from "lucide-react";
import products from "../../../../lib/Products";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import SearchBar from "@/components/SearchBar";

export default function MenProducts() {
  const router = useRouter();
  const [activeIndex, setActiveIndex] = useState(0);
  const [maxBudget, setMaxBudget] = useState("");
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedRating, setSelectedRating] = useState(0);
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);


  const availableColors = [...new Set(products.women.map(p => p.color).filter(Boolean))] as string[];


  const filteredProducts = products.women.filter(product => {
    const priceValue = parseFloat(product.price.replace(/[^0-9.]/g, ''));


    if (maxBudget && priceValue > parseFloat(maxBudget)) return false;


    if (selectedColors.length > 0 && (!product.color || !selectedColors.includes(product.color))) {
      return false;
    }


    if (selectedRating > 0 && product.rating < selectedRating) return false;

    return true;
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev === 0 ? 1 : 0));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const carouselItems = [
    { title: "Men's Collection", image: "/puff.png", subtitle: "New Arrivals" },
    { title: "Premium Styles", image: "/product1.png", subtitle: "Limited Edition" }
  ];

  return (
    <div className="px-2 sm:px-4 md:px-8 py-6 mt-20">

      <SearchBar />
      {/* Carousel Section */}
      <div className="relative w-full h-[150px] sm:h-[250px] mb-5 mt-4 rounded-3xl overflow-hidden ">
        {carouselItems.map((item, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-[#8FC028] transition-opacity duration-1000 ${activeIndex === index ? "opacity-100" : "opacity-0"
              }`}
          >
            <div className="flex flex-row items-center justify-between h-full px-8">
              <div className=" z-10">
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
      <div className="flex flex-col sm:flex-row gap-4 mb-6">


        {/* Filters Section */}
        <div className="absolute right-[5%]  ">
          <button
            onClick={() => setIsFiltersOpen(!isFiltersOpen)}
            className="   flex items-center gap-2 px-4 py-2  border border-gray-300 rounded-lg hover:border-[#8FC028] transition-all"
          >
            <Filter className="text-[#8FC028]" size={18} />
            <span className="text-[#8FC028]">Filters</span>
            {(maxBudget || selectedColors.length > 0 || selectedRating > 0) && (
              <span className="bg-[#8FC028] text-white rounded-full px-2 py-1 text-xs">
                {[maxBudget, selectedColors.length, selectedRating].filter(Boolean).length}
              </span>
            )}
          </button>

          {isFiltersOpen && (
            <div className="absolute right-0 mt-2 w-56  border bg-[#8FC028] border-gray-200 rounded-lg shadow-lg p-4 z-10">
              {/* Budget Filter */}
              <div className="space-y-2 mb-4">
                <h3 className="font-semibold ">Max Budget ($)</h3>
                <input
                  type="number"
                  placeholder="Enter max price"
                  value={maxBudget}
                  onChange={(e) => setMaxBudget(e.target.value)}
                  className=" text-gray-600 w-full p-2 border rounded-lg"
                />
              </div>

              {/* Color Filter */}
              {availableColors.length > 0 && (
                <div className="space-y-2 mb-4">
                  <h3 className="font-semibold ">Colors</h3>
                  <div className="flex flex-wrap gap-2">
                    {availableColors.map(color => (
                      <button
                        key={color}
                        onClick={() => setSelectedColors(prev =>
                          prev.includes(color)
                            ? prev.filter(c => c !== color)
                            : [...prev, color]
                        )}
                        className={`h-8 w-8 rounded-full border-2 transition-transform ${selectedColors.includes(color)
                            ? 'border-[#8FC028] scale-110'
                            : 'border-gray-200'
                          }`}
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* Rating Filter */}
              <div className="space-y-2">
                <h3 className="font-semibold ">Minimum Rating</h3>
                <div className="flex flex-col gap-2">
                  {[4, 3, 2, 1].map(rating => (
                    <button
                      key={rating}
                      onClick={() => setSelectedRating(rating === selectedRating ? 0 : rating)}
                      className={`flex items-center gap-1 px-3 py-1 rounded-lg ${selectedRating >= rating
                          ? 'bg-[#8FC028]/20'
                          : 'bg-gray-100'
                        }`}
                    >
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className={`${i < rating
                              ? 'text-yellow-400 fill-yellow-400'
                              : 'text-gray-300'
                            }`}
                        />
                      ))}
                    </button>
                  ))}
                </div>
              </div>

              {/* Clear Filters */}
              {(maxBudget || selectedColors.length > 0 || selectedRating > 0) && (
                <button
                  onClick={() => {
                    setMaxBudget('');
                    setSelectedColors([]);
                    setSelectedRating(0);
                  }}
                  className="w-full mt-4 text-red-500 hover:text-red-600 flex items-center justify-center gap-1"
                >
                  <X size={16} />
                  Clear All Filters
                </button>
              )}
            </div>
          )}
        </div>
      </div>



      {/* Product Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4 mt-12">
        {filteredProducts.map((item) => (
          <div
            key={item.id}
            className="relative rounded-xl p-2 sm:p-3 flex flex-col shadow-md hover:shadow-lg transition-all"
          >

            <div
              onClick={() => {
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
            <div className=" text-xs sm:text-sm font-semibold mt-2 line-clamp-1">
              {item.name}
            </div>
            <div className=" text-[10px] sm:text-xs line-clamp-1">
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
              <button onClick={() => {
                router.push(`/products/${item.id}`)
              }} className="flex-1 bg-[#7DC23B]  text-[10px] sm:text-xs py-3 px-4 rounded-xl hover:bg-emerald-700 transition-all">
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


      {filteredProducts.length === 0 && (
        <div className="text-center py-12 ">
          No products found matching your criteria
        </div>
      )}
    </div>
  );
}
