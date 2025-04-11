import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className="relative w-full h-screen overflow-x-hidden">
      {/* Background image */}
      <Image
        src="/luffy2.jpg"
        alt="Hero Image"
        fill
        className="object-cover"
        priority
      />

      {/* T-shirt image: visible only on desktop/tablet */}
      <div className="absolute top-10 left-20 hidden md:block z-10">
        <Image
          src="/img1.png"
          alt="T-shirt"
          width={300}
          height={400}
          className="object-contain"
        />
      </div>

      {/* Mobile T-shirt image */}
      <div className="absolute top-[70px] left-1/2 transform -translate-x-1/2 md:hidden z-10">
        <Image
          src="/img1.png"
          alt="T-shirt"
          width={220}
          height={280}
          className="object-contain "
        />
      </div>

      {/* Text block */}
      <div className="absolute z-20 px-3 w-full flex flex-col items-center md:items-start text-center md:text-left top-[55%] md:top-[330px] md:left-[6%]">
        <h1 className="text-3xl md:text-5xl font-bold text-white drop-shadow">
          Luffy <span className="text-yellow-400 italic">Oversized</span>
        </h1>
        <div className="text-lg md:text-3xl font-bold text-white mt-1">T-shirts</div>
        <p className="text-sm md:text-base text-white font-medium mt-2 max-w-[300px] md:max-w-sm">
          This Luffy oversized T-shirt is extraordinary – the best fit you’ll find.
        </p>
        <button className="px-6 py-2 rounded-2xl bg-yellow-400 text-white font-semibold text-base md:text-lg mt-4">
          View
        </button>
      </div>
    </div>
  )
}

export default Hero
