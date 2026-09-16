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
  BookOpen,
  Sparkles,
  ChevronRight,
  Cpu,
  Layers,
  Compass,
  CheckCircle2,
  GraduationCap,
  ArrowRight,
  ShieldCheck,
  Lightbulb,
} from "lucide-react";

const STAGES = [
  {
    id: "early",
    label: "Early Childhood (Pre-KG to UKG)",
    title: "Foundational Joy & Sensory Discovery",
    desc: "Nurtured by experienced Mother Teachers, our early childhood program focuses on motor skills, phonics, experiential play, and social communication in a bright, cheerful environment.",
    points: [
      "Play-way inquiry method fostering innate curiosity",
      "Dedicated Mother Teachers providing individualized warmth",
      "Interactive storytelling, rhyme recitation & sensory play",
      "Foundational numeracy and phonetic word building",
    ],
  },
  {
    id: "primary",
    label: "Primary School (Grades 1 to 5)",
    title: "Conceptual Clarity & Experiential Inquiry",
    desc: "Developing strong foundations in reading, writing, mathematical logic, and scientific inquiry through interactive projects and lab demonstrations.",
    points: [
      "Hands-on science experiments awakening analytical thinking",
      "Multilingual development: English, Kannada, Hindi, French & Sanskrit",
      "Mathematics lab activities reinforcing concrete understanding",
      "Introduction to environmental science & digital literacy",
    ],
  },
  {
    id: "middle",
    label: "Middle School (Grades 6 to 8)",
    title: "Critical Thinking & Interdisciplinary Depth",
    desc: "Bridging core subjects with real-world applications through science olympiads, Atal Tinkering Lab robotics, coding, and inter-house debates.",
    points: [
      "Atal Tinkering Lab hands-on robotics, coding, and 3D prototyping",
      "Structured inter-house quizzes, debates, and elocution contests",
      "Deeper scientific laboratories: Physics, Chemistry & Biology",
      "Socially Useful Productive Work (SUPW) & community projects",
    ],
  },
  {
    id: "secondary",
    label: "Secondary (Grades 9 & 10)",
    title: "Academic Rigor & Future Readiness",
    desc: "Rigorous CBSE Board preparation paired with career mentoring, competitive exam foundation, and comprehensive academic excellence.",
    points: [
      "100% CBSE pass track record with consistent school toppers",
      "Advanced laboratory mastery and conceptual problem-solving",
      "NEET, JEE & CET orientation integrated with curriculum",
      "Individualized personal, career, and psychological counseling",
    ],
  },
];

export default function WhatItMeansClientView() {
  const [isAdmissionModalOpen, setIsAdmissionModalOpen] = useState(false);
  const [activeStage, setActiveStage] = useState(0);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-800 selection:bg-[#FFD907] selection:text-[#001744]">
      <Navbar onOpenAdmissionModal={() => setIsAdmissionModalOpen(true)} />

      <main className="flex-grow">
        {/* HERO BANNER WITH AUTHENTIC BG & DYNAMIC WAVE */}
        <InnerPageHero
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Academics" },
            { label: "What it means at Kautilya?" },
          ]}
          badge={{
            text: "Academic Philosophy & Curriculum Design",
            icon: BookOpen,
          }}
          title="What It Means At Kautilya Vidyalaya"
          subtitle="A solid academic foundation that equips students with the tools to thrive in their chosen disciplines, nurtures intellectual curiosity, and encourages interdisciplinary innovation."
          waveFillColor="#f8fafc"
        />

        {/* CORE FOUNDATION STATEMENT */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 sm:-mt-8 relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 border-l-8 border-[#FFD907] border-y border-r border-slate-100 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6"
          >
            <div className="space-y-2 max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-wider text-[#001744]">
                Our Academic Commitment
              </span>
              <p className="text-base sm:text-lg font-extrabold text-slate-800 leading-snug">
                “By combining deep subject clarity with creative problem-solving and modern digital tools, academia at Kautilya transforms into a dynamic and inclusive environment where every student reaches their full potential.”
              </p>
            </div>
            <button
              onClick={() => setIsAdmissionModalOpen(true)}
              className="shrink-0 bg-[#001744] hover:bg-[#002b7a] text-[#FFD907] font-black px-6 py-3 rounded-xl shadow transition-all text-sm flex items-center gap-2"
            >
              <GraduationCap className="w-4 h-4" />
              <span>Enroll for 2027-28</span>
            </button>
          </motion.div>
        </section>

        {/* 4 PILLARS OF ACADEMIC EXCELLENCE */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-extrabold tracking-wider uppercase text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
              Pillars of Learning
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#001744] tracking-tight mt-3">
              How We Elevate the Learning Experience
            </h2>
            <p className="text-slate-500 text-sm mt-2">
              Going beyond rote memorization to instill deep conceptual mastery and practical wisdom.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center font-bold">
                  <BookOpen className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-[#001744]">
                  Solid Academic Grounding
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Rigorous CBSE syllabus delivery providing individuals with the essential tools, vocabulary, and analytical clarity needed across disciplines.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-slate-100 text-[11px] font-bold text-blue-600 flex items-center gap-1">
                <span>Conceptual Depth</span>
                <CheckCircle2 className="w-3.5 h-3.5" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center font-bold">
                  <Layers className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-[#001744]">
                  Interdisciplinary Thinking
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Encouraging students to connect insights between mathematics, biology, literature, and social sciences for comprehensive real-world solutions.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-slate-100 text-[11px] font-bold text-amber-700 flex items-center gap-1">
                <span>Holistic Connections</span>
                <CheckCircle2 className="w-3.5 h-3.5" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center font-bold">
                  <Cpu className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-[#001744]">
                  Technology & Digital Tools
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Smart classroom technology, Atal Tinkering Labs, and computer labs that transform learning from passive reception into active experimentation.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-slate-100 text-[11px] font-bold text-purple-700 flex items-center gap-1">
                <span>Digital Innovation</span>
                <CheckCircle2 className="w-3.5 h-3.5" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold">
                  <Compass className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-[#001744]">
                  Future Endeavours
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Developing adaptability, independent critical reasoning, and moral character to equip graduates for 21st-century global careers.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-slate-100 text-[11px] font-bold text-emerald-700 flex items-center gap-1">
                <span>Life Preparation</span>
                <CheckCircle2 className="w-3.5 h-3.5" />
              </div>
            </motion.div>
          </div>
        </section>

        {/* INTERACTIVE STAGES SWITCHER */}
        <section className="bg-white py-16 sm:py-20 border-y border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-extrabold tracking-wider uppercase text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                Learning Journey
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#001744] tracking-tight mt-3">
                Progression Across Grades
              </h2>
              <p className="text-slate-500 text-sm mt-2">
                Click across grade bands to explore our tailored pedagogical strategies.
              </p>
            </div>

            {/* Stage Selector Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
              {STAGES.map((stage, idx) => (
                <button
                  key={stage.id}
                  onClick={() => setActiveStage(idx)}
                  className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all ${
                    activeStage === idx
                      ? "bg-[#001744] text-[#FFD907] shadow-md scale-105"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  {stage.label}
                </button>
              ))}
            </div>

            {/* Active Stage Display with AnimatePresence */}
            <div className="max-w-4xl mx-auto">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStage}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="bg-gradient-to-br from-slate-50 to-blue-50/50 p-8 sm:p-10 rounded-2xl border border-slate-200 shadow-sm"
                >
                  <h3 className="text-xl sm:text-2xl font-black text-[#001744] mb-3">
                    {STAGES[activeStage].title}
                  </h3>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                    {STAGES[activeStage].desc}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-slate-200">
                    {STAGES[activeStage].points.map((pt, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </section>

        {/* AUTHENTIC PHOTO FEATURE SECTION */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-6 relative"
            >
              <div className="relative h-80 sm:h-[420px] rounded-2xl overflow-hidden shadow-xl border-4 border-white">
                <Image
                  src="/images/academics/kautilya-classroom-learning.jpeg"
                  alt="Students engaged in interactive classroom learning at Kautilya Vidyalaya"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-6 space-y-6"
            >
              <span className="text-xs font-extrabold tracking-wider uppercase text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                Interactive Environment
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#001744] tracking-tight">
                Where Ideas Ignite & Curiosity Thrives
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Classrooms at Kautilya Vidyalaya are collaborative workshops. Students do not just listen—they question, experiment, debate, and synthesize concepts. Our teachers act as mentors, personalizing instruction so that every child develops intellectual confidence.
              </p>
              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3 text-xs sm:text-sm font-bold text-slate-700">
                  <span className="w-2 h-2 rounded-full bg-blue-600" />
                  <span>Individualized student attention and mentorship</span>
                </div>
                <div className="flex items-center gap-3 text-xs sm:text-sm font-bold text-slate-700">
                  <span className="w-2 h-2 rounded-full bg-emerald-600" />
                  <span>State-of-the-art Atal Tinkering & Space Laboratories</span>
                </div>
                <div className="flex items-center gap-3 text-xs sm:text-sm font-bold text-slate-700">
                  <span className="w-2 h-2 rounded-full bg-[#FFD907]" />
                  <span>Strong emphasis on moral values & social empathy</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* BOTTOM ADMISSIONS CTA */}
        <section className="bg-[#001744] text-white py-14 border-t-4 border-[#FFD907]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
            <h3 className="text-2xl sm:text-3xl font-black text-white">
              Discover the Kautilya Advantage
            </h3>
            <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto">
              Admissions open for Academic Year 2027-28 from Nursery to Grade 10. Give your child the foundation for lifelong success.
            </p>
            <button
              onClick={() => setIsAdmissionModalOpen(true)}
              className="bg-[#FFD907] hover:bg-yellow-400 text-[#001744] font-black px-7 py-3 rounded-xl text-sm transition-all shadow-lg"
            >
              Apply for Admission 2027-28
            </button>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppWidget />
      <AdmissionModal
        isOpen={isAdmissionModalOpen}
        onClose={() => setIsAdmissionModalOpen(false)}
      />
    </div>
  );
}
