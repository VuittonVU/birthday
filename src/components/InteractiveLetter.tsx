"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { birthdayData } from "@/data/birthdayData";

export default function InteractiveLetter() {
  const [tapCount, setTapCount] = useState(0);

  const progress = Math.min(tapCount, 5);
  const isOpen = progress >= 5;

  return (
    <section className="flex min-h-screen items-center justify-center bg-[#f8eadd] px-6 py-20">
      <div className="w-full max-w-2xl text-center">
        <p className="mb-2 text-sm font-bold tracking-[0.3em] text-[#b36b7b]">
          DIGITAL LETTER
        </p>

        <h2 className="mb-4 text-4xl font-black">A Letter for You</h2>

        <p className="mb-8 text-[#6b5149]">
          Tap the card five times to reveal the message.
        </p>

        <motion.div
          onClick={() => setTapCount((prev) => prev + 1)}
          whileTap={{ scale: 0.98 }}
          className="relative min-h-[360px] cursor-pointer overflow-hidden rounded-[2rem] bg-white p-8 shadow-2xl"
        >
          {!isOpen && (
            <motion.div
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 - progress * 0.18 }}
              className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-[#cfa6a0]"
            >
              <div className="mb-4 text-6xl">💌</div>
              <p className="font-bold text-white">Tap to reveal</p>
              <p className="mt-2 text-sm text-white/80">{progress}/5</p>
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isOpen ? 1 : 0.2 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            <p className="mb-4 font-bold text-[#8a4c5a]">
              Dear {birthdayData.friendName},
            </p>

            <p className="whitespace-pre-line text-lg leading-9 text-[#4f3832]">
              {birthdayData.letter}
            </p>

            <p className="mt-8 font-bold text-[#8a4c5a]">
              From someone who is grateful to know you.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}