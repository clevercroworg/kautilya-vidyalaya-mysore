"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppWidget from "@/components/ui/WhatsAppWidget";
import AdmissionModal from "@/components/ui/AdmissionModal";
import InnerPageHero from "@/components/ui/InnerPageHero";
import rawBrochureData from "@/data/brochureData.json";
import { BrochureData } from "@/types/parentsCorner";
import {
  FileText,
  Download,
  BookOpen,
  CheckCircle2,
  Calendar,
  ExternalLink,
  Phone,
  Compass,
  ArrowUpRight,
} from "lucide-react";

const brochureData: BrochureData = rawBrochureData as BrochureData;

export default function BrochureClientView() {
  const [isAdmissionModalOpen, setIsAdmissionModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-800 selection:bg-[#FFD907] selection:text-[#001744]">
      <Navbar onOpenAdmissionModal={() => setIsAdmissionModalOpen(true)} />

      <main className="flex-grow">
        {/* HERO SECTION */}
        <InnerPageHero
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Parents Corner" },
            { label: "Brochure Download" },
          ]}
          badge={{
            text: `Admissions Prospectus ${brochureData.academicYear}`,
            icon: FileText,
          }}
          title="Download School Brochure"
          subtitle="Explore the official institutional prospectus of Kautilya Vidyalaya. Discover our academic roadmap, Atal Tinkering STEM labs, athletic achievements, and admissions guidelines."
          waveFillColor="#f8fafc"
        />

        {/* PRIMARY PROSPECTUS DOWNLOAD CARD */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 sm:-mt-8 relative z-20">
          <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-10 border border-slate-200/80">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left: Brochure Cover Mockup */}
              <div className="lg:col-span-4 flex justify-center">
                <motion.div
                  whileHover={{ scale: 1.02, rotateY: 3 }}
                  transition={{ duration: 0.3 }}
                  className="relative aspect-[3/4] w-60 sm:w-68 rounded-2xl overflow-hidden shadow-2xl border-4 border-slate-100 group"
                  style={{ perspective: 1000 }}
                >
                  <Image
                    src={brochureData.coverImage}
                    alt="Kautilya Vidyalaya Official Prospectus Cover"
                    fill
                    sizes="(max-width: 640px) 240px, 272px"
                    className="object-cover transition-transform duration-500"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#001744]/95 via-[#001744]/40 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white space-y-1">
                    <span className="bg-[#FFD907] text-[#001744] text-[10px] font-black uppercase px-2 py-0.5 rounded">
                      Prospectus {brochureData.academicYear}
                    </span>
                    <h4 className="text-sm font-extrabold leading-tight">
                      Kautilya Vidyalaya
                    </h4>
                    <p className="text-[11px] text-slate-300">
                      CBSE Affiliated • Mysuru
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Right: Brochure Details & Symmetrical Actions */}
              <div className="lg:col-span-8 space-y-5">
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-2 text-xs font-bold text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Academic Session {brochureData.academicYear} Publication</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-[#001744] tracking-tight">
                    {brochureData.title}
                  </h2>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {brochureData.overview}
                  </p>
                </div>

                {/* Highlights List */}
                {brochureData.highlights && brochureData.highlights.length > 0 && (
                  <div className="space-y-2 pt-1">
                    <p className="text-xs font-extrabold uppercase tracking-wider text-slate-500">
                      Inside this comprehensive prospectus:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                      {brochureData.highlights.map((h, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Clean, Symmetrical Action Buttons */}
                <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <span className="text-xs font-mono font-medium text-slate-500">
                    Official PDF Document • {brochureData.fileSize}
                  </span>
                  <div className="flex items-center gap-3 w-full sm:w-auto">
                    {/* View Online Button */}
                    <a
                      href={brochureData.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 bg-blue-50 hover:bg-blue-600 text-blue-700 hover:text-white border border-blue-200 hover:border-blue-600 font-bold text-xs px-5 py-3 rounded-xl transition-all shadow-sm"
                    >
                      <BookOpen className="w-4 h-4" />
                      <span>Read Online</span>
                      <ExternalLink className="w-3.5 h-3.5 opacity-70" />
                    </a>

                    {/* Download PDF Button */}
                    <a
                      href={brochureData.pdfUrl}
                      download={`Kautilya-School-Brochure-${brochureData.academicYear}.pdf`}
                      className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 bg-[#001744] hover:bg-[#002b7a] text-[#FFD907] font-black text-xs px-6 py-3 rounded-xl transition-all shadow-sm hover:scale-105"
                    >
                      <Download className="w-4 h-4" />
                      <span>Download Brochure</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROSPECTUS CHAPTERS BREAKDOWN */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-18">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-extrabold tracking-wider uppercase text-blue-700 bg-blue-50 px-3.5 py-1 rounded-full border border-blue-100">
              Table of Contents
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#001744] tracking-tight mt-2.5">
              What You Will Discover
            </h3>
            <p className="text-slate-500 text-xs sm:text-sm mt-1.5">
              A comprehensive view of learning, character building, and life at Kautilya Vidyalaya.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5">
            {brochureData.brochureSections.map((sec, idx) => (
              <motion.div
                key={sec.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.06 }}
                whileHover={{ y: -4 }}
                className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/80 shadow-sm space-y-2.5 flex flex-col justify-between transition-shadow hover:shadow-md"
              >
                <div className="space-y-2">
                  <span className="w-7 h-7 rounded-lg bg-[#001744] text-[#FFD907] font-black text-xs flex items-center justify-center">
                    0{idx + 1}
                  </span>
                  <h4 className="text-xs sm:text-sm font-black text-[#001744]">
                    {sec.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {sec.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CAMPUS VISIT BOOKING CTA */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20">
          <div className="bg-gradient-to-br from-[#001744] to-[#002b7a] text-white rounded-3xl p-8 sm:p-10 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8 border border-white/10">
            <div className="space-y-2.5 text-center lg:text-left max-w-xl">
              <div className="inline-flex items-center gap-2 bg-[#FFD907] text-[#001744] px-3.5 py-1 rounded-full text-xs font-black">
                <Compass className="w-3.5 h-3.5" />
                <span>Experience Kautilya In Person</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                Book a Campus Walkthrough
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Tour our Atal Tinkering Labs, sports grounds, library, and modern classrooms. Meet our academic counselors and experience the campus environment.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href="tel:+919900038358"
                className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all"
              >
                <Phone className="w-4 h-4 text-[#FFD907]" />
                <span>+91 9900038358</span>
              </a>
              <button
                onClick={() => setIsAdmissionModalOpen(true)}
                className="bg-[#FFD907] hover:bg-yellow-400 text-[#001744] font-black px-5 py-2.5 rounded-xl text-xs sm:text-sm shadow-lg flex items-center gap-2 transition-all hover:scale-105"
              >
                <span>Schedule Campus Tour</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
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
