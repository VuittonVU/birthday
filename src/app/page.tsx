"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import { Gift } from "lucide-react";
import { birthdayData } from "@/data/birthdayData";

const hironoBlindBox = [
  "/images/hirono-1.jpg",
  "/images/hirono-2.jpg",
  "/images/hirono-3.jpg",
  "/images/hirono-4.jpg",
  "/images/hirono-5.jpg",
  "/images/hirono-6.jpg",
];

export default function Home() {
  const [opened, setOpened] = useState(false);
  const [activePage, setActivePage] = useState(0);
  const [openedBoxes, setOpenedBoxes] = useState<number[]>([]);
  const [message, setMessage] = useState("Tap something cute.");
  const [letterOpen, setLetterOpen] = useState(false);
  const [activeToy, setActiveToy] = useState<string | null>(null);

  const [balloons, setBalloons] = useState<{ id: number; left: number }[]>([]);
  const [cakes, setCakes] = useState<
    { id: number; left: number; top: number }[]
  >([]);

  const [randomCharacter, setRandomCharacter] =
    useState("/images/hirono-1.png");
  const [showCharacter, setShowCharacter] = useState(false);
  const [isOpeningBlindBox, setIsOpeningBlindBox] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const openBox = async () => {
    setOpened(true);

    try {
      if (audioRef.current) {
        audioRef.current.volume = 0.35;
        await audioRef.current.play();
      }
    } catch {
      console.log("Audio blocked by browser.");
    }
  };

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const pageWidth = scrollRef.current.clientWidth;
    setActivePage(Math.round(scrollRef.current.scrollLeft / pageWidth));
  };

  const goToPage = (index: number) => {
    scrollRef.current?.scrollTo({
      left: index * scrollRef.current.clientWidth,
      behavior: "smooth",
    });
  };

  const revealMemory = (index: number) => {
    if (!openedBoxes.includes(index)) {
      setOpenedBoxes([...openedBoxes, index]);
    }
  };

  const balloonEffect = () => {
    setActiveToy("balloon");
    setMessage("The balloons are flying with tiny birthday wishes 🎈");

    const newBalloons = Array.from({ length: 10 }, () => ({
      id: Date.now() + Math.random(),
      left: Math.random() * 90,
    }));

    setBalloons((prev) => [...prev, ...newBalloons]);

    setTimeout(() => {
      setBalloons((prev) =>
        prev.filter(
          (balloon) => !newBalloons.some((b) => b.id === balloon.id)
        )
      );
    }, 4200);
  };

  const cakeEffect = () => {
    setActiveToy("cake");
    setMessage("Tiny cakes are popping out for the birthday star 🧁");

    const newCakes = Array.from({ length: 8 }, () => ({
      id: Date.now() + Math.random(),
      left: 15 + Math.random() * 70,
      top: 20 + Math.random() * 55,
    }));

    setCakes((prev) => [...prev, ...newCakes]);

    setTimeout(() => {
      setCakes((prev) =>
        prev.filter((cake) => !newCakes.some((c) => c.id === cake.id))
      );
    }, 2800);
  };

  const characterEffect = () => {
    const random =
      hironoBlindBox[Math.floor(Math.random() * hironoBlindBox.length)];

    setActiveToy("character");
    setShowCharacter(true);
    setIsOpeningBlindBox(true);
    setMessage("Opening the blind box...");

    setTimeout(() => {
      setRandomCharacter(random);
      setIsOpeningBlindBox(false);
      setMessage("A random Hirono-style blind box appeared.");
    }, 1100);
  };

  const wishEffect = () => {
    setActiveToy("wish");
    confetti({ particleCount: 160, spread: 90, origin: { y: 0.65 } });
    setMessage("Wish sent to the universe ✨");
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#f8e9df] text-[#5b332d]">
      <audio ref={audioRef} loop src="/music/bgm.mp3" />

      {!opened ? (
        <section className="toy-bg relative flex min-h-screen items-center justify-center px-6">
          <FloatingDecor />

          <motion.div
            initial={{ opacity: 0, y: 28, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            className="z-10 text-center"
          >
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="glass-card mx-auto mb-7 flex h-44 w-44 items-center justify-center rounded-[2.5rem] sm:h-56 sm:w-56"
            >
              <div>
                <div className="mb-3 text-4xl sm:text-5xl">🎁</div>
                <div className="text-6xl sm:text-7xl">🧸</div>
              </div>
            </motion.div>

            <p className="mb-2 text-[10px] tracking-[0.45em] text-[#8e625b] sm:text-xs">
              A TINY SURPRISE
            </p>

            <h1 className="mb-3 text-3xl font-black sm:text-5xl">
              Someone’s Birthday Box
            </h1>

            <p className="mx-auto mb-7 max-w-xs text-sm text-[#6b5149]">
              A small room, a hidden wish, and a few memories waiting to.
            </p>

            <button onClick={openBox} className="soft-btn">
              Open the Box
            </button>
          </motion.div>
        </section>
      ) : (
        <>
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="horizontal-scroll"
          >
            {/* PAGE 1 */}
            <section className="panel toy-bg relative">
              <FloatingDecor />

              <div className="page-content grid items-center gap-8 md:grid-cols-2">
                <motion.div
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className="glass-card rounded-[2rem] p-7 sm:p-9"
                >
                  <p className="mb-4 text-xs tracking-[0.35em] sm:text-sm">
                    BIRTHDAY WISH
                  </p>

                  <h2 className="mb-6 text-3xl font-black leading-tight sm:text-5xl">
                    Happy Birthday, <br />
                    {birthdayData.friendName} 🎂
                  </h2>

                  <p className="text-base leading-7 sm:text-lg sm:leading-8">
                    {birthdayData.mainWish}
                  </p>
                </motion.div>

                <motion.div
                  animate={{ y: [0, -18, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="text-center"
                >
                  <div className="text-[8rem] leading-none sm:text-[14rem]">
                    🧸
                  </div>
                </motion.div>
              </div>
            </section>

            {/* PAGE 2 */}
            <section className="panel toy-bg relative">
              <FloatingDecor />

              <div className="page-content text-center">
                <p className="mb-2 text-xs tracking-[0.35em] sm:text-sm">
                  MEMORY LANE
                </p>

                <h2 className="mb-4 text-3xl font-black sm:text-5xl">
                  Blind Box Memories
                </h2>

                <p className="mb-8 text-sm sm:mb-12 sm:text-base">
                  Tap each mystery box to reveal a little memory inside.
                </p>

                <div className="memory-grid">
                  {birthdayData.memories.map((memory, index) => {
                    const isOpen = openedBoxes.includes(index);

                    return (
                      <button
                        key={index}
                        onClick={() => revealMemory(index)}
                        className="memory-box"
                      >
                        {!isOpen ? (
                          <>
                            <Gift className="memory-icon" />
                            <h3>Mystery Box #{index + 1}</h3>
                            <p>Click to open</p>
                          </>
                        ) : (
                          <>
                            <div className="mb-2 text-5xl sm:text-6xl">📷</div>
                            <p>{memory.caption}</p>
                          </>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            </section>

            {/* PAGE 3 */}
            <section className="panel toy-bg relative">
              <FloatingDecor />

              {balloons.map((balloon) => (
                <motion.span
                  key={balloon.id}
                  className="flying-balloon"
                  style={{ left: `${balloon.left}%` }}
                  initial={{ y: 500, opacity: 0 }}
                  animate={{ y: -180, opacity: [0, 1, 1, 0] }}
                  transition={{ duration: 3.6 }}
                >
                  🎈
                </motion.span>
              ))}

              {cakes.map((cake) => (
                <motion.span
                  key={cake.id}
                  className="popping-cake"
                  style={{
                    left: `${cake.left}%`,
                    top: `${cake.top}%`,
                  }}
                  initial={{ scale: 0, opacity: 0, rotate: -20 }}
                  animate={{
                    scale: [0, 1.25, 1],
                    opacity: [0, 1, 1, 0],
                    rotate: 0,
                  }}
                  transition={{ duration: 2.2 }}
                >
                  🧁
                </motion.span>
              ))}

              <div className="page-content text-center">
                <p className="mb-2 text-xs tracking-[0.3em] sm:text-sm sm:tracking-[0.35em]">
                  MINI PLAYROOM + DIGITAL LETTER
                </p>

                <h2 className="mb-8 text-3xl font-black sm:mb-10 sm:text-5xl">
                  Tap the Tiny Things
                </h2>

                <div className="toy-grid">
                  <Toy
                    emoji="🎈"
                    label="Balloon"
                    active={activeToy === "balloon"}
                    onClick={balloonEffect}
                  />

                  <Toy
                    emoji="🎂"
                    label="Cake"
                    active={activeToy === "cake"}
                    onClick={cakeEffect}
                  />

                  <Toy
                    emoji="🎁"
                    label="Blind Box"
                    active={activeToy === "character"}
                    onClick={characterEffect}
                  />

                  <Toy
                    emoji="✨"
                    label="Wish"
                    active={activeToy === "wish"}
                    onClick={wishEffect}
                  />
                </div>

                <div className="effect-stage">
                  {showCharacter && (
                    <motion.div
                      key={isOpeningBlindBox ? "opening" : randomCharacter}
                      initial={{ scale: 0.4, opacity: 0, rotate: -8 }}
                      animate={
                        isOpeningBlindBox
                          ? {
                              scale: [1, 1.08, 0.96, 1.08, 1],
                              opacity: 1,
                              rotate: [-5, 5, -5, 5, 0],
                            }
                          : { scale: 1, opacity: 1, rotate: 0 }
                      }
                      transition={{ duration: isOpeningBlindBox ? 0.8 : 0.3 }}
                      className="blind-box-result"
                    >
                      <button
                        className="blind-box-close"
                        onClick={() => {
                          setShowCharacter(false);
                          setActiveToy(null);
                          setIsOpeningBlindBox(false);
                        }}
                      >
                        ×
                      </button>

                      {isOpeningBlindBox ? (
                        <>
                          <div className="blind-box-gift">🎁</div>
                          <p>Opening...</p>
                        </>
                      ) : (
                        <>
                          <img
                            src={randomCharacter}
                            alt="Random Hirono-style blind box"
                            className="blind-box-image"
                          />
                          <p>Random Hirono-style blind box</p>
                        </>
                      )}
                    </motion.div>
                  )}

                  {activeToy === "balloon" && !showCharacter && (
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="effect-text"
                    >
                      Balloons unlocked 🎈
                    </motion.div>
                  )}

                  {activeToy === "cake" && !showCharacter && (
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="effect-text"
                    >
                      Cake party unlocked 🧁
                    </motion.div>
                  )}

                  {activeToy === "wish" && !showCharacter && (
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="effect-text"
                    >
                      Wish sent ✨
                    </motion.div>
                  )}
                </div>

                <div
                  className="letter-card mx-auto"
                  onClick={() => setLetterOpen(true)}
                >
                  <h3>A Letter for You</h3>

                  {!letterOpen ? (
                    <div className="mt-5 flex items-center justify-center gap-3 sm:gap-6">
                      <span>Tap heart</span>
                      <span className="text-5xl sm:text-7xl">💗</span>
                      <span>to reveal</span>
                    </div>
                  ) : (
                    <p className="mt-5 leading-7 sm:leading-8">
                      {birthdayData.letter}
                    </p>
                  )}
                </div>

                <p className="mt-5 text-sm font-semibold sm:text-base">
                  {message}
                </p>
              </div>
            </section>

            {/* PAGE 4 */}
            <section className="panel toy-bg relative">
              <FloatingDecor />

              <div className="page-content text-center">
                <motion.div
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="mb-6 text-[7rem] sm:mb-8 sm:text-[10rem]"
                >
                  🎂
                </motion.div>

                <h2 className="mb-5 text-4xl font-black sm:text-6xl">
                  Thank you for existing.
                </h2>

                <p className="mx-auto mb-8 max-w-xl text-base sm:mb-10 sm:text-xl">
                  Happy Birthday. May your life always find tiny lights, even on
                  quiet days.
                </p>

                <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
                  <button onClick={wishEffect} className="soft-btn">
                    One More Wish
                  </button>

                  <button
                    onClick={() => location.reload()}
                    className="soft-btn-secondary"
                  >
                    Replay Memory
                  </button>
                </div>
              </div>
            </section>
          </div>

          <FloatingPageNav activePage={activePage} goToPage={goToPage} />
        </>
      )}
    </main>
  );
}

function Toy({
  emoji,
  label,
  onClick,
  active,
}: {
  emoji: string;
  label: string;
  onClick: () => void;
  active?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      className={`toy-button ${active ? "toy-active" : ""}`}
    >
      <motion.div
        animate={
          active
            ? { y: [0, -10, 0], scale: [1, 1.15, 1] }
            : { y: 0, scale: 1 }
        }
        transition={{ duration: 0.8 }}
        className="text-5xl sm:text-6xl"
      >
        {emoji}
      </motion.div>

      <p>{label}</p>
    </button>
  );
}

function FloatingDecor() {
  return (
    <>
      <span className="float-decor left-[8%] top-[30%]">⭐</span>
      <span className="float-decor right-[12%] top-[25%]">🎁</span>
      <span className="float-decor bottom-[18%] left-[20%]">💗</span>
      <span className="float-decor bottom-[12%] right-[8%]">✨</span>
    </>
  );
}

function FloatingPageNav({
  activePage,
  goToPage,
}: {
  activePage: number;
  goToPage: (index: number) => void;
}) {
  return (
    <div className="floating-page-nav">
      <p>Swipe / scroll sideways</p>

      <div className="page-dots">
        {[0, 1, 2, 3].map((index) => (
          <button
            key={index}
            onClick={() => goToPage(index)}
            className={activePage === index ? "active" : ""}
            aria-label={`Go to page ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}