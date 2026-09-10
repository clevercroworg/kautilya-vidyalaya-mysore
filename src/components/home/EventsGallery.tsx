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
      image: "/images/events/kautilya-annual-sports-meet.webp",
      href: "https://kautilyavidyalaya.edu.in/portfolio-item/colors-day-celebrations/",
    },
    {
      title: "Science Display",
      image: "/images/events/kautilya-independence-day.webp",
      href: "https://kautilyavidyalaya.edu.in/portfolio-item/science-display/",
    },
    {
      title: "Educational Trip To Singapore",
      image: "/images/events/kautilya-investiture-ceremony.webp",
      href: "https://kautilyavidyalaya.edu.in/portfolio-item/educational-trip-to-singapore/",
    },
    {
      title: "Saamskrithika Parva 2023-24",
      image: "/images/events/kautilya-yoga-day.webp",
      href: "https://kautilyavidyalaya.edu.in/portfolio-item/saamskrithika-parva-2023-24/",
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
              <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col group border border-slate-100">
                <div
                  onClick={() => setSelectedImage(evt.image)}
                  className="relative w-full h-56 overflow-hidden bg-slate-900 cursor-pointer"
                >
                  <Image
                    src={evt.image}
                    alt={evt.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover group-hover:scale-108 transition-transform duration-500"
                  />
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <h6 className="font-bold text-slate-900 text-base group-hover:text-blue-900 transition-colors">
                    {evt.title}
                  </h6>
                  <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                    <span>Campus Event</span>
                    <Link
                      href={evt.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-[#001744] hover:underline"
                    >
                      View Details →
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
