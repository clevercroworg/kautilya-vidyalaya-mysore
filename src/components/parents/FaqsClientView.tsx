"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppWidget from "@/components/ui/WhatsAppWidget";
import AdmissionModal from "@/components/ui/AdmissionModal";
import InnerPageHero from "@/components/ui/InnerPageHero";
import faqsDataRaw from "@/data/faqsData.json";
import { FaqItem } from "@/types/parentsCorner";
import {
  HelpCircle,
  Search,
  ChevronDown,
  Sparkles,
  Phone,
  ArrowUpRight,
  X,
  MessageCircleQuestion,
  BookOpen,
} from "lucide-react";

const faqsData: FaqItem[] = faqsDataRaw as FaqItem[];

export default function FaqsClientView() {
  const [isAdmissionModalOpen, setIsAdmissionModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [expandedId, setExpandedId] = useState<string | null>("faq-1");

  // Extract unique categories dynamically from the data
  const categories = useMemo(() => {
    const cats = Array.from(new Set(faqsData.map((f) => f.category)));
    return ["All", ...cats];
  }, []);

  // Filter FAQs based on category & search query
  const filteredFaqs = useMemo(() => {
    return faqsData.filter((faq) => {
      const matchCategory =
        selectedCategory === "All" || faq.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchSearch =
        !q ||
        faq.question.toLowerCase().includes(q) ||
        faq.answer.toLowerCase().includes(q) ||
        (faq.tags && faq.tags.some((t) => t.toLowerCase().includes(q)));

      return matchCategory && matchSearch;
    });
  }, [selectedCategory, searchQuery]);

  const toggleFaq = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  const handleTagClick = (tag: string) => {
    setSearchQuery(tag);
    setSelectedCategory("All");
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-800 selection:bg-[#FFD907] selection:text-[#001744]">
      <Navbar onOpenAdmissionModal={() => setIsAdmissionModalOpen(true)} />

      <main className="flex-grow">
        {/* HERO SECTION */}
        <InnerPageHero
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Parents Corner" },
            { label: "FAQs" },
          ]}
          badge={{
            text: "Frequently Asked Questions",
            icon: HelpCircle,
          }}
          title="Frequently Asked Questions"
          subtitle="Clear, transparent answers regarding admissions, CBSE curriculum, language policy, student welfare, fee guidelines, and campus amenities."
          waveFillColor="#f8fafc"
        />

        {/* CONTROLS: SEARCH & CATEGORY PILLS */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 sm:-mt-8 relative z-20">
          <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-5 border border-slate-100 flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Search Box */}
            <div className="relative w-full md:max-w-md">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search questions (e.g., fee, language, age, bus)..."
                className="w-full pl-10 pr-9 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#001744] focus:border-transparent transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-0.5 rounded-full hover:bg-slate-200 transition-colors"
                  aria-label="Clear search"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Results Counter & Toggle All */}
            <div className="flex items-center justify-between w-full md:w-auto gap-4 text-xs font-semibold text-slate-500">
              <span>
                Showing <strong className="text-[#001744]">{filteredFaqs.length}</strong> of {faqsData.length} FAQs
              </span>
              <button
                onClick={() =>
                  setExpandedId(
                    expandedId ? null : filteredFaqs[0]?.id || null
                  )
                }
                className="text-blue-700 hover:text-blue-900 font-bold hover:underline"
              >
                {expandedId ? "Collapse All" : "Expand First"}
              </button>
            </div>
          </div>

          {/* Category Filter Tabs with animated pill */}
          <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none py-4 mt-2">
            {categories.map((cat) => {
              const count =
                cat === "All"
                  ? faqsData.length
                  : faqsData.filter((f) => f.category === cat).length;
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`relative px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap flex items-center gap-1.5 ${
                    isActive
                      ? "text-[#FFD907]"
                      : "bg-white text-slate-600 hover:bg-slate-100 hover:text-[#001744] border border-slate-200/80"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="faqCategoryActive"
                      className="absolute inset-0 bg-[#001744] rounded-xl shadow-sm z-0"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{cat}</span>
                  <span
                    className={`relative z-10 text-[10px] px-1.5 py-0.5 rounded-full transition-colors ${
                      isActive
                        ? "bg-white/20 text-[#FFD907]"
                        : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </section>

        {/* FAQS ACCORDION LIST */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          {filteredFaqs.length === 0 ? (
            <div className="bg-white rounded-2xl p-12 text-center border border-slate-200 max-w-md mx-auto space-y-4 shadow-sm">
              <MessageCircleQuestion className="w-12 h-12 text-slate-300 mx-auto" />
              <h3 className="text-base font-bold text-slate-800">
                No matching questions found
              </h3>
              <p className="text-xs text-slate-500">
                Try searching with a different keyword or reset filters to view all questions.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("All");
                }}
                className="bg-[#001744] text-[#FFD907] text-xs font-bold px-4 py-2 rounded-xl hover:bg-[#002b7a] transition-all"
              >
                Reset Search Filters
              </button>
            </div>
          ) : (
            <div className="space-y-3">
              {filteredFaqs.map((faq, idx) => {
                const isOpen = expandedId === faq.id;
                return (
                  <motion.div
                    key={faq.id}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.25, delay: Math.min(idx * 0.02, 0.2) }}
                    className={`bg-white rounded-2xl border transition-all duration-200 overflow-hidden ${
                      isOpen
                        ? "border-[#001744]/40 shadow-md ring-1 ring-[#001744]/10"
                        : "border-slate-200/80 hover:border-slate-300 hover:shadow-sm"
                    }`}
                  >
                    {/* Accordion Question Header */}
                    <button
                      onClick={() => toggleFaq(faq.id)}
                      className="w-full text-left p-5 sm:p-6 flex items-start justify-between gap-4 transition-colors"
                      aria-expanded={isOpen}
                    >
                      <div className="space-y-1.5 pr-2">
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-extrabold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-100">
                            {faq.category}
                          </span>
                        </div>
                        <h3 className="text-sm sm:text-base font-bold text-[#001744] tracking-tight leading-snug">
                          {faq.question}
                        </h3>
                      </div>

                      <div
                        className={`w-8 h-8 rounded-xl shrink-0 flex items-center justify-center transition-transform duration-300 ${
                          isOpen
                            ? "bg-[#001744] text-[#FFD907] rotate-180"
                            : "bg-slate-100 text-slate-500 hover:bg-slate-200"
                        }`}
                      >
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </button>

                    {/* Accordion Answer Content */}
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="px-5 sm:px-6 pb-6 pt-2 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 bg-slate-50/50">
                            <p className="whitespace-pre-line">{faq.answer}</p>

                            {/* Clickable Tags */}
                            {faq.tags && faq.tags.length > 0 && (
                              <div className="flex flex-wrap items-center gap-1.5 mt-4 pt-3 border-t border-slate-200/60">
                                <span className="text-[10px] font-semibold text-slate-400">
                                  Related Topics:
                                </span>
                                {faq.tags.map((tag) => (
                                  <button
                                    key={tag}
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      handleTagClick(tag);
                                    }}
                                    className="text-[10px] font-semibold text-slate-600 hover:text-blue-700 bg-white hover:bg-blue-50 px-2 py-0.5 rounded-md border border-slate-200 hover:border-blue-200 transition-colors"
                                  >
                                    #{tag}
                                  </button>
                                ))}
                              </div>
                            )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          )}
        </section>

        {/* STILL HAVE QUESTIONS HELP CARD */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20">
          <div className="bg-gradient-to-br from-[#001744] to-[#002b7a] text-white rounded-3xl p-8 sm:p-10 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8 border border-white/10">
            <div className="space-y-2.5 text-center lg:text-left max-w-xl">
              <div className="inline-flex items-center gap-2 bg-[#FFD907] text-[#001744] px-3 py-0.5 rounded-full text-xs font-black">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Admission Helpdesk</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                Have a Question Not Listed Here?
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Our admissions coordinators are available to answer your questions regarding admissions, documentation, and campus visits.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href="tel:+919900038358"
                className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all"
              >
                <Phone className="w-4 h-4 text-[#FFD907]" />
                <span>+91 9900038358</span>
              </a>
              <button
                onClick={() => setIsAdmissionModalOpen(true)}
                className="bg-[#FFD907] hover:bg-yellow-400 text-[#001744] font-black px-5 py-2.5 rounded-xl text-xs sm:text-sm shadow-lg flex items-center gap-2 transition-all hover:scale-105"
              >
                <span>Submit Enquiry</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppWidget />
      <AdmissionModal
        isOpen={isAdmissionModalOpen}
        onClose={() => setIsAdmissionModalOpen(false)}
      />
    </div>
  );
}
