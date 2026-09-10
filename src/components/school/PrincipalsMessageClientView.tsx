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
  Quote,
  ChevronRight,
  ShieldCheck,
  GraduationCap,
  Sparkles,
  Rocket,
  Award,
  BookOpen,
  FlaskConical,
  Trophy,
} from "lucide-react";

export default function PrincipalsMessageClientView() {
  const [isAdmissionModalOpen, setIsAdmissionModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-800 selection:bg-[#FFD907] selection:text-[#001744]">
      <Navbar onOpenAdmissionModal={() => setIsAdmissionModalOpen(true)} />

      <main className="flex-grow">
        {/* HERO BANNER WITH AUTHENTIC BG & DYNAMIC WAVE */}
        <InnerPageHero
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Our School" },
            { label: "Director & Principal Message" },
          ]}
          badge={{
            text: "Academic Leadership • Kautilya Vidyalaya",
            icon: GraduationCap,
          }}
          title="Inspiring Curiosity, Shaping Lives"
          subtitle="“We strive to create a world-class educational environment that prepares students not only for examinations, but for life.”"
          waveFillColor="#f8fafc"
        />

        {/* MAIN MESSAGE & PROFILE */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Col: Principal Profile Card */}
            <div className="lg:col-span-4 lg:sticky lg:top-24">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100 p-6 text-center">
                <div className="relative w-48 h-56 sm:w-56 sm:h-64 mx-auto rounded-2xl overflow-hidden shadow-md mb-5 border-4 border-slate-50">
                  <Image
                    src="/images/kautilya-principal-jayashree.jpg"
                    alt="Dr. S. Jayashree Muralidhar - Director & Principal"
                    fill
                    sizes="(max-width: 768px) 224px, 256px"
                    className="object-cover object-top"
                    priority
                  />
                </div>
                <h2 className="text-2xl font-extrabold text-[#001744]">Dr. S. Jayashree Muralidhar</h2>
                <p className="text-sm font-bold text-blue-600 mt-1">Director & Principal</p>
                <p className="text-xs text-slate-500 mt-1">Kautilya Vidyalaya, Mysuru</p>

                <div className="mt-6 pt-6 border-t border-slate-100 space-y-3 text-left">
                  <div className="flex items-center gap-3 text-xs text-slate-600">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Educational Leadership & Innovation</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-slate-600">
                    <FlaskConical className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Pioneered Atal & Space Labs on Campus</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-slate-600">
                    <Award className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Karnataka Dynamic School Awardee</span>
                  </div>
                </div>

                <div className="mt-6 pt-4">
                  <button
                    onClick={() => setIsAdmissionModalOpen(true)}
                    className="w-full bg-[#001744] hover:bg-[#002b7a] text-[#FFD907] font-bold py-2.5 px-4 rounded-xl text-xs transition-colors shadow"
                  >
                    Schedule a Campus Visit
                  </button>
                </div>
              </div>
            </div>

            {/* Right Col: Letter Content */}
            <div className="lg:col-span-8 space-y-8">
              <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 sm:p-12 relative">
                <Quote className="w-16 h-16 text-slate-100 absolute top-6 right-6 pointer-events-none" />

                <div className="relative z-10 space-y-6 text-slate-700 leading-relaxed text-base sm:text-lg">
                  <p className="font-bold text-[#001744] text-lg sm:text-xl">
                    Welcome to Kautilya Vidyalaya,
                  </p>

                  <p>
                    Kautilya Vidyalaya welcomes you to a vibrant world of learning and discovery! Nestled in Mysore, our school is a beacon of academic excellence and creativity, dedicated to nurturing the leaders of tomorrow.
                  </p>

                  <p>
                    I feel proud to lead this educational institution dedicated to transforming lives through a comprehensive learning experience. Step inside our lively halls where curiosity reigns and every classroom buzzes with innovative ideas! From our state-of-the-art science labs to our inspiring Atal and space labs, each space is designed to ignite passions and foster critical thinking.
                  </p>

                  <div className="bg-blue-50/70 border-l-4 border-[#001744] p-5 rounded-r-xl my-6">
                    <p className="text-[#001744] font-semibold italic text-base sm:text-lg">
                      “Our vision emphasizes developing essential skills and fostering a passion for lifelong learning in every student, preparing them to thrive and make positive contributions in a rapidly changing world.”
                    </p>
                  </div>

                  <p>
                    Our mission is to prepare students not only for examinations but also for life, empowering them to become thoughtful individuals ready to make meaningful contributions to their communities and global society. At Kautilya Vidyalaya, we strive to create a world-class educational environment that nurtures responsible, confident, and compassionate individuals. We aim to cultivate future leaders who uphold the values of knowledge, integrity, and service.
                  </p>

                  <p>
                    In addition to a strong academic foundation, our school is a vibrant hub for co-curricular activities that promote creativity, critical thinking, teamwork, and self-expression.
                  </p>

                  <p>
                    Join us for dynamic extracurricular programs that go beyond the classroom! Whether it is the exhilarating chants of sports tournaments, the harmony of our music and dance performances, or the intellectual rigor of science quizzes, essay contests, and debates—all are carefully designed to unlock every child’s potential.
                  </p>

                  <p>
                    We are committed to fostering a safe, inclusive, and supportive environment that enables every student to thrive. Our dedicated faculty members guide each learner with care, understanding, and enthusiasm.
                  </p>

                  <p>
                    We encourage you to explore Kautilya Vidyalaya, where each day is an opportunity to learn, grow, and thrive. Together, let us shape a brighter, more promising future for your children.
                  </p>

                  {/* Sign-off */}
                  <div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div>
                      <p className="text-sm text-slate-500 font-semibold">With warm regards and best wishes,</p>
                      <h4 className="text-xl font-black text-[#001744] mt-1">Dr. S. Jayashree Muralidhar</h4>
                      <p className="text-xs font-bold text-slate-600">Director and Principal</p>
                      <p className="text-xs text-slate-500">Kautilya Vidyalaya, Mysuru</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 4 Pillars of the School Experience */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-indigo-50 text-indigo-700 flex items-center justify-center shrink-0">
                    <Rocket className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-[#001744]">Atal & Space Labs</h4>
                    <p className="text-xs text-slate-500 mt-1">Pioneering hands-on STEM robotics, coding, rocketry, and scientific experimentation.</p>
                  </div>
                </div>

                <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
                    <Trophy className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-[#001744]">Holistic Co-Curriculars</h4>
                    <p className="text-xs text-slate-500 mt-1">Science Olympiads, debates, performing arts, sports leagues, and public speaking.</p>
                  </div>
                </div>

                <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center shrink-0">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-[#001744]">Education for Life</h4>
                    <p className="text-xs text-slate-500 mt-1">Preparing independent thinkers grounded in ethics, critical judgment, and character.</p>
                  </div>
                </div>

                <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center shrink-0">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-[#001744]">Inclusive Nurture</h4>
                    <p className="text-xs text-slate-500 mt-1">Personalized attention where every child feels valued, respected, and encouraged to excel.</p>
                  </div>
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
