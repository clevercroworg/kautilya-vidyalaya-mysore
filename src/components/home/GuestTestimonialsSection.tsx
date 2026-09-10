"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ScrollRevealText, FadeUp } from "@/components/ui/MotionPrimitives";
import { guestTestimonials } from "@/data/siteData";

export default function GuestTestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  const prev = () => {
    setDirection(-1);
    setCurrentIndex((c) => (c === 0 ? guestTestimonials.length - 1 : c - 1));
  };

  const next = () => {
    setDirection(1);
    setCurrentIndex((c) => (c === guestTestimonials.length - 1 ? 0 : c + 1));
  };

  const goTo = (i: number) => {
    setDirection(i > currentIndex ? 1 : -1);
    setCurrentIndex(i);
  };

  // Smooth auto-scroll every 3 seconds
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((c) => (c === guestTestimonials.length - 1 ? 0 : c + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const item = guestTestimonials[currentIndex];

  return (
    <section className="py-20 sm:py-32 bg-[#f8f9fa] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Centered Heading with Scroll Reveal from Down */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <ScrollRevealText
            text="Guest Testimonials"
            as="h2"
            className="text-4xl sm:text-6xl font-black mb-4"
            colorClass="text-[#001744]"
          />
        </div>

        {/* Showcase Card with Smooth 3s Auto-Scroll */}
        <FadeUp delay={0.25}>
          <div
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            className="max-w-4xl mx-auto bg-white rounded-xl p-6 sm:p-10 shadow-xl border border-slate-100 relative overflow-hidden"
          >
            {/* Animated Card Content */}
            <div className="relative min-h-[240px] sm:min-h-[170px] flex items-center">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={{
                    enter: (dir: number) => ({
                      opacity: 0,
                      x: dir > 0 ? 35 : -35,
                    }),
                    center: {
                      opacity: 1,
                      x: 0,
                      transition: {
                        duration: 0.45,
                        ease: [0.25, 1, 0.5, 1],
                      },
                    },
                    exit: (dir: number) => ({
                      opacity: 0,
                      x: dir > 0 ? -35 : 35,
                      transition: {
                        duration: 0.35,
                        ease: [0.25, 1, 0.5, 1],
                      },
                    }),
                  }}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="w-full flex flex-col sm:flex-row items-center sm:items-start gap-8"
                >
                  {/* Circular Avatar */}
                  <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden shrink-0 border-4 border-yellow-400/40 shadow-md bg-slate-100">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      sizes="120px"
                      className="object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1 text-center sm:text-left">
                    <p className="text-slate-700 text-base sm:text-lg leading-relaxed italic mb-6">
                      “{item.text}”
                    </p>

                    <div>
                      <h4 className="text-lg sm:text-xl font-extrabold text-[#001744]">
                        {item.name}
                      </h4>
                      <p className="text-xs sm:text-sm font-semibold text-yellow-600 mt-0.5">
                        {item.role}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Controls */}
            <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                {guestTestimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
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
                  onClick={prev}
                  className="p-2.5 rounded-full border border-slate-200 hover:bg-[#001744] hover:text-white text-slate-700 transition-colors shadow-sm active:scale-95"
                  aria-label="Previous"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={next}
                  className="p-2.5 rounded-full border border-slate-200 hover:bg-[#001744] hover:text-white text-slate-700 transition-colors shadow-sm active:scale-95"
                  aria-label="Next"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
