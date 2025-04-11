"use client";
import { motion } from "framer-motion";
import { Truck, RefreshCw, Headset } from "lucide-react";



const FeaturesSection = () => {
  const features = [
    {
      icon: <Truck className="w-12 h-12 text-[#84E12E]" />,
      title: "PAN INDIA FREE SHIPPING",
      description: "Free delivery across all Indian states with tracked shipping"
    },
    {
      icon: <RefreshCw className="w-12 h-12 text-[#84E12E]" />,
      title: "RETURNS AND EXCHANGES",
      description: "30-day hassle-free return and exchange policy"
    },
    {
      icon: <Headset className="w-12 h-12 text-[#84E12E]" />,
      title: "24/7 CUSTOMER SUPPORT",
      description: "Round-the-clock assistance through chat, email, and phone"
    }
  ];

  return (
    <section className="bg-bg-black py-16 px-4 sm:px-6 lg:px-8 border-t">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto"
      >
        < div className="mb-12 text-center space-y-4">
       <h1 className="text-4xl md:text-6xl font-extrabold text-center text-[#8FC028] ">
      
            Our Services
          </h1>
          <p className="text-lg text-gray-300">
            Quality services for seamless shopping
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0.95 }}
              whileInView={{ scale: 1 }}
              whileHover={{ 
                scale: 1.02,
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
            
                <div className="flex flex-col items-center text-center gap-6">
                  <motion.div 
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring" }}
                    className=" p-4 rounded-full"
                  >
                    {feature.icon}
                  </motion.div>
                  
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-[#8FC028]">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
            
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default FeaturesSection;