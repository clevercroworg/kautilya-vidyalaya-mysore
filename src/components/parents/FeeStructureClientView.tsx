"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppWidget from "@/components/ui/WhatsAppWidget";
import AdmissionModal from "@/components/ui/AdmissionModal";
import InnerPageHero from "@/components/ui/InnerPageHero";
import rawFeeData from "@/data/feeStructureData.json";
import { FeeStructureData, GradeFeeItem } from "@/types/parentsCorner";
import {
  CreditCard,
  ExternalLink,
  CheckCircle2,
  AlertCircle,
  Building2,
  Receipt,
  Copy,
  Check,
  Printer,
  ShieldCheck,
} from "lucide-react";

const feeData: FeeStructureData = rawFeeData as FeeStructureData;
const BANDS = ["All Grades", "Pre-Primary", "Primary", "Middle School", "Secondary"];

export default function FeeStructureClientView() {
  const [isAdmissionModalOpen, setIsAdmissionModalOpen] = useState(false);
  const [selectedBand, setSelectedBand] = useState("All Grades");
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const filteredGrades = useMemo(() => {
    if (selectedBand === "All Grades") return feeData.gradeFees;
    return feeData.gradeFees.filter((g) => g.band === selectedBand);
  }, [selectedBand]);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const handleCopy = (text: string, fieldName: string) => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setCopiedField(fieldName);
      setTimeout(() => setCopiedField(null), 2000);
    }
  };

  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
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
            { label: "Parents Corner" },
            { label: "Fee Structure" },
          ]}
          badge={{
            text: `Academic Year ${feeData.academicYear} Approved Schedules`,
            icon: CreditCard,
          }}
          title={`Fee Structure ${feeData.academicYear}`}
          subtitle="Transparent, comprehensive fee schedules for Kindergarten through Class X approved by the School Management Committee."
          waveFillColor="#f8fafc"
        />

        {/* PAY FEES ONLINE CALLOUT BANNER */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 sm:-mt-8 relative z-20">
          <div className="bg-gradient-to-r from-[#001744] via-[#002b7a] to-[#001744] text-white rounded-2xl shadow-xl p-6 sm:p-7 border-2 border-[#FFD907]/40 flex flex-col md:flex-row items-center justify-between gap-5">
            <div className="space-y-1 text-center md:text-left">
              <div className="inline-flex items-center gap-2 bg-[#FFD907] text-[#001744] px-3 py-0.5 rounded-full text-xs font-black">
                <Receipt className="w-3.5 h-3.5" />
                <span>Online Fee Remittance</span>
              </div>
              <h3 className="text-lg sm:text-xl font-black text-white">
                Existing Student Digital Fee Payment
              </h3>
              <p className="text-xs text-slate-300">
                Pay annual or term fees securely through the official SchoolElement payment portal.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
              <button
                onClick={handlePrint}
                className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold px-4 py-2.5 rounded-xl text-xs flex items-center gap-1.5 transition-all"
                title="Print or Save PDF"
              >
                <Printer className="w-3.5 h-3.5 text-[#FFD907]" />
                <span>Print Schedule</span>
              </button>

              <a
                href={feeData.onlinePaymentUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#FFD907] hover:bg-yellow-400 text-[#001744] font-black px-5 py-2.5 rounded-xl text-xs sm:text-sm shadow-lg flex items-center gap-2 transition-all hover:scale-105"
              >
                <span>Pay Fees Online</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </section>

        {/* FEE TABLE SECTION */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
          {/* Header & Band Tabs */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-6">
            <div>
              <span className="text-[10px] font-extrabold tracking-wider uppercase text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                Approved Tuition &amp; Academic Fees
              </span>
              <h2 className="text-xl sm:text-2xl font-extrabold text-[#001744] tracking-tight mt-2">
                Class-wise Fee Breakdown
              </h2>
              <p className="text-slate-500 text-xs mt-1">
                Approved fee schedules for Academic Session {feeData.academicYear}.
              </p>
            </div>

            {/* Animated Band Filter Pills */}
            <div className="flex items-center gap-1 bg-slate-200/70 p-1.5 rounded-2xl overflow-x-auto scrollbar-none">
              {BANDS.map((band) => {
                const isActive = selectedBand === band;
                return (
                  <button
                    key={band}
                    onClick={() => setSelectedBand(band)}
                    className={`relative px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                      isActive
                        ? "text-[#FFD907]"
                        : "text-slate-600 hover:text-[#001744]"
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="feeBandActive"
                        className="absolute inset-0 bg-[#001744] rounded-xl shadow-sm z-0"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{band}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Responsive Fee Table */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#001744] text-white text-xs uppercase tracking-wider font-extrabold">
                    <th className="py-3.5 px-4 sm:px-6">Sl No</th>
                    <th className="py-3.5 px-4 sm:px-6">Class / Grade</th>
                    <th className="py-3.5 px-4 sm:px-6">Category Band</th>
                    <th className="py-3.5 px-4 sm:px-6 text-right">Tuition Fee ({feeData.academicYear})</th>
                    <th className="py-3.5 px-4 sm:px-6 text-right">Academic Fee</th>
                    <th className="py-3.5 px-4 sm:px-6 text-right text-[#FFD907]">Total Annual Fee</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
                  <AnimatePresence mode="wait">
                    {filteredGrades.map((g, idx) => (
                      <motion.tr
                        key={g.slNo}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.15 }}
                        className={`hover:bg-blue-50/50 transition-colors ${
                          idx % 2 === 0 ? "bg-white" : "bg-slate-50/50"
                        }`}
                      >
                        <td className="py-3.5 px-4 sm:px-6 font-mono text-slate-400 font-semibold">
                          {String(g.slNo).padStart(2, "0")}
                        </td>
                        <td className="py-3.5 px-4 sm:px-6 font-bold text-[#001744]">
                          {g.grade}
                        </td>
                        <td className="py-3.5 px-4 sm:px-6">
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-slate-100 text-slate-700">
                            {g.band}
                          </span>
                        </td>
                        <td className="py-3.5 px-4 sm:px-6 text-right font-medium text-slate-700">
                          {formatCurrency(g.tuitionFee)}
                        </td>
                        <td className="py-3.5 px-4 sm:px-6 text-right font-medium text-slate-700">
                          {g.academicFee > 0 ? formatCurrency(g.academicFee) : "—"}
                        </td>
                        <td className="py-3.5 px-4 sm:px-6 text-right font-black text-[#001744]">
                          <span className="bg-amber-50 text-[#001744] px-2.5 py-1 rounded-md border border-amber-200">
                            {formatCurrency(g.totalFee)}
                          </span>
                        </td>
                      </motion.tr>
                    ))}
                  </AnimatePresence>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* PAYMENT GUIDELINES & BANK DETAILS */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
            {/* Left: Payment Guidelines */}
            <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-sm space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center shrink-0">
                  <AlertCircle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-black text-[#001744]">
                    Payment Rules &amp; Guidelines
                  </h3>
                  <p className="text-xs text-slate-500">
                    Terms governing admission and tuition remittances
                  </p>
                </div>
              </div>

              <ul className="space-y-2.5 pt-1">
                {feeData.paymentGuidelines.map((g, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2.5 text-xs text-slate-600 leading-relaxed"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{g}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: Bank Details Card */}
            <div className="lg:col-span-5 bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-sm space-y-5 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#FFD907]/20 text-[#001744] flex items-center justify-center shrink-0 font-bold">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-black text-[#001744]">
                      Bank Remittance Details
                    </h3>
                    <p className="text-xs text-slate-500">
                      For Cheque, Demand Draft, or Direct Transfer
                    </p>
                  </div>
                </div>

                <div className="space-y-2 pt-1 text-xs">
                  {/* Account Name */}
                  <div className="flex items-center justify-between py-2 border-b border-slate-100">
                    <span className="text-slate-500">Beneficiary Name</span>
                    <div className="flex items-center gap-1.5">
                      <strong className="text-[#001744] font-bold">
                        {feeData.bankDetails.accountName}
                      </strong>
                      <button
                        onClick={() => handleCopy(feeData.bankDetails.accountName, "name")}
                        className="text-slate-400 hover:text-blue-700 p-0.5 rounded hover:bg-slate-100"
                        title="Copy name"
                      >
                        {copiedField === "name" ? (
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                        ) : (
                          <Copy className="w-3.5 h-3.5" />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Branch */}
                  <div className="flex items-center justify-between py-2 border-b border-slate-100">
                    <span className="text-slate-500">Branch</span>
                    <span className="text-slate-700 font-semibold">
                      {feeData.bankDetails.branch}
                    </span>
                  </div>

                  {/* Account Type */}
                  <div className="flex items-center justify-between py-2 border-b border-slate-100">
                    <span className="text-slate-500">Account Type</span>
                    <span className="text-slate-700 font-semibold">
                      {feeData.bankDetails.accountType}
                    </span>
                  </div>

                  {/* Accepted Modes */}
                  <div className="flex items-center justify-between py-2 border-b border-slate-100">
                    <span className="text-slate-500">Accepted Modes</span>
                    <span className="text-slate-700 font-semibold">
                      {feeData.bankDetails.paymentModes?.join(", ") || "UPI, NetBanking, Cards, DD"}
                    </span>
                  </div>
                </div>
              </div>

              {/* Admission Help desk contact */}
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1.5">
                <p className="text-[11px] font-bold text-[#001744]">
                  Accounts &amp; Fee Enquiry Desk:
                </p>
                <div className="flex flex-wrap gap-3 text-xs font-mono font-bold text-blue-700">
                  {feeData.admissionHelplines.map((num) => (
                    <a key={num} href={`tel:${num.replace(/\s+/g, "")}`} className="hover:underline">
                      {num}
                    </a>
                  ))}
                </div>
              </div>
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
