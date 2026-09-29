"use client";

import React, { Suspense, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppWidget from "@/components/ui/WhatsAppWidget";
import AdmissionModal from "@/components/ui/AdmissionModal";
import InnerPageHero from "@/components/ui/InnerPageHero";
import {
  CheckCircle2,
  Phone,
  Calendar,
  Compass,
  ArrowRight,
  MessageCircle,
  FileText,
  Clock,
  MapPin,
  ShieldCheck,
  GraduationCap,
  Sparkles,
  Award,
  Video,
  ChevronRight,
  School,
  HeartHandshake,
} from "lucide-react";

function ThankYouInner() {
  const searchParams = useSearchParams();
  const parentName = searchParams.get("name") || "";
  const [isAdmissionModalOpen, setIsAdmissionModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-800 selection:bg-[#FFD907] selection:text-[#001744]">
      {/* 1. Header Navigation */}
      <Navbar onOpenAdmissionModal={() => setIsAdmissionModalOpen(true)} />

      <main className="flex-grow">
        {/* 2. Hero Header matching the rest of the school website */}
        <InnerPageHero
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Admissions 2027-28", href: "/#admission-enquiry" },
            { label: "Enquiry Confirmation" },
          ]}
          badge={{
            text: "Official Admission Desk • Academic Year 2027-28",
            icon: ShieldCheck,
          }}
          title={parentName ? `Namaste, ${parentName}!` : "Namaste! Your Enquiry is Received"}
          subtitle="Thank you for your interest in Kautilya Vidyalaya, Mysuru. We are honoured to partner with you in shaping your child’s educational and personal growth."
          waveFillColor="#f8fafc"
        />

        {/* 3. Main Body Container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 sm:-mt-8 relative z-20 pb-20 sm:pb-28">
          {/* Top Gold Bordered Status Card */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-white rounded-3xl shadow-xl p-6 sm:p-10 border-t-4 border-[#FFD907] border-x border-b border-slate-100 mb-12"
          >
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-8 border-b border-slate-100">
              <div className="flex items-center gap-4 sm:gap-6">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 shrink-0 shadow-sm">
                  <CheckCircle2 className="w-9 h-9 sm:w-11 sm:h-11 stroke-[2.5]" />
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className="px-3 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-100/70 text-emerald-800">
                      Enquiry Logged
                    </span>
                    <span className="text-xs text-slate-500 font-medium">
                      CBSE Affiliation No. 830193
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-black text-[#001744] tracking-tight">
                    Application Desk Confirmation
                  </h2>
                  <p className="text-sm sm:text-base text-slate-600 mt-0.5">
                    Our admissions committee has received your details and registered your interest for <strong>2027–28</strong>.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
                <a
                  href="tel:+919900038358"
                  className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#001744] hover:bg-[#002875] text-white font-bold text-sm transition-all shadow-md"
                >
                  <Phone className="w-4 h-4 text-[#FFD907]" />
                  Call Helpdesk
                </a>
                <a
                  href="https://wa.me/919900038358?text=Hello%20Kautilya%20Vidyalaya,%20I%20have%20submitted%20an%20admission%20enquiry%20for%20my%20child."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm transition-all shadow-md"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </a>
              </div>
            </div>

            {/* 3 Steps in Admissions Process */}
            <div className="pt-8">
              <h3 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-6">
                Next Steps in the Kautilya Admissions Journey
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Step 1 */}
                <div className="bg-slate-50/80 rounded-2xl p-6 border border-slate-200/70 hover:border-amber-300 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-[#001744] text-[#FFD907] flex items-center justify-center font-black text-sm mb-4 shadow-sm">
                    1
                  </div>
                  <h4 className="font-bold text-lg text-[#001744] mb-1.5 flex items-center gap-2">
                    <span>Application Review</span>
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Our academic coordinators verify seat availability for the requested grade and prepare documentation for the academic year 2027–28.
                  </p>
                </div>

                {/* Step 2 */}
                <div className="bg-slate-50/80 rounded-2xl p-6 border border-slate-200/70 hover:border-amber-300 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-[#001744] text-[#FFD907] flex items-center justify-center font-black text-sm mb-4 shadow-sm">
                    2
                  </div>
                  <h4 className="font-bold text-lg text-[#001744] mb-1.5 flex items-center gap-2">
                    <span>Personal Interaction</span>
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Our admissions officer will connect via phone within <strong>24 business hours</strong> to discuss your child&apos;s learning path and answer any questions.
                  </p>
                </div>

                {/* Step 3 */}
                <div className="bg-slate-50/80 rounded-2xl p-6 border border-slate-200/70 hover:border-amber-300 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-[#001744] text-[#FFD907] flex items-center justify-center font-black text-sm mb-4 shadow-sm">
                    3
                  </div>
                  <h4 className="font-bold text-lg text-[#001744] mb-1.5 flex items-center gap-2">
                    <span>Guided Campus Tour</span>
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    You and your child will be invited to visit our Dattagalli campus to inspect our Atal Tinkering Lab, sports amenities, and interactive classrooms.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 4. Explore Campus Life & Resources (2-Column Educational Section) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Left Card: Campus Highlights & Virtual Tour */}
            <div className="lg:col-span-7 bg-white rounded-3xl shadow-lg border border-slate-100 overflow-hidden flex flex-col justify-between">
              <div className="relative h-64 sm:h-72 w-full overflow-hidden">
                <Image
                  src="/images/kautilya-campus-building.jpg"
                  alt="Kautilya Vidyalaya Campus Mysuru"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 60vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#001744]/90 via-[#001744]/40 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#FFD907] text-[#001744] mb-2">
                    <Sparkles className="w-3.5 h-3.5" />
                    21 Years of Academic Excellence
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-white">
                    Experience Kautilya Vidyalaya
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-200 mt-1 max-w-lg">
                    Discover our green, secure campus in Dattagalli 3rd Stage, Kanakadasa Nagar, Mysore.
                  </p>
                </div>
              </div>

              <div className="p-6 sm:p-8 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Link
                    href="/#virtual-tour"
                    className="p-4 rounded-2xl bg-slate-50 hover:bg-amber-50 border border-slate-200/80 hover:border-amber-300 transition-all group flex items-start gap-3"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#001744] text-[#FFD907] flex items-center justify-center shrink-0">
                      <Video className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-[#001744] group-hover:text-amber-800 transition-colors">
                        360° Virtual Tour
                      </h4>
                      <p className="text-xs text-slate-600 mt-0.5">
                        Interactive campus tour from home
                      </p>
                    </div>
                  </Link>

                  <Link
                    href="/other-facilities"
                    className="p-4 rounded-2xl bg-slate-50 hover:bg-amber-50 border border-slate-200/80 hover:border-amber-300 transition-all group flex items-start gap-3"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#001744] text-[#FFD907] flex items-center justify-center shrink-0">
                      <Compass className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-[#001744] group-hover:text-amber-800 transition-colors">
                        Campus Facilities
                      </h4>
                      <p className="text-xs text-slate-600 mt-0.5">
                        ATL, labs, pool & library
                      </p>
                    </div>
                  </Link>

                  <Link
                    href="/result-graph"
                    className="p-4 rounded-2xl bg-slate-50 hover:bg-amber-50 border border-slate-200/80 hover:border-amber-300 transition-all group flex items-start gap-3"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#001744] text-[#FFD907] flex items-center justify-center shrink-0">
                      <Award className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-[#001744] group-hover:text-amber-800 transition-colors">
                        100% Board Results
                      </h4>
                      <p className="text-xs text-slate-600 mt-0.5">
                        7-year CBSE toppers distinction
                      </p>
                    </div>
                  </Link>

                  <Link
                    href="/brochure-download"
                    className="p-4 rounded-2xl bg-slate-50 hover:bg-amber-50 border border-slate-200/80 hover:border-amber-300 transition-all group flex items-start gap-3"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#001744] text-[#FFD907] flex items-center justify-center shrink-0">
                      <FileText className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-[#001744] group-hover:text-amber-800 transition-colors">
                        Download Brochure
                      </h4>
                      <p className="text-xs text-slate-600 mt-0.5">
                        Comprehensive curriculum guide
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Card: Direct Admission Office Information */}
            <div className="lg:col-span-5 bg-[#001744] text-white rounded-3xl p-6 sm:p-8 shadow-xl flex flex-col justify-between relative overflow-hidden">
              <div className="absolute -right-12 -top-12 w-48 h-48 bg-[#FFD907]/10 rounded-full blur-2xl pointer-events-none" />

              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 text-amber-400 mb-4 border border-white/10">
                  <School className="w-3.5 h-3.5" />
                  <span>Admissions Office</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-white leading-snug">
                  Campus Address & Visiting Hours
                </h3>

                <p className="text-slate-300 text-sm mt-3 leading-relaxed">
                  Parents are always welcome to visit our administrative reception during official office hours for in-person counselling and campus inspection.
                </p>

                <div className="mt-6 space-y-4 text-sm">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-white font-semibold">Campus Location:</strong>
                      <span className="text-slate-300 text-xs sm:text-sm">
                        No 9/1, 13th Main, J Block, Kanakadasa Nagar, Dattagalli 3rd Stage, Mysuru – 570033
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-white font-semibold">Visiting Hours:</strong>
                      <span className="text-slate-300 text-xs sm:text-sm">
                        Monday – Friday: 09:30 AM – 04:30 PM<br />
                        Saturday: 09:30 AM – 03:00 PM<br />
                        Sunday: Closed
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-white font-semibold">Direct Telephone Lines:</strong>
                      <span className="text-slate-300 text-xs sm:text-sm block">
                        +91 99000 38358 / +91 70906 71299
                      </span>
                      <span className="text-slate-400 text-xs block">
                        Landline: 0821 - 2460266
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row gap-3">
                <Link
                  href="/"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm transition-colors border border-white/10"
                >
                  Return to Homepage
                </Link>
                <Link
                  href="/contact-us"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#FFD907] hover:bg-[#ffe338] text-[#001744] font-black text-sm transition-colors shadow-md"
                >
                  Contact Page
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* 5. Footer & Interactive Widgets */}
      <Footer />
      <WhatsAppWidget />
      <AdmissionModal
        isOpen={isAdmissionModalOpen}
        onClose={() => setIsAdmissionModalOpen(false)}
      />
    </div>
  );
}

export default function ThankYouClientView() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-slate-50">
          <div className="w-12 h-12 border-4 border-[#001744] border-t-[#FFD907] rounded-full animate-spin" />
        </div>
      }
    >
      <ThankYouInner />
    </Suspense>
  );
}
