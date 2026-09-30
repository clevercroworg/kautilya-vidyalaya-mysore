"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppWidget from "@/components/ui/WhatsAppWidget";
import AdmissionModal from "@/components/ui/AdmissionModal";
import InnerPageHero from "@/components/ui/InnerPageHero";
import facultyData from "@/data/facultyData.json";
import {
  Users2,
  Search,
  LayoutGrid,
  Table as TableIcon,
  GraduationCap,
  Award,
  ChevronRight,
  BookOpen,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  X,
} from "lucide-react";

interface FacultyMember {
  sl: string;
  name: string;
  qualification: string;
  subject: string;
}

const DEPARTMENTS = [
  { id: "all", label: "All Faculty", count: facultyData.length },
  { id: "sciences", label: "Sciences & Math" },
  { id: "languages", label: "Languages" },
  { id: "tech", label: "Computer Science" },
  { id: "humanities", label: "Social & Commerce" },
  { id: "arts", label: "Arts, Music & Yoga" },
  { id: "pe", label: "Physical Education" },
  { id: "kg", label: "Early Years / Mother Teachers" },
];

export default function TeachingFacultyClientView() {
  const [isAdmissionModalOpen, setIsAdmissionModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDept, setSelectedDept] = useState("all");
  const [viewMode, setViewMode] = useState<"grid" | "table">("grid");

  // Filter logic
  const filteredFaculty = useMemo(() => {
    return (facultyData as FacultyMember[]).filter((faculty) => {
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        faculty.name.toLowerCase().includes(q) ||
        faculty.subject.toLowerCase().includes(q) ||
        faculty.qualification.toLowerCase().includes(q);

      if (!matchesSearch) return false;

      if (selectedDept === "all") return true;
      if (selectedDept === "sciences") {
        return (
          faculty.subject.toLowerCase().includes("math") ||
          faculty.subject.toLowerCase().includes("science") ||
          faculty.subject.toLowerCase().includes("physics") ||
          faculty.subject.toLowerCase().includes("biology") ||
          faculty.subject.toLowerCase().includes("chemistry")
        );
      }
      if (selectedDept === "languages") {
        return (
          faculty.subject.toLowerCase().includes("english") ||
          faculty.subject.toLowerCase().includes("kannada") ||
          faculty.subject.toLowerCase().includes("hindi") ||
          faculty.subject.toLowerCase().includes("sanskrit") ||
          faculty.subject.toLowerCase().includes("french")
        );
      }
      if (selectedDept === "tech") {
        return (
          faculty.subject.toLowerCase().includes("computer") ||
          faculty.subject.toLowerCase().includes("ict") ||
          faculty.subject.toLowerCase().includes("ai") ||
          faculty.subject.toLowerCase().includes("robotics") ||
          faculty.subject.toLowerCase().includes("it") ||
          faculty.qualification.toLowerCase().includes("mca") ||
          faculty.qualification.toLowerCase().includes("bca")
        );
      }
      if (selectedDept === "humanities") {
        return (
          faculty.subject.toLowerCase().includes("social") ||
          faculty.subject.toLowerCase().includes("fmm") ||
          faculty.subject.toLowerCase().includes("commerce") ||
          faculty.subject.toLowerCase().includes("library")
        );
      }
      if (selectedDept === "arts") {
        return (
          faculty.subject.toLowerCase().includes("art") ||
          faculty.subject.toLowerCase().includes("music") ||
          faculty.subject.toLowerCase().includes("yoga")
        );
      }
      if (selectedDept === "pe") {
        return (
          faculty.subject.toLowerCase().includes("pe") ||
          faculty.subject.toLowerCase().includes("physical") ||
          faculty.qualification.toLowerCase().includes("p.ed") ||
          faculty.qualification.toLowerCase().includes("ped")
        );
      }
      if (selectedDept === "kg") {
        return (
          faculty.subject.toLowerCase().includes("mother teacher") ||
          faculty.subject.toLowerCase().includes("kg") ||
          faculty.subject.toLowerCase().includes("pre kg") ||
          faculty.subject.toLowerCase().includes("lkg") ||
          faculty.subject.toLowerCase().includes("ukg")
        );
      }
      return true;
    });
  }, [searchQuery, selectedDept]);

  // Color generator for avatar initials
  const getAvatarGradient = (idx: number) => {
    const gradients = [
      "from-blue-600 to-indigo-700",
      "from-emerald-600 to-teal-700",
      "from-purple-600 to-violet-700",
      "from-amber-500 to-orange-600",
      "from-cyan-600 to-blue-700",
      "from-rose-500 to-pink-700",
    ];
    return gradients[idx % gradients.length];
  };

  const getInitials = (name: string) => {
    const parts = name.trim().split(" ");
    if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-800 selection:bg-[#FFD907] selection:text-[#001744]">
      <Navbar onOpenAdmissionModal={() => setIsAdmissionModalOpen(true)} />

      <main className="flex-grow">
        {/* HERO BANNER WITH AUTHENTIC BG & DYNAMIC WAVE */}
        <InnerPageHero
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Our School" },
            { label: "Teaching Faculty" },
          ]}
          badge={{
            text: "Our Dedicated Faculty & Mentors",
            icon: Users2,
          }}
          title="Experienced Minds Inspiring Young Hearts"
          subtitle="Meet our dedicated CBSE-certified educators, subject matter specialists, and nurturing mentors committed to unlocking the fullest potential in every student."
          waveFillColor="#f8fafc"
        />

        {/* CONTROLS: SEARCH, FILTER TABS & VIEW TOGGLE */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-6">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-slate-200">
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search teacher by name, subject, or qualification..."
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

            {/* Right: Results Count & View Toggle */}
            <div className="flex items-center justify-between sm:justify-end gap-4">
              <span className="text-xs sm:text-sm text-slate-500 font-semibold">
                Showing <strong className="text-[#001744]">{filteredFaculty.length}</strong> of {facultyData.length} faculty
              </span>

              {/* View Toggle */}
              <div className="flex items-center bg-slate-100 p-1 rounded-xl border border-slate-200">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                    viewMode === "grid"
                      ? "bg-white text-[#001744] shadow-sm"
                      : "text-slate-500 hover:text-slate-800"
                  }`}
                >
                  <LayoutGrid className="w-3.5 h-3.5" />
                  <span>Grid</span>
                </button>
                <button
                  onClick={() => setViewMode("table")}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                    viewMode === "table"
                      ? "bg-white text-[#001744] shadow-sm"
                      : "text-slate-500 hover:text-slate-800"
                  }`}
                >
                  <TableIcon className="w-3.5 h-3.5" />
                  <span>Table</span>
                </button>
              </div>
            </div>
          </div>

          {/* Department Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto py-4 scrollbar-none">
            {DEPARTMENTS.map((dept) => (
              <button
                key={dept.id}
                onClick={() => setSelectedDept(dept.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all whitespace-nowrap shrink-0 ${
                  selectedDept === dept.id
                    ? "bg-[#001744] text-[#FFD907] shadow-sm"
                    : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
                }`}
              >
                {dept.label}
              </button>
            ))}
          </div>
        </section>

        {/* FACULTY DIRECTORY DISPLAY */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          {filteredFaculty.length === 0 ? (
            <div className="bg-white rounded-2xl p-12 text-center border border-slate-200 max-w-md mx-auto">
              <Users2 className="w-12 h-12 text-slate-300 mx-auto mb-3" />
              <h3 className="text-base font-bold text-[#001744]">No Faculty Found</h3>
              <p className="text-xs text-slate-500 mt-1">
                No faculty members match “{searchQuery}”. Try clearing your search or selecting a different department.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedDept("all");
                }}
                className="mt-4 bg-[#001744] text-[#FFD907] font-bold px-4 py-2 rounded-xl text-xs"
              >
                Reset Filters
              </button>
            </div>
          ) : viewMode === "grid" ? (
            /* GRID VIEW */
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {filteredFaculty.map((faculty, idx) => (
                <div
                  key={faculty.sl}
                  className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div
                        className={`w-11 h-11 rounded-xl bg-gradient-to-br ${getAvatarGradient(
                          parseInt(faculty.sl) || idx
                        )} text-white flex items-center justify-center font-bold text-xs shadow-sm`}
                      >
                        {getInitials(faculty.name)}
                      </div>
                      <span className="text-[10px] font-bold text-slate-400 bg-slate-50 px-2 py-0.5 rounded-full border border-slate-100">
                        #{faculty.sl}
                      </span>
                    </div>

                    <div>
                      <h4 className="font-extrabold text-[#001744] text-sm leading-snug">
                        {faculty.name}
                      </h4>
                      <p className="text-xs font-bold text-blue-600 mt-0.5">
                        {faculty.qualification}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-slate-100">
                      <p className="text-[11px] font-medium text-slate-500 uppercase tracking-wider">
                        Subject Handled
                      </p>
                      <p className="text-xs font-semibold text-slate-700 mt-0.5">
                        {faculty.subject}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* TABLE VIEW */
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-[#001744] text-white text-xs font-bold uppercase tracking-wider">
                      <th className="py-3.5 px-4 w-16">#</th>
                      <th className="py-3.5 px-4">Teacher Name</th>
                      <th className="py-3.5 px-4">Qualification</th>
                      <th className="py-3.5 px-4">Subject Handled</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-xs sm:text-sm text-slate-700">
                    {filteredFaculty.map((faculty, idx) => (
                      <tr
                        key={faculty.sl}
                        className={idx % 2 === 0 ? "bg-white" : "bg-slate-50/60 hover:bg-blue-50/40 transition-colors"}
                      >
                        <td className="py-3 px-4 font-bold text-slate-400">{faculty.sl}</td>
                        <td className="py-3 px-4 font-bold text-[#001744]">{faculty.name}</td>
                        <td className="py-3 px-4 text-blue-700 font-semibold">{faculty.qualification}</td>
                        <td className="py-3 px-4 text-slate-600">{faculty.subject}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
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
