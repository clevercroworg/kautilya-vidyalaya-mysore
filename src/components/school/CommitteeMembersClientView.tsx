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
  Users2,
  Award,
  ChevronRight,
  ShieldCheck,
  GraduationCap,
  Stethoscope,
  Cpu,
  Building,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

export default function CommitteeMembersClientView() {
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
            { label: "Committee Members" },
          ]}
          badge={{
            text: "Governance & Academic Council",
            icon: Users2,
          }}
          title="Institutional Leadership & Advisory Board"
          subtitle="Guided by experienced educationists, esteemed healthcare visionaries, and renowned engineers ensuring Kautilya Vidyalaya remains at the forefront of holistic schooling."
          waveFillColor="#f8fafc"
        />

        {/* SECTION 1: MANAGEMENT COMMITTEE */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="mb-10">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-7 bg-[#FFD907] rounded-full inline-block" />
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#001744]">
                Management Committee
              </h2>
            </div>
            <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-3xl">
              At Kautilya, we cultivate the next generation of lifelong learners who possess the knowledge, strength of character, creativity, and drive to impact the modern world.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
            {/* Mr. T. Babu */}
            <div className="bg-white rounded-2xl p-7 shadow-sm border border-slate-100 hover:shadow-md transition-shadow relative overflow-hidden flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 border-slate-200 shadow-md shrink-0 bg-slate-100">
                    <Image
                      src="/images/committee/t-babu.jpg"
                      alt="Mr. T. Babu - Chairman"
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-extrabold text-[#001744]">Mr. T. Babu</h3>
                    <p className="text-sm font-bold text-blue-600">Chairman</p>
                  </div>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Visionary founder providing strategic leadership, ensuring our educational mission remains grounded in service, ethical stewardship, and academic excellence.
                </p>
              </div>
              <div className="pt-5 border-t border-slate-100 mt-6 flex items-center gap-2 text-xs font-semibold text-slate-500">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Executive Head of Governance</span>
              </div>
            </div>

            {/* Ms. Neethu Babu */}
            <div className="bg-white rounded-2xl p-7 shadow-sm border border-slate-100 hover:shadow-md transition-shadow relative overflow-hidden flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 border-slate-200 shadow-md shrink-0 bg-slate-100">
                    <Image
                      src="/images/committee/neethu-babu.jpg"
                      alt="Ms. Neethu Babu - Trustee"
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-extrabold text-[#001744]">Ms. Neethu Babu</h3>
                    <p className="text-sm font-bold text-amber-700">Trustee</p>
                  </div>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Steering institutional development, curriculum enrichment, and student welfare initiatives to foster an inclusive, supportive learning atmosphere.
                </p>
              </div>
              <div className="pt-5 border-t border-slate-100 mt-6 flex items-center gap-2 text-xs font-semibold text-slate-500">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Board of Trustees</span>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: ACADEMIC ADVISORY COMMITTEE */}
        <section className="bg-white py-16 sm:py-20 border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-7 bg-blue-600 rounded-full inline-block" />
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#001744]">
                  Academic Advisory Committee
                </h2>
              </div>
              <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-3xl leading-relaxed">
                The backbone of an educational institution is its academic segment. Meticulous planning, continuous upgrading, and dedication are required to maintain high standards. Kautilya Group of Institutions is privileged to have eminent academic minds advising us to ensure parity with institutions of international renown.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Dr. Prakash M S */}
              <div className="bg-slate-50/70 rounded-2xl p-7 border border-slate-200/80 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="relative w-20 h-24 rounded-xl overflow-hidden border-2 border-slate-200 shadow-sm shrink-0 bg-slate-100">
                      <Image
                        src="/images/committee/prakash-ms.jpg"
                        alt="Dr. Prakash M S"
                        fill
                        className="object-cover object-top"
                      />
                    </div>
                    <span className="bg-blue-100/80 text-blue-800 text-[11px] font-extrabold px-2.5 py-1 rounded-full">
                      50+ Yrs Exp
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-extrabold text-[#001744]">Dr. Prakash M S</h3>
                    <p className="text-xs font-bold text-blue-600 mt-0.5">M.S., MBBS, DCH, M.D.</p>
                    <p className="text-xs text-slate-500 font-medium">Renowned Senior Pediatrician & Academician</p>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    Dr. Prakash forms the core of our advisory board. An alumnus of Mysuru University with over five decades of healthcare and educational leadership in Karnataka.
                  </p>

                  <div className="space-y-2 pt-2 border-t border-slate-200/60 text-xs text-slate-600">
                    <p className="font-bold text-[#001744]">Key Distinctions & Memberships:</p>
                    <ul className="space-y-1.5 pl-3 list-disc text-slate-600">
                      <li>Lifetime Member, IMA Academy of Specialities, New Delhi.</li>
                      <li>Indian Academy of Paediatrics (Mumbai & Karnataka).</li>
                      <li>Bengaluru Paediatrics Association.</li>
                      <li>Advisor at Oxford Medical College & Sridevi Institute of Medical Sciences.</li>
                      <li>Trustee of R V Educational Institution, Bengaluru & Chairman of R V Dental College.</li>
                    </ul>
                  </div>
                </div>

                <div className="pt-4 mt-6 border-t border-slate-200/60 flex items-center gap-2 text-xs font-semibold text-blue-800">
                  <CheckCircle2 className="w-4 h-4 text-blue-600" />
                  <span>Healthcare & Child Well-being Advisor</span>
                </div>
              </div>

              {/* Dr. K N Subramanya */}
              <div className="bg-slate-50/70 rounded-2xl p-7 border border-slate-200/80 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="relative w-20 h-24 rounded-xl overflow-hidden border-2 border-slate-200 shadow-sm shrink-0 bg-slate-100">
                      <Image
                        src="/images/committee/kn-subramanya.png"
                        alt="Dr. K. N. Subramanya"
                        fill
                        className="object-cover object-top"
                      />
                    </div>
                    <span className="bg-purple-100/80 text-purple-800 text-[11px] font-extrabold px-2.5 py-1 rounded-full">
                      Engineering & Research
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-extrabold text-[#001744]">Dr. K. N. Subramanya</h3>
                    <p className="text-xs font-bold text-purple-700 mt-0.5">Ph.D, M.Tech</p>
                    <p className="text-xs text-slate-500 font-medium">Principal & Professor, R V College of Engineering (RVCE)</p>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    With over two decades of engineering pedagogy and major funded research programs, Dr. Subramanya guides Kautilya’s STEM and technical curriculum frameworks.
                  </p>

                  <div className="space-y-2 pt-2 border-t border-slate-200/60 text-xs text-slate-600">
                    <p className="font-bold text-[#001744]">Honors & Recognition:</p>
                    <ul className="space-y-1.5 pl-3 list-disc text-slate-600">
                      <li>Citation Award from Vision Group on Science & Technology (Govt. of Karnataka), presented by Hon. Chief Minister & Bharat Ratna Prof. C N R Rao.</li>
                      <li>S R Gollapudi Award 2013 from Indian Institute of Industrial Engineering (IIIE).</li>
                      <li>Cognizant Best Researcher Award from ISTE - RVCE Chapter.</li>
                      <li>Performance Excellence Award by IIIE CEOs Conference (2016).</li>
                    </ul>
                  </div>
                </div>

                <div className="pt-4 mt-6 border-t border-slate-200/60 flex items-center gap-2 text-xs font-semibold text-purple-800">
                  <CheckCircle2 className="w-4 h-4 text-purple-600" />
                  <span>STEM, Research & Technology Advisor</span>
                </div>
              </div>

              {/* Dr. Naveen S */}
              <div className="bg-slate-50/70 rounded-2xl p-7 border border-slate-200/80 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="relative w-20 h-24 rounded-xl overflow-hidden border-2 border-slate-200 shadow-sm shrink-0 bg-slate-100">
                      <Image
                        src="/images/committee/naveen-s.jpg"
                        alt="Dr. Naveen S"
                        fill
                        className="object-cover object-top"
                      />
                    </div>
                    <span className="bg-emerald-100/80 text-emerald-800 text-[11px] font-extrabold px-2.5 py-1 rounded-full">
                      Medical Leadership
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-extrabold text-[#001744]">Dr. Naveen S</h3>
                    <p className="text-xs font-bold text-emerald-700 mt-0.5">MBBS, MS</p>
                    <p className="text-xs text-slate-500 font-medium">Principal, RajaRajeswari Medical College & Hospital</p>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    A distinguished surgeon and institutional administrator. Graduate of Dr. B R Ambedkar Medical College and Postgraduate from Mysore Medical College & Research Institute (MMC&RI).
                  </p>

                  <div className="space-y-2 pt-2 border-t border-slate-200/60 text-xs text-slate-600">
                    <p className="font-bold text-[#001744]">Professional Background:</p>
                    <ul className="space-y-1.5 pl-3 list-disc text-slate-600">
                      <li>Principal, RajaRajeswari Medical College and Hospital, Bengaluru.</li>
                      <li>Professor in General Surgery with extensive surgical and pedagogical expertise.</li>
                      <li>Champion for institutional excellence, medical training standards, and holistic student health.</li>
                    </ul>
                  </div>
                </div>

                <div className="pt-4 mt-6 border-t border-slate-200/60 flex items-center gap-2 text-xs font-semibold text-emerald-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Academic Standards & Health Advisor</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BOTTOM CALL TO ACTION */}
        <section className="bg-[#001744] text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white">Experience World-Class Guidance</h3>
              <p className="text-slate-300 text-xs sm:text-sm mt-1">Our advisory board ensures your child receives cutting-edge education rooted in strong moral values.</p>
            </div>
            <button
              onClick={() => setIsAdmissionModalOpen(true)}
              className="bg-[#FFD907] hover:bg-yellow-400 text-[#001744] font-black px-6 py-3 rounded-xl text-sm transition-colors whitespace-nowrap shadow"
            >
              Enquire for 2027-28
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
