'use client';

import React from 'react';
import Image from 'next/image';

// Mock categories data - replace with your actual data source
const categories = [
  { id: 1, name: 'Women', image: '/product4.png', color: '#FF69B4' },
  { id: 2, name: 'Men', image: '/product1.png', color: '#4169E1' },
  { id: 3, name: 'Oversized', image: '/product3.png', color: '#84E12E' },
  { id: 4, name: 'Anime Character', image: '/product6.png', color: '#FF4500' },
  { id: 5, name: 'luffy', image: '/product1.png', color: '#FFD700' },
];

const Categories = () => {
  return (
    <section className="w-full  py-8 px-4">
      {/* Heading */}
      <div className="text-center mb-8">
        {/* Mobile Heading */}
        <h2 className="md:hidden text-[#8FC028] text-3xl font-bold mb-6 animate-bounce">
          Categories
        </h2>
        
        {/* Desktop Heading */}
        <h2 className="hidden md:block text-[#8FC028] text-6xl font-bold mb-10">
          Categories
        </h2>
      </div>

      {/* Scrollable Categories Row */}
      <div className="flex overflow-x-auto  pb-4 md:overflow-visible md:justify-center gap-12
        scrollbar-hide"> 
        
        {categories.map((category) => (
          <div  
            key={category.id}
            className="flex-shrink-0 flex flex-col items-center space-y-3 group
            transition-transform duration-300 hover:scale-105 mx-2"
          >
            {/* Circular Category Container */}
            <div 
              className="w-24 h-24 md:w-32 md:h-32 rounded-full flex items-center justify-center
              border-2 border-white/20 backdrop-blur-sm overflow-hidden"
              style={{ backgroundColor: category.color }}
            >
              <Image
                src={category.image}
                alt={category.name}
                width={80}
                height={80}
                className="object-contain w-16 h-16 md:w-52 md:h-52 group-hover:rotate-6 
                transition duration-300"
              />
            </div>
            
            {/* Category Name */}
            <span className=" text-lg md:text-xl font-medium transition-colors
              group-hover:text-[#8FC028]">
              {category.name}
            </span>
          </div>
        ))}
      </div>

      {/* Scroll Indicator for Mobile */}
      <div className="md:hidden text-center  text-sm mt-4">
        Swipe to explore categories
      </div>
    </section>
  );
};

export default Categories;