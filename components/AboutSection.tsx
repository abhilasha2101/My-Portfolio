"use client";

import React, { useState, useRef } from "react";
import { ABOUT_FACETS } from "@/data/deckData";
import { motion, useInView } from "framer-motion";
import { RefreshCw } from "lucide-react";

export const AboutSection: React.FC = () => {
  const [activeMode, setActiveMode] = useState<"focus" | "spread" | "inspect">("spread");
  const [selectedFacet, setSelectedFacet] = useState<string | null>(null);
  const [flourishKey, setFlourishKey] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: false, margin: "-80px" });

  const reFlourish = () => {
    setFlourishKey((prev) => prev + 1);
  };

  return (
    <section
      id="about"
      ref={sectionRef}
      className="w-full py-16 sm:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center -z-10 overflow-hidden">
        <div className="w-[500px] sm:w-[700px] h-[500px] sm:h-[700px] rounded-full bg-[#c5a059]/5 blur-3xl opacity-40" />
      </div>

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto flex flex-col items-center text-center mb-10 sm:mb-12"
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1c1b1c] border border-[#c5a059]/30 text-xs mb-3 shadow-sm">
          <span className="text-[#ff9da2] font-serif font-bold text-sm">♦</span>
          <span className="font-label text-[8px] sm:text-[9px] uppercase tracking-[0.22em] text-[#e5e2e3]">
            CARD № 01 • SATELLITE HAND DEAL
          </span>
          <span className="text-[#9a8f80] text-[10px]">•</span>
          <span className="font-label text-[8px] sm:text-[9px] uppercase tracking-[0.2em] text-[#ff9da2]">
            Full-Stack • B.Tech IT
          </span>
        </div>

        <span className="font-label text-[10px] uppercase tracking-[0.26em] text-[#c5a059] mb-1 font-medium">
          Professional Profile
        </span>

        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-[#e5e2e3] tracking-tight mb-2 sm:mb-3 font-normal">
          THE PERSON BEHIND THE DECK
        </h2>

        <p className="font-headline italic text-base sm:text-xl text-[#ccc6b9] max-w-2xl font-light px-2">
          “Driven by curiosity, clean code, and building products that solve real problems.”
        </p>

        {/* Layout Controller & Flourish Replay */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-5 sm:mt-6">
          <div className="flex items-center gap-1.5 p-1 rounded-full bg-[#1c1b1c] border border-[#9a8f80]/20 shadow-inner">
            <button
              onClick={() => setActiveMode("focus")}
              className={`px-3 sm:px-4 py-1.5 rounded-full font-label text-[9px] uppercase tracking-widest transition-all flex items-center gap-1.5 cursor-pointer min-h-[34px] ${
                activeMode === "focus"
                  ? "bg-[#c5a059] text-[#131314] font-bold shadow-md"
                  : "text-[#d1c5b4] hover:text-[#e9c176]"
              }`}
            >
              <span>♠</span> Focus Card
            </button>
            <button
              onClick={() => setActiveMode("spread")}
              className={`px-3 sm:px-4 py-1.5 rounded-full font-label text-[9px] uppercase tracking-widest transition-all flex items-center gap-1.5 cursor-pointer min-h-[34px] ${
                activeMode === "spread"
                  ? "bg-[#c5a059] text-[#131314] font-bold shadow-md"
                  : "text-[#d1c5b4] hover:text-[#e9c176]"
              }`}
            >
              <span>♦</span> Grid View
            </button>
            <button
              onClick={() => setActiveMode("inspect")}
              className={`px-3 sm:px-4 py-1.5 rounded-full font-label text-[9px] uppercase tracking-widest transition-all flex items-center gap-1.5 cursor-pointer min-h-[34px] ${
                activeMode === "inspect"
                  ? "bg-[#c5a059] text-[#131314] font-bold shadow-md"
                  : "text-[#d1c5b4] hover:text-[#e9c176]"
              }`}
            >
              <span>♣</span> Key Facets
            </button>
          </div>

          <button
            onClick={reFlourish}
            aria-label="Re-flourish satellite cards"
            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-[#1c1b1c] hover:bg-[#2a2a2b] text-[#e9c176] font-label text-[8px] sm:text-[9px] uppercase tracking-wider border border-[#c5a059]/30 shadow-sm transition-all cursor-pointer min-h-[34px]"
          >
            <RefreshCw className="w-3 h-3 text-[#e9c176]" />
            <span>RE-DEAL</span>
          </button>
        </div>
      </motion.div>

      {/* Main Showcase Stage */}
      <div
        key={flourishKey}
        className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-6 sm:gap-8 lg:gap-12 [perspective:1400px]"
      >
        {/* Master Center Card: Appears as the primary deck cut */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.92, y: 20 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className={`w-full max-w-[370px] sm:max-w-[400px] min-h-[480px] sm:min-h-[520px] rounded-2xl bg-[#201f20] p-2.5 sm:p-3 transition-all duration-500 shadow-2xl border border-[#c5a059]/40 relative linen-texture flex flex-col justify-between z-20 ${
            activeMode === "focus"
              ? "scale-[1.02] sm:scale-105 ring-2 ring-[#c5a059]/50 shadow-[0_30px_70px_rgba(0,0,0,0.9)]"
              : "hover:scale-[1.01]"
          }`}
        >
          <div className="w-full h-full rounded-xl bg-[#1c1b1c] p-4 sm:p-6 flex flex-col justify-between relative overflow-hidden shadow-inner border border-[#c5a059]/25">
            {/* Top Playing Card Indices */}
            <div className="w-full flex items-start justify-between relative z-10">
              <div className="flex flex-col items-center leading-none select-none">
                <span className="font-display text-2xl font-bold text-[#ff9da2]">2</span>
                <span className="text-[#ff9da2] text-base mt-0.5 leading-none">♦</span>
                <span className="font-label text-[8px] text-[#ccc6b9] uppercase tracking-widest mt-1">№ 02</span>
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#2a2a2b] border border-[#c5a059]/30">
                <span className="w-1.5 h-1.5 rounded-full bg-[#e9c176]" />
                <span className="font-label text-[8px] text-[#d1c5b4] uppercase tracking-widest">
                  Software Developer • B.Tech IT
                </span>
              </div>
              <div className="flex flex-col items-center leading-none rotate-180 select-none">
                <span className="font-display text-2xl font-bold text-[#ff9da2]">2</span>
                <span className="text-[#ff9da2] text-base mt-0.5 leading-none">♦</span>
              </div>
            </div>

            {/* Central Specimen Identity */}
            <div className="flex flex-col items-center text-center my-auto relative z-10 px-1 sm:px-2 py-3">
              <div className="w-12 sm:w-14 h-12 sm:h-14 rounded-full bg-[#2a2a2b] flex items-center justify-center mb-2 relative shadow-md border border-[#c5a059]/40">
                <span className="text-xl sm:text-2xl text-[#ff9da2]">♦</span>
                <div className="absolute inset-1 rounded-full border border-dashed border-[#c5a059]/40" />
              </div>

              <span className="font-label text-[8px] sm:text-[9px] text-[#c5a059] tracking-[0.24em] uppercase mb-0.5">
                Overview
              </span>
              <h3 className="font-display text-2xl sm:text-3xl text-[#e5e2e3] tracking-tight leading-tight">
                ABHILASHA KUMARI
              </h3>
              <p className="font-headline text-xs sm:text-sm italic text-[#e9c176] mt-0.5 mb-2.5">
                Software Developer &amp; Technologist
              </p>

              {/* Bio Copy */}
              <div className="p-3 sm:p-3.5 rounded-lg bg-[#131314]/90 border border-[#c5a059]/20 shadow-inner">
                <p className="font-body text-xs sm:text-sm text-[#d1c5b4] leading-relaxed text-center font-normal">
                  “I&apos;m a Software Developer who enjoys building scalable web applications and turning ideas into working products. I work across modern full-stack technologies and enjoy learning new tools by actually building with them. I&apos;m curious by nature, so my interests often move between technology, creative hobbies, and completely new things I want to try.”
                </p>
              </div>
            </div>

            {/* Base Metadata Table */}
            <div className="w-full pt-2 bg-[#201f20] rounded-lg p-2 relative z-10 mt-auto border border-[#c5a059]/20">
              <div className="grid grid-cols-3 text-center gap-1 divide-x divide-[#c5a059]/20">
                <div className="flex flex-col items-center">
                  <span className="font-label text-[7px] uppercase tracking-widest text-[#9a8f80]">EDUCATION</span>
                  <span className="font-body text-xs text-[#e5e2e3] font-medium">B.Tech IT</span>
                </div>
                <div className="flex flex-col items-center px-1">
                  <span className="font-label text-[7px] uppercase tracking-widest text-[#9a8f80]">PRIMARY ROLE</span>
                  <span className="font-body text-xs text-[#e9c176] font-medium">Full-Stack</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="font-label text-[7px] uppercase tracking-widest text-[#9a8f80]">FOCUS</span>
                  <span className="font-body text-xs text-[#ff9da2] font-medium">Java &amp; Web</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Facet Cards Satellite Cluster: Deals out from behind the master card */}
        <div
          className={`w-full lg:max-w-2xl grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4 transition-all duration-500 ${
            activeMode === "focus" ? "opacity-60 scale-95" : "opacity-100 scale-100"
          }`}
        >
          {ABOUT_FACETS.map((facet, idx) => {
            const isSelected = selectedFacet === facet.id;
            const rotations = ["rotate-0 sm:rotate-1", "rotate-0 sm:-rotate-1", "rotate-0 sm:-rotate-2", "rotate-0 sm:rotate-2"];
            const rotationClass = activeMode === "spread" ? rotations[idx] : "rotate-0";

            // Flourish trajectory: Cards deal out from behind the master card with delay
            const initialFacetState = {
              opacity: 0,
              x: -60,
              y: 20,
              scale: 0.82,
              rotate: -5,
            };

            const flourishedFacetState = {
              opacity: 1,
              x: 0,
              y: 0,
              scale: 1,
              rotate: 0,
              transition: {
                type: "spring",
                stiffness: 75,
                damping: 14,
                delay: 0.28 + idx * 0.14,
              },
            };

            return (
              <motion.div
                key={facet.id}
                initial={initialFacetState}
                animate={isInView ? flourishedFacetState : initialFacetState}
                whileHover={{ scale: 1.02, y: -4 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedFacet(isSelected ? null : facet.id)}
                className={`facet-card group relative rounded-xl bg-[#1c1b1c] p-2 hover:bg-[#201f20] transition-colors duration-300 shadow-xl cursor-pointer border ${
                  isSelected
                    ? "border-[#c5a059] ring-1 ring-[#c5a059] -translate-y-1.5 shadow-2xl"
                    : "border-[#c5a059]/25 hover:border-[#c5a059]/70 hover:-translate-y-1"
                } ${rotationClass} linen-texture min-h-[170px] sm:min-h-[190px] flex flex-col justify-between`}
              >
                <div className="w-full h-full rounded-lg bg-[#131314] p-3.5 sm:p-4 flex flex-col justify-between relative overflow-hidden border border-[#9a8f80]/20">
                  {/* Top Header */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <span
                        className={`font-display text-base font-bold ${
                          facet.isRed ? "text-[#ff9da2]" : "text-[#e9c176]"
                        }`}
                      >
                        {facet.rank}{facet.suit}
                      </span>
                    </div>
                    <span className="px-2 py-0.5 rounded-full bg-[#201f20] font-label text-[8px] tracking-widest text-[#d1c5b4] uppercase border border-[#c5a059]/20">
                      {facet.cardIndex}
                    </span>
                  </div>

                  {/* Body Content */}
                  <div className="my-1">
                    <div className="flex items-center gap-2 mb-1">
                      <div
                        className={`w-6 h-6 rounded-full bg-[#201f20] flex items-center justify-center font-bold text-xs shrink-0 ${
                          facet.isRed ? "text-[#ff9da2]" : "text-[#e9c176]"
                        }`}
                      >
                        {facet.suit}
                      </div>
                      <div>
                        <h4 className="font-headline text-sm sm:text-base text-[#e5e2e3] font-bold leading-tight">
                          {facet.title}
                        </h4>
                        <p className="font-label text-[8px] text-[#e9c176] uppercase tracking-widest">
                          {facet.subtitle}
                        </p>
                      </div>
                    </div>
                    <p className="font-body text-xs text-[#d1c5b4] leading-relaxed mt-1 line-clamp-3">
                      {facet.description}
                    </p>
                  </div>

                  {/* Footer Tag */}
                  <div className="flex items-center justify-between pt-1 bg-[#201f20]/60 rounded px-2 py-1">
                    <span className="font-label text-[8px] text-[#ccc6b9]">
                      {facet.coreSuit}
                    </span>
                    <span className="font-label text-[8px] text-[#e9c176] uppercase tracking-wider font-semibold">
                      {facet.highlight}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
