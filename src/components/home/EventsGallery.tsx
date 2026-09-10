"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { X, ArrowRight } from "lucide-react";
import {
  ScrollRevealText,
  StaggerContainer,
  StaggerItem,
  FadeUp,
} from "@/components/ui/MotionPrimitives";

export default function EventsGallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const events = [
    {
      title: "Colors Day Celebrations",
      image: "/images/events/kautilya-colors-day-celebration.webp",
      href: "/events-gallery/colors-day-celebrations",
      category: "Campus Event",
    },
    {
      title: "Science Display",
      image: "/images/events/kautilya-annual-science-display.webp",
      href: "/events-gallery/science-display",
      category: "STEM & Science",
    },
    {
      title: "Educational Trip To Singapore",
      image: "/images/events/kautilya-singapore-educational-trip.webp",
      href: "/events-gallery/educational-trip-to-singapore",
      category: "Global Immersion",
    },
    {
      title: "Saamskrithika Parva 2023-24",
      image: "/images/events/kautilya-saamskrithika-parva.webp",
      href: "/events-gallery/saamskrithika-parva-2023-24",
      category: "Cultural Fest",
    },
  ];

  return (
    <section className="py-20 sm:py-32 bg-[#f8f9fa] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Centered Heading with Scroll Reveal animation */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <ScrollRevealText
            text="Events & Gallery"
            as="h2"
            className="text-4xl sm:text-6xl font-black mb-4"
            colorClass="text-[#001744]"
          />
          <FadeUp delay={0.25}>
            <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              A visual showcase of the joyful and enriching experiences at our school. Experience the vibrancy of spaces that host events, performances, and gatherings.
            </p>
          </FadeUp>
        </div>

        {/* 4 Cards Grid appearing ONE BY ONE */}
        <StaggerContainer
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          staggerDelay={0.14}
        >
          {events.map((evt) => (
            <StaggerItem key={evt.title} direction="up">
              <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between group border border-slate-100 h-full">
                <Link
                  href={evt.href}
                  className="relative w-full h-56 overflow-hidden bg-slate-900 cursor-pointer block"
                >
                  <Image
                    src={evt.image}
                    alt={evt.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover group-hover:scale-108 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <span className="text-white text-xs font-bold bg-[#001744]/80 px-2.5 py-1 rounded-full backdrop-blur-sm">
                      View Event Gallery
                    </span>
                  </div>
                </Link>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <Link href={evt.href}>
                    <h3 className="font-bold text-slate-900 text-base group-hover:text-[#001744] transition-colors line-clamp-2">
                      {evt.title}
                    </h3>
                  </Link>
                  <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                    <span className="font-semibold text-slate-400">{evt.category}</span>
                    <Link
                      href={evt.href}
                      className="font-extrabold text-[#001744] hover:text-blue-600 transition-colors flex items-center gap-1 group/link"
                    >
                      <span>View Details</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-4xl w-full aspect-[4/3] sm:aspect-[16/10] bg-black rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/60 hover:bg-white hover:text-black text-white transition-colors"
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>
            <Image
              src={selectedImage}
              alt="Gallery Preview"
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
}
