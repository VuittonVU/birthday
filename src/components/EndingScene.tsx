"use client";

import { motion } from "framer-motion";
import confetti from "canvas-confetti";

export default function EndingScene() {
  const replay = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const finalConfetti = () => {
    confetti({
      particleCount: 180,
      spread: 100,
      origin: { y: 0.6 },
    });
  };

  return (
    <section className="flex min-h-screen items-center justify-center bg-gradient-to-b from-[#ffe8d6] to-[#ffd6e0] px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-2xl rounded-[2rem] bg-white/75 p-10 text-center shadow-2xl backdrop-blur"
      >
        <div className="mb-6 text-7xl">🎂</div>

        <h2 className="mb-6 text-4xl font-black md:text-5xl">
          Thank you for existing.
        </h2>

        <p className="mb-8 text-xl text-[#5c4038]">
          Happy Birthday. May your life always find tiny lights, even on quiet days.
        </p>

        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <button
            onClick={finalConfetti}
            className="rounded-full bg-[#8a4c5a] px-7 py-3 font-bold text-white shadow-lg transition hover:scale-105"
          >
            One More Wish
          </button>

          <button
            onClick={replay}
            className="rounded-full bg-white px-7 py-3 font-bold text-[#8a4c5a] shadow-lg transition hover:scale-105"
          >
            Replay Memory
          </button>
        </div>
      </motion.div>
    </section>
  );
}