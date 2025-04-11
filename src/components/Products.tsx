'use client';

import React from 'react';
import Image from 'next/image';
import products from '../../lib/Products';


const ProductSlider = ({ title, data }: { title: string; data: typeof products.women }) => (
    <div className="mb-10">
        <div className="flex justify-between items-center px-4 md:px-8 text-white">
            <h2 className="text-xl md:text-2xl font-bold">{title}</h2>
            <button className="text-yellow-400 text-sm">Show All</button>
        </div>

        <div className="flex flex-col justify-center overflow-x-auto whitespace-nowrap px-4 md:px-8 mt-4 custom-scrollbar">
            <div className="flex gap-4">
                {data.map((item) => (
                    <div key={item.id} className="rounded-xl min-w-[180px] md:min-w-[220px] p-3">
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
                ))}
            </div>
        </div>
    </div>
);

const Products = () => {
    return (
        <section className="bg-black py-8">
            <ProductSlider title="Popular - Women" data={products.women} />
            <ProductSlider title="Popular - Men" data={products.men} />
        </section>
    );
};

export default Products;
