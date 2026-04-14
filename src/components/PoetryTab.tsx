import React from 'react';
import { motion } from 'motion/react';
import { Feather } from 'lucide-react';

const poems = [
  {
    title: "The Feeling of You",
    content: [
      "Samira, you are not just a name,",
      "You are a feeling that flows through my veins.",
      "In the silence of the night,",
      "It's your memory that breaks my chains."
    ]
  },
  {
    title: "Every Heartbeat",
    content: [
      "Every word I write carries your presence,",
      "Like a scent that lingers in the air.",
      "In every heartbeat, I find you again,",
      "A love so deep, a soul so rare."
    ]
  },
  {
    title: "The Universe Within",
    content: [
      "I built a universe just for us,",
      "Where stars whisper your name to the moon.",
      "Samira, you are my beginning and end,",
      "The melody to my heart's soft tune."
    ]
  }
];

export const PoetryTab = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-full py-20 px-4 overflow-y-auto">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-2xl w-full space-y-12"
      >
        <div className="text-center mb-16">
          <Feather className="w-12 h-12 text-pink-400 mx-auto mb-4 opacity-50" />
          <h2 className="text-sm tracking-[0.4em] text-pink-300/60 uppercase">Poetic Diary by Mehboob</h2>
        </div>

        {poems.map((poem, poemIndex) => (
          <motion.div
            key={poemIndex}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: poemIndex * 0.2 }}
            className="bg-glass p-10 rounded-[2.5rem] relative group"
          >
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-pink-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-[2.5rem]" />
            <h3 className="text-pink-300 font-serif italic text-xl mb-6 border-b border-white/10 pb-2 inline-block">
              {poem.title}
            </h3>
            <div className="space-y-4">
              {poem.content.map((line, lineIndex) => (
                <p key={lineIndex} className="text-lg md:text-xl font-light text-white/80 leading-relaxed">
                  {line}
                </p>
              ))}
            </div>
            <div className="mt-8 text-right text-xs tracking-widest text-white/30 italic">
              — Dedicated to Samira
            </div>
          </motion.div>
        ))}

        <div className="text-center pt-12 text-white/20 italic font-serif">
          "Forever yours, Mehboob"
        </div>
      </motion.div>
    </div>
  );
};
