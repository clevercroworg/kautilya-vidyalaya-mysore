"use client";

import React, { Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  PhoneCall,
  Calendar,
  Compass,
  ArrowRight,
  MessageCircle,
  Home,
  FileText,
  Clock,
  MapPin,
  ShieldCheck,
} from "lucide-react";

function ThankYouContent() {
  const searchParams = useSearchParams();
  const parentName = searchParams.get("name") || "";

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-100 pt-28 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Main Success Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-3xl shadow-xl border border-slate-200/80 p-6 sm:p-12 text-center relative overflow-hidden"
        >
          {/* Subtle Top Accent */}
          <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#001744] via-[#F59E0B] to-[#001744]" />

          {/* Animated Check Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.1 }}
            className="w-20 h-20 sm:w-24 sm:h-24 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6 text-emerald-600 shadow-inner"
          >
            <CheckCircle2 className="w-12 h-12 sm:w-14 sm:h-14 stroke-[2.5]" />
          </motion.div>

          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200 mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            Enquiry Dispatched Successfully
          </span>

          <h1 className="text-3xl sm:text-5xl font-black text-[#001744] tracking-tight leading-tight">
            Thank You{parentName ? `, ${parentName}` : ""}!
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            We have received your enquiry for the academic year <strong>2027-28</strong>. Our admissions team has been notified and will get in touch with you shortly.
          </p>

          {/* Next Steps Grid */}
          <div className="mt-12 pt-10 border-t border-slate-100 text-left">
            <h2 className="text-sm font-bold text-slate-400 uppercase tracking-widest text-center mb-8">
              What Happens Next?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Step 1 */}
              <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100 hover:border-amber-200 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center font-black text-sm mb-3">
                  01
                </div>
                <h3 className="font-bold text-[#001744] text-base mb-1">
                  Enquiry Review
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Our admissions counsellor reviews your child&apos;s grade preference and requirements.
                </p>
              </div>

              {/* Step 2 */}
              <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100 hover:border-amber-200 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center font-black text-sm mb-3">
                  02
                </div>
                <h3 className="font-bold text-[#001744] text-base mb-1">
                  Counsellor Call
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  We will call or message you within <strong>24 business hours</strong> to guide you through the process.
                </p>
              </div>

              {/* Step 3 */}
              <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100 hover:border-amber-200 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center font-black text-sm mb-3">
                  03
                </div>
                <h3 className="font-bold text-[#001744] text-base mb-1">
                  Campus Visit
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Schedule an interactive tour to explore our classrooms, STEM labs, and sports arenas.
                </p>
              </div>
            </div>
          </div>

          {/* Quick Help & Office Contact Box */}
          <div className="mt-10 bg-[#001744] text-white rounded-2xl p-6 sm:p-8 text-left grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
            <div>
              <span className="text-xs uppercase tracking-wider text-amber-400 font-bold">
                Need Immediate Assistance?
              </span>
              <h3 className="text-lg sm:text-xl font-bold mt-1 text-white">
                Speak With Our Helpdesk Directly
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-2 flex items-center gap-2">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                Mon – Fri: 09:30 AM – 04:30 PM | Sat: 09:30 AM – 03:00 PM
              </p>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                Kanakadasa Nagar, Dattagalli 3rd Stage, Mysuru
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:justify-end">
              <a
                href="tel:+919900038358"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white text-[#001744] font-bold text-sm hover:bg-slate-100 transition-colors shadow-sm"
              >
                <PhoneCall className="w-4 h-4 text-amber-500" />
                +91 99000 38358
              </a>
              <a
                href="https://wa.me/919900038358?text=Hello,%20I%20have%20submitted%20an%20admission%20enquiry%20on%20the%20website"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-500 text-white font-bold text-sm hover:bg-emerald-600 transition-colors shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp Us
              </a>
            </div>
          </div>

          {/* Action Links */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-sm transition-colors"
            >
              <Home className="w-4 h-4" />
              Back to Home
            </Link>

            <Link
              href="/other-facilities"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#001744] hover:bg-[#002875] text-white font-bold text-sm transition-colors shadow-sm"
            >
              <Compass className="w-4 h-4 text-amber-400" />
              Explore Facilities
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/brochure-download"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-slate-300 hover:bg-slate-50 text-slate-700 font-bold text-sm transition-colors"
            >
              <FileText className="w-4 h-4" />
              Download Brochure
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default function ThankYouClientView() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-slate-50">
          <div className="w-10 h-10 border-4 border-[#001744] border-t-transparent rounded-full animate-spin" />
        </div>
      }
    >
      <ThankYouContent />
    </Suspense>
  );
}
