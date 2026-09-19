"use client";

import React from "react";
import { Code2 } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#0e0e0f] border-t border-[#c5a059]/20 py-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="font-label text-[9px] uppercase tracking-[0.24em] text-[#e9c176]">
            ABHILASHA KUMARI
          </span>
          <span className="text-[#c5a059]/40 text-xs">♦</span>
          <span className="font-label text-[9px] uppercase tracking-[0.24em] text-[#9a8f80]">
            SOFTWARE ENGINEER
          </span>
        </div>

        <div className="font-label text-[9px] uppercase tracking-[0.22em] text-[#ccc6b9]">
          THE DECK • PERSONAL PORTFOLIO
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5 text-[#e9c176]/90 px-2.5 py-1 rounded border border-[#c5a059]/25 bg-[#1c1b1c] text-[9px] font-label uppercase tracking-wider">
            <Code2 className="w-3 h-3 text-[#e9c176]" />
            <span>Next.js • TypeScript • Tailwind</span>
          </div>
          <span className="font-label text-[9px] text-[#9a8f80] tracking-[0.24em]">
            2025
          </span>
        </div>
      </div>
    </footer>
  );
};
