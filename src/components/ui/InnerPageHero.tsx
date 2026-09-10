"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, LucideIcon } from "lucide-react";
import DynamicWaveDivider from "@/components/ui/DynamicWaveDivider";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface InnerPageHeroProps {
  breadcrumbs: BreadcrumbItem[];
  badge?: {
    text: string;
    icon?: LucideIcon;
  };
  title: string;
  subtitle?: string;
  bgImage?: string;
  waveFillColor?: string;
  className?: string;
  children?: React.ReactNode;
}

export default function InnerPageHero({
  breadcrumbs,
  badge,
  title,
  subtitle,
  bgImage = "/images/bg/kautilya-campus-header-bg.jpg",
  waveFillColor = "#f8fafc",
  className = "",
  children,
}: InnerPageHeroProps) {
  const BadgeIcon = badge?.icon;

  return (
    <section
      className={`relative bg-[#001744] text-white pt-12 sm:pt-16 lg:pt-20 overflow-hidden ${className}`}
    >
      {/* Authentic Background Image with Rich Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src={bgImage}
          alt={`${title} - Kautilya Vidyalaya Mysore`}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-30 mix-blend-luminosity"
        />
        {/* Navy Gradient Overlay matching official theme */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#001744]/80 via-[#001744]/75 to-[#001744]" />
        {/* Subtle Tech Dot Matrix */}
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:20px_20px]" />
      </div>

      {/* Hero Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pb-6 sm:pb-8">
        {/* Breadcrumbs */}
        <motion.nav
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex items-center flex-wrap gap-1.5 sm:gap-2 text-xs text-slate-300 mb-4 font-semibold"
          aria-label="Breadcrumb"
        >
          {breadcrumbs.map((item, idx) => {
            const isLast = idx === breadcrumbs.length - 1;
            return (
              <React.Fragment key={idx}>
                {item.href && !isLast ? (
                  <Link
                    href={item.href}
                    className="hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span
                    className={
                      isLast
                        ? "text-[#FFD907] font-bold"
                        : "text-slate-300"
                    }
                  >
                    {item.label}
                  </span>
                )}
                {!isLast && (
                  <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                )}
              </React.Fragment>
            );
          })}
        </motion.nav>

        {/* Heading & Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-3xl space-y-3.5"
        >
          {badge && (
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-cyan-300 text-xs font-semibold backdrop-blur-sm border border-white/10 shadow-sm">
              {BadgeIcon && <BadgeIcon className="w-3.5 h-3.5 text-[#FFD907]" />}
              <span>{badge.text}</span>
            </div>
          )}

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            {title}
          </h1>

          {subtitle && (
            <p className="text-slate-200 text-sm sm:text-base lg:text-lg leading-relaxed font-normal max-w-2xl">
              {subtitle}
            </p>
          )}

          {children}
        </motion.div>
      </div>

      {/* Official Dynamic Animated Wave Divider */}
      <DynamicWaveDivider fillColor={waveFillColor} className="relative z-10" />
    </section>
  );
}
