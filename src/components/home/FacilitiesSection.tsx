"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import {
  ScrollRevealText,
  StaggerContainer,
  StaggerItem,
  FadeUp,
} from "@/components/ui/MotionPrimitives";

export default function FacilitiesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  // Track scroll position through the section for background zoom-out
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Background smoothly zooms out on scroll (scale 1.28 down to 1.0)
  const rawScale = useTransform(scrollYProgress, [0, 1], [1.28, 1.0]);
  const smoothScale = useSpring(rawScale, {
    stiffness: 100,
    damping: 25,
    mass: 0.5,
  });

  const facilityItems = [
    {
      name: "Physics Lab",
      image: "/images/facilities/kautilya-science-labs.webp",
    },
    {
      name: "Atal Tinkering",
      image: "/images/facilities/kautilya-atal-tinkering-lab.webp",
    },
    {
      name: "Chemistry Lab",
      image: "/images/facilities/kautilya-smart-classrooms.webp",
    },
    {
      name: "Library",
      image: "/images/kautilya-sports-excellence.jpg",
    },
    {
      name: "Biology Lab",
      image: "/images/facilities/kautilya-digital-library.webp",
    },
    {
      name: "Computer Lab",
      image: "/images/kautilya-auditorium-hall.jpg",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-20 sm:py-32 bg-[#001744] text-white relative overflow-hidden"
    >
      {/* Campus Reception Background Image - Zooms out smoothly on scroll */}
      <motion.div
        style={{ scale: smoothScale }}
        className="absolute inset-0 z-0 pointer-events-none"
      >
        <Image
          src="/images/kautilya-campus-building.jpg"
          alt="Kautilya Vidyalaya Campus Reception Background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Consistent blue overlay for clear visibility and sharp text contrast */}
        <div className="absolute inset-0 bg-[#001744]/60" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Centered Heading with Scroll Reveal animation from down */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <ScrollRevealText
            text="Our Facilities"
            as="h2"
            className="text-4xl sm:text-6xl font-black mb-4"
            colorClass="text-white"
          />
          <FadeUp delay={0.25}>
            <p className="text-slate-300 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
              State-of-the-Art Classrooms – Spacious, well-ventilated classrooms designed to create a focused and engaging learning environment.
            </p>
          </FadeUp>
        </div>

        {/* 6-Card Grid: Without borders, sharp edges, appearing ONE BY ONE from down */}
        <StaggerContainer
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          staggerDelay={0.12}
        >
          {facilityItems.map((item) => (
            <StaggerItem key={item.name} direction="up">
              {/* Unified sharp-cornered card with NO border and title solidly inside bottom of card */}
              <div className="group flex flex-col bg-[#001744] rounded-none shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden">
                {/* Image: Unobstructed square photo */}
                <div className="relative w-full aspect-square overflow-hidden bg-[#001744]">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover rounded-none group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Solid Card Footer Bar: Name INSIDE card container, completely opaque */}
                <div className="bg-[#001744] px-4 py-3 sm:py-3.5 text-left">
                  <h3 className="text-lg sm:text-xl font-medium text-white tracking-wide group-hover:text-[#FFD907] transition-colors">
                    {item.name}
                  </h3>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

