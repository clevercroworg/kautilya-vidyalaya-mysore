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
  Quote,
  CheckCircle2,
  ChevronRight,
  ShieldCheck,
  Building2,
  GraduationCap,
  Globe2,
  Users2,
  Sparkles,
} from "lucide-react";

export default function ChairmansDeskClientView() {
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
            { label: "Chairman’s Desk" },
          ]}
          badge={{
            text: "Leadership & Governance • Kautilya Vidyalaya",
            icon: Building2,
          }}
          title="Service as the Heart of Education"
          subtitle="“Education is not solely about acquiring knowledge, but about instilling an enduring sense of responsibility towards the betterment of society.”"
          waveFillColor="#f8fafc"
        />

        {/* MAIN EXECUTIVE MESSAGE */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Col: Chairman Profile Card */}
            <div className="lg:col-span-4 lg:sticky lg:top-24">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100 p-6 text-center">
                <div className="relative w-48 h-56 sm:w-56 sm:h-64 mx-auto rounded-2xl overflow-hidden shadow-md mb-5 border-4 border-slate-50">
                  <Image
                    src="/images/kautilya-chairman-t-babu.jpg"
                    alt="Mr. T Babu - Chairman, Kautilya Vidyalaya"
                    fill
                    sizes="(max-width: 768px) 224px, 256px"
                    className="object-cover object-top"
                    priority
                  />
                </div>
                <h2 className="text-2xl font-extrabold text-[#001744]">Mr. T. Babu</h2>
                <p className="text-sm font-bold text-blue-600 mt-1">Chairman</p>
                <p className="text-xs text-slate-500 mt-1">Kautilya Group of Institutions, Mysuru</p>

                <div className="mt-6 pt-6 border-t border-slate-100 space-y-3 text-left">
                  <div className="flex items-center gap-3 text-xs text-slate-600">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Founder & Institutional Visionary</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-slate-600">
                    <HeartHandshake className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Advocate for Community Service & Ethics</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-slate-600">
                    <GraduationCap className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Dedicated to Value-Based CBSE Education</span>
                  </div>
                </div>

                <div className="mt-6 pt-4">
                  <button
                    onClick={() => setIsAdmissionModalOpen(true)}
                    className="w-full bg-[#001744] hover:bg-[#002b7a] text-[#FFD907] font-bold py-2.5 px-4 rounded-xl text-xs transition-colors shadow"
                  >
                    Admission Enquiries 2027-28
                  </button>
                </div>
              </div>
            </div>

            {/* Right Col: Official Signed Letter */}
            <div className="lg:col-span-8 space-y-8">
              <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 sm:p-12 relative">
                <Quote className="w-16 h-16 text-slate-100 absolute top-6 right-6 pointer-events-none" />

                <div className="relative z-10 space-y-6 text-slate-700 leading-relaxed text-base sm:text-lg">
                  <p className="font-bold text-[#001744] text-lg sm:text-xl">
                    Dear Community Members, Parents, and Students,
                  </p>

                  <p>
                    I am honored to address all of you as the Chairman of Kautilya Vidyalaya, an institution that is deeply committed to the idea of service. Our school believes that education is not solely about acquiring academic knowledge, but also about instilling a sense of responsibility towards the betterment of society.
                  </p>

                  <div className="bg-blue-50/70 border-l-4 border-[#001744] p-5 rounded-r-xl my-6">
                    <p className="text-[#001744] font-semibold italic text-base sm:text-lg">
                      “Service lies at the very heart of our school’s ethos. We strongly believe that each one of us has a duty to contribute positively to the community we live in.”
                    </p>
                  </div>

                  <p>
                    Our vision of service extends beyond the walls of our classrooms. We encourage our students to actively engage with the community and develop an understanding of the challenges and needs that exist around them. By involving our students in various community service projects, we aim to cultivate a spirit of altruism and ignite a lifelong commitment to service.
                  </p>

                  <p>
                    At Kautilya Vidyalaya, we provide ample opportunities for our students to engage in meaningful service activities. Whether it is participating in environmental conservation projects, volunteering at local NGOs, or organizing fundraisers for charitable causes, our students actively contribute their time, energy, and talents towards making a positive impact.
                  </p>

                  <p>
                    We also believe that service is not limited to a particular age group or stage in life. As parents and community members, you play a crucial role in shaping the values and character of our students. We encourage you to join hands with us in fostering a culture of service within our school community. Together, we can inspire our students to become responsible citizens who actively seek out opportunities to serve and uplift others.
                  </p>

                  <p>
                    Service through the school is not just a one-time activity or a mere checkbox on the academic journey. It is a lifelong commitment to making a difference in the lives of others. We aspire to nurture compassionate leaders who will go on to create a positive impact in their chosen fields, be it healthcare, education, social work, or any other profession.
                  </p>

                  <p>
                    I invite each one of you to embrace the spirit of service and join us in our endeavor to create a better and more inclusive society. Together, let us work towards a brighter future where service becomes a way of life for our students, empowering them to make a meaningful difference in the world.
                  </p>

                  <p>
                    Thank you for your continued support and belief in our mission of service.
                  </p>

                  {/* Formal Sign-off */}
                  <div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div>
                      <p className="text-sm text-slate-500 font-semibold">Warm regards,</p>
                      <h4 className="text-xl font-black text-[#001744] mt-1">Mr. T. Babu</h4>
                      <p className="text-xs font-bold text-slate-600">Chairman, Kautilya Vidyalaya</p>
                    </div>
                    <div className="text-xs text-slate-400">
                      Mysuru, Karnataka
                    </div>
                  </div>
                </div>
              </div>

              {/* 4 Pillars of Chairman's Vision */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 font-bold">
                    1
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-[#001744]">Ethical Altruism</h4>
                    <p className="text-xs text-slate-500 mt-1">Instilling moral consciousness where giving back is a daily natural instinct.</p>
                  </div>
                </div>

                <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 font-bold">
                    2
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-[#001744]">Hands-on Outreach</h4>
                    <p className="text-xs text-slate-500 mt-1">Direct student participation in environmental protection, cleanliness drives, and local charity.</p>
                  </div>
                </div>

                <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 font-bold">
                    3
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-[#001744]">Parental Partnership</h4>
                    <p className="text-xs text-slate-500 mt-1">Aligning home and school values to create an empathetic, supportive learning environment.</p>
                  </div>
                </div>

                <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center shrink-0 font-bold">
                    4
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-[#001744]">Lifelong Leadership</h4>
                    <p className="text-xs text-slate-500 mt-1">Shaping graduates who bring honesty and compassion to every professional path.</p>
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
