"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppWidget from "@/components/ui/WhatsAppWidget";
import AdmissionModal from "@/components/ui/AdmissionModal";
import InnerPageHero from "@/components/ui/InnerPageHero";
import {
  ChevronRight,
  CheckCircle2,
  Maximize2,
  X,
  Sparkles,
  GraduationCap,
} from "lucide-react";

const CURRICULUM_POINTS = [
  {
    title: "Science quizzes",
    text: "Science quizzes broaden students' understanding and keep them up to date on new scientific discoveries.",
  },
  {
    title: "Poetry contests",
    text: "Poetry contests help students enhance their vocabulary, linguistic skills, and self-expression.",
  },
  {
    title: "Competitions for story writing",
    text: "Competitions for story writing encourage originality, language, and narrative abilities.",
  },
  {
    title: "Mathematics Olympiads",
    text: "Memory and problem-solving abilities are tested in mathematics Olympiads.",
  },
  {
    title: "Extemporaneous activities",
    text: "Extemporaneous activities improve fast thinking and oratory skills.",
  },
  {
    title: "Exhibit projects",
    text: "Exhibit projects foster cooperation and execution abilities.",
  },
  {
    title: "Essay competitions",
    text: "Essay competitions improve critical thinking and writing precision.",
  },
  {
    title: "Debate competitions",
    text: "Debate competitions help students enhance their defence abilities and the art of constructive discussion.",
  },
  {
    title: "Dance and singing competitions",
    text: "Dance and singing competitions allow pupils to demonstrate their abilities, which boosts confidence and self-esteem. Through creative movement and vocalisation, these exercises also enhance body image awareness and self-expression.",
  },
];

export default function CoCurricularClientView() {
  const [isAdmissionModalOpen, setIsAdmissionModalOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState<{
    src: string;
    title: string;
    subtitle: string;
  } | null>(null);

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans text-slate-800 selection:bg-[#FFD907] selection:text-[#001744]">
      <Navbar onOpenAdmissionModal={() => setIsAdmissionModalOpen(true)} />

      <main className="flex-grow">
        {/* HERO SECTION WITH AUTHENTIC BG & DYNAMIC WAVE */}
        <InnerPageHero
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Academics" },
            { label: "Co-Curricular Activities" },
          ]}
          badge={{
            text: "Beyond The Classroom",
            icon: Sparkles,
          }}
          title="Co-Curricular Activities"
          subtitle="Encouraging students to embrace difficulties, continually improve, and acquire a well-rounded set of talents that enrich their personality for life."
          waveFillColor="#ffffff"
        />

        {/* SECTION 1: CULTURAL STAGE & PHILOSOPHY OVERVIEW */}
        <section className="relative py-16 sm:py-20 overflow-hidden bg-white">
          {/* Subtle angled decorative backdrop strip */}
          <div className="absolute top-1/3 -left-20 right-0 h-44 bg-gradient-to-r from-purple-100/50 via-slate-100/60 to-transparent -skew-y-3 pointer-events-none -z-0" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              {/* Left Column: Stage Photo */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-6"
              >
                <div
                  className="relative aspect-[16/10] sm:aspect-[16/9] w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white cursor-pointer group bg-slate-100"
                  onClick={() =>
                    setLightboxImage({
                      src: "/images/academics/kautilya-co-curricular-activities.jpeg",
                      title: "Cultural Pageantry & Stage Presentations",
                      subtitle: "Students performing in traditional attire during annual celebrations",
                    })
                  }
                >
                  <Image
                    src="/images/academics/kautilya-co-curricular-activities.jpeg"
                    alt="Students performing on stage in traditional Janmashtami attire at Kautilya Vidyalaya"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    priority
                  />
                  <div className="absolute bottom-3 right-3 bg-black/70 hover:bg-black text-white text-xs px-3 py-1.5 rounded-lg flex items-center gap-1.5 opacity-90 group-hover:opacity-100 backdrop-blur-sm transition-all shadow-md">
                    <Maximize2 className="w-3.5 h-3.5 text-[#FFD907]" />
                    <span>View Stage Photo</span>
                  </div>
                </div>
              </motion.div>

              {/* Right Column: Authentic Editorial Text */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-6 space-y-6"
              >
                <div className="space-y-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-3 py-1 rounded-full">
                    Holistic Education
                  </span>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#001744] tracking-tight leading-snug">
                    Building a Growth Mindset Outside the Classroom
                  </h2>
                </div>

                <div className="text-slate-600 text-sm sm:text-base leading-relaxed space-y-4">
                  <p>
                    These activities encourage students to embrace difficulties, continually improve, and acquire a well-rounded set of talents that will serve them well in their future undertakings and instill a growth mindset.
                  </p>
                  <p>
                    Co-curricular activities are important for a child’s education since they provide benefits outside of the classroom. These activities allow students to explore their interests, enhance their talents, and grow as people.
                  </p>
                  <p className="font-semibold text-slate-800">
                    Healthy competition in extracurricular activities promotes active involvement and commitment to reaching goals.
                  </p>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => setIsAdmissionModalOpen(true)}
                    className="bg-[#001744] hover:bg-[#002b7a] text-[#FFD907] font-black text-xs sm:text-sm uppercase tracking-wider px-6 py-3 rounded-xl shadow-md transition-all inline-flex items-center gap-2"
                  >
                    <GraduationCap className="w-4 h-4" />
                    <span>Admissions 2026-27</span>
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* SECTION 2: CURRICULAR DISCIPLINES & SPORTS COLLAGE */}
        <section className="py-16 sm:py-24 bg-slate-50 border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
              {/* Left Column: Authentic 9-Point Curriculum Checklist */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-7 space-y-5"
              >
                <div className="space-y-2 mb-6">
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-100/60 px-3 py-1 rounded-full">
                    Disciplines &amp; Competitions
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#001744] tracking-tight">
                    Diverse Channels of Self-Expression
                  </h3>
                </div>

                <div className="space-y-4">
                  {CURRICULUM_POINTS.map((pt, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: idx * 0.05 }}
                      className="flex items-start gap-3.5 bg-white p-4 rounded-xl border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow"
                    >
                      <div className="mt-0.5 shrink-0">
                        <CheckCircle2 className="w-5 h-5 text-blue-600" />
                      </div>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                        <strong className="text-[#001744] font-bold">
                          {pt.title}
                        </strong>{" "}
                        {pt.text.substring(pt.title.length)}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Right Column: The Complete Authentic Sports & Activities Collage */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="lg:col-span-5 lg:sticky lg:top-24"
              >
                <div
                  className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200 shadow-xl cursor-pointer group"
                  onClick={() =>
                    setLightboxImage({
                      src: "/images/academics/kautilya-cultural-fest.png",
                      title: "Sports & Specialized Disciplines",
                      subtitle: "Yoga, Scouts & Guides, Swimming, Lawn Tennis, Karate, Roller Skating, and Acoustic Music",
                    })
                  }
                >
                  <div className="relative aspect-[5/6] w-full overflow-hidden rounded-xl bg-slate-50">
                    <Image
                      src="/images/academics/kautilya-cultural-fest.png"
                      alt="Co-Curricular activities at Kautilya Vidyalaya: Yoga, Scouts and Guides, Tennis, Swimming, Karate, Skating, Music"
                      fill
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-contain group-hover:scale-[1.02] transition-transform duration-500"
                      priority
                    />
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600">
                    <span className="font-semibold text-[#001744]">
                      7 Active Sports &amp; Leadership Programs
                    </span>
                    <span className="text-blue-600 font-bold flex items-center gap-1 group-hover:text-blue-800 transition-colors">
                      <Maximize2 className="w-3.5 h-3.5" />
                      <span>Click to Zoom</span>
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ADMISSIONS CTA */}
        <section className="bg-[#001744] text-white py-14 border-t-4 border-[#FFD907]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Give Your Child a Well-Rounded Childhood
            </h3>
            <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto">
              Admissions open for 2026-27. Connect with our counselors to learn more about our holistic co-curricular opportunities.
            </p>
            <button
              onClick={() => setIsAdmissionModalOpen(true)}
              className="bg-[#FFD907] hover:bg-yellow-400 text-[#001744] font-black px-7 py-3 rounded-xl text-sm transition-all shadow-lg"
            >
              Enquire for Admission
            </button>
          </div>
        </section>
      </main>

      {/* FULL-SIZE IMAGE LIGHTBOX MODAL */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
          onClick={() => setLightboxImage(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[92vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-white">
              <div>
                <h4 className="text-base sm:text-lg font-bold text-[#001744]">
                  {lightboxImage.title}
                </h4>
                <p className="text-xs text-slate-500">
                  {lightboxImage.subtitle}
                </p>
              </div>
              <button
                onClick={() => setLightboxImage(null)}
                className="text-slate-400 hover:text-black p-1.5 rounded-lg hover:bg-slate-100 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Image View */}
            <div className="relative h-[65vh] w-full bg-slate-900">
              <Image
                src={lightboxImage.src}
                alt={lightboxImage.title}
                fill
                className="object-contain"
                priority
              />
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
