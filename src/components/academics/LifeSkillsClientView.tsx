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
  HeartHandshake,
  Compass,
  Palette,
  Mic2,
  Globe2,
  TreePine,
  UserCheck,
  ChevronRight,
  Sparkles,
  GraduationCap,
  CheckCircle2,
} from "lucide-react";

const LIFE_SKILLS = [
  {
    title: "SUPW (Socially Useful Productive Work)",
    image: "/images/academics/kautilya-life-skills-supw.jpg",
    icon: HeartHandshake,
    badge: "Community & Craft",
    color: "from-amber-600 to-orange-700",
    desc: "Going beyond the standard classroom setting, students engage in purposeful community labor, campus gardening, craft creation, and social outreach projects that instill humility and practical handiwork.",
  },
  {
    title: "Art & Craft Studio",
    image: "/images/academics/kautilya-life-skills-art.jpeg",
    icon: Palette,
    badge: "Fine Motor & Aesthetics",
    color: "from-purple-600 to-violet-700",
    desc: "Developing fine motor coordination, creative spatial perception, and emotional expression through pottery, origami, fabric painting, and mixed-media installations.",
  },
  {
    title: "Debate, Speech & Oratory",
    image: "/images/academics/kautilya-life-skills-debate.jpg",
    icon: Mic2,
    badge: "Logical Articulation",
    color: "from-blue-600 to-indigo-700",
    desc: "Teaching children how to structure evidence-based arguments, listen actively to counter-perspectives, and articulate complex concepts with poise and eloquence before public audiences.",
  },
  {
    title: "General Knowledge & Global Affairs",
    image: "/images/academics/kautilya-life-skills-hero.png",
    icon: Globe2,
    badge: "Civic Consciousness",
    color: "from-cyan-600 to-blue-700",
    desc: "Fostering well-informed citizens who understand constitutional rights, world geography, historical lessons, and current geopolitical developments through weekly quiz leagues.",
  },
  {
    title: "Counseling & Emotional Wellness",
    image: "/images/academics/kautilya-life-skills-counselling.jpeg",
    icon: UserCheck,
    badge: "Mental Resilience",
    color: "from-rose-500 to-pink-700",
    desc: "A dedicated student counseling wing offering confidential emotional guidance, behavioral mentoring, stress management techniques, and personalized career path assessments.",
  },
  {
    title: "Environmental Education",
    image: "/images/academics/kautilya-life-skills-environment.jpeg",
    icon: TreePine,
    badge: "Eco-Stewardship",
    color: "from-emerald-600 to-teal-700",
    desc: "Cultivating green conscience through waste segregation, rainwater awareness, organic kitchen gardens, and energy saving—anchored in our Wipro Earthian award legacy.",
  },
];

export default function LifeSkillsClientView() {
  const [isAdmissionModalOpen, setIsAdmissionModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-800 selection:bg-[#FFD907] selection:text-[#001744]">
      <Navbar onOpenAdmissionModal={() => setIsAdmissionModalOpen(true)} />

      <main className="flex-grow">
        {/* HERO BANNER WITH AUTHENTIC BG & DYNAMIC WAVE */}
        <InnerPageHero
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Academics" },
            { label: "Life Skills" },
          ]}
          badge={{
            text: "Character, Practical Competency & Well-being",
            icon: Compass,
          }}
          title="Life Skills: Preparation for the Real World"
          subtitle="Time rushes by on the journey of young and growing minds. We recognize that acquiring life skills should never be boring—we inject a feeling of adventure, empathy, and practical mastery into every experience."
          waveFillColor="#f8fafc"
        />

        {/* GUIDING ETHOS CALLOUT */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 sm:-mt-8 relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 border-l-8 border-[#FFD907] border-y border-r border-slate-100 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
          >
            <div className="space-y-2 max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-wider text-[#001744]">
                Essential Preparedness
              </span>
              <p className="text-base sm:text-lg font-bold text-slate-800 leading-snug">
                “Academics opens doors to knowledge; life skills ensure a child possesses the wisdom, emotional stability, and empathy to walk through those doors with grace.”
              </p>
            </div>
            <button
              onClick={() => setIsAdmissionModalOpen(true)}
              className="shrink-0 bg-[#001744] hover:bg-[#002b7a] text-[#FFD907] font-black px-6 py-3 rounded-xl shadow transition-all text-sm flex items-center gap-2"
            >
              <GraduationCap className="w-4 h-4" />
              <span>Admissions 2027-28</span>
            </button>
          </motion.div>
        </section>

        {/* 6 LIFE SKILLS CARDS GRID WITH FRAMER MOTION */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-extrabold tracking-wider uppercase text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
              Core Curriculum
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#001744] tracking-tight mt-3">
              Six Pathways to Personal Mastery
            </h2>
            <p className="text-slate-500 text-sm mt-2">
              Every child participates regularly in hands-on life skill workshops throughout the academic year.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {LIFE_SKILLS.map((skill, idx) => {
              const IconComponent = skill.icon;
              return (
                <motion.div
                  key={skill.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
                >
                  <div>
                    {/* Authentic Photo */}
                    <div className="relative h-48 w-full bg-slate-100">
                      <Image
                        src={skill.image}
                        alt={skill.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover"
                      />
                      <div className="absolute top-3 left-3 bg-[#001744]/90 text-white text-[11px] font-bold px-3 py-1 rounded-full backdrop-blur-sm border border-white/10 flex items-center gap-1.5">
                        <IconComponent className="w-3.5 h-3.5 text-[#FFD907]" />
                        <span>{skill.badge}</span>
                      </div>
                    </div>

                    <div className="p-6 space-y-3">
                      <h3 className="text-lg font-black text-[#001744] leading-snug">
                        {skill.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {skill.desc}
                      </p>
                    </div>
                  </div>

                  <div className="p-6 pt-0">
                    <div className="pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-emerald-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Integrated in School Timetable</span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* BOTTOM ADMISSIONS CTA */}
        <section className="bg-[#001744] text-white py-14 border-t-4 border-[#FFD907]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
            <h3 className="text-2xl sm:text-3xl font-black text-white">
              Cultivate Confidence & Life Skills Early
            </h3>
            <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto">
              Admissions open for Academic Year 2027-28. Join an educational ecosystem that prizes character, integrity, and capability above all.
            </p>
            <button
              onClick={() => setIsAdmissionModalOpen(true)}
              className="bg-[#FFD907] hover:bg-yellow-400 text-[#001744] font-black px-7 py-3 rounded-xl text-sm transition-all shadow-lg"
            >
              Enquire for Admission 2027-28
            </button>
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
