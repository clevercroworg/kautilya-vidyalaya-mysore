"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";
import { ScrollRevealText, FadeUp } from "@/components/ui/MotionPrimitives";

interface AdmissionOpenBannerProps {
  onOpenModal: () => void;
}

export default function AdmissionOpenBanner({
  onOpenModal,
}: AdmissionOpenBannerProps) {
  return (
    <section className="relative w-full py-24 sm:py-32 overflow-hidden">
      {/* Background Cover Image with dark overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/kautilya-campus-reception.jpg"
          alt="Kautilya Vidyalaya Campus Reception"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/80" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-8 text-center text-white">
        <FadeUp delay={0.1}>
          <div className="inline-flex items-center gap-2 bg-[#FFD907] text-[#001744] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-5 shadow-lg">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Academic Year 2027-28</span>
          </div>
        </FadeUp>

        <ScrollRevealText
          text="Admission OPEN"
          as="h2"
          className="text-4xl sm:text-6xl lg:text-7xl font-black mb-4"
          colorClass="text-white"
          delay={0.15}
        />

        <FadeUp delay={0.3}>
          <p className="text-xl sm:text-2xl text-slate-200 font-medium mb-8">
            Open Registration for 2027-28
          </p>
        </FadeUp>

        <FadeUp delay={0.45}>
          <button
            onClick={onOpenModal}
            className="inline-flex items-center gap-2 bg-[#FFD907] hover:bg-yellow-400 text-[#001744] font-black px-9 py-4 rounded-full text-base shadow-2xl transition-all transform hover:-translate-y-1 hover:scale-105"
          >
            <span>Enquire Now</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </FadeUp>
      </div>
    </section>
  );
}
