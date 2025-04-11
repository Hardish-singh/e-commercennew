"use client"
import React, { useState } from 'react';
import {
  Home,
  ShoppingCart,
  User,
  Heart,
  Menu,
  Info,
  Package,
  Phone
} from 'lucide-react';
import Image from 'next/image';

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <>
      {/* Top Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-transparent  text-white px-6 py-4 flex items-center justify-between md:justify-start">
        <div className="text-2xl font-bold md:mr-auto w-full md:w-auto text-center flex items-center justify-center md:text-left">
          <Image  
                  src="/logo5.png" 
                  alt="Hero Image"
                  width={150}
                  height={70}
                //   fill
                  className="object-cover sm:w-36 w-28" 
                />
        </div >

        {/* Center Icons */}
        <ul className="hidden md:flex sm:gap-12 md:gap-8 space-x-6 text-white text-lg mx-auto">
          <li className="hover:text-gray-300 cursor-pointer"><Home size={25} /></li>
          <li className="hover:text-gray-300 cursor-pointer"><Info size={25} /></li>
          <li className="hover:text-gray-300 cursor-pointer"><Package size={25} /></li>
          <li className="hover:text-gray-300 cursor-pointer"><Phone size={25} /></li>
        </ul>

        {/* Right Icons */}
        <ul className="hidden md:flex space-x-6 sm:gap-3 md:gap-1 text-white text-lg ml-auto">
          <li className="hover:text-gray-300 cursor-pointer"><Heart size={25} /></li>
          <li className="hover:text-gray-300 cursor-pointer"><ShoppingCart size={25} /></li>
          <li className="hover:text-gray-300 cursor-pointer"><User size={25} /></li>
        </ul>
      </nav>

      {/* Mobile Footer Icons */}
      <div className="fixed bottom-0 left-0 w-full bg-black/30 backdrop-blur-md text-white md:hidden flex justify-around items-center py-3 px-4 border-t border-white/10 z-50">
        <Home size={24} className="hover:text-gray-300 cursor-pointer" />
        <ShoppingCart size={24} className="hover:text-gray-300 cursor-pointer" />
        <Menu
          size={24}
          className={`hover:text-gray-300 cursor-pointer transition-transform duration-300 ${
            showMobileMenu ? 'rotate-90' : ''
          }`}
          onClick={() => setShowMobileMenu(!showMobileMenu)}
        />
        <User size={24} className="hover:text-gray-300 cursor-pointer" />
        <Heart size={24} className="hover:text-gray-300 cursor-pointer" />
      </div>

      {/* Mobile Menu Dropdown with Animation */}
      <div
        className={`fixed bottom-16 left-4 right-4 bg-white/10 backdrop-blur-md text-white rounded-xl py-4 px-6 z-50 space-y-3 text-center shadow-lg transform transition-all duration-300 ease-in-out ${
          showMobileMenu ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0 pointer-events-none'
        }`}
      >
        <div className="cursor-pointer hover:text-gray-300 flex items-center justify-center space-x-2">
          <Package size={20} /> <span>Products</span>
        </div>
        <div className="cursor-pointer hover:text-gray-300 flex items-center justify-center space-x-2">
          <Info size={20} /> <span>About</span>
        </div>
        <div className="cursor-pointer hover:text-gray-300 flex items-center justify-center space-x-2">
          <Phone size={20} /> <span>Contact</span>
        </div>
      </div>
    </>
  );
};

export default Navbar;
