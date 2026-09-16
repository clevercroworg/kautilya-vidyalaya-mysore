"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { WaveBottomDivider } from "@/components/ui/ShapeDividers";
import { motion } from "framer-motion";
import {
  ScrollRevealText,
  FadeUp,
} from "@/components/ui/MotionPrimitives";

export default function AcademicOverview() {
  const cards = [
    {
      title: "Balanced Schooling",
      desc: "Right balance – between academics, co-curricular and extracurricular activities.",
      image: "/images/kautilya-academic-pillars.jpg",
      href: "/what-it-means-at-kautilya",
    },
    {
      title: "Centre of Excellence",
      desc: "Building 21st century skills & developing independent minded students that are ready for the world.",
      image: "/images/kautilya-holistic-development.jpg",
      href: "/other-facilities",
    },
    {
      title: "Achievements",
      desc: "Wipro Earthian School Award & State Distinctions",
      image: "/images/kautilya-kindergarten-learning.jpg",
      href: "/awards-and-achievements",
    },
  ];

  return (
    <section
      className="relative pt-20 pb-0 overflow-hidden"
      style={{
        backgroundColor: "#f8f9fa",
        backgroundImage: "url('/images/kautilya-creative-pattern.webp')",
        backgroundRepeat: "repeat",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10 pb-16 sm:pb-24">
        {/* Animated Section Headings: words slide up from down */}
        <div className="text-center mb-14 sm:mb-20">
          <ScrollRevealText
            text="Kautilya Vidyalaya"
            as="h2"
            className="text-3xl sm:text-5xl font-extrabold mb-3"
            colorClass="text-[#001744]"
          />
          <ScrollRevealText
            text="Academic year 2027-28"
            as="h4"
            className="text-xl sm:text-2xl font-bold"
            colorClass="text-slate-700"
            delay={0.2}
          />
        </div>

        {/* Two-Column Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Column: Quote and Mission */}
          <FadeUp className="lg:col-span-6 space-y-6">
            <p className="text-lg sm:text-xl font-bold text-slate-900 leading-relaxed">
              Right education should help the student, not only to develop his capacities, but to understand his own highest interest. – Jiddu Krishnamurthy.
            </p>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              At Kautilya Vidyalaya, we believe that education is about more than simply delivering information; it is about creating a caring atmosphere in which children may flourish and grow into well-rounded individuals. As a CBSE affiliated school in Mysore, our objective is to provide a complete learning experience that goes beyond academics, establishing values and moulding character.
            </p>
            <div className="pt-2">
              <Link
                href="/about-us"
                className="inline-flex items-center gap-2 bg-[#001744] hover:bg-[#002b7a] text-white font-bold px-7 py-3.5 rounded-full text-sm shadow-md hover:shadow-xl transition-all group"
              >
                <span>Read More</span>
                <ArrowRight className="w-4 h-4 text-[#FFD907] transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </FadeUp>

          {/* Right Column: 3 Stacked Cards Appearing ONE BY ONE smoothly from bottom on scroll */}
          <div className="lg:col-span-6 space-y-5 [perspective:1200px]">
            {cards.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 80, rotateX: 18 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.85,
                  delay: index * 0.28,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="transform-gpu"
              >
                <Link
                  href={item.href}
                  className="bg-white rounded-xl p-5 sm:p-6 shadow-md hover:shadow-2xl transition-all duration-300 border border-slate-100 flex items-center gap-5 sm:gap-6 hover:-translate-y-1.5 group cursor-pointer block"
                >
                  {/* Circular image with subtle zoom */}
                  <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden shrink-0 border-2 border-slate-100 shadow-sm">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  {/* Card text */}
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h5 className="text-lg sm:text-xl font-bold text-[#001744] mb-1 group-hover:text-blue-600 transition-colors">
                        {item.title}
                      </h5>
                      <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-[#001744] group-hover:translate-x-1 transition-all" />
                    </div>
                    <p className="text-sm sm:text-base text-slate-600 leading-snug">
                      {item.desc}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Wave bottom divider from WordPress */}
      <WaveBottomDivider />
    </section>
  );
}
