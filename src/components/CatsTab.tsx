import React from 'react';
import { motion } from 'motion/react';
import { Heart } from 'lucide-react';

const cats = [
  { url: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=400&q=80", caption: "Samira would love this cute little one..." },
  { url: "https://images.unsplash.com/photo-1573865526739-10659fec78a5?auto=format&fit=crop&w=400&q=80", caption: "This cat is as adorable as you, Samira 🐱💖" },
  { url: "https://images.unsplash.com/photo-1533733508377-33815356c35b?auto=format&fit=crop&w=400&q=80", caption: "A bundle of joy, just like your smile." },
  { url: "https://images.unsplash.com/photo-1513245533418-29753dcbb749?auto=format&fit=crop&w=400&q=80", caption: "Peaceful moments remind me of us." },
];

export const CatsTab = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-full py-20 px-4 overflow-y-auto">
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-light mb-12 tracking-widest text-pink-200"
      >
        Cute Cat World
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full">
        {cats.map((cat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="bg-glass p-4 rounded-3xl group relative"
          >
            <div className="overflow-hidden rounded-2xl mb-4 relative">
              <img 
                src={cat.url} 
                alt="Cute cat" 
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <Heart className="text-pink-400 fill-pink-400 w-6 h-6" />
              </div>
            </div>
            <p className="text-sm italic text-pink-100/80 text-center px-2">{cat.caption}</p>
            
            {/* Floating sparkles */}
            <motion.div
              animate={{ opacity: [0, 1, 0], scale: [0.5, 1.2], y: [-10, -30] }}
              transition={{ duration: 2, repeat: Infinity, delay: Math.random() * 2 }}
              className="absolute -top-2 -right-2 text-yellow-200"
            >
              ✨
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
