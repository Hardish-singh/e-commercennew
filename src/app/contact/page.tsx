"use client"
import { motion } from "framer-motion";
import Head from "next/head";
import { Mail, MapPin, Phone } from "lucide-react";

const ContactPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <>
      <Head>
        <title>Contact Us</title>
      </Head>
      
      <div className="min-h-screen bg-black text-white">
        {/* Animated Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="pt-16 pb-12 text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
            Get In Touch
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg opacity-90">
            We'd love to hear from you! Reach out for inquiries, collaborations, or just to say hello.
          </p>
        </motion.div>

        {/* Contact Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="container mx-auto px-4 py-12 grid md:grid-cols-2 gap-12"
        >
          {/* Contact Form */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h2 className="text-2xl font-bold text-yellow-400">Send Us a Message</h2>
            
            <form className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium">Your Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all"
                  placeholder="rohit"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium">Email Address</label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all"
                  placeholder="you@rohit.com"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium">Your Message</label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all"
                  placeholder="What would you like to say?"
                ></textarea>
              </div>
              
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-bold py-3 px-6 rounded-lg shadow-lg hover:shadow-yellow-500/30 transition-all"
                type="submit"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants} className="space-y-8">
            <h2 className="text-2xl font-bold text-yellow-400">Contact Information</h2>
            
            <div className="space-y-6">
              {/* Email */}
              <motion.div 
                whileHover={{ x: 5 }}
                className="flex items-start gap-4"
              >
                <div className="p-2 bg-gray-900 rounded-full">
                  <Mail className="h-5 w-5 text-yellow-400" />
                </div>
                <div>
                  <h3 className="font-medium text-yellow-400">Email</h3>
                  <p className="text-gray-300">contact@thehiddenstuff.com</p>
                </div>
              </motion.div>
              
              {/* Phone */}
              <motion.div 
                whileHover={{ x: 5 }}
                className="flex items-start gap-4"
              >
                <div className="p-2 bg-gray-900 rounded-full">
                  <Phone className="h-5 w-5 text-yellow-400" />
                </div>
                <div>
                  <h3 className="font-medium text-yellow-400">Phone</h3>
                  <p className="text-gray-300">+1 (555) 123-4567</p>
                </div>
              </motion.div>
              
              {/* Address */}
              <motion.div 
                whileHover={{ x: 5 }}
                className="flex items-start gap-4"
              >
                <div className="p-2 bg-gray-900 rounded-full">
                  <MapPin className="h-5 w-5 text-yellow-400" />
                </div>
                <div>
                  <h3 className="font-medium text-yellow-400">Address</h3>
                  <p className="text-gray-300">123 Fashion Street</p>
                  <p className="text-gray-300">Ranchi, Jarkhand 10001</p>
                </div>
              </motion.div>
            </div>
            
            {/* Social Media */}
            <div className="pt-4">
              <h3 className="text-lg font-medium text-yellow-400 mb-4">Follow Us</h3>
              <div className="flex gap-4">
                {['Instagram', 'Twitter', 'Facebook'].map((social) => (
                  <motion.a
                    key={social}
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    href="#"
                    className="bg-gray-900 hover:bg-gray-800 px-4 py-2 rounded-lg transition-all"
                  >
                    {social}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default ContactPage;