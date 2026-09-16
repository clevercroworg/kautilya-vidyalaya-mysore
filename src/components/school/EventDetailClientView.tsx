"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppWidget from "@/components/ui/WhatsAppWidget";
import AdmissionModal from "@/components/ui/AdmissionModal";
import { EventDetail, eventsDetailData } from "@/data/eventsDetailData";
import {
  Calendar,
  MapPin,
  Users,
  Tag,
  ArrowLeft,
  ArrowRight,
  Sparkles,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  GraduationCap,
  Share2,
  Check,
} from "lucide-react";

interface EventDetailClientViewProps {
  event: EventDetail;
}

export default function EventDetailClientView({ event }: EventDetailClientViewProps) {
  const [isAdmissionModalOpen, setIsAdmissionModalOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [copied, setCopied] = useState(false);

  // Related events (excluding current)
  const relatedEvents = eventsDetailData
    .filter((e) => e.slug !== event.slug)
    .slice(0, 3);

  // Keyboard navigation for lightbox
  const handlePrevImage = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev === 0 ? event.gallery.length - 1 : (prev ?? 0) - 1));
  }, [lightboxIndex, event.gallery.length]);

  const handleNextImage = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev === event.gallery.length - 1 ? 0 : (prev ?? 0) + 1));
  }, [lightboxIndex, event.gallery.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowLeft") handlePrevImage();
      if (e.key === "ArrowRight") handleNextImage();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, handlePrevImage, handleNextImage]);

  // Lock scroll when lightbox is open
  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightboxIndex]);

  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: event.title,
          text: event.description,
          url: window.location.href,
        })
        .catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-800 selection:bg-[#FFD907] selection:text-[#001744]">
      {/* Header & Navigation */}
      <Navbar onOpenAdmissionModal={() => setIsAdmissionModalOpen(true)} />

      <main className="flex-grow">
        {/* 1. HERO BANNER WITH BREADCRUMB & EVENT METADATA */}
        <section className="relative bg-[#001744] text-white pt-10 sm:pt-14 pb-12 overflow-hidden border-b border-white/10">
          {/* Subtle Ambient Background */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <Image
              src={event.coverImage}
              alt={event.title}
              fill
              priority
              className="object-cover opacity-15 mix-blend-luminosity blur-xs scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#001744]/90 via-[#001744]/85 to-[#001744]" />
            <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:24px_24px]" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Breadcrumb Navigation */}
            <div className="flex items-center justify-between gap-4 mb-6 flex-wrap">
              <nav className="flex items-center gap-2 text-xs sm:text-sm text-slate-300" aria-label="Breadcrumb">
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
                <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                <Link href="/events-gallery" className="hover:text-white transition-colors">
                  Events & Gallery
                </Link>
                <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                <span className="text-[#FFD907] font-semibold truncate max-w-[200px] sm:max-w-md">
                  {event.shortTitle || event.title}
                </span>
              </nav>

              <Link
                href="/events-gallery"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white text-xs font-bold px-3.5 py-1.5 rounded-full backdrop-blur-sm transition-all border border-white/10"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>All Events</span>
              </Link>
            </div>

            {/* Category Badge & Title */}
            <div className="max-w-3xl space-y-4">
              <div className="inline-flex items-center gap-2 bg-[#FFD907] text-[#001744] px-3.5 py-1 rounded-full text-xs font-black shadow-sm">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{event.category}</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                {event.title}
              </h1>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
                {event.description}
              </p>
            </div>

            {/* Quick Event Metadata Pills */}
            <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center gap-4 sm:gap-6 text-xs sm:text-sm text-slate-200">
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-3.5 py-2 rounded-xl">
                <Calendar className="w-4 h-4 text-[#FFD907]" />
                <span className="font-semibold">{event.date}</span>
              </div>

              <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-3.5 py-2 rounded-xl">
                <MapPin className="w-4 h-4 text-[#38bdf8]" />
                <span className="font-semibold">{event.location}</span>
              </div>

              <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-3.5 py-2 rounded-xl">
                <Users className="w-4 h-4 text-emerald-400" />
                <span className="font-semibold">{event.attendees}</span>
              </div>

              <button
                onClick={handleShare}
                className="ml-auto inline-flex items-center gap-1.5 bg-white/10 hover:bg-white/20 text-white px-3.5 py-2 rounded-xl transition-colors text-xs font-bold border border-white/10"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>Link Copied!</span>
                  </>
                ) : (
                  <>
                    <Share2 className="w-4 h-4" />
                    <span>Share Event</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </section>

        {/* 2. PHOTO GALLERY SHOWCASE (HERO FEATURE) */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="mb-8 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold text-blue-600 uppercase tracking-wider mb-2">
                <Tag className="w-3.5 h-3.5" />
                <span>Event Photo Gallery</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-[#001744]">
                Moments & Visual Highlights
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-1">
                Click any photograph to view high-resolution imagery and detailed captions.
              </p>
            </div>

            <span className="text-xs font-bold text-slate-500 bg-slate-100 px-3 py-1.5 rounded-full border border-slate-200">
              {event.gallery.length} Photographs
            </span>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
            {event.gallery.map((photo, idx) => (
              <motion.div
                key={photo.url + idx}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25 }}
                className="group relative rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-2xl border border-slate-200/80 cursor-pointer flex flex-col"
                onClick={() => setLightboxIndex(idx)}
              >
                <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-slate-900">
                  <Image
                    src={photo.url}
                    alt={photo.caption}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                  {/* Expand badge */}
                  <div className="absolute top-3.5 right-3.5 bg-black/60 hover:bg-black text-white p-2 rounded-xl backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all transform group-hover:scale-105">
                    <Maximize2 className="w-4 h-4" />
                  </div>

                  {/* Photo Counter Pill */}
                  <div className="absolute top-3.5 left-3.5 bg-[#001744]/80 text-[#FFD907] text-[11px] font-extrabold px-2.5 py-1 rounded-full backdrop-blur-md border border-white/10">
                    Photo {idx + 1}
                  </div>

                  {/* Bottom Caption Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 text-white">
                    <p className="text-sm sm:text-base font-bold leading-snug line-clamp-2 drop-shadow-sm">
                      {photo.caption}
                    </p>
                    <span className="inline-flex items-center gap-1 text-xs text-[#FFD907] font-semibold mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      <span>Click to expand</span>
                      <ChevronRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 3. EVENT NARRATIVE & HIGHLIGHTS */}
        <section className="bg-white border-y border-slate-200/80 py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
              {/* Left Column: Detailed Narrative */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 text-xs font-bold text-blue-600 uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>The Story & Journey</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-black text-[#001744] leading-tight">
                  About This Event Experience
                </h2>

                <div className="space-y-4 text-slate-700 text-base sm:text-lg leading-relaxed">
                  {event.detailedParagraphs.map((para, idx) => (
                    <p key={idx} className="first:font-medium first:text-slate-800">
                      {para}
                    </p>
                  ))}
                </div>

                {/* Educational Outcomes */}
                {event.learningOutcomes && event.learningOutcomes.length > 0 && (
                  <div className="mt-8 pt-8 border-t border-slate-200">
                    <h3 className="text-lg font-extrabold text-[#001744] mb-3 flex items-center gap-2">
                      <GraduationCap className="w-5 h-5 text-blue-600" />
                      <span>Developmental & Educational Outcomes</span>
                    </h3>
                    <ul className="space-y-2.5">
                      {event.learningOutcomes.map((outcome, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-sm sm:text-base text-slate-700">
                          <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Right Column: Key Event Highlights Card */}
              <div className="lg:col-span-5 bg-gradient-to-br from-slate-50 to-blue-50/40 rounded-2xl p-6 sm:p-8 border border-blue-100 shadow-sm space-y-6">
                <div className="flex items-center gap-2.5 border-b border-blue-100 pb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#001744] text-[#FFD907] flex items-center justify-center font-bold">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-[#001744]">Key Highlights</h3>
                    <p className="text-xs text-slate-500">Memorable milestones of this event</p>
                  </div>
                </div>

                <div className="space-y-3.5">
                  {event.highlights.map((highlight, idx) => (
                    <div
                      key={idx}
                      className="bg-white rounded-xl p-3.5 border border-slate-200/80 shadow-xs flex items-start gap-3"
                    >
                      <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 font-extrabold text-xs flex items-center justify-center shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <p className="text-xs sm:text-sm font-semibold text-slate-700 leading-relaxed">
                        {highlight}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Admission / Contact CTA Box */}
                <div className="pt-4 border-t border-blue-100/80 space-y-3">
                  <p className="text-xs text-slate-600 font-medium">
                    Want your child to participate in such transformative events and celebrations?
                  </p>
                  <button
                    onClick={() => setIsAdmissionModalOpen(true)}
                    className="w-full flex items-center justify-center gap-2 bg-[#001744] hover:bg-[#002b7a] text-[#FFD907] font-extrabold py-3 rounded-xl text-xs sm:text-sm shadow-md transition-all active:scale-[0.99]"
                  >
                    <GraduationCap className="w-4 h-4" />
                    <span>Apply for Admissions 2027-28</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. EXPLORE OTHER EVENTS (RELATED CAROUSEL/GRID) */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-10">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold text-blue-600 uppercase tracking-wider mb-2">
                <Calendar className="w-3.5 h-3.5" />
                <span>More Celebrations</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-[#001744]">
                Explore Other School Events
              </h2>
            </div>

            <Link
              href="/events-gallery"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-blue-600 hover:text-[#001744] transition-colors"
            >
              <span>View All 15+ Events</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedEvents.map((relEvent) => (
              <Link
                key={relEvent.slug}
                href={`/events-gallery/${relEvent.slug}`}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 border border-slate-100 flex flex-col justify-between"
              >
                <div className="relative h-52 w-full bg-slate-900 overflow-hidden">
                  <Image
                    src={relEvent.coverImage}
                    alt={relEvent.title}
                    fill
                    sizes="(max-width: 640px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-[#001744]/90 text-[#FFD907] text-[11px] font-bold px-3 py-1 rounded-full backdrop-blur-sm shadow">
                    {relEvent.date}
                  </div>
                </div>

                <div className="p-5 flex-grow flex flex-col justify-between">
                  <div className="space-y-1.5">
                    <span className="text-[11px] font-extrabold text-blue-600 uppercase tracking-wide">
                      {relEvent.category}
                    </span>
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-[#001744] transition-colors line-clamp-2">
                      {relEvent.title}
                    </h3>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#001744]">
                    <span>View Event Gallery</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>

      {/* 5. INTERACTIVE LIGHTBOX MODAL */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <div
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
            onClick={() => setLightboxIndex(null)}
          >
            {/* Top Toolbar */}
            <div
              className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between text-white"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-black/60 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold border border-white/10">
                <span>
                  Photo {lightboxIndex + 1} of {event.gallery.length}
                </span>
              </div>

              <button
                onClick={() => setLightboxIndex(null)}
                className="p-2.5 rounded-full bg-black/60 hover:bg-white hover:text-black text-white transition-colors border border-white/10"
                aria-label="Close preview"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Left Arrow Button */}
            {event.gallery.length > 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrevImage();
                }}
                className="absolute left-3 sm:left-6 z-20 p-3 rounded-full bg-black/60 hover:bg-white hover:text-black text-white transition-all border border-white/10 hover:scale-105"
                aria-label="Previous photograph"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
            )}

            {/* Right Arrow Button */}
            {event.gallery.length > 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleNextImage();
                }}
                className="absolute right-3 sm:right-6 z-20 p-3 rounded-full bg-black/60 hover:bg-white hover:text-black text-white transition-all border border-white/10 hover:scale-105"
                aria-label="Next photograph"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            )}

            {/* Image Preview Container */}
            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.2 }}
              className="relative max-w-5xl w-full h-[70vh] sm:h-[80vh] flex flex-col justify-center items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-full">
                <Image
                  src={event.gallery[lightboxIndex].url}
                  alt={event.gallery[lightboxIndex].caption}
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              {/* Lightbox Caption bar */}
              <div className="mt-3 bg-black/70 backdrop-blur-md px-5 py-2.5 rounded-xl max-w-2xl text-center border border-white/10">
                <p className="text-white text-xs sm:text-sm font-medium">
                  {event.gallery[lightboxIndex].caption}
                </p>
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
