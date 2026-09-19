"use client";

import React from "react";
import { Mail, Linkedin, Github, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="w-full py-16 sm:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Subtle Atmospheric Foil Radial Glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center overflow-hidden">
        <div className="w-[500px] sm:w-[850px] h-[500px] sm:h-[850px] rounded-full bg-gradient-to-b from-[#c5a059]/15 via-[#c5a059]/5 to-transparent blur-3xl opacity-50" />
      </div>

      {/* Header Meta Pill */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-4xl mx-auto pt-2 sm:pt-4 flex flex-col items-center text-center mb-8 sm:mb-10"
      >
        <div className="inline-flex flex-wrap items-center justify-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-[#1c1b1c] border border-[#c5a059]/30 backdrop-blur-md shadow-md">
          <span className="w-1.5 h-1.5 rounded-full bg-[#e9c176] animate-pulse" />
          <span className="font-label text-[8px] sm:text-[9px] uppercase tracking-[0.2em] text-[#e5e2e3] font-semibold">
            CARD № 05
          </span>
          <span className="text-[#9a8f80] text-xs">•</span>
          <span className="font-label text-[8px] sm:text-[9px] uppercase tracking-[0.2em] text-[#d1c5b4] font-medium">
            CONTACT &amp; INQUIRIES
          </span>
          <span className="text-[#9a8f80] text-xs">•</span>
          <span className="font-label text-[8px] sm:text-[9px] uppercase tracking-[0.22em] text-[#e9c176] font-semibold">
            GET IN TOUCH
          </span>
        </div>

        <div className="mt-3 sm:mt-4 flex flex-col items-center">
          <span className="font-label text-[9px] sm:text-[10px] uppercase tracking-[0.26em] text-[#c5a059] font-medium">
            Open for Opportunities &amp; Collaborations
          </span>
          <h2 className="mt-1 font-display text-3xl sm:text-4xl lg:text-5xl text-[#e5e2e3] tracking-tight font-normal">
            LET&apos;S WORK TOGETHER
          </h2>
        </div>
      </motion.div>

      {/* Central Final Card with 3D Stacked Layers */}
      <div className="w-full max-w-4xl mx-auto mb-12 sm:mb-16 flex flex-col items-center justify-center [perspective:1400px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-[580px] flex items-center justify-center group"
        >
          {/* Stacked background cards */}
          <div className="absolute -bottom-4 w-[92%] h-full rounded-2xl bg-[#0e0e0f] border border-[#c5a059]/10 shadow-[0_20px_45px_rgba(0,0,0,0.8)] -rotate-2 opacity-40 transition-transform duration-700 ease-out group-hover:-rotate-3 group-hover:-translate-y-1 pointer-events-none" />
          <div className="absolute -bottom-2 w-[96%] h-full rounded-2xl bg-[#1c1b1c] border border-[#c5a059]/15 shadow-[0_25px_55px_rgba(0,0,0,0.85)] rotate-1 opacity-60 transition-transform duration-700 ease-out group-hover:rotate-2 group-hover:-translate-y-1.5 pointer-events-none" />

          {/* Masterpiece Final Card */}
          <article className="relative w-full rounded-2xl bg-[#0e0e0f] p-2.5 sm:p-3 border border-[#c5a059]/45 shadow-[0_30px_70px_rgba(0,0,0,0.95)] transition-all duration-500 ease-out hover:-translate-y-1.5 linen-texture">
            <div className="relative rounded-xl bg-[#141a20]/95 p-5 sm:p-8 flex flex-col justify-between overflow-hidden border border-[#c5a059]/30">
              {/* Concentric hairline insets */}
              <div className="pointer-events-none absolute inset-1.5 sm:inset-2 rounded-lg border border-[#c5a059]/20" />
              <div className="pointer-events-none absolute inset-3 sm:inset-3.5 rounded-lg border border-[#9a8f80]/15" />

              {/* Card Header Bar */}
              <header className="relative z-10 flex items-start justify-between w-full">
                <div className="flex flex-col items-center select-none text-[#e9c176]">
                  <span className="font-headline text-2xl sm:text-3xl leading-none font-bold">A</span>
                  <span className="text-xl sm:text-2xl leading-none mt-0.5 select-none">♠</span>
                  <span className="font-label text-[7px] sm:text-[8px] tracking-[0.24em] text-[#9a8f80] mt-1 uppercase font-semibold">
                    SPADES
                  </span>
                </div>

                <div className="flex flex-col items-center text-center">
                  <span className="font-label text-[9px] sm:text-[10px] uppercase tracking-[0.24em] text-[#e5e2e3] font-semibold">
                    CONTACT CARD
                  </span>
                  <span className="font-label text-[8px] uppercase tracking-[0.18em] text-[#c5a059] mt-0.5 font-medium">
                    DIRECT CHANNELS
                  </span>
                  <div className="mt-1 flex items-center gap-1.5 opacity-80">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#c81e1e]" />
                    <span className="w-8 h-px bg-[#c5a059]/40" />
                    <span className="w-1.5 h-1.5 rounded-full bg-[#e9c176]" />
                  </div>
                </div>

                <div className="flex flex-col items-center select-none text-[#e9c176]">
                  <span className="font-headline text-2xl sm:text-3xl leading-none font-bold">A</span>
                  <span className="text-xl sm:text-2xl leading-none mt-0.5 select-none">♠</span>
                  <span className="font-label text-[7px] sm:text-[8px] tracking-[0.24em] text-[#9a8f80] mt-1 uppercase font-semibold">
                    CONTACT
                  </span>
                </div>
              </header>

              {/* Center Content */}
              <div className="relative z-10 text-center px-1 sm:px-6 pt-6 sm:pt-8 pb-3">
                <span className="inline-block font-label text-[8px] sm:text-[9px] uppercase tracking-[0.28em] text-[#c5a059] font-semibold mb-1 sm:mb-2">
                  CONNECT &amp; COLLABORATE
                </span>

                <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl text-[#e5e2e3] tracking-tight font-normal">
                  LET&apos;S WORK TOGETHER
                </h3>

                <p className="mt-3 sm:mt-4 font-headline italic text-[#d1c5b4] text-sm sm:text-lg leading-relaxed max-w-md mx-auto font-normal">
                  “Have a project, opportunity, or just want to talk about something interesting? I&apos;d love to hear from you.”
                </p>
              </div>

              {/* Filigree Ornament Line */}
              <div className="relative z-10 my-3 sm:my-4 flex items-center justify-center gap-3 select-none">
                <div className="w-12 sm:w-24 h-px bg-gradient-to-r from-transparent via-[#c5a059] to-transparent opacity-60" />
                <div className="flex items-center gap-2 text-xs">
                  <span className="text-xs sm:text-sm text-[#ff9da2]">♦</span>
                  <span className="text-sm sm:text-base text-[#e9c176]">♠</span>
                  <span className="text-xs sm:text-sm text-[#ff9da2]">♦</span>
                </div>
                <div className="w-12 sm:w-24 h-px bg-gradient-to-r from-transparent via-[#c5a059] to-transparent opacity-60" />
              </div>

              {/* Channels: Mail, LinkedIn, GitHub */}
              {/* Note: The email address is strictly in the mailto destination and never rendered as visible text */}
              <div className="relative z-10 mb-2 flex flex-col items-center w-full">
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-2.5 w-full max-w-md">
                  {/* Mail CTA */}
                  <motion.a
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    href="mailto:abhilasha21012005@gmail.com?subject=Inquiry%20from%20Portfolio"
                    aria-label="Send direct email inquiry"
                    className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 sm:py-3.5 rounded-xl bg-gradient-to-r from-[#e9c176] via-[#c5a059] to-[#d4af37] text-[#131314] font-label text-[10px] tracking-[0.16em] font-bold border border-[#f8fafc]/40 shadow-[0_4px_16px_rgba(197,160,89,0.35)] hover:shadow-[0_8px_24px_rgba(197,160,89,0.5)] transition-all min-h-[46px] group cursor-pointer animate-auraPulse"
                  >
                    <Mail className="w-4 h-4 text-[#131314]" />
                    <span>GET IN TOUCH</span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#131314] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </motion.a>

                  {/* LinkedIn CTA */}
                  <motion.a
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    href="https://www.linkedin.com/in/abhilasha-kumari-bbaa96202/?skipRedirect=true"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Connect on LinkedIn (opens in new tab)"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-3 sm:py-3.5 rounded-xl bg-[#1c1b1c] hover:bg-[#201f20] text-[#e5e2e3] hover:text-[#e9c176] font-label text-[10px] tracking-[0.16em] font-semibold border border-[#c5a059]/35 hover:border-[#c5a059] shadow-md transition-all min-h-[46px] group cursor-pointer"
                  >
                    <Linkedin className="w-4 h-4 text-[#e9c176]" />
                    <span>LINKEDIN</span>
                    <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </motion.a>

                  {/* GitHub CTA */}
                  <motion.a
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    href="https://github.com/abhilasha2101"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="View GitHub profile (opens in new tab)"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-3 sm:py-3.5 rounded-xl bg-[#1c1b1c] hover:bg-[#201f20] text-[#e5e2e3] hover:text-[#e9c176] font-label text-[10px] tracking-[0.16em] font-semibold border border-[#c5a059]/35 hover:border-[#c5a059] shadow-md transition-all min-h-[46px] group cursor-pointer"
                  >
                    <Github className="w-4 h-4 text-[#e9c176]" />
                    <span>GITHUB</span>
                    <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </motion.a>
                </div>

                <span className="mt-3 font-label text-[8px] uppercase tracking-[0.22em] text-[#9a8f80] font-medium">
                  EMAIL • LINKEDIN • GITHUB
                </span>
              </div>

              {/* Card Footer Bar */}
              <footer className="relative z-10 mt-5 sm:mt-6 pt-2 flex items-end justify-between w-full border-t border-[#c5a059]/20">
                <div className="flex flex-col items-center rotate-180 select-none text-[#e9c176]">
                  <span className="font-headline text-2xl sm:text-3xl leading-none font-bold">A</span>
                  <span className="text-xl sm:text-2xl leading-none mt-0.5 select-none">♠</span>
                  <span className="font-label text-[7px] sm:text-[8px] tracking-[0.24em] text-[#9a8f80] mt-1 uppercase font-semibold">
                    CONTACT
                  </span>
                </div>

                <div className="flex flex-col items-center text-center px-2">
                  <div className="w-12 sm:w-14 h-px bg-gradient-to-r from-transparent via-[#c5a059] to-transparent mb-1 opacity-60" />
                  <p className="font-label text-[8px] uppercase tracking-[0.22em] text-[#d1c5b4] font-medium">
                    PORTFOLIO 2025 • ABHILASHA KUMARI
                  </p>
                  <span className="font-body text-[10px] text-[#9a8f80] mt-0.5">
                    Software Engineer • B.Tech IT
                  </span>
                </div>

                <div className="flex flex-col items-center rotate-180 select-none text-[#e9c176]">
                  <span className="font-headline text-2xl sm:text-3xl leading-none font-bold">A</span>
                  <span className="text-xl sm:text-2xl leading-none mt-0.5 select-none">♠</span>
                  <span className="font-label text-[7px] sm:text-[8px] tracking-[0.24em] text-[#9a8f80] mt-1 uppercase font-semibold">
                    SPADES
                  </span>
                </div>
              </footer>
            </div>
          </article>
        </motion.div>
      </div>
    </section>
  );
};
