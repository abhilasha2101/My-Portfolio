"use client";

import React, { useState, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { OpeningFlourish } from "@/components/OpeningFlourish";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { SkillsSection } from "@/components/SkillsSection";
import { AchievementsSection } from "@/components/AchievementsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  const [showFlourish, setShowFlourish] = useState(true);
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Theme preference
    const savedTheme = (localStorage.getItem("abhilasha_deck_theme") as "dark" | "light") || "dark";
    setTheme(savedTheme);
    if (savedTheme === "light") {
      document.documentElement.classList.add("light-theme");
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light-theme");
    }

    // Check if opening flourish has been seen in current session
    const seenFlourish = sessionStorage.getItem("hasSeenFlourish");
    if (seenFlourish === "true") {
      setShowFlourish(false);
    }
  }, []);

  const handleFlourishComplete = () => {
    setShowFlourish(false);
    sessionStorage.setItem("hasSeenFlourish", "true");
  };

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    localStorage.setItem("abhilasha_deck_theme", nextTheme);
    if (nextTheme === "light") {
      document.documentElement.classList.add("light-theme");
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light-theme");
    }
  };

  return (
    <div className="min-h-screen bg-background text-on-surface flex flex-col justify-between selection:bg-[#c5a059] selection:text-[#131314]">
      {/* Opening Flourish Animation */}
      {mounted && showFlourish && <OpeningFlourish onComplete={handleFlourishComplete} />}

      {/* Persistent Navigation */}
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      {/* Main Single-Page Deck Journey */}
      <main className="w-full flex-1 flex flex-col">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <AchievementsSection />
        <ContactSection />
      </main>

      {/* Archival Colophon Footer */}
      <Footer />
    </div>
  );
}
