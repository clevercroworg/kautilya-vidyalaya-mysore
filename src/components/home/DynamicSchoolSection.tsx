"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ScrollRevealText, FadeUp } from "@/components/ui/MotionPrimitives";

export default function DynamicSchoolSection() {
  return (
    <section className="py-20 sm:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Column: Photo of the Summit Award Ceremony */}
          <FadeUp delay={0.1} className="lg:col-span-6">
            <div className="relative rounded-xl overflow-hidden shadow-xl aspect-[16/10] sm:aspect-[16/9] bg-slate-100 border border-slate-100 group">
              <Image
                src="/images/IMG-20251219-WA0019-e1766162332357.jpg"
                alt="Karnataka Educators Summit 2025 Award"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </FadeUp>

          {/* Right Column: Animated Title & Button */}
          <div className="lg:col-span-6 space-y-6">
            <ScrollRevealText
              text="Kautilya Vidyalaya, Mysuru, Honoured as ‘The Dynamic School’ at Karnataka Educators’ Summit 2025"
              as="h3"
              className="text-2xl sm:text-4xl font-extrabold leading-snug"
              colorClass="text-[#001744]"
            />
            <FadeUp delay={0.3}>
              <div>
                <Link
                  href="/the-dynamic-school"
                  className="inline-flex items-center gap-2 bg-[#001744] hover:bg-[#002b7a] text-white font-bold px-7 py-3.5 rounded-full text-sm shadow-md hover:shadow-xl transition-all group"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 text-[#FFD907] transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}
