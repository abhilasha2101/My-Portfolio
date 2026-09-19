"use client";

import React, { useState, useEffect } from "react";
import { NAV_ITEMS } from "@/data/deckData";
import { Menu, X, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface NavbarProps {
  theme: "dark" | "light";
  toggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ theme, toggleTheme }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = NAV_ITEMS.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 150;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    setMobileMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#131314]/90 dark:bg-[#131314]/90 light-theme:bg-[#f7f4ee]/90 backdrop-blur-md border-b border-[#c5a059]/20 shadow-lg"
          : "bg-transparent border-b border-transparent"
      }`}
      style={{
        backgroundColor: scrolled
          ? theme === "light"
            ? "rgba(247, 244, 238, 0.92)"
            : "rgba(19, 19, 20, 0.92)"
          : "transparent",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
        {/* Left Branding */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          <span className="text-[#c5a059] text-xl font-bold select-none drop-shadow-[0_0_8px_rgba(197,160,89,0.5)]">
            ♠
          </span>
          <div className="flex flex-col">
            <span className="font-label text-[10px] sm:text-[11px] uppercase tracking-[0.22em] sm:tracking-[0.24em] font-semibold text-[#e5e2e3] light-theme:text-[#141416]">
              ABHILASHA KUMARI
            </span>
            <span className="font-headline italic text-xs text-[#c5a059] hidden sm:inline -mt-0.5">
              Software Engineer Portfolio
            </span>
          </div>
          <span className="hidden md:inline text-[#c5a059]/30 text-xs mx-1">◆</span>
          <span className="hidden lg:inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded border border-[#c5a059]/25 bg-[#0e0e0f]/60 backdrop-blur-sm text-[9px] font-label uppercase tracking-[0.2em] text-[#c5a059]">
            <span className="font-bold">♠ ♥ ♦ ♣</span> THE DECK
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-4 lg:gap-6">
          <nav className="flex items-center gap-1 bg-[#1c1b1c]/80 light-theme:bg-[#ede7db] px-2 py-1 rounded-full border border-[#c5a059]/20 backdrop-blur-sm">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className={`px-3 py-1.5 rounded-full font-label text-[10px] uppercase tracking-[0.16em] transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-[#c5a059] text-[#131314] font-bold shadow-sm"
                      : "text-[#d1c5b4] light-theme:text-[#555149] hover:text-[#e9c176] hover:bg-[#2a2a2b]/60 light-theme:hover:bg-[#dfd6c4]"
                  }`}
                >
                  <span className="opacity-60 mr-1 text-[8px]">[{item.code}]</span>
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Theme Toggle Button */}
          <motion.button
            whileTap={{ scale: 0.92 }}
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="px-3 py-1.5 rounded-full border border-[#c5a059]/30 hover:border-[#c5a059] bg-[#201f20]/80 light-theme:bg-[#ede7dc] flex items-center gap-1.5 transition-all text-xs font-label uppercase tracking-wider text-[#e5e2e3] light-theme:text-[#141416] cursor-pointer shadow-sm hover:shadow-md"
          >
            {theme === "dark" ? (
              <>
                <Sun className="w-3.5 h-3.5 text-[#e9c176]" />
                <span className="text-[9px] font-semibold text-[#e9c176]">LIGHT</span>
              </>
            ) : (
              <>
                <Moon className="w-3.5 h-3.5 text-[#141416]" />
                <span className="text-[9px] font-semibold text-[#141416]">DARK</span>
              </>
            )}
          </motion.button>

          {/* Monogram Seal */}
          <div className="w-8 h-8 rounded-full border border-[#c5a059]/50 bg-gradient-to-tr from-[#2a2a2b] to-[#0e0e0f] flex items-center justify-center font-bold text-[#e9c176] text-xs shadow-[0_0_8px_rgba(197,160,89,0.3)]">
            AK
          </div>
        </div>

        {/* Mobile controls: Touch-friendly targets */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="w-10 h-10 rounded-full border border-[#c5a059]/30 bg-[#201f20]/90 text-[#e9c176] flex items-center justify-center cursor-pointer shadow-sm"
          >
            {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
            className="w-10 h-10 rounded-xl border border-[#c5a059]/35 bg-[#201f20] text-[#e5e2e3] flex items-center justify-center cursor-pointer shadow-sm"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-[#e9c176]" /> : <Menu className="w-5 h-5 text-[#e9c176]" />}
          </button>
        </div>
      </div>

      {/* Mobile Animated Drawer with Framer Motion */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden bg-[#131314]/98 light-theme:bg-[#f7f4ee]/98 border-b border-[#c5a059]/30 px-5 py-4 backdrop-blur-2xl overflow-hidden shadow-2xl"
          >
            <div className="flex flex-col gap-1.5">
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <button
                    key={item.label}
                    onClick={() => scrollToSection(item.href)}
                    className={`text-left py-3 px-3.5 rounded-lg font-label text-xs uppercase tracking-widest flex items-center justify-between transition-all cursor-pointer min-h-[44px] ${
                      isActive
                        ? "bg-[#c5a059] text-[#131314] font-bold shadow-md"
                        : "text-[#e5e2e3] light-theme:text-[#141416] hover:bg-[#c5a059]/15"
                    }`}
                  >
                    <span>{item.label}</span>
                    <span className={`text-[10px] ${isActive ? "text-[#131314]" : "text-[#c5a059]"}`}>
                      № {item.code}
                    </span>
                  </button>
                );
              })}
              <div className="pt-3 mt-1 border-t border-[#c5a059]/20 flex items-center justify-between text-[10px] font-label uppercase tracking-widest text-[#9a8f80]">
                <span>SOFTWARE DEVELOPER</span>
                <span className="text-[#c5a059] font-bold">♠ ♥ ♦ ♣</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
