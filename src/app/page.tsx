"use client";

import React, { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import MarqueeTicker from "@/components/home/MarqueeTicker";
import HeroVideo from "@/components/home/HeroVideo";
import AcademicOverview from "@/components/home/AcademicOverview";
import HappyParentsSection from "@/components/home/HappyParentsSection";
import SwimmingBanner from "@/components/home/SwimmingBanner";
import FacilitiesSection from "@/components/home/FacilitiesSection";
import DynamicSchoolSection from "@/components/home/DynamicSchoolSection";
import EventsGallery from "@/components/home/EventsGallery";
import SchoolBannerImage from "@/components/home/SchoolBannerImage";
import VirtualTour from "@/components/home/VirtualTour";
import BestChoiceSection from "@/components/home/BestChoiceSection";
import ParentTestimonialsSection from "@/components/home/ParentTestimonialsSection";
import AdmissionOpenBanner from "@/components/home/AdmissionOpenBanner";
import GetInTouchSection from "@/components/home/GetInTouchSection";
import AlumniSpeakSection from "@/components/home/AlumniSpeakSection";
import GuestTestimonialsSection from "@/components/home/GuestTestimonialsSection";
import Footer from "@/components/layout/Footer";
import WhatsAppWidget from "@/components/ui/WhatsAppWidget";
import AdmissionModal from "@/components/ui/AdmissionModal";

export default function Home() {
  const [isAdmissionModalOpen, setIsAdmissionModalOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Header & Navigation */}
      <Navbar onOpenAdmissionModal={() => setIsAdmissionModalOpen(true)} />

      <main className="flex-1">
        {/* 2. Hero Cinematic Video Ad (Fixed full-width responsive showcase) */}
        <HeroVideo />

        {/* 3. Marquee Admissions Alert Ticker */}
        <MarqueeTicker />

        {/* 4. Academic Overview: 2-column layout with 3 stacked circular cards & wave divider */}
        <AcademicOverview />

        {/* 5. Happy Parents, Confident Futures: 2-column video section with 120px play button */}
        <HappyParentsSection />

        {/* 6. Boy Swimming Section: Smooth parallax scroll reveal from down & curve divider */}
        <SwimmingBanner />

        {/* 7. Our Facilities: 6 navy cards appearing one by one with scroll reveal title */}
        <FacilitiesSection />

        {/* 8. The Dynamic School 2025 Summit Award: 2-column layout with actual ceremony photo */}
        <DynamicSchoolSection />

        {/* 9. Events & Gallery: 4 cards appearing one by one with lightbox */}
        <EventsGallery />

        {/* Full-width Campus Banner Image (/images/kautilya-school-banner.png) */}
        <SchoolBannerImage />

        {/* 10. Virtual Tour: 360 Campus Explorer with scroll reveal */}
        <VirtualTour />

        {/* 11. Podcast & Best Choice: 2-column with 100px play button */}
        <BestChoiceSection />

        {/* 12. Parent Testimonials Slider */}
        <ParentTestimonialsSection />

        {/* 13. Admission OPEN Banner with reception background */}
        <AdmissionOpenBanner onOpenModal={() => setIsAdmissionModalOpen(true)} />

        {/* 14. Get in Touch: Contact form + Google Maps embed */}
        <GetInTouchSection />

        {/* 15. Alumni Speak: Navy background with slider */}
        <AlumniSpeakSection />

        {/* 16. Guest Testimonials: Light gray background with slider */}
        <GuestTestimonialsSection />
      </main>

      {/* 17. Comprehensive Footer */}
      <Footer />

      {/* 18. Floating WhatsApp Chat Widget */}
      <WhatsAppWidget />

      {/* 19. Interactive Admission Enquiry Modal */}
      <AdmissionModal
        isOpen={isAdmissionModalOpen}
        onClose={() => setIsAdmissionModalOpen(false)}
      />
    </div>
  );
}
