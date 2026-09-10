"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import {
  Phone,
  ChevronDown,
  ChevronRight,
  CreditCard,
  Sparkles,
  ExternalLink,
  GraduationCap,
  MessageCircle,
  BookOpen,
  X,
} from "lucide-react";
import { navigationData } from "@/data/siteData";

interface NavbarProps {
  onOpenAdmissionModal?: () => void;
}

const customEase = [0.22, 1, 0.36, 1] as const;

// Drawer animation spring transition
const drawerVariants: Variants = {
  hidden: { x: "100%" },
  visible: {
    x: 0,
    transition: {
      type: "spring",
      damping: 28,
      stiffness: 280,
      mass: 0.8,
    },
  },
  exit: {
    x: "100%",
    transition: {
      type: "spring",
      damping: 30,
      stiffness: 300,
      mass: 0.8,
    },
  },
};

const backdropVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.25, ease: "easeInOut" },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.2, ease: "easeInOut" },
  },
};

const navListVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.04,
      delayChildren: 0.08,
    },
  },
};

const navItemVariants: Variants = {
  hidden: { opacity: 0, x: 18 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.26,
      ease: customEase,
    },
  },
};

export default function Navbar({ onOpenAdmissionModal }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <header className="w-full sticky top-0 z-50 transition-all duration-300">
      {/* 1. TOP BAR (Left: Phone Numbers | Center: Admission Open with Book Icon | Right: Social Media & Online Payment) */}
      <div className="bg-[#001744] text-white text-xs py-2.5 px-4 sm:px-6 xl:px-8 border-b border-white/10">
        <div className="max-w-[1440px] mx-auto flex items-center justify-between gap-4">
          {/* Left Column: Phone Numbers (Flex-1 Left-Aligned) */}
          <div className="flex-1 flex items-center justify-start gap-3 sm:gap-6">
            {navigationData.topbar.phones.map((phone) => (
              <a
                key={phone}
                href={`tel:${phone}`}
                className="group flex items-center gap-1.5 sm:gap-2 font-bold text-white hover:text-[#38bdf8] transition-colors whitespace-nowrap"
              >
                <Phone className="w-3.5 h-3.5 text-white/90 group-hover:text-[#38bdf8] transition-colors" />
                <span className="text-xs sm:text-[13px]">{phone}</span>
              </a>
            ))}
          </div>

          {/* Center Column: Open Book + Admission Open 2026-27 (Flex-1 Dead-Center Aligned) */}
          <div className="hidden md:flex flex-1 items-center justify-center">
            <Link
              href="https://kautilya.schoolelement.in/enquiries"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 font-bold text-white hover:text-[#FFD907] transition-colors whitespace-nowrap text-xs sm:text-[13px]"
            >
              <BookOpen className="w-4 h-4 text-white/90 group-hover:text-[#FFD907] transition-colors" />
              <span>Admission Open 2026-27</span>
            </Link>
          </div>

          {/* Right Column: Follow us on + Facebook + YouTube + Instagram + Online Payment (Flex-1 Right-Aligned) */}
          <div className="flex-1 flex items-center justify-end gap-3 sm:gap-5 shrink-0">
            <div className="hidden sm:flex items-center gap-2.5">
              <span className="text-slate-300 font-medium text-[11px] sm:text-xs">Follow us on</span>
              <div className="flex items-center gap-2">
                <a
                  href="https://www.facebook.com/kautilyavidyalayamysore/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="text-white hover:text-[#38bdf8] transition-colors p-0.5"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a
                  href="https://www.youtube.com/@kautilya_vidyalaya_official"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="text-white hover:text-red-500 transition-colors p-0.5"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/kautilya_vidyalaya_official/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="text-white hover:text-pink-400 transition-colors p-0.5"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Online Payment Link */}
            <Link
              href={navigationData.topbar.paymentLink.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 font-bold text-[#38bdf8] hover:text-white transition-colors text-xs sm:text-[13px] whitespace-nowrap"
            >
              <CreditCard className="w-3.5 h-3.5 text-[#38bdf8] group-hover:text-white transition-colors" />
              <span>Online Payment</span>
            </Link>
          </div>
        </div>
      </div>

      {/* 2. MAIN NAVIGATION BAR */}
      <nav
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-md py-2.5"
            : "bg-white py-3 sm:py-3.5 shadow-sm"
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 xl:px-8 flex items-center justify-between gap-4">
          {/* School Brand Logo */}
          <Link href="/" className="flex items-center shrink-0">
            <div className="relative w-44 sm:w-52 h-9 sm:h-10 xl:h-11">
              <Image
                src="/images/kautilya-vidyalaya-logo.webp"
                alt="Kautilya Vidyalaya Logo"
                fill
                priority
                sizes="(max-width: 640px) 176px, 208px"
                className="object-contain object-left"
              />
            </div>
          </Link>

          {/* Desktop Menu: Hidden on screens < xl to prevent cramped 2-line wrapping */}
          <div className="hidden xl:flex items-center gap-1 2xl:gap-2 shrink-0">
            {navigationData.mainMenu.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.children && setActiveDropdown(item.label)}
                onMouseLeave={() => item.children && setActiveDropdown(null)}
              >
                {item.children ? (
                  <button
                    onClick={() => setActiveDropdown(activeDropdown === item.label ? null : item.label)}
                    className={`flex items-center gap-1 px-2.5 2xl:px-3 py-2 text-[13px] 2xl:text-sm font-bold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                      activeDropdown === item.label
                        ? "text-[#001744] bg-slate-100/80"
                        : "text-slate-700 hover:text-[#001744] hover:bg-slate-50"
                    }`}
                  >
                    <span>{item.label}</span>
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        activeDropdown === item.label
                          ? "rotate-180 text-[#001744]"
                          : "text-slate-400"
                      }`}
                    />
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className="block px-2.5 2xl:px-3 py-2 text-[13px] 2xl:text-sm font-bold text-slate-700 hover:text-[#001744] hover:bg-slate-50 rounded-lg transition-colors whitespace-nowrap"
                  >
                    {item.label}
                  </Link>
                )}

                {/* Desktop Dropdown with smooth AnimatePresence transition */}
                <AnimatePresence>
                  {item.children && activeDropdown === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 6, scale: 0.98 }}
                      transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
                      className="absolute top-full left-0 pt-1.5 z-50 pointer-events-auto"
                    >
                      <div className="w-64 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-slate-100/90 py-2 overflow-hidden ring-1 ring-black/5">
                        {item.children.map((subItem) => (
                          <Link
                            key={subItem.label}
                            href={subItem.href}
                            className="group flex items-center justify-between px-4 py-2.5 text-xs 2xl:text-sm text-slate-700 hover:text-[#001744] hover:bg-slate-50 font-semibold transition-all hover:pl-5"
                          >
                            <span>{subItem.label}</span>
                            <ChevronRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-[#001744] group-hover:translate-x-0.5 transition-all opacity-0 group-hover:opacity-100" />
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}

            {/* Desktop Admission Enquiry CTA */}
            <button
              onClick={onOpenAdmissionModal}
              className="ml-2 inline-flex items-center gap-2 bg-[#001744] hover:bg-[#002b7a] text-[#FFD907] font-extrabold px-4 py-2 rounded-full text-xs 2xl:text-sm shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 whitespace-nowrap"
            >
              <GraduationCap className="w-4 h-4" />
              <span>Enquire Now</span>
            </button>
          </div>

          {/* Tablet & Mobile Right Controls: Enquire Button + Animated Hamburger */}
          <div className="xl:hidden flex items-center gap-2.5">
            <button
              onClick={onOpenAdmissionModal}
              className="bg-[#001744] text-[#FFD907] font-black px-3.5 py-1.5 rounded-full text-xs shadow-sm hover:bg-[#002b7a] whitespace-nowrap flex items-center gap-1 transition-transform active:scale-95"
            >
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Enquire</span>
            </button>

            {/* Custom Animated Hamburger Button (Morphs to 'X' on toggle) */}
            <button
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="relative w-10 h-10 flex flex-col items-center justify-center rounded-xl bg-slate-50 hover:bg-slate-100 active:scale-95 border border-slate-200/90 transition-all focus:outline-none focus:ring-2 focus:ring-[#001744]/20 shadow-xs"
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileMenuOpen}
            >
              <div className="w-5 h-3.5 relative flex flex-col justify-between items-center pointer-events-none">
                <motion.span
                  animate={
                    mobileMenuOpen
                      ? { rotate: 45, y: 6 }
                      : { rotate: 0, y: 0 }
                  }
                  transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                  className="w-5 h-[2px] bg-[#001744] rounded-full origin-center block"
                />
                <motion.span
                  animate={
                    mobileMenuOpen
                      ? { opacity: 0, scaleX: 0 }
                      : { opacity: 1, scaleX: 1 }
                  }
                  transition={{ duration: 0.18, ease: "easeInOut" }}
                  className="w-5 h-[2px] bg-[#001744] rounded-full origin-center block"
                />
                <motion.span
                  animate={
                    mobileMenuOpen
                      ? { rotate: -45, y: -6 }
                      : { rotate: 0, y: 0 }
                  }
                  transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                  className="w-5 h-[2px] bg-[#001744] rounded-full origin-center block"
                />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* 3. SLIDE-OVER MOBILE DRAWER WITH FRAMER MOTION ANIMATION */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 xl:hidden">
            {/* Smooth Backdrop with Blur */}
            <motion.div
              variants={backdropVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Slide-over Drawer Panel */}
            <motion.div
              variants={drawerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed top-0 right-0 bottom-0 w-[86vw] max-w-sm bg-white shadow-2xl z-50 flex flex-col justify-between overflow-hidden border-l border-slate-100"
            >
              {/* Drawer Header */}
              <div className="p-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/70 shrink-0">
                <div className="relative w-36 h-8">
                  <Image
                    src="/images/kautilya-vidyalaya-logo.webp"
                    alt="Kautilya Vidyalaya Logo"
                    fill
                    className="object-contain object-left"
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-9 h-9 flex items-center justify-center text-slate-500 hover:text-[#001744] hover:bg-slate-200/60 rounded-full transition-colors border border-slate-200/60"
                  aria-label="Close menu"
                >
                  <X className="w-4 h-4" />
                </motion.button>
              </div>

              {/* Scrollable Navigation List with Stagger Animation */}
              <motion.div
                variants={navListVariants}
                initial="hidden"
                animate="visible"
                className="flex-1 overflow-y-auto px-4 py-3 divide-y divide-slate-100 space-y-1"
              >
                {navigationData.mainMenu.map((item) => (
                  <motion.div
                    key={item.label}
                    variants={navItemVariants}
                    className="pt-1.5 first:pt-0"
                  >
                    {item.children ? (
                      <div>
                        <button
                          onClick={() =>
                            setMobileExpanded(
                              mobileExpanded === item.label ? null : item.label
                            )
                          }
                          className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl transition-all duration-200 text-[13.5px] font-bold ${
                            mobileExpanded === item.label
                              ? "bg-slate-100 text-[#001744] shadow-xs"
                              : "text-slate-800 hover:text-[#001744] hover:bg-slate-50"
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            <span>{item.label}</span>
                            {mobileExpanded === item.label && (
                              <span className="w-1.5 h-1.5 rounded-full bg-[#001744]" />
                            )}
                          </div>
                          <motion.div
                            animate={{
                              rotate: mobileExpanded === item.label ? 180 : 0,
                            }}
                            transition={{
                              duration: 0.26,
                              ease: [0.22, 1, 0.36, 1],
                            }}
                          >
                            <ChevronDown
                              className={`w-4 h-4 transition-colors ${
                                mobileExpanded === item.label
                                  ? "text-[#001744]"
                                  : "text-slate-400"
                              }`}
                            />
                          </motion.div>
                        </button>

                        {/* Clean Smooth Dropdown Expanding with AnimatePresence */}
                        <AnimatePresence initial={false}>
                          {mobileExpanded === item.label && (
                            <motion.div
                              key="accordion-content"
                              initial={{ height: 0, opacity: 0 }}
                              animate={{
                                height: "auto",
                                opacity: 1,
                                transition: {
                                  height: {
                                    duration: 0.28,
                                    ease: [0.04, 0.62, 0.23, 0.98],
                                  },
                                  opacity: { duration: 0.2, delay: 0.05 },
                                },
                              }}
                              exit={{
                                height: 0,
                                opacity: 0,
                                transition: {
                                  height: {
                                    duration: 0.24,
                                    ease: [0.04, 0.62, 0.23, 0.98],
                                  },
                                  opacity: { duration: 0.15 },
                                },
                              }}
                              className="overflow-hidden"
                            >
                              <div className="pt-1 pb-1.5 px-0.5">
                                <div className="bg-slate-50/95 rounded-xl p-1.5 border border-slate-200/70 space-y-0.5 shadow-inner">
                                  {item.children.map((subItem, subIdx) => (
                                    <motion.div
                                      key={subItem.label}
                                      initial={{ opacity: 0, x: -6 }}
                                      animate={{ opacity: 1, x: 0 }}
                                      transition={{
                                        duration: 0.2,
                                        delay: subIdx * 0.025,
                                        ease: "easeOut",
                                      }}
                                    >
                                      <Link
                                        href={subItem.href}
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="group flex items-center justify-between px-3 py-2 rounded-lg text-xs font-semibold text-slate-600 hover:text-[#001744] hover:bg-white hover:shadow-xs transition-all active:scale-[0.99]"
                                      >
                                        <div className="flex items-center gap-2.5">
                                          <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-[#001744] group-hover:scale-125 transition-all duration-200" />
                                          <span>{subItem.label}</span>
                                        </div>
                                        <ChevronRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-[#001744] group-hover:translate-x-0.5 transition-all opacity-0 group-hover:opacity-100" />
                                      </Link>
                                    </motion.div>
                                  ))}
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex items-center justify-between px-3.5 py-2.5 rounded-xl text-[13.5px] font-bold text-slate-800 hover:text-[#001744] hover:bg-slate-50 transition-all active:scale-[0.99]"
                      >
                        <span>{item.label}</span>
                        <ChevronRight className="w-3.5 h-3.5 text-slate-300" />
                      </Link>
                    )}
                  </motion.div>
                ))}
              </motion.div>

              {/* Drawer Bottom Quick Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.15 }}
                className="p-4 border-t border-slate-100 bg-slate-50/90 space-y-2.5 shrink-0"
              >
                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenAdmissionModal?.();
                  }}
                  className="w-full flex items-center justify-center gap-2 bg-[#001744] text-[#FFD907] font-extrabold py-3 rounded-xl shadow-md hover:bg-[#002b7a] transition-colors text-xs"
                >
                  <GraduationCap className="w-4 h-4" />
                  <span>Admission Enquiry Form</span>
                </motion.button>

                <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.98 }}>
                  <Link
                    href="https://kautilya.schoolelement.in/enquiries"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-full flex items-center justify-center gap-2 bg-[#FFD907] text-[#001744] font-black py-2.5 rounded-xl shadow-sm hover:bg-[#ffe338] transition-colors text-xs"
                  >
                    <span>Online Registration 2026-27</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </Link>
                </motion.div>

                <div className="pt-2 flex items-center justify-between text-xs text-slate-500 border-t border-slate-200/80">
                  <a
                    href="tel:9900038358"
                    className="flex items-center gap-1.5 font-bold text-slate-700 hover:text-[#001744] transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#001744]" />
                    <span>9900038358</span>
                  </a>
                  <a
                    href="https://wa.me/+919900038358"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 font-bold text-emerald-600 hover:text-emerald-700 transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </motion.div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </header>
  );
}


