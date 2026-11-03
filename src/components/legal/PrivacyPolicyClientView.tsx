"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppWidget from "@/components/ui/WhatsAppWidget";
import AdmissionModal from "@/components/ui/AdmissionModal";
import InnerPageHero from "@/components/ui/InnerPageHero";
import { contactInfo } from "@/data/siteData";
import {
  ShieldCheck,
  Lock,
  Eye,
  FileText,
  Users,
  CreditCard,
  Camera,
  CheckCircle2,
  AlertCircle,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  ChevronRight,
  Clock,
  Building2,
  Sparkles,
  Server,
  KeyRound,
  FileCheck,
  UserCheck,
} from "lucide-react";

const tableOfContents = [
  { id: "overview", label: "1. Institutional Scope" },
  { id: "information-collected", label: "2. Information We Collect" },
  { id: "children-privacy", label: "3. Children & Minors' Safeguards" },
  { id: "how-we-use", label: "4. Purpose & Lawful Use" },
  { id: "data-sharing", label: "5. Information Sharing & Disclosure" },
  { id: "fee-payments", label: "6. Fee Payments & ERP Security" },
  { id: "data-security", label: "7. Security & Retention Policy" },
  { id: "cookies-tracking", label: "8. Cookies & Advertising Tags" },
  { id: "parent-rights", label: "9. Rights of Parents & Guardians" },
  { id: "grievance-officer", label: "10. Grievance Redressal Officer" },
];

export default function PrivacyPolicyClientView() {
  const [isAdmissionModalOpen, setIsAdmissionModalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("overview");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (let i = tableOfContents.length - 1; i >= 0; i--) {
        const item = tableOfContents[i];
        const el = document.getElementById(item.id);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(item.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -90;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-800 selection:bg-[#FFD907] selection:text-[#001744]">
      {/* 1. TOP BAR & NAVIGATION */}
      <Navbar onOpenAdmissionModal={() => setIsAdmissionModalOpen(true)} />

      <main className="flex-grow">
        {/* HERO SECTION */}
        <InnerPageHero
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Privacy Policy" },
          ]}
          badge={{
            text: "Institutional Data Governance & Child Privacy",
            icon: ShieldCheck,
          }}
          title="Privacy Policy"
          subtitle="Our transparent commitment to protecting student, parent, staff, and visitor data under the Digital Personal Data Protection Act, 2023 and CBSE educational safety norms."
          waveFillColor="#f8fafc"
        />

        {/* TOP HIGHLIGHT PILLARS */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 sm:-mt-8 relative z-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="bg-white rounded-2xl p-5 shadow-lg border border-slate-100 flex items-start gap-3.5 hover:shadow-xl transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center shrink-0">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-sm font-bold text-[#001744]">Child-First Safety</h2>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                  Strict parental consent requirement; zero commercial profiling or advertising aimed at students.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-5 shadow-lg border border-slate-100 flex items-start gap-3.5 hover:shadow-xl transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center shrink-0">
                <Lock className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-sm font-bold text-[#001744]">No Data Selling</h2>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                  We never sell, rent, or trade student or family contact information to third-party telemarketers.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-5 shadow-lg border border-slate-100 flex items-start gap-3.5 hover:shadow-xl transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
                <Server className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-sm font-bold text-[#001744]">Secure Architecture</h2>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                  SSL/TLS encryption, secure ERP student portals, and role-based administrative access controls.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-5 shadow-lg border border-slate-100 flex items-start gap-3.5 hover:shadow-xl transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-700 flex items-center justify-center shrink-0">
                <FileCheck className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-sm font-bold text-[#001744]">CBSE &amp; DPDP Aligned</h2>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                  Formulated under the DPDP Act 2023, IT Act 2000, and CBSE circulars on school digital safety.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* MAIN BODY: 2-COLUMN LAYOUT WITH STICKY SIDEBAR */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* LEFT COLUMN: STICKY TABLE OF CONTENTS & QUICK CONTACT (lg:col-span-4) */}
            <aside className="lg:col-span-4 lg:sticky lg:top-24 space-y-6">
              {/* Table of contents card */}
              <div className="bg-white rounded-2xl p-6 shadow-md border border-slate-200">
                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <FileText className="w-4 h-4 text-blue-600" />
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
                      Table of Contents
                    </span>
                  </div>
                  <span className="text-[11px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded font-medium">
                    10 Sections
                  </span>
                </div>

                <nav className="mt-4 space-y-1" aria-label="Table of contents">
                  {tableOfContents.map((item) => {
                    const isActive = activeSection === item.id;
                    return (
                      <button
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        className={`w-full text-left px-3 py-2 rounded-lg text-xs font-medium transition-all flex items-center justify-between ${
                          isActive
                            ? "bg-[#001744] text-[#FFD907] font-semibold shadow-sm"
                            : "text-slate-600 hover:text-[#001744] hover:bg-slate-50"
                        }`}
                      >
                        <span className="truncate">{item.label}</span>
                        {isActive && <ChevronRight className="w-3.5 h-3.5 shrink-0 text-[#FFD907]" />}
                      </button>
                    );
                  })}
                </nav>

                <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    Last Updated: Nov 2026
                  </span>
                  <span className="text-emerald-600 font-semibold flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" /> Active
                  </span>
                </div>
              </div>

              {/* Quick Institutional Summary Card */}
              <div className="bg-[#001744] text-white rounded-2xl p-6 shadow-md space-y-4">
                <div className="flex items-center gap-2 text-[#FFD907] text-xs font-bold uppercase tracking-wider">
                  <Building2 className="w-4 h-4" />
                  <span>Institutional Identity</span>
                </div>
                <div className="space-y-2 text-xs text-slate-200">
                  <p className="font-semibold text-white">Kautilya Vidyalaya Group of Institutions</p>
                  <p className="text-slate-300">CBSE Affiliation No: {contactInfo.affiliationNo} | School Code: {contactInfo.schoolCode}</p>
                  <p className="text-slate-300 leading-relaxed">{contactInfo.address}</p>
                </div>
                <div className="pt-2 border-t border-white/10 flex flex-col gap-2 text-xs">
                  <a
                    href="mailto:enquiry@kautilyavidyalaya.edu.in"
                    className="flex items-center gap-2 text-slate-200 hover:text-[#FFD907] transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5 text-[#FFD907] shrink-0" />
                    <span className="truncate">enquiry@kautilyavidyalaya.edu.in</span>
                  </a>
                  <a
                    href="tel:+919900038358"
                    className="flex items-center gap-2 text-slate-200 hover:text-[#FFD907] transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#FFD907] shrink-0" />
                    <span>+91 99000 38358 (Helpdesk)</span>
                  </a>
                </div>
              </div>

              {/* Quick Navigation Links */}
              <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-200 space-y-2.5">
                <span className="text-xs font-bold text-slate-800 uppercase tracking-wider block">
                  Related Disclosures
                </span>
                <Link
                  href="/mandatory-public-disclosure"
                  className="flex items-center justify-between text-xs text-slate-600 hover:text-blue-700 py-1.5 border-b border-slate-100 transition-colors"
                >
                  <span>Mandatory Public Disclosure (CBSE)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </Link>
                <Link
                  href="/fee-structure"
                  className="flex items-center justify-between text-xs text-slate-600 hover:text-blue-700 py-1.5 border-b border-slate-100 transition-colors"
                >
                  <span>Fee Structure &amp; Schedules</span>
                  <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                </Link>
                <Link
                  href="/contact-us"
                  className="flex items-center justify-between text-xs text-slate-600 hover:text-blue-700 py-1.5 transition-colors"
                >
                  <span>Contact Campus &amp; Grievance Helpdesk</span>
                  <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                </Link>
              </div>
            </aside>

            {/* RIGHT COLUMN: DETAILED SECTIONS (lg:col-span-8) */}
            <div className="lg:col-span-8 space-y-10">
              {/* SECTION 1: OVERVIEW */}
              <section id="overview" className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200 space-y-4">
                <div className="flex items-center gap-2.5 text-blue-700 font-bold text-xs uppercase tracking-wider">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Section 1</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-extrabold text-[#001744]">
                  1. Institutional Scope &amp; Commitment
                </h2>
                <div className="text-slate-600 text-sm leading-relaxed space-y-3">
                  <p>
                    Welcome to <strong>Kautilya Vidyalaya</strong> (&ldquo;School&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;), a premier educational institution affiliated with the Central Board of Secondary Education (CBSE), New Delhi (Affiliation No: <strong>{contactInfo.affiliationNo}</strong>, School Code: <strong>{contactInfo.schoolCode}</strong>), located at Dattagalli 3rd Stage, Kanakadasa Nagar, Mysuru, Karnataka 570033.
                  </p>
                  <p>
                    This Privacy Policy applies to our website (<Link href="/" className="text-blue-600 hover:underline font-medium">https://kautilyavidyalaya.edu.in</Link>), our school communication touchpoints, online inquiry forms, admission registrations, career portals, and interactions on our official school management platforms.
                  </p>
                  <p>
                    We recognize that personal information concerning students, parents, guardians, teachers, and prospective applicants is sensitive and deserves the highest standard of protection. This policy outlines how we collect, process, safeguard, and respect personal data in accordance with the <strong>Digital Personal Data Protection Act, 2023 (DPDP Act)</strong>, the <strong>Information Technology Act, 2000</strong> (including SPDI Rules 2011), and guidelines issued by the Central Board of Secondary Education and Government of Karnataka.
                  </p>
                </div>
              </section>

              {/* SECTION 2: INFORMATION WE COLLECT */}
              <section id="information-collected" className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200 space-y-5">
                <div className="flex items-center gap-2.5 text-blue-700 font-bold text-xs uppercase tracking-wider">
                  <FileText className="w-4 h-4" />
                  <span>Section 2</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-extrabold text-[#001744]">
                  2. Categories of Information We Collect
                </h2>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Depending on your interaction with Kautilya Vidyalaya, we collect specific categories of personal data exclusively to fulfill legitimate educational, administrative, and safety requirements:
                </p>

                <div className="space-y-4 pt-2">
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2">
                    <h3 className="text-sm font-bold text-[#001744] flex items-center gap-2">
                      <UserCheck className="w-4 h-4 text-blue-600" />
                      A. Prospective Student &amp; Parent Enquiries
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      When parents submit online admission enquiries, contact forms, or brochure download requests, we collect the child&rsquo;s name, date of birth, grade/class applied for, previous school attended, and parents&rsquo;/guardians&rsquo; names, contact numbers, email addresses, and residential locality.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2">
                    <h3 className="text-sm font-bold text-[#001744] flex items-center gap-2">
                      <FileCheck className="w-4 h-4 text-emerald-600" />
                      B. Enrolled Student &amp; Academic Records
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Upon enrollment, we maintain academic records, attendance logs, CBSE registration credentials, report cards, emergency medical details (allergies, blood group, emergency doctor contact), and identification proofs required by government and educational authorities.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2">
                    <h3 className="text-sm font-bold text-[#001744] flex items-center gap-2">
                      <CreditCard className="w-4 h-4 text-amber-600" />
                      C. Fee Payment &amp; Billing Data
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Fee payments are facilitated through our official ERP partner (SchoolElement) and RBI-regulated payment gateways. Kautilya Vidyalaya captures transaction reference IDs, dates, and student identifiers. <strong>We do not collect, process, or store credit/debit card numbers, CVVs, or Net Banking PINs on our servers.</strong>
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2">
                    <h3 className="text-sm font-bold text-[#001744] flex items-center gap-2">
                      <Users className="w-4 h-4 text-purple-600" />
                      D. Job Applicants &amp; Faculty Recruitment
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Candidates submitting career applications provide curriculum vitae (CVs), educational degrees, teaching certifications (B.Ed/TET/CTET), prior employment references, government photo identification, and contact information strictly for vetting and recruitment purposes.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2">
                    <h3 className="text-sm font-bold text-[#001744] flex items-center gap-2">
                      <Camera className="w-4 h-4 text-rose-600" />
                      E. Campus Safety, Security &amp; CCTV
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      To ensure student security and physical safety, our campus entry gates, perimeter, hallways, playgrounds, and school transport buses are monitored with closed-circuit television (CCTV). Footage is kept strictly confidential, overwritten systematically, and accessed only for authorized campus security reviews or statutory compliance.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2">
                    <h3 className="text-sm font-bold text-[#001744] flex items-center gap-2">
                      <Server className="w-4 h-4 text-slate-700" />
                      F. Website Analytics &amp; Technical Metadata
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Our web servers automatically record non-personally identifiable diagnostic information such as IP addresses, browser types, operating systems, referring URLs, visit timestamps, and pages viewed to optimize site reliability, speed, and defense against malicious traffic.
                    </p>
                  </div>
                </div>
              </section>

              {/* SECTION 3: CHILDREN'S PRIVACY */}
              <section id="children-privacy" className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200 space-y-4">
                <div className="flex items-center gap-2.5 text-blue-700 font-bold text-xs uppercase tracking-wider">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Section 3</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-extrabold text-[#001744]">
                  3. Protection of Children &amp; Minors&rsquo; Privacy
                </h2>
                <div className="text-slate-600 text-sm leading-relaxed space-y-3">
                  <p>
                    As an educational institution catering to students from Pre-Primary through Grade 10, protecting minors is central to our ethos. In compliance with Section 9 of the <strong>Digital Personal Data Protection Act, 2023</strong>:
                  </p>
                  <ul className="space-y-2 pl-2">
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>Verifiable Parental Consent:</strong> We collect personal data of students under 18 years of age only through or with the verifiable consent of their parents or legal guardians.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>No Behavioral Profiling or Targeted Ads:</strong> We never engage in behavioral tracking, profiling, or targeted advertising directed at children.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>No Harmful Processing:</strong> We do not undertake any processing of personal data that could cause detrimental physical, mental, or emotional effects on the well-being of a child.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>Media &amp; Photographs:</strong> Photographs or videos of students participating in academic achievements, sports days, cultural programs, and science exhibitions may appear in school newsletters or official portals celebrating student milestones. Parents who prefer that their child not be photographed in recognizable media can submit an opt-out declaration to the Principal&rsquo;s office at any time.</span>
                    </li>
                  </ul>
                </div>
              </section>

              {/* SECTION 4: HOW WE USE */}
              <section id="how-we-use" className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200 space-y-4">
                <div className="flex items-center gap-2.5 text-blue-700 font-bold text-xs uppercase tracking-wider">
                  <Eye className="w-4 h-4" />
                  <span>Section 4</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-extrabold text-[#001744]">
                  4. Purpose and Lawful Grounds for Processing
                </h2>
                <p className="text-slate-600 text-sm leading-relaxed">
                  We process personal information under lawful grounds recognized under the DPDP Act and educational mandates, specifically:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 pt-2">
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
                    <span className="font-bold text-xs text-[#001744] block mb-1">Admissions &amp; Onboarding</span>
                    <p className="text-xs text-slate-600">Reviewing eligibility, scheduling campus visits, processing enrollment, and issuing admission confirmations.</p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
                    <span className="font-bold text-xs text-[#001744] block mb-1">Academic Administration</span>
                    <p className="text-xs text-slate-600">Managing classroom instruction, progress assessments, CBSE board exam registrations, and official report cards.</p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
                    <span className="font-bold text-xs text-[#001744] block mb-1">Parent Communication</span>
                    <p className="text-xs text-slate-600">Sending vital school notices, academic circulars, exam schedules, bus routes, fee receipts, and emergency alerts.</p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
                    <span className="font-bold text-xs text-[#001744] block mb-1">Student Welfare &amp; Safety</span>
                    <p className="text-xs text-slate-600">Providing first aid, coordinating doctor-on-call protocols, school bus GPS tracking, and campus security.</p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
                    <span className="font-bold text-xs text-[#001744] block mb-1">Statutory Compliance</span>
                    <p className="text-xs text-slate-600">Reporting student enrolments and compliance data to the CBSE, Karnataka Department of Education, and government audits.</p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
                    <span className="font-bold text-xs text-[#001744] block mb-1">Careers &amp; Employment</span>
                    <p className="text-xs text-slate-600">Assessing teaching qualifications, credential verification, payroll administration, and statutory staff benefits.</p>
                  </div>
                </div>
              </section>

              {/* SECTION 5: DATA SHARING */}
              <section id="data-sharing" className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200 space-y-4">
                <div className="flex items-center gap-2.5 text-blue-700 font-bold text-xs uppercase tracking-wider">
                  <Lock className="w-4 h-4" />
                  <span>Section 5</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-extrabold text-[#001744]">
                  5. Information Sharing and Disclosure
                </h2>
                <div className="text-slate-600 text-sm leading-relaxed space-y-3">
                  <p>
                    <strong>Strict No-Sale Pledge:</strong> Kautilya Vidyalaya has never sold, rented, or traded personal data, and we will never do so. Personal data is shared strictly on a need-to-know basis with:
                  </p>
                  <ul className="space-y-2.5 pl-2">
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                      <span><strong>Educational &amp; Regulatory Authorities:</strong> CBSE New Delhi, Department of School Education and Literacy, and Karnataka State Government authorities for board examinations, scholarship verification, and mandatory compliance filings.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                      <span><strong>Authorized Educational Technology Partners:</strong> Trusted technology vendors such as SchoolElement (ERP), official SMS and transactional communication gateways, and certified IT service providers operating under strict confidentiality and data protection agreements.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                      <span><strong>Emergency &amp; Medical Personnel:</strong> First-response hospitals and certified pediatric doctors in the event of an urgent medical requirement during school hours or transit.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                      <span><strong>Legal &amp; Law Enforcement:</strong> Only when strictly mandated by a valid judicial court order, statutory regulation, or law enforcement summons under applicable Indian laws.</span>
                    </li>
                  </ul>
                </div>
              </section>

              {/* SECTION 6: FEE PAYMENTS & ERP SECURITY */}
              <section id="fee-payments" className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200 space-y-4">
                <div className="flex items-center gap-2.5 text-blue-700 font-bold text-xs uppercase tracking-wider">
                  <CreditCard className="w-4 h-4" />
                  <span>Section 6</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-extrabold text-[#001744]">
                  6. Online Fee Payments &amp; ERP Security
                </h2>
                <div className="text-slate-600 text-sm leading-relaxed space-y-3">
                  <p>
                    For convenience and safety, tuition and school fees can be paid online through our authorized school ERP portal (<a href="https://kautilya.schoolelement.in" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-semibold inline-flex items-center gap-1">SchoolElement ERP <ExternalLink className="w-3 h-3" /></a>).
                  </p>
                  <div className="bg-amber-50/70 border border-amber-200/80 rounded-xl p-4 text-xs text-amber-900 space-y-2">
                    <div className="flex items-center gap-2 font-bold text-amber-950">
                      <AlertCircle className="w-4 h-4 text-amber-700 shrink-0" />
                      <span>Zero Financial Credentials Stored</span>
                    </div>
                    <p>
                      All electronic transactions are processed through RBI-authorized payment aggregators utilizing PCI-DSS compliant 256-bit SSL encryption. Kautilya Vidyalaya never collects, views, or stores your bank account passwords, UPI PINs, credit card numbers, or CVVs.
                    </p>
                  </div>
                  <p>
                    Upon successful transaction completion, an authentic, digitally generated fee receipt is issued containing the student registration ID, transaction reference number, and academic head.
                  </p>
                </div>
              </section>

              {/* SECTION 7: DATA SECURITY & RETENTION */}
              <section id="data-security" className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200 space-y-4">
                <div className="flex items-center gap-2.5 text-blue-700 font-bold text-xs uppercase tracking-wider">
                  <KeyRound className="w-4 h-4" />
                  <span>Section 7</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-extrabold text-[#001744]">
                  7. Data Security Measures &amp; Retention Policy
                </h2>
                <div className="text-slate-600 text-sm leading-relaxed space-y-3">
                  <p>
                    We implement organizational, technical, and physical security safeguards to prevent unauthorized access, alteration, disclosure, or accidental destruction of data:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                      <span className="font-bold text-xs text-[#001744] block mb-1">Encrypted Transmission</span>
                      <p className="text-xs text-slate-600">All data transferred through our website is secured with industry-standard HTTPS / TLS encryption.</p>
                    </div>
                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                      <span className="font-bold text-xs text-[#001744] block mb-1">Role-Based Access (RBAC)</span>
                      <p className="text-xs text-slate-600">Access to student files is restricted strictly to designated teachers, principals, and administrative staff.</p>
                    </div>
                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                      <span className="font-bold text-xs text-[#001744] block mb-1">Physical Archive Security</span>
                      <p className="text-xs text-slate-600">Physical admission forms and academic dossiers are stored in locked, monitored administrative archives.</p>
                    </div>
                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                      <span className="font-bold text-xs text-[#001744] block mb-1">Routine Security Audits</span>
                      <p className="text-xs text-slate-600">Regular system updates, malware scanning, and access log reviews to maintain digital infrastructure integrity.</p>
                    </div>
                  </div>
                  <p className="pt-2">
                    <strong>Retention Period:</strong> Student academic records (marksheets, transfer certificates, board registrations) are maintained in accordance with CBSE affiliation by-laws and statutory archiving norms. Temporary admission enquiries that do not result in enrollment are pruned systematically after the conclusion of the academic admission cycle.
                  </p>
                </div>
              </section>

              {/* SECTION 8: COOKIES & TRACKING */}
              <section id="cookies-tracking" className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200 space-y-4">
                <div className="flex items-center gap-2.5 text-blue-700 font-bold text-xs uppercase tracking-wider">
                  <Eye className="w-4 h-4" />
                  <span>Section 8</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-extrabold text-[#001744]">
                  8. Cookies and Advertising Tags
                </h2>
                <div className="text-slate-600 text-sm leading-relaxed space-y-3">
                  <p>
                    Our website uses small text files called cookies to guarantee site functionality and understand user navigation patterns:
                  </p>
                  <ul className="space-y-2 pl-2">
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                      <span><strong>Essential Cookies:</strong> Required for fundamental website operations, such as security tokens and form submissions. These cannot be switched off in our systems.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                      <span><strong>Advertising &amp; Conversion Cookies:</strong> We use the Google tag (Google Ads) to measure how parents find our website through our online admission campaigns and to record when an enquiry form is successfully submitted. Google may set cookies and receive information such as your IP address, browser details, and pages visited, which is processed under <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">Google&rsquo;s Privacy Policy</a>. These campaigns are addressed to parents and guardians, not to children.</span>
                    </li>
                  </ul>
                  <p>
                    You can manage or turn off personalised advertising from Google at any time through <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">Google Ad Settings</a>.
                  </p>
                  <p>
                    You can configure your internet browser to refuse all or some cookies, or to alert you when cookies are being sent. Note that if you disable essential cookies, certain features of the website may become inaccessible or function suboptimally.
                  </p>
                </div>
              </section>

              {/* SECTION 9: RIGHTS OF PARENTS */}
              <section id="parent-rights" className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200 space-y-4">
                <div className="flex items-center gap-2.5 text-blue-700 font-bold text-xs uppercase tracking-wider">
                  <Users className="w-4 h-4" />
                  <span>Section 9</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-extrabold text-[#001744]">
                  9. Rights of Parents, Guardians &amp; Data Principals
                </h2>
                <div className="text-slate-600 text-sm leading-relaxed space-y-3">
                  <p>
                    Under the Digital Personal Data Protection Act, 2023, parents, legal guardians, and individual users have clear rights regarding their personal data:
                  </p>
                  <div className="space-y-2.5 pl-2">
                    <div className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>Right to Access:</strong> You may request a summary of personal information we hold regarding your child or your family account.</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>Right to Correction &amp; Updation:</strong> If any contact number, residential address, or academic record contains an inaccuracy, parents may request correction via the school administration office.</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>Right to Withdraw Consent:</strong> Where data processing is based on voluntary consent (e.g. promotional newsletter subscriptions or optional school activities), you may withdraw consent at any time without impacting basic educational services.</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>Right to Grievance Redressal:</strong> You have the right to register a grievance with our designated Grievance Officer regarding any data privacy concern.</span>
                    </div>
                  </div>
                </div>
              </section>

              {/* SECTION 10: GRIEVANCE REDRESSAL OFFICER */}
              <section id="grievance-officer" className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200 space-y-5">
                <div className="flex items-center gap-2.5 text-blue-700 font-bold text-xs uppercase tracking-wider">
                  <Building2 className="w-4 h-4" />
                  <span>Section 10</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-extrabold text-[#001744]">
                  10. Grievance Redressal &amp; Data Protection Officer
                </h2>
                <p className="text-slate-600 text-sm leading-relaxed">
                  In compliance with the Digital Personal Data Protection Act, 2023 and the Information Technology Rules, Kautilya Vidyalaya has designated a dedicated Grievance Redressal Officer to address any privacy inquiries, data subject requests, or grievances:
                </p>

                {/* Official Contact Box */}
                <div className="bg-gradient-to-br from-slate-50 to-blue-50/50 rounded-2xl p-6 border border-blue-100 shadow-xs space-y-4">
                  <div className="flex items-start justify-between flex-wrap gap-2">
                    <div>
                      <h3 className="text-base font-bold text-[#001744]">Office of the Grievance &amp; Privacy Officer</h3>
                      <p className="text-xs font-semibold text-blue-700">Kautilya Vidyalaya Group of Institutions</p>
                    </div>
                    <span className="text-[11px] bg-blue-100 text-blue-800 font-medium px-2.5 py-1 rounded-full">
                      Response within 7 working days
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-700 pt-2">
                    <div className="flex items-start gap-2.5">
                      <MapPin className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold text-slate-900 block">Campus Address:</span>
                        <p className="text-slate-600 leading-relaxed">
                          No 9/1, 13th Main, J Block, Kanakadasa Nagar, Dattagalli 3rd Stage, Mysuru, Karnataka 570033
                        </p>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center gap-2.5">
                        <Mail className="w-4 h-4 text-blue-600 shrink-0" />
                        <div>
                          <span className="font-bold text-slate-900 block">Official Grievance Email:</span>
                          <a
                            href="mailto:enquiry@kautilyavidyalaya.edu.in?subject=Privacy%20Grievance%20Inquiry"
                            className="text-blue-600 hover:underline"
                          >
                            enquiry@kautilyavidyalaya.edu.in
                          </a>
                        </div>
                      </div>

                      <div className="flex items-center gap-2.5 pt-1">
                        <Phone className="w-4 h-4 text-blue-600 shrink-0" />
                        <div>
                          <span className="font-bold text-slate-900 block">Helpline Numbers:</span>
                          <p className="text-slate-600">
                            +91 99000 38358 / +91 70906 71299
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-blue-100 text-[11px] text-slate-500">
                    Office Hours for In-Person Consultation: Monday – Friday (9:00 AM – 3:30 PM) | Saturday (9:00 AM – 1:00 PM)
                  </div>
                </div>

                <div className="pt-2 text-xs text-slate-500 leading-relaxed">
                  <strong>Policy Modifications:</strong> Kautilya Vidyalaya reserves the right to periodically update this Privacy Policy in response to amendments in CBSE guidelines or relevant Indian statutory legislation. When changes are made, the &ldquo;Last Updated&rdquo; date shown on this page will be revised accordingly. Continued use of our website or services signifies acceptance of the amended terms.
                </div>
              </section>

              {/* BOTTOM ACTION CARD */}
              <div className="bg-gradient-to-r from-[#001744] to-[#0a2560] rounded-2xl p-6 sm:p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
                <div className="space-y-1.5 text-center sm:text-left">
                  <span className="text-xs font-bold text-[#FFD907] uppercase tracking-wider flex items-center justify-center sm:justify-start gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    Admissions 2027-28
                  </span>
                  <h3 className="text-lg sm:text-xl font-extrabold">Have questions regarding student admissions?</h3>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-md">
                    Our admissions team is available to assist you with curriculum details, campus tours, and enrollment guidance.
                  </p>
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  <button
                    onClick={() => setIsAdmissionModalOpen(true)}
                    className="px-5 py-2.5 bg-[#FFD907] hover:bg-yellow-400 text-[#001744] font-bold text-xs sm:text-sm rounded-xl shadow-md transition-all cursor-pointer"
                  >
                    Admission Enquiry
                  </button>
                  <Link
                    href="/contact-us"
                    className="px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm rounded-xl transition-all"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FLOATING WHATSAPP & MODAL */}
      <WhatsAppWidget />
      <AdmissionModal
        isOpen={isAdmissionModalOpen}
        onClose={() => setIsAdmissionModalOpen(false)}
      />

      {/* FOOTER */}
      <Footer />
    </div>
  );
}

