"use client";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import Image from "next/image";
import { User2Icon, ChevronDown, Sparkles, PenLine, BookOpenText, Shirt, HeartHandshake } from "lucide-react";
import { useState } from "react";
// import Navbar from "@/components/Navbar";

const AboutPage = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const iconVariants = {
    hover: { scale: 1.1, rotate: [0, -10, 10, 0], transition: { duration: 0.5 } },
  };

  const sections = [
    {
      id: "story",
      title: "The Story Behind the Brand",
      image: "/story.webp",
      content: `The Hidden Stuff isn’t just a brand, it’s a movement—a celebration of originality, creativity, and self-expression. Each design, each quote, and each product is meticulously crafted with one goal: to make you feel seen, understood, and inspired.

Every piece—be it a cozy hoodie, a stylish tote, or a timeless tee—carries a story. These aren’t just products; they’re wearable art, infused with meaning, and designed to spark conversations.`,
      icon: <PenLine className="w-6 h-6" />
    },
    {
      id: "why-choose",
      title: "Why Choose The Hidden Stuff?",
      image: "/choose.webp",
      content: `Unique Designs: Each product is one-of-a-kind, inspired by Anjali’s personal writings and ideas.

Thoughtful Craftsmanship: We pay attention to every detail, ensuring top-notch quality and comfort.

Empowering Stories: Our products don’t just look good—they mean something. They carry stories, emotions, and thoughts that empower and inspire.`,
      icon: <Sparkles className="w-6 h-6" />
    },
    {
      id: "mission",
      title: "Our Mission",
      image: "/mission.webp",
      content: `At The Hidden Stuff, we aim to turn everyday apparel into a powerful medium of self-expression. We believe that clothing should do more than cover—it should communicate. Our mission is to help you wear your story, celebrate your individuality, and carry a little piece of inspiration with you wherever you go.`,
      icon: <BookOpenText className="w-6 h-6" />
    },
    {
      id: "join",
      title: "Join the Movement",
      image: "/join.webp",
      content: `When you shop at The Hidden Stuff, you’re not just buying apparel—you’re discovering hidden treasures. You’re becoming a part of a community that values creativity, connection, and authenticity.

Explore our collection and find the piece that speaks to you. Because here at The Hidden Stuff, every item has a story—and it’s waiting for you to uncover it.

Discover. Inspire. Express.`,
      icon: <HeartHandshake className="w-6 h-6" />
    }
  ];

  return (
    <div>

    {/* <Navbar/> */}
    <div className="min-h-screen     font-sans">

<motion.section 
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.2 }}
        className="container mx-auto px-4 py-20 text-center"
        >
        <motion.div
          // variants={variants}
          className="relative inline-block mb-8"
          >
          <motion.div
            animate={{
              // scale: [1, 1.05, 1],
              // opacity: [0.5, 3, 0.5],
            }}
            transition={{ repeat: Infinity, duration: 3 }}
            className="text-4xl md:text-6xl font-extrabold text-center text-[#8FC028]"
            />
          <h1 className="text-4xl md:text-6xl font-extrabold text-center text-[#8FC028]">
            Welcome to The Hidden Stuff
          </h1>
        </motion.div>

        <motion.p
          variants={variants}
          className="text-xl md:text-2xl max-w-3xl mx-auto mt-8"
          >
          Where stories become style and words transform into wearable art
        </motion.p>
      </motion.section>

      {/* Founder Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative group"
            >
           <div className="absolute inset-0 text-[#8FC028] rounded-3xl blur opacity-30 group-hover:opacity-50 transition-all duration-300" />
            <div className="relative h-[600px] rounded-3xl overflow-hidden  ">
              <Image
                src="/found.webp"
                alt="Dr. Anjali Srivastava"
                fill
                className="object-cover"
                quality={100}
                placeholder="blur"
                blurDataURL="/placeholder-founders.jpg"
                />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            >
            <div className="flex items-center gap-4 mb-6">
              <motion.div
                whileHover="hover"
                variants={iconVariants}
                className="p-4  rounded-full border-2 border-[#7DC23B]"
                >
                <User2Icon className="text-[#84E12E] w-8 h-8" />
              </motion.div>
              <h2 className="text-2xl md:text-5xl font-extrabold text-center text-[#8FC028]">
                Meet the Founder
              </h2>
            </div>
            <p className="text-lg text-black font-semibold mb-4">
              Dr. Anjali Srivastava - Storyteller, Visionary, and Creative Force
            </p>
            <p >
              From heartfelt poems to social media sensations, Anjali's words have always connected souls. 
              Her journey from digital screens to tangible creations birthed The Hidden Stuff - where every 
              stitch carries a story.
            </p>
          </motion.div>
        </div>
      </section>
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl md:text-5xl mb-3 font-extrabold text-center text-[#8FC028]"
          >
          Our Journey
        </motion.h1>

        <LayoutGroup>
          {sections.map((section) => (
            <motion.div 
            key={section.id}
            className="mb-8 rounded-3xl overflow-hidden border border-[#7DC23B] hover:border-[#84E12E] transition-all"
            layout
            >
              <motion.div
                className="p-6 md:p-8 cursor-pointer"
                onClick={() => setExpandedSection(expandedSection === section.id ? null : section.id)}
                layout
                >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <motion.div
                      whileHover={{ rotate: 10, scale: 1.1 }}
                      className="p-3 text-[#84E12E] rounded-lg"
                      >
                      {section.icon}
                    </motion.div>
                    <h2 className="text-xl md:text-2xl font-semibold">{section.title}</h2>
                  </div>
                  <motion.div
                    animate={{ rotate: expandedSection === section.id ? 180 : 0 }}
                    className="text-[#84E12E]"
                    >
                    <ChevronDown size={24} />
                  </motion.div>
                </div>
              </motion.div>

              <AnimatePresence>
                {expandedSection === section.id && (
                  <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="overflow-hidden"
                  layout
                  >
                    <div className="grid md:grid-cols-2 gap-8 p-6 md:p-8">
                      <motion.div
                        initial={{ scale: 0.95 }}
                        animate={{ scale: 1 }}
                        className="relative h-64 md:h-80 rounded-2xl overflow-hidden"
                        >
                        <Image
                          src={section.image}
                          alt={section.title}
                          fill
                          className="object-fit"
                          sizes="(max-width: 768px) 100vw, 50vw "
                          />
                      </motion.div>
                      <motion.p
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className=" text-lg md:text-xl leading-relaxed"
                        >
                        {section.content}
                      </motion.p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </LayoutGroup>

        {/* Values Section */}
        <motion.div 
          className="grid md:grid-cols-3 gap-8 mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          >
          <motion.div 
            whileHover={{ y: -10 }}
            className="p-6  rounded-2xl border border-[#7DC23B]"
            >
            <Shirt className="w-12 h-12 text-[#84E12E] mb-4" />
            <h3 className="text-xl font-semibold mb-2">Wearable Art</h3>
            <p className="">Each piece tells a unique story through design</p>
          </motion.div>

          <motion.div 
            whileHover={{ y: -10 }}
            className="p-6  rounded-2xl border border-[#7DC23B]"
            >
            <Sparkles className="w-12 h-12 text-[#84E12E] mb-4" />
            <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
            <p className="">Crafted with care for lasting comfort</p>
          </motion.div>

          <motion.div 
            whileHover={{ y: -10 }}
            className="p-6  rounded-2xl border border-[#7DC23B]"
            >
            <HeartHandshake className="w-12 h-12 text-[#84E12E] mb-4" />
            <h3 className="text-xl font-semibold mb-2">Community First</h3>
            <p className="">Join our movement of self-expression</p>
          </motion.div>
        </motion.div>
      </div>
      <section className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center max-w-4xl mx-auto"
          >
          <div className="inline-block mb-8">
            <motion.div
              animate={{
                width: ['0%', '100%', '0%'],
                backgroundPosition: ['0%', '100%', '0%'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="h-1  bg-gradient-to-br from-[#7DC23B] via-[#9AF95D] to-[#8FC028]"
              />
            <h2 className="text-4xl font-bold mt-4  text-[#8FC028] bg-clip-text ">
              Our Mission
            </h2>
          </div>
          <p className="text-xl ">
            Transforming everyday apparel into powerful mediums of self-expression, 
            helping you wear your story and celebrate individuality
          </p>
        </motion.div>
      </section>
    </div>
              </div>
  );
};

export default AboutPage;