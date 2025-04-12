'use client';

import React, { useRef, useState } from 'react';
import Image from 'next/image';
import products from '../../lib/Products';

const Products = () => {
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
        <div className="mb-10">
            <div className="flex justify-between items-center px-4 md:px-8 text-white">
                <h2 className="text-xl md:text-2xl font-bold">{title}</h2>
                <button className="text-yellow-400 text-sm">Show All</button>
            </div>

            <div
                ref={containerRefs[type]}
                onScroll={() => handleScroll(type)}
                className="flex flex-col justify-center overflow-x-auto whitespace-nowrap px-4 md:px-8 mt-4 custom-scrollbar"
            >
                <div className="flex gap-4">
                    {data.map((item, index) => {
                        const dist = Math.abs(centerIndex[type] - index);
                        const translateY = dist === 0 ? '-20px' : `-${10 - Math.min(dist * 4, 10)}px`;
                        const scale = dist === 0 ? 1.05 : 1;

                        return (
                            <div
                                key={item.id}
                                data-index={index}
                                className="rounded-xl min-w-[180px] md:min-w-[220px] p-3 transition-all duration-500 ease-in-out"
                                style={{
                                    transform: `translateY(${translateY}) scale(${scale})`,
                                }}
                            >
                                <div
                                    className="relative h-[300px] md:h-[210px] w-[170px] rounded-xl overflow-hidden"
                                    style={{ backgroundColor: item.color || '#e0e0e0' }}
                                >
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
            {renderSlider('Popular - Women', products.women, 'women')}
            {renderSlider('Popular - Men', products.men, 'men')}
        </section>
    );
};

export default Products;
