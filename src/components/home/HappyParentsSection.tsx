"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Play, ArrowRight, X } from "lucide-react";
import { ScrollRevealText, FadeUp } from "@/components/ui/MotionPrimitives";

export default function HappyParentsSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="py-20 sm:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Column: Heading and Text with Scroll Reveal */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            <ScrollRevealText
              text="Happy Parents, Confident Futures"
              as="h3"
              className="text-3xl sm:text-5xl font-black leading-tight"
              colorClass="text-[#001744]"
            />
            <FadeUp delay={0.2}>
              <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-lg mx-auto lg:mx-0">
                Hear directly from our parents about their experience, trust, and satisfaction with Kautilya Vidyalaya.
              </p>
            </FadeUp>
            <FadeUp delay={0.35}>
              <Link
                href="/parent-perspectives"
                className="inline-flex items-center gap-2.5 bg-[#001744] hover:bg-[#002b7a] text-white font-bold px-7 py-3.5 rounded-full text-sm shadow-md hover:shadow-xl transition-all group"
              >
                <span>View More Parent Stories</span>
                <ArrowRight className="w-4 h-4 text-[#FFD907] transition-transform group-hover:translate-x-1" />
              </Link>
            </FadeUp>
          </div>

          {/* Right Column: Video Play Card with 120px Button */}
          <FadeUp delay={0.25} className="lg:col-span-6">
            <div className="relative rounded-xl overflow-hidden shadow-2xl bg-slate-900 aspect-[16/10] sm:aspect-[16/9] group border border-slate-100">
              <Image
                src="/images/testimonials/kautilya-google-reviews-card.png"
                alt="Parent Testimonial Preview"
                fill
                className="object-cover opacity-85 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />

              {/* Large Centered Circular Play Button (120px) */}
              <button
                onClick={() => setIsPlaying(true)}
                className="absolute inset-0 m-auto w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-white text-[#001744] flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300"
                aria-label="Play Parent Testimonial Video"
              >
                <Play className="w-10 h-10 sm:w-12 sm:h-12 fill-current ml-1" />
              </button>
            </div>
          </FadeUp>
        </div>
      </div>

      {/* Video Popup Modal */}
      {isPlaying && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setIsPlaying(false)}
        >
          <div
            className="relative max-w-4xl w-full aspect-[16/9] bg-black rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsPlaying(false)}
              className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/60 hover:bg-white hover:text-black text-white transition-colors"
              aria-label="Close video"
            >
              <X className="w-6 h-6" />
            </button>
            <iframe
              src="https://www.youtube.com/embed/998Wv4kMBzs?autoplay=1"
              title="Happy Parents, Confident Futures"
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  );
}
