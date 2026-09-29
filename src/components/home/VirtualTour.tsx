"use client";

import React from "react";
import { ScrollRevealText, FadeUp } from "@/components/ui/MotionPrimitives";

export default function VirtualTour() {
  return (
    <section className="py-20 sm:py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Centered Heading with Scroll Reveal */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <ScrollRevealText
            text="Virtual Tour"
            as="h2"
            className="text-4xl sm:text-6xl font-black mb-4"
            colorClass="text-[#001744]"
          />
          <FadeUp delay={0.25}>
            <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Explore the welcoming and student-friendly environment of our institution. Walk through a campus built to ensure safety, comfort, and holistic growth.
            </p>
          </FadeUp>
        </div>

        {/* 360 Iframe Viewer with smooth fade-up */}
        <FadeUp delay={0.35}>
          <div className="max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl border border-slate-200 aspect-[16/10] sm:aspect-[16/9] bg-slate-950 relative">
            <iframe
              loading="lazy"
              src="https://www.turiya.co/360/Kautilya/"
              title="Kautilya Vidyalaya Virtual Tour"
              className="w-full h-full border-0"
              allow="accelerometer; magnetometer; gyroscope; fullscreen; xr-spatial-tracking"
              allowFullScreen
            />
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
