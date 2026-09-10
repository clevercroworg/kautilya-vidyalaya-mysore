"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Mic, Play, X } from "lucide-react";
import { FadeUp } from "@/components/ui/MotionPrimitives";

export default function BestChoiceSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section
      className="py-20 sm:py-32 relative overflow-hidden"
      style={{
        backgroundColor: "#f8f9fa",
        backgroundImage: "url('/images/kautilya-creative-pattern.webp')",
        backgroundRepeat: "repeat",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Column: Podcast Badge & Interactive Highlighted Headline */}
          <div className="lg:col-span-6 space-y-6">
            <FadeUp delay={0.1}>
              <Link
                href="/podcast"
                className="inline-flex items-center gap-2.5 text-slate-800 hover:text-[#001744] transition-colors group"
              >
                <div className="w-9 h-9 rounded-full bg-[#FFD907] flex items-center justify-center text-[#001744] shadow-sm">
                  <Mic className="w-5 h-5" />
                </div>
                <span className="font-bold text-base group-hover:underline">
                  Podcast Episode Out Now!
                </span>
              </Link>
            </FadeUp>

            {/* Headline with Interactive Underline-to-Marker Highlight */}
            <FadeUp delay={0.18}>
              <h2 className="text-3xl sm:text-5xl font-black leading-tight text-[#001744] tracking-tight">
                <span>We are The </span>

                {/* Interactive Highlighted Phrase: expands from underline to full marker on hover */}
                <span className="group/bestchoice relative inline-flex items-center gap-1.5 cursor-pointer py-1">
                  {/* Word: Best */}
                  <span className="relative inline-block px-1.5 py-0.5">
                    {/* The marker: starts as 8px underline, expands to 95% marker on hover */}
                    <span
                      className="absolute inset-x-0 bottom-1.5 h-2 group-hover/bestchoice:h-[92%] bg-[#ff8c61] rounded-sm transition-all duration-300 ease-out"
                    />
                    <span className="relative z-10 text-[#001744]">
                      Best
                    </span>
                  </span>

                  {/* Word: Choice */}
                  <span className="relative inline-block px-1.5 py-0.5">
                    {/* The marker: starts as 8px underline, expands to 95% marker on hover with fluid stagger */}
                    <span
                      className="absolute inset-x-0 bottom-1.5 h-2 group-hover/bestchoice:h-[92%] bg-[#ff8c61] rounded-sm transition-all duration-300 ease-out delay-75"
                    />
                    <span className="relative z-10 text-[#001744]">
                      Choice
                    </span>
                  </span>
                </span>

                <span> For Your Child</span>
              </h2>
            </FadeUp>

            <FadeUp delay={0.3}>
              <p className="text-lg sm:text-xl text-slate-600 leading-relaxed">
                The school takes on the responsibility of continually nurturing its mentors; keeping them motivated, involved and enthusiastic about ongoing learning. The learning curve stays positive and buoyant.
              </p>
            </FadeUp>
          </div>

          {/* Right Column: 3D FLIPPED CARD Video Preview (WordPress pix-3d-down-in) */}
          <div className="lg:col-span-6 [perspective:1200px]">
            <motion.div
              initial={{
                opacity: 0,
                rotateX: 55,
                rotateY: -12,
                y: 80,
                scale: 0.88,
              }}
              whileInView={{
                opacity: 1,
                rotateX: 0,
                rotateY: 0,
                y: 0,
                scale: 1,
              }}
              whileHover={{
                scale: 1.03,
                rotateX: -4,
                rotateY: 6,
                transition: { duration: 0.3 },
              }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 1.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              style={{ transformStyle: "preserve-3d" }}
              className="relative rounded-3xl overflow-hidden shadow-2xl bg-slate-900 aspect-[16/10] sm:aspect-[16/9] group border border-slate-200 cursor-pointer"
              onClick={() => setIsPlaying(true)}
            >
              <Image
                src="/images/kautilya-classroom-session.png"
                alt="Why Kautilya Video Preview"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover opacity-90 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />

              {/* 100px Circular Play Button with subtle bounce */}
              <div className="absolute inset-0 m-auto w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white text-[#001744] flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                <Play className="w-8 h-8 sm:w-10 sm:h-10 fill-current ml-1" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {isPlaying && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setIsPlaying(false)}
        >
          <div
            className="relative max-w-4xl w-full aspect-[16/9] bg-black rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsPlaying(false)}
              className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/60 hover:bg-white hover:text-black text-white transition-colors"
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>
            <iframe
              src="https://www.youtube.com/embed/W_mRJid7N28?autoplay=1"
              title="We are The Best Choice For Your Child"
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  );
}

