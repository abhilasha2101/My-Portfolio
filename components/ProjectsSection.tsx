"use client";

import React, { useState, useRef } from "react";
import { MAIN_PROJECTS, MORE_PROJECTS, Project } from "@/data/deckData";
import {
  ExternalLink,
  Github,
  Eye,
  X,
  Play,
  Pause,
  Volume2,
  VolumeX,
  ChevronDown,
  ChevronUp,
  Maximize2,
  RefreshCw,
} from "lucide-react";
import { motion, AnimatePresence, useInView } from "framer-motion";

export const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showMore, setShowMore] = useState(false);
  const [flourishKey, setFlourishKey] = useState(0);
  const [videoPlaying, setVideoPlaying] = useState<Record<string, boolean>>({
    aakar: true,
  });
  const [videoMuted, setVideoMuted] = useState<Record<string, boolean>>({
    aakar: true,
  });
  const videoRefs = useRef<Record<string, HTMLVideoElement | null>>({});
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: false, margin: "-80px" });

  const handleOpenDrawer = (project: Project) => {
    setSelectedProject(project);
  };

  const handleCloseDrawer = () => {
    setSelectedProject(null);
  };

  const reFlourish = () => {
    setFlourishKey((prev) => prev + 1);
  };

  const toggleVideoPlay = (id: string, e?: React.MouseEvent) => {
    e?.stopPropagation();
    const vid = videoRefs.current[id];
    if (!vid) return;

    if (vid.paused) {
      vid.play();
      setVideoPlaying((prev) => ({ ...prev, [id]: true }));
    } else {
      vid.pause();
      setVideoPlaying((prev) => ({ ...prev, [id]: false }));
    }
  };

  const toggleVideoMute = (id: string, e?: React.MouseEvent) => {
    e?.stopPropagation();
    const vid = videoRefs.current[id];
    if (!vid) return;

    vid.muted = !vid.muted;
    setVideoMuted((prev) => ({ ...prev, [id]: vid.muted }));
  };

  // Keyboard accessibility: Escape to close drawer
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleCloseDrawer();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const renderProjectCard = (project: Project, index: number, isArchived: boolean = false) => {
    const isAlternate = index % 2 === 1;

    // Card flourish deal motion:
    // Project 0 appears first.
    // Projects 1 and 2 start tucked under Project 0 and cascade deal down!
    const initialProjectState = {
      opacity: index === 0 ? 1 : 0,
      y: index === 0 ? 0 : -50,
      scale: index === 0 ? 1 : 0.92,
    };

    const flourishedProjectState = {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 65,
        damping: 15,
        delay: isArchived ? 0.1 : 0.2 + index * 0.22,
      },
    };

    return (
      <motion.article
        key={project.id}
        initial={initialProjectState}
        animate={isInView ? flourishedProjectState : initialProjectState}
        whileHover={{ y: -5 }}
        className="w-full rounded-2xl bg-[#0e0e0f] p-2.5 sm:p-3 border border-[#c5a059]/35 shadow-[0_20px_50px_rgba(0,0,0,0.85)] hover:border-[#c5a059]/80 transition-colors duration-500 group linen-texture relative overflow-hidden"
      >
        {/* Subtle inner gold rim */}
        <div className="pointer-events-none absolute inset-1.5 rounded-xl border border-[#c5a059]/15" />

        <div className="w-full bg-[#141a20]/90 rounded-xl p-4 sm:p-7 sm:py-8 border border-[#9a8f80]/15 relative overflow-hidden">
          {/* Top Bar Header with Card Pip Index */}
          <div className="flex items-center justify-between gap-4 pb-3.5 sm:pb-4 mb-4 sm:mb-6 border-b border-[#c5a059]/20">
            <div className="flex items-center gap-3">
              <div className="flex flex-col items-center justify-center w-8 sm:w-9 h-10 sm:h-11 bg-[#0e0e0f] rounded border border-[#c5a059]/40 shadow-md">
                <span
                  className={`font-headline text-base sm:text-lg font-bold leading-none ${
                    project.isRed ? "text-[#ff9da2]" : "text-[#e9c176]"
                  }`}
                >
                  {project.rank}
                </span>
                <span
                  className={`text-xs sm:text-sm leading-none mt-0.5 ${
                    project.isRed ? "text-[#ff9da2]" : "text-[#e9c176]"
                  }`}
                >
                  {project.suit}
                </span>
              </div>

              <div className="flex flex-col text-left">
                <div className="flex items-center gap-2">
                  <span className="font-label text-[8px] sm:text-[9px] text-[#e9c176] tracking-[0.22em] uppercase font-bold">
                    {project.category}
                  </span>
                  {isArchived && (
                    <span className="px-1.5 py-0.5 rounded bg-[#201f20] text-[#9a8f80] font-label text-[7px] tracking-wider uppercase border border-[#9a8f80]/30">
                      ARCHIVED
                    </span>
                  )}
                </div>
                <span className="font-label text-[9px] sm:text-[10px] text-[#d1c5b4] uppercase tracking-wide">
                  {project.subtitle}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 bg-[#0e0e0f] border border-[#c5a059]/25 rounded-full">
                <span
                  className={`w-1.5 h-1.5 rounded-full ${
                    project.statusText?.includes("LIVE")
                      ? "bg-emerald-400 animate-pulse"
                      : "bg-[#e9c176]"
                  }`}
                />
                <span className="font-label text-[8px] uppercase tracking-wider text-[#ccc6b9]">
                  {project.statusText}
                </span>
              </div>

              <button
                onClick={() => handleOpenDrawer(project)}
                aria-label={`Inspect ${project.name} technical details`}
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-[#201f20] hover:bg-[#2a2a2b] text-[#e5e2e3] hover:text-[#e9c176] border border-[#c5a059]/30 text-[8px] sm:text-[9px] font-label uppercase tracking-wider transition-all cursor-pointer shadow-sm hover:shadow-md min-h-[34px]"
              >
                <Eye className="w-3 h-3 text-[#e9c176]" />
                <span className="hidden sm:inline">INSPECT</span>
              </button>
            </div>
          </div>

          {/* Main Card Content: Stacked Responsive 2-Column Showcase */}
          <div
            className={`grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 lg:gap-8 items-center ${
              isAlternate ? "lg:grid-flow-dense" : ""
            }`}
          >
            {/* Visual Media Window (Image or Video) */}
            <div
              className={`lg:col-span-7 w-full rounded-xl bg-[#0e0e0f] relative overflow-hidden border border-[#c5a059]/25 group-hover:border-[#c5a059]/60 shadow-xl transition-all ${
                isAlternate ? "lg:col-start-6" : ""
              }`}
            >
              {project.mediaType === "video" && project.videoUrl ? (
                /* Interactive Video Player */
                <div className="relative w-full aspect-video bg-black flex items-center justify-center group/video">
                  <video
                    ref={(el) => {
                      videoRefs.current[project.id] = el;
                    }}
                    src={project.videoUrl}
                    className="w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                    controls={false}
                  />

                  {/* Video Overlays & Controls */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e0f]/80 via-transparent to-black/30 pointer-events-none" />

                  {/* Top Badge */}
                  <div className="absolute top-2.5 sm:top-3 left-2.5 sm:left-3 flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#0e0e0f]/80 backdrop-blur-md border border-[#c5a059]/30">
                    <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping" />
                    <span className="font-label text-[7px] sm:text-[8px] uppercase tracking-widest text-[#e9c176] font-bold">
                      VIDEO DEMO WALKTHROUGH
                    </span>
                  </div>

                  {/* Control buttons */}
                  <div className="absolute bottom-2.5 sm:bottom-3 right-2.5 sm:right-3 flex items-center gap-2">
                    <button
                      onClick={(e) => toggleVideoPlay(project.id, e)}
                      aria-label={videoPlaying[project.id] ? "Pause video" : "Play video"}
                      className="w-9 h-9 sm:w-8 sm:h-8 rounded-full bg-[#1c1b1c]/90 hover:bg-[#c5a059] text-[#e9c176] hover:text-[#131314] flex items-center justify-center border border-[#c5a059]/40 shadow-lg transition-all cursor-pointer"
                    >
                      {videoPlaying[project.id] ? (
                        <Pause className="w-4 h-4 sm:w-3.5 sm:h-3.5" />
                      ) : (
                        <Play className="w-4 h-4 sm:w-3.5 sm:h-3.5 fill-current ml-0.5" />
                      )}
                    </button>

                    <button
                      onClick={(e) => toggleVideoMute(project.id, e)}
                      aria-label={videoMuted[project.id] ? "Unmute audio" : "Mute audio"}
                      className="w-9 h-9 sm:w-8 sm:h-8 rounded-full bg-[#1c1b1c]/90 hover:bg-[#c5a059] text-[#e9c176] hover:text-[#131314] flex items-center justify-center border border-[#c5a059]/40 shadow-lg transition-all cursor-pointer"
                    >
                      {videoMuted[project.id] ? (
                        <VolumeX className="w-4 h-4 sm:w-3.5 sm:h-3.5" />
                      ) : (
                        <Volume2 className="w-4 h-4 sm:w-3.5 sm:h-3.5" />
                      )}
                    </button>
                  </div>
                </div>
              ) : (
                /* Static High-Res Visual Screenshot */
                <div
                  className="relative w-full aspect-video bg-[#0e0e0f] overflow-hidden cursor-pointer"
                  onClick={() => handleOpenDrawer(project)}
                >
                  <img
                    src={project.imageUrl || "/images/vinyasa.png"}
                    alt={`${project.name} interface showcase`}
                    className="w-full h-full object-cover object-top filter brightness-95 contrast-105 group-hover:scale-[1.03] group-hover:brightness-100 transition-all duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e0f]/80 via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none" />

                  {/* Corner Watermark */}
                  <div className="absolute top-2.5 sm:top-3 left-2.5 sm:left-3 flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#0e0e0f]/80 backdrop-blur-md border border-[#c5a059]/30 pointer-events-none">
                    <span className="font-headline text-xs text-[#e9c176] font-bold">
                      {project.rank}{project.suit}
                    </span>
                    <span className="font-label text-[7px] sm:text-[8px] uppercase tracking-widest text-[#d1c5b4]">
                      PLATFORM CAPTURE
                    </span>
                  </div>

                  <div className="absolute bottom-2.5 sm:bottom-3 right-2.5 sm:right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#0e0e0f]/85 border border-[#c5a059]/30 text-[7px] sm:text-[8px] font-label uppercase tracking-widest text-[#e9c176] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span>CLICK TO INSPECT</span>
                    <Maximize2 className="w-2.5 h-2.5" />
                  </div>
                </div>
              )}
            </div>

            {/* Editorial Information Column */}
            <div
              className={`lg:col-span-5 flex flex-col justify-center text-left ${
                isAlternate ? "lg:col-start-1" : ""
              }`}
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c5a059]" />
                <span className="font-label text-[8px] sm:text-[9px] uppercase tracking-[0.24em] text-[#c5a059] font-semibold">
                  {project.cardIndex}
                </span>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl text-[#e5e2e3] font-normal tracking-tight mb-2 sm:mb-3">
                {project.name}
              </h3>

              <p className="font-headline italic text-xs sm:text-base text-[#d1c5b4] leading-relaxed mb-3 sm:mb-4">
                {project.description}
              </p>

              <p className="font-body text-xs sm:text-sm text-[#9a8f80] leading-relaxed mb-4 sm:mb-5 line-clamp-3">
                {project.detailedDescription}
              </p>

              {/* Technologies Pills */}
              <div className="flex flex-wrap items-center gap-1.5 mb-5 sm:mb-6">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-0.5 rounded bg-[#1c1b1c] text-[#e5e2e3] font-label text-[8px] sm:text-[9px] tracking-wider border border-[#c5a059]/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-2.5 pt-1">
                {project.liveUrl && (
                  <motion.a
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open ${project.name} live application (opens in new tab)`}
                    className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 bg-gradient-to-r from-[#e9c176] via-[#c5a059] to-[#d4af37] text-[#131314] font-label text-[9px] uppercase tracking-wider rounded-xl font-bold shadow-[0_4px_16px_rgba(197,160,89,0.3)] hover:shadow-[0_6px_22px_rgba(197,160,89,0.45)] transition-all min-h-[42px]"
                  >
                    <span>VISIT APPLICATION</span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#131314]" />
                  </motion.a>
                )}

                {project.githubUrl && (
                  <motion.a
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.name} source code on GitHub (opens in new tab)`}
                    className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 bg-[#1c1b1c] hover:bg-[#201f20] text-[#e5e2e3] hover:text-[#e9c176] rounded-xl font-label text-[9px] uppercase tracking-wider transition-all border border-[#c5a059]/30 hover:border-[#c5a059] shadow-sm min-h-[42px]"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>SOURCE CODE</span>
                  </motion.a>
                )}

                {!project.liveUrl && !project.githubUrl && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-2 bg-[#201f20] text-[#ff9da2] rounded-xl font-label text-[8px] uppercase tracking-wider border border-[#ff9da2]/30 min-h-[42px]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#ff9da2] animate-pulse" />
                    <span>IN DEVELOPMENT • PRESENTED IN DELHI</span>
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </motion.article>
    );
  };

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="w-full py-16 sm:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Background Ambience */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-gradient-to-b from-[#c5a059]/10 via-[#c5a059]/5 to-transparent blur-3xl pointer-events-none -z-10" />

      {/* Intro Header */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto flex flex-col items-center text-center mb-10 sm:mb-14"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#1c1b1c] rounded-full border border-[#c5a059]/30 shadow-md mb-3 sm:mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-[#e9c176] animate-pulse" />
          <span className="font-headline text-xs text-[#e9c176] select-none font-bold">
            CARD № 02
          </span>
          <span className="text-[#9a8f80] text-xs">•</span>
          <span className="font-label text-[8px] sm:text-[9px] uppercase tracking-[0.22em] text-[#d1c5b4] font-medium">
            CASCADE DEAL • ONE AFTER ANOTHER
          </span>
        </div>

        <span className="font-label text-[10px] uppercase tracking-[0.28em] text-[#c5a059] font-medium mb-1">
          Hand-Picked Applications &amp; Prototypes
        </span>

        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-[#e5e2e3] tracking-tight font-normal">
          FEATURED PROJECTS
        </h2>

        <p className="font-headline italic text-base sm:text-xl text-[#d1c5b4] font-light mt-2 max-w-xl px-2">
          “Things I&apos;ve built, broken, rebuilt, and learned from.”
        </p>

        {/* Flourish Replay Button */}
        <div className="flex items-center gap-2 mt-4">
          <button
            onClick={reFlourish}
            aria-label="Replay cascade project deal flourish"
            className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#1c1b1c] hover:bg-[#2a2a2b] text-[#e9c176] font-label text-[8px] sm:text-[9px] uppercase tracking-wider rounded-full border border-[#c5a059]/30 shadow-sm transition-all cursor-pointer"
          >
            <RefreshCw className="w-3 h-3 text-[#e9c176]" />
            <span>RE-DEAL FLOURISH</span>
          </button>
          <span className="font-label text-[8px] sm:text-[9px] uppercase tracking-widest text-[#9a8f80]">
            • 3 Core Highlights
          </span>
        </div>
      </motion.div>

      {/* Main 3 Projects: Presented One After Another with Cascade Flourish Deal Animation */}
      <div key={flourishKey} className="max-w-5xl mx-auto flex flex-col gap-8 sm:gap-14">
        {MAIN_PROJECTS.map((project, idx) => renderProjectCard(project, idx, false))}

        {/* Smoothly Expandable "More Projects" Section */}
        <AnimatePresence>
          {showMore && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col gap-8 sm:gap-14 overflow-hidden pt-4"
            >
              <div className="flex items-center gap-3 my-2">
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#c5a059]/40 to-transparent" />
                <span className="font-label text-[8px] sm:text-[9px] uppercase tracking-[0.25em] text-[#c5a059]">
                  ARCHIVED &amp; EXPERIMENTAL REPERTOIRE
                </span>
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#c5a059]/40 to-transparent" />
              </div>

              {MORE_PROJECTS.map((project, idx) =>
                renderProjectCard(project, MAIN_PROJECTS.length + idx, true)
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* View More / Show Less Button */}
        <div className="flex flex-col items-center justify-center pt-4 sm:pt-6 pb-2">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setShowMore(!showMore)}
            aria-expanded={showMore}
            aria-label={showMore ? "Collapse archived projects" : "View more projects including TwoDo and AI Agent Workflow Builder"}
            className="group inline-flex items-center gap-2 px-5 sm:px-6 py-3 rounded-full bg-[#1c1b1c] hover:bg-[#201f20] text-[#e5e2e3] hover:text-[#e9c176] font-label text-[9px] sm:text-[10px] uppercase tracking-[0.18em] sm:tracking-[0.2em] font-semibold border border-[#c5a059]/40 hover:border-[#c5a059] shadow-lg transition-all cursor-pointer min-h-[44px]"
          >
            <span className="text-[#e9c176] font-headline text-sm select-none">♠</span>
            <span>
              {showMore
                ? "HIDE ARCHIVED PROJECTS"
                : `VIEW MORE PROJECTS [${MORE_PROJECTS.length} MORE: TWODO & WORKFLOW BUILDER]`}
            </span>
            {showMore ? (
              <ChevronUp className="w-3.5 h-3.5 text-[#e9c176] group-hover:-translate-y-0.5 transition-transform" />
            ) : (
              <ChevronDown className="w-3.5 h-3.5 text-[#e9c176] group-hover:translate-y-0.5 transition-transform" />
            )}
          </motion.button>
          <span className="mt-2 text-[8px] font-label uppercase tracking-widest text-[#9a8f80]">
            {showMore
              ? "SHOWING ALL 5 PROJECTS IN THE DECK"
              : "3 CORE HIGHLIGHTS SHOWN • CLICK TO REVEAL FULL HAND"}
          </span>
        </div>
      </div>

      {/* SPECIMEN EXAMINATION MODAL OVERLAY */}
      {selectedProject && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="drawer-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-[#0e0e0f]/85 backdrop-blur-md animate-fadeIn"
          onClick={handleCloseDrawer}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-3xl bg-[#1c1b1c] rounded-2xl p-2.5 sm:p-3 shadow-2xl border border-[#c5a059]/50 relative text-left max-h-[90vh] overflow-y-auto linen-texture"
          >
            <div className="w-full bg-[#131314] rounded-xl p-5 sm:p-8 border border-[#c5a059]/30 relative overflow-hidden">
              {/* Header Bar */}
              <div className="flex items-start justify-between gap-4 pb-4 mb-5 border-b border-[#c5a059]/20">
                <div className="flex items-center gap-3">
                  <div className="w-10 sm:w-11 h-11 sm:h-12 rounded bg-[#201f20] border border-[#c5a059]/40 flex flex-col items-center justify-center text-lg shadow-sm">
                    <span
                      className={`font-headline text-sm font-bold leading-none ${
                        selectedProject.isRed ? "text-[#ff9da2]" : "text-[#e9c176]"
                      }`}
                    >
                      {selectedProject.rank}
                    </span>
                    <span
                      className={`text-xs sm:text-sm leading-none mt-0.5 ${
                        selectedProject.isRed ? "text-[#ff9da2]" : "text-[#e9c176]"
                      }`}
                    >
                      {selectedProject.suit}
                    </span>
                  </div>
                  <div>
                    <span className="font-label text-[8px] sm:text-[9px] text-[#c5a059] uppercase tracking-widest block">
                      PROJECT DETAILS • {selectedProject.category}
                    </span>
                    <h3 id="drawer-title" className="font-display text-xl sm:text-3xl text-[#e5e2e3]">
                      {selectedProject.name}
                    </h3>
                  </div>
                </div>

                <button
                  onClick={handleCloseDrawer}
                  aria-label="Close details modal"
                  className="px-3 py-1.5 bg-[#201f20] text-[#e5e2e3] hover:text-[#e9c176] rounded-lg font-label text-[8px] sm:text-[9px] uppercase tracking-wider flex items-center gap-1 border border-[#c5a059]/30 cursor-pointer min-h-[34px]"
                >
                  <span>CLOSE</span>
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Media Preview inside Modal */}
              <div className="mb-5 sm:mb-6 rounded-xl overflow-hidden border border-[#c5a059]/30 bg-[#0e0e0f]">
                {selectedProject.mediaType === "video" && selectedProject.videoUrl ? (
                  <video
                    src={selectedProject.videoUrl}
                    className="w-full aspect-video object-cover"
                    controls
                    autoPlay
                    loop
                  />
                ) : (
                  <img
                    src={selectedProject.imageUrl || "/images/vinyasa.png"}
                    alt={`${selectedProject.name} large preview`}
                    className="w-full max-h-[360px] object-cover object-top"
                  />
                )}
              </div>

              {/* Content */}
              <div className="space-y-4">
                <div>
                  <h4 className="font-label text-[9px] uppercase tracking-widest text-[#e9c176] mb-1">
                    PROJECT CATEGORY &amp; SCOPE
                  </h4>
                  <p className="font-headline italic text-sm sm:text-base text-[#ccc6b9]">
                    {selectedProject.subtitle}
                  </p>
                </div>

                <div>
                  <h4 className="font-label text-[9px] uppercase tracking-widest text-[#e9c176] mb-1">
                    PROJECT OVERVIEW &amp; ARCHITECTURE
                  </h4>
                  <p className="font-body text-xs sm:text-sm text-[#d1c5b4] leading-relaxed">
                    {selectedProject.detailedDescription}
                  </p>
                </div>

                <div>
                  <h4 className="font-label text-[9px] uppercase tracking-widest text-[#e9c176] mb-1">
                    TECHNOLOGIES USED
                  </h4>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-1">
                    {selectedProject.technologies.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 bg-[#1c1b1c] rounded text-[11px] sm:text-xs font-label text-[#e5e2e3] border border-[#c5a059]/20"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Available Actions */}
                <div className="pt-4 sm:pt-5 border-t border-[#c5a059]/20 flex flex-wrap items-center justify-between gap-3">
                  <div className="text-[9px] font-label text-[#9a8f80]">
                    <span>STATUS: {selectedProject.statusText}</span>
                  </div>

                  <div className="flex items-center gap-2.5 sm:gap-3">
                    {selectedProject.liveUrl && (
                      <a
                        href={selectedProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-4 py-2 bg-gradient-to-r from-[#e9c176] via-[#c5a059] to-[#d4af37] text-[#131314] font-label text-[9px] sm:text-[10px] uppercase tracking-wider font-bold rounded-xl shadow-md hover:-translate-y-0.5 transition-all min-h-[40px]"
                      >
                        <span>VIEW PROJECT</span>
                        <ExternalLink className="w-3.5 h-3.5 text-[#131314]" />
                      </a>
                    )}

                    {selectedProject.githubUrl && (
                      <a
                        href={selectedProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-4 py-2 bg-[#201f20] hover:bg-[#2a2a2b] text-[#e5e2e3] font-label text-[9px] sm:text-[10px] uppercase tracking-wider rounded-xl border border-[#c5a059]/30 transition-all min-h-[40px]"
                      >
                        <Github className="w-3.5 h-3.5 text-[#e5e2e3]" />
                        <span>SOURCE CODE</span>
                      </a>
                    )}

                    {!selectedProject.liveUrl && !selectedProject.githubUrl && (
                      <span className="text-xs font-label text-[#ff9da2]">
                        (In Development — Civic Innovation Platform)
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
