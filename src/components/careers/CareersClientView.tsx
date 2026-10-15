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
} from "lucide-react";
import {
  JOB_OPENINGS,
  CAREER_DEPARTMENTS,
  WHY_WORK_WITH_US,
  HIRING_PROCESS,
  CAREER_FAQS,
  JobOpening,
} from "@/data/careersData";
import { contactInfo } from "@/data/siteData";

export default function CareersClientView() {
  const [isAdmissionModalOpen, setIsAdmissionModalOpen] = useState(false);
  const [selectedDept, setSelectedDept] = useState<string>("All Openings");
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedJobId, setExpandedJobId] = useState<string | null>(null);

  // Form State
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    position: "Pre-Primary / Kindergarten Teacher (NTT / Montessori)",
    qualification: "",
    experience: "1 – 3 Years",
    currentOrg: "",
    noticePeriod: "Immediate",
    location: "Mysuru",
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

    // Check size (10 MB max)
    if (file.size > 10 * 1024 * 1024) {
      setFileError("File size exceeds 10 MB. Please upload a smaller document.");
      return;
    }

    // Check format
    const allowed = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];
    if (!allowed.includes(file.type) && !file.name.match(/\.(pdf|doc|docx)$/i)) {
      setFileError("Invalid format. Please upload your resume in PDF, DOC, or DOCX format.");
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
      data.append("currentOrg", formData.currentOrg);
      data.append("noticePeriod", formData.noticePeriod);
      data.append("location", formData.location);
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
      setErrorMessage("Network error. Please check your internet connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-800 selection:bg-[#FFD907] selection:text-[#001744]">
      <Navbar onOpenAdmissionModal={() => setIsAdmissionModalOpen(true)} />

      <main className="flex-grow">
        {/* HERO SECTION */}
        <InnerPageHero
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Careers" },
          ]}
          badge={{
            text: "Work With Us • Academic Year 2027-28",
            icon: Briefcase,
          }}
          title="Careers at Kautilya"
          subtitle="Join a forward-thinking academic family dedicated to nurturing young minds with value-grounded CBSE education, modern innovation, and human compassion."
          waveFillColor="#f8fafc"
        />

        {/* 1. KEY METRICS STRIP */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 sm:-mt-8 relative z-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-5">
            <div className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-md text-center">
              <span className="block text-2xl sm:text-3xl font-black text-[#001744]">
                25+
              </span>
              <span className="text-xs sm:text-sm font-semibold text-slate-500 mt-0.5 block">
                Years of Excellence
              </span>
            </div>
            <div className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-md text-center">
              <span className="block text-2xl sm:text-3xl font-black text-blue-700">
                100+
              </span>
              <span className="text-xs sm:text-sm font-semibold text-slate-500 mt-0.5 block">
                Faculty &amp; Staff Members
              </span>
            </div>
            <div className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-md text-center">
              <span className="block text-2xl sm:text-3xl font-black text-emerald-700">
                100%
              </span>
              <span className="text-xs sm:text-sm font-semibold text-slate-500 mt-0.5 block">
                CBSE Board Distinction
              </span>
            </div>
            <div className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-md text-center">
              <span className="block text-2xl sm:text-3xl font-black text-amber-600">
                1:20
              </span>
              <span className="text-xs sm:text-sm font-semibold text-slate-500 mt-0.5 block">
                Teacher-Student Ratio
              </span>
            </div>
          </div>
        </section>

        {/* 2. WHY TEACH AT KAUTILYA VIDYALAYA */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <span className="text-xs font-extrabold tracking-wider uppercase text-blue-700 bg-blue-50 px-3.5 py-1 rounded-full border border-blue-100">
              Why Join Kautilya
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#001744] tracking-tight mt-3">
              A Fulfilling Pedagogical Environment
            </h2>
            <p className="text-slate-500 text-sm sm:text-base mt-2 leading-relaxed">
              We empower educators with academic freedom, state-of-the-art facilities, continuous professional development, and a culture of mutual respect.
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

        {/* 3. CURRENT OPENINGS EXPLORER */}
        <section id="openings" className="bg-slate-100/70 py-16 sm:py-20 border-y border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
              <div>
                <span className="text-xs font-extrabold tracking-wider uppercase text-blue-700 bg-blue-50 px-3.5 py-1 rounded-full border border-blue-100">
                  Current Vacancies
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#001744] tracking-tight mt-3">
                  Explore Teaching &amp; Administrative Roles
                </h2>
                <p className="text-slate-500 text-sm mt-1">
                  We are actively welcoming passionate educators for the 2027-28 academic session.
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
                  We did not find any vacancies matching your current filter. However, you can still submit a general application below!
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
                              • {job.openingsCount} {job.openingsCount === 1 ? "Vacancy" : "Vacancies"}
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

        {/* 4. ONLINE APPLICATION FORM */}
        <section
          ref={formRef}
          id="apply-now"
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20"
        >
          <div className="bg-white rounded-3xl shadow-xl border border-slate-200/90 p-6 sm:p-10 lg:p-12 relative overflow-hidden">
            <div className="text-center max-w-xl mx-auto mb-8 sm:mb-10 space-y-2">
              <span className="text-xs font-extrabold tracking-wider uppercase text-blue-700 bg-blue-50 px-3.5 py-1 rounded-full border border-blue-100">
                Online Application
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#001744] tracking-tight">
                Submit Your Job Application
              </h2>
              <p className="text-slate-500 text-xs sm:text-sm">
                Fill in your professional background and attach your CV / Resume. Our recruitment panel reviews applications on a rolling basis.
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
                  Thank you for applying for{" "}
                  <strong>{formData.position}</strong>. Our academic recruitment team will review your profile and resume. If shortlisted, we will contact you via email or phone to schedule a mock classroom demo.
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
                      position: "Pre-Primary / Kindergarten Teacher (NTT / Montessori)",
                      qualification: "",
                      experience: "1 – 3 Years",
                      currentOrg: "",
                      noticePeriod: "Immediate",
                      location: "Mysuru",
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

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Full Name */}
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

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. ananya.teacher@gmail.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#001744] focus:bg-white transition-all"
                    />
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Phone Number <span className="text-red-500">*</span>
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

                  {/* Position Applied For */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Position Applied For <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={formData.position}
                      onChange={(e) =>
                        setFormData({ ...formData, position: e.target.value })
                      }
                      className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#001744] focus:bg-white transition-all"
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

                  {/* Highest Qualification */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Highest Qualification <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. M.Sc (Maths), B.Ed, CTET"
                      value={formData.qualification}
                      onChange={(e) =>
                        setFormData({ ...formData, qualification: e.target.value })
                      }
                      className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#001744] focus:bg-white transition-all"
                    />
                  </div>

                  {/* Total Experience */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Total Relevant Experience
                    </label>
                    <select
                      value={formData.experience}
                      onChange={(e) =>
                        setFormData({ ...formData, experience: e.target.value })
                      }
                      className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#001744] focus:bg-white transition-all"
                    >
                      <option value="Fresher (0 - 1 Year)">Fresher (0 – 1 Year)</option>
                      <option value="1 – 3 Years">1 – 3 Years</option>
                      <option value="3 – 5 Years">3 – 5 Years</option>
                      <option value="5 – 8 Years">5 – 8 Years</option>
                      <option value="8+ Years">8+ Years</option>
                    </select>
                  </div>

                  {/* Current Organization */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Current School / Organization
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. DPS / St. Joseph / None"
                      value={formData.currentOrg}
                      onChange={(e) =>
                        setFormData({ ...formData, currentOrg: e.target.value })
                      }
                      className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#001744] focus:bg-white transition-all"
                    />
                  </div>

                  {/* Notice Period */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Notice Period / Availability
                    </label>
                    <select
                      value={formData.noticePeriod}
                      onChange={(e) =>
                        setFormData({ ...formData, noticePeriod: e.target.value })
                      }
                      className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#001744] focus:bg-white transition-all"
                    >
                      <option value="Immediate">Immediate</option>
                      <option value="15 Days">15 Days</option>
                      <option value="1 Month">1 Month</option>
                      <option value="2 Months">2 Months</option>
                      <option value="From Next Academic Session">From Next Academic Session</option>
                    </select>
                  </div>
                </div>

                {/* Current Location */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Current Location / City
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Mysuru, Bengaluru, Mandya"
                    value={formData.location}
                    onChange={(e) =>
                      setFormData({ ...formData, location: e.target.value })
                    }
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#001744] focus:bg-white transition-all"
                  />
                </div>

                {/* RESUME UPLOAD DROPZONE */}
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
                    <div className="bg-blue-50/80 border-2 border-blue-200 rounded-2xl p-4 flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0">
                          <FileText className="w-5 h-5" />
                        </div>
                        <div className="min-w-0">
                          <p className="text-sm font-bold text-[#001744] truncate">
                            {resumeFile.name}
                          </p>
                          <p className="text-xs text-slate-500">
                            {(resumeFile.size / (1024 * 1024)).toFixed(2)} MB • Ready for review
                          </p>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={handleRemoveFile}
                        className="text-slate-400 hover:text-red-600 p-2 rounded-lg hover:bg-red-50 transition-colors"
                        title="Remove resume"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>
                  ) : (
                    <div
                      onClick={() => fileInputRef.current?.click()}
                      className="border-2 border-dashed border-slate-300 hover:border-[#001744] bg-slate-50/80 hover:bg-blue-50/30 rounded-2xl p-6 text-center cursor-pointer transition-all duration-200"
                    >
                      <Upload className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                      <p className="text-sm font-bold text-slate-700">
                        Click to select or drag and drop your resume file
                      </p>
                      <p className="text-xs text-slate-500 mt-1">
                        Supported formats: PDF, DOC, DOCX (Maximum file size: 10 MB)
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

                {/* Brief Cover Note */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Cover Note / Brief Teaching Philosophy (Optional)
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your teaching style, why you wish to join Kautilya Vidyalaya, and key achievements..."
                    value={formData.coverNote}
                    onChange={(e) =>
                      setFormData({ ...formData, coverNote: e.target.value })
                    }
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#001744] focus:bg-white transition-all resize-none"
                  />
                </div>

                {/* Submit CTA */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#001744] hover:bg-[#002b7a] text-[#FFD907] font-black text-sm sm:text-base py-3.5 px-6 rounded-xl shadow-md hover:shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin text-[#FFD907]" />
                        <span>Submitting Application &amp; Uploading Resume...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-[#FFD907]" />
                        <span>Submit Job Application</span>
                      </>
                    )}
                  </button>
                  <p className="text-[11px] text-slate-400 text-center mt-3">
                    Your application data and uploaded resume are treated with strict confidentiality.
                  </p>
                </div>
              </form>
            )}
          </div>
        </section>

        {/* 5. 4-STEP RECRUITMENT JOURNEY */}
        <section className="bg-white py-16 sm:py-20 border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
              <span className="text-xs font-extrabold tracking-wider uppercase text-blue-700 bg-blue-50 px-3.5 py-1 rounded-full border border-blue-100">
                Selection Process
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#001744] tracking-tight mt-3">
                Our 4-Step Hiring Roadmap
              </h2>
              <p className="text-slate-500 text-sm mt-1">
                A transparent, merit-based selection process focused on pedagogical passion and cultural alignment.
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

        {/* 6. APPLICANT FAQS & HR DESK */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Left: FAQs */}
            <div className="lg:col-span-7 space-y-4">
              <div className="mb-6">
                <span className="text-xs font-extrabold tracking-wider uppercase text-blue-700 bg-blue-50 px-3.5 py-1 rounded-full border border-blue-100">
                  Applicant Queries
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

            {/* Right: HR & Direct Contact Card */}
            <div className="lg:col-span-5">
              <div className="bg-[#001744] text-white rounded-3xl p-7 sm:p-8 shadow-xl border border-white/10 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />

                <span className="text-xs font-extrabold tracking-wider uppercase text-[#FFD907] bg-white/10 px-3.5 py-1 rounded-full border border-white/10">
                  Recruitment Desk
                </span>
                <h3 className="text-xl sm:text-2xl font-black mt-4">
                  Have Questions Before Applying?
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                  Our HR desk is happy to guide you regarding current openings, eligibility criteria, and campus walkthroughs.
                </p>

                <div className="space-y-4 mt-6 pt-6 border-t border-white/10 text-xs sm:text-sm">
                  <div className="flex items-start gap-3">
                    <Mail className="w-4 h-4 text-[#FFD907] shrink-0 mt-0.5" />
                    <div>
                      <span className="text-slate-400 block text-[11px]">Email HR Desk</span>
                      <a
                        href="mailto:enquiry@kautilyavidyalaya.edu.in?subject=Career%20Inquiry%20-%20Kautilya%20Vidyalaya"
                        className="text-white hover:text-[#38bdf8] font-bold transition-colors"
                      >
                        enquiry@kautilyavidyalaya.edu.in
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-4 h-4 text-[#FFD907] shrink-0 mt-0.5" />
                    <div>
                      <span className="text-slate-400 block text-[11px]">Direct Line</span>
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
      </main>

      <Footer />
      <AdmissionModal
        isOpen={isAdmissionModalOpen}
        onClose={() => setIsAdmissionModalOpen(false)}
      />
    </div>
  );
}
