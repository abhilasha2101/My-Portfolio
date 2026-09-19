"use client";

import React, { useState } from "react";
import { HERO_PERSONAS } from "@/data/deckData";
import { ExternalLink, Sparkles, RefreshCw, FileText, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const HeroSection: React.FC = () => {
  const [activePersonaIdx, setActivePersonaIdx] = useState(0);
  const [isFanned, setIsFanned] = useState(false);
  const [isShuffling, setIsShuffling] = useState(false);

  const activePersona = HERO_PERSONAS[activePersonaIdx];

  const handleShuffle = () => {
    setIsShuffling(true);
    setTimeout(() => {
      setActivePersonaIdx((prev) => (prev + 1) % HERO_PERSONAS.length);
      setIsShuffling(false);
    }, 250);
  };

  const handleSelectPersona = (idx: number) => {
    setActivePersonaIdx(idx);
  };

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen pt-20 sm:pt-24 pb-16 flex flex-col justify-between items-center px-4 sm:px-6 lg:px-8 overflow-hidden select-none"
    >
      {/* Background Archival Playing Card Watermark */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center -z-10 overflow-hidden">
        <div className="w-[500px] sm:w-[900px] h-[500px] sm:h-[900px] rounded-full bg-gradient-to-tr from-[#c5a059]/10 via-transparent to-transparent blur-3xl opacity-40" />
        <svg
          className="absolute w-[450px] sm:w-[850px] h-[450px] sm:h-[850px] text-[#c5a059]/[0.07] stroke-current"
          fill="none"
          viewBox="0 0 600 600"
        >
          <rect x="70" y="30" width="460" height="540" rx="12" strokeWidth="1" strokeDasharray="6 4" />
          <rect x="82" y="42" width="436" height="516" rx="8" strokeWidth="0.75" />
          <circle cx="300" cy="300" r="230" strokeWidth="0.75" strokeDasharray="3 3" />
          <circle cx="300" cy="300" r="170" strokeWidth="0.5" />
          <circle cx="300" cy="300" r="110" strokeWidth="0.75" strokeDasharray="1 4" />
          <circle cx="300" cy="300" r="50" strokeWidth="0.75" />
          <text x="160" y="150" fontSize="32" fill="currentColor" opacity="0.6" textAnchor="middle">♠</text>
          <text x="440" y="150" fontSize="32" fill="currentColor" opacity="0.6" textAnchor="middle">♥</text>
          <text x="160" y="470" fontSize="32" fill="currentColor" opacity="0.6" textAnchor="middle">♣</text>
          <text x="440" y="470" fontSize="32" fill="currentColor" opacity="0.6" textAnchor="middle">♦</text>
        </svg>
      </div>

      {/* Top Meta Header: Clean, balanced, luxury badges */}
      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-full max-w-4xl flex items-center justify-between gap-3 text-xs mb-5 sm:mb-7 px-2"
      >
        <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1c1b1c]/90 border border-[#c5a059]/30 backdrop-blur-md shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-[#e9c176] animate-pulse drop-shadow-[0_0_6px_rgba(233,193,118,0.8)]" />
          <span className="font-label text-[8.5px] sm:text-[9.5px] uppercase tracking-[0.2em] text-[#e9c176] font-semibold whitespace-nowrap">
            FULL-STACK DEVELOPER
          </span>
        </div>

        <div className="hidden sm:flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#1c1b1c]/80 border border-[#9a8f80]/30 backdrop-blur-md">
          <span className="font-label text-[9px] uppercase tracking-[0.22em] text-[#e5e2e3] font-medium whitespace-nowrap">
            {activePersona.name}
          </span>
          <span className="text-[#c5a059]/40 text-[9px]">◆</span>
          <span className="font-label text-[9px] uppercase tracking-[0.2em] text-[#ccc6b9] whitespace-nowrap">
            B.TECH IT
          </span>
        </div>

        <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1c1b1c]/90 border border-[#c5a059]/30 backdrop-blur-md shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          <span className="font-label text-[8.5px] sm:text-[9.5px] uppercase tracking-[0.2em] text-[#e9c176] font-semibold whitespace-nowrap">
            INDORE, MP • OPEN TO WORK
          </span>
        </div>
      </motion.div>

      {/* Central Playing Card Display & Staging */}
      <div className="relative z-20 w-full max-w-4xl my-auto py-2 flex flex-col items-center justify-center [perspective:1400px]">
        {/* Fanned Deck Container: Mobile Optimized Width & Height */}
        <div className="relative w-[280px] sm:w-[360px] h-[450px] sm:h-[530px] transition-all duration-700 ease-out">
          {/* Card Back 4 (Far Left: 10 ♣) */}
          <div
            onClick={() => handleSelectPersona(3)}
            className={`fan-card absolute inset-0 rounded-xl bg-[#0e0e0f] border border-[#9a8f80]/30 transition-all duration-700 ease-out origin-bottom cursor-pointer shadow-2xl p-2 sm:p-2.5 ${
              isFanned
                ? "-rotate-[18deg] sm:-rotate-[24deg] -translate-x-12 sm:-translate-x-32 translate-y-6 sm:translate-y-8 hover:-translate-y-2 hover:-rotate-[22deg]"
                : "-rotate-[9deg] sm:-rotate-[13deg] -translate-x-6 sm:-translate-x-16 translate-y-3 sm:translate-y-5 hover:-translate-y-2 hover:-rotate-[14deg]"
            }`}
          >
            <div className="w-full h-full rounded-lg border border-[#9a8f80]/20 bg-[#1c1b1c] p-2.5 sm:p-3 flex flex-col justify-between items-center overflow-hidden">
              <div className="w-full flex justify-between items-center text-[9px] sm:text-[10px] font-bold text-[#9a8f80]">
                <span>10 ♣</span>
                <span className="font-label text-[7px] sm:text-[8px] tracking-widest uppercase">WEB DEVELOPER</span>
                <span>10 ♣</span>
              </div>
              <div className="text-3xl sm:text-4xl text-[#9a8f80]/30">♣</div>
              <span className="font-label text-[7px] sm:text-[8px] text-[#9a8f80] tracking-widest uppercase">
                REACT • NEXT.JS • TAILWIND
              </span>
            </div>
          </div>

          {/* Card Back 3 (Mid Left: Q ♦) */}
          <div
            onClick={() => handleSelectPersona(2)}
            className={`fan-card absolute inset-0 rounded-xl bg-[#0e0e0f] border border-[#c5a059]/30 transition-all duration-700 ease-out origin-bottom cursor-pointer shadow-2xl p-2 sm:p-2.5 ${
              isFanned
                ? "-rotate-[9deg] sm:-rotate-[12deg] -translate-x-6 sm:-translate-x-16 translate-y-3 sm:translate-y-4 hover:-translate-y-2 hover:-rotate-[12deg]"
                : "-rotate-[5deg] sm:-rotate-[7deg] -translate-x-3 sm:-translate-x-8 translate-y-2 sm:translate-y-3 hover:-translate-y-2 hover:-rotate-[8deg]"
            }`}
          >
            <div className="w-full h-full rounded-lg border border-[#c5a059]/20 bg-[#1c1b1c] p-2.5 sm:p-3 flex flex-col justify-between items-center overflow-hidden">
              <div className="w-full flex justify-between items-center text-[9px] sm:text-[10px] font-bold text-[#ffb3b5]">
                <span>Q ♦</span>
                <span className="font-label text-[7px] sm:text-[8px] tracking-widest uppercase">JAVA DEVELOPER</span>
                <span>Q ♦</span>
              </div>
              <div className="text-3xl sm:text-4xl text-[#ffb3b5]/40">♦</div>
              <span className="font-label text-[7px] sm:text-[8px] text-[#9a8f80] tracking-widest uppercase">
                JAVA • SPRING BOOT • POSTGRES
              </span>
            </div>
          </div>

          {/* Card Back 2 (Mid Right: K ♥) */}
          <div
            onClick={() => handleSelectPersona(1)}
            className={`fan-card absolute inset-0 rounded-xl bg-[#0e0e0f] border border-[#c5a059]/30 transition-all duration-700 ease-out origin-bottom cursor-pointer shadow-2xl p-2 sm:p-2.5 ${
              isFanned
                ? "rotate-[9deg] sm:rotate-[12deg] translate-x-6 sm:translate-x-16 translate-y-3 sm:translate-y-4 hover:-translate-y-2 hover:rotate-[12deg]"
                : "rotate-[5deg] sm:rotate-[7deg] translate-x-3 sm:translate-x-8 translate-y-2 sm:translate-y-3 hover:-translate-y-2 hover:rotate-[8deg]"
            }`}
          >
            <div className="w-full h-full rounded-lg border border-[#c5a059]/20 bg-[#1c1b1c] p-2.5 sm:p-3 flex flex-col justify-between items-center overflow-hidden">
              <div className="w-full flex justify-between items-center text-[9px] sm:text-[10px] font-bold text-[#ffb3b5]">
                <span>K ♥</span>
                <span className="font-label text-[7px] sm:text-[8px] tracking-widest uppercase">BACKEND DEVELOPER</span>
                <span>K ♥</span>
              </div>
              <div className="text-3xl sm:text-4xl text-[#ffb3b5]/40">♥</div>
              <span className="font-label text-[7px] sm:text-[8px] text-[#9a8f80] tracking-widest uppercase">
                NODE.JS • JAVA • SPRING BOOT
              </span>
            </div>
          </div>

          {/* Card Back 1 (Far Right: A ♠) */}
          <div
            onClick={() => handleSelectPersona(0)}
            className={`fan-card absolute inset-0 rounded-xl bg-[#0e0e0f] border border-[#9a8f80]/30 transition-all duration-700 ease-out origin-bottom cursor-pointer shadow-2xl p-2 sm:p-2.5 ${
              isFanned
                ? "rotate-[18deg] sm:rotate-[24deg] translate-x-12 sm:translate-x-32 translate-y-6 sm:translate-y-8 hover:-translate-y-2 hover:rotate-[22deg]"
                : "rotate-[9deg] sm:rotate-[13deg] translate-x-6 sm:translate-x-16 translate-y-3 sm:translate-y-5 hover:-translate-y-2 hover:rotate-[14deg]"
            }`}
          >
            <div className="w-full h-full rounded-lg border border-[#9a8f80]/20 bg-[#1c1b1c] p-2.5 sm:p-3 flex flex-col justify-between items-center overflow-hidden">
              <div className="w-full flex justify-between items-center text-[9px] sm:text-[10px] font-bold text-[#9a8f80]">
                <span>A ♠</span>
                <span className="font-label text-[7px] sm:text-[8px] tracking-widest uppercase">FULL-STACK DEVELOPER</span>
                <span>A ♠</span>
              </div>
              <div className="text-3xl sm:text-4xl text-[#9a8f80]/30">♠</div>
              <span className="font-label text-[7px] sm:text-[8px] text-[#9a8f80] tracking-widest uppercase">
                NEXT.JS • REACT • TYPESCRIPT
              </span>
            </div>
          </div>

          {/* MAIN FOREGROUND ACTIVE HERO CARD */}
          <AnimatePresence mode="wait">
            <motion.article
              key={activePersona.idx}
              initial={{ scale: 0.95, opacity: 0.6, rotate: isShuffling ? 4 : 0 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-30 w-full h-full rounded-xl bg-[#0e0e0f] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.95)] border border-[#c5a059]/45 animate-cardFloat linen-texture"
            >
              <div className="w-full h-full p-2.5 sm:p-3 rounded-xl bg-[#1c1b1c] flex flex-col justify-between relative overflow-hidden">
                {/* Concentric hairline inner border */}
                <div className="card-inner-border w-full h-full rounded-lg border border-[#c5a059]/30 p-3.5 sm:p-4 bg-[#131314] flex flex-col justify-between relative overflow-hidden shadow-inner">
                  {/* Corner registration florets */}
                  <div className="absolute top-1.5 left-1.5 w-2.5 h-2.5 border-t border-l border-[#c5a059]/70 pointer-events-none" />
                  <div className="absolute top-1.5 right-1.5 w-2.5 h-2.5 border-t border-r border-[#c5a059]/70 pointer-events-none" />
                  <div className="absolute bottom-1.5 left-1.5 w-2.5 h-2.5 border-b border-l border-[#c5a059]/70 pointer-events-none" />
                  <div className="absolute bottom-1.5 right-1.5 w-2.5 h-2.5 border-b border-r border-[#c5a059]/70 pointer-events-none" />

                  {/* Top Corner Index */}
                  <div className="flex items-start justify-between z-10">
                    <div className="flex flex-col items-center leading-none text-left select-none">
                      <span
                        className={`font-display text-2xl sm:text-3xl font-bold tracking-tight drop-shadow-[0_1px_4px_rgba(197,160,89,0.4)] ${
                          activePersona.isRed ? "text-[#ff9da2]" : "text-[#e9c176]"
                        }`}
                      >
                        {activePersona.rank}
                      </span>
                      <span
                        className={`text-lg sm:text-xl mt-0.5 leading-none ${
                          activePersona.isRed ? "text-[#ff9da2]" : "text-[#e9c176]"
                        }`}
                      >
                        {activePersona.suit}
                      </span>
                      <span className="font-label text-[7px] sm:text-[8px] uppercase tracking-widest text-[#e9c176]/70 mt-1 font-bold border-t border-[#c5a059]/30 pt-0.5">
                        0{activePersona.idx + 1}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5 px-2 sm:px-2.5 py-1 rounded bg-[#201f20]/90 border border-[#c5a059]/30 shadow-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#e9c176] animate-pulse drop-shadow-[0_0_6px_rgba(233,193,118,0.8)]" />
                      <span className="font-label text-[7px] sm:text-[9px] uppercase tracking-[0.2em] text-[#e5e2e3] font-semibold">
                        № 0{activePersona.idx + 1} • {activePersona.name}
                      </span>
                    </div>
                  </div>

                  {/* Center Content */}
                  <div className="my-auto py-1 flex flex-col items-center text-center z-10">
                    <div className="relative w-20 sm:w-28 h-20 sm:h-28 my-1 flex items-center justify-center">
                      <svg
                        className="absolute inset-0 w-full h-full text-[#c5a059]/30 drop-shadow-[0_0_8px_rgba(197,160,89,0.2)] animate-spin"
                        style={{ animationDuration: "60s" }}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 120 120"
                      >
                        <circle cx="60" cy="60" r="57" strokeWidth="0.5" strokeDasharray="2 4" />
                        <circle cx="60" cy="60" r="50" strokeWidth="0.75" />
                        <circle cx="60" cy="60" r="40" strokeWidth="0.5" strokeDasharray="1 3" />
                        <rect height="70" rx="4" strokeWidth="0.6" transform="rotate(45 60 60)" width="70" x="25" y="25" />
                      </svg>
                      <div
                        className={`relative z-10 text-3xl sm:text-5xl drop-shadow-[0_0_8px_rgba(197,160,89,0.5)] ${
                          activePersona.isRed ? "text-[#ff9da2]" : "text-[#e9c176]"
                        }`}
                      >
                        {activePersona.suit}
                      </div>
                    </div>

                    <h1 className="font-display text-xl sm:text-3xl text-[#e5e2e3] tracking-tight leading-none mt-2 uppercase font-normal">
                      Abhilasha Kumari
                    </h1>
                    <p className="font-headline italic text-sm sm:text-lg text-[#e9c176] font-normal tracking-wide mt-1">
                      Software Engineer
                    </p>
                    <p className="font-label text-[8px] sm:text-[9px] uppercase tracking-widest text-[#d1c5b4] mt-0.5">
                      Builder • Learner • Experimenter
                    </p>

                    {/* Attribute Tags */}
                    <div className="mt-2.5 px-2.5 py-1 rounded bg-[#1c1b1c] flex flex-wrap justify-center items-center gap-1.5 border border-[#c5a059]/25 shadow-sm">
                      {activePersona.tags.map((tag) => (
                        <span
                          key={tag}
                          className="font-label text-[7px] sm:text-[8px] uppercase tracking-wider text-[#e5e2e3] px-1"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Bio Snippet */}
                    <p className="font-body text-[11px] sm:text-xs text-[#9a8f80] max-w-[240px] sm:max-w-[260px] leading-relaxed mt-2 text-center line-clamp-2">
                      {activePersona.bio}
                    </p>
                  </div>

                  {/* Bottom Inverted Index */}
                  <div className="flex items-end justify-between z-10 pt-2 border-t border-[#c5a059]/20">
                    <div className="flex flex-col text-left">
                      <span className="font-label text-[7px] uppercase tracking-widest text-[#9a8f80]">
                        SOFTWARE DEVELOPER
                      </span>
                      <span className="font-label text-[8px] uppercase tracking-widest text-[#d1c5b4] font-medium">
                        {activePersona.edition}
                      </span>
                    </div>

                    <div className="flex flex-col items-center leading-none text-right select-none rotate-180">
                      <span
                        className={`font-display text-2xl sm:text-3xl font-bold tracking-tight ${
                          activePersona.isRed ? "text-[#ff9da2]" : "text-[#e9c176]"
                        }`}
                      >
                        {activePersona.rank}
                      </span>
                      <span
                        className={`text-lg sm:text-xl mt-0.5 leading-none ${
                          activePersona.isRed ? "text-[#ff9da2]" : "text-[#e9c176]"
                        }`}
                      >
                        {activePersona.suit}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          </AnimatePresence>
        </div>

        {/* Tactical Deck Actions: Resume CTA & Interactive Controls */}
        <div className="mt-6 sm:mt-8 flex flex-col items-center gap-4 z-30">
          {/* Main Primary View Resume CTA */}
          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View Abhilasha Kumari's Resume (PDF)"
            className="group relative inline-flex items-center gap-2.5 px-6 sm:px-7 py-3 rounded-full bg-gradient-to-r from-[#e9c176] via-[#c5a059] to-[#d4af37] text-[#131314] font-label text-[10px] sm:text-xs uppercase tracking-[0.22em] font-bold shadow-[0_4px_24px_rgba(197,160,89,0.4)] border border-[#ffffff]/40 animate-auraPulse cursor-pointer"
          >
            <FileText className="w-4 h-4 text-[#131314]" />
            <span>VIEW RESUME</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#131314] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </motion.a>

          {/* Interactive Deck Shuffle Controls */}
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={handleShuffle}
              aria-label="Shuffle through developer personas"
              className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-2 rounded-full bg-[#1c1b1c] hover:bg-[#2a2a2b] text-[#e5e2e3] hover:text-[#e9c176] font-label text-[9px] uppercase tracking-wider border border-[#c5a059]/30 hover:border-[#c5a059] shadow-md transition-all cursor-pointer"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${isShuffling ? "animate-spin" : ""}`} />
              <span>SHUFFLE PERSONA</span>
            </motion.button>

            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsFanned(!isFanned)}
              aria-label="Fan deck out to inspect other personas"
              className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-2 rounded-full bg-[#1c1b1c] hover:bg-[#2a2a2b] text-[#e5e2e3] hover:text-[#e9c176] font-label text-[9px] uppercase tracking-wider border border-[#c5a059]/30 hover:border-[#c5a059] shadow-md transition-all cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>{isFanned ? "CLOSE FAN" : "SPREAD FAN"}</span>
            </motion.button>
          </div>

          {/* Persona quick switch indicators */}
          <div className="flex items-center gap-2 mt-1">
            {HERO_PERSONAS.map((p, idx) => (
              <button
                key={p.idx}
                onClick={() => handleSelectPersona(idx)}
                aria-label={`Switch to ${p.name}`}
                className={`w-6 h-6 rounded-full flex items-center justify-center font-display text-xs border transition-all cursor-pointer ${
                  activePersonaIdx === idx
                    ? "border-[#c5a059] bg-[#c5a059] text-[#131314] font-bold shadow-md scale-110"
                    : "border-[#9a8f80]/30 bg-[#1c1b1c] text-[#9a8f80] hover:border-[#c5a059]/60 hover:text-[#e5e2e3]"
                }`}
              >
                {p.suit}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Scroll Cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="relative z-10 flex flex-col items-center gap-1 text-[#9a8f80] mt-4"
      >
        <span className="font-label text-[8px] uppercase tracking-[0.24em] font-medium text-[#c5a059]">
          SCROLL TO EXPLORE THE DECK
        </span>
        <ChevronDown className="w-3.5 h-3.5 text-[#c5a059] animate-bounce" />
      </motion.div>
    </section>
  );
};
