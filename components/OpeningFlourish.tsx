"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface OpeningFlourishProps {
  onComplete: () => void;
}

export const OpeningFlourish: React.FC<OpeningFlourishProps> = ({ onComplete }) => {
  const [phase, setPhase] = useState<"initial" | "fanning" | "rotating" | "collapsing" | "revealing" | "done">("initial");
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    // Check prefers-reduced-motion
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) {
      setReducedMotion(true);
      const timer = setTimeout(() => {
        onComplete();
      }, 700);
      return () => clearTimeout(timer);
    }

    // Sequence timing (total ~2.4s)
    const t1 = setTimeout(() => setPhase("fanning"), 350);
    const t2 = setTimeout(() => setPhase("rotating"), 950);
    const t3 = setTimeout(() => setPhase("collapsing"), 1550);
    const t4 = setTimeout(() => setPhase("revealing"), 1950);
    const t5 = setTimeout(() => {
      setPhase("done");
      onComplete();
    }, 2600);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
    };
  }, [onComplete]);

  if (reducedMotion) {
    return (
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="fixed inset-0 z-50 bg-[#131314] flex flex-col items-center justify-center pointer-events-none"
      >
        <div className="w-64 h-96 rounded-lg border border-[#c5a059]/40 bg-[#1c1b1c] p-6 flex flex-col items-center justify-center text-center">
          <span className="text-[#c5a059] text-4xl mb-3">♠</span>
          <span className="font-label text-xs uppercase tracking-widest text-[#e9c176]">PORTFOLIO</span>
          <span className="font-display text-2xl text-[#e5e2e3] mt-2">Abhilasha Kumari</span>
        </div>
      </motion.div>
    );
  }

  if (phase === "done") return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="fixed inset-0 z-50 bg-[#0e0e0f] flex flex-col items-center justify-center overflow-hidden select-none"
      >
        {/* Ambient glow */}
        <div className="absolute w-[500px] h-[500px] rounded-full bg-[#c5a059]/10 blur-[100px] pointer-events-none" />

        {/* Central Deck Flourish Animation */}
        <div className="relative w-64 sm:w-72 h-96 sm:h-[420px] flex items-center justify-center [perspective:1200px]">
          {/* Card 4 (Club) */}
          <motion.div
            initial={{ scale: 0.85, opacity: 0, rotate: 0, x: 0 }}
            animate={
              phase === "initial"
                ? { scale: 0.9, opacity: 0.4, rotate: 0, x: 0 }
                : phase === "fanning"
                ? { scale: 1, opacity: 0.85, rotate: -22, x: -75, y: 15 }
                : phase === "rotating"
                ? { scale: 1.02, opacity: 0.9, rotate: -26, x: -85, y: 20 }
                : phase === "collapsing"
                ? { scale: 0.95, opacity: 0.6, rotate: -2, x: -4, y: 4 }
                : { scale: 0.9, opacity: 0, rotate: 0, x: 0 }
            }
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 rounded-lg bg-[#1c1b1c] border border-[#c5a059]/25 shadow-2xl p-4 flex flex-col justify-between"
          >
            <div className="flex justify-between items-center text-xs font-bold text-[#9a8f80]">
              <span>10 ♣</span>
              <span className="font-label text-[8px] tracking-widest uppercase">WEB DEVELOPER</span>
              <span>10 ♣</span>
            </div>
            <div className="text-center text-[#9a8f80]/30 text-6xl">♣</div>
            <div className="text-[8px] font-label tracking-widest text-[#9a8f80] text-center uppercase">
              REACT • NEXT.JS • TAILWIND
            </div>
          </motion.div>

          {/* Card 3 (Diamond) */}
          <motion.div
            initial={{ scale: 0.88, opacity: 0, rotate: 0, x: 0 }}
            animate={
              phase === "initial"
                ? { scale: 0.92, opacity: 0.5, rotate: 0, x: 0 }
                : phase === "fanning"
                ? { scale: 1, opacity: 0.9, rotate: -11, x: -38, y: 8 }
                : phase === "rotating"
                ? { scale: 1.02, opacity: 0.95, rotate: -13, x: -42, y: 10 }
                : phase === "collapsing"
                ? { scale: 0.96, opacity: 0.7, rotate: -1, x: -2, y: 2 }
                : { scale: 0.92, opacity: 0, rotate: 0, x: 0 }
            }
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 rounded-lg bg-[#201f20] border border-[#c5a059]/30 shadow-2xl p-4 flex flex-col justify-between"
          >
            <div className="flex justify-between items-center text-xs font-bold text-[#ffb3b5]">
              <span>Q ♦</span>
              <span className="font-label text-[8px] tracking-widest uppercase">JAVA DEVELOPER</span>
              <span>Q ♦</span>
            </div>
            <div className="text-center text-[#ffb3b5]/30 text-6xl">♦</div>
            <div className="text-[8px] font-label tracking-widest text-[#ffb3b5]/80 text-center uppercase">
              JAVA • SPRING BOOT • POSTGRES
            </div>
          </motion.div>

          {/* Card 2 (Heart) */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, rotate: 0, x: 0 }}
            animate={
              phase === "initial"
                ? { scale: 0.95, opacity: 0.6, rotate: 0, x: 0 }
                : phase === "fanning"
                ? { scale: 1, opacity: 0.9, rotate: 11, x: 38, y: 8 }
                : phase === "rotating"
                ? { scale: 1.02, opacity: 0.95, rotate: 13, x: 42, y: 10 }
                : phase === "collapsing"
                ? { scale: 0.97, opacity: 0.8, rotate: 1, x: 2, y: 2 }
                : { scale: 0.94, opacity: 0, rotate: 0, x: 0 }
            }
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 rounded-lg bg-[#201f20] border border-[#c5a059]/30 shadow-2xl p-4 flex flex-col justify-between"
          >
            <div className="flex justify-between items-center text-xs font-bold text-[#ffb3b5]">
              <span>K ♥</span>
              <span className="font-label text-[8px] tracking-widest uppercase">BACKEND DEVELOPER</span>
              <span>K ♥</span>
            </div>
            <div className="text-center text-[#ffb3b5]/30 text-6xl">♥</div>
            <div className="text-[8px] font-label tracking-widest text-[#ffb3b5]/80 text-center uppercase">
              JAVA • SPRING BOOT • NODE.JS
            </div>
          </motion.div>

          {/* Card 1 (Ace of Spades - Top Card Reveal) */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={
              phase === "initial"
                ? { scale: 1, opacity: 1, y: 0 }
                : phase === "fanning"
                ? { scale: 1.02, opacity: 1, y: -5 }
                : phase === "rotating"
                ? { scale: 1.04, opacity: 1, y: -8, rotate: 0 }
                : phase === "collapsing"
                ? { scale: 1.02, opacity: 1, y: 0 }
                : { scale: 1.1, opacity: 1, y: -15, boxShadow: "0 25px 60px -10px rgba(197, 160, 89, 0.4)" }
            }
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-20 w-full h-full rounded-lg bg-[#1c1b1c] border-2 border-[#c5a059] p-4 flex flex-col justify-between shadow-[0_25px_60px_-15px_rgba(0,0,0,0.95)] overflow-hidden"
          >
            {/* Concentric inner border */}
            <div className="absolute inset-2 rounded border border-[#c5a059]/40 pointer-events-none" />

            {/* Top Index */}
            <div className="relative z-10 flex justify-between items-start">
              <div className="flex flex-col items-center text-[#e9c176] font-display font-bold leading-none">
                <span className="text-2xl">A</span>
                <span className="text-lg -mt-0.5">♠</span>
              </div>
              <span className="font-label text-[8px] uppercase tracking-[0.24em] text-[#e9c176] bg-[#2a2a2b] px-2 py-0.5 rounded border border-[#c5a059]/30">
                PORTFOLIO
              </span>
            </div>

            {/* Center Content */}
            <div className="relative z-10 my-auto text-center flex flex-col items-center">
              <div className="w-16 h-16 rounded-full border border-[#c5a059]/30 flex items-center justify-center text-4xl text-[#e9c176] mb-2 drop-shadow-[0_0_10px_rgba(197,160,89,0.5)]">
                ♠
              </div>
              <h1 className="font-display text-2xl sm:text-3xl text-[#e5e2e3] uppercase tracking-tight">
                Abhilasha Kumari
              </h1>
              <p className="font-headline italic text-sm text-[#e9c176] mt-0.5">
                Software Engineer
              </p>
              <p className="font-label text-[9px] uppercase tracking-widest text-[#d1c5b4] mt-2">
                Builder • Learner • Experimenter
              </p>
            </div>

            {/* Bottom Index */}
            <div className="relative z-10 flex justify-between items-end">
              <span className="font-label text-[8px] uppercase tracking-widest text-[#9a8f80]">
                “Pick a card. Discover a side of me.”
              </span>
              <div className="flex flex-col items-center text-[#e9c176] font-display font-bold leading-none rotate-180">
                <span className="text-2xl">A</span>
                <span className="text-lg -mt-0.5">♠</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Progress Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-8 flex flex-col items-center gap-2"
        >
          <div className="flex items-center gap-2 text-xs font-label uppercase tracking-[0.28em] text-[#c5a059]">
            <span>LOADING PORTFOLIO...</span>
            <span className="animate-pulse">♠</span>
          </div>
          <div className="w-36 h-[1px] bg-gradient-to-r from-transparent via-[#c5a059] to-transparent opacity-60" />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
