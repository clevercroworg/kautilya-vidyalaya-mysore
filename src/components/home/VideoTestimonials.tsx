"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Play, ArrowRight, Quote, Sparkles } from "lucide-react";

export default function VideoTestimonials() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const videos = [
    {
      id: "998Wv4kMBzs",
      title: "Parent Experience & Community Trust",
      speaker: "Parent Perspective",
      thumbnail: "https://img.youtube.com/vi/998Wv4kMBzs/hqdefault.jpg",
    },
    {
      id: "W_mRJid7N28",
      title: "Holistic Schooling & Academic Growth",
      speaker: "Parent Perspective",
      thumbnail: "https://img.youtube.com/vi/W_mRJid7N28/hqdefault.jpg",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-800 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5 text-yellow-600" />
              <span>Voices of Trust</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#001744] tracking-tight">
              Happy Parents, Confident Futures
            </h2>
            <p className="mt-3 text-slate-600 text-base sm:text-lg">
              Hear directly from our parents about their experience, trust, and satisfaction with Kautilya Vidyalaya.
            </p>
          </div>

          <Link
            href="/parent-perspectives"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#001744] hover:text-blue-700 transition-colors group"
          >
            <span>View More Parent Stories</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Video Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {videos.map((vid) => (
            <div
              key={vid.id}
              className="bg-slate-900 rounded-2xl overflow-hidden shadow-lg border border-slate-800 relative group aspect-[16/9] flex items-center justify-center"
            >
              {activeVideo === vid.id ? (
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${vid.id}?autoplay=1`}
                  title={vid.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              ) : (
                <>
                  {/* Thumbnail */}
                  <img
                    src={vid.thumbnail}
                    alt={vid.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                  {/* Play Button */}
                  <button
                    onClick={() => setActiveVideo(vid.id)}
                    className="absolute z-10 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#FFD907] text-[#001744] flex items-center justify-center shadow-2xl group-hover:scale-110 transition-all duration-300"
                    aria-label={`Play ${vid.title}`}
                  >
                    <Play className="w-8 h-8 fill-current ml-1" />
                  </button>

                  {/* Video Info Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 z-10 text-white">
                    <p className="text-xs uppercase font-bold text-[#FFD907] mb-1">
                      {vid.speaker}
                    </p>
                    <h3 className="text-base sm:text-lg font-bold drop-shadow">
                      {vid.title}
                    </h3>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
