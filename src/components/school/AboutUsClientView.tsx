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
  HeartHandshake,
  Compass,
  Sparkles,
  ShieldCheck,
  Users,
  Target,
  GraduationCap,
  Award,
  BookOpen,
  ChevronRight,
  Lightbulb,
  CheckCircle2,
  Phone,
} from "lucide-react";

export default function AboutUsClientView() {
  const [isAdmissionModalOpen, setIsAdmissionModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-800 selection:bg-[#FFD907] selection:text-[#001744]">
      {/* 1. NAVIGATION BAR */}
      <Navbar onOpenAdmissionModal={() => setIsAdmissionModalOpen(true)} />

      <main className="flex-grow">
        {/* 2. HERO BANNER WITH AUTHENTIC BG & DYNAMIC WAVE */}
        <InnerPageHero
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Our School" },
            { label: "About Us" },
          ]}
          badge={{
            text: "CBSE Affiliated Institution • Affiliation No. 830193",
            icon: ShieldCheck,
          }}
          title="Empowering Minds, Moulding Future Leaders"
          subtitle="At Kautilya Vidyalaya, Mysore, education is more than simply delivering information—it is about creating a caring atmosphere where children flourish into confident, compassionate, and well-rounded individuals."
          waveFillColor="#f8fafc"
        />

        {/* 3. FOUNDATIONAL MOTTO QUOTE */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 sm:-mt-8 relative z-20">
          <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 border-l-8 border-[#FFD907] border-y border-r border-slate-100 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-widest text-[#001744] font-bold">Guiding Philosophy</p>
              <blockquote className="text-lg sm:text-xl font-bold text-slate-800 italic leading-snug">
                “Right education should help the student, not only to develop his capacities, but to understand his own highest interest.”
              </blockquote>
            </div>
            <button
              onClick={() => setIsAdmissionModalOpen(true)}
              className="shrink-0 bg-[#001744] hover:bg-[#002b7a] text-[#FFD907] font-extrabold px-6 py-3 rounded-xl shadow transition-all hover:shadow-lg text-sm flex items-center gap-2"
            >
              <GraduationCap className="w-4 h-4" />
              <span>Admissions 2027-28</span>
            </button>
          </div>
        </section>

        {/* 4. OUR STORY & PHILOSOPHY SECTION */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Image Col */}
            <div className="lg:col-span-6 relative">
              <div className="relative h-[360px] sm:h-[460px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <Image
                  src="/images/kautilya-school-heritage-hero.jpg"
                  alt="Kautilya Vidyalaya Campus and Learning Community"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#001744]/80 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <div className="inline-flex items-center gap-2 bg-[#FFD907] text-[#001744] px-3 py-1 rounded-md text-xs font-bold mb-2">
                    <Award className="w-3.5 h-3.5" />
                    <span>Wipro Earthian Awardee</span>
                  </div>
                  <p className="text-sm font-semibold text-slate-100">
                    Kautilya Vidyalaya, Dattagalli 3rd Stage, Mysuru
                  </p>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 hidden sm:block bg-[#001744] text-white p-5 rounded-2xl shadow-xl border border-white/10 max-w-xs">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-[#FFD907] text-[#001744] flex items-center justify-center font-black text-xl shrink-0">
                    20+
                  </div>
                  <div>
                    <h4 className="text-sm font-bold">Years of Trust</h4>
                    <p className="text-xs text-slate-300">Shaping generations of thinkers and achievers</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Text Col */}
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-extrabold tracking-wider uppercase text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                  Educational Ethos
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#001744] tracking-tight">
                  A Complete Learning Experience Grounded in Ethics
                </h2>
              </div>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                At Kautilya Vidyalaya, values are central to all we do. We uphold the highest ethical standards, encouraging honesty, integrity, and respect among our students. Our goal is to instill a strong sense of social responsibility and global citizenship, preparing them to be compassionate leaders of the future.
              </p>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Care and nurture form essential components of our teaching philosophy. We recognize that each child is unique, with their own set of skills, passions, and curiosities. Our dedicated faculty members provide personalized attention and guidance, cultivating a welcoming environment where students feel appreciated, heard, and inspired to reach their greatest potential.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-sm text-[#001744]">Child-Centric Learning</h4>
                    <p className="text-xs text-slate-500">Interactive curriculum appealing to diverse learning styles.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-sm text-[#001744]">Collaborative Community</h4>
                    <p className="text-xs text-slate-500">Active partnership between parents, educators, and mentors.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. DUAL VISION & MISSION CARDS */}
        <section className="bg-white py-16 sm:py-20 border-y border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-extrabold tracking-wider uppercase text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                Guiding Lights
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#001744] tracking-tight mt-3">
                Our Vision & Mission
              </h2>
              <p className="text-slate-500 text-sm mt-2">
                The institutional compass directing our academic standards and pedagogical approach.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Vision Card */}
              <div className="bg-gradient-to-br from-[#001744] to-[#002b7a] text-white p-8 sm:p-10 rounded-2xl shadow-xl relative overflow-hidden flex flex-col justify-between">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full pointer-events-none" />
                <div className="space-y-4 relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-[#FFD907] text-[#001744] flex items-center justify-center font-bold">
                    <Lightbulb className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-[#FFD907]">Our Vision</h3>
                  <p className="text-slate-200 text-base leading-relaxed">
                    At Kautilya, our efforts are directed towards stimulating young minds to bring out their creative capabilities, and at the same time inculcating in each of them the quality of evolving into worthy human beings and pioneering leaders of the future.
                  </p>
                </div>
                <div className="pt-6 border-t border-white/10 mt-6 text-xs text-slate-300 font-semibold flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#FFD907]" />
                  <span>Creativity • Character • Pioneering Leadership</span>
                </div>
              </div>

              {/* Mission Card */}
              <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white p-8 sm:p-10 rounded-2xl shadow-xl relative overflow-hidden flex flex-col justify-between border border-slate-700">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full pointer-events-none" />
                <div className="space-y-4 relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-cyan-400 text-[#001744] flex items-center justify-center font-bold">
                    <Target className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-cyan-300">Our Mission</h3>
                  <p className="text-slate-200 text-base leading-relaxed">
                    To prepare and equip students to successfully face the challenges of life in the 21st century, and at the same time evolve as responsible citizens of the nation by creating a child-friendly ambience to inquire, explore, and master essential life skills.
                  </p>
                </div>
                <div className="pt-6 border-t border-white/10 mt-6 text-xs text-slate-300 font-semibold flex items-center gap-2">
                  <Compass className="w-4 h-4 text-cyan-300" />
                  <span>21st Century Skills • Responsible Citizenship • Life Preparation</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. CORE PILLARS OF EXCELLENCE */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-extrabold tracking-wider uppercase text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
              Holistic Growth
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#001744] tracking-tight mt-3">
              How We Nurture Every Learner
            </h2>
            <p className="text-slate-500 text-sm mt-2">
              A balanced ecosystem spanning academic rigor, sportsmanship, creative expression, and moral character.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-7 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-5">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#001744] mb-2">Engaging Academics</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Structured around the CBSE curriculum with experiential learning, Atal Tinkering Labs, and modern Science Labs that awaken genuine curiosity.
              </p>
            </div>

            <div className="bg-white p-7 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-5">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#001744] mb-2">Life Skills & Ethics</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Emphasizing empathy, teamwork, civic duty, and resilience, equipping students with practical life skills to navigate modern challenges.
              </p>
            </div>

            <div className="bg-white p-7 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-5">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#001744] mb-2">Arts, Sports & Culture</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Comprehensive opportunities in music, dance, visual arts, yoga, athletics, and competitions like Saamskrithika Parva and sports meets.
              </p>
            </div>
          </div>
        </section>

        {/* 7. ADMISSIONS CALL TO ACTION */}
        <section className="bg-[#001744] text-white py-14 border-t-4 border-[#FFD907]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="max-w-2xl mx-auto space-y-4">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                Begin Your Child’s Journey at Kautilya
              </h2>
              <p className="text-slate-300 text-sm sm:text-base">
                Registrations for Academic Year 2027-28 are now open from Pre-KG to Grade 10. We invite you to experience our vibrant campus.
              </p>
              <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
                <button
                  onClick={() => setIsAdmissionModalOpen(true)}
                  className="bg-[#FFD907] hover:bg-yellow-400 text-[#001744] font-black px-7 py-3 rounded-xl shadow-lg transition-all text-sm"
                >
                  Apply for Admission 2027-28
                </button>
                <a
                  href="tel:9900038358"
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold px-6 py-3 rounded-xl border border-white/20 transition-all text-sm"
                >
                  <Phone className="w-4 h-4 text-[#38bdf8]" />
                  <span>Call 9900038358</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* 8. FOOTER & MODALS */}
      <Footer />
      <WhatsAppWidget />
      <AdmissionModal
        isOpen={isAdmissionModalOpen}
        onClose={() => setIsAdmissionModalOpen(false)}
      />
    </div>
  );
}
