"use client";

import React, { useState, useRef } from "react";
import { SKILL_CARDS } from "@/data/deckData";
import { ChevronDown, ChevronUp, Sparkles, RefreshCw } from "lucide-react";
import { motion, useInView, AnimatePresence } from "framer-motion";

export const SkillsSection: React.FC = () => {
  const [expandedCardId, setExpandedCardId] = useState<string | null>(null);
  const [flourishKey, setFlourishKey] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: false, margin: "-80px" });

  const toggleExpand = (id: string) => {
    setExpandedCardId(expandedCardId === id ? null : id);
  };

  const reFlourish = () => {
    setFlourishKey((prev) => prev + 1);
  };

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="w-full py-16 sm:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] sm:w-[700px] h-[400px] sm:h-[500px] bg-gradient-to-tr from-[#c5a059]/10 via-transparent to-transparent blur-3xl pointer-events-none -z-10" />

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto flex flex-col items-center text-center mb-10 sm:mb-12"
      >
        <div className="flex items-center gap-2 px-3.5 py-1 bg-[#1c1b1c] rounded-full border border-[#c5a059]/30 shadow-sm mb-3">
          <span className="text-[#e9c176] font-bold text-xs">♠ ♥ ♦ ♣</span>
          <span className="font-label text-[8px] sm:text-[9px] uppercase tracking-[0.22em] text-[#e9c176]">
            CARD № 03 • FOUR-SUIT FLOURISH
          </span>
        </div>

        <span className="font-label text-[10px] uppercase tracking-[0.26em] text-[#c5a059] mb-1 font-medium">
          Core Competencies
        </span>

        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-[#e5e2e3] tracking-tight mb-2 font-normal">
          WHAT&apos;S IN THE DECK
        </h2>

        <p className="font-headline italic text-base sm:text-xl text-[#d1c5b4] max-w-xl font-light px-2">
          “The tools I use to turn ideas into things that work.”
        </p>

        {/* Flourish Controls */}
        <div className="flex items-center gap-2 mt-4">
          <button
            onClick={reFlourish}
            aria-label="Replay card flourish animation"
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1c1b1c] hover:bg-[#2a2a2b] text-[#e9c176] font-label text-[8px] sm:text-[9px] uppercase tracking-wider border border-[#c5a059]/30 shadow-sm hover:border-[#c5a059] transition-all cursor-pointer"
          >
            <RefreshCw className="w-3 h-3 text-[#e9c176]" />
            <span>RE-DEAL FLOURISH</span>
          </button>
          <span className="font-label text-[8px] sm:text-[9px] uppercase tracking-widest text-[#9a8f80]">
            • Tap any card for details
          </span>
        </div>
      </motion.div>

      {/* 4 Playing Cards Grid with Flourish Animation */}
      <div
        key={flourishKey}
        className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 relative"
      >
        {SKILL_CARDS.map((card, idx) => {
          const isExpanded = expandedCardId === card.id;
          const finalRotations = [-1.5, 1.2, -1.2, 1.8];
          const finalRotation = finalRotations[idx];

          // Initial "single stacked card" state:
          // Card 0 is on top of the deck.
          // Cards 1, 2, 3 start tucked directly behind Card 0 with slight offsets,
          // then flourish and slide out to their respective columns!
          const initialCardState = {
            opacity: idx === 0 ? 1 : 0,
            x: idx === 0 ? 0 : (idx === 1 ? -40 : idx === 2 ? -80 : -120),
            y: idx === 0 ? 0 : 25,
            scale: idx === 0 ? 1 : 0.88,
            rotate: idx === 0 ? 0 : idx * 4,
          };

          const flourishedState = {
            opacity: 1,
            x: 0,
            y: 0,
            scale: 1,
            rotate: finalRotation,
            transition: {
              type: "spring",
              stiffness: 70,
              damping: 14,
              mass: 0.9,
              delay: idx === 0 ? 0.05 : 0.25 + idx * 0.18,
            },
          };

          return (
            <motion.article
              key={card.id}
              initial={initialCardState}
              animate={isInView ? flourishedState : initialCardState}
              whileHover={{ y: -8, scale: 1.02, rotate: 0 }}
              whileTap={{ scale: 0.98 }}
              role="button"
              tabIndex={0}
              aria-expanded={isExpanded}
              aria-label={`${card.category} skills card`}
              onClick={() => toggleExpand(card.id)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  toggleExpand(card.id);
                }
              }}
              className={`group deck-card relative rounded-2xl bg-[#0e0e0f] p-2 sm:p-2.5 cursor-pointer transition-colors duration-300 shadow-2xl border ${
                isExpanded
                  ? "border-[#c5a059] ring-1 ring-[#c5a059]"
                  : "border-[#c5a059]/35 hover:border-[#c5a059]/80"
              } overflow-hidden flex flex-col justify-between min-h-[460px] sm:min-h-[500px] linen-texture`}
            >
              <div className="w-full h-full bg-[#141a20]/95 rounded-xl p-4 sm:p-5 flex flex-col justify-between relative overflow-hidden border border-[#9a8f80]/15">
                {/* Double Filigree Inset Borders */}
                <div className="absolute inset-1.5 border border-[#c5a059]/20 rounded-lg pointer-events-none group-hover:border-[#c5a059]/40 transition-colors" />

                {/* Corner Watermark Sigil */}
                <div className="absolute right-2 bottom-6 text-[100px] sm:text-[120px] leading-none font-display text-[#c5a059]/[0.03] group-hover:text-[#c5a059]/[0.07] transition-colors pointer-events-none select-none">
                  {card.suit}
                </div>

                {/* Top Corner Indices */}
                <div className="relative z-10 flex justify-between items-start">
                  <div
                    className={`flex flex-col items-center leading-none select-none ${
                      card.isRed ? "text-[#ff9da2]" : "text-[#e9c176]"
                    }`}
                  >
                    <span className="font-display text-2xl font-bold tracking-tight">
                      {card.rank}
                    </span>
                    <span className="text-xl mt-0.5">{card.suit}</span>
                    <span className="font-label text-[8px] text-[#9a8f80] tracking-widest mt-1">
                      03{String.fromCharCode(65 + idx)}
                    </span>
                  </div>

                  <div className="text-right">
                    <span className="px-2.5 py-1 rounded bg-[#1c1b1c] text-[#e5e2e3] font-label text-[8px] tracking-[0.18em] uppercase border border-[#c5a059]/30 shadow-xs font-semibold inline-flex items-center gap-1">
                      <span className={card.isRed ? "text-[#ff9da2]" : "text-[#e9c176]"}>
                        {card.suit}
                      </span>
                      <span>{card.suitName}</span>
                    </span>
                  </div>
                </div>

                {/* Card Center / Body */}
                <div className="relative z-10 my-auto py-2.5 flex flex-col gap-2.5">
                  <div className="flex items-center gap-2">
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${
                        card.isRed ? "bg-[#ff9da2]" : "bg-[#e9c176]"
                      } shadow-[0_0_8px_rgba(233,193,118,0.8)]`}
                    />
                    <span className="font-label text-[8px] uppercase tracking-[0.22em] text-[#e9c176] font-semibold">
                      {card.discipline}
                    </span>
                  </div>

                  <h3 className="font-display text-2xl sm:text-3xl text-[#e5e2e3] leading-none tracking-tight font-normal">
                    {card.category}
                  </h3>

                  <p className="font-body text-xs text-[#d1c5b4] leading-relaxed font-light">
                    {card.description}
                  </p>

                  {/* Skills Tag Pills */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {card.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-0.5 rounded bg-[#1c1b1c] text-[#e5e2e3] font-label text-[8px] tracking-wider border border-[#c5a059]/20"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Expandable Architectural Dossier */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="pt-2 mt-1 border-t border-[#c5a059]/20"
                      >
                        <span className="font-label text-[7px] uppercase tracking-widest text-[#c5a059] block mb-1">
                          ARCHITECTURAL DOSSIER
                        </span>
                        <p className="font-body text-[11px] text-[#9a8f80] leading-relaxed italic">
                          {card.dossier}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Bottom Bar: Touch Action Cue */}
                <div className="relative z-10 flex items-center justify-between pt-2.5 border-t border-[#c5a059]/20 text-[8px] font-label">
                  <span className="text-[#9a8f80] uppercase tracking-widest">
                    SUIT OF {card.suitName}
                  </span>
                  <div className="flex items-center gap-1 text-[#e9c176] font-semibold uppercase tracking-wider">
                    <span>{isExpanded ? "LESS" : "DETAILS"}</span>
                    {isExpanded ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
                  </div>
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
};
