"use client";

import { motion } from "framer-motion";
import { birthdayData } from "@/data/birthdayData";

export default function BirthdayScene() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#ffe1ef,transparent_35%),radial-gradient(circle_at_bottom,#ffe8c7,transparent_40%)]" />

      <div className="relative z-10 grid max-w-5xl items-center gap-10 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="rounded-[2rem] bg-white/70 p-8 shadow-xl backdrop-blur"
        >
          <p className="mb-2 text-sm font-semibold tracking-[0.25em] text-[#b36b7b]">
            BIRTHDAY WISH
          </p>

          <h2 className="mb-5 text-4xl font-black leading-tight md:text-5xl">
            Happy Birthday, {birthdayData.friendName} 🎂
          </h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.6, delay: 0.3 }}
            className="text-lg leading-8 text-[#5c4038]"
          >
            {birthdayData.mainWish}
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative mx-auto h-[420px] w-full max-w-sm rounded-[2.5rem] bg-[#f8d7c5] p-6 shadow-2xl"
        >
          <div className="absolute left-8 top-8 text-5xl">🎈</div>
          <div className="absolute right-10 top-12 text-4xl">⭐</div>
          <div className="absolute bottom-8 left-10 text-5xl">🎁</div>
          <div className="absolute bottom-10 right-10 text-5xl">🎂</div>

          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute left-1/2 top-1/2 flex h-48 w-48 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-xl"
          >
            <div className="text-center">
              <div className="text-7xl">🧸</div>
              <p className="mt-2 text-sm font-semibold text-[#7a4d42]">
                Hirono-style placeholder
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}