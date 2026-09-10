"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppWidget from "@/components/ui/WhatsAppWidget";
import AdmissionModal from "@/components/ui/AdmissionModal";
import InnerPageHero from "@/components/ui/InnerPageHero";
import { eventsDetailData, EventDetail } from "@/data/eventsDetailData";
import {
  Calendar,
  Sparkles,
  ChevronRight,
  Maximize2,
  X,
  Award,
  Tag,
  ArrowRight,
  Images,
  MapPin,
} from "lucide-react";

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
  const [activeLightboxImage, setActiveLightboxImage] = useState<{
    title: string;
    image: string;
    date: string;
    category: string;
    slug?: string;
  } | null>(null);

  const filteredEvents = useMemo(() => {
    return eventsDetailData.filter((ev) => {
      if (selectedTab === "all") return true;
      const cat = ev.category.toLowerCase();
      const title = ev.title.toLowerCase();
      if (selectedTab === "awards") {
        return (
          cat.includes("award") ||
          cat.includes("distinction") ||
          title.includes("summit") ||
          title.includes("honoured") ||
          title.includes("dynamic")
        );
      }
      if (selectedTab === "science") {
        return (
          cat.includes("stem") ||
          cat.includes("science") ||
          title.includes("olympiad") ||
          title.includes("rocket")
        );
      }
      if (selectedTab === "trips") {
        return (
          cat.includes("trip") ||
          cat.includes("immersion") ||
          title.includes("singapore") ||
          title.includes("field")
        );
      }
      if (selectedTab === "cultural") {
        return (
          cat.includes("cultural") ||
          cat.includes("kindergarten") ||
          cat.includes("sports") ||
          cat.includes("ceremony") ||
          title.includes("parva") ||
          title.includes("colors") ||
          title.includes("krishna") ||
          title.includes("independence") ||
          title.includes("investiture") ||
          title.includes("graduation") ||
          title.includes("samaaroh")
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
              <div className="pt-2">
                <Link
                  href="/events-gallery/dynamic-school-award-2025"
                  className="inline-flex items-center gap-2 bg-[#FFD907] text-[#001744] hover:bg-yellow-400 px-5 py-2.5 rounded-xl font-black text-xs sm:text-sm transition-all hover:scale-105 shadow-md"
                >
                  <span>Explore Award Story & Gallery</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
            <div
              className="relative w-full lg:w-80 h-52 sm:h-60 rounded-xl overflow-hidden shadow-lg border-2 border-white/20 shrink-0 cursor-pointer group"
              onClick={() =>
                setActiveLightboxImage({
                  title: "Kautilya Vidyalaya Honoured as 'The Dynamic School' at Karnataka Educators’ Summit 2025",
                  image: "/images/events/kautilya-educators-summit-award.jpg",
                  date: "December 19, 2025",
                  category: "State Award",
                  slug: "dynamic-school-award-2025",
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
                  <span>Quick Preview</span>
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((event) => (
              <div
                key={event.slug}
                className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group"
              >
                {/* Event Photo with Link */}
                <div className="relative h-60 w-full bg-slate-100 overflow-hidden">
                  <Link href={`/events-gallery/${event.slug}`} className="block h-full w-full">
                    <Image
                      src={event.coverImage || "/images/kautilya-school-heritage-hero.jpg"}
                      alt={event.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </Link>

                  {/* Date Badge */}
                  <div className="absolute top-3 left-3 bg-[#001744]/90 text-[#FFD907] text-[11px] font-bold px-3 py-1 rounded-full backdrop-blur-sm flex items-center gap-1.5 shadow">
                    <Calendar className="w-3 h-3" />
                    <span>{event.date}</span>
                  </div>

                  {/* Photo Count Badge */}
                  <div className="absolute top-3 right-3 bg-black/70 text-white text-[11px] font-bold px-2.5 py-1 rounded-full backdrop-blur-sm flex items-center gap-1 shadow">
                    <Images className="w-3 h-3 text-[#FFD907]" />
                    <span>{event.gallery.length} Photos</span>
                  </div>

                  {/* Quick Preview Button */}
                  <button
                    onClick={() =>
                      setActiveLightboxImage({
                        title: event.title,
                        image: event.coverImage,
                        date: event.date,
                        category: event.category,
                        slug: event.slug,
                      })
                    }
                    className="absolute bottom-3 right-3 bg-black/60 hover:bg-black/80 text-white p-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm cursor-pointer"
                    aria-label={`Preview ${event.title}`}
                    title="Quick Preview"
                  >
                    <Maximize2 className="w-4 h-4" />
                  </button>
                </div>

                {/* Event Details */}
                <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-bold text-blue-600 mb-2">
                      <Tag className="w-3 h-3" />
                      <span>{event.category}</span>
                    </div>

                    <Link href={`/events-gallery/${event.slug}`}>
                      <h3 className="text-lg font-black text-[#001744] group-hover:text-blue-600 transition-colors leading-snug line-clamp-2">
                        {event.title}
                      </h3>
                    </Link>

                    <p className="mt-2 text-slate-600 text-xs sm:text-sm line-clamp-2 leading-relaxed">
                      {event.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs text-slate-400 font-medium flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-slate-400 shrink-0" />
                      <span className="truncate max-w-[130px]">{event.location}</span>
                    </span>

                    <Link
                      href={`/events-gallery/${event.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-black text-[#001744] hover:text-blue-600 transition-colors group/link"
                    >
                      <span>View Event Gallery</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
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
            <div className="relative h-80 sm:h-[440px] w-full bg-black">
              <Image
                src={activeLightboxImage.image}
                alt={activeLightboxImage.title}
                fill
                className="object-contain"
              />
              <button
                onClick={() => setActiveLightboxImage(null)}
                className="absolute top-4 right-4 bg-black/60 hover:bg-black text-white p-2 rounded-full transition-colors cursor-pointer"
                aria-label="Close image preview"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-5 sm:p-6 bg-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-xs font-bold text-blue-600">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{activeLightboxImage.date}</span>
                  <span>•</span>
                  <span>{activeLightboxImage.category}</span>
                </div>
                <h3 className="text-base sm:text-lg font-black text-[#001744]">
                  {activeLightboxImage.title}
                </h3>
              </div>

              {activeLightboxImage.slug && (
                <Link
                  href={`/events-gallery/${activeLightboxImage.slug}`}
                  className="shrink-0 inline-flex items-center gap-1.5 bg-[#001744] hover:bg-blue-900 text-[#FFD907] px-4 py-2 rounded-xl text-xs font-black transition-colors"
                >
                  <span>Open Full Event</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              )}
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
