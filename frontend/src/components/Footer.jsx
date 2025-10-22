import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Code } from 'lucide-react';
import { personalInfo } from '../mock';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0a0a0f] border-t border-cyan-500/20 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 text-gray-400"
          >
            <span>© {currentYear}</span>
            <span className="text-cyan-400 font-bold">{personalInfo.name}</span>
            <span>All rights reserved.</span>
          </motion.div>

          {/* Made with love */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex items-center gap-2 text-gray-400"
          >
            <span>Made with</span>
            <Heart className="text-pink-500 fill-pink-500" size={16} />
            <span>and</span>
            <Code className="text-cyan-400" size={16} />
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-4"
          >
            <a
              href="#about"
              className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
            >
              About
            </a>
            <span className="text-gray-600">•</span>
            <a
              href="#projects"
              className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
            >
              Projects
            </a>
            <span className="text-gray-600">•</span>
            <a
              href="#contact"
              className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
            >
              Contact
            </a>
          </motion.div>
        </div>

        {/* Easter Egg Hint */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-6 text-gray-600 text-sm font-mono"
        >
          <span className="text-purple-500">Psst...</span> Try typing "MIKEY" anywhere on the page 😉
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;