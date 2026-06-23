"use client";

import { useState } from "react";
import confetti from "canvas-confetti";
import { motion } from "framer-motion";

const quotes = [
  "You are literally a limited edition human.",
  "Tiny reminder: you deserve soft days.",
  "Birthday buff activated: +100 happiness.",
  "Today is your main character episode.",
];

export default function MiniInteraction() {
  const [message, setMessage] = useState("Click something cute.");

  const launchConfetti = () => {
    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.7 },
    });
    setMessage("Wish sent to the universe ✨");
  };

  const randomQuote = () => {
    const quote = quotes[Math.floor(Math.random() * quotes.length)];
    setMessage(quote);
  };

  return (
    <section className="min-h-screen bg-[#fff7ef] px-6 py-20">
      <div className="mx-auto max-w-5xl text-center">
        <p className="mb-2 text-sm font-bold tracking-[0.3em] text-[#b36b7b]">
          MINI PLAYROOM
        </p>

        <h2 className="mb-4 text-4xl font-black">Tap the Tiny Things</h2>

        <p className="mb-10 text-[#6b5149]">
          A few small surprises are hiding here.
        </p>

        <div className="mx-auto mb-10 rounded-[2rem] bg-white p-6 text-lg font-semibold shadow-xl">
          {message}
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <ToyButton emoji="🎈" label="Balloon" onClick={() => setMessage("A balloon says: stay light, stay happy 🎈")} />
          <ToyButton emoji="🎂" label="Cake" onClick={() => setMessage("The candle is glowing for your wish 🕯️")} />
          <ToyButton emoji="🧸" label="Character" onClick={randomQuote} />
          <ToyButton emoji="✨" label="Make a Wish" onClick={launchConfetti} />
        </div>
      </div>
    </section>
  );
}

function ToyButton({
  emoji,
  label,
  onClick,
}: {
  emoji: string;
  label: string;
  onClick: () => void;
}) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ y: -8, scale: 1.03 }}
      whileTap={{ scale: 0.95 }}
      className="rounded-[2rem] bg-[#ffe1d2] p-8 shadow-xl transition"
    >
      <div className="mb-4 text-6xl">{emoji}</div>
      <p className="font-bold">{label}</p>
    </motion.button>
  );
}