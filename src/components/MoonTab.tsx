import React from 'react';
import { motion } from 'motion/react';

const quotes = [
  "Samira, you shine brighter than the moon.",
  "Even the moon looks beautiful because it reminds me of you.",
  "Every night, I see you in the moonlight, Samira.",
];

export const MoonTab = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full px-4 relative overflow-hidden">
      {/* Stars Background */}
      <div className="absolute inset-0 z-0">
        {[...Array(100)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: Math.random() }}
            animate={{ opacity: [0.2, 1, 0.2] }}
            transition={{ duration: Math.random() * 3 + 2, repeat: Infinity }}
            className="absolute w-0.5 h-0.5 bg-white rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Clouds */}
      <motion.div
        animate={{ x: [-100, window.innerWidth] }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/4 left-0 w-64 h-20 bg-white/5 blur-3xl rounded-full z-10"
      />
      <motion.div
        animate={{ x: [window.innerWidth, -100] }}
        transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-1/3 right-0 w-96 h-32 bg-white/5 blur-3xl rounded-full z-10"
      />

      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2 }}
        className="relative z-20 mb-16"
      >
        <div className="w-48 h-48 rounded-full bg-gradient-to-br from-white via-blue-50 to-gray-300 shadow-[0_0_100px_rgba(255,255,255,0.4)] relative overflow-hidden">
          {/* Moon Craters */}
          <div className="absolute top-10 left-12 w-8 h-8 bg-black/5 rounded-full blur-sm" />
          <div className="absolute top-24 left-24 w-12 h-12 bg-black/5 rounded-full blur-sm" />
          <div className="absolute top-32 left-8 w-6 h-6 bg-black/5 rounded-full blur-sm" />
        </div>
        <motion.div
          animate={{ opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute inset-0 rounded-full bg-white/20 blur-2xl"
        />
      </motion.div>

      <div className="text-center z-20 max-w-2xl">
        {quotes.map((quote, index) => (
          <motion.p
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 + index * 1.5, duration: 1.5 }}
            className="text-xl md:text-2xl font-light italic text-blue-100/80 mb-6 leading-relaxed"
          >
            "{quote}"
          </motion.p>
        ))}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 6 }}
          className="text-sm tracking-[0.3em] text-blue-300/60 uppercase mt-8"
        >
          — Samira, my moonlight
        </motion.p>
      </div>
    </div>
  );
};
