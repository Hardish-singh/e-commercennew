'use client';

import React from 'react';
// import Image from 'next/image';

const Categories = () => {
  return (
    <section className="w-full bg-gray-950 py-6 px-4 mt-5 mb-5">
      {/* Mobile: Categories title at the top */}
      <div className="block md:hidden text-center text-[#8FC028] text-3xl font-bold mb-6 animate-bounce">
        Categories
      </div>

      {/* Image row */}
      <div className="flex flex-row justify-around items-center w-full gap-4">
        {/* Women */}
        <div className="flex flex-col justify-center items-center group transition-transform duration-300 hover:scale-105">
          {/* <Image
            src="/women.png"
            alt="Women T-shirt"
            width={120}
            height={120}
            className="object-contain w-[80px] md:w-[140px] group-hover:rotate-6 transition duration-300"
          /> */}
          <div className="text-white text-xl md:text-2xl font-semibold mt-2 group-hover:text-[#729343] transition">
            Women
          </div>
        </div>

        {/* Desktop: Categories title in the center */}
        <div className="hidden md:flex flex-col justify-center items-center animate-fade-in">
          <div className="text-[#729343] text-6xl font-bold">Categories</div>
        </div>

        {/* Men */}
        <div className="flex flex-col justify-center items-center group transition-transform duration-300 hover:scale-105">
          {/* <Image
            src="/men.png"
            alt="Men T-shirt"
            width={100}
            height={100}
            className="object-contain w-[45px] md:w-[90px] group-hover:rotate-[-6deg] transition duration-300"
          /> */}
          <div className="text-white text-xl md:text-2xl font-semibold mt-2 group-hover:text-[#729343] transition">
            Men
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
