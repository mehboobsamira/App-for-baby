import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, Gift } from 'lucide-react';

export const HomeTab = ({ onComplete }: { onComplete: () => void }) => {
  const [stage, setStage] = useState<'intro' | 'love' | 'tree' | 'heart' | 'samira' | 'rain' | 'chaos' | 'gift' | 'butterfly' | 'final' | 'finished'>('intro');
  const [showMessage, setShowMessage] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (stage === 'intro') {
      const timer = setTimeout(() => setStage('love'), 2000);
      return () => clearTimeout(timer);
    }

    if (stage === 'love') {
      const timer = setTimeout(() => setStage('tree'), 4000);
      return () => clearTimeout(timer);
    }

    if (stage === 'tree') {
      const timer = setTimeout(() => setStage('heart'), 5000);
      return () => clearTimeout(timer);
    }

    if (stage === 'heart') {
      const timer = setTimeout(() => setStage('samira'), 4000);
      return () => clearTimeout(timer);
    }

    if (stage === 'samira') {
      const timer = setTimeout(() => setStage('rain'), 4000);
      return () => clearTimeout(timer);
    }

    if (stage === 'rain') {
      const timer = setTimeout(() => setStage('chaos'), 5000);
      return () => clearTimeout(timer);
    }

    if (stage === 'chaos') {
      const timer = setTimeout(() => setStage('gift'), 3000);
      return () => clearTimeout(timer);
    }

    if (stage === 'gift') {
      const timer = setTimeout(() => setStage('butterfly'), 4000);
      return () => clearTimeout(timer);
    }

    if (stage === 'butterfly') {
      const timer = setTimeout(() => setStage('final'), 6000);
      return () => clearTimeout(timer);
    }

    if (stage === 'final') {
      const timer = setTimeout(() => {
        setStage('finished');
        onComplete();
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [stage, onComplete]);

  return (
    <div ref={containerRef} className="relative w-full h-full flex items-center justify-center overflow-hidden">
      <AnimatePresence mode="wait">
        {stage === 'intro' && (
          <motion.div
            key="intro"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-white/20 tracking-[1em] uppercase text-sm"
          >
            A Journey of Emotions
          </motion.div>
        )}

        {stage === 'love' && (
          <motion.div
            key="love"
            initial={{ opacity: 0, scale: 0.5, filter: 'blur(10px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, scale: 1.5, filter: 'blur(20px)' }}
            transition={{ duration: 2 }}
            className="font-dancing text-8xl text-pink-400 text-glow"
          >
            LOVE
          </motion.div>
        )}

        {stage === 'tree' && (
          <motion.div
            key="tree"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="relative flex flex-col items-center"
          >
            {/* Simple animated tree representation */}
            <div className="w-1 h-64 bg-gradient-to-t from-pink-900 to-pink-400 rounded-full relative">
              {[...Array(12)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0, rotate: (i % 2 === 0 ? 45 : -45) }}
                  animate={{ height: 100 - i * 5 }}
                  transition={{ delay: i * 0.2, duration: 2 }}
                  className="absolute bottom-1/2 left-0 w-0.5 bg-pink-400 origin-bottom"
                  style={{ bottom: `${20 + i * 8}%` }}
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: [0, 1.2, 1] }}
                    transition={{ delay: 2 + i * 0.2, repeat: Infinity, repeatType: 'reverse', duration: 2 }}
                    className="absolute -top-2 -left-2"
                  >
                    <Heart className="text-pink-300 fill-pink-300 w-4 h-4 shadow-glow" />
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {stage === 'heart' && (
          <motion.div
            key="heart"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: [0, 1.2, 1] }}
            exit={{ opacity: 0, scale: 2 }}
            transition={{ duration: 2 }}
            className="relative"
          >
            <Heart className="w-64 h-64 text-pink-500 fill-pink-500 shadow-[0_0_100px_rgba(236,72,153,0.5)]" />
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 0.8, repeat: Infinity }}
              className="absolute inset-0 bg-pink-500/20 blur-3xl rounded-full"
            />
          </motion.div>
        )}

        {stage === 'samira' && (
          <motion.div
            key="samira"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 2 }}
            className="font-dancing text-9xl text-white text-glow"
          >
            Samira
          </motion.div>
        )}

        {stage === 'rain' && (
          <motion.div
            key="rain"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center"
          >
            <div className="absolute inset-0 bg-blue-900/10" />
            <motion.div
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 0.1, repeat: 3, repeatDelay: 2 }}
              className="absolute inset-0 bg-white/20 z-50"
            />
            <p className="text-blue-200/60 italic text-xl z-10">The storm before the healing...</p>
          </motion.div>
        )}

        {stage === 'chaos' && (
          <motion.div
            key="chaos"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="relative"
          >
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                animate={{ 
                  x: [0, (Math.random() - 0.5) * 400], 
                  y: [0, (Math.random() - 0.5) * 400],
                  opacity: [1, 0]
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute w-2 h-2 bg-pink-400 rounded-full"
              />
            ))}
          </motion.div>
        )}

        {stage === 'gift' && (
          <motion.div
            key="gift"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 1.5 }}
            className="flex flex-col items-center"
          >
            <motion.div
              animate={{ rotate: [-2, 2, -2] }}
              transition={{ duration: 0.5, repeat: Infinity }}
            >
              <Gift className="w-32 h-32 text-pink-400" />
            </motion.div>
            <p className="mt-8 text-pink-200/50 tracking-widest">A gift of light</p>
          </motion.div>
        )}

        {stage === 'butterfly' && (
          <motion.div
            key="butterfly"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="w-full h-full relative"
          >
            <motion.div
              animate={{ 
                x: [-300, 300, -150, 400],
                y: [150, -250, 100, -200],
                rotate: [0, 15, -15, 10],
                scale: [1.5, 1.8, 1.4, 1.6]
              }}
              transition={{ duration: 8, ease: "easeInOut" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            >
              <div className="relative">
                <motion.div
                  animate={{ 
                    rotateY: [0, 70, 0],
                    scaleX: [1, 0.5, 1]
                  }}
                  transition={{ duration: 0.25, repeat: Infinity, ease: "easeInOut" }}
                  className="text-7xl filter drop-shadow-[0_0_20px_rgba(255,133,162,0.9)] select-none"
                >
                  🦋
                </motion.div>
                {/* Trailing glow effect */}
                <motion.div 
                  animate={{ opacity: [0, 0.5, 0], scale: [1, 2] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="absolute inset-0 bg-pink-400/30 blur-2xl rounded-full -z-10"
                />
              </div>
            </motion.div>
          </motion.div>
        )}

        {stage === 'final' && (
          <motion.div
            key="final"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center"
          >
            <h2 className="font-dancing text-7xl md:text-8xl text-pink-400 text-glow mb-4">
              I Love You 😗 Samira
            </h2>
            <p className="text-white/40 tracking-[0.5em] uppercase text-xs">The Journey Continues</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
