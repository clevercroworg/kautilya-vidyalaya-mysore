"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppWidget from "@/components/ui/WhatsAppWidget";
import AdmissionModal from "@/components/ui/AdmissionModal";
import InnerPageHero from "@/components/ui/InnerPageHero";
import rawData from "@/data/parentPerspectivesData.json";
import { ParentPerspectiveItem } from "@/types/parentsCorner";
import {
  HeartHandshake,
  Play,
  X,
  GraduationCap,
  Sparkles,
} from "lucide-react";

const perspectives: ParentPerspectiveItem[] = rawData as ParentPerspectiveItem[];

const STATS = [
  { label: "Years of Trust", value: "20+", sub: "Educating Generations" },
  { label: "Classroom Attention", value: "1:12", sub: "Pre-Primary Ratio" },
  { label: "CBSE Board Pass", value: "100%", sub: "Unbroken Legacy" },
  { label: "Holistic Disciplines", value: "15+", sub: "Arts, STEM & Sports" },
];

/**
 * Robust YouTube ID extractor to make admin content entry completely hassle-free.
 * Supports raw 11-char IDs, youtu.be short links, and full youtube.com URLs.
 */
function getYouTubeId(urlOrId: string): string {
  if (!urlOrId) return "";
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = urlOrId.match(regExp);
  return match && match[2].length === 11 ? match[2] : urlOrId.trim();
}

function getThumbnailUrl(item: ParentPerspectiveItem): string {
  if (item.thumbnail && item.thumbnail.trim()) return item.thumbnail;
  const id = getYouTubeId(item.youtubeId);
  return `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
}

export default function ParentPerspectivesClientView() {
  const [isAdmissionModalOpen, setIsAdmissionModalOpen] = useState(false);
  const [activeVideo, setActiveVideo] = useState<ParentPerspectiveItem | null>(null);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveVideo(null);
    };
    if (activeVideo) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [activeVideo]);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-800 selection:bg-[#FFD907] selection:text-[#001744]">
      <Navbar onOpenAdmissionModal={() => setIsAdmissionModalOpen(true)} />

      <main className="flex-grow">
        {/* HERO SECTION */}
        <InnerPageHero
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Parents Corner" },
            { label: "Parent Perspectives" },
          ]}
          badge={{
            text: "Parent Testimonials",
            icon: HeartHandshake,
          }}
          title="Parent Perspectives"
          subtitle="Real reflections and video stories shared by parents of Kautilya Vidyalaya across Kindergarten, Primary, Middle, and High School."
          waveFillColor="#f8fafc"
        />

        {/* TRUST STATS STRIP */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 sm:-mt-8 relative z-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            {STATS.map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: idx * 0.06 }}
                className="bg-white p-5 sm:p-6 rounded-2xl shadow-lg border border-slate-100 text-center"
              >
                <p className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#001744]">
                  {stat.value}
                </p>
                <p className="text-xs sm:text-sm font-bold text-slate-800 mt-1">
                  {stat.label}
                </p>
                <p className="text-[11px] text-slate-400 font-medium">
                  {stat.sub}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* PARENT PERSPECTIVES CLEAN VIDEO GRID */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs font-extrabold tracking-wider uppercase text-blue-700 bg-blue-50 px-3.5 py-1 rounded-full border border-blue-100">
              Community Voices
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#001744] tracking-tight mt-2.5">
              Hear Directly From Our Parents
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm mt-1">
              Click any video card below to watch authentic stories from Kautilya parents.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {perspectives.map((item, idx) => {
              const thumb = getThumbnailUrl(item);

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  whileHover={{ y: -5 }}
                  onClick={() => setActiveVideo(item)}
                  className="bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between group"
                >
                  {/* Video Thumbnail with Hover Zoom & Center Play */}
                  <div className="relative aspect-video w-full bg-slate-900 overflow-hidden">
                    <Image
                      src={thumb}
                      alt={`${item.parentName} story`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-95"
                    />
                    <div className="absolute inset-0 bg-black/25 group-hover:bg-black/10 transition-colors" />

                    {/* Circular Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#FFD907] text-[#001744] flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                        <Play className="w-5 h-5 sm:w-6 sm:h-6 fill-current translate-x-0.5" />
                      </div>
                    </div>

                    <div className="absolute bottom-2.5 right-2.5 bg-black/70 text-white text-[10px] font-bold px-2 py-0.5 rounded-md backdrop-blur-sm">
                      Video Story
                    </div>
                  </div>

                  {/* Clean, Simple Metadata Card Body */}
                  <div className="p-4 sm:p-5 flex items-center justify-between gap-3 bg-white">
                    <div className="space-y-0.5 min-w-0">
                      <h3 className="text-sm sm:text-base font-bold text-[#001744] truncate group-hover:text-blue-700 transition-colors">
                        {item.parentName}
                      </h3>
                      <p className="text-xs text-slate-500 truncate font-medium">
                        {item.relation}
                      </p>
                    </div>

                    <div className="shrink-0 text-blue-700 font-bold text-xs flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                      <span className="hidden sm:inline">Play</span>
                      <Play className="w-3.5 h-3.5 fill-current" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* BOTTOM ADMISSIONS CTA */}
        <section className="bg-[#001744] text-white py-14 border-t-4 border-[#FFD907]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3.5">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Join Our Proud Kautilya Family
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
              Admissions open for 2027-28 across Pre-KG to Grade 10. Schedule a personalized campus walkthrough and experience the Kautilya difference firsthand.
            </p>
            <div className="pt-2">
              <button
                onClick={() => setIsAdmissionModalOpen(true)}
                className="bg-[#FFD907] hover:bg-yellow-400 text-[#001744] font-black px-6 py-3 rounded-xl text-xs sm:text-sm transition-all shadow-lg inline-flex items-center gap-2 hover:scale-105"
              >
                <GraduationCap className="w-4 h-4" />
                <span>Apply for Admission</span>
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* YOUTUBE VIDEO PLAYER MODAL */}
      <AnimatePresence>
        {activeVideo && (
          <div
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
            onClick={() => setActiveVideo(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="bg-slate-900 rounded-2xl max-w-4xl w-full overflow-hidden shadow-2xl relative border border-white/20 flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between px-5 py-3.5 bg-[#001744] text-white border-b border-white/10 shrink-0">
                <div>
                  <h4 className="text-sm sm:text-base font-bold text-white">
                    {activeVideo.parentName}
                  </h4>
                  <p className="text-[11px] text-slate-300">
                    {activeVideo.relation}
                  </p>
                </div>
                <button
                  onClick={() => setActiveVideo(null)}
                  className="text-slate-400 hover:text-white p-1.5 rounded-lg hover:bg-white/10 transition-colors"
                  aria-label="Close video modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Responsive 16:9 YouTube Embed */}
              <div className="relative aspect-video w-full bg-black">
                <iframe
                  src={`https://www.youtube.com/embed/${getYouTubeId(activeVideo.youtubeId)}?autoplay=1&rel=0`}
                  title={`${activeVideo.parentName} Video Testimonial`}
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <Footer />
      <WhatsAppWidget />
      <AdmissionModal
        isOpen={isAdmissionModalOpen}
        onClose={() => setIsAdmissionModalOpen(false)}
      />
    </div>
  );
}
