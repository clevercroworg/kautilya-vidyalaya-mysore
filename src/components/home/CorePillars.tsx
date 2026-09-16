"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen, Award, Sparkles } from "lucide-react";
import { corePillars } from "@/data/siteData";

export default function CorePillars() {
  const iconList = [
    <Sparkles key="1" className="w-5 h-5 text-[#FFD907]" />,
    <BookOpen key="2" className="w-5 h-5 text-[#FFD907]" />,
    <Award key="3" className="w-5 h-5 text-[#FFD907]" />,
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-[#001744]/5 text-[#001744] px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <span>Our Foundation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#001744] tracking-tight">
            Academic Year 2027-28
          </h2>
          <p className="mt-3 text-slate-600 text-base sm:text-lg">
            Empowering students with knowledge, moral values, and 21st-century competence in a nurturing environment.
          </p>
        </div>

        {/* 3-Column Responsive Grid (Fixing the cramped 480px WP bug) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {corePillars.map((pillar, idx) => (
            <div
              key={pillar.title}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col group hover:-translate-y-1"
            >
              {/* Image Container */}
              <div className="relative w-full h-56 overflow-hidden bg-slate-100">
                <Image
                  src={pillar.image}
                  alt={pillar.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-[#001744]/80 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1.5 shadow">
                  {iconList[idx % iconList.length]}
                  <span>{pillar.badge}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-yellow-600">
                    {pillar.subtitle}
                  </span>
                  <h3 className="text-xl font-bold text-[#001744] mt-1 mb-3 group-hover:text-blue-900 transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100">
                  <Link
                    href={pillar.href}
                    className="inline-flex items-center gap-2 text-sm font-bold text-[#001744] hover:text-blue-700 group/link transition-colors"
                  >
                    <span>{pillar.cta}</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
