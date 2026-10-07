"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppWidget from "@/components/ui/WhatsAppWidget";
import AdmissionModal from "@/components/ui/AdmissionModal";
import InnerPageHero from "@/components/ui/InnerPageHero";
import {
  TrendingUp,
  Award,
  ChevronRight,
  Maximize2,
  X,
  GraduationCap,
  Sparkles,
  Trophy,
  CheckCircle2,
  BarChart3,
  Calendar,
  Download,
  ZoomIn,
  ZoomOut,
  ExternalLink,
  RotateCcw,
  Move,
} from "lucide-react";

interface ResultYear {
  id: string;
  yearLabel: string;
  academicSession: string;
  image: string;
  pdfUrl?: string;
  title: string;
  highlights: string[];
}

const RESULT_YEARS: ResultYear[] = [
  {
    id: "2025-26",
    yearLabel: "2025 - 2026",
    academicSession: "CBSE Class X Board Examinations 2025-26",
    image: "/images/results/kautilya-cbse-result-2025-26.png",
    pdfUrl: "/documents/results/kautilya-cbse-10th-toppers-2025-26.pdf",
    title: "CBSE Class X Outstanding Performance 2025-26",
    highlights: [
      "100% Pass Percentage maintained unbroken for 21 consecutive years",
      "School Topper Namyata SM Setty securing 97.2% aggregate",
      "Star scorers: Yashvi Thakur (96.8%), Ruthvikha P (96.8%), Apoorva M (96.2%), Sameeksha Raghavan (96.2%)",
      "36+ Students securing outstanding First Class with Distinction (84% to 97.2%)",
    ],
  },
  {
    id: "2024-25",
    yearLabel: "2024 - 2025",
    academicSession: "CBSE Class X Board Examinations 2024-25",
    image: "/images/results/kautilya-cbse-result-2024-25.jpeg",
    title: "CBSE Class X Outstanding Performance 2024-25",
    highlights: [
      "100% Pass Percentage with stellar district distinctions",
      "School Topper Advaith Subramanian securing 98.0% aggregate",
      "Tanvi Chetan Patel securing 96.2% and Lakshmi Ravi securing 95.6%",
      "Over 75% of students securing First Class with Distinction",
    ],
  },
  {
    id: "2023-24",
    yearLabel: "2023 - 2024",
    academicSession: "CBSE Class X Annual Board Results 2023-24",
    image: "/images/results/kautilya-cbse-result-2023-24.jpeg",
    title: "CBSE Class X Merit & Distinction Roster 2023-24",
    highlights: [
      "Flawless 100% result record unbroken across all batches",
      "School Topper Prachet Jaishankar securing 96.40%",
      "Tadikonda Usha Shraddha securing 96.20% and Shreyas G Vashis securing 95.60%",
      "Zero failures or compartments in CBSE assessments",
    ],
  },
  {
    id: "2022-23",
    yearLabel: "2022 - 2023",
    academicSession: "CBSE Class X Board Examinations 2022-23",
    image: "/images/results/kautilya-cbse-result-2022-23.jpeg",
    title: "CBSE Class X Merit & Distinction Roster 2022-23",
    highlights: [
      "100% Result in CBSE Class X Board Examinations",
      "School Toppers: Siri Bhimarao Patil (96.80%) & Samrudhi M S (96.00%)",
      "Top scorers: Aishwarya S (95.40%), Pavan Jayaprakash Bharadwaj (94.40%)",
      "High distinction aggregates across all core subjects",
    ],
  },
  {
    id: "2021-22",
    yearLabel: "2021 - 2022",
    academicSession: "CBSE Class X Board Results 2021-22",
    image: "/images/results/kautilya-cbse-result-2021-22.webp",
    title: "CBSE Class X Board Examination Roster 2021-22",
    highlights: [
      "100% success rate under revised CBSE evaluation scheme",
      "Exemplary performance across all stream electives",
      "Commended by regional education directors for consistent excellence",
    ],
  },
  {
    id: "2020-21",
    yearLabel: "2020 - 2021",
    academicSession: "CBSE Class X Board Results 2020-21",
    image: "/images/results/kautilya-cbse-result-2020-21.webp",
    title: "CBSE Class X Examination Graph 2020-21",
    highlights: [
      "Consistent academic resilience during remote & blended learning",
      "Cent percent pass results achieved through focused educator support",
    ],
  },
  {
    id: "2019-20",
    yearLabel: "2019 - 2020",
    academicSession: "CBSE Class X Board Results 2019-20",
    image: "/images/results/kautilya-cbse-result-2019-20.webp",
    title: "CBSE Class X Examination Graph 2019-20",
    highlights: [
      "Continued tradition of 100% pass percentages in Mysuru district",
      "High grade point averages across all subject faculties",
    ],
  },
];

interface GraphItem {
  id: string;
  year: string;
  topScore: number;
  topper: string;
  distinctionLabel: string;
}

const GRAPH_DATA: GraphItem[] = [
  { id: "2025-26", year: "2025 - 2026", topScore: 97.2, topper: "Namyata SM Setty", distinctionLabel: "36+ Distinctions (100% Pass)" },
  { id: "2024-25", year: "2024 - 2025", topScore: 98.0, topper: "Advaith Subramanian", distinctionLabel: "75%+ Distinctions (100% Pass)" },
  { id: "2023-24", year: "2023 - 2024", topScore: 96.4, topper: "Prachet Jaishankar", distinctionLabel: "Zero Failures (100% Pass)" },
  { id: "2022-23", year: "2022 - 2023", topScore: 96.8, topper: "Siri Bhimarao Patil", distinctionLabel: "High Distinctions (100% Pass)" },
  { id: "2021-22", year: "2021 - 2022", topScore: 96.0, topper: "Exemplary Batch", distinctionLabel: "Revised Scheme (100% Pass)" },
  { id: "2020-21", year: "2020 - 2021", topScore: 95.8, topper: "Resilient Cohort", distinctionLabel: "Cent Percent (100% Pass)" },
  { id: "2019-20", year: "2019 - 2020", topScore: 96.2, topper: "District Merit", distinctionLabel: "District Honor (100% Pass)" },
];

export default function ResultGraphClientView() {
  const [isAdmissionModalOpen, setIsAdmissionModalOpen] = useState(false);
  const [selectedYearId, setSelectedYearId] = useState("2025-26");
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);

  const scrollContainerRef = React.useRef<HTMLDivElement>(null);
  const touchStartDistanceRef = React.useRef<number | null>(null);
  const initialZoomRef = React.useRef<number>(1);
  const lastTapTimeRef = React.useRef<number>(0);
  const isDraggingRef = React.useRef(false);
  const startDragPosRef = React.useRef({ x: 0, y: 0, scrollLeft: 0, scrollTop: 0 });

  const activeYear = RESULT_YEARS.find((y) => y.id === selectedYearId) || RESULT_YEARS[0];

  const openLightbox = () => {
    setZoomLevel(1);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setZoomLevel(1);
    setIsLightboxOpen(false);
  };

  const handleZoomIn = () => setZoomLevel((prev) => Math.min(Number((prev + 0.5).toFixed(1)), 3));
  const handleZoomOut = () => setZoomLevel((prev) => Math.max(Number((prev - 0.5).toFixed(1)), 1));
  const handleResetZoom = () => setZoomLevel(1);

  // Mobile pinch-to-zoom
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    if (e.touches.length === 2) {
      const dist = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );
      touchStartDistanceRef.current = dist;
      initialZoomRef.current = zoomLevel;
    }
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (e.touches.length === 2 && touchStartDistanceRef.current !== null) {
      const dist = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );
      const scale = dist / touchStartDistanceRef.current;
      const targetZoom = Math.min(Math.max(initialZoomRef.current * scale, 1), 3);
      setZoomLevel(Number(targetZoom.toFixed(2)));
    }
  };

  const handleTouchEnd = () => {
    touchStartDistanceRef.current = null;
  };

  // Double-tap or click zoom toggle
  const handleImageDoubleTapOrClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const now = Date.now();
    const timeSinceLastTap = now - lastTapTimeRef.current;
    if (timeSinceLastTap < 320 && timeSinceLastTap > 0) {
      e.preventDefault();
      setZoomLevel((prev) => (prev > 1.2 ? 1 : 2));
      lastTapTimeRef.current = 0;
    } else {
      lastTapTimeRef.current = now;
    }
  };

  // Desktop mouse dragging when zoomed
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (zoomLevel <= 1 || !scrollContainerRef.current) return;
    isDraggingRef.current = true;
    startDragPosRef.current = {
      x: e.clientX,
      y: e.clientY,
      scrollLeft: scrollContainerRef.current.scrollLeft,
      scrollTop: scrollContainerRef.current.scrollTop,
    };
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDraggingRef.current || !scrollContainerRef.current) return;
    e.preventDefault();
    const dx = e.clientX - startDragPosRef.current.x;
    const dy = e.clientY - startDragPosRef.current.y;
    scrollContainerRef.current.scrollLeft = startDragPosRef.current.scrollLeft - dx;
    scrollContainerRef.current.scrollTop = startDragPosRef.current.scrollTop - dy;
  };

  const handleMouseUp = () => {
    isDraggingRef.current = false;
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-800 selection:bg-[#FFD907] selection:text-[#001744] overflow-x-hidden w-full max-w-full">
      <Navbar onOpenAdmissionModal={() => setIsAdmissionModalOpen(true)} />

      <main className="flex-grow w-full max-w-full overflow-x-hidden">
        {/* HERO BANNER WITH AUTHENTIC BG & DYNAMIC WAVE */}
        <InnerPageHero
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Academics" },
            { label: "Result Graph" },
          ]}
          badge={{
            text: "Academic Record & Board Distinctions",
            icon: BarChart3,
          }}
          title="100% Results from 21 Years"
          subtitle="Year after year, Kautilya Vidyalaya maintains a stellar track record of unbroken 100% pass percentages, top state percentiles, and subject centums in CBSE Class X assessments for over 21 consecutive years."
          waveFillColor="#f8fafc"
        />

        {/* 4 STAT COUNTERS */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 sm:-mt-8 relative z-20 w-full max-w-full">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-2xl p-4 sm:p-6 shadow-xl border border-slate-100 text-center min-w-0"
            >
              <span className="text-2xl sm:text-4xl font-black text-[#001744]">100%</span>
              <p className="text-xs sm:text-sm font-bold text-slate-500 mt-1">Pass Percentage</p>
              <p className="text-[10px] sm:text-[11px] text-emerald-600 font-semibold mt-0.5 truncate">
                21 Consecutive Years
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-2xl p-4 sm:p-6 shadow-xl border border-slate-100 text-center min-w-0"
            >
              <span className="text-2xl sm:text-4xl font-black text-blue-600">85%+</span>
              <p className="text-xs sm:text-sm font-bold text-slate-500 mt-1">Distinction Rate</p>
              <p className="text-[10px] sm:text-[11px] text-slate-400 font-semibold mt-0.5 truncate">
                First Class Distinctions
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white rounded-2xl p-4 sm:p-6 shadow-xl border border-slate-100 text-center min-w-0"
            >
              <span className="text-2xl sm:text-4xl font-black text-amber-600">100/100</span>
              <p className="text-xs sm:text-sm font-bold text-slate-500 mt-1">Centum Scorers</p>
              <p className="text-[10px] sm:text-[11px] text-slate-400 font-semibold mt-0.5 truncate">
                Math, Science & Social
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white rounded-2xl p-4 sm:p-6 shadow-xl border border-slate-100 text-center min-w-0"
            >
              <span className="text-2xl sm:text-4xl font-black text-purple-600">0%</span>
              <p className="text-xs sm:text-sm font-bold text-slate-500 mt-1">Compartments</p>
              <p className="text-[10px] sm:text-[11px] text-emerald-600 font-semibold mt-0.5 truncate">
                Zero Failures Ever
              </p>
            </motion.div>
          </div>
        </section>

        {/* YEAR SELECTOR TABS */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14 pb-6 sm:pb-8 w-full max-w-full">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-slate-200 w-full max-w-full min-w-0">
            <div className="min-w-0">
              <span className="text-xs font-extrabold tracking-wider uppercase text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                Historical Archive
              </span>
              <h2 className="text-xl sm:text-2xl font-extrabold text-[#001744] mt-2">
                Annual CBSE Board Result Showcase
              </h2>
            </div>

            {/* Year Pills - Strictly constrained to prevent horizontal blowout */}
            <div className="w-full sm:w-auto max-w-full min-w-0 overflow-x-auto scrollbar-none py-1 -mx-1 px-1">
              <div className="flex items-center gap-2 min-w-max">
                {RESULT_YEARS.map((y) => (
                  <button
                    key={y.id}
                    onClick={() => {
                      setSelectedYearId(y.id);
                      setZoomLevel(1);
                    }}
                    className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap ${
                      selectedYearId === y.id
                        ? "bg-[#001744] text-[#FFD907] shadow-md scale-105"
                        : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
                    }`}
                  >
                    {y.yearLabel}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ACTIVE YEAR RESULT GRAPH DISPLAY WITH ANIMATION */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16 w-full max-w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeYear.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-8 lg:p-10 border border-slate-100 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center w-full max-w-full min-w-0 overflow-hidden"
            >
              {/* Left Col: Result Image Poster with Lightbox Trigger */}
              <div className="lg:col-span-7 space-y-3 w-full min-w-0">
                <div
                  role="button"
                  tabIndex={0}
                  aria-label={`Open full size poster for ${activeYear.title}`}
                  className="relative aspect-[4/3] w-full bg-slate-950 rounded-xl sm:rounded-2xl overflow-hidden shadow-lg cursor-pointer group border-2 sm:border-4 border-slate-100 focus:outline-none focus:ring-4 focus:ring-blue-500 active:scale-[0.99] transition-transform"
                  onClick={openLightbox}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      openLightbox();
                    }
                  }}
                >
                  <Image
                    src={activeYear.image}
                    alt={activeYear.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 55vw"
                    className="object-contain group-hover:scale-[1.02] transition-transform duration-300"
                    priority
                  />
                  {/* Bottom-right subtle trigger badge so student faces remain completely visible */}
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-black/20 transition-colors flex items-end justify-end p-2.5 sm:p-3 pointer-events-none">
                    <span className="bg-[#001744]/95 text-[#FFD907] text-[11px] sm:text-xs font-bold px-3 py-1.5 sm:px-4 sm:py-2 rounded-full flex items-center gap-1.5 backdrop-blur-sm shadow-xl border border-white/10 group-hover:scale-105 transition-transform pointer-events-auto">
                      <Maximize2 className="w-3.5 h-3.5 text-[#FFD907]" />
                      <span>Tap to Zoom Poster</span>
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between text-[11px] text-slate-500 font-medium px-1">
                  <span className="flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                    <span>Tap poster to zoom into individual toppers &amp; marks</span>
                  </span>
                  <button
                    onClick={openLightbox}
                    className="text-blue-600 font-bold hover:underline shrink-0"
                  >
                    Open Viewer
                  </button>
                </div>
              </div>

              {/* Right Col: Details & Achievements */}
              <div className="lg:col-span-5 space-y-5 w-full min-w-0">
                <div className="space-y-1.5">
                  <div className="inline-flex items-center gap-2 text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Academic Session: {activeYear.yearLabel}</span>
                  </div>
                  <h3 className="text-xl sm:text-3xl font-black text-[#001744] leading-tight">
                    {activeYear.title}
                  </h3>
                  <p className="text-xs text-slate-500 font-semibold">{activeYear.academicSession}</p>
                </div>

                <div className="space-y-2.5 pt-4 border-t border-slate-100">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Session Highlights &amp; Milestones:
                  </h4>
                  {activeYear.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{h}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row gap-2.5 w-full">
                  <button
                    onClick={openLightbox}
                    className="w-full sm:w-auto bg-blue-50 hover:bg-blue-100 active:bg-blue-200 text-[#001744] font-bold px-4 py-2.5 rounded-xl text-xs transition-colors flex items-center justify-center gap-2 border border-blue-200 shadow-xs"
                  >
                    <Maximize2 className="w-4 h-4 text-blue-600" />
                    <span>View Full Poster</span>
                  </button>
                  {activeYear.pdfUrl && (
                    <a
                      href={activeYear.pdfUrl}
                      download="Kautilya-CBSE-Class-10-Toppers-2025-26.pdf"
                      className="w-full sm:w-auto bg-slate-100 hover:bg-slate-200 active:bg-slate-300 text-slate-800 font-bold px-4 py-2.5 rounded-xl text-xs transition-colors flex items-center justify-center gap-2"
                    >
                      <Download className="w-4 h-4 text-slate-600" />
                      <span>Download PDF</span>
                    </a>
                  )}
                  <button
                    onClick={() => setIsAdmissionModalOpen(true)}
                    className="w-full sm:w-auto bg-[#001744] hover:bg-[#002b7a] active:bg-[#001233] text-[#FFD907] font-black px-4 py-2.5 rounded-xl text-xs transition-colors flex items-center justify-center gap-2 shadow-xs"
                  >
                    <GraduationCap className="w-4 h-4" />
                    <span>Apply for 2027-28</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </section>

        {/* INTERACTIVE CBSE PERFORMANCE TREND GRAPH SECTION */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 w-full max-w-full">
          <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 lg:p-10 border border-slate-100 shadow-xl">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-slate-100">
              <div>
                <span className="text-xs font-extrabold tracking-wider uppercase text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
                  Academic Trajectory
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#001744] mt-2">
                  CBSE Class X Aggregate &amp; Pass Trend Graph
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Comparative performance benchmarks and distinction records across all sessions
                </p>
              </div>
              <div className="flex items-center gap-3 text-xs font-semibold text-slate-600 shrink-0">
                <span className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-[#001744]" />
                  <span>100% Pass Record</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-[#FFD907] border border-amber-400" />
                  <span>Top Aggregate</span>
                </span>
              </div>
            </div>

            {/* Performance Bars for Each Academic Session */}
            <div className="pt-6 sm:pt-8 space-y-3.5">
              {GRAPH_DATA.map((item) => {
                const isSelected = selectedYearId === item.id;
                return (
                  <div
                    key={item.id}
                    onClick={() => {
                      setSelectedYearId(item.id);
                      window.scrollTo({ top: 380, behavior: "smooth" });
                    }}
                    className={`p-3.5 sm:p-4 rounded-xl sm:rounded-2xl border transition-all cursor-pointer group ${
                      isSelected
                        ? "bg-blue-50/80 border-blue-400 ring-2 ring-blue-500/20 shadow-md"
                        : "bg-slate-50/70 border-slate-200/80 hover:bg-slate-100/80"
                    }`}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-2 mb-2 text-xs sm:text-sm">
                      <div className="flex items-center gap-2">
                        <span className="font-black text-[#001744]">{item.year}</span>
                        {isSelected && (
                          <span className="text-[10px] bg-[#001744] text-[#FFD907] px-2 py-0.5 rounded-full font-bold">
                            Viewing Poster
                          </span>
                        )}
                        <span className="text-xs text-slate-500 font-medium hidden md:inline">
                          • {item.topper}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 font-black text-slate-700">
                        <span className="text-slate-500 text-xs font-semibold">Highest Score:</span>
                        <span className="text-blue-700 text-sm">{item.topScore}%</span>
                      </div>
                    </div>

                    {/* Visual Bar Container */}
                    <div className="w-full bg-slate-200 rounded-full h-3 sm:h-3.5 overflow-hidden flex">
                      <div
                        style={{ width: `${item.topScore}%` }}
                        className="bg-gradient-to-r from-[#001744] via-blue-700 to-[#FFD907] h-full rounded-full transition-all duration-500"
                      />
                    </div>

                    <div className="flex items-center justify-between text-[11px] text-slate-500 mt-1.5">
                      <span className="flex items-center gap-1 font-semibold text-emerald-700">
                        <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                        <span>100% Pass Percentage</span>
                      </span>
                      <span className="text-slate-600 font-medium">{item.distinctionLabel}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      {/* FULL RESULT POSTER LIGHTBOX MODAL WITH ZOOM & PAN */}
      {isLightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col justify-between p-0 sm:p-4 md:p-6 h-[100dvh] w-full max-w-full overflow-hidden animate-in fade-in duration-200"
          onClick={closeLightbox}
        >
          <div
            className="bg-slate-900 w-full h-full sm:h-[92vh] sm:rounded-2xl max-w-6xl overflow-hidden shadow-2xl relative border-0 sm:border border-white/20 flex flex-col animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="bg-[#001744] text-white px-3 py-2.5 sm:px-5 sm:py-3.5 flex items-center justify-between gap-2 shrink-0 border-b border-white/10 w-full max-w-full">
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-1.5">
                  <span className="text-[10px] sm:text-xs font-bold text-[#FFD907] bg-white/10 px-2 py-0.5 rounded-full shrink-0">
                    {activeYear.yearLabel}
                  </span>
                  <h4 className="text-xs sm:text-sm font-bold text-white truncate">
                    {activeYear.title}
                  </h4>
                </div>
                <p className="text-[10px] sm:text-xs text-slate-300 truncate mt-0.5 hidden sm:block">
                  {activeYear.academicSession}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-1 sm:gap-2 shrink-0">
                {/* Desktop Zoom +/- Controls */}
                <div className="hidden sm:flex items-center bg-white/10 rounded-lg p-0.5 border border-white/10">
                  <button
                    onClick={handleZoomOut}
                    disabled={zoomLevel <= 1}
                    className="p-1.5 text-slate-200 hover:text-white disabled:opacity-30 transition-colors"
                    title="Zoom Out"
                    aria-label="Zoom Out"
                  >
                    <ZoomOut className="w-4 h-4" />
                  </button>
                  <button
                    onClick={handleResetZoom}
                    className="px-2 py-0.5 text-[11px] font-bold text-[#FFD907] hover:bg-white/10 rounded"
                    title="Reset Zoom to 100%"
                  >
                    {Math.round(zoomLevel * 100)}%
                  </button>
                  <button
                    onClick={handleZoomIn}
                    disabled={zoomLevel >= 3}
                    className="p-1.5 text-slate-200 hover:text-white disabled:opacity-30 transition-colors"
                    title="Zoom In"
                    aria-label="Zoom In"
                  >
                    <ZoomIn className="w-4 h-4" />
                  </button>
                </div>

                {/* Open Full Image in New Tab */}
                <a
                  href={activeYear.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 hover:bg-white/20 active:bg-white/30 text-white p-2 sm:px-2.5 sm:py-1.5 rounded-lg text-xs font-bold transition-colors flex items-center gap-1"
                  title="Open Full Image in New Tab"
                  aria-label="Open Full Image"
                >
                  <ExternalLink className="w-4 h-4 text-slate-200" />
                  <span className="hidden md:inline">Full Image</span>
                </a>

                {/* Download PDF (if available) */}
                {activeYear.pdfUrl && (
                  <a
                    href={activeYear.pdfUrl}
                    download="Kautilya-CBSE-Class-10-Toppers-2025-26.pdf"
                    className="bg-[#FFD907] hover:bg-yellow-400 active:bg-yellow-500 text-[#001744] p-2 sm:px-2.5 sm:py-1.5 rounded-lg text-xs font-black transition-colors flex items-center gap-1 shadow-sm"
                    title="Download Official PDF"
                    aria-label="Download Official PDF"
                  >
                    <Download className="w-4 h-4" />
                    <span className="hidden sm:inline">PDF</span>
                  </a>
                )}

                {/* Close Button */}
                <button
                  onClick={closeLightbox}
                  className="text-slate-300 hover:text-white active:bg-white/20 p-1.5 sm:p-2 rounded-lg hover:bg-white/10 transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
              </div>
            </div>

            {/* Poster Scrollable / Zoomable Viewport */}
            <div
              ref={scrollContainerRef}
              className={`relative flex-1 w-full bg-slate-950 overflow-auto touch-pan-x touch-pan-y overscroll-contain flex p-2 sm:p-4 select-none ${
                zoomLevel > 1 ? "cursor-grab active:cursor-grabbing" : "cursor-zoom-in"
              }`}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <div
                style={{
                  width: `${zoomLevel * 100}%`,
                  minWidth: zoomLevel > 1 ? `${zoomLevel * 100}%` : "100%",
                  aspectRatio: "4/3",
                  transition: touchStartDistanceRef.current ? "none" : "width 0.2s ease",
                }}
                className="m-auto relative shrink-0"
                onClick={handleImageDoubleTapOrClick}
              >
                <Image
                  src={activeYear.image}
                  alt={activeYear.title}
                  fill
                  sizes="100vw"
                  unoptimized
                  className="object-contain pointer-events-none select-none"
                  priority
                />
              </div>
            </div>

            {/* Bottom Mobile-Friendly Control Toolbar */}
            <div className="bg-[#001744]/95 backdrop-blur-md text-white px-2.5 py-2 sm:px-4 sm:py-2.5 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-2 shrink-0 w-full max-w-full">
              {/* Mobile Quick Zoom Preset Pills & Stepper */}
              <div className="flex items-center justify-between w-full sm:w-auto gap-1.5 sm:gap-2">
                <div className="flex items-center gap-1 bg-white/10 rounded-xl p-0.5 sm:p-1 border border-white/10">
                  {[
                    { label: "Fit", value: 1 },
                    { label: "1.5x", value: 1.5 },
                    { label: "2x", value: 2 },
                    { label: "3x", value: 3 },
                  ].map((preset) => (
                    <button
                      key={preset.label}
                      onClick={() => setZoomLevel(preset.value)}
                      className={`px-2 py-1 sm:px-2.5 sm:py-1 rounded-lg text-[11px] sm:text-xs font-bold transition-all ${
                        Math.abs(zoomLevel - preset.value) < 0.1
                          ? "bg-[#FFD907] text-[#001744] shadow-sm font-black"
                          : "text-slate-200 hover:text-white hover:bg-white/10"
                      }`}
                    >
                      {preset.label}
                    </button>
                  ))}
                </div>

                {/* Stepper +/- */}
                <div className="flex items-center gap-1 bg-white/10 rounded-xl p-0.5 sm:p-1 border border-white/10">
                  <button
                    onClick={handleZoomOut}
                    disabled={zoomLevel <= 1}
                    className="p-1 text-slate-200 hover:text-white disabled:opacity-30"
                    aria-label="Zoom out"
                  >
                    <ZoomOut className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </button>
                  <span className="text-[11px] font-black text-[#FFD907] px-1 min-w-[36px] text-center">
                    {Math.round(zoomLevel * 100)}%
                  </span>
                  <button
                    onClick={handleZoomIn}
                    disabled={zoomLevel >= 3}
                    className="p-1 text-slate-200 hover:text-white disabled:opacity-30"
                    aria-label="Zoom in"
                  >
                    <ZoomIn className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </button>
                </div>
              </div>

              {/* Guidance / Quick Action */}
              <div className="flex items-center justify-between sm:justify-end w-full sm:w-auto gap-2 sm:gap-3 text-[11px] text-slate-300">
                <span className="flex items-center gap-1 text-[10px] sm:text-[11px] truncate">
                  <Sparkles className="w-3 h-3 text-[#FFD907] shrink-0" />
                  <span>Pinch or double-tap to zoom • Drag to explore</span>
                </span>
                {zoomLevel > 1 && (
                  <button
                    onClick={handleResetZoom}
                    className="text-[#FFD907] font-bold underline flex items-center gap-1 hover:text-yellow-300 shrink-0 text-[11px]"
                  >
                    <RotateCcw className="w-3 h-3" />
                    <span>Reset</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
      <WhatsAppWidget />
      <AdmissionModal
        isOpen={isAdmissionModalOpen}
        onClose={() => setIsAdmissionModalOpen(false)}
      />
    </div>
  );
}
