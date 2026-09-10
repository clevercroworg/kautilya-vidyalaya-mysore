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
} from "lucide-react";

interface ResultYear {
  id: string;
  yearLabel: string;
  academicSession: string;
  image: string;
  title: string;
  highlights: string[];
}

const RESULT_YEARS: ResultYear[] = [
  {
    id: "2024",
    yearLabel: "2024 - 2025",
    academicSession: "CBSE Class X & Board Examinations 2024-25",
    image: "/images/results/kautilya-cbse-result-2024.png",
    title: "CBSE Class X Outstanding Performance 2024-25",
    highlights: [
      "100% Pass Percentage maintained across all candidates",
      "Outstanding distinctions with top scores exceeding 97%",
      "Subject centums in Mathematics, Social Science & Languages",
      "Over 75% of students securing First Class with Distinction",
    ],
  },
  {
    id: "2023",
    yearLabel: "2023 - 2024",
    academicSession: "CBSE Class X Annual Board Results 2023-24",
    image: "/images/results/kautilya-cbse-result-2023.jpeg",
    title: "CBSE Class X Merit & Distinction Roster 2023-24",
    highlights: [
      "Flawless 100% result record unbroken",
      "School toppers felicitated with institutional academic scholarships",
      "Exceptional aggregate performance in Science and Mathematics",
      "Zero failures or compartments in CBSE assessments",
    ],
  },
  {
    id: "2021",
    yearLabel: "2021 - 2022",
    academicSession: "CBSE Class X Board Results 2021-22",
    image: "/images/results/kautilya-cbse-result-2021.webp",
    title: "CBSE Class X Board Examination Roster 2021-22",
    highlights: [
      "100% success rate under revised CBSE evaluation scheme",
      "Exemplary performance across all stream electives",
      "Commended by regional education directors for consistent excellence",
    ],
  },
  {
    id: "2020",
    yearLabel: "2020 - 2021",
    academicSession: "CBSE Class X Board Results 2020-21",
    image: "/images/results/kautilya-cbse-result-2020.webp",
    title: "CBSE Class X Examination Graph 2020-21",
    highlights: [
      "Consistent academic resilience during remote & blended learning",
      "Cent percent pass results achieved through focused educator support",
    ],
  },
  {
    id: "2019",
    yearLabel: "2019 - 2020",
    academicSession: "CBSE Class X Board Results 2019-20",
    image: "/images/results/kautilya-cbse-result-2019.webp",
    title: "CBSE Class X Examination Graph 2019-20",
    highlights: [
      "Continued tradition of 100% pass percentages in Mysuru district",
      "High grade point averages across all subject faculties",
    ],
  },
];

export default function ResultGraphClientView() {
  const [isAdmissionModalOpen, setIsAdmissionModalOpen] = useState(false);
  const [selectedYearId, setSelectedYearId] = useState("2024");
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const activeYear = RESULT_YEARS.find((y) => y.id === selectedYearId) || RESULT_YEARS[0];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-800 selection:bg-[#FFD907] selection:text-[#001744]">
      <Navbar onOpenAdmissionModal={() => setIsAdmissionModalOpen(true)} />

      <main className="flex-grow">
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
          title="Consistent 100% CBSE Board Examination Results"
          subtitle="Year after year, Kautilya Vidyalaya maintains a stellar track record of 100% pass percentages, top state percentiles, and subject centums in CBSE Class X assessments."
          waveFillColor="#f8fafc"
        />

        {/* 4 STAT COUNTERS WITH FRAMER MOTION */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 sm:-mt-8 relative z-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-2xl p-5 sm:p-6 shadow-xl border border-slate-100 text-center"
            >
              <span className="text-3xl sm:text-4xl font-black text-[#001744]">100%</span>
              <p className="text-xs sm:text-sm font-bold text-slate-500 mt-1">Pass Percentage</p>
              <p className="text-[11px] text-emerald-600 font-semibold mt-0.5">Consecutive Years</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-2xl p-5 sm:p-6 shadow-xl border border-slate-100 text-center"
            >
              <span className="text-3xl sm:text-4xl font-black text-blue-600">85%+</span>
              <p className="text-xs sm:text-sm font-bold text-slate-500 mt-1">Distinction Rate</p>
              <p className="text-[11px] text-slate-400 font-semibold mt-0.5">First Class with Distinction</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white rounded-2xl p-5 sm:p-6 shadow-xl border border-slate-100 text-center"
            >
              <span className="text-3xl sm:text-4xl font-black text-amber-600">100/100</span>
              <p className="text-xs sm:text-sm font-bold text-slate-500 mt-1">Centum Scorers</p>
              <p className="text-[11px] text-slate-400 font-semibold mt-0.5">Math, Science & Social</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white rounded-2xl p-5 sm:p-6 shadow-xl border border-slate-100 text-center"
            >
              <span className="text-3xl sm:text-4xl font-black text-purple-600">0%</span>
              <p className="text-xs sm:text-sm font-bold text-slate-500 mt-1">Compartments</p>
              <p className="text-[11px] text-emerald-600 font-semibold mt-0.5">Zero Failures</p>
            </motion.div>
          </div>
        </section>

        {/* YEAR SELECTOR TABS */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-slate-200">
            <div>
              <span className="text-xs font-extrabold tracking-wider uppercase text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                Historical Archive
              </span>
              <h2 className="text-2xl font-extrabold text-[#001744] mt-2">
                Annual CBSE Board Result Showcase
              </h2>
            </div>

            {/* Year Pills */}
            <div className="flex items-center gap-2 overflow-x-auto scrollbar-none">
              {RESULT_YEARS.map((y) => (
                <button
                  key={y.id}
                  onClick={() => setSelectedYearId(y.id)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap ${
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
        </section>

        {/* ACTIVE YEAR RESULT GRAPH DISPLAY WITH ANIMATION */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeYear.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-100 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-10 items-center"
            >
              {/* Left Col: Result Image Poster with Lightbox Trigger */}
              <div
                className="lg:col-span-7 relative h-[360px] sm:h-[480px] bg-slate-900 rounded-2xl overflow-hidden shadow-md cursor-pointer group border-4 border-slate-50"
                onClick={() => setIsLightboxOpen(true)}
              >
                <Image
                  src={activeYear.image}
                  alt={activeYear.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-contain group-hover:scale-105 transition-transform duration-300"
                  priority
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                  <span className="bg-[#001744]/90 text-[#FFD907] text-xs font-bold px-4 py-2 rounded-full flex items-center gap-2 backdrop-blur-sm shadow-lg">
                    <Maximize2 className="w-4 h-4" />
                    <span>Click to Inspect Result Full Size</span>
                  </span>
                </div>
              </div>

              {/* Right Col: Details & Achievements */}
              <div className="lg:col-span-5 space-y-6">
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-2 text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Academic Session: {activeYear.yearLabel}</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black text-[#001744] leading-tight">
                    {activeYear.title}
                  </h3>
                  <p className="text-xs text-slate-500 font-semibold">{activeYear.academicSession}</p>
                </div>

                <div className="space-y-3 pt-4 border-t border-slate-100">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Session Highlights & Milestones:
                  </h4>
                  {activeYear.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{h}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => setIsLightboxOpen(true)}
                    className="bg-slate-100 hover:bg-slate-200 text-[#001744] font-bold px-5 py-2.5 rounded-xl text-xs transition-colors flex items-center justify-center gap-2"
                  >
                    <Maximize2 className="w-4 h-4" />
                    <span>View Official Merit Poster</span>
                  </button>
                  <button
                    onClick={() => setIsAdmissionModalOpen(true)}
                    className="bg-[#001744] hover:bg-[#002b7a] text-[#FFD907] font-bold px-5 py-2.5 rounded-xl text-xs transition-colors flex items-center justify-center gap-2"
                  >
                    <GraduationCap className="w-4 h-4" />
                    <span>Apply for 2026-27</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </section>
      </main>

      {/* FULL RESULT POSTER LIGHTBOX MODAL */}
      {isLightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setIsLightboxOpen(false)}
        >
          <div
            className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl relative border border-white/20 flex flex-col animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-[#001744] text-white p-4 flex items-center justify-between">
              <div>
                <h4 className="text-sm font-bold text-white">{activeYear.title}</h4>
                <p className="text-xs text-slate-400">{activeYear.academicSession}</p>
              </div>
              <button
                onClick={() => setIsLightboxOpen(false)}
                className="text-slate-400 hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="relative flex-1 min-h-[450px] bg-slate-950 p-2">
              <Image
                src={activeYear.image}
                alt={activeYear.title}
                fill
                className="object-contain"
              />
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
