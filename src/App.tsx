import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, Music, Cat, Moon, Feather, Sparkles } from 'lucide-react';
import { HomeTab } from './components/HomeTab';
import { MusicTab } from './components/MusicTab';
import { CatsTab } from './components/CatsTab';
import { MoonTab } from './components/MoonTab';
import { PoetryTab } from './components/PoetryTab';
import { ParticleCanvas } from './components/ParticleCanvas';
import { cn } from './lib/utils';

type Tab = 'home' | 'music' | 'cats' | 'moon' | 'poetry';

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>('home');
  const [isCinematicFinished, setIsCinematicFinished] = useState(false);
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    if (isCinematicFinished) {
      const timer = setTimeout(() => setShowNav(true), 1000);
      return () => clearTimeout(timer);
    }
  }, [isCinematicFinished]);

  const tabs = [
    { id: 'home', icon: Heart, label: 'Home' },
    { id: 'music', icon: Music, label: 'Music' },
    { id: 'cats', icon: Cat, label: 'Cats' },
    { id: 'moon', icon: Moon, label: 'Moon' },
    { id: 'poetry', icon: Feather, label: 'Poetry' },
  ];

  return (
    <div className="relative w-full h-screen bg-[#050505] overflow-hidden font-sans">
      {/* Background Particles */}
      <ParticleCanvas mode={activeTab === 'moon' ? 'float' : activeTab === 'home' ? 'float' : 'float'} />
      
      {/* Main Content */}
      <main className="relative z-10 w-full h-full">
        <AnimatePresence mode="wait">
          {activeTab === 'home' && (
            <motion.div
              key="home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="w-full h-full"
            >
              <HomeTab onComplete={() => setIsCinematicFinished(true)} />
            </motion.div>
          )}

          {activeTab === 'music' && (
            <motion.div
              key="music"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="w-full h-full"
            >
              <MusicTab />
            </motion.div>
          )}

          {activeTab === 'cats' && (
            <motion.div
              key="cats"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              className="w-full h-full"
            >
              <CatsTab />
            </motion.div>
          )}

          {activeTab === 'moon' && (
            <motion.div
              key="moon"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="w-full h-full"
            >
              <MoonTab />
            </motion.div>
          )}

          {activeTab === 'poetry' && (
            <motion.div
              key="poetry"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              className="w-full h-full"
            >
              <PoetryTab />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Navigation */}
      <AnimatePresence>
        {showNav && (
          <motion.nav
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 px-6 py-3 bg-glass rounded-full flex items-center gap-2 md:gap-6 shadow-glow"
          >
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as Tab)}
                  className={cn(
                    "relative p-3 rounded-full transition-all duration-300 group",
                    isActive ? "text-pink-400" : "text-white/40 hover:text-white/70"
                  )}
                >
                  {isActive && (
                    <motion.div
                      layoutId="nav-bg"
                      className="absolute inset-0 bg-pink-500/10 rounded-full"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <Icon className={cn("w-6 h-6 relative z-10 transition-transform", isActive && "scale-110")} />
                  <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-glass rounded text-[10px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                    {tab.label}
                  </span>
                </button>
              );
            })}
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Ambient Sound Hint */}
      {isCinematicFinished && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          className="fixed top-8 right-8 z-50 flex items-center gap-2 text-[10px] tracking-widest uppercase text-white/50"
        >
          <Sparkles className="w-3 h-3" />
          Mehboob's Universe
        </motion.div>
      )}
    </div>
  );
}
