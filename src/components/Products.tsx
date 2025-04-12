'use client';

import React, { useRef, useState } from 'react';
import Image from 'next/image';
import products from '../../lib/Products';
import { useRouter } from 'next/navigation';

const Products = () => {
    const router = useRouter();
    const containerRefs = {
        women: useRef<HTMLDivElement>(null),
        men: useRef<HTMLDivElement>(null),
    };

    const [centerIndex, setCenterIndex] = useState({
        women: 0,
        men: 0,
    });

    const handleScroll = (type: 'women' | 'men') => {
        const container = containerRefs[type].current;
        if (!container) return;

        const items = container.querySelectorAll('[data-index]');
        let closest = 0;
        let minDist = Infinity;

        items.forEach((item) => {
            const rect = (item as HTMLElement).getBoundingClientRect();
            const center = window.innerWidth / 2;
            const dist = Math.abs(rect.left + rect.width / 2 - center);
            const index = parseInt((item as HTMLElement).dataset.index || '0');

            if (dist < minDist) {
                minDist = dist;
                closest = index;
            }
        });

        setCenterIndex((prev) => ({ ...prev, [type]: closest }));
    };

    const renderSlider = (title: string, data: typeof products.women, type: 'women' | 'men') => (
        <div className="relative mb-10">
            <div className="flex justify-center items-center px-4 md:px-8 text-white">
                <h2 className="text-xl md:text-5xl font-bold text-center text-[#8FC028]  ">{title}</h2>
            </div>
            <button className="text-[#84E12E] absolute right-4 text-sm">Show All</button>

            <div
                ref={containerRefs[type]}
                onScroll={() => handleScroll(type)}
                className="flex flex-col justify-center overflow-x-auto whitespace-nowrap px-4 md:px-8 mt-4 custom-scrollbar"
            >
                <div  className="flex gap-4">
                    {data.map((item, index) => {
                        const dist = Math.abs(centerIndex[type] - index);
                        const translateY = dist === 0 ? '-20px' : `-${10 - Math.min(dist * 4, 10)}px`;
                        const scale = dist === 0 ? 1.05 : 1;

                        return (
                            <div
                            onClick={()=>{
                                router.push(`/products/${item.id}`)
                              }}
                                key={item.id}
                                data-index={index}
                                className="rounded-xl cursor-pointer min-w-[180px] md:min-w-[220px] p-3 transition-all duration-500 ease-in-out"
                                style={{
                                    transform: `translateY(${translateY}) scale(${scale})`,
                                }}
                            >
                                <div
                                    className="relative h-[300px] md:h-[210px] w-[170px] rounded-xl overflow-hidden"
                                    style={{ backgroundColor: item.color || '#e0e0e0' }}
                                >
                                    {/* Hot Deal Icon */}
                                    <div className="absolute top-2 right-2 z-10 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-4 w-4"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                        >
                                            <path d="M12.395 2.553a1 1 0 00-1.45-.385c-.381.274-.79.62-1.225 1.025C9.148 3.66 8.457 4.5 7.5 4.5c-1.5 0-2.5 1.5-2.5 3 0 2.4 1.9 5.1 5 7.5 3.1-2.4 5-5.1 5-7.5 0-1.5-1-3-2.5-3-.957 0-1.648-.84-2.22-1.307a10.73 10.73 0 01-1.225-1.025 1 1 0 00-1.45.385z" />
                                        </svg>
                                        <span>DEAL</span>
                                    </div>

                                    <Image
                                        src={item.img}
                                        alt={item.name}
                                        fill
                                        className="absolute object-cover object-bottom scale-110 rounded-xl"
                                    />
                                </div>
                                <div className="text-white font-semibold mt-2">{item.name}</div>
                                <div className="text-gray-400 text-sm">{item.collection}</div>
                                <div className="text-white mt-1">{item.price}</div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );

    return (
        <section className="bg-black py-8">
            {renderSlider('Popular - Products', products.women, 'women')}
            {renderSlider('', products.men, 'men')}
        </section>
    );
};

export default Products;
