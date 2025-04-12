"use client"
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const Photo = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const images = ['/img11.jpeg', '/img14.jpg', '/img15.jpg'];

    const touchStartX = useRef(0);
    const touchEndX = useRef(0);

    // Auto-slide every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % images.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [images.length]);

    // Swipe support handlers
    const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
        touchStartX.current = event.touches[0].clientX;
    };

    const handleTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
        touchEndX.current = event.changedTouches[0].clientX;
        handleSwipe();
    };

    const handleSwipe = () => {
        const delta = touchStartX.current - touchEndX.current;
        if (delta > 50) {
            // Swiped left
            setCurrentImage((prev) => (prev + 1) % images.length);
        } else if (delta < -50) {
            // Swiped right
            setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
        }
    };

    return (
        <section
            className="relative w-full max-w-screen overflow-hidden !mt-0"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
        >
            <div className="relative h-[250px] md:h-[600px] w-full rounded-xl bg-black">
                <Image
                    src={images[currentImage]}
                    alt="carousel"
                    fill
                    className="rounded-xl object-contain md:object-cover transition-all duration-500 ease-in-out"
                />
            </div>

            {/* Desktop-only buttons */}
            <div className="absolute top-1/2 transform -translate-y-1/2 left-2 z-10 hidden md:flex">
                <button
                    onClick={() => setCurrentImage((prev) => (prev - 1 + images.length) % images.length)}
                    className="bg-black/60 text-white px-3 py-2 rounded-full"
                >
                    ⬅
                </button>
            </div>
            <div className="absolute top-1/2 transform -translate-y-1/2 right-2 z-10 hidden md:flex">
                <button
                    onClick={() => setCurrentImage((prev) => (prev + 1) % images.length)}
                    className="bg-black/60 text-white px-3 py-2 rounded-full"
                >
                    ➡
                </button>
            </div>
        </section>
    );
};

export default Photo;
