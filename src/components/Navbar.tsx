'use client';

import React, { useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import {
  Home,
  ShoppingCart,
  User,
  Heart,
  Menu,
  Info,
  Package,
  Phone,
  Shirt,
  Truck,
  Users,
} from 'lucide-react';
import Image from 'next/image';
import { ThemeToggle } from './ThemeToggler';

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [transitioning, setTransitioning] = useState(false);
  const [pageName, setPageName] = useState('');
  const [showProductDropdown, setShowProductDropdown] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const handleTransition = (href: string, name: string, e: React.MouseEvent) => {
    e.preventDefault();
    if (pathname === href) return;

    setPageName(name);
    setTransitioning(true);

    setTimeout(() => {
      router.push(href);
      setTransitioning(false);
      setShowProductDropdown(false); 
      setShowMobileMenu(false); 
    }, 900);
  };

  return (
    <>
      {transitioning && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center   text-4xl font-bold animate-slideLeft pointer-events-none">
          {pageName}
        </div>
      )}

      <nav className="fixed top-0 left-0 w-full sm:h-20 z-50  bg-white/5 backdrop-blur-xs  px-6 py-4 flex items-center justify-between md:justify-start">
        <div className="text-2xl font-bold md:mr-auto w-full md:w-auto text-center flex items-center justify-center md:text-left">
          <Image src="/logo2.png" alt="Hero Image" width={170} height={80} className="object-cover sm:w-40 w-32" />
        </div>

        {/* Center Icons */}
        <ul className="hidden md:flex sm:gap-12 md:gap-8 space-x-6  text-lg mx-auto relative">
          <li onClick={(e) => handleTransition('/', 'Home', e)} className="hover:text-gray-300 cursor-pointer">
            <Home size={25} />
          </li>
          <li onClick={(e) => handleTransition('/about', 'About', e)} className="hover:text-gray-300 cursor-pointer">
            <Info size={25} />
          </li>

          {/* Product Dropdown */}
          <li className="relative">
            <div
              onMouseEnter={() => setShowProductDropdown(!showProductDropdown)}
              className="hover:text-gray-300 cursor-pointer"
              onClick={() => setShowProductDropdown(!showProductDropdown)}
              // onMouseLeave={() => setShowProductDropdown(!showProductDropdown)}
             
            >
              <Package size={25} />
            </div>
            {showProductDropdown && (
              <div className="absolute top-10 left-[-1rem] w-40 bg-white/10 backdrop-blur-md  rounded-lg shadow-lg py-3 px-4 z-50 space-y-2 animate-dropdown">
                <div onClick={(e) => handleTransition('/products/men', 'Men', e)} className="flex items-center space-x-2 cursor-pointer hover:text-gray-300">
                  <Shirt size={18} /> <span>Men</span>
                </div>
                <div onClick={(e) => handleTransition('/products/women', 'Women', e)} className="flex items-center space-x-2 cursor-pointer hover:text-gray-300">
                  <Users size={18} /> <span>Women</span>
                </div>
                <div onClick={(e) => handleTransition('/track-order', 'Track Order', e)} className="flex items-center space-x-2 cursor-pointer hover:text-gray-300">
                  <Truck size={18} /> <span>Order Track</span>
                </div>
              </div>
            )}
          </li>

          <li onClick={(e) => handleTransition('/contact', 'Contact', e)} className="hover:text-gray-300 cursor-pointer">
            <Phone size={25} />
          </li>
        </ul>

        {/* Right Icons */}
        <ul className="hidden md:flex space-x-6 sm:gap-3 md:gap-1  text-lg ml-auto">
          <ThemeToggle/>
          <li className="hover:text-gray-300 cursor-pointer"><Heart size={25} /></li>
          <li className="hover:text-gray-300 cursor-pointer"><ShoppingCart size={25} /></li>
          <li className="hover:text-gray-300 cursor-pointer"><User size={25} /></li>
        </ul>
      </nav>

      {/* Mobile Footer */}
      <div className="fixed bottom-0 left-0 w-full  backdrop-blur-md  md:hidden flex justify-around items-center py-3 px-4 border-t  z-50">
        <Home size={24} className="hover:text-gray-300 cursor-pointer" onClick={(e) => handleTransition('/', 'Home', e)} />
        <ShoppingCart size={24} className="hover:text-gray-300 cursor-pointer" />
        <Menu
          size={24}
          className={`hover:text-gray-300 cursor-pointer transition-transform duration-300 ${showMobileMenu ? 'rotate-90' : ''}`}
          onClick={() => setShowMobileMenu(!showMobileMenu)}
        />
        <User size={24} className="hover:text-gray-300 cursor-pointer" />
        <ThemeToggle/>
        
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`fixed bottom-16 left-4 right-4 bg-white/10 backdrop-blur-md  rounded-xl py-4 px-6 z-50 space-y-3 text-center shadow-lg transform transition-all duration-300 ease-in-out ${
          showMobileMenu ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0 pointer-events-none'
        }`}
      >
        <div onClick={(e) => handleTransition('/products/men', 'Men', e)} className="cursor-pointer hover:text-gray-300 flex items-center justify-center space-x-2">
          <Shirt size={20} /> <span>Men</span>
        </div>
        <div onClick={(e) => handleTransition('/products/women', 'Women', e)} className="cursor-pointer hover:text-gray-300 flex items-center justify-center space-x-2">
          <Users size={20} /> <span>Women</span>
        </div>
        <div onClick={(e) => handleTransition('/track-order', 'Track Order', e)} className="cursor-pointer hover:text-gray-300 flex items-center justify-center space-x-2">
          <Truck size={20} /> <span>Order Track</span>
        </div>
        <div onClick={(e) => handleTransition('/about', 'About', e)} className="cursor-pointer hover:text-gray-300 flex items-center justify-center space-x-2">
          <Info size={20} /> <span>About</span>
        </div>
        <div onClick={(e) => handleTransition('/contact', 'Contact', e)} className="cursor-pointer hover:text-gray-300 flex items-center justify-center space-x-2">
          <Phone size={20} /> <span>Contact</span>
        </div>
        <div onClick={(e) => handleTransition('/contact', 'Contact', e)} className="cursor-pointer hover:text-gray-300 flex items-center justify-center space-x-2">
        <Heart size={20} /> <span>Favorites</span>
        </div>
      </div>

      <style jsx global>{`
        @keyframes slideLeft {
          0% {
            transform: translateX(100%);
            opacity: 0;
          }
          30% {
            opacity: 1;
          }
          50% {
            transform: translateX(0%);
            opacity: 1;
          }
          100% {
            transform: translateX(-100%);
            opacity: 0;
          }
        }

        .animate-slideLeft {
          animation: slideLeft 1s ease-in-out forwards;
        }

        @keyframes dropdown {
          0% {
            opacity: 0;
            transform: translateY(-10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-dropdown {
          animation: dropdown 0.3s ease forwards;
        }
      `}</style>
    </>
  );
};

export default Navbar;
