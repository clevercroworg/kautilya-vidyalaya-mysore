"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppWidget from "@/components/ui/WhatsAppWidget";
import AdmissionModal from "@/components/ui/AdmissionModal";
import InnerPageHero from "@/components/ui/InnerPageHero";
import {
  Download,
  FileText,
  Calendar,
  Sparkles,
  Maximize2,
  X,
  BookOpen,
  PenTool,
  ArrowUpRight,
  ExternalLink,
  GraduationCap,
  Baby,
} from "lucide-react";

interface NewsletterEdition {
  id: string;
  month: string;
  year: string;
  title: string;
  category: "kg" | "higher";
  gradeBadge: string;
  volume: string;
  coverImage: string;
  pdfUrl?: string;
  flipbookUrl?: string;
  fileSize: string;
  highlights: string[];
  description: string;
}

const KINDERGARTEN_EDITIONS: NewsletterEdition[] = [
  {
    id: "kg-june-2026",
    month: "June",
    year: "2026",
    title: "June 2026 KG Newsletter",
    category: "kg",
    gradeBadge: "Pre-KG • LKG • UKG",
    volume: "KG Edition • Issue 01",
    coverImage: "/images/student-corner/kautilya-kg-newsletter-cover-june-2026.jpg",
    flipbookUrl:
      "https://www.pdf-flip.com/viewers/161252/7gf8yn.html?color3DCover=%23d8d3b3&pfPageMedia=1&pfEditor=1&v=1790315468233&page=24#pf_4e049eaeaa00/24/",
    fileSize: "Interactive 3D",
    highlights: [
      "Welcome Week & Fun Sensory Activities",
      "World Environment Day Little Green Hands",
      "Color Identification & Rhyme Time Fun",
      "Motor Skills & Social Development",
    ],
    description:
      "A colorful celebration of our youngest learners as they take their first joyous steps into school, friendships, and discovery.",
  },
  {
    id: "kg-july-2026",
    month: "July",
    year: "2026",
    title: "July 2026 KG Newsletter",
    category: "kg",
    gradeBadge: "Pre-KG • LKG • UKG",
    volume: "KG Edition • Issue 02",
    coverImage: "/images/student-corner/kautilya-kg-newsletter-cover-july-2026.jpg",
    flipbookUrl:
      "https://www.pdf-flip.com/viewers/161252/ji8gt2.html?color3DCover=%23d8d3b3&pfPageMedia=1&pfEditor=1&v=1790315396720&page=6#pf_4ba92dfddc18/6/",
    fileSize: "Interactive 3D",
    highlights: [
      "Monsoon Magic & Nature Craft Activities",
      "Pre-Primary Storytelling & Puppet Shows",
      "Healthy Habits & Nutrition Celebrations",
      "Little Explorers Art & Clay Modeling",
    ],
    description:
      "Highlighting imaginative storytelling, sensory craft projects, and early developmental milestones across our kindergarten classes.",
  },
  {
    id: "kg-august-2026",
    month: "August",
    year: "2026",
    title: "August 2026 KG Newsletter",
    category: "kg",
    gradeBadge: "Pre-KG • LKG • UKG",
    volume: "KG Edition • Issue 03",
    coverImage: "/images/student-corner/kautilya-kg-newsletter-cover-august-2026.jpg",
    flipbookUrl:
      "https://www.pdf-flip.com/viewers/840392/ayy28u.html?page=2&pfPageMedia=1&pfEditor=1&v=1789834958638#pf_d0f27bdd058b/2/",
    fileSize: "Interactive 3D",
    highlights: [
      "Independence Day Celebrations in Little Steps",
      "Patriotic Dress-up & Tri-Color Crafts",
      "Grandparents Day & Family Love Activities",
      "Show and Tell & Expressive Learning",
    ],
    description:
      "Showcasing patriotic spirit, festive dress-up days, family connections, and creative milestone projects by our little stars.",
  },
];

const HIGHER_GRADES_EDITIONS: NewsletterEdition[] = [
  {
    id: "school-june-2026",
    month: "June",
    year: "2026",
    title: "June 2026 Newsletter",
    category: "higher",
    gradeBadge: "Grades 1 – 10",
    volume: "Vol. 2026 • Issue 01",
    coverImage: "/images/student-corner/kautilya-newsletter-cover-june-2026.png",
    pdfUrl: "/documents/newsletters/Newsletter-June-2026.pdf",
    fileSize: "5.2 MB",
    highlights: [
      "Academic Session Reopening & Welcoming Assemblies",
      "World Environment Day Tree Planting Drives",
      "International Yoga Day Demonstrations",
      "Creative Art & Story-Writing Highlights",
    ],
    description:
      "Welcoming students back for the new academic session, featuring environmental initiatives, yoga celebrations, and first-term creative writings.",
  },
  {
    id: "school-july-2026",
    month: "July",
    year: "2026",
    title: "July 2026 Newsletter",
    category: "higher",
    gradeBadge: "Grades 1 – 10",
    volume: "Vol. 2026 • Issue 02",
    coverImage: "/images/student-corner/kautilya-newsletter-cover-july-2026.png",
    pdfUrl: "/documents/newsletters/Newsletter-July-Revised.pdf",
    flipbookUrl: "https://flipbook.so/flip/dDQ94vxpod2T4v2xLiUJ",
    fileSize: "51.9 MB",
    highlights: [
      "Student Council Investiture Ceremony",
      "Kargil Vijay Diwas Memorial Assembly",
      "Inter-House Literary & Declamation Contests",
      "Science Olympiad & ATL Robotics Showcases",
    ],
    description:
      "Packed with student essays, original poetry, reports from the investiture ceremony, and reflections on leadership and scholastic excellence.",
  },
];

const EDITORIAL_PILLARS = [
  {
    icon: BookOpen,
    title: "Student Authors & Poets",
    desc: "Original essays, verse, and creative reflections in English, Kannada, and Hindi curated from across primary, middle, and high school grades.",
  },
  {
    icon: PenTool,
    title: "Visual Art & Illustrations",
    desc: "Sketches, canvas paintings, digital illustrations, and origami contributions created by budding school artists.",
  },
  {
    icon: Sparkles,
    title: "Campus Chronicles & Achievements",
    desc: "Monthly coverage of inter-school tournament victories, science fair breakthroughs, festival pageantry, and community service projects.",
  },
];

type SectionFilter = "all" | "kg" | "higher";

export default function MonthlyNewsletterClientView() {
  const [isAdmissionModalOpen, setIsAdmissionModalOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState<SectionFilter>("all");
  const [lightboxImage, setLightboxImage] = useState<{
    src: string;
    title: string;
    month: string;
  } | null>(null);

  const renderEditionCard = (edition: NewsletterEdition, idx: number) => (
    <motion.div
      key={edition.id}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: idx * 0.1 }}
      className="bg-white rounded-3xl p-5 sm:p-6 border border-slate-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
    >
      <div>
        {/* Top Badges */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <span className="text-xs font-bold text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-100 flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-blue-600" />
            <span>
              {edition.month} {edition.year}
            </span>
          </span>
          <span className="text-[11px] font-bold text-amber-800 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200/70">
            {edition.gradeBadge}
          </span>
        </div>

        {/* Thumbnail Preview */}
        <div
          className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden bg-slate-100 shadow-sm cursor-pointer border border-slate-200 group-hover:border-blue-300 transition-all"
          onClick={() => {
            if (edition.flipbookUrl) {
              window.open(edition.flipbookUrl, "_blank", "noopener,noreferrer");
            } else if (edition.pdfUrl) {
              window.open(edition.pdfUrl, "_blank", "noopener,noreferrer");
            } else {
              setLightboxImage({
                src: edition.coverImage,
                title: edition.title,
                month: `${edition.month} ${edition.year}`,
              });
            }
          }}
        >
          <Image
            src={edition.coverImage}
            alt={`${edition.title} Cover`}
            fill
            sizes="(max-width: 640px) 100vw, 380px"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <span className="bg-white/95 text-[#001744] text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow">
              {edition.flipbookUrl ? (
                <>
                  <ExternalLink className="w-3.5 h-3.5 text-blue-600" />
                  <span>Open 3D Flipbook</span>
                </>
              ) : (
                <>
                  <Maximize2 className="w-3.5 h-3.5 text-blue-600" />
                  <span>Inspect Cover</span>
                </>
              )}
            </span>
          </div>
        </div>

        {/* Title & Volume */}
        <div className="mt-4">
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
            {edition.volume}
          </span>
          <h3 className="text-lg sm:text-xl font-black text-[#001744] tracking-tight mt-1">
            {edition.title}
          </h3>
          <p className="text-xs text-slate-500 mt-2 line-clamp-2 leading-relaxed">
            {edition.description}
          </p>
        </div>
      </div>

      {/* Action Links */}
      <div className="mt-5 pt-4 border-t border-slate-100">
        {edition.flipbookUrl && edition.pdfUrl && edition.pdfUrl.endsWith(".pdf") ? (
          <div className="grid grid-cols-2 gap-2.5">
            <a
              href={edition.flipbookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 bg-blue-50 hover:bg-blue-600 text-blue-700 hover:text-white border border-blue-200 hover:border-blue-600 font-bold text-xs px-3 py-2.5 rounded-xl transition-all shadow-sm"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Flipbook</span>
              <ExternalLink className="w-3 h-3 opacity-70" />
            </a>

            <a
              href={edition.pdfUrl}
              download={`${edition.title.replace(/\s+/g, "-")}.pdf`}
              className="inline-flex items-center justify-center gap-1.5 bg-[#001744] hover:bg-[#002b7a] text-[#FFD907] font-black text-xs px-3 py-2.5 rounded-xl transition-all shadow-sm"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download</span>
            </a>
          </div>
        ) : edition.flipbookUrl ? (
          <a
            href={edition.flipbookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 bg-[#001744] hover:bg-[#002b7a] text-[#FFD907] font-black text-xs px-4 py-2.5 rounded-xl transition-all shadow-sm hover:shadow-md group-hover:bg-blue-700"
          >
            <BookOpen className="w-3.5 h-3.5 text-[#FFD907]" />
            <span>Read Online (3D Flipbook)</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#FFD907]/80" />
          </a>
        ) : (
          <a
            href={edition.pdfUrl}
            download={`${edition.title.replace(/\s+/g, "-")}.pdf`}
            className="w-full inline-flex items-center justify-center gap-2 bg-[#001744] hover:bg-[#002b7a] text-[#FFD907] font-black text-xs px-4 py-2.5 rounded-xl transition-all shadow-sm"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download Complete PDF</span>
          </a>
        )}
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-800 selection:bg-[#FFD907] selection:text-[#001744]">
      <Navbar onOpenAdmissionModal={() => setIsAdmissionModalOpen(true)} />

      <main className="flex-grow">
        {/* HERO SECTION WITH AUTHENTIC BG & DYNAMIC WAVE */}
        <InnerPageHero
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Student Corner" },
            { label: "Monthly Newsletter" },
          ]}
          badge={{
            text: "Student Voice & Campus Chronicles",
            icon: FileText,
          }}
          title="Monthly Newsletter"
          subtitle="Celebrating student literary brilliance, creative artwork, academic milestones, and campus life month by month at Kautilya Vidyalaya."
          waveFillColor="#f8fafc"
        />

        {/* SECTION FILTER NAVIGATION */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14 pb-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 border-b border-slate-200">
            <div>
              <span className="text-xs font-extrabold tracking-wider uppercase text-blue-700 bg-blue-50 px-3.5 py-1 rounded-full border border-blue-100">
                Publications Archive
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#001744] tracking-tight mt-2">
                Published Monthly Editions
              </h2>
            </div>

            {/* Filter Pills */}
            <div className="flex items-center gap-2 p-1.5 bg-white border border-slate-200/90 rounded-2xl shadow-sm overflow-x-auto w-full sm:w-auto">
              <button
                onClick={() => setSelectedFilter("all")}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap flex items-center gap-1.5 ${
                  selectedFilter === "all"
                    ? "bg-[#001744] text-[#FFD907] shadow-sm"
                    : "text-slate-600 hover:text-[#001744] hover:bg-slate-50"
                }`}
              >
                <span>All Editions</span>
                <span className="text-[10px] opacity-75 font-semibold">
                  ({KINDERGARTEN_EDITIONS.length + HIGHER_GRADES_EDITIONS.length})
                </span>
              </button>

              <button
                onClick={() => setSelectedFilter("kg")}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap flex items-center gap-1.5 ${
                  selectedFilter === "kg"
                    ? "bg-[#001744] text-[#FFD907] shadow-sm"
                    : "text-slate-600 hover:text-[#001744] hover:bg-slate-50"
                }`}
              >
                <Baby className="w-3.5 h-3.5 text-[#FFD907]" />
                <span>Kindergarten (KG)</span>
                <span className="text-[10px] opacity-75 font-semibold">
                  ({KINDERGARTEN_EDITIONS.length})
                </span>
              </button>

              <button
                onClick={() => setSelectedFilter("higher")}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap flex items-center gap-1.5 ${
                  selectedFilter === "higher"
                    ? "bg-[#001744] text-[#FFD907] shadow-sm"
                    : "text-slate-600 hover:text-[#001744] hover:bg-slate-50"
                }`}
              >
                <GraduationCap className="w-3.5 h-3.5 text-[#FFD907]" />
                <span>Higher Grades (1–10)</span>
                <span className="text-[10px] opacity-75 font-semibold">
                  ({HIGHER_GRADES_EDITIONS.length})
                </span>
              </button>
            </div>
          </div>
        </section>

        {/* 1. KINDERGARTEN (KG) NEWSLETTER SECTION */}
        {(selectedFilter === "all" || selectedFilter === "kg") && (
          <section id="kindergarten-newsletters" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-8">
              <div>
                <span className="text-xs font-bold text-amber-800 bg-amber-100/70 px-3 py-1 rounded-full border border-amber-200 flex items-center gap-1.5 w-fit mb-2">
                  <Baby className="w-3.5 h-3.5 text-amber-700" />
                  <span>Little Steps • Pre-KG to UKG</span>
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#001744] tracking-tight">
                  Kindergarten Monthly Newsletters
                </h3>
                <p className="text-slate-500 text-sm mt-1 max-w-2xl">
                  Interactive 3D flipbook publications celebrating foundational milestones, theme days, and creative discoveries of our youngest learners.
                </p>
              </div>
              <span className="text-xs font-semibold text-slate-400">
                {KINDERGARTEN_EDITIONS.length} Issues Published
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
              {KINDERGARTEN_EDITIONS.map((edition, idx) => renderEditionCard(edition, idx))}
            </div>
          </section>
        )}

        {/* SECTION DIVIDER (when displaying both) */}
        {selectedFilter === "all" && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="border-t border-slate-200/80 my-4" />
          </div>
        )}

        {/* 2. HIGHER GRADES NEWSLETTER SECTION */}
        {(selectedFilter === "all" || selectedFilter === "higher") && (
          <section id="higher-grades-newsletters" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-8">
              <div>
                <span className="text-xs font-bold text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-100 flex items-center gap-1.5 w-fit mb-2">
                  <GraduationCap className="w-3.5 h-3.5 text-blue-600" />
                  <span>Primary, Middle &amp; High School • Grades 1 to 10</span>
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#001744] tracking-tight">
                  Higher Grades Monthly Newsletters
                </h3>
                <p className="text-slate-500 text-sm mt-1 max-w-2xl">
                  Full student publications featuring student-authored essays, original artwork, science innovations, sports chronicles, and academic honors.
                </p>
              </div>
              <span className="text-xs font-semibold text-slate-400">
                {HIGHER_GRADES_EDITIONS.length} Issues Published
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
              {HIGHER_GRADES_EDITIONS.map((edition, idx) => renderEditionCard(edition, idx))}
            </div>
          </section>
        )}

        {/* EDITORIAL COLUMNS OVERVIEW */}
        <section className="bg-white py-16 sm:py-20 border-y border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-extrabold tracking-wider uppercase text-blue-700 bg-blue-50 px-3.5 py-1 rounded-full border border-blue-100">
                Editorial Ethos
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#001744] tracking-tight mt-3">
                Behind the Publications
              </h2>
              <p className="text-slate-500 text-sm mt-2">
                Our editorial committee provides an empowering publishing platform for young thinkers, poets, and storytellers.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {EDITORIAL_PILLARS.map((pillar, idx) => {
                const IconComponent = pillar.icon;
                return (
                  <motion.div
                    key={pillar.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className="p-7 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#001744] text-[#FFD907] flex items-center justify-center shadow-md">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-black text-[#001744]">
                      {pillar.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* BOTTOM ADMISSIONS CTA */}
        <section className="bg-[#001744] text-white py-14 border-t-4 border-[#FFD907]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Nurture Your Child’s Creative Voice
            </h3>
            <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto">
              Admissions open for 2027-28. Empower your child with holistic education, public speaking, and published writing opportunities.
            </p>
            <button
              onClick={() => setIsAdmissionModalOpen(true)}
              className="bg-[#FFD907] hover:bg-yellow-400 text-[#001744] font-black px-7 py-3 rounded-xl text-sm transition-all shadow-lg inline-flex items-center gap-2"
            >
              <span>Apply for Admission</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </section>
      </main>

      {/* LIGHTBOX MODAL FOR COVER PREVIEW */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setLightboxImage(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-3xl w-full overflow-hidden shadow-2xl relative border border-white/20 flex flex-col animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-[65vh] w-full bg-slate-900">
              <Image
                src={lightboxImage.src}
                alt={lightboxImage.title}
                fill
                className="object-contain"
                priority
              />
              <button
                onClick={() => setLightboxImage(null)}
                className="absolute top-4 right-4 bg-black/70 hover:bg-black text-white p-2 rounded-full transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-5 sm:p-6 bg-white space-y-1">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
                {lightboxImage.month} Publication
              </span>
              <h4 className="text-lg sm:text-xl font-extrabold text-[#001744]">
                {lightboxImage.title}
              </h4>
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
