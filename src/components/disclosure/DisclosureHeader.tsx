"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import DynamicWaveDivider from "@/components/ui/DynamicWaveDivider";
import {
  Printer,
  Search,
  ChevronRight,
  ExternalLink,
  LayoutGrid,
  Table as TableIcon,
} from "lucide-react";
import { disclosureCategories, DisclosureCategory } from "@/data/disclosureData";

interface DisclosureHeaderProps {
  activeTab: DisclosureCategory["id"];
  setActiveTab: (tab: DisclosureCategory["id"]) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  viewMode: "cards" | "table";
  setViewMode: (mode: "cards" | "table") => void;
  totalCount: number;
}

export default function DisclosureHeader({
  activeTab,
  setActiveTab,
  searchQuery,
  setSearchQuery,
  viewMode,
  setViewMode,
}: DisclosureHeaderProps) {
  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  return (
    <section className="relative bg-[#001744] text-white pt-10 overflow-hidden border-b border-white/10">
      {/* Authentic Background Image */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/images/bg/kautilya-campus-header-bg.jpg"
          alt="Kautilya Vidyalaya Campus Background"
          fill
          priority
          className="object-cover object-center opacity-25 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#001744]/85 via-[#001744]/80 to-[#001744]" />
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:20px_20px]" />
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pb-6">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-slate-300 mb-4" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-[#FFD907] font-semibold">Mandatory Public Disclosure</span>
        </nav>

        {/* Title & Key Codes */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10">
          <div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
              Mandatory Public Disclosure
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              CBSE Appendix IX Regulatory Compliance & Official Disclosures
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 text-xs">
            <span className="bg-white/10 px-3 py-1.5 rounded-lg font-medium border border-white/10">
              Affiliation No: <strong className="text-[#FFD907]">830193</strong>
            </span>
            <span className="bg-white/10 px-3 py-1.5 rounded-lg font-medium border border-white/10">
              School Code: <strong className="text-[#38bdf8]">45154</strong>
            </span>

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 bg-white text-[#001744] hover:bg-slate-100 font-bold px-3 py-1.5 rounded-lg text-xs transition-colors"
              title="Print page"
            >
              <Printer className="w-3.5 h-3.5 text-[#001744]" />
              <span>Print</span>
            </button>
          </div>
        </div>

        {/* Filter Tabs & Search */}
        <div className="mt-5 flex flex-col md:flex-row md:items-center justify-between gap-3">
          {/* Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
            {disclosureCategories.map((cat) => {
              const isActive = activeTab === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                    isActive
                      ? "bg-[#FFD907] text-[#001744]"
                      : "bg-white/10 hover:bg-white/20 text-slate-200"
                  }`}
                >
                  {cat.title}
                </button>
              );
            })}
          </div>

          {/* Search & View Toggle */}
          <div className="flex items-center gap-2.5 w-full md:w-auto">
            <div className="relative flex-1 md:w-56">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search..."
                className="w-full bg-white/10 border border-white/20 rounded-lg pl-8 pr-3 py-1.5 text-xs text-white placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-[#FFD907]"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
                >
                  ✕
                </button>
              )}
            </div>

            <div className="flex items-center bg-white/10 p-0.5 rounded-lg border border-white/15 shrink-0">
              <button
                onClick={() => setViewMode("table")}
                className={`px-2 py-1 rounded text-xs font-bold flex items-center gap-1 transition-colors ${
                  viewMode === "table"
                    ? "bg-[#FFD907] text-[#001744]"
                    : "text-slate-300 hover:text-white"
                }`}
                title="Table View"
              >
                <TableIcon className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Table</span>
              </button>
              <button
                onClick={() => setViewMode("cards")}
                className={`px-2 py-1 rounded text-xs font-bold flex items-center gap-1 transition-colors ${
                  viewMode === "cards"
                    ? "bg-[#FFD907] text-[#001744]"
                    : "text-slate-300 hover:text-white"
                }`}
                title="Cards View"
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Cards</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Dynamic Animated Wave Divider */}
      <DynamicWaveDivider fillColor="#f8fafc" className="relative z-10" />
    </section>
  );
}
