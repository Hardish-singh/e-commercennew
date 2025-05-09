'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Shirt, Sparkles, SmilePlus, ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';

const features = [
  {
    icon: <Shirt className="w-6 h-6 text-[#84E12E]" />,
    title: 'Unique Streetwear',
    desc: 'Every piece is crafted with bold, underground fashion in mind.',
  },
  {
    icon: <Sparkles className="w-6 h-6 text-[#84E12E]" />,
    title: 'High-End Quality',
    desc: 'Premium materials for lasting comfort and luxury feel.',
  },
  {
    icon: <SmilePlus className="w-6 h-6 text-[#84E12E]" />,
    title: 'Designed for Rebels',
    desc: 'Style made for those who don’t follow trends—they make them.',
  },
];

const About = () => {

  const router = useRouter();
  return (
    <section className="min-h-screen   flex flex-col items-center justify-center px-6 py-16">
      
    
      <motion.h1
        className="text-4xl md:text-6xl font-extrabold text-center text-[#8FC028]"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        The Hidden Stuff
      </motion.h1>

     
      <motion.p
        className=" mt-4 text-center max-w-xl"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        Hidden Stuff is not just a clothing shop—it's a movement of creative rebellion and expressive style. 
        We blend art with apparel, and street with sophistication.
      </motion.p>

      {/* Features Grid */}
      <div className="grid md:grid-cols-3 gap-6 mt-12">
        {features.map((feat, i) => (
          <motion.div
            key={i}
            className=" border border-[#84E12E] rounded-2xl p-6 flex flex-col items-center text-center shadow-lg"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="mb-4">{feat.icon}</div>
            <h3 className="font-semibold text-lg text-[#8FC028]">{feat.title}</h3>
            <p className="text-sm  mt-2">{feat.desc}</p>
          </motion.div>
        ))}
      </div>

   
      <motion.button
      onClick={()=>{
        router.push(`/about`)
      }}
        className="mt-12 bg-[#7DC23B] hover:bg-[#84E12E] text-black font-semibold px-6 py-3 rounded-full flex items-center gap-2 transition-all"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        More About Us <ArrowRight className="w-4 h-4" />
      </motion.button>
    </section>
  );
};

export default About;
