"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppWidget from "@/components/ui/WhatsAppWidget";
import AdmissionModal from "@/components/ui/AdmissionModal";
import InnerPageHero from "@/components/ui/InnerPageHero";
import {
  ChevronRight,
  Trophy,
  Medal,
  Award,
  Sparkles,
  Maximize2,
  X,
  GraduationCap,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";

interface AwardItem {
  id: string;
  title: string;
  category: "sports" | "chess" | "institutional";
  level: string;
  image: string;
  badgeColor: string;
  description: string;
  highlights: string;
}

const AWARDS_DATA: AwardItem[] = [
  {
    id: "fide-chess",
    title: "International FIDE Chess Tournament Mysuru",
    category: "chess",
    level: "International Rated Event",
    image: "/images/student-corner/kautilya-award-chess.jpeg",
    badgeColor: "from-amber-500 to-orange-600",
    description:
      "Kautilya students demonstrated exceptional tactical patience, endgame mastery, and strategic acumen in the International FIDE Rated Chess Tournament held in Mysuru.",
    highlights: "International FIDE Elo Points & Merit Accolades",
  },
  {
    id: "gymquinn-gymnastics",
    title: "GYMQUINN All India Level Wise Gymnastics Championship",
    category: "sports",
    level: "National Championship",
    image: "/images/student-corner/kautilya-award-gymnastics.webp",
    badgeColor: "from-rose-500 to-pink-600",
    description:
      "Acrobatic excellence, balance beam routines, and floor gymnastics execution winning top podium finishes and certificates of distinction at the all-India meet.",
    highlights: "All-India Podium Finishes & Medal Honors",
  },
  {
    id: "cbse-badminton",
    title: "CBSE Inter School Badminton Championship",
    category: "sports",
    level: "CBSE Regional Board Event",
    image: "/images/student-corner/kautilya-award-badminton.webp",
    badgeColor: "from-blue-600 to-indigo-700",
    description:
      "Shuttlers from Kautilya Vidyalaya fought through intense multi-district singles and doubles brackets to bring home championship trophies at the CBSE tournament.",
    highlights: "Regional CBSE Trophies & Semi-Finalist Laurels",
  },
  {
    id: "open-karate",
    title: "Open Karate Championship 2024",
    category: "sports",
    level: "State Martial Arts Meet",
    image: "/images/student-corner/kautilya-award-karate.webp",
    badgeColor: "from-red-600 to-amber-700",
    description:
      "Disciplined kata precision, defensive kumite sparring, and relentless focus resulting in a medal sweep and advanced belt gradings for Kautilya martial artists.",
    highlights: "Gold & Silver Medals across Weight Classes",
  },
  {
    id: "cbse-swimming",
    title: "CBSE South Zone II Swimming Championship",
    category: "sports",
    level: "South Zone Championship",
    image: "/images/student-corner/kautilya-award-swimming.webp",
    badgeColor: "from-cyan-600 to-blue-700",
    description:
      "Mohammed Arman Sameer of Grade 5 represented Kautilya Vidyalaya at the prestigious CBSE South Zone II Aquatics Meet, clocking exceptional lap times against premier swimmers.",
    highlights: "Mohammed Arman Sameer (Grade 5) Representative",
  },
  {
    id: "roller-skating",
    title: "Mysuru District Roller Skating Championship",
    category: "sports",
    level: "District Championship",
    image: "/images/student-corner/kautilya-award-skating.webp",
    badgeColor: "from-violet-600 to-purple-700",
    description:
      "Dominating the rink with lightning agility and technical balance, our speed skaters claimed top podium honors across multiple age brackets in Mysuru.",
    highlights: "District Speed Skating Champions & Medallists",
  },
  {
    id: "dynamic-school-award",
    title: "Dynamic School Award 2024",
    category: "institutional",
    level: "National Institutional Honor",
    image: "/images/events/kautilya-educators-summit-award.jpg",
    badgeColor: "from-[#001744] to-blue-900",
    description:
      "Conferred upon Kautilya Vidyalaya at the National Education Summit in Bengaluru by EducationToday, honoring our 20+ year legacy of holistic education and tech integration.",
    highlights: "Conferred at National Education Summit Bengaluru",
  },
  {
    id: "wipro-earthian",
    title: "Wipro Earthian School Award for Sustainability",
    category: "institutional",
    level: "National Environmental Recognition",
    image: "/images/kautilya-sports-excellence.jpg",
    badgeColor: "from-emerald-600 to-teal-800",
    description:
      "National recognition for student-led environmental conservation, campus rainwater harvesting systems, waste management, and biodiversity documentation.",
    highlights: "Prestigious Nationwide Eco-Stewardship Award",
  },
];

const FILTER_TABS = [
  { id: "all", label: "All Laurels (8)" },
  { id: "sports", label: "Sports & Martial Arts (5)" },
  { id: "chess", label: "Chess & Strategy (1)" },
  { id: "institutional", label: "Institutional Honors (2)" },
];

const STATS = [
  { label: "CBSE Board Pass Rate", value: "100%", sub: "Over 20+ Years" },
  { label: "Competitive Medals", value: "50+", sub: "Regional & State" },
  { label: "National Recognitions", value: "10+", sub: "Sports & Academic" },
  { label: "Holistic Disciplines", value: "12+", sub: "Coached Daily" },
];

export default function AwardsAchievementsClientView() {
  const [isAdmissionModalOpen, setIsAdmissionModalOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState("all");
  const [lightboxData, setLightboxData] = useState<AwardItem | null>(null);

  const filteredAwards = useMemo(() => {
    if (activeFilter === "all") return AWARDS_DATA;
    return AWARDS_DATA.filter((item) => item.category === activeFilter);
  }, [activeFilter]);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-800 selection:bg-[#FFD907] selection:text-[#001744]">
      <Navbar onOpenAdmissionModal={() => setIsAdmissionModalOpen(true)} />

      <main className="flex-grow">
        {/* HERO SECTION WITH AUTHENTIC BG & DYNAMIC WAVE */}
        <InnerPageHero
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Student Corner" },
            { label: "Awards & Achievements" },
          ]}
          badge={{
            text: "Celebrating Excellence & Champion Spirit",
            icon: Trophy,
          }}
          title="Awards & Achievements"
          subtitle="Applauding the hard work, perseverance, and championship victories of Kautilya Vidyalaya students across international, national, state, and district arenas."
          waveFillColor="#f8fafc"
        />

        {/* STATS STRIP */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {STATS.map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="bg-white p-5 sm:p-6 rounded-2xl shadow-lg border border-slate-100 text-center"
              >
                <p className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#001744]">
                  {stat.value}
                </p>
                <p className="text-xs sm:text-sm font-bold text-slate-800 mt-1">
                  {stat.label}
                </p>
                <p className="text-[11px] text-slate-400 font-medium">
                  {stat.sub}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* FILTERABLE AWARDS GALLERY */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          {/* Header & Filter Tabs */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <span className="text-xs font-extrabold tracking-wider uppercase text-blue-700 bg-blue-50 px-3.5 py-1 rounded-full border border-blue-100">
                Wall of Fame
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#001744] tracking-tight mt-3">
                Tournament Laurels &amp; Trophies
              </h2>
              <p className="text-slate-500 text-sm mt-1">
                Authentic championship victories earned by our student athletes and scholars.
              </p>
            </div>

            {/* Filter Pills */}
            <div className="flex items-center gap-1.5 bg-slate-200/70 p-1.5 rounded-2xl overflow-x-auto scrollbar-none">
              {FILTER_TABS.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveFilter(tab.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                    activeFilter === tab.id
                      ? "bg-[#001744] text-[#FFD907] shadow-sm"
                      : "text-slate-600 hover:text-[#001744] hover:bg-white/60"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Awards Grid */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredAwards.map((award) => (
                <motion.div
                  layout
                  key={award.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group cursor-pointer"
                  onClick={() => setLightboxData(award)}
                >
                  <div>
                    {/* Image Container */}
                    <div className="relative aspect-[16/10] w-full bg-slate-100 overflow-hidden">
                      <Image
                        src={award.image}
                        alt={award.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 left-3 bg-[#001744]/90 text-white text-[11px] font-bold px-2.5 py-1 rounded-full backdrop-blur-sm shadow border border-white/10">
                        {award.level}
                      </div>
                      <div className="absolute bottom-3 right-3 bg-black/60 text-white p-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm shadow">
                        <Maximize2 className="w-3.5 h-3.5" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 space-y-3">
                      <h3 className="text-lg font-black text-[#001744] leading-snug group-hover:text-blue-700 transition-colors">
                        {award.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {award.description}
                      </p>
                    </div>
                  </div>

                  {/* Highlights Footer */}
                  <div className="px-6 py-3.5 bg-slate-50 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-blue-900">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span className="truncate">{award.highlights}</span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </section>

        {/* BOTTOM ADMISSIONS CTA */}
        <section className="bg-[#001744] text-white py-14 border-t-4 border-[#FFD907]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Every Child Is A Future Champion
            </h3>
            <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto">
              Admissions open for 2027-28. Enroll your child in an institution dedicated to academic brilliance, athletic mastery, and character formation.
            </p>
            <button
              onClick={() => setIsAdmissionModalOpen(true)}
              className="bg-[#FFD907] hover:bg-yellow-400 text-[#001744] font-black px-7 py-3 rounded-xl text-sm transition-all shadow-lg inline-flex items-center gap-2"
            >
              <GraduationCap className="w-4 h-4" />
              <span>Apply for Admission</span>
            </button>
          </div>
        </section>
      </main>

      {/* LIGHTBOX MODAL */}
      {lightboxData && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setLightboxData(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-3xl w-full overflow-hidden shadow-2xl relative border border-white/20 flex flex-col animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-[60vh] w-full bg-slate-950">
              <Image
                src={lightboxData.image}
                alt={lightboxData.title}
                fill
                className="object-contain"
                priority
              />
              <button
                onClick={() => setLightboxData(null)}
                className="absolute top-4 right-4 bg-black/70 hover:bg-black text-white p-2 rounded-full transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-5 sm:p-6 bg-white space-y-2">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
                {lightboxData.level}
              </span>
              <h4 className="text-lg sm:text-xl font-extrabold text-[#001744]">
                {lightboxData.title}
              </h4>
              <p className="text-xs sm:text-sm text-slate-600">
                {lightboxData.description}
              </p>
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
