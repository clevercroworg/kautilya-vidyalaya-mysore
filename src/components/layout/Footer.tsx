"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  ChevronRight,
  ArrowUp,
  ShieldCheck,
} from "lucide-react";
import { contactInfo } from "@/data/siteData";

export default function Footer() {
  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="w-full bg-[#001744] text-white pt-14 pb-8 border-t-2 border-[#FFD907] font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* MAIN 4-COLUMN BALANCED GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-12 border-b border-white/10">
          {/* Column 1: School Identity & Address (lg:col-span-4) */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="inline-block">
              <div className="relative w-60 h-14 bg-white rounded-xl p-2 shadow-sm">
                <Image
                  src="/images/kautilya-vidyalaya-logo.webp"
                  alt="Kautilya Vidyalaya"
                  fill
                  className="object-contain p-1"
                />
              </div>
            </Link>

            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              Empowering young minds with value-grounded CBSE education, state-of-the-art laboratories, and holistic life skills in Mysuru.
            </p>

            {/* CBSE Affiliation Tag */}
            <div className="flex items-center gap-2 text-xs font-semibold text-yellow-400">
              <ShieldCheck className="w-4 h-4 shrink-0" />
              <span>Affiliated to CBSE, Delhi • Affiliation No: {contactInfo.affiliationNo}</span>
            </div>

            {/* Campus Address */}
            <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 pt-1">
              <MapPin className="w-4 h-4 text-[#FFD907] shrink-0 mt-0.5" />
              <p className="leading-relaxed">
                {contactInfo.address}
              </p>
            </div>

            {/* Clean Social Media Icons */}
            <div className="pt-2">
              <div className="flex items-center gap-2.5">
                {/* WhatsApp */}
                <a
                  href={contactInfo.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#25D366] text-slate-200 hover:text-white flex items-center justify-center transition-all duration-200"
                  aria-label="Chat on WhatsApp"
                  title="WhatsApp"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.39-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.32a8.188 8.188 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24M8.53 7.33c-.16 0-.35.06-.53.26-.18.2-.69.67-.69 1.64 0 .96.7 1.9 1.05 2.11.35.21 1.79 2.73 4.34 3.83.61.26 1.08.42 1.45.54.61.19 1.17.17 1.61.1.49-.07 1.51-.62 1.72-1.21.21-.6.21-1.11.15-1.22-.06-.1-.23-.17-.49-.29-.26-.13-1.51-.74-1.74-.83-.23-.08-.4-.13-.57.13-.17.25-.66.83-.81.99-.15.17-.3.19-.56.06-.26-.13-1.09-.4-2.07-1.28-.77-.68-1.29-1.52-1.44-1.78-.15-.26-.02-.39.11-.52.12-.11.26-.3.39-.45.13-.15.17-.25.26-.43.09-.17.04-.32-.02-.45s-.57-1.37-.78-1.88c-.21-.49-.42-.43-.58-.43z" />
                  </svg>
                </a>

                {/* Facebook */}
                <a
                  href={contactInfo.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#1877F2] text-slate-200 hover:text-white flex items-center justify-center transition-all duration-200"
                  aria-label="Facebook Page"
                  title="Facebook"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.196h3.312z" />
                  </svg>
                </a>

                {/* Instagram */}
                <a
                  href={contactInfo.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#E1306C] text-slate-200 hover:text-white flex items-center justify-center transition-all duration-200"
                  aria-label="Instagram Profile"
                  title="Instagram"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>

                {/* YouTube */}
                <a
                  href={contactInfo.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#FF0000] text-slate-200 hover:text-white flex items-center justify-center transition-all duration-200"
                  aria-label="YouTube Channel"
                  title="YouTube"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links (lg:col-span-2) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#FFD907]">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
              <li>
                <a
                  href="https://kautilya.schoolelement.in/auth/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-yellow-400 transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Online Payment</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              </li>
              <li>
                <Link href="/fee-structure" className="hover:text-yellow-400 transition-colors">
                  Fee Structure
                </Link>
              </li>
              <li>
                <a
                  href="mailto:enquiry@kautilyavidyalaya.edu.in?subject=Career%20Enquiry%20-%20Kautilya%20Vidyalaya"
                  className="hover:text-yellow-400 transition-colors"
                >
                  Career
                </a>
              </li>
              <li>
                <Link href="/faqs" className="hover:text-yellow-400 transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/brochure-download" className="hover:text-yellow-400 transition-colors">
                  Brochure Download
                </Link>
              </li>
              <li>
                <Link href="/parent-perspectives" className="hover:text-yellow-400 transition-colors">
                  Parent Perspectives
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Academics & Portals (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#FFD907]">
              Academics & Campus
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
              <li>
                <Link href="/what-it-means-at-kautilya" className="hover:text-yellow-400 transition-colors">
                  What It Means at Kautilya?
                </Link>
              </li>
              <li>
                <Link href="/other-facilities" className="hover:text-yellow-400 transition-colors">
                  Science, Atal & STEM Labs
                </Link>
              </li>
              <li>
                <Link href="/co-curricular-activities" className="hover:text-yellow-400 transition-colors">
                  Co-Curricular Activities
                </Link>
              </li>
              <li>
                <Link href="/sports-and-physical-education" className="hover:text-yellow-400 transition-colors">
                  Sports & Physical Education
                </Link>
              </li>
              <li>
                <Link href="/podcast" className="hover:text-yellow-400 transition-colors">
                  Kautilya Konnect Podcast
                </Link>
              </li>
              <li>
                <Link href="/mandatory-public-disclosure" className="hover:text-yellow-400 transition-colors">
                  Mandatory Public Disclosure
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Helpdesk (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#FFD907]">
              Contact Us
            </h4>

            <div className="space-y-2.5 text-xs sm:text-sm text-slate-300">
              {/* Telephone numbers with clean labels */}
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#FFD907] shrink-0" />
                  <a href="tel:+919900038358" className="hover:text-yellow-400 font-medium transition-colors">
                    +91 99000 38358
                  </a>
                  <span className="text-[11px] text-yellow-300 font-semibold">(Admissions)</span>
                </div>
                <div className="flex items-center gap-2 pl-5.5">
                  <a href="tel:+917090671299" className="hover:text-yellow-400 font-medium transition-colors">
                    +91 70906 71299
                  </a>
                  <span className="text-[11px] text-slate-400">(Admin)</span>
                </div>
                <div className="flex items-center gap-2 pl-5.5">
                  <a href="tel:08212460266" className="hover:text-yellow-400 font-medium transition-colors">
                    0821-2460266
                  </a>
                  <span className="text-[11px] text-slate-400">(Reception)</span>
                </div>
              </div>

              {/* Emails */}
              <div className="space-y-1 pt-1">
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-[#FFD907] shrink-0" />
                  <a
                    href="mailto:enquiry@kautilyavidyalaya.edu.in"
                    className="hover:text-yellow-400 transition-colors break-all text-xs"
                  >
                    enquiry@kautilyavidyalaya.edu.in
                  </a>
                </div>
                <div className="pl-5.5">
                  <a
                    href="mailto:admissions@kautilyavidyalaya.edu.in"
                    className="hover:text-yellow-400 transition-colors break-all text-xs"
                  >
                    admissions@kautilyavidyalaya.edu.in
                  </a>
                </div>
              </div>

              <div className="text-[11px] text-slate-400 pt-1">
                Visiting Hours: Mon – Fri (8:30 AM – 4:00 PM) | Sat (8:30 AM – 1:00 PM)
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM COPYRIGHT & UTILITY BAR */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-3">
          <p>
            Kautilya Vidyalaya © {new Date().getFullYear()} All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://kautilya.schoolelement.in/auth/login"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-200 transition-colors"
            >
              ERP Login
            </a>
            <span>•</span>
            <Link
              href="/mandatory-public-disclosure"
              className="hover:text-slate-200 transition-colors"
            >
              CBSE Affiliation
            </Link>
            <span>•</span>
            <Link
              href="/contact-us"
              className="hover:text-slate-200 transition-colors"
            >
              Campus Visit
            </Link>
            <span>•</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 hover:text-yellow-400 transition-colors cursor-pointer"
            >
              <span>Top</span>
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
