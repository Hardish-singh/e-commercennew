import Image from "next/image";
import { Heart,  Star, StarOff } from "lucide-react";
import products from "../../../../lib/Products";

export default function MenProducts() {
  return (
    <div className="px-2 sm:px-4 md:px-8 py-6 ">
     <div className="bg-[#A1BE95] w-full h-[150px] sm:w-full sm:h-[250px] flex flex-row items-center sm:justify-around justify-between px-8 mb-5 rounded-3xl">
  <h2 className="text-lg sm:text-6xl md:text-6xl font-bold text-yellow-300 flex flex-col">
    
    Men's <span>Collection</span>
  </h2>
  <div className="relative  h-[150px] w-[170px] sm:h-[250px] sm:w-[250px]">
    <Image
      src={'/puff.png'}
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
      <div className="  grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4">
        {products.men.map((item) => (
          <div
            key={item.id}
            className=" relative rounded-xl p-2 sm:p-3 flex flex-col shadow-md hover:shadow-lg transition-all"
          >
            <div
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
            <div className="text-emerald-600 font-bold text-xs sm:text-sm mt-1">
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
              <button className="flex-1 bg-emerald-600 text-white text-[10px] sm:text-xs py-1 rounded-lg hover:bg-emerald-700 transition-all">
                Buy
              </button>
              <button className="flex-1 border border-emerald-500 text-emerald-600 text-[10px] sm:text-xs py-1 rounded-lg hover:border-emerald-600 hover:text-emerald-700 transition-all">
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
  );
}