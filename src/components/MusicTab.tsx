import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, SkipForward, SkipBack, Music as MusicIcon } from 'lucide-react';
import { motion } from 'motion/react';

const songs = [
  { 
    title: "Eternal Love", 
    artist: "Mehboob", 
    type: "Romantic",
    url: "https://raw.githubusercontent.com/rafaelreis-hotmart/Audio-Sample-files/master/sample.mp3"
  },
  { 
    title: "Midnight Memories", 
    artist: "Mehboob", 
    type: "Sad",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"
  },
  { 
    title: "Samira's Theme", 
    artist: "Mehboob", 
    type: "Piano",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3"
  },
  { 
    title: "Heartbeat Echoes", 
    artist: "Mehboob", 
    type: "Instrumental",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3"
  },
  { 
    title: "Healing Rain", 
    artist: "Mehboob", 
    type: "Lo-fi",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3"
  },
];

export const MusicTab = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  const [error, setError] = useState<string | null>(null);

  const currentSong = songs[currentSongIndex];

  useEffect(() => {
    setError(null);
    if (audioRef.current) {
      audioRef.current.load();
      if (isPlaying) {
        audioRef.current.play().catch(err => {
          console.error("Playback failed:", err);
          setError("Playback failed. Please try again.");
        });
      }
    }
  }, [isPlaying, currentSongIndex]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const nextSong = () => {
    setCurrentSongIndex((prev) => (prev + 1) % songs.length);
    setIsPlaying(true);
  };

  const prevSong = () => {
    setCurrentSongIndex((prev) => (prev - 1 + songs.length) % songs.length);
    setIsPlaying(true);
  };

  return (
    <div className="flex flex-col items-center justify-center h-full px-4">
      <audio 
        key={currentSongIndex}
        ref={audioRef} 
        onEnded={nextSong}
        preload="auto"
        onError={(e) => {
          console.error("Audio error:", e);
          setError("Failed to load audio source.");
        }}
      >
        <source src={currentSong.url} type="audio/mpeg" />
      </audio>
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-md bg-glass p-8 rounded-[2rem] shadow-glow text-center relative overflow-hidden"
      >
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-pink-500/10 blur-3xl rounded-full" />
        <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-blue-500/10 blur-3xl rounded-full" />

        <div className="mb-8 relative">
          <motion.div
            animate={isPlaying ? { rotate: 360 } : {}}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="w-48 h-48 mx-auto rounded-full border-4 border-pink-400/30 flex items-center justify-center bg-gradient-to-tr from-pink-500/20 to-blue-500/20"
          >
            <MusicIcon className="w-20 h-20 text-pink-400" />
          </motion.div>
          {isPlaying && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: [0, 1, 0], scale: [0.5, 1.5], y: [-20, -100], x: [0, (i - 1) * 30] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.6 }}
                  className="absolute"
                >
                  <MusicIcon className="w-6 h-6 text-pink-300/50" />
                </motion.div>
              ))}
            </div>
          )}
        </div>

        <h3 className="text-2xl font-semibold mb-1">{currentSong.title}</h3>
        <p className="text-pink-300/70 text-sm mb-4 tracking-widest uppercase">{currentSong.artist}</p>

        {error && (
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-red-400 text-xs mb-4"
          >
            {error}
          </motion.p>
        )}

        <div className="flex items-center justify-center gap-4 h-12 mb-8">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              animate={isPlaying ? { height: [10, Math.random() * 40 + 10, 10] } : { height: 10 }}
              transition={{ duration: 0.5, repeat: Infinity, delay: i * 0.05 }}
              className="w-1.5 bg-pink-400 rounded-full"
            />
          ))}
        </div>

        <div className="flex justify-center items-center gap-8">
          <button 
            onClick={prevSong}
            className="text-white/50 hover:text-pink-400 transition-colors"
          >
            <SkipBack className="w-8 h-8" />
          </button>
          <button 
            onClick={togglePlay}
            className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center hover:bg-pink-400 transition-all shadow-lg shadow-pink-500/20"
          >
            {isPlaying ? <Pause className="w-8 h-8 fill-current" /> : <Play className="w-8 h-8 fill-current ml-1" />}
          </button>
          <button 
            onClick={nextSong}
            className="text-white/50 hover:text-pink-400 transition-colors"
          >
            <SkipForward className="w-8 h-8" />
          </button>
        </div>
      </motion.div>
    </div>
  );
};
