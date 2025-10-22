import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { personalInfo } from '../mock';
import ParticleBackground from './ParticleBackground';

const Hero = ({ onScrollToNext }) => {
  const [taglineIndex, setTaglineIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDecoding, setIsDecoding] = useState(true);

  // Decode animation for name
  useEffect(() => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&*';
    const finalText = `${personalInfo.name} / ${personalInfo.alias}`;
    let iteration = 0;

    const interval = setInterval(() => {
      setDisplayedText(
        finalText
          .split('')
          .map((char, index) => {
            if (index < iteration) {
              return finalText[index];
            }
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join('')
      );

      if (iteration >= finalText.length) {
        clearInterval(interval);
        setIsDecoding(false);
      }

      iteration += 1 / 3;
    }, 30);

    return () => clearInterval(interval);
  }, []);

  // Rotate taglines
  useEffect(() => {
    const interval = setInterval(() => {
      setTaglineIndex((prev) => (prev + 1) % personalInfo.taglines.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-gradient-to-b from-[#0a0a0f] via-[#0f0f1a] to-[#1a0f2e]">
      <ParticleBackground />
      
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4">
        {/* Glitch effect container */}
        <div className="relative mb-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-6xl md:text-8xl lg:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500"
            style={{ fontFamily: 'Orbitron, sans-serif' }}
          >
            {displayedText || `${personalInfo.name} / ${personalInfo.alias}`}
          </motion.h1>
          
          {/* Glitch layers */}
          {isDecoding && (
            <>
              <div className="absolute top-0 left-0 w-full h-full text-6xl md:text-8xl lg:text-9xl font-bold text-cyan-500 opacity-50 mix-blend-screen animate-glitch-1">
                {displayedText}
              </div>
              <div className="absolute top-0 left-0 w-full h-full text-6xl md:text-8xl lg:text-9xl font-bold text-pink-500 opacity-50 mix-blend-screen animate-glitch-2">
                {displayedText}
              </div>
            </>
          )}
        </div>

        {/* Animated tagline */}
        <motion.div
          key={taglineIndex}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.5 }}
          className="text-xl md:text-3xl text-gray-300 mb-12 font-light tracking-wider"
        >
          {personalInfo.taglines[taglineIndex]}
        </motion.div>

        {/* CTA Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0, 255, 255, 0.6)' }}
          whileTap={{ scale: 0.95 }}
          onClick={onScrollToNext}
          className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-full border-2 border-cyan-400 shadow-lg shadow-cyan-500/50 hover:shadow-cyan-500/80 transition-all duration-300"
        >
          Enter The Matrix
        </motion.button>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 1.5,
            repeat: Infinity,
            repeatType: 'reverse'
          }}
          className="absolute bottom-8 cursor-pointer"
          onClick={onScrollToNext}
        >
          <ChevronDown className="w-8 h-8 text-cyan-400" />
        </motion.div>
      </div>

      {/* Neon grid overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="h-full w-full" style={{
          backgroundImage: 'linear-gradient(rgba(0, 255, 255, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 255, 0.5) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
      </div>
    </section>
  );
};

export default Hero;