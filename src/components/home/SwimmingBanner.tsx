"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ScrollRevealText } from "@/components/ui/MotionPrimitives";
import { CurveDivider } from "@/components/ui/ShapeDividers";

export default function SwimmingBanner() {
  const sectionRef = useRef<HTMLDivElement>(null);

  // Track scroll position through the section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // WordPress Jarallax-style smooth parallax translation (appears from down and glides up)
  const rawY = useTransform(scrollYProgress, [0, 1], [180, -120]);
  const smoothY = useSpring(rawY, { stiffness: 100, damping: 25, mass: 0.5 });
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.12, 1.05, 1.0]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-[520px] sm:min-h-[620px] lg:min-h-[700px] overflow-hidden bg-[#001744] flex flex-col justify-between"
    >
      {/* Full-width Parallax Boy Swimming Background Image (Smoothly appears from down) */}
      <motion.div
        style={{ y: smoothY, scale }}
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 z-0 h-[140%] -top-[20%] w-full"
      >
        <Image
          src="/images/kautilya-swimming-pool-student.jpg"
          alt="Kautilya Vidyalaya Swimming & Sports Potential"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Soft vignette gradient for premium contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/70 sm:from-transparent sm:via-black/30 sm:to-[#001744]/80" />
      </motion.div>

      {/* Content Container (WordPress layout: Empty left column, text on right column) */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 sm:px-10 lg:px-16 pt-28 sm:pt-40 pb-16 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Spacer so boy swimming in pool is visible */}
          <div className="hidden lg:block lg:col-span-5" />

          {/* Right Column: Sliding headline appearing from down */}
          <div className="lg:col-span-7 text-left">
            <ScrollRevealText
              text="Dive into courage. Swim towards your potential."
              as="h1"
              className="text-3xl sm:text-5xl lg:text-6xl font-black leading-tight drop-shadow-2xl"
              colorClass="text-white"
            />
          </div>
        </div>
      </div>

      {/* Clean White Strip Divider between sections */}
      <div className="relative z-20 w-full h-2 sm:h-2.5 bg-white mt-auto" />
    </section>
  );
}

