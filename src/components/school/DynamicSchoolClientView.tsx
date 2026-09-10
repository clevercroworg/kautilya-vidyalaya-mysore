"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppWidget from "@/components/ui/WhatsAppWidget";
import AdmissionModal from "@/components/ui/AdmissionModal";
import InnerPageHero from "@/components/ui/InnerPageHero";
import {
  Award,
  Calendar,
  MapPin,
  Building,
  UserCheck,
  CheckCircle2,
  Share2,
  Check,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  Maximize2,
  X,
  BookOpen,
  Rocket,
  Compass,
  Trophy,
  Newspaper,
  Quote,
} from "lucide-react";

export default function DynamicSchoolClientView() {
  const [isAdmissionModalOpen, setIsAdmissionModalOpen] = useState(false);
  const [selectedLightboxImage, setSelectedLightboxImage] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: "Kautilya Vidyalaya Honoured as 'The Dynamic School' at Karnataka Educators' Summit 2025",
          text: "Kautilya Vidyalaya, Mysuru, has been honoured with the prestigious title of 'The Dynamic School' for the year 2025 by Education News Network (ENN) and Education Today.",
          url: window.location.href,
        })
        .catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const galleryImages = [
    {
      url: "/images/awards/kautilya-dynamic-school-award-ceremony.jpg",
      caption: "Chairman Shri T. Babu receiving 'The Dynamic School' trophy & certificate at The Radisson Blu, Mysuru",
    },
    {
      url: "/images/events/kautilya-educators-summit-award.jpg",
      caption: "Official State Distinction Award Plaque presented at Karnataka Educators’ Summit 2025",
    },
    {
      url: "/images/events/student-rocket-launch/student-rocket-launch-01.webp",
      caption: "Pioneering STEM Initiatives: Student-engineered atmospheric rocketry research at Kautilya",
    },
    {
      url: "/images/events/science-display/science-display-01.webp",
      caption: "Atal Tinkering Lab & Innovation Hub: Young scientists demonstrating hydraulic prototypes",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-800 selection:bg-[#FFD907] selection:text-[#001744]">
      <Navbar onOpenAdmissionModal={() => setIsAdmissionModalOpen(true)} />

      <main className="flex-grow">
        {/* HERO BANNER WITH BREADCRUMB & DYNAMIC ACCENT */}
        <InnerPageHero
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Our School", href: "/about-us" },
            { label: "Awards & Achievements", href: "/awards-and-achievements" },
            { label: "The Dynamic School 2025" },
          ]}
          badge={{
            text: "State Distinction • Karnataka Educators' Summit 2025",
            icon: Award,
          }}
          title="Kautilya Vidyalaya, Mysuru, Honoured as ‘The Dynamic School’"
          subtitle="Conferred by the Education News Network (ENN) and Education Today in celebration of our progressive vision, holistic learning framework, and student-centered innovations."
          waveFillColor="#f8fafc"
        />

        {/* METADATA SUMMARY BAR */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 sm:-mt-8 relative z-20">
          <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-5 sm:p-6 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 divide-y md:divide-y-0 md:divide-x divide-slate-100">
            <div className="flex items-center gap-3.5 pt-2 md:pt-0">
              <div className="w-11 h-11 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 border border-amber-100">
                <Trophy className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-wider font-extrabold text-slate-400">Award Title</p>
                <p className="text-sm sm:text-base font-black text-[#001744]">The Dynamic School</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5 pt-4 md:pt-0 md:pl-6">
              <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100">
                <Building className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-wider font-extrabold text-slate-400">Conferred By</p>
                <p className="text-sm sm:text-base font-black text-[#001744]">ENN & Education Today</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5 pt-4 md:pt-0 md:pl-6">
              <div className="w-11 h-11 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-100">
                <Calendar className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-wider font-extrabold text-slate-400">Date & Edition</p>
                <p className="text-sm sm:text-base font-black text-[#001744]">October 14, 2025</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5 pt-4 md:pt-0 md:pl-6">
              <div className="w-11 h-11 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0 border border-purple-100">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-wider font-extrabold text-slate-400">Summit Venue</p>
                <p className="text-sm sm:text-base font-black text-[#001744]">The Radisson Blu, Mysuru</p>
              </div>
            </div>
          </div>
        </section>

        {/* MAIN CEREMONY STORY & FEATURED PHOTOGRAPH */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Ceremony Photo with Lightbox trigger */}
            <div className="lg:col-span-6">
              <div
                className="relative rounded-2xl overflow-hidden shadow-2xl bg-slate-900 border-2 border-slate-100 cursor-pointer group"
                onClick={() => setSelectedLightboxImage("/images/awards/kautilya-dynamic-school-award-ceremony.jpg")}
              >
                <div className="relative aspect-[16/10] sm:aspect-[4/3] w-full">
                  <Image
                    src="/images/awards/kautilya-dynamic-school-award-ceremony.jpg"
                    alt="Chairman Shri T. Babu receiving The Dynamic School Award"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 550px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="inline-block bg-[#FFD907] text-[#001744] text-xs font-black px-2.5 py-1 rounded-md mb-2 shadow">
                      Official Ceremony Photo
                    </span>
                    <p className="text-xs sm:text-sm text-slate-200 font-medium leading-snug">
                      Chairman Shri T. Babu accepting the honor on behalf of Kautilya Vidyalaya at Karnataka Educators’ Summit 2025.
                    </p>
                  </div>

                  <div className="absolute top-4 right-4 bg-black/60 hover:bg-black text-white p-2 rounded-xl backdrop-blur-sm transition-all">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>
              </div>

              {/* Share and Action Pills */}
              <div className="mt-4 flex items-center justify-between text-xs text-slate-500">
                <span className="flex items-center gap-1.5 font-semibold text-slate-600">
                  <UserCheck className="w-4 h-4 text-blue-600" />
                  <span>Represented by: Shri T. Babu, Chairman</span>
                </span>

                <button
                  onClick={handleShare}
                  className="inline-flex items-center gap-1.5 bg-slate-100 hover:bg-slate-200 text-[#001744] font-bold px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700">Link Copied!</span>
                    </>
                  ) : (
                    <>
                      <Share2 className="w-3.5 h-3.5" />
                      <span>Share Story</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Right Column: Narrative & Official Press Statement */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-blue-700 bg-blue-50 px-3 py-1.5 rounded-full">
                <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                <span>State-Level Educational Distinction</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#001744] leading-tight">
                Recognizing Visionary Leadership & Student-Centric Pedagogy
              </h2>

              <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                <p>
                  <strong>Kautilya Vidyalaya, Mysuru</strong>, has been honoured with the prestigious title of <strong>‘The Dynamic School’</strong> for the year 2025 by the <strong>Education News Network (ENN)</strong> — a reputable vertical of <em>Education Today</em>, India’s only dedicated news channel exclusively focused on the education sector.
                </p>

                <p>
                  The award was conferred during the <strong>Karnataka Educators’ Summit 2025</strong>, held on <strong>October 14, 2025</strong>, at <strong>The Radisson Blu, Mysuru</strong>. This recognition celebrates Kautilya Vidyalaya’s progressive approach, holistic education model, and consistent efforts towards academic and co-curricular excellence.
                </p>

                <p>
                  The school was proudly represented at the summit by its Chairman, <strong>Shri T. Babu</strong>, who accepted the award on behalf of the institution during the official ceremony.
                </p>
              </div>

              <div className="p-4 sm:p-5 rounded-xl bg-amber-50/70 border-l-4 border-amber-400 text-slate-700 text-xs sm:text-sm leading-relaxed">
                <p className="font-semibold text-[#001744] mb-1 flex items-center gap-1.5">
                  <Newspaper className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>Featured in National Media</span>
                </p>
                Photographs of the felicitation will be featured in the <strong>November 2025 edition of Education Today magazine</strong>, further highlighting the school’s achievement on a national platform.
              </div>
            </div>
          </div>
        </section>

        {/* WHY KAUTILYA WON: 4 CORE PILLARS OF DISTINCTION */}
        <section className="bg-slate-100/70 py-16 sm:py-24 border-y border-slate-200/60">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-xs font-black text-blue-700 uppercase tracking-wider bg-blue-100/60 px-3 py-1 rounded-full">
                Jury Evaluation Criteria
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-[#001744] mt-3">
                Why Kautilya Stood Out
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-3">
                The jury, comprising eminent national educationists, evaluated schools nationwide based on their vision, forward-thinking curriculum, and student readiness.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col justify-between group">
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center font-black group-hover:bg-[#001744] group-hover:text-[#FFD907] transition-colors">
                    <Rocket className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-black text-[#001744]">Atal & Space Labs</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Student-built atmospheric rockets, Arduino microcontrollers, AI prototypes, and 3D printing engineering at our dedicated Atal Tinkering Lab.
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs font-bold text-blue-700">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Hands-on STEM</span>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col justify-between group">
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center font-black group-hover:bg-[#001744] group-hover:text-[#FFD907] transition-colors">
                    <BookOpen className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-black text-[#001744]">Progressive Pedagogy</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Inquiry-led learning aligned with NEP 2020 guidelines, nurturing conceptual comprehension over rote memorization from kindergarten through high school.
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs font-bold text-amber-700">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>NEP 2020 Framework</span>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col justify-between group">
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-black group-hover:bg-[#001744] group-hover:text-[#FFD907] transition-colors">
                    <Compass className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-black text-[#001744]">Global Learning Journeys</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    International immersion trips like Singapore Science & Urban Studies, state field trips, and nationwide academic Olympiads expanding horizons.
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs font-bold text-emerald-700">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Global Exposure</span>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col justify-between group">
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center font-black group-hover:bg-[#001744] group-hover:text-[#FFD907] transition-colors">
                    <Trophy className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-black text-[#001744]">Holistic Excellence</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    A balanced synergy of 100% CBSE pass records, state skating & karate championships, theatre arts, yoga, and ethical value systems.
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs font-bold text-purple-700">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Balanced Growth</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CHAIRMAN'S DESK QUOTE & JURY CITATION */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="bg-gradient-to-br from-[#001744] to-[#002b7a] rounded-3xl p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden border border-white/10">
            <Quote className="w-24 h-24 text-white/10 absolute -top-4 -right-4 pointer-events-none" />

            <div className="relative z-10 max-w-3xl space-y-6">
              <span className="inline-flex items-center gap-2 bg-[#FFD907] text-[#001744] text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider">
                Chairman’s Statement
              </span>

              <blockquote className="text-lg sm:text-2xl font-bold leading-relaxed text-slate-100">
                “This recognition is yet another milestone in Kautilya Vidyalaya’s journey of educational excellence. It is a testament to the collective dedication of our visionary teachers, the limitless enthusiasm of our young students, and the enduring trust of our parent community.”
              </blockquote>

              <div className="pt-4 border-t border-white/15 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#FFD907] text-[#001744] font-black flex items-center justify-center text-lg shadow">
                  TB
                </div>
                <div>
                  <h4 className="font-black text-white text-base">Shri T. Babu</h4>
                  <p className="text-xs text-slate-300">Chairman & Founder, Kautilya Vidyalaya Mysore</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CEREMONY & RELATED PHOTO GALLERY */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-black text-blue-600 uppercase tracking-wider bg-blue-50 px-3 py-1 rounded-full">
                Visual Showcase
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#001744] mt-2">
                Award Felicitation & Campus Innovation
              </h2>
            </div>
            <Link
              href="/events-gallery"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-extrabold text-[#001744] hover:text-blue-600 transition-colors"
            >
              <span>View All Campus Events</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryImages.map((img, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-slate-100 group cursor-pointer"
                onClick={() => setSelectedLightboxImage(img.url)}
              >
                <div className="relative h-52 w-full bg-slate-100 overflow-hidden">
                  <Image
                    src={img.url}
                    alt={img.caption}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                    <span className="bg-black/60 text-white text-xs font-bold p-2 rounded-xl backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">
                      <Maximize2 className="w-4 h-4" />
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-xs font-semibold text-slate-700 line-clamp-2 leading-relaxed">
                    {img.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* BOTTOM CALL-TO-ACTION SECTION */}
        <section className="bg-gradient-to-r from-[#001744] to-[#002266] py-16 text-white text-center px-4 relative overflow-hidden">
          <div className="max-w-3xl mx-auto space-y-6 relative z-10">
            <span className="inline-block bg-[#FFD907] text-[#001744] text-xs font-black px-3.5 py-1.5 rounded-full uppercase tracking-wider shadow">
              Experience Award-Winning Learning
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight">
              Join Kautilya Vidyalaya for the 2026–2027 Academic Year
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Empower your child with a holistic, future-oriented education that nurtures scientific curiosity, artistic expression, and global consciousness.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <button
                onClick={() => setIsAdmissionModalOpen(true)}
                className="bg-[#FFD907] hover:bg-yellow-400 text-[#001744] font-black px-7 py-3.5 rounded-full text-sm shadow-xl hover:scale-105 transition-all cursor-pointer"
              >
                Apply for Admission
              </button>
              <Link
                href="/contact-us"
                className="bg-white/10 hover:bg-white/20 text-white font-bold px-6 py-3.5 rounded-full text-sm backdrop-blur-sm border border-white/20 transition-colors"
              >
                Schedule Campus Visit
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* LIGHTBOX MODAL */}
      {selectedLightboxImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setSelectedLightboxImage(null)}
        >
          <div
            className="relative max-w-4xl w-full aspect-[4/3] sm:aspect-[16/10] bg-black rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedLightboxImage(null)}
              className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/60 hover:bg-white hover:text-black text-white transition-colors cursor-pointer"
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>
            <Image
              src={selectedLightboxImage}
              alt="Award ceremony showcase"
              fill
              className="object-contain"
            />
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
