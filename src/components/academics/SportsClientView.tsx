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
  Trophy,
  Sun,
  ShieldCheck,
  ChevronRight,
  Sparkles,
  HeartPulse,
  Activity,
  CheckCircle2,
  GraduationCap,
  Users2,
  Flame,
} from "lucide-react";

const OUTDOOR_SPORTS = [
  { name: "Cricket", desc: "Batting technique, bowling precision, field placement strategy" },
  { name: "Football", desc: "Aerobic stamina, spatial awareness, rapid ball handling" },
  { name: "Basketball", desc: "Court agility, dribbling speed, vertical jump coordination" },
  { name: "Volleyball", desc: "Team reflex synchronization, serving and spiking dynamics" },
  { name: "Athletics & Track", desc: "Sprints, long-distance relays, shot put, broad jump" },
];

const INDOOR_SPORTS = [
  { name: "Chess", desc: "Cognitive foresight, pattern recognition, strategic patience" },
  { name: "Table Tennis", desc: "Ultra-fast hand-eye reflexes, spin control, rapid recovery" },
  { name: "Badminton", desc: "Wrist flexibility, shuttle trajectory tracking, court endurance" },
  { name: "Carrom", desc: "Finger dexterity, geometric angle calculations, concentration" },
];

export default function SportsClientView() {
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
            { label: "Sports & Physical Education" },
          ]}
          badge={{
            text: "Athletic Rigor & Holistic Health",
            icon: Trophy,
          }}
          title="Strength, Stamina & Lifelong Sportsmanship"
          subtitle="We acknowledge the significance of fitness and physical exercise in children’s overall development. Physical education at Kautilya builds resilience, moral discipline, and mental vigor."
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
                The Kautilya Sporting Spirit
              </span>
              <p className="text-base sm:text-lg font-bold text-slate-800 leading-snug">
                “Victory is not just about medals; it is about learning to respect opponents, persevering through exhaustion, and rising stronger after every defeat.”
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

        {/* 3 CORE PILLARS: OUTDOOR, INDOOR & YOGA */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* 1. Outdoor Athletics */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-2xl p-7 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shadow-sm">
                  <Sun className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-amber-600 bg-amber-50 px-2.5 py-0.5 rounded-full">
                    Vitality & Sunshine
                  </span>
                  <h3 className="text-xl font-black text-[#001744] mt-2">
                    Outdoor Athletics
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  We actively promote outdoor play on our campus grounds. Daily sunlight exposure provides vital natural Vitamin D for bone health, immune strength, and elevated energy levels.
                </p>

                <div className="space-y-2 pt-3 border-t border-slate-100">
                  {OUTDOOR_SPORTS.map((s) => (
                    <div key={s.name} className="text-xs text-slate-700">
                      <span className="font-bold text-[#001744]">{s.name}: </span>
                      <span className="text-slate-500">{s.desc}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 mt-6 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-amber-700">
                <CheckCircle2 className="w-4 h-4 text-amber-600" />
                <span>Dedicated Sports Periods</span>
              </div>
            </motion.div>

            {/* 2. Indoor Games & Strategy */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-2xl p-7 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center shadow-sm">
                  <Activity className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded-full">
                    Cognition & Patience
                  </span>
                  <h3 className="text-xl font-black text-[#001744] mt-2">
                    Indoor Sports & Strategy
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Indoor sports sharpen neurological dexterity, tactical foresight, patience, and emotional equilibrium. They provide focused mental stamina alongside lightning physical reflexes.
                </p>

                <div className="space-y-2 pt-3 border-t border-slate-100">
                  {INDOOR_SPORTS.map((s) => (
                    <div key={s.name} className="text-xs text-slate-700">
                      <span className="font-bold text-[#001744]">{s.name}: </span>
                      <span className="text-slate-500">{s.desc}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 mt-6 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-blue-700">
                <CheckCircle2 className="w-4 h-4 text-blue-600" />
                <span>Inter-House Tournaments</span>
              </div>
            </motion.div>

            {/* 3. Yoga & Mind-Body Equilibrium */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white rounded-2xl p-7 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shadow-sm">
                  <HeartPulse className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-full">
                    Mindfulness & Posture
                  </span>
                  <h3 className="text-xl font-black text-[#001744] mt-2">
                    Yoga & Wellness
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Guided by our certified Yoga Teacher, students learn classical asanas, surya namaskars, and pranayama breath control to reduce academic stress and enhance focus.
                </p>

                <div className="space-y-2 pt-3 border-t border-slate-100 text-xs text-slate-700">
                  <p className="font-bold text-[#001744]">Wellness Program Highlights:</p>
                  <ul className="space-y-1.5 pl-3 list-disc text-slate-500">
                    <li>Daily morning assembly mindfulness & breathwork</li>
                    <li>Correction of ergonomic posture and spinal alignment</li>
                    <li>Stress reduction and exam anxiety relief techniques</li>
                    <li>International Yoga Day mass celebrations and camps</li>
                  </ul>
                </div>
              </div>

              <div className="pt-4 mt-6 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-emerald-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Certified YTT Instruction</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* AUTHENTIC PHOTO FEATURE */}
        <section className="bg-white py-16 sm:py-20 border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-6 relative"
              >
                <div className="relative h-80 sm:h-[440px] rounded-2xl overflow-hidden shadow-xl border-4 border-slate-50">
                  <Image
                    src="/images/academics/kautilya-sports-playground.jpeg"
                    alt="Students on Kautilya Vidyalaya sports ground engaging in outdoor athletics"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5 text-white">
                    <p className="text-xs font-bold text-[#FFD907] uppercase tracking-wider">Campus Arena</p>
                    <h4 className="text-lg font-bold">Kautilya Sports Field, Mysuru</h4>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-6 space-y-6"
              >
                <span className="text-xs font-extrabold tracking-wider uppercase text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                  Coaching Excellence
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#001744] tracking-tight">
                  Qualified Physical Educators & Mentors
                </h2>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  Our sports department is spearheaded by highly qualified Master of Physical Education (M.P.Ed) and Bachelor of Physical Education (B.P.Ed) coaches who prioritize student safety, fitness diagnostics, and personalized athletic development.
                </p>

                <div className="bg-slate-50 p-5 rounded-xl border border-slate-100 space-y-2 text-xs sm:text-sm text-slate-700">
                  <div className="flex items-center gap-2 font-bold text-[#001744]">
                    <Users2 className="w-4 h-4 text-blue-600" />
                    <span>Certified Physical Education Faculty:</span>
                  </div>
                  <p className="text-slate-600 pl-6">
                    • <strong>Mahadeva</strong> – M.P.Ed (Senior PE Coach)<br />
                    • <strong>Prashantha Kumara H L</strong> – BA, B.P.Ed (Athletics & Games)<br />
                    • <strong>Rashmi V R</strong> – BBM, B.P.Ed, M.P.Ed (Girls Sports & Conditioning)<br />
                    • <strong>Savitha Kumari D N</strong> – PUC, YTT (Yoga Instructor)
                  </p>
                </div>

                <div className="pt-2 flex items-center gap-4">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>First-Aid Trained Faculty</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
                    <Trophy className="w-4 h-4 text-[#FFD907]" />
                    <span>CBSE Regional Accolades</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* BOTTOM ADMISSIONS CTA */}
        <section className="bg-[#001744] text-white py-14 border-t-4 border-[#FFD907]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
            <h3 className="text-2xl sm:text-3xl font-black text-white">
              Nurture Your Child’s Athletic Potential
            </h3>
            <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto">
              Admissions open for Academic Year 2027-28. Inquire today to explore our comprehensive sports training facilities.
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
