"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppWidget from "@/components/ui/WhatsAppWidget";
import AdmissionModal from "@/components/ui/AdmissionModal";
import InnerPageHero from "@/components/ui/InnerPageHero";
import rawFacilitiesData from "@/data/facilitiesData.json";
import { FacilitiesData, FacilityItem, SafetyProtocolItem } from "@/types/facilities";
import {
  ShieldCheck,
  CheckCircle2,
  Clock,
  Video,
  Flame,
  Droplet,
  Maximize2,
  X,
  Compass,
  ArrowUpRight,
  Phone,
  Building2,
} from "lucide-react";

const facilitiesData: FacilitiesData = rawFacilitiesData as FacilitiesData;

// Icon resolver for safety protocols
const ICON_MAP: Record<string, React.ElementType> = {
  Video,
  Flame,
  Droplet,
  ShieldCheck,
};

export default function OtherFacilitiesClientView() {
  const [isAdmissionModalOpen, setIsAdmissionModalOpen] = useState(false);
  const [activeImage, setActiveImage] = useState<{ src: string; alt: string; title: string } | null>(null);

  // Close lightbox on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveImage(null);
    };
    if (activeImage) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [activeImage]);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-800 selection:bg-[#FFD907] selection:text-[#001744]">
      <Navbar onOpenAdmissionModal={() => setIsAdmissionModalOpen(true)} />

      <main className="flex-grow">
        {/* HERO BANNER WITH AUTHENTIC BG & DYNAMIC WAVE */}
        <InnerPageHero
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Other Facilities" },
          ]}
          badge={{
            text: "Student Welfare & Campus Amenities",
            icon: ShieldCheck,
          }}
          title={facilitiesData.pageTitle}
          subtitle={facilitiesData.pageSubtitle}
          waveFillColor="#f8fafc"
        />

        {/* SPECIALIZED FACILITIES SHOWCASE (DYNAMICALLY MAPPED FROM JSON) */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-4 sm:-mt-6 relative z-20 py-12 sm:py-16 space-y-12 sm:space-y-16">
          {facilitiesData.facilities.map((fac, idx) => {
            const isReversed = idx % 2 === 1;

            return (
              <motion.div
                key={fac.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.1 }}
                className={`bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col ${
                  isReversed ? "lg:flex-row-reverse" : "lg:flex-row"
                } items-stretch`}
              >
                {/* Image Showcase with Click-to-Zoom */}
                <div
                  onClick={() =>
                    setActiveImage({
                      src: fac.image,
                      alt: fac.title,
                      title: fac.title,
                    })
                  }
                  className="lg:w-1/2 relative min-h-[280px] sm:min-h-[340px] lg:min-h-[380px] bg-slate-900 cursor-pointer overflow-hidden group"
                >
                  <Image
                    src={fac.image}
                    alt={fac.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    priority={idx === 0}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#001744]/70 via-transparent to-black/20 group-hover:from-[#001744]/50 transition-colors" />

                  {/* Corner Badge */}
                  <div className="absolute top-4 left-4 bg-[#001744]/90 text-[#FFD907] text-xs font-bold px-3 py-1 rounded-full backdrop-blur-sm border border-white/10 flex items-center gap-1.5 shadow">
                    <Building2 className="w-3.5 h-3.5" />
                    <span>{fac.badge}</span>
                  </div>

                  {/* Zoom indicator on hover */}
                  <div className="absolute bottom-4 right-4 bg-white/90 hover:bg-white text-[#001744] text-[11px] font-bold px-2.5 py-1 rounded-lg backdrop-blur-sm opacity-90 group-hover:opacity-100 flex items-center gap-1.5 shadow transition-all">
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>Click to Zoom</span>
                  </div>
                </div>

                {/* Facility Details */}
                <div className="lg:w-1/2 p-6 sm:p-10 flex flex-col justify-between space-y-5">
                  <div className="space-y-3">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-[10px] sm:text-xs font-extrabold tracking-wider uppercase text-blue-700 bg-blue-50 px-3 py-0.5 rounded-full border border-blue-100">
                        {fac.category}
                      </span>
                      {fac.timing && (
                        <span className="text-[11px] font-semibold text-slate-500 flex items-center gap-1 bg-slate-100 px-2.5 py-0.5 rounded-full">
                          <Clock className="w-3 h-3 text-slate-400" />
                          <span>{fac.timing}</span>
                        </span>
                      )}
                    </div>

                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-[#001744] tracking-tight">
                      {fac.title}
                    </h2>

                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      {fac.description}
                    </p>

                    {/* Key Points */}
                    <div className="space-y-2 pt-2 text-xs sm:text-sm text-slate-700">
                      {fac.points.map((pt, pIdx) => (
                        <div key={pIdx} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span className="leading-snug">{pt}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Link */}
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[11px] font-mono font-medium text-slate-400">
                      Standard Verified Facility
                    </span>
                    <button
                      onClick={() => setIsAdmissionModalOpen(true)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#001744] hover:text-blue-700 transition-colors"
                    >
                      <span>Enquire Facility</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </section>

        {/* ADDITIONAL SAFETY & PROTOCOLS GRID */}
        <section className="bg-white py-14 sm:py-20 border-t border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-xl mx-auto mb-12">
              <span className="text-xs font-extrabold tracking-wider uppercase text-blue-700 bg-blue-50 px-3.5 py-1 rounded-full border border-blue-100">
                Safety &amp; Compliance
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#001744] tracking-tight mt-2.5">
                Uncompromising Campus Safety
              </h3>
              <p className="text-slate-500 text-xs sm:text-sm mt-1.5">
                Certified infrastructure engineered to maintain the highest safety, hygiene, and security protocols.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {facilitiesData.safetyProtocols.map((item, idx) => {
                const IconComponent = ICON_MAP[item.icon] || ShieldCheck;

                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: idx * 0.06 }}
                    whileHover={{ y: -4 }}
                    className="bg-slate-50 hover:bg-slate-100/80 p-6 rounded-2xl border border-slate-200/80 shadow-sm transition-all space-y-2.5"
                  >
                    <div className="w-10 h-10 rounded-xl bg-white text-[#001744] flex items-center justify-center shadow-sm border border-slate-200/60">
                      <IconComponent className="w-5 h-5 text-blue-700" />
                    </div>
                    <h4 className="font-extrabold text-[#001744] text-sm sm:text-base">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* BOTTOM ADMISSIONS & CAMPUS VISIT CTA */}
        <section className="bg-gradient-to-br from-[#001744] to-[#002b7a] text-white py-14 border-t-4 border-[#FFD907]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
            <div className="inline-flex items-center gap-2 bg-[#FFD907] text-[#001744] px-3.5 py-1 rounded-full text-xs font-black">
              <Compass className="w-3.5 h-3.5" />
              <span>Campus Walkthrough</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-white">
              Experience Our Safe, Caring Campus In Person
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
              Admissions open for Academic Year 2026-27 across Pre-KG to Class X &amp; PUC. Schedule a guided tour to inspect our infirmary, daycare, and bus routes.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <a
                href="tel:+919900038358"
                className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all"
              >
                <Phone className="w-4 h-4 text-[#FFD907]" />
                <span>+91 9900038358</span>
              </a>
              <button
                onClick={() => setIsAdmissionModalOpen(true)}
                className="bg-[#FFD907] hover:bg-yellow-400 text-[#001744] font-black px-6 py-2.5 rounded-xl text-xs sm:text-sm transition-all shadow-lg hover:scale-105"
              >
                <span>Schedule Campus Visit</span>
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* FULLSCREEN IMAGE LIGHTBOX MODAL */}
      <AnimatePresence>
        {activeImage && (
          <div
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setActiveImage(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="bg-slate-900 rounded-2xl max-w-4xl w-full overflow-hidden shadow-2xl relative border border-white/20 flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between px-5 py-3.5 bg-[#001744] text-white border-b border-white/10 shrink-0">
                <h4 className="text-sm sm:text-base font-bold text-white">
                  {activeImage.title}
                </h4>
                <button
                  onClick={() => setActiveImage(null)}
                  className="text-slate-400 hover:text-white p-1.5 rounded-lg hover:bg-white/10 transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="relative aspect-[16/10] sm:aspect-video w-full bg-black">
                <Image
                  src={activeImage.src}
                  alt={activeImage.alt}
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <Footer />
      <WhatsAppWidget />
      <AdmissionModal
        isOpen={isAdmissionModalOpen}
        onClose={() => setIsAdmissionModalOpen(false)}
      />
    </div>
  );
}
