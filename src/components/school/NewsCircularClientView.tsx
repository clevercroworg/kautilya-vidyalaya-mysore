"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppWidget from "@/components/ui/WhatsAppWidget";
import AdmissionModal from "@/components/ui/AdmissionModal";
import InnerPageHero from "@/components/ui/InnerPageHero";
import {
  FileText,
  Calendar,
  Search,
  Bell,
  ChevronRight,
  Download,
  Users,
  Award,
  BookOpen,
  ArrowUpRight,
  X,
  Printer,
  ShieldCheck,
} from "lucide-react";

interface CircularItem {
  id: string;
  refNo: string;
  title: string;
  category: "competition" | "fieldtrip" | "parent" | "academic" | "sports";
  categoryLabel: string;
  date: string;
  audience: string;
  summary: string;
  fullDetails: string[];
}

const CIRCULARS: CircularItem[] = [
  {
    id: "circ-01",
    refNo: "KV/CIR/2025/031",
    title: "Ganesha Festival Competition 2025",
    category: "competition",
    categoryLabel: "Cultural Competition",
    date: "September 2025",
    audience: "All Students (Kindergarten to Grade 10)",
    summary:
      "Guidelines and schedule for eco-friendly clay idol making, rangoli, devotional recitation, and creative storytelling contests celebrating Vinayaka Chaturthi.",
    fullDetails: [
      "In celebration of Vinayaka Chaturthi, Kautilya Vidyalaya is organizing inter-house creative cultural competitions.",
      "Categories include: Eco-Friendly Clay Ganesha Making (Grades 3-7), Traditional Rangoli (Grades 6-10), and Devotional Stotra Chanting (KG-Grade 4).",
      "Only natural clay without toxic synthetic colors should be used. The school will provide clay during designated activity periods.",
      "Certificates of Excellence and Medals will be awarded to top 3 winners in each category during the morning assembly.",
    ],
  },
  {
    id: "circ-02",
    refNo: "KV/CIR/2025/022",
    title: "Outbound Experiential Field Trip for Grade 3 & Grade 4",
    category: "fieldtrip",
    categoryLabel: "Experiential Learning",
    date: "September 2025",
    audience: "Grade 3 and Grade 4 Students",
    summary:
      "Detailed itinerary, safety protocols, reporting time, and parental consent form for the one-day nature exploration and science field trip.",
    fullDetails: [
      "As part of our experiential science curriculum, an educational day-trip has been arranged for Grade 3 and Grade 4.",
      "Students must report in full school sports uniform with ID cards, water bottles, and a light nutritious snack.",
      "Trained faculty escorts, physical education instructors, and medical first-aid personnel will accompany every bus.",
      "Signed parent consent slips must be submitted to respective class teachers by the designated date.",
    ],
  },
  {
    id: "circ-03",
    refNo: "KV/CIR/2025/028",
    title: "Invitation to Parent-Teacher Meeting (PTM) – Kindergarten to Grade 2",
    category: "parent",
    categoryLabel: "Parent Advisory",
    date: "September 6, 2025",
    audience: "Parents of Pre-KG, LKG, UKG, Grade 1 & Grade 2",
    summary:
      "Periodic parent-educator conference discussing foundational literacy, numeracy milestones, social development, and individual progress reports.",
    fullDetails: [
      "We cordially invite parents of Kindergarten to Grade 2 to the Term-1 Parent-Teacher Conference scheduled for Saturday, September 6, 2025.",
      "Timings: 9:00 AM to 1:00 PM (staggered time-slots allocated roll-number wise to avoid crowding).",
      "Teachers will share foundational assessment reports, behavioral feedback, and creative portfolio exhibits.",
      "Parents are requested to adhere strictly to their allotted time slots to ensure productive, personalized discussions.",
    ],
  },
  {
    id: "circ-04",
    refNo: "KV/CIR/2025/023",
    title: "Science Olympiad Foundation (SOF) 2025-26 Examinations",
    category: "academic",
    categoryLabel: "Academic Competition",
    date: "July - December 2025",
    audience: "Grades 1 to 10",
    summary:
      "Registration dates, syllabus outlines, and examination schedules for National Science Olympiad (NSO), International Math Olympiad (IMO), and English Olympiad (IEO).",
    fullDetails: [
      "Kautilya Vidyalaya continues its association with the Science Olympiad Foundation to benchmark student analytical and scientific aptitude.",
      "Exams conducted on campus include: NSO (Science), IMO (Mathematics), and IEO (English).",
      "Study booklets and preparatory question banks will be made available through the school examination coordinator.",
      "Interested students should complete enrollment through their science or math teachers before the deadline.",
    ],
  },
  {
    id: "circ-05",
    refNo: "KV/CIR/2025/035",
    title: "Accolade: CBSE South Zone II Swimming Championship",
    category: "sports",
    categoryLabel: "Sports Commendation",
    date: "October 2025",
    audience: "Entire School Community",
    summary:
      "Hearty congratulations to Mohammed Arman Sameer of Grade 5 for representing Kautilya Vidyalaya with pride at the CBSE South Zone II Championship.",
    fullDetails: [
      "Kautilya Vidyalaya proudly congratulates Mohammed Arman Sameer of Grade 5 for his outstanding representation in the CBSE South Zone II Swimming Championship.",
      "Arman showcased exceptional discipline, stamina, and sportsmanship against top regional school athletes.",
      "The Chairman, Principal, and faculty applaud his commitment and thank the physical education department for their diligent coaching.",
    ],
  },
  {
    id: "circ-06",
    refNo: "KV/CIR/2026/001",
    title: "Admissions Open for Academic Year 2026-27 (Nursery to PUC)",
    category: "academic",
    categoryLabel: "Admissions Circular",
    date: "January 2026 - Ongoing",
    audience: "Prospective & Existing Parents",
    summary:
      "Notification of registrations open for Nursery, LKG, UKG, Grades 1 to 10, and I & II PUC (Science and Commerce streams).",
    fullDetails: [
      "Admissions for the upcoming Academic Year 2026-27 are now officially open across all grade bands.",
      "Parents can submit admission enquiries online or visit the school administrative office between 9:00 AM and 4:30 PM on all working days.",
      "Campus tours, interaction with academic coordinators, and laboratory demonstrations are arranged upon prior registration.",
      "Direct enquiry helpline: +91 9900038358 / +91 7090671299.",
    ],
  },
];

const CATEGORIES = [
  { id: "all", label: "All Circulars" },
  { id: "academic", label: "Academic & Exams" },
  { id: "competition", label: "Competitions" },
  { id: "parent", label: "Parent Notices" },
  { id: "fieldtrip", label: "Field Trips" },
  { id: "sports", label: "Sports" },
];

export default function NewsCircularClientView() {
  const [isAdmissionModalOpen, setIsAdmissionModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [activeCircular, setActiveCircular] = useState<CircularItem | null>(null);

  const filteredCirculars = useMemo(() => {
    return CIRCULARS.filter((c) => {
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        c.title.toLowerCase().includes(q) ||
        c.refNo.toLowerCase().includes(q) ||
        c.summary.toLowerCase().includes(q) ||
        c.audience.toLowerCase().includes(q);

      if (!matchesSearch) return false;

      if (selectedCategory === "all") return true;
      return c.category === selectedCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-800 selection:bg-[#FFD907] selection:text-[#001744]">
      <Navbar onOpenAdmissionModal={() => setIsAdmissionModalOpen(true)} />

      <main className="flex-grow">
        {/* HERO BANNER WITH AUTHENTIC BG & DYNAMIC WAVE */}
        <InnerPageHero
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Our School" },
            { label: "News & Circular" },
          ]}
          badge={{
            text: "Official Notices & Announcements",
            icon: Bell,
          }}
          title="School News & Circulars"
          subtitle="Stay updated with timely administrative communications, parent-teacher meeting schedules, examination circulars, and student competition guidelines."
          waveFillColor="#f8fafc"
        />

        {/* CONTROLS: SEARCH & CATEGORY TABS */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 border-b border-slate-200">
            {/* Search Input */}
            <div className="relative w-full sm:max-w-md">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search circulars by title, reference no, or keyword..."
                className="w-full pl-10 pr-9 py-2.5 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#001744] focus:border-transparent transition-all shadow-sm"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            <span className="text-xs sm:text-sm text-slate-500 font-semibold self-end sm:self-center">
              Showing <strong className="text-[#001744]">{filteredCirculars.length}</strong> official circulars
            </span>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto py-4 scrollbar-none">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all whitespace-nowrap shrink-0 ${
                  selectedCategory === cat.id
                    ? "bg-[#001744] text-[#FFD907] shadow-sm"
                    : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </section>

        {/* CIRCULARS LIST */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          {filteredCirculars.length === 0 ? (
            <div className="bg-white rounded-2xl p-12 text-center border border-slate-200 max-w-md mx-auto">
              <FileText className="w-12 h-12 text-slate-300 mx-auto mb-3" />
              <h3 className="text-base font-bold text-[#001744]">No Circulars Found</h3>
              <p className="text-xs text-slate-500 mt-1">
                No notices match your search criteria. Try modifying your search query.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("all");
                }}
                className="mt-4 bg-[#001744] text-[#FFD907] font-bold px-4 py-2 rounded-xl text-xs"
              >
                Reset Search
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredCirculars.map((circular) => (
                <div
                  key={circular.id}
                  className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-all hover:border-slate-300 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
                >
                  <div className="space-y-2 max-w-3xl">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-[11px] font-mono font-bold text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded-md border border-blue-100">
                        {circular.refNo}
                      </span>
                      <span className="text-[11px] font-bold text-slate-600 bg-slate-100 px-2.5 py-0.5 rounded-md">
                        {circular.categoryLabel}
                      </span>
                      <span className="text-[11px] font-semibold text-slate-500 flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-slate-400" />
                        {circular.date}
                      </span>
                    </div>

                    <h3 className="text-lg font-black text-[#001744] leading-snug">
                      {circular.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {circular.summary}
                    </p>

                    <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 pt-1">
                      <Users className="w-3.5 h-3.5 text-slate-400" />
                      <span>Target Audience: <strong className="text-slate-700">{circular.audience}</strong></span>
                    </div>
                  </div>

                  <div className="shrink-0 w-full md:w-auto">
                    <button
                      onClick={() => setActiveCircular(circular)}
                      className="w-full md:w-auto bg-[#001744] hover:bg-[#002b7a] text-[#FFD907] font-bold px-5 py-2.5 rounded-xl text-xs sm:text-sm transition-all flex items-center justify-center gap-2 shadow"
                    >
                      <span>Read Circular</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </main>

      {/* FULL CIRCULAR DETAILS MODAL */}
      {activeCircular && (
        <div
          className="fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setActiveCircular(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-2xl w-full shadow-2xl overflow-hidden border border-slate-100 animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="bg-[#001744] text-white p-6 relative">
              <div className="flex items-center gap-2 text-xs text-cyan-300 font-mono mb-1">
                <span>{activeCircular.refNo}</span>
                <span>•</span>
                <span>{activeCircular.date}</span>
              </div>
              <h3 className="text-xl font-black text-white pr-8 leading-snug">
                {activeCircular.title}
              </h3>
              <button
                onClick={() => setActiveCircular(null)}
                className="absolute top-5 right-5 text-slate-400 hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-4 max-h-[60vh] overflow-y-auto">
              <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-100 text-xs text-slate-600 flex items-center justify-between">
                <span><strong>Category:</strong> {activeCircular.categoryLabel}</span>
                <span><strong>Audience:</strong> {activeCircular.audience}</span>
              </div>

              <div className="space-y-3 pt-2">
                <h4 className="text-xs uppercase font-extrabold tracking-wider text-slate-400">
                  Detailed Circular Guidelines
                </h4>
                {activeCircular.fullDetails.map((para, i) => (
                  <p key={i} className="text-sm text-slate-700 leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>

              <div className="pt-4 border-t border-slate-100 text-xs text-slate-500 space-y-1">
                <p><strong>Issued by:</strong> Administrative Office & Academic Council</p>
                <p>Kautilya Vidyalaya, Dattagalli 3rd Stage, Mysuru - 570033</p>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
              <button
                onClick={() => window.print()}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 hover:text-[#001744] px-3 py-2 rounded-lg hover:bg-slate-200/60 transition-colors"
              >
                <Printer className="w-4 h-4" />
                <span>Print Notice</span>
              </button>
              <button
                onClick={() => setActiveCircular(null)}
                className="bg-[#001744] text-[#FFD907] font-bold px-4 py-2 rounded-xl text-xs transition-colors"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
      <WhatsAppWidget />
      <AdmissionModal
        isOpen={isAdmissionModalOpen}
        onClose={() => setIsAdmissionModalOpen(false)}
      />
    </div>
  );
}
