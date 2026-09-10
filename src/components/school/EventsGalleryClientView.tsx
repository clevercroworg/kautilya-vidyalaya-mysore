"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppWidget from "@/components/ui/WhatsAppWidget";
import AdmissionModal from "@/components/ui/AdmissionModal";
import InnerPageHero from "@/components/ui/InnerPageHero";
import eventsData from "@/data/eventsData.json";
import {
  Calendar,
  Sparkles,
  ChevronRight,
  Maximize2,
  X,
  Award,
  Tag,
  Rocket,
  Compass,
  GraduationCap,
} from "lucide-react";

interface EventItem {
  title: string;
  image: string;
  date: string;
  category: string;
}

const EVENT_TABS = [
  { id: "all", label: "All Events" },
  { id: "awards", label: "Flagship & Awards" },
  { id: "science", label: "STEM & Science" },
  { id: "trips", label: "Field Trips & Outbound" },
  { id: "cultural", label: "Cultural & Celebrations" },
];

export default function EventsGalleryClientView() {
  const [isAdmissionModalOpen, setIsAdmissionModalOpen] = useState(false);
  const [selectedTab, setSelectedTab] = useState("all");
  const [activeLightboxImage, setActiveLightboxImage] = useState<EventItem | null>(null);

  const filteredEvents = useMemo(() => {
    return (eventsData as EventItem[]).filter((ev) => {
      if (selectedTab === "all") return true;
      const t = ev.title.toLowerCase();
      if (selectedTab === "awards") {
        return t.includes("summit") || t.includes("honoured") || t.includes("award") || t.includes("dynamic");
      }
      if (selectedTab === "science") {
        return t.includes("olympiad") || t.includes("science") || t.includes("rocket");
      }
      if (selectedTab === "trips") {
        return t.includes("trip") || t.includes("singapore");
      }
      if (selectedTab === "cultural") {
        return (
          t.includes("colors") ||
          t.includes("parva") ||
          t.includes("krishnas") ||
          t.includes("independence") ||
          t.includes("investiture") ||
          t.includes("graduation") ||
          t.includes("samaaroh")
        );
      }
      return true;
    });
  }, [selectedTab]);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-800 selection:bg-[#FFD907] selection:text-[#001744]">
      <Navbar onOpenAdmissionModal={() => setIsAdmissionModalOpen(true)} />

      <main className="flex-grow">
        {/* HERO BANNER WITH AUTHENTIC BG & DYNAMIC WAVE */}
        <InnerPageHero
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Our School" },
            { label: "Events & Gallery" },
          ]}
          badge={{
            text: "Life at Kautilya Vidyalaya",
            icon: Sparkles,
          }}
          title="Celebrating Milestones, Innovation & Joy"
          subtitle="Take a visual journey through our dynamic academic milestones, science exhibitions, international learning journeys, and spirited cultural festivals."
          waveFillColor="#f8fafc"
        />

        {/* FLAGSHIP FEATURE: KARNATAKA EDUCATORS' SUMMIT AWARD */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 sm:-mt-8 relative z-20">
          <div className="bg-gradient-to-br from-[#001744] to-[#002b7a] text-white rounded-2xl shadow-xl overflow-hidden border-2 border-[#FFD907] p-6 sm:p-8 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-4 max-w-2xl">
              <div className="inline-flex items-center gap-2 bg-[#FFD907] text-[#001744] px-3 py-1 rounded-full text-xs font-black">
                <Award className="w-4 h-4" />
                <span>State Distinction • December 2025</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                Kautilya Vidyalaya Honoured as ‘The Dynamic School’
              </h2>
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                Presented at the Karnataka Educators’ Summit 2025 in recognition of our progressive curriculum, student-centered initiatives, and pioneering Atal & Space Labs.
              </p>
            </div>
            <div
              className="relative w-full lg:w-80 h-52 sm:h-60 rounded-xl overflow-hidden shadow-lg border-2 border-white/20 shrink-0 cursor-pointer group"
              onClick={() =>
                setActiveLightboxImage({
                  title: "Kautilya Vidyalaya Honoured as 'The Dynamic School' at Karnataka Educators’ Summit 2025",
                  image: "/images/events/kautilya-educators-summit-award.jpg",
                  date: "December 19, 2025",
                  category: "State Award",
                })
              }
            >
              <Image
                src="/images/events/kautilya-educators-summit-award.jpg"
                alt="Dynamic School Award 2025"
                fill
                sizes="(max-width: 1024px) 100vw, 320px"
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                <span className="bg-black/60 text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 backdrop-blur-sm">
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>Click to view</span>
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* CATEGORY TABS */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-6">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {EVENT_TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedTab(tab.id)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all whitespace-nowrap ${
                  selectedTab === tab.id
                    ? "bg-[#001744] text-[#FFD907] shadow-sm"
                    : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </section>

        {/* GALLERY GRID */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents.map((event, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group cursor-pointer"
                onClick={() => setActiveLightboxImage(event)}
              >
                {/* Event Photo */}
                <div className="relative h-56 w-full bg-slate-100 overflow-hidden">
                  <Image
                    src={event.image || "/images/kautilya-school-heritage-hero.jpg"}
                    alt={event.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-[#001744]/90 text-[#FFD907] text-[11px] font-bold px-3 py-1 rounded-full backdrop-blur-sm flex items-center gap-1.5 shadow">
                    <Calendar className="w-3 h-3" />
                    <span>{event.date}</span>
                  </div>
                  <div className="absolute bottom-3 right-3 bg-black/60 text-white p-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>

                {/* Event Details */}
                <div className="p-5 flex-grow flex flex-col justify-between">
                  <h3 className="text-base font-extrabold text-[#001744] group-hover:text-blue-600 transition-colors leading-snug line-clamp-2">
                    {event.title}
                  </h3>

                  <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-semibold">
                    <span className="flex items-center gap-1.5 text-blue-600 font-bold">
                      <Tag className="w-3.5 h-3.5" />
                      <span>{event.category}</span>
                    </span>
                    <span className="text-slate-400 group-hover:text-[#001744] transition-colors">
                      View full photo →
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* LIGHTBOX MODAL */}
      {activeLightboxImage && (
        <div
          className="fixed inset-0 z-50 bg-slate-900/90 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setActiveLightboxImage(null)}
        >
          <div
            className="bg-white rounded-2xl overflow-hidden max-w-3xl w-full shadow-2xl relative border border-white/20 animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-80 sm:h-[420px] w-full bg-black">
              <Image
                src={activeLightboxImage.image}
                alt={activeLightboxImage.title}
                fill
                className="object-contain"
              />
              <button
                onClick={() => setActiveLightboxImage(null)}
                className="absolute top-4 right-4 bg-black/60 hover:bg-black text-white p-2 rounded-full transition-colors"
                aria-label="Close image preview"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-5 sm:p-6 bg-white space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-blue-600">
                <Calendar className="w-3.5 h-3.5" />
                <span>{activeLightboxImage.date}</span>
                <span>•</span>
                <span>{activeLightboxImage.category}</span>
              </div>
              <h3 className="text-lg sm:text-xl font-extrabold text-[#001744]">
                {activeLightboxImage.title}
              </h3>
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
