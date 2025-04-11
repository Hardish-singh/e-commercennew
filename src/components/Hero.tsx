'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const features = [
  {
    id: 1,
    bgimageUrl: '/luffy2.jpg',
    mainimageUrl: '/img1.png',
    title: 'Luffy',
    coltitle: 'Oversized',
    desc: 'This Luffy oversized T-shirt is extraordinary – the best fit you’ll find.',
  },
  {
    id: 2,
    bgimageUrl: '/skelton.jpg',
    mainimageUrl: '/img2.png',
    title: 'Hysteria',
    coltitle: 'Oversized',
    desc: 'Get the Zoro vibe with this razor-sharp design.',
  },
  {
    id: 3,
    bgimageUrl: '/skelton2.jpg',
    mainimageUrl: '/img3.png',
    title: 'Darkhorn',
    coltitle: 'Oversized',
    desc: 'Get the devil vibe with this Dark-horn design.',
  },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextSlide = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % features.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + features.length) % features.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // 2 seconds

    return () => clearInterval(interval); // Clear interval on unmount
  }, [current]);

  const { bgimageUrl, mainimageUrl, title, coltitle, desc } = features[current];
  const isLuffyLayout = current === 0 || current === 2; // use same layout for ID 3

  const slideVariants = {
    enter: (custom: number) => ({
      x: custom > 0 ? 500 : -500,
      y: 80,
      opacity: 0,
      rotate: custom > 0 ? 15 : -15,
    }),
    center: {
      x: 0,
      y: 0,
      opacity: 1,
      rotate: 0,
      transition: { duration: 0.4, ease: 'easeOut' },
    },
    exit: (custom: number) => ({
      x: custom < 0 ? 500 : -500,
      y: 80,
      opacity: 0,
      rotate: custom < 0 ? 15 : -15,
      transition: { duration: 0.4, ease: 'easeInOut' },
    }),
  };

  const bgVariants = {
    initial: { opacity: 0, scale: 1.05 },
    animate: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: 'easeInOut' } },
    exit: { opacity: 0, scale: 1.05, transition: { duration: 0.6, ease: 'easeInOut' } },
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={bgimageUrl}
          className="absolute inset-0 z-0"
          variants={bgVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <Image src={bgimageUrl} alt="Hero Background" fill className="object-cover" priority />
        </motion.div>
      </AnimatePresence>

      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={current}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          className="absolute inset-0"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={(e, info) => {
            if (info.offset.x > 100) {
              prevSlide();
            } else if (info.offset.x < -100) {
              nextSlide();
            }
          }}
        >
          {/* Desktop Image */}
          <div className={`absolute top-14 ${isLuffyLayout ? 'left-20' : 'left-[65%]'} hidden md:block z-10`}>
            <Image src={mainimageUrl} alt="T-shirt" width={300} height={500} className="object-contain" />
          </div>

          {/* Mobile Image */}
          <div className="absolute top-[50px] left-1/2 transform -translate-x-1/2 flex justify-center md:hidden z-10 w-[90vw] max-w-[620px]">
            <Image src={mainimageUrl} alt="T-shirt" width={370} height={450} className="object-contain" />
          </div>

          {/* Text Block */}
          <div
            className={`absolute z-20 px-3 w-full flex flex-col items-center text-center
              md:items-start md:text-left 
              ${isLuffyLayout ? 'md:left-[6%]' : 'md:left-[60%]'} 
              top-[60%] md:top-[340px] transition-all duration-300`}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow">
              {title}{' '}
              <span className="text-yellow-400 italic">{coltitle}</span>
            </h1>
            <div className="text-2xl md:text-3xl font-bold text-white mt-1">T-shirts</div>
            <p className="text-sm md:text-base text-white font-medium mt-2 max-w-[300px] md:max-w-sm">
              {desc}
            </p>
            <button className="px-6 py-2 rounded-2xl bg-yellow-400 text-white font-semibold text-base md:text-xl mt-4">
              View
            </button>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Carousel Buttons (Desktop Only) */}
      <div className="absolute bottom-8 md:bottom-auto md:top-1/2 left-0 md:left-8 transform md:-translate-y-1/2 z-30 hidden md:block">
        <button
          onClick={prevSlide}
          className="text-white font-bold bg-black/40 hover:bg-black/60 transition px-4 py-2 rounded-full"
        >
          ◀
        </button>
      </div>

      <div className="absolute bottom-8 md:bottom-auto md:top-1/2 right-0 md:right-8 transform md:-translate-y-1/2 z-30 hidden md:block">
        <button
          onClick={nextSlide}
          className="text-white font-bold bg-black/40 hover:bg-black/60 transition px-4 py-2 rounded-full"
        >
          ▶
        </button>
      </div>
    </div>
  );
};

export default Hero;
