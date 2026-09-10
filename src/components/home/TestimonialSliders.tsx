"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  Quote,
  Star,
  GraduationCap,
  Users,
  Award,
} from "lucide-react";
import {
  parentTestimonials,
  alumniTestimonials,
  guestTestimonials,
} from "@/data/siteData";

export default function TestimonialSliders() {
  const [activeTab, setActiveTab] = useState<"parent" | "alumni" | "guest">("parent");
  const [currentIndex, setCurrentIndex] = useState(0);

  const getActiveList = () => {
    switch (activeTab) {
      case "parent":
        return parentTestimonials;
      case "alumni":
        return alumniTestimonials;
      case "guest":
        return guestTestimonials;
    }
  };

  const list = getActiveList();

  // Reset index when changing tabs
  useEffect(() => {
    setCurrentIndex(0);
  }, [activeTab]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? list.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === list.length - 1 ? 0 : prev + 1));
  };

  const currentItem = list[currentIndex] || list[0];

  return (
    <section className="py-20 sm:py-28 bg-[#001744] text-white relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-white/10 text-[#FFD907] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-white/10">
            <Quote className="w-3.5 h-3.5" />
            <span>Community Stories</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight">
            Voices of Kautilya
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            Hear from parents, accomplished alumni, and visiting dignitaries who have witnessed the enduring impact of our holistic education.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mb-12">
          <button
            onClick={() => setActiveTab("parent")}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold transition-all ${
              activeTab === "parent"
                ? "bg-[#FFD907] text-[#001744] shadow-lg scale-105"
                : "bg-white/10 text-slate-300 hover:bg-white/15"
            }`}
          >
            <Users className="w-4 h-4" />
            <span>Parent Testimonials ({parentTestimonials.length})</span>
          </button>

          <button
            onClick={() => setActiveTab("alumni")}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold transition-all ${
              activeTab === "alumni"
                ? "bg-[#FFD907] text-[#001744] shadow-lg scale-105"
                : "bg-white/10 text-slate-300 hover:bg-white/15"
            }`}
          >
            <GraduationCap className="w-4 h-4" />
            <span>Alumni Speak ({alumniTestimonials.length})</span>
          </button>

          <button
            onClick={() => setActiveTab("guest")}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold transition-all ${
              activeTab === "guest"
                ? "bg-[#FFD907] text-[#001744] shadow-lg scale-105"
                : "bg-white/10 text-slate-300 hover:bg-white/15"
            }`}
          >
            <Award className="w-4 h-4" />
            <span>Guest Dignitaries ({guestTestimonials.length})</span>
          </button>
        </div>

        {/* Testimonial Showcase Card (Clean, Fixed, Never Cramped) */}
        <div className="max-w-4xl mx-auto bg-white rounded-xl p-6 sm:p-10 shadow-2xl text-slate-800 relative transition-all duration-300">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8">
            {/* Speaker Image */}
            <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-2xl overflow-hidden shrink-0 shadow-lg border-2 border-yellow-400/50 bg-slate-100">
              <Image
                src={currentItem.image}
                alt={currentItem.name}
                fill
                sizes="150px"
                className="object-cover"
              />
            </div>

            {/* Content & Quote */}
            <div className="flex-1 text-center sm:text-left">
              {/* Star Rating */}
              <div className="flex items-center justify-center sm:justify-start gap-1 text-amber-400 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>

              {/* Quote Text */}
              <p className="text-slate-700 text-base sm:text-lg leading-relaxed italic mb-6">
                “{currentItem.text}”
              </p>

              {/* Name & Role */}
              <div>
                <h4 className="text-lg sm:text-xl font-extrabold text-[#001744]">
                  {currentItem.name}
                </h4>
                <p className="text-xs sm:text-sm font-semibold text-yellow-600 mt-0.5">
                  {currentItem.role}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              {list.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`h-2.5 rounded-full transition-all ${
                    i === currentIndex
                      ? "w-8 bg-[#001744]"
                      : "w-2.5 bg-slate-200 hover:bg-slate-300"
                  }`}
                  aria-label={`Slide ${i + 1}`}
                />
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={prevSlide}
                className="p-2.5 rounded-full border border-slate-200 hover:bg-[#001744] hover:text-white text-slate-700 transition-colors shadow-sm"
                aria-label="Previous Testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                className="p-2.5 rounded-full border border-slate-200 hover:bg-[#001744] hover:text-white text-slate-700 transition-colors shadow-sm"
                aria-label="Next Testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
