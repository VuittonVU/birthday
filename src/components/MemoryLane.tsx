"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Gift } from "lucide-react";
import { birthdayData } from "@/data/birthdayData";

export default function MemoryLane() {
  const [opened, setOpened] = useState<number[]>([]);

  const openBox = (index: number) => {
    if (!opened.includes(index)) {
      setOpened([...opened, index]);
    }
  };

  return (
    <section className="min-h-screen bg-[#f8eadd] px-6 py-20">
      <div className="mx-auto max-w-6xl text-center">
        <p className="mb-2 text-sm font-bold tracking-[0.3em] text-[#b36b7b]">
          MEMORY LANE
        </p>

        <h2 className="mb-4 text-4xl font-black">Blind Box Memories</h2>

        <p className="mx-auto mb-12 max-w-xl text-[#6b5149]">
          Tap each mystery box to reveal a little memory inside.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {birthdayData.memories.map((memory, index) => {
            const isOpen = opened.includes(index);

            return (
              <motion.button
                key={index}
                onClick={() => openBox(index)}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="min-h-[320px] rounded-[2rem] bg-white p-5 shadow-xl"
              >
                {!isOpen ? (
                  <div className="flex h-full flex-col items-center justify-center rounded-[1.5rem] bg-[#ffd5dc] p-6">
                    <Gift size={70} className="mb-5 text-[#8a4c5a]" />
                    <p className="font-bold">Mystery Box #{index + 1}</p>
                    <p className="mt-2 text-sm text-[#7a5a62]">
                      Click to open
                    </p>
                  </div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, rotate: -4, scale: 0.9 }}
                    animate={{ opacity: 1, rotate: 0, scale: 1 }}
                    className="rounded-xl bg-[#fffaf5] p-3 shadow-inner"
                  >
                    <div className="mb-4 flex h-44 items-center justify-center rounded-lg bg-[#eac7b8] text-5xl">
                      📷
                    </div>
                    <p className="text-sm leading-6 text-[#5c4038]">
                      {memory.caption}
                    </p>
                  </motion.div>
                )}
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
}