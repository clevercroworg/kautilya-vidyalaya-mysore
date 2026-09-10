"use client";

import React, { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppWidget from "@/components/ui/WhatsAppWidget";
import AdmissionModal from "@/components/ui/AdmissionModal";
import InnerPageHero from "@/components/ui/InnerPageHero";
import rawData from "@/data/podcastData.json";
import { PodcastEpisode, PodcastSeriesData } from "@/types/podcast";
import {
  Mic,
  Play,
  X,
  Clock,
  Sparkles,
  Share2,
  ExternalLink,
  Headphones,
  Check,
  Tv,
  Users,
} from "lucide-react";

const seriesData = rawData as PodcastSeriesData;

function getYouTubeThumbnail(youtubeId: string): string {
  return `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`;
}

export default function PodcastClientView() {
  const [isAdmissionModalOpen, setIsAdmissionModalOpen] = useState(false);
  const [activeVideo, setActiveVideo] = useState<PodcastEpisode | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [copiedId, setCopiedId] = useState<string | null>(null);

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

  // Categories extraction
  const categories = useMemo(() => {
    const cats = new Set<string>();
    seriesData.episodes.forEach((ep) => cats.add(ep.category));
    return ["All", ...Array.from(cats)];
  }, []);

  // Filtered episodes
  const filteredEpisodes = useMemo(() => {
    if (selectedCategory === "All") return seriesData.episodes;
    return seriesData.episodes.filter((ep) => ep.category === selectedCategory);
  }, [selectedCategory]);

  const featuredEpisode = useMemo(() => {
    return seriesData.episodes.find((ep) => ep.featured) || seriesData.episodes[0];
  }, []);

  const handleShare = async (episode: PodcastEpisode, e: React.MouseEvent) => {
    e.stopPropagation();
    const url = `https://www.youtube.com/watch?v=${episode.youtubeId}`;
    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(url);
        setCopiedId(episode.id);
        setTimeout(() => setCopiedId(null), 2500);
      } catch {
        window.open(url, "_blank");
      }
    } else {
      window.open(url, "_blank");
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-800 selection:bg-[#FFD907] selection:text-[#001744]">
      <Navbar onOpenAdmissionModal={() => setIsAdmissionModalOpen(true)} />

      <main className="flex-grow">
        {/* HERO SECTION */}
        <InnerPageHero
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Media & Broadcast" },
            { label: "Podcast" },
          ]}
          badge={{
            text: "Official School Podcast",
            icon: Mic,
          }}
          title={seriesData.seriesTitle}
          subtitle={seriesData.tagline}
          waveFillColor="#f8fafc"
        />

        {/* PODCAST QUICK STATS STRIP */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 sm:-mt-8 relative z-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            <div className="bg-white p-5 rounded-2xl shadow-lg border border-slate-100 text-center">
              <p className="text-2xl sm:text-3xl font-black text-[#001744]">
                {seriesData.totalEpisodes}
              </p>
              <p className="text-xs sm:text-sm font-bold text-slate-500 uppercase tracking-wider mt-1">
                Released Episodes
              </p>
            </div>
            <div className="bg-white p-5 rounded-2xl shadow-lg border border-slate-100 text-center">
              <p className="text-2xl sm:text-3xl font-black text-[#001744]">
                HD Video
              </p>
              <p className="text-xs sm:text-sm font-bold text-slate-500 uppercase tracking-wider mt-1">
                Full Conversations
              </p>
            </div>
            <div className="bg-white p-5 rounded-2xl shadow-lg border border-slate-100 text-center">
              <p className="text-2xl sm:text-3xl font-black text-[#001744]">
                Pedagogy & Health
              </p>
              <p className="text-xs sm:text-sm font-bold text-slate-500 uppercase tracking-wider mt-1">
                Expert Focus
              </p>
            </div>
            <div className="bg-white p-5 rounded-2xl shadow-lg border border-slate-100 text-center">
              <p className="text-2xl sm:text-3xl font-black text-[#001744]">
                100% Free
              </p>
              <p className="text-xs sm:text-sm font-bold text-slate-500 uppercase tracking-wider mt-1">
                On Official YouTube
              </p>
            </div>
          </div>
        </section>

        {/* FEATURED EPISODE HERO SPOTLIGHT */}
        {featuredEpisode && (
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8">
            <div className="bg-gradient-to-br from-[#001744] via-[#052669] to-[#001744] rounded-3xl p-6 sm:p-10 text-white shadow-xl relative overflow-hidden">
              {/* Decorative background glow */}
              <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-[#FFD907]/15 blur-3xl pointer-events-none" />
              <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-blue-500/20 blur-3xl pointer-events-none" />

              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Thumbnail / Play trigger */}
                <div className="lg:col-span-7">
                  <div
                    onClick={() => setActiveVideo(featuredEpisode)}
                    className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl group cursor-pointer border-2 border-white/10"
                  >
                    <Image
                      src={getYouTubeThumbnail(featuredEpisode.youtubeId)}
                      alt={featuredEpisode.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />

                    {/* Animated Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 sm:w-20 h-16 sm:h-20 rounded-full bg-[#FFD907] text-[#001744] flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                        <Play className="w-8 h-8 fill-current ml-1" />
                      </div>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs sm:text-sm font-semibold text-white/90">
                      <span className="bg-black/60 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-[#FFD907]" />
                        {featuredEpisode.duration}
                      </span>
                      <span className="bg-[#FFD907] text-[#001744] font-bold px-3 py-1 rounded-full">
                        Featured Launch
                      </span>
                    </div>
                  </div>
                </div>

                {/* Info */}
                <div className="lg:col-span-5 space-y-4">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-[#FFD907] text-xs font-extrabold uppercase tracking-wider backdrop-blur-md">
                    <Sparkles className="w-3.5 h-3.5" />
                    Episode 0{featuredEpisode.episodeNumber} • {featuredEpisode.category}
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-black leading-tight text-white">
                    {featuredEpisode.title}
                  </h2>

                  <p className="text-slate-300 text-sm leading-relaxed">
                    {featuredEpisode.description}
                  </p>

                  <div className="flex items-center gap-3 pt-2 text-sm text-slate-300">
                    <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-[#FFD907]">
                      <Users className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 font-medium">Guest Speakers</p>
                      <p className="font-bold text-white">{featuredEpisode.guest}</p>
                    </div>
                  </div>

                  <div className="pt-4 flex flex-wrap items-center gap-3">
                    <button
                      onClick={() => setActiveVideo(featuredEpisode)}
                      className="px-6 py-3 rounded-xl bg-[#FFD907] text-[#001744] font-black text-sm hover:bg-yellow-400 transition-colors shadow-lg flex items-center gap-2"
                    >
                      <Play className="w-4 h-4 fill-current" />
                      Watch Launch Episode
                    </button>

                    <button
                      onClick={(e) => handleShare(featuredEpisode, e)}
                      className="px-4 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm transition-colors flex items-center gap-2"
                    >
                      {copiedId === featuredEpisode.id ? (
                        <>
                          <Check className="w-4 h-4 text-emerald-400" />
                          <span>Link Copied!</span>
                        </>
                      ) : (
                        <>
                          <Share2 className="w-4 h-4" />
                          <span>Share</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* EPISODES GRID & CATEGORY FILTER */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-8 border-b border-slate-200">
            <div>
              <div className="flex items-center gap-2 text-[#001744] font-black text-xl sm:text-2xl">
                <Headphones className="w-6 h-6 text-yellow-500" />
                <h3>All Conversations ({seriesData.episodes.length})</h3>
              </div>
              <p className="text-slate-600 text-sm mt-1">
                Explore in-depth discussions on child wellness, academics, and creative growth.
              </p>
            </div>

            {/* Category Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
              {categories.map((cat) => {
                const isSelected = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all ${
                      isSelected
                        ? "bg-[#001744] text-white shadow-md shadow-blue-950/20"
                        : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>

          {/* EPISODE CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 pt-8">
            {filteredEpisodes.map((episode, idx) => (
              <motion.div
                key={episode.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                className="bg-white rounded-2xl shadow-sm hover:shadow-xl border border-slate-200/80 overflow-hidden flex flex-col group transition-all duration-300"
              >
                {/* Thumbnail */}
                <div
                  onClick={() => setActiveVideo(episode)}
                  className="relative aspect-video bg-slate-900 cursor-pointer overflow-hidden"
                >
                  <Image
                    src={getYouTubeThumbnail(episode.youtubeId)}
                    alt={episode.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-[#FFD907] text-[#001744] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <Play className="w-6 h-6 fill-current ml-0.5" />
                    </div>
                  </div>

                  {/* Badges */}
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <span className="bg-[#001744]/80 backdrop-blur-md text-[#FFD907] text-[11px] font-extrabold px-2.5 py-1 rounded-full uppercase tracking-wider">
                      EP 0{episode.episodeNumber}
                    </span>
                  </div>

                  <div className="absolute bottom-3 right-3">
                    <span className="bg-black/70 backdrop-blur-md text-white text-xs font-semibold px-2.5 py-1 rounded-md flex items-center gap-1">
                      <Clock className="w-3 h-3 text-[#FFD907]" />
                      {episode.duration}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6 flex flex-col flex-grow justify-between space-y-4">
                  <div>
                    <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                      <span className="font-bold text-yellow-600 uppercase tracking-wider">
                        {episode.category}
                      </span>
                      <span>{episode.date}</span>
                    </div>

                    <h4
                      onClick={() => setActiveVideo(episode)}
                      className="font-bold text-base sm:text-lg text-slate-900 line-clamp-2 hover:text-blue-900 cursor-pointer transition-colors leading-snug"
                    >
                      {episode.title}
                    </h4>

                    <div className="flex items-center gap-2 text-xs text-slate-600 mt-2 font-medium">
                      <Users className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span className="line-clamp-1">{episode.guest}</span>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-500 mt-3 line-clamp-2 leading-relaxed">
                      {episode.description}
                    </p>
                  </div>

                  {/* Action Bar */}
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <button
                      onClick={() => setActiveVideo(episode)}
                      className="text-xs sm:text-sm font-extrabold text-[#001744] hover:text-blue-700 flex items-center gap-1.5 transition-colors"
                    >
                      <Play className="w-3.5 h-3.5 fill-current" />
                      Watch Video
                    </button>

                    <button
                      onClick={(e) => handleShare(episode, e)}
                      title="Share Episode Link"
                      className="p-2 rounded-lg text-slate-400 hover:text-[#001744] hover:bg-slate-100 transition-colors"
                    >
                      {copiedId === episode.id ? (
                        <Check className="w-4 h-4 text-emerald-500" />
                      ) : (
                        <Share2 className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* YOUTUBE CHANNEL CTA STRIP */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-10 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-5">
              <div className="w-14 h-14 rounded-2xl bg-red-600 text-white flex items-center justify-center shrink-0 shadow-lg shadow-red-600/20">
                <Tv className="w-7 h-7" />
              </div>
              <div>
                <h4 className="text-lg sm:text-xl font-black text-[#001744]">
                  Kautilya Vidyalaya Official YouTube Channel
                </h4>
                <p className="text-slate-600 text-sm mt-0.5">
                  Subscribe to receive alerts for new podcast episodes, annual day streams, and student accomplishments.
                </p>
              </div>
            </div>

            <a
              href={seriesData.channelUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-sm transition-colors shadow-md flex items-center gap-2 shrink-0"
            >
              <span>Visit YouTube Channel</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </section>
      </main>

      {/* VIDEO POPUP MODAL */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 sm:p-6"
            onClick={() => setActiveVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-slate-950 text-white w-full max-w-4xl rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-slate-800"
            >
              {/* Modal Header */}
              <div className="p-4 sm:p-5 flex items-center justify-between border-b border-slate-800 bg-slate-900/60">
                <div className="flex items-center gap-3">
                  <span className="bg-[#FFD907] text-[#001744] text-xs font-black px-2.5 py-1 rounded-full uppercase">
                    EP 0{activeVideo.episodeNumber}
                  </span>
                  <h4 className="font-bold text-sm sm:text-base text-white line-clamp-1">
                    {activeVideo.title}
                  </h4>
                </div>
                <button
                  onClick={() => setActiveVideo(null)}
                  className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* YouTube Iframe Player */}
              <div className="relative aspect-video w-full bg-black">
                <iframe
                  src={`https://www.youtube.com/embed/${activeVideo.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
                  title={activeVideo.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full border-0"
                />
              </div>

              {/* Modal Footer Description */}
              <div className="p-4 sm:p-6 bg-slate-900/90 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <p className="text-xs text-[#FFD907] font-bold uppercase tracking-wider">
                    {activeVideo.category} • Guest: {activeVideo.guest}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-300 mt-1">
                    {activeVideo.description}
                  </p>
                </div>

                <a
                  href={`https://www.youtube.com/watch?v=${activeVideo.youtubeId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg bg-red-600/20 text-red-400 hover:bg-red-600 hover:text-white text-xs font-bold transition-colors flex items-center gap-1.5 shrink-0 self-start sm:self-auto"
                >
                  <span>Open in YouTube</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          </motion.div>
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
