"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AdmissionModal from "@/components/ui/AdmissionModal";
import InnerPageHero from "@/components/ui/InnerPageHero";
import {
  Briefcase,
  GraduationCap,
  Sparkles,
  Building2,
  ShieldCheck,
  HeartHandshake,
  Users,
  MapPin,
  Clock,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  Upload,
  FileText,
  X,
  Send,
  AlertCircle,
  HelpCircle,
  Mail,
  Phone,
  Search,
  Check,
  Loader2,
  Award,
  Maximize2,
  ExternalLink,
} from "lucide-react";
import {
  JOB_OPENINGS,
  CAREER_DEPARTMENTS,
  WHY_WORK_WITH_US,
  HIRING_PROCESS,
  CAREER_FAQS,
} from "@/data/careersData";
import { contactInfo } from "@/data/siteData";

export default function CareersClientView() {
  const [isAdmissionModalOpen, setIsAdmissionModalOpen] = useState(false);
  const [selectedDept, setSelectedDept] = useState<string>("All Openings");
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedJobId, setExpandedJobId] = useState<string | null>(null);
  const [isPosterModalOpen, setIsPosterModalOpen] = useState(false);

  // Limited & Professional Form State
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    position: "Front Office Associate",
    qualification: "",
    experience: "Fresher / 0–1 Year",
    coverNote: "",
  });

  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [fileError, setFileError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const formRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Filter jobs
  const filteredJobs = JOB_OPENINGS.filter((job) => {
    const matchesDept =
      selectedDept === "All Openings" || job.department === selectedDept;
    const matchesSearch =
      searchQuery.trim() === "" ||
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.department.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.qualification.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesDept && matchesSearch;
  });

  const handleApplyClick = (jobTitle: string) => {
    setFormData((prev) => ({ ...prev, position: jobTitle }));
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFileError("");
    const file = e.target.files?.[0];
    if (!file) return;

    // 10 MB limit check
    if (file.size > 10 * 1024 * 1024) {
      setFileError("File size exceeds 10 MB. Please upload a smaller document.");
      return;
    }

    const allowed = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];
    if (!allowed.includes(file.type) && !file.name.match(/\.(pdf|doc|docx)$/i)) {
      setFileError("Please upload your resume in PDF, DOC, or DOCX format.");
      return;
    }

    setResumeFile(file);
  };

  const handleRemoveFile = () => {
    setResumeFile(null);
    setFileError("");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const data = new FormData();
      data.append("fullName", formData.fullName);
      data.append("email", formData.email);
      data.append("phone", formData.phone);
      data.append("position", formData.position);
      data.append("qualification", formData.qualification);
      data.append("experience", formData.experience);
      data.append("coverNote", formData.coverNote);

      if (resumeFile) {
        data.append("resume", resumeFile);
      }

      const res = await fetch("/api/careers", {
        method: "POST",
        body: data,
      });

      if (res.ok) {
        setIsSubmitted(true);
      } else {
        const errorData = await res.json().catch(() => null);
        setErrorMessage(
          errorData?.error || "Failed to submit application. Please check all fields and try again."
        );
      }
    } catch {
      setErrorMessage("Network connection error. Please check your internet and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-800 selection:bg-[#FFD907] selection:text-[#001744]">
      <Navbar onOpenAdmissionModal={() => setIsAdmissionModalOpen(true)} />

      <main className="flex-grow">
        {/* HERO SECTION WITH AUTHENTIC BRANDING */}
        <InnerPageHero
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Careers" },
          ]}
          badge={{
            text: "Recruitment Open • Dattagalli, Mysuru",
            icon: Briefcase,
          }}
          title="Careers at Kautilya"
          subtitle="Join an inspiring community of educators, counselors, and staff dedicated to nurturing young minds with CBSE academic rigor, modern innovation, and human values."
          waveFillColor="#f8fafc"
        />

        {/* 1. KEY METRICS STRIP (Generous responsive padding) */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 sm:-mt-8 relative z-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow text-center">
              <span className="block text-2xl sm:text-3xl font-black text-[#001744]">
                25+ Years
              </span>
              <span className="text-xs sm:text-sm font-semibold text-slate-500 mt-1 block">
                Educational Legacy
              </span>
            </div>
            <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow text-center">
              <span className="block text-2xl sm:text-3xl font-black text-blue-700">
                100+ Staff
              </span>
              <span className="text-xs sm:text-sm font-semibold text-slate-500 mt-1 block">
                Collaborative Community
              </span>
            </div>
            <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow text-center">
              <span className="block text-2xl sm:text-3xl font-black text-emerald-700">
                100% Board
              </span>
              <span className="text-xs sm:text-sm font-semibold text-slate-500 mt-1 block">
                CBSE Results Track Record
              </span>
            </div>
            <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow text-center">
              <span className="block text-2xl sm:text-3xl font-black text-amber-600">
                Freshers Welcome
              </span>
              <span className="text-xs sm:text-sm font-semibold text-slate-500 mt-1 block">
                Comprehensive Mentorship
              </span>
            </div>
          </div>
        </section>

        {/* 2. OFFICIAL WE ARE HIRING SPOTLIGHT BANNER */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
          <div className="bg-gradient-to-br from-[#001744] via-[#00246B] to-[#001744] rounded-3xl p-6 sm:p-10 lg:p-12 shadow-2xl text-white relative overflow-hidden border border-blue-900/60">
            {/* Background ambient lighting */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/15 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column: Official Flyer Visual */}
              <div className="lg:col-span-5 flex flex-col items-center">
                <div
                  onClick={() => setIsPosterModalOpen(true)}
                  className="relative w-full max-w-[320px] aspect-[541/797] rounded-2xl overflow-hidden shadow-2xl border-4 border-[#FFD907] cursor-pointer group transition-transform duration-300 hover:scale-[1.02]"
                >
                  <Image
                    src="/images/careers/kautilya-hiring-poster.webp"
                    alt="Kautilya Vidyalaya We Are Hiring Poster"
                    fill
                    priority
                    sizes="(max-width: 640px) 280px, 320px"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="bg-white/95 text-[#001744] text-xs font-bold px-3.5 py-2 rounded-full flex items-center gap-1.5 shadow-md">
                      <Maximize2 className="w-3.5 h-3.5 text-blue-600" />
                      <span>View Full Flyer</span>
                    </span>
                  </div>
                </div>
                <span className="text-[11px] text-slate-300 mt-2.5 flex items-center gap-1">
                  <span>Click poster to expand</span>
                  <ExternalLink className="w-3 h-3 text-[#FFD907]" />
                </span>
              </div>

              {/* Right Column: Active Role Spotlight */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <div className="inline-flex items-center gap-2 bg-[#FFD907] text-[#001744] font-black text-xs uppercase tracking-wider px-3.5 py-1 rounded-full mb-3 shadow">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Official Hiring Campaign</span>
                  </div>
                  <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                    WE ARE <span className="text-[#FFD907]">HIRING!</span>
                  </h2>
                  <p className="text-sm sm:text-base text-yellow-300 font-extrabold mt-1">
                    Join Our Growing Team • Freshers are welcome! Start your career with us.
                  </p>
                  <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                    Kautilya Vidyalaya is welcoming motivated individuals to join our administrative and admissions counseling team in Dattagalli, Mysuru.
                  </p>
                </div>

                {/* The Two Roles from Poster */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Role 1: Front Office Associate */}
                  <div className="bg-white/95 backdrop-blur rounded-2xl p-5 text-slate-900 border border-white/20 shadow-lg flex flex-col justify-between">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between gap-2">
                        <span className="w-7 h-7 rounded-full bg-[#001744] text-[#FFD907] font-black text-xs flex items-center justify-center">
                          1
                        </span>
                        <span className="text-[10px] font-extrabold uppercase bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-md">
                          0–3 Yrs / Freshers
                        </span>
                      </div>
                      <h3 className="text-base sm:text-lg font-black text-[#001744]">
                        Front Office Associate
                      </h3>
                      <div className="space-y-1.5 text-xs text-slate-600">
                        <p>
                          <strong className="text-slate-800">Qualification:</strong> Any Graduate
                        </p>
                        <p>
                          <strong className="text-slate-800">Skills:</strong> Good communication &amp; MS Office
                        </p>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleApplyClick("Front Office Associate")}
                      className="mt-4 w-full bg-[#001744] hover:bg-blue-900 text-[#FFD907] font-bold text-xs py-2.5 rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-sm"
                    >
                      <span>Apply for this Role</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Role 2: Admission Associate */}
                  <div className="bg-white/95 backdrop-blur rounded-2xl p-5 text-slate-900 border border-white/20 shadow-lg flex flex-col justify-between">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between gap-2">
                        <span className="w-7 h-7 rounded-full bg-[#001744] text-[#FFD907] font-black text-xs flex items-center justify-center">
                          2
                        </span>
                        <span className="text-[10px] font-extrabold uppercase bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-md">
                          0–4 Yrs / Freshers
                        </span>
                      </div>
                      <h3 className="text-base sm:text-lg font-black text-[#001744]">
                        Admission Associate
                      </h3>
                      <div className="space-y-1.5 text-xs text-slate-600">
                        <p>
                          <strong className="text-slate-800">Qualification:</strong> Any Graduate / MBA
                        </p>
                        <p>
                          <strong className="text-slate-800">Skills:</strong> Counselling, parent communication &amp; interpersonal
                        </p>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleApplyClick("Admission Associate")}
                      className="mt-4 w-full bg-[#001744] hover:bg-blue-900 text-[#FFD907] font-bold text-xs py-2.5 rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-sm"
                    >
                      <span>Apply for this Role</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Quick Email Note Bar */}
                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs bg-white/10 rounded-2xl p-4 border border-white/10">
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-[#FFD907] shrink-0" />
                    <span>
                      Direct resume email:{" "}
                      <a
                        href="mailto:careers@kautilyavidyalaya.edu.in?subject=Application%20for%20Job%20Vacancy%20-%20Kautilya%20Vidyalaya"
                        className="text-[#FFD907] font-bold hover:underline"
                      >
                        careers@kautilyavidyalaya.edu.in
                      </a>
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-300">
                    <MapPin className="w-3.5 h-3.5 text-yellow-400 shrink-0" />
                    <span>Dattagalli, Mysuru</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. ALL JOB VACANCIES (Teaching & Non-Teaching) */}
        <section id="openings" className="bg-slate-100/70 py-16 sm:py-24 border-y border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
              <div>
                <span className="text-xs font-extrabold tracking-wider uppercase text-blue-700 bg-blue-50 px-3.5 py-1 rounded-full border border-blue-100">
                  Current Openings
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#001744] tracking-tight mt-3">
                  Front Office &amp; Admission Associates
                </h2>
                <p className="text-slate-500 text-sm mt-1">
                  Freshers are welcome! Review qualifications, experience criteria, and responsibilities below.
                </p>
              </div>

              {/* Search input */}
              <div className="relative w-full md:w-72">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search subject or role..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#001744] transition-all shadow-sm"
                />
              </div>
            </div>

            {/* Department Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
              {CAREER_DEPARTMENTS.map((dept) => (
                <button
                  key={dept}
                  type="button"
                  onClick={() => setSelectedDept(dept)}
                  className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                    selectedDept === dept
                      ? "bg-[#001744] text-white shadow-md"
                      : "bg-white text-slate-600 hover:bg-slate-200/70 border border-slate-200/90"
                  }`}
                >
                  {dept}
                </button>
              ))}
            </div>

            {/* Jobs List */}
            {filteredJobs.length === 0 ? (
              <div className="bg-white rounded-3xl p-10 text-center border border-slate-200 shadow-sm">
                <Briefcase className="w-12 h-12 text-slate-300 mx-auto mb-3" />
                <h4 className="text-lg font-bold text-slate-700">No specific openings found</h4>
                <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-md mx-auto">
                  We did not find any vacancies matching your search. You can still submit a general application below!
                </p>
                <button
                  type="button"
                  onClick={() => handleApplyClick("Other / General Application")}
                  className="mt-5 inline-flex items-center gap-2 bg-[#001744] text-[#FFD907] font-bold text-xs px-5 py-2.5 rounded-full hover:bg-blue-900 transition-colors shadow"
                >
                  <span>Submit General Application</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                {filteredJobs.map((job) => {
                  const isExpanded = expandedJobId === job.id;
                  return (
                    <div
                      key={job.id}
                      className="bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-md transition-all overflow-hidden"
                    >
                      <div className="p-5 sm:p-6 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                        <div className="space-y-2">
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="text-[11px] font-extrabold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded-md border border-blue-100">
                              {job.department}
                            </span>
                            {job.badge && (
                              <span className="text-[11px] font-extrabold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-md border border-emerald-100">
                                {job.badge}
                              </span>
                            )}
                            <span className="text-[11px] font-bold text-slate-500">
                              • {job.openingsCount} {job.openingsCount === 1 ? "Opening" : "Openings"}
                            </span>
                          </div>

                          <h3 className="text-lg sm:text-xl font-black text-[#001744] tracking-tight">
                            {job.title}
                          </h3>

                          <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-500 pt-1">
                            <span className="flex items-center gap-1">
                              <MapPin className="w-3.5 h-3.5 text-slate-400" />
                              {job.location}
                            </span>
                            <span className="flex items-center gap-1">
                              <Briefcase className="w-3.5 h-3.5 text-slate-400" />
                              {job.type}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="w-3.5 h-3.5 text-slate-400" />
                              Exp: {job.experience}
                            </span>
                            <span className="flex items-center gap-1">
                              <GraduationCap className="w-3.5 h-3.5 text-slate-400" />
                              {job.qualification}
                            </span>
                          </div>
                        </div>

                        <div className="flex items-center gap-3 shrink-0 pt-2 lg:pt-0">
                          <button
                            type="button"
                            onClick={() =>
                              setExpandedJobId(isExpanded ? null : job.id)
                            }
                            className="inline-flex items-center gap-1 text-xs font-bold text-slate-600 hover:text-[#001744] px-3.5 py-2.5 rounded-xl border border-slate-200 hover:border-slate-300 transition-colors cursor-pointer"
                          >
                            <span>{isExpanded ? "Less Details" : "View Details"}</span>
                            <ChevronDown
                              className={`w-3.5 h-3.5 transition-transform duration-200 ${
                                isExpanded ? "rotate-180" : ""
                              }`}
                            />
                          </button>

                          <button
                            type="button"
                            onClick={() => handleApplyClick(job.title)}
                            className="inline-flex items-center gap-1.5 bg-[#001744] hover:bg-[#002b7a] text-[#FFD907] font-black text-xs px-5 py-2.5 rounded-xl shadow-sm hover:shadow transition-all active:scale-95 cursor-pointer"
                          >
                            <span>Apply Now</span>
                            <ChevronRight className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>

                      {/* Expandable Accordion */}
                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            className="overflow-hidden border-t border-slate-100 bg-slate-50/70 px-5 sm:px-6 py-5"
                          >
                            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-4">
                              {job.description}
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                              <div>
                                <h4 className="text-xs font-black uppercase tracking-wider text-[#001744] mb-2 flex items-center gap-1.5">
                                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                                  <span>Key Responsibilities</span>
                                </h4>
                                <ul className="space-y-1.5 text-xs text-slate-600">
                                  {job.keyResponsibilities.map((resp, i) => (
                                    <li key={i} className="flex items-start gap-2">
                                      <span className="text-blue-600 font-bold">•</span>
                                      <span>{resp}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              <div>
                                <h4 className="text-xs font-black uppercase tracking-wider text-[#001744] mb-2 flex items-center gap-1.5">
                                  <Award className="w-3.5 h-3.5 text-amber-600" />
                                  <span>Required Qualifications &amp; Skills</span>
                                </h4>
                                <ul className="space-y-1.5 text-xs text-slate-600">
                                  {job.requirements.map((req, i) => (
                                    <li key={i} className="flex items-start gap-2">
                                      <span className="text-amber-600 font-bold">•</span>
                                      <span>{req}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>

                            <div className="mt-5 pt-3 border-t border-slate-200/70 flex justify-end">
                              <button
                                type="button"
                                onClick={() => handleApplyClick(job.title)}
                                className="inline-flex items-center gap-2 bg-[#001744] text-[#FFD907] font-black text-xs px-5 py-2 rounded-xl shadow-sm hover:bg-blue-900 transition-colors cursor-pointer"
                              >
                                <span>Apply for {job.title}</span>
                                <ChevronRight className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </section>

        {/* 4. LIMITED & PROFESSIONAL APPLICATION FORM */}
        <section
          ref={formRef}
          id="apply-now"
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24"
        >
          <div className="bg-white rounded-3xl shadow-xl border border-slate-200/90 p-6 sm:p-10 lg:p-12 relative overflow-hidden">
            <div className="text-center max-w-xl mx-auto mb-8 sm:mb-10 space-y-2">
              <span className="text-xs font-extrabold tracking-wider uppercase text-blue-700 bg-blue-50 px-3.5 py-1 rounded-full border border-blue-100">
                Direct Candidate Application
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#001744] tracking-tight">
                Apply for a Position at Kautilya
              </h2>
              <p className="text-slate-500 text-xs sm:text-sm">
                Applications are delivered directly to{" "}
                <strong className="text-blue-700 font-bold">careers@kautilyavidyalaya.edu.in</strong>. Our HR team reviews profiles on a rolling basis.
              </p>
            </div>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center space-y-4 max-w-lg mx-auto"
              >
                <div className="w-14 h-14 bg-emerald-600 text-white rounded-full flex items-center justify-center mx-auto shadow-md">
                  <Check className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-emerald-900">
                  Application Submitted Successfully!
                </h3>
                <p className="text-xs sm:text-sm text-emerald-800 leading-relaxed">
                  Your application for <strong>{formData.position}</strong> has been transmitted directly to our recruitment desk at <strong>careers@kautilyavidyalaya.edu.in</strong>. If shortlisted, our academic coordinator will contact you to schedule an interaction.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setIsSubmitted(false);
                    setResumeFile(null);
                    setFormData({
                      fullName: "",
                      email: "",
                      phone: "",
                      position: "Front Office Associate",
                      qualification: "",
                      experience: "Fresher / 0–1 Year",
                      coverNote: "",
                    });
                  }}
                  className="mt-4 inline-flex items-center gap-1.5 bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs px-5 py-2.5 rounded-full transition-colors cursor-pointer"
                >
                  <span>Submit Another Application</span>
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {errorMessage && (
                  <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-xl text-xs sm:text-sm flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-red-600 mt-0.5 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {/* Streamlined & Professional 2-Column Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                  {/* 1. Full Name */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ananya Sharma"
                      value={formData.fullName}
                      onChange={(e) =>
                        setFormData({ ...formData, fullName: e.target.value })
                      }
                      className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#001744] focus:bg-white transition-all"
                    />
                  </div>

                  {/* 2. Email Address */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. ananya@gmail.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#001744] focus:bg-white transition-all"
                    />
                  </div>

                  {/* 3. Phone Number */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Mobile Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +91 98765 43210"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#001744] focus:bg-white transition-all"
                    />
                  </div>

                  {/* 4. Position Applied For */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Position Applied For <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={formData.position}
                      onChange={(e) =>
                        setFormData({ ...formData, position: e.target.value })
                      }
                      className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#001744] focus:bg-white transition-all font-medium"
                    >
                      {JOB_OPENINGS.map((job) => (
                        <option key={job.id} value={job.title}>
                          {job.title}
                        </option>
                      ))}
                      <option value="Other / General Application">
                        Other / General Application
                      </option>
                    </select>
                  </div>

                  {/* 5. Highest Qualification */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Highest Qualification <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Any Graduate / B.Ed / MBA / M.Sc"
                      value={formData.qualification}
                      onChange={(e) =>
                        setFormData({ ...formData, qualification: e.target.value })
                      }
                      className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#001744] focus:bg-white transition-all"
                    />
                  </div>

                  {/* 6. Total Experience */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Total Experience <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={formData.experience}
                      onChange={(e) =>
                        setFormData({ ...formData, experience: e.target.value })
                      }
                      className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#001744] focus:bg-white transition-all"
                    >
                      <option value="Fresher / 0–1 Year">Fresher / 0–1 Year (Start your career with us!)</option>
                      <option value="1 – 3 Years">1 – 3 Years</option>
                      <option value="3 – 5 Years">3 – 5 Years</option>
                      <option value="5 – 8 Years">5 – 8 Years</option>
                      <option value="8+ Years">8+ Years</option>
                    </select>
                  </div>
                </div>

                {/* 7. Resume Upload (Clean dropzone) */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Upload Resume / CV (PDF, DOC, DOCX up to 10 MB) <span className="text-red-500">*</span>
                  </label>

                  <input
                    ref={fileInputRef}
                    type="file"
                    id="resume-file-input"
                    accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                    onChange={handleFileChange}
                    className="hidden"
                  />

                  {resumeFile ? (
                    <div className="bg-blue-50/90 border-2 border-blue-200 rounded-2xl p-4 flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0">
                          <FileText className="w-5 h-5" />
                        </div>
                        <div className="min-w-0">
                          <p className="text-sm font-bold text-[#001744] truncate">
                            {resumeFile.name}
                          </p>
                          <p className="text-xs text-slate-500">
                            {(resumeFile.size / (1024 * 1024)).toFixed(2)} MB • Ready to attach
                          </p>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={handleRemoveFile}
                        className="text-slate-400 hover:text-red-600 p-2 rounded-lg hover:bg-red-50 transition-colors cursor-pointer"
                        title="Remove resume"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>
                  ) : (
                    <div
                      onClick={() => fileInputRef.current?.click()}
                      className="border-2 border-dashed border-slate-300 hover:border-[#001744] bg-slate-50/80 hover:bg-blue-50/40 rounded-2xl p-6 text-center cursor-pointer transition-all duration-200"
                    >
                      <Upload className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                      <p className="text-sm font-bold text-slate-700">
                        Click to upload or drag &amp; drop your resume
                      </p>
                      <p className="text-xs text-slate-500 mt-1">
                        Accepted: PDF, DOC, DOCX (Max 10 MB)
                      </p>
                    </div>
                  )}

                  {fileError && (
                    <p className="text-xs text-red-600 mt-1.5 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {fileError}
                    </p>
                  )}
                </div>

                {/* 8. Short Note (Optional) */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Cover Note / Message for Principal (Optional)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Briefly describe your interest in Kautilya Vidyalaya or specific achievements..."
                    value={formData.coverNote}
                    onChange={(e) =>
                      setFormData({ ...formData, coverNote: e.target.value })
                    }
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#001744] focus:bg-white transition-all resize-none"
                  />
                </div>

                {/* Submit Action */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#001744] hover:bg-[#002b7a] text-[#FFD907] font-black text-sm sm:text-base py-3.5 px-6 rounded-xl shadow-md hover:shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed active:scale-[0.99]"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin text-[#FFD907]" />
                        <span>Sending Application to careers@kautilyavidyalaya.edu.in...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-[#FFD907]" />
                        <span>Submit Job Application</span>
                      </>
                    )}
                  </button>
                  <p className="text-[11px] text-slate-400 text-center mt-3">
                    Your details and resume are kept strictly confidential and reviewed by school leadership.
                  </p>
                </div>
              </form>
            )}
          </div>
        </section>

        {/* 5. WHY WORK AT KAUTILYA VIDYALAYA */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 border-t border-slate-200/80">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <span className="text-xs font-extrabold tracking-wider uppercase text-blue-700 bg-blue-50 px-3.5 py-1 rounded-full border border-blue-100">
              Institutional Culture
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#001744] tracking-tight mt-3">
              Why Join Kautilya Vidyalaya?
            </h2>
            <p className="text-slate-500 text-sm sm:text-base mt-2 leading-relaxed">
              A supportive and collaborative team, professional growth and learning opportunities, and a dynamic school environment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {WHY_WORK_WITH_US.map((perk, idx) => (
              <motion.div
                key={perk.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-700 mb-5 group-hover:bg-[#001744] group-hover:text-[#FFD907] transition-colors duration-300">
                    {idx === 0 && <Sparkles className="w-6 h-6" />}
                    {idx === 1 && <GraduationCap className="w-6 h-6" />}
                    {idx === 2 && <Building2 className="w-6 h-6" />}
                    {idx === 3 && <ShieldCheck className="w-6 h-6" />}
                    {idx === 4 && <HeartHandshake className="w-6 h-6" />}
                    {idx === 5 && <Users className="w-6 h-6" />}
                  </div>
                  <h3 className="text-lg font-black text-[#001744] tracking-tight mb-2">
                    {perk.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {perk.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 6. TRANSPARENT 4-STEP HIRING PROCESS */}
        <section className="bg-white py-16 sm:py-24 border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
              <span className="text-xs font-extrabold tracking-wider uppercase text-blue-700 bg-blue-50 px-3.5 py-1 rounded-full border border-blue-100">
                Transparent Roadmap
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#001744] tracking-tight mt-3">
                Our 4-Step Selection Process
              </h2>
              <p className="text-slate-500 text-sm mt-1">
                We respect your time and provide prompt updates at every stage of the evaluation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {HIRING_PROCESS.map((step) => (
                <div
                  key={step.step}
                  className="bg-slate-50 rounded-2xl p-6 border border-slate-200/90 shadow-sm relative group hover:bg-[#001744] hover:text-white transition-all duration-300"
                >
                  <span className="text-3xl font-black text-blue-200 group-hover:text-[#FFD907] transition-colors block mb-3">
                    {step.step}
                  </span>
                  <h3 className="text-base font-extrabold text-[#001744] group-hover:text-white transition-colors mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 group-hover:text-slate-200 transition-colors leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. APPLICANT FAQS & RECRUITMENT DESK CARD */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Left: FAQs */}
            <div className="lg:col-span-7 space-y-4">
              <div className="mb-6">
                <span className="text-xs font-extrabold tracking-wider uppercase text-blue-700 bg-blue-50 px-3.5 py-1 rounded-full border border-blue-100">
                  Applicant Support
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#001744] tracking-tight mt-2">
                  Frequently Asked Questions
                </h2>
              </div>

              {CAREER_FAQS.map((faq, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-sm"
                >
                  <h3 className="text-sm sm:text-base font-bold text-[#001744] flex items-start gap-2.5">
                    <HelpCircle className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>{faq.question}</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-2 pl-6">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>

            {/* Right: Direct HR Desk Contact Box */}
            <div className="lg:col-span-5">
              <div className="bg-[#001744] text-white rounded-3xl p-7 sm:p-9 shadow-xl border border-white/10 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />

                <span className="text-xs font-extrabold tracking-wider uppercase text-[#FFD907] bg-white/10 px-3.5 py-1 rounded-full border border-white/10">
                  Recruitment Desk
                </span>
                <h3 className="text-xl sm:text-2xl font-black mt-4">
                  Have Questions Before Applying?
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                  Our HR desk is available during campus hours to answer questions regarding vacancies, eligibility, and campus location.
                </p>

                <div className="space-y-4 mt-6 pt-6 border-t border-white/10 text-xs sm:text-sm">
                  <div className="flex items-start gap-3">
                    <Mail className="w-4 h-4 text-[#FFD907] shrink-0 mt-0.5" />
                    <div>
                      <span className="text-slate-400 block text-[11px]">Direct Resume Email</span>
                      <a
                        href="mailto:careers@kautilyavidyalaya.edu.in?subject=Application%20for%20Job%20Vacancy%20-%20Kautilya%20Vidyalaya"
                        className="text-white hover:text-[#38bdf8] font-bold transition-colors"
                      >
                        careers@kautilyavidyalaya.edu.in
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-4 h-4 text-[#FFD907] shrink-0 mt-0.5" />
                    <div>
                      <span className="text-slate-400 block text-[11px]">Direct Phone Desk</span>
                      <a
                        href="tel:+917090671299"
                        className="text-white hover:text-[#38bdf8] font-bold transition-colors block"
                      >
                        +91 70906 71299
                      </a>
                      <a
                        href="tel:08212460266"
                        className="text-white hover:text-[#38bdf8] font-bold transition-colors block mt-0.5"
                      >
                        0821 - 2460266
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-[#FFD907] shrink-0 mt-0.5" />
                    <div>
                      <span className="text-slate-400 block text-[11px]">Campus Location</span>
                      <p className="text-slate-300 leading-snug">
                        {contactInfo.address}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-white/10">
                  <a
                    href="#openings"
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#FFD907] hover:bg-yellow-400 text-[#001744] font-black text-xs py-3 rounded-xl transition-all shadow cursor-pointer"
                  >
                    <span>View All Job Openings</span>
                    <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* POSTER MODAL LIGHTBOX */}
        <AnimatePresence>
          {isPosterModalOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
              onClick={() => setIsPosterModalOpen(false)}
            >
              <div
                className="relative max-w-lg w-full max-h-[90vh] bg-white rounded-3xl overflow-hidden shadow-2xl p-2"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  type="button"
                  onClick={() => setIsPosterModalOpen(false)}
                  className="absolute top-4 right-4 z-10 w-9 h-9 bg-black/70 hover:bg-black text-white rounded-full flex items-center justify-center shadow-lg transition-colors cursor-pointer"
                  aria-label="Close flyer"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="relative aspect-[541/797] w-full rounded-2xl overflow-hidden">
                  <Image
                    src="/images/careers/kautilya-hiring-poster.webp"
                    alt="Official Hiring Poster - Kautilya Vidyalaya"
                    fill
                    sizes="(max-width: 640px) 100vw, 520px"
                    className="object-contain"
                  />
                </div>
                <div className="p-3 text-center">
                  <a
                    href="/images/careers/kautilya-hiring-poster.png"
                    download="Kautilya-Vidyalaya-Hiring-Flyer.png"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 hover:text-blue-900"
                  >
                    <span>Download High-Resolution Flyer</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <Footer />
      <AdmissionModal
        isOpen={isAdmissionModalOpen}
        onClose={() => setIsAdmissionModalOpen(false)}
      />
    </div>
  );
}
