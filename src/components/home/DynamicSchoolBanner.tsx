"use client";

import React from "react";
import Link from "next/link";
import { Trophy, ArrowRight, Star } from "lucide-react";

export default function DynamicSchoolBanner() {
  return (
    <section className="bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 text-slate-950 py-8 px-4 sm:px-8 border-y border-amber-300 shadow-md">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-[#001744] text-[#FFD907] flex items-center justify-center shrink-0 shadow-lg">
            <Trophy className="w-8 h-8" />
          </div>
          <div>
            <div className="flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-[#001744]">
              <Star className="w-3.5 h-3.5 fill-[#001744]" />
              <span>Prestigious State Honor</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-slate-950 tracking-tight mt-0.5">
              Kautilya Vidyalaya, Mysuru, Honoured as ‘The Dynamic School’
            </h3>
            <p className="text-xs sm:text-sm font-semibold text-slate-800">
              Presented at the Karnataka Educators’ Summit 2025 for visionary leadership &amp; pedagogical excellence.
            </p>
          </div>
        </div>

        <Link
          href="/the-dynamic-school"
          className="inline-flex items-center gap-2 bg-[#001744] hover:bg-slate-900 text-white font-extrabold px-6 py-3 rounded-full text-sm shrink-0 shadow-xl transition-all"
        >
          <span>Learn More</span>
          <ArrowRight className="w-4 h-4 text-[#FFD907]" />
        </Link>
      </div>
    </section>
  );
}
