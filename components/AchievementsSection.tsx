"use client";

import React, { useState, useRef } from "react";
import { ACHIEVEMENTS, Achievement } from "@/data/deckData";
import { RefreshCw, Award, CheckCircle2, Maximize2, X, RotateCcw } from "lucide-react";
import { motion, useInView } from "framer-motion";

export const AchievementsSection: React.FC = () => {
  const [flippedCards, setFlippedCards] = useState<Record<string, boolean>>({});
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [flourishKey, setFlourishKey] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: false, margin: "-80px" });

  const toggleFlip = (id: string) => {
    setFlippedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const reFlourish = () => {
    setFlourishKey((prev) => prev + 1);
  };

  const featured = ACHIEVEMENTS.find((a) => a.isFeatured);
  const supporting = ACHIEVEMENTS.filter((a) => !a.isFeatured);

  return (
    <section
      id="achievements"
      ref={sectionRef}
      className="w-full py-16 sm:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[650px] bg-gradient-to-b from-[#c5a059]/10 via-[#c5a059]/5 to-transparent blur-3xl pointer-events-none -z-10" />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto flex flex-col items-center text-center mb-10 sm:mb-12"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#1c1b1c] rounded-full border border-[#c5a059]/30 shadow-md mb-3 sm:mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-[#e9c176] animate-pulse" />
          <span className="font-headline text-xs text-[#e9c176] select-none font-bold">
            CARD № 04
          </span>
          <span className="text-[#9a8f80] text-xs">•</span>
          <span className="font-label text-[8px] sm:text-[9px] uppercase tracking-[0.22em] text-[#d1c5b4] font-medium">
            HONORS &amp; MILESTONE FLOURISH
          </span>
        </div>

        <span className="font-label text-[10px] uppercase tracking-[0.28em] text-[#c5a059] font-medium mb-1">
          Government Selection &amp; Academic Honors
        </span>

        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-[#e5e2e3] tracking-tight mb-2 sm:mb-3 font-normal">
          ACHIEVEMENTS
        </h2>

        <p className="font-headline italic text-base sm:text-xl text-[#d1c5b4] mb-4 font-light px-2">
          “Key milestones and recognitions earned through building, pitching, and competing.”
        </p>

        {/* Informational badges & Flourish button */}
        <div className="flex flex-wrap items-center justify-center gap-2 font-label text-[8px] sm:text-[9px]">
          <span className="px-3 py-1 bg-[#1c1b1c] text-[#e9c176] rounded-full border border-[#c5a059]/25 shadow-sm font-semibold">
            ★ 3 VERIFIED MILESTONES
          </span>
          <button
            onClick={reFlourish}
            aria-label="Replay milestone flourish animation"
            className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#201f20] hover:bg-[#2a2a2b] text-[#e5e2e3] hover:text-[#e9c176] rounded-full border border-[#c5a059]/30 shadow-sm transition-all cursor-pointer"
          >
            <RefreshCw className="w-3 h-3 text-[#e9c176]" />
            <span>RE-DEAL FLOURISH</span>
          </button>
        </div>
      </motion.div>

      {/* Asymmetric Showcase Container */}
      <div
        key={flourishKey}
        className="max-w-4xl mx-auto flex flex-col items-center gap-8 sm:gap-10 [perspective:1400px]"
      >
        {/* ========================================================
            CARD 1 (FEATURED CENTERPIECE): AAKAR WITH CM OF DELHI (A ♠)
            Starts as the primary single card on scroll entry
           ======================================================== */}
        {featured && (() => {
          const isFlipped = !!flippedCards[featured.id];

          return (
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 30 }}
              animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.94, y: 30 }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              className="w-full max-w-3xl [perspective:1200px] z-20"
            >
              <div
                className={`relative w-full min-h-[580px] sm:min-h-[520px] rounded-2xl transition-all duration-700 [transform-style:preserve-3d] shadow-[0_20px_50px_rgba(0,0,0,0.9)] ${
                  isFlipped ? "rotate-y-180" : ""
                }`}
              >
                {/* FRONT FACE */}
                <article
                  className={`backface-hidden absolute inset-0 rounded-2xl bg-[#0e0e0f] p-4 sm:p-6 flex flex-col justify-between overflow-hidden border border-[#c5a059]/45 linen-texture transition-opacity duration-300 ${
                    isFlipped ? "opacity-0 pointer-events-none z-0" : "opacity-100 pointer-events-auto z-10"
                  }`}
                >
                  {/* Dual concentric hairline */}
                  <div className="absolute inset-1.5 rounded-xl pointer-events-none border border-[#c5a059]/20" />
                  <div className="absolute inset-3 rounded-lg pointer-events-none border border-[#9a8f80]/10" />

                  {/* Top Corner Index Bar */}
                  <div className="relative z-10 flex items-start justify-between pb-3 border-b border-[#c5a059]/20">
                    <div className="flex items-center gap-3">
                      <div className="flex flex-col items-center justify-center w-9 h-11 bg-[#131314] rounded border border-[#c5a059]/40 shadow-sm">
                        <span className="font-headline text-lg font-bold leading-none text-[#e9c176]">
                          {featured.rank}
                        </span>
                        <span className="text-sm leading-none mt-0.5 text-[#e9c176]">
                          {featured.suit}
                        </span>
                      </div>
                      <div className="flex flex-col text-left">
                        <span className="font-label text-[8px] text-[#c5a059] tracking-wider uppercase font-semibold">
                          {featured.cardIndex}
                        </span>
                        <span className="font-label text-[10px] text-[#e9c176] tracking-widest uppercase font-bold">
                          {featured.title}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 bg-[#1c1b1c] text-[#e9c176] font-label text-[8px] uppercase tracking-wider rounded-full border border-[#c5a059]/30 font-semibold">
                        {featured.tag}
                      </span>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleFlip(featured.id);
                        }}
                        aria-label="Flip card for full details"
                        className="px-2.5 py-1 bg-[#201f20] hover:bg-[#2a2a2b] text-[#e9c176] rounded-lg border border-[#c5a059]/30 text-[8px] font-label uppercase tracking-wider flex items-center gap-1 transition-all cursor-pointer"
                      >
                        <RefreshCw className="w-3 h-3" />
                        <span>FLIP</span>
                      </button>
                    </div>
                  </div>

                  {/* Central Content: Real Photo Showcase & Narrative */}
                  <div className="relative z-10 my-3 flex flex-col gap-3.5 sm:gap-4">
                    {/* Photo Frame with CM of Delhi */}
                    {featured.imageUrl && (
                      <div className="relative w-full rounded-xl overflow-hidden border border-[#c5a059]/40 shadow-xl group/photo bg-[#050505]">
                        <img
                          src={featured.imageUrl}
                          alt="Abhilasha Kumari and team presenting AAkar to the Chief Minister of Delhi"
                          className="w-full h-48 sm:h-64 object-cover object-center filter contrast-[1.05] brightness-95 group-hover/photo:scale-[1.02] group-hover/photo:brightness-100 transition-all duration-700 ease-out cursor-pointer"
                          onClick={() => setLightboxImage(featured.imageUrl || null)}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />

                        {/* Photo Inset Caption */}
                        <div className="absolute bottom-2.5 sm:bottom-3 left-2.5 sm:left-3 right-2.5 sm:right-3 flex items-end justify-between gap-3">
                          <div className="text-left bg-[#0e0e0f]/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-[#c5a059]/30 max-w-xl">
                            <span className="font-label text-[7px] sm:text-[8px] text-[#e9c176] uppercase tracking-widest block font-bold">
                              DELHI SECRETARIAT • CM PRESENTATION &amp; HONORS
                            </span>
                            <p className="font-headline italic text-xs sm:text-sm text-[#e5e2e3] leading-tight mt-0.5">
                              Presented AAkar to the Chief Minister of Delhi &amp; Selected for 3-Day Government Bootcamp
                            </p>
                          </div>

                          <button
                            type="button"
                            onClick={() => setLightboxImage(featured.imageUrl || null)}
                            aria-label="View full resolution photograph"
                            className="px-2 sm:px-2.5 py-1 rounded bg-[#0e0e0f]/90 text-[#e9c176] border border-[#c5a059]/30 text-[8px] font-label uppercase tracking-widest flex items-center gap-1 shrink-0 hover:bg-[#c5a059] hover:text-[#131314] transition-all cursor-pointer shadow-md"
                          >
                            <Maximize2 className="w-3 h-3" />
                            <span className="hidden sm:inline">EXPAND</span>
                          </button>
                        </div>
                      </div>
                    )}

                    {/* Context and details */}
                    <div className="text-left px-1">
                      <div className="flex items-center gap-1.5 mb-1 text-[9px] font-label text-[#c5a059] uppercase tracking-widest font-semibold">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#c5a059]" />
                        <span>INNOVATION SHOWCASE • DELHI</span>
                      </div>

                      <h3 className="font-headline text-lg sm:text-2xl text-[#e5e2e3] mb-1 leading-tight font-medium">
                        {featured.mainStatement}
                      </h3>

                      <p className="font-body text-xs sm:text-sm text-[#d1c5b4] leading-relaxed mb-3">
                        {featured.supportingDetail}
                      </p>

                      <div className="flex flex-wrap items-center gap-2">
                        <span className="px-2.5 py-0.5 bg-[#1c1b1c] font-label text-[8px] text-[#e9c176] rounded border border-[#c5a059]/20 font-semibold">
                          Chief Minister of Delhi
                        </span>
                        <span className="px-2.5 py-0.5 bg-[#1c1b1c] font-label text-[8px] text-[#d1c5b4] rounded border border-[#9a8f80]/20">
                          Delhi Bootcamp Selection
                        </span>
                        <span className="px-2.5 py-0.5 bg-[#1c1b1c] font-label text-[8px] text-[#d1c5b4] rounded border border-[#9a8f80]/20">
                          Civic &amp; Spatial Data Platform
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Footer Flip Cue */}
                  <div className="relative z-10 flex items-center justify-between pt-3 border-t border-[#c5a059]/20">
                    <div className="flex items-center gap-1 text-[#9a8f80] font-label text-[8px]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#e9c176]" />
                      <span>OFFICIAL GOVERNMENT RECOGNITION</span>
                    </div>

                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleFlip(featured.id);
                      }}
                      className="flex items-center gap-1.5 px-3.5 py-1.5 bg-gradient-to-r from-[#e9c176] via-[#c5a059] to-[#d4af37] text-[#131314] rounded-full text-[9px] font-label uppercase tracking-wider font-bold shadow-md hover:-translate-y-0.5 transition-all cursor-pointer"
                    >
                      <span>FLIP FOR DETAILS</span>
                      <RefreshCw className="w-3 h-3 text-[#131314]" />
                    </button>
                  </div>
                </article>

                {/* REVERSE / BACK FACE */}
                <article
                  className={`backface-hidden rotate-y-180 absolute inset-0 rounded-2xl bg-[#0e0e0f] p-5 sm:p-7 flex flex-col justify-between overflow-hidden border border-[#c5a059]/55 transition-opacity duration-300 ${
                    isFlipped ? "opacity-100 pointer-events-auto z-20" : "opacity-0 pointer-events-none z-0"
                  }`}
                >
                  <div className="absolute inset-1.5 rounded-xl pointer-events-none border border-[#c5a059]/30 bg-[#1c1b1c]/30" />

                  {/* Lattice Guilloché SVG Pattern Backing */}
                  <div className="absolute inset-0 pointer-events-none opacity-20 flex items-center justify-center">
                    <svg className="w-full h-full stroke-[#c5a059]" fill="none" viewBox="0 0 600 400">
                      <defs>
                        <pattern id="lattice-featured" width="24" height="24" patternUnits="userSpaceOnUse" patternTransform="rotate(45 0 0)">
                          <line x1="0" y1="0" x2="24" y2="0" strokeWidth="0.75" />
                          <line x1="0" y1="0" x2="0" y2="24" strokeWidth="0.75" />
                        </pattern>
                      </defs>
                      <rect width="100%" height="100%" fill="url(#lattice-featured)" />
                      <circle cx="300" cy="200" r="110" strokeDasharray="3 3" strokeWidth="1" />
                      <circle cx="300" cy="200" r="80" strokeWidth="0.75" />
                    </svg>
                  </div>

                  {/* Top Reverse Bar */}
                  <div className="relative z-10 flex items-center justify-between pb-3 border-b border-[#c5a059]/20">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-[#c5a059]" />
                      <span className="font-label text-[9px] text-[#e9c176] tracking-widest uppercase font-bold">
                        PROGRAM &amp; BOOTCAMP DOSSIER
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleFlip(featured.id);
                      }}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-[#201f20] hover:bg-[#2a2a2b] text-[#e9c176] border border-[#c5a059]/30 text-[8px] font-label uppercase tracking-wider cursor-pointer"
                    >
                      <RotateCcw className="w-3 h-3" />
                      <span>RETURN</span>
                    </button>
                  </div>

                  {/* Body */}
                  <div className="relative z-10 my-auto text-center max-w-lg mx-auto flex flex-col items-center px-4">
                    <div className="w-12 h-12 rounded-full bg-[#201f20] border border-[#c5a059]/50 flex items-center justify-center mb-3 shadow-lg">
                      <Award className="w-6 h-6 text-[#e9c176]" />
                    </div>

                    <span className="font-label text-[8px] text-[#e9c176] tracking-widest uppercase mb-1 font-bold">
                      OFFICIAL SELECTION &amp; PRESENTATION
                    </span>

                    <h4 className="font-headline text-xl sm:text-2xl text-[#e5e2e3] mb-2 font-normal">
                      {featured.reverseTitle}
                    </h4>

                    <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#c5a059] to-transparent my-2" />

                    <p className="font-body text-xs sm:text-sm text-[#d1c5b4] leading-relaxed mb-5">
                      {featured.reverseBody}
                    </p>

                    <div className="grid grid-cols-2 gap-3 w-full max-w-md text-left font-label text-[8px]">
                      {featured.attributes.map((attr) => (
                        <div key={attr.label} className="p-2.5 bg-[#1c1b1c] rounded-lg border border-[#c5a059]/25">
                          <span className="text-[#9a8f80] block mb-0.5">{attr.label}</span>
                          <span className="text-[#e5e2e3] font-semibold text-[9px]">{attr.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Return Cue */}
                  <div className="relative z-10 flex items-center justify-between pt-3 border-t border-[#c5a059]/20">
                    <span className="font-label text-[8px] text-[#9a8f80]">
                      DOMAIN: CIVIC INNOVATION &amp; DATA SYSTEMS
                    </span>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleFlip(featured.id);
                      }}
                      className="flex items-center gap-1.5 px-4 py-2 bg-[#c5a059] text-[#131314] rounded-full font-label text-[9px] font-bold uppercase tracking-wider cursor-pointer hover:bg-[#e9c176] transition-all shadow-md active:scale-95"
                    >
                      <RotateCcw className="w-3.5 h-3.5 text-[#131314]" />
                      <span>RETURN TO FRONT</span>
                    </button>
                  </div>
                </article>
              </div>
            </motion.div>
          );
        })()}

        {/* ========================================================
            SUPPORTING CARDS: NPTEL (K ♥) & FIBOHACK 1.0 (Q ♦)
            Flourish trajectory: Deals out from behind the featured card!
           ======================================================== */}
        <div className="w-full max-w-3xl grid grid-cols-1 sm:grid-cols-2 gap-6">
          {supporting.map((item, idx) => {
            const isFlipped = !!flippedCards[item.id];
            const rotations = ["sm:-rotate-1", "sm:rotate-1"];

            // Starts tucked behind featured card, then deals out left and right
            const initialSupportingState = {
              opacity: 0,
              y: -50,
              x: idx === 0 ? 30 : -30,
              scale: 0.85,
              rotate: idx === 0 ? 6 : -6,
            };

            const flourishedSupportingState = {
              opacity: 1,
              y: 0,
              x: 0,
              scale: 1,
              rotate: 0,
              transition: {
                type: "spring",
                stiffness: 70,
                damping: 15,
                delay: 0.35 + idx * 0.18,
              },
            };

            return (
              <motion.div
                key={item.id}
                initial={initialSupportingState}
                animate={isInView ? flourishedSupportingState : initialSupportingState}
                whileHover={{ y: -6, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`cursor-pointer outline-none focus:ring-2 focus:ring-[#c5a059] rounded-xl [perspective:1200px] ${rotations[idx]}`}
                onClick={() => toggleFlip(item.id)}
              >
                <div
                  className={`relative w-full min-h-[370px] rounded-xl transition-all duration-700 [transform-style:preserve-3d] shadow-xl ${
                    isFlipped ? "rotate-y-180" : ""
                  }`}
                >
                  {/* FRONT */}
                  <article
                    className={`backface-hidden absolute inset-0 rounded-xl bg-[#0e0e0f] p-5 flex flex-col justify-between overflow-hidden border border-[#c5a059]/35 linen-texture transition-opacity duration-300 ${
                      isFlipped ? "opacity-0 pointer-events-none z-0" : "opacity-100 pointer-events-auto z-10"
                    }`}
                  >
                    <div className="absolute inset-1.5 rounded-lg pointer-events-none border border-[#c5a059]/20 bg-[#131314]/40" />

                    {/* Top Index */}
                    <div className="relative z-10 flex items-start justify-between">
                      <div className="flex items-center gap-2">
                        <div className="flex flex-col items-center justify-center w-8 h-10 bg-[#1c1b1c] rounded border border-[#c5a059]/30 font-headline font-bold leading-none">
                          <span className="text-base text-[#ff9da2]">{item.rank}</span>
                          <span className="text-xs mt-0.5 text-[#ff9da2]">{item.suit}</span>
                        </div>
                        <div className="flex flex-col text-left">
                          <span className="font-label text-[7px] text-[#9a8f80] uppercase tracking-wider">
                            {item.cardIndex}
                          </span>
                          <span className="font-label text-[8px] text-[#ff9da2] uppercase tracking-widest font-bold">
                            {item.tag}
                          </span>
                        </div>
                      </div>

                      <span className="px-2 py-0.5 bg-[#1c1b1c] text-[#e9c176] rounded font-label text-[8px] border border-[#c5a059]/20 font-semibold">
                        {item.suit}
                      </span>
                    </div>

                    {/* Body */}
                    <div className="relative z-10 my-auto text-left">
                      <span className="font-label text-[8px] text-[#ff9da2] uppercase tracking-widest block mb-1 font-bold">
                        ACADEMIC &amp; COMPETITIVE HONORS
                      </span>
                      <h4 className="font-headline text-2xl text-[#e5e2e3] mb-1 font-bold">
                        {item.title}
                      </h4>
                      <div className="inline-block px-2.5 py-1 bg-[#1c1b1c] text-[#e9c176] font-label text-[9px] rounded-md mb-2 font-semibold border border-[#c5a059]/25">
                        {item.mainStatement}
                      </div>
                      <p className="font-body text-xs text-[#d1c5b4] leading-relaxed">
                        {item.supportingDetail}
                      </p>
                    </div>

                    {/* Footer Trigger */}
                    <div className="relative z-10 flex items-center justify-between pt-2 border-t border-[#c5a059]/20">
                      <span className="font-label text-[8px] text-[#9a8f80]">VERIFIED HONORS</span>
                      <div className="flex items-center gap-1 text-[#e9c176] font-label text-[8px] font-bold">
                        <span>FLIP CARD</span>
                        <RefreshCw className="w-3 h-3" />
                      </div>
                    </div>
                  </article>

                  {/* REVERSE */}
                  <article
                    className={`backface-hidden rotate-y-180 absolute inset-0 rounded-xl bg-[#0e0e0f] p-5 flex flex-col justify-between overflow-hidden border border-[#c5a059]/45 transition-opacity duration-300 ${
                      isFlipped ? "opacity-100 pointer-events-auto z-20" : "opacity-0 pointer-events-none z-0"
                    }`}
                  >
                    <div className="absolute inset-1.5 rounded-lg pointer-events-none border border-[#c5a059]/20 bg-[#1c1b1c]/30" />

                    <div className="relative z-10 flex items-center justify-between">
                      <span className="font-label text-[8px] text-[#ff9da2] uppercase tracking-widest font-bold">
                        {item.title} DETAILS
                      </span>
                      <span className="font-label text-[8px] text-[#9a8f80]">VERIFIED</span>
                    </div>

                    <div className="relative z-10 text-left my-auto">
                      <div className="w-9 h-9 rounded-full bg-[#1c1b1c] border border-[#c5a059]/30 flex items-center justify-center mb-2">
                        <Award className="w-4 h-4 text-[#e9c176]" />
                      </div>
                      <h5 className="font-headline text-lg text-[#e5e2e3] mb-1">
                        {item.reverseTitle}
                      </h5>
                      <p className="font-body text-xs text-[#d1c5b4] leading-relaxed mb-3">
                        {item.reverseBody}
                      </p>
                      <div className="space-y-1.5 font-label text-[8px]">
                        {item.attributes.map((attr) => (
                          <div key={attr.label} className="flex items-center justify-between p-1.5 bg-[#1c1b1c] rounded border border-[#c5a059]/20">
                            <span className="text-[#9a8f80]">{attr.label}</span>
                            <span className="text-[#e5e2e3] font-semibold">{attr.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="relative z-10 flex items-center justify-between pt-2 border-t border-[#c5a059]/20">
                      <span className="font-label text-[8px] text-[#9a8f80]">RECOGNITION</span>
                      <div className="flex items-center gap-1 text-[#e9c176] font-label text-[8px] font-bold">
                        <span>RETURN TO FRONT</span>
                        <RotateCcw className="w-3 h-3" />
                      </div>
                    </div>
                  </article>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Lightbox for CM Delhi Picture */}
      {lightboxImage && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fadeIn"
          onClick={() => setLightboxImage(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full bg-[#0e0e0f] rounded-2xl p-3 border border-[#c5a059]/50 shadow-2xl"
          >
            <button
              type="button"
              onClick={() => setLightboxImage(null)}
              aria-label="Close image lightbox"
              className="absolute top-5 right-5 z-10 p-2 rounded-full bg-black/80 text-[#e5e2e3] hover:text-[#e9c176] border border-[#c5a059]/40 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
            <img
              src={lightboxImage}
              alt="Full view: Presented AAkar to the Chief Minister of Delhi"
              className="w-full h-auto rounded-xl object-contain max-h-[80vh]"
            />
            <div className="mt-3 text-center">
              <p className="font-label text-[10px] uppercase tracking-widest text-[#e9c176] font-semibold">
                PRESENTATION TO THE HON&apos;BLE CHIEF MINISTER OF DELHI • DELHI INNOVATION PROGRAM
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
