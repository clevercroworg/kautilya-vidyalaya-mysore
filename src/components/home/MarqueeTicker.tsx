"use client";

import React from "react";
import { BellRing } from "lucide-react";
import { marqueeText } from "@/data/siteData";

export default function MarqueeTicker() {
  return (
    <div className="bg-[#FFD907] border-y border-yellow-400/80 py-2.5 overflow-hidden flex items-center shadow-inner relative z-20">
      <div className="bg-[#001744] text-white px-3 sm:px-4 py-1 ml-4 rounded-md text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 shrink-0 shadow-sm">
        <BellRing className="w-3.5 h-3.5 text-[#FFD907] animate-bounce" />
        <span>Alert</span>
      </div>

      <div className="relative overflow-hidden w-full ml-3">
        <div className="animate-marquee whitespace-nowrap flex items-center text-slate-950 font-bold text-sm sm:text-base">
          <span className="mx-6 tracking-wide">{marqueeText}</span>
          <span className="mx-6 tracking-wide text-slate-800">★</span>
          <span className="mx-6 tracking-wide">{marqueeText}</span>
          <span className="mx-6 tracking-wide text-slate-800">★</span>
        </div>
      </div>
    </div>
  );
}
