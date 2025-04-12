"use client";
import { motion } from "framer-motion";
import {
  ShoppingCart, Phone, Mail, MapPin,
  Facebook, Twitter, Instagram, Linkedin, CreditCard
} from 'lucide-react';

export default function FooterSection() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-gray-300 border-t border-gray-800">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 py-12"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 border-b border-gray-800 pb-12">
          {/* Company Info */}
          <motion.div
            initial={{ x: -50 }}
            whileInView={{ x: 0 }}
            className="space-y-6"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3"
            >
              <ShoppingCart className="w-8 h-8 text-[#84E12E]" />
              <h3 className="text-2xl font-bold text-[#8FC028]">The Hidden Stuff</h3>
            </motion.div>
            <p className="text-gray-400">
              Premium e-commerce solutions for modern businesses.
            </p>
            <div className="flex gap-4">
              {[CreditCard, Phone, Mail].map((Icon, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.1, boxShadow: "0 0 15px rgba(34, 211, 238, 0.3)" }}
                  className="p-2 bg-gray-800 rounded-full cursor-pointer"
                >
                  <Icon className="w-6 h-6 text-[#84E12E]" />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <h4 className="text-xl font-semibold text-[#8FC028]">Quick Links</h4>
            <ul className="space-y-3">
              {['About Us', 'Products', 'Blog', 'Careers'].map((link, index) => (
                <motion.li
                  key={link}
                  initial={{ x: -30 }}
                  whileInView={{ x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 10 }}
                  className="text-gradient-to-r from-[#84E12E] to-[#6b9d44] hover:text-[#84E12E] transition-colors"
                >
                  <a href="#" className="block py-1">{link}</a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            <h4 className="text-xl font-semibold text-[#8FC028]">Contact</h4>
            <div className="space-y-4">
              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-center gap-3 text-gray-400"
              >
                <Phone className="w-6 h-6 text-[#84E12E]" />
                <span>+91 910 1122 334</span>
              </motion.div>
              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-center gap-3 text-gray-400"
              >
                <Mail className="w-6 h-6 text-[#84E12E]" />
                <span>contact@thehiddenstuff.com</span>
              </motion.div>
              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-center gap-3 text-gray-400"
              >
                <MapPin className="w-6 h-6 text-[#84E12E]" />
                <span>Ranchi, Jharkhand</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
            <h4 className="text-xl font-semibold text-[#8FC028]">Newsletter</h4>
            <form className="flex flex-col gap-4">
              <motion.input
                whileHover={{ scale: 1.02 }}
                whileFocus={{ boxShadow: "0 0 15px rgba(34, 211, 238, 0.2)" }}
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-xl bg-gray-800 border-2 border-gray-700 focus:border-[#84E12E] focus:outline-none transition-all"
              />
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 20px rgba(34, 211, 238, 0.3)"
                }}
                className="w-full px-6 py-3 bg-gradient-to-r from-[#84E12E] to-[#6b9d44] text-black font-bold rounded-xl transition-colors"
              >
                Subscribe
              </motion.button>
            </form>
            <div className="flex gap-4 mt-4">
              {[
                { icon: Facebook, color: "#84E12E" },
                { icon: Twitter, color: "#84E12E" },
                { icon: Instagram, color: "#84E12E" },
                { icon: Linkedin, color: "#84E12E" }
              ].map((Social, index) => (
                <motion.a
                  key={index}
                  whileHover={{ 
                    scale: 1.2,
                    boxShadow: `0 0 15px ${Social.color}`
                  }}
                  className="p-2 bg-gray-800 rounded-full cursor-pointer"
                >
                  <Social.icon className="w-6 h-6 text-[#84E12E]" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="pt-8 text-center text-gray-500"
        >
          <p>© {new Date().getFullYear()} The Hidden Stuff. All rights reserved.</p>
        </motion.div>
      </motion.div>
    </footer>
  );
}