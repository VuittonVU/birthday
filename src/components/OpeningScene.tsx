"use client";

import { motion } from "framer-motion";
import { Gift } from "lucide-react";

type Props = {
  onOpen: () => void;
};

export default function OpeningScene({ onOpen }: Props) {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-b from-[#30243a] via-[#6b4f68] to-[#f5c6aa] px-6">
      <div className="absolute left-10 top-10 h-24 w-24 rounded-full bg-white/20 blur-2xl" />
      <div className="absolute bottom-20 right-10 h-40 w-40 rounded-full bg-pink-200/30 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1 }}
        className="z-10 max-w-md rounded-[2rem] border border-white/30 bg-white/20 p-8 text-center shadow-2xl backdrop-blur-md"
      >
        <motion.div
          animate={{ y: [0, -10, 0], rotate: [-2, 2, -2] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="mx-auto mb-6 flex h-36 w-36 items-center justify-center rounded-[2rem] bg-[#f8dcc8] shadow-xl"
        >
          <Gift size={72} className="text-[#6d435a]" />
        </motion.div>

        <p className="mb-2 text-sm tracking-[0.35em] text-white/80">
          A TINY SURPRISE
        </p>

        <h1 className="mb-4 text-4xl font-bold text-white">
          Someone’s Birthday Box
        </h1>

        <p className="mb-8 text-sm leading-6 text-white/85">
          A small room, a hidden wish, and a few memories waiting to be opened.
        </p>

        <button
          onClick={onOpen}
          className="rounded-full bg-white px-8 py-3 font-semibold text-[#6d435a] shadow-lg transition hover:scale-105 hover:bg-[#fff1e6]"
        >
          Open the Box
        </button>
      </motion.div>
    </section>
  );
}