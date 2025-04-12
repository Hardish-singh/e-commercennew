'use client';

import { useParams } from 'next/navigation';
import products from '../../../../lib/Products';
import Image from 'next/image';
import { Star ,TrendingUp ,Tag,RefreshCw } from 'lucide-react';
import Products from '@/components/Products';


interface Product {
  id: number;
  name: string;
  collection: string;
  price: string;
  img: string;
  color?: string;
  rating: number;
}

const ProductPage = () => {
  const params = useParams();
  const id = params.id;

  if (!id) {
    return <p className="mt-10 text-white">Loading product...</p>;
  }

  const product =
    products.men.find(p => p.id === Number(id)) ||
    products.women.find(p => p.id === Number(id));

  if (!product) {
    return <p className="mt-10 text-white">Product not found.</p>;
  }



  return (
    <section>
      <div
        className="relative w-full h-screen overflow-hidden"
        style={{ backgroundColor: product.color || '#e0e0e0' }}
      >
        {/* Favorite Button */}
        <button className="absolute sm:top-[20%] top-[5%] sm:right-[60%] right-[10%] z-10 p-2 bg-white/10 rounded-full shadow-lg">
          <svg className="w-6 h-6 font-bold text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </button>

        {/* Product Image */}
        <div className="absolute sm:top-[12%] sm:left-[25%] left-1/2 top-[10%] transform -translate-x-1/2 w-[400px] h-[400px] sm:w-[500px] sm:h-[500px] rounded-xl overflow-hidden">
          <Image
            src={product.img}
            alt={product.name}
            fill
            className="object-contain scale-110"
          />
        </div>

        {/* Product Details */}
        <div className="absolute sm:z-0 z-50  right-0 sm:top-1/2 top-[95%] h-[60%] w-screen  transform -translate-y-1/2 
  bg-white/5 backdrop-blur-sm sm:p-8 p-0 rounded-bl-4xl rounded-tl-4xl 
  sm:w-[600px] sm:h-screen border-l border-white/5 overflow-y-auto  ">



  <div className=" sm:space-y-6 space-y-1 text-white sm:mt-20 ml-5">
    {/* Content remains the same as in your code snippet */}
    <div>
      <h2 className="text-2xl font-bold mt-3">{product.name}</h2>
      <p className="text-sm text-gray-300 mt-1">{product.collection} Collection</p>
    </div>

    <div className=" sm:flex items-center gap-2">
  <div className="flex">
    {[...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${i < product.rating ? 'fill-yellow-400 stroke-yellow-400' : 'stroke-white/50'}`}
      />
    ))}
  </div>
  <span className="sm:text-sm text-[10px]">(24 reviews)</span>
</div>


    <p className="sm:text-lg text-lg font-bold ">{product.price}</p>

    <div className="hidden sm:block space-y-3">
  <h3 className="font-semibold">SELECT SIZE</h3>
  <div className="flex gap-3 flex-wrap">
    {['S', 'M', 'L', 'XL'].map((size) => (
      <button
        key={size}
        className="w-12 h-12 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors"
      >
        {size}
      </button>
    ))}
  </div>
</div>


    <div className="space-y-4  ">
      <button className="  relative sm:left-0 left-45 sm:w-full w-[40%]  py-4 bg-white text-black rounded-full font-semibold hover:bg-opacity-90 transition-all">
        Add to Cart
      </button>
      <button className=" hidden sm:block  py-4 border border-white/30 relative sm:left-0 left-45 sm:w-full w-[40%] rounded-full font-semibold hover:bg-white/10 transition-all">
        Add to Wishlist
      </button>
    </div>
  </div>
</div >
      </div>
      <div className='flex sm:flex-row flex-col justify-center items-center gap-4  sm:justify-around mt-4 mb-4'>

      <div className="flex flex-col items-center sm:w-[20%] w-[50%] text-center space-y-4 p-6 bg-[#1a1a1a] rounded-lg">
    <TrendingUp className="w-10 h-10 text-[#84E12E]" />
    <h3 className="text-xl font-bold text-white">Trending Styles</h3>
    <p className="text-gray-600">from Top Brands</p>
  </div>
  
  <div className="flex flex-col items-center text-center sm:w-[20%] w-[50%] space-y-4 p-6 bg-[#1a1a1a] rounded-lg">
    <Tag className="w-10 h-10 text-[#84E12E]" />
    <h3 className="text-xl font-bold text-white">Best Prices</h3>
    <p className="text-gray-600">on Top Products</p>
  </div>
  
  <div className="flex flex-col items-center text-center sm:w-[20%] w-[50%] space-y-4 p-6 bg-[#1a1a1a] rounded-lg">
    <RefreshCw className="w-10 h-10 text-[#84E12E]" />
    <h3 className="text-xl font-bold text-white">Easy Returns</h3>
    <p className="text-gray-600">on every order</p>
  </div>
      </div>



      <div>
          <Products/>
      </div>
    </section>
  );
};

export default ProductPage;