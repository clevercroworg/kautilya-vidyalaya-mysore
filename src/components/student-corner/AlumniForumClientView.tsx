"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppWidget from "@/components/ui/WhatsAppWidget";
import AdmissionModal from "@/components/ui/AdmissionModal";
import InnerPageHero from "@/components/ui/InnerPageHero";
import {
  ChevronLeft,
  ChevronRight,
  GraduationCap,
  Users2,
  Briefcase,
  HeartHandshake,
  Calendar,
  Send,
  CheckCircle2,
  Quote,
  Sparkles,
  MapPin,
  Mail,
  Phone,
  UserPlus,
  Loader2,
  Star,
} from "lucide-react";

interface AlumniProfile {
  name: string;
  role: string;
  batch: string;
  badge?: string;
  image: string;
  quote: string;
}

const NOTABLE_ALUMNI: AlumniProfile[] = [
  {
    name: "Dr. Rohan M V",
    role: "MBBS (MIMS Mandya) • MD Radiology",
    batch: "5 Years at Kautilya Vidyalaya",
    badge: "Doctor / MD Radiology",
    image: "/images/alumni/dr-rohan-m-v-headshot.jpeg",
    quote:
      "My five years at Kautilya Vidyalaya were truly amazing and filled with valuable learning experiences. The school helped me become independent, creative, confident, and good at sports, shaping me into a well-rounded individual. The skills and values I learned at Kautilya played an important role in helping me secure a government seat for MBBS. Today, I am proud to be a doctor, serving people and making a difference in their lives. I will always be grateful to Kautilya Vidyalaya for giving me the strong foundation that helped shape my journey.",
  },
  {
    name: "Dr. Rohit M V",
    role: "MBBS (CIMS Chamarajanagar) • MD Radiology, Vydehi IMS",
    batch: "5 Years at Kautilya Vidyalaya",
    badge: "Doctor / MD Radiology",
    image: "/images/alumni/dr-rohit-m-v-headshot.jpeg",
    quote:
      "My journey at Kautilya Vidyalaya has been one of the most memorable and enriching experiences of my life. The school gave me much more than academics—it helped me discover my strengths, build confidence, think independently, and develop the courage to take on new challenges. The encouragement from my teachers and the opportunities provided by the school helped me grow both personally and academically. Kautilya taught me the importance of discipline, hard work, creativity, and staying true to my goals. I am proud to be a Kautilya alumnus, and I will always cherish the values and experiences that have shaped the person I am today.",
  },
  {
    name: "Siri Bhim Rao Patil",
    role: "MBBS at AIMS, Bellur • CBSE Class X School Topper",
    batch: "Grade 9 & 10 Alumna (2022-23 Batch)",
    badge: "MBBS Scholar & CBSE Topper",
    image: "/images/alumni/siri-bhim-rao-patil.jpeg",
    quote:
      "I studied at Kautilya Vidyalaya for my ninth and tenth grades, and those two years were truly memorable and enriching. The school not only focused on strengthening our academic foundation but also provided numerous opportunities to explore our interests, discover our strengths, and showcase our talents through a wide range of co-curricular activities. What made my experience even more special was the constant support and encouragement from the teachers. I am currently pursuing my MBBS at AIMS, Bellur, and I look back at my time at Kautilya with immense gratitude.",
  },
  {
    name: "Dr. Manish V",
    role: "MBBS, Medical Practitioner",
    batch: "Grade 3 to 7 Alumnus",
    badge: "Doctor / Healthcare",
    image: "/images/alumni/alumni-ananya-sharma.jpeg",
    quote:
      "From third to seventh grade, I had the privilege of studying at Kautilya Vidyalaya, and those years remain some of the most unforgettable of my life. The nurturing environment and dedicated teachers profoundly shaped my character and education. The excitement of annual sports days and the deep sense of belonging played a pivotal role in shaping who I am today.",
  },
  {
    name: "Tanushree R",
    role: "3rd Year Computer Science, SJCE Mysuru",
    batch: "Engineering Scholar",
    badge: "Tech & Engineering",
    image: "/images/alumni/alumni-rohan-kulkarni.jpeg",
    quote:
      "I am Tanushree R, currently in my 3rd year of Engineering in Computer Science at SJCE, Mysuru. I am forever grateful for the teachers and environment at Kautilya that encouraged technical inquiry, curiosity, and leadership throughout my formative years.",
  },
  {
    name: "Dr. Spoorthi Rao",
    role: "Doctor & Medical Professional",
    batch: "2015 Passed Out Batch (Joined 8th Std)",
    badge: "Doctor / Healthcare",
    image: "/images/alumni/alumni-sneha-hegde.jpeg",
    quote:
      "As a 2015 pass-out student who joined Kautilya Vidyalaya in the 8th standard, I look back on my school years as the cornerstone of my academic journey. The values, work ethic, and discipline instilled here continue to guide my professional medical career.",
  },
];

function AlumniSpotlightCard({ alumnus }: { alumnus: AlumniProfile }) {
  return (
    <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full">
      <div className="space-y-4">
        {/* Photo & Identity Header */}
        <div className="flex items-start gap-4">
          <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden bg-slate-100 border-2 border-[#FFD907] shrink-0 shadow-md">
            <Image
              src={alumnus.image}
              alt={alumnus.name}
              fill
              sizes="96px"
              className="object-cover object-top"
            />
          </div>
          <div className="min-w-0 flex-1">
            {alumnus.badge && (
              <span className="inline-block text-[10px] font-extrabold uppercase tracking-wider text-blue-700 bg-blue-50 px-2 py-0.5 rounded-md border border-blue-100 mb-1">
                {alumnus.badge}
              </span>
            )}
            <h3 className="text-base sm:text-lg font-black text-[#001744] leading-snug">
              {alumnus.name}
            </h3>
            <p className="text-xs font-bold text-blue-700 mt-0.5 leading-tight">
              {alumnus.role}
            </p>
            <span className="text-[11px] font-medium text-slate-400 block mt-1">
              {alumnus.batch}
            </span>
            <div className="flex items-center gap-0.5 text-amber-400 mt-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-current" />
              ))}
            </div>
          </div>
        </div>

        {/* Quote */}
        <div className="relative pt-2">
          <Quote className="w-6 h-6 text-slate-200 absolute -top-1 -left-1 pointer-events-none" />
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed italic relative z-10 pl-2">
            “{alumnus.quote}”
          </p>
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-emerald-700">
        <div className="flex items-center gap-1.5">
          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
          <span>Verified Kautilya Alumnus</span>
        </div>
        <span className="text-[11px] text-slate-400 font-normal">
          Alumni Voice
        </span>
      </div>
    </div>
  );
}

const ALUMNI_PILLARS = [
  {
    icon: HeartHandshake,
    title: "Senior Student Mentorship",
    desc: "Share your university insights, entrance exam strategies, and career lessons with current Grades 9–12 students.",
  },
  {
    icon: Calendar,
    title: "Annual Homecoming Reunions",
    desc: "Reconnect with cherished batchmates, beloved teachers, and relive campus memories during our annual homecoming gatherings.",
  },
  {
    icon: Briefcase,
    title: "Global Professional Network",
    desc: "Network with fellow Kautilyans working across medicine, engineering, civil services, design, and entrepreneurship globally.",
  },
];

export default function AlumniForumClientView() {
  const [isAdmissionModalOpen, setIsAdmissionModalOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Carousel State
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [carouselDirection, setCarouselDirection] = useState(1);
  const [isCarouselPaused, setIsCarouselPaused] = useState(false);
  const touchStartXRef = React.useRef<number | null>(null);

  const prevAlumni = () => {
    setCarouselDirection(-1);
    setCarouselIndex((c) => (c === 0 ? NOTABLE_ALUMNI.length - 1 : c - 1));
  };

  const nextAlumni = () => {
    setCarouselDirection(1);
    setCarouselIndex((c) => (c === NOTABLE_ALUMNI.length - 1 ? 0 : c + 1));
  };

  const goToAlumni = (idx: number) => {
    setCarouselDirection(idx > carouselIndex ? 1 : -1);
    setCarouselIndex(idx);
  };

  // Smooth auto-scroll every 4.5 seconds
  useEffect(() => {
    if (isCarouselPaused) return;
    const interval = setInterval(() => {
      setCarouselDirection(1);
      setCarouselIndex((c) => (c === NOTABLE_ALUMNI.length - 1 ? 0 : c + 1));
    }, 4500);
    return () => clearInterval(interval);
  }, [isCarouselPaused]);

  // Touch Swipe Handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartXRef.current === null) return;
    const diff = touchStartXRef.current - e.changedTouches[0].clientX;
    if (diff > 45) {
      nextAlumni();
    } else if (diff < -45) {
      prevAlumni();
    }
    touchStartXRef.current = null;
  };

  // Form State
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    passingYear: "",
    degree: "",
    profession: "",
    city: "",
    memories: "",
    referral1Name: "",
    referral1Contact: "",
    referral2Name: "",
    referral2Contact: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          name: formData.fullName,
          message: formData.memories,
          source: "Alumni Registration Form",
        }),
      });

      if (res.ok) {
        setIsSubmitted(true);
      } else {
        const data = await res.json().catch(() => null);
        setErrorMessage(
          data?.error || "Failed to submit registration. Please try again."
        );
      }
    } catch {
      setErrorMessage("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const primaryAlumnus = NOTABLE_ALUMNI[carouselIndex];
  const secondaryAlumnus =
    NOTABLE_ALUMNI[(carouselIndex + 1) % NOTABLE_ALUMNI.length];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-800 selection:bg-[#FFD907] selection:text-[#001744]">
      <Navbar onOpenAdmissionModal={() => setIsAdmissionModalOpen(true)} />

      <main className="flex-grow">
        {/* HERO SECTION WITH AUTHENTIC BG & DYNAMIC WAVE */}
        <InnerPageHero
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Student Corner" },
            { label: "Alumni Forum" },
          ]}
          badge={{
            text: "Once a Kautilyan, Always a Kautilyan",
            icon: Users2,
          }}
          title="Alumni Forum"
          subtitle="Bridging generations of Kautilyans across medicine, engineering, civil services, arts, and global entrepreneurship. Reconnect, mentor, and inspire."
          waveFillColor="#f8fafc"
        />

        {/* NOTABLE ALUMNI SPOTLIGHTS WITH SMOOTH CAROUSEL */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-8 sm:mb-12 gap-6">
            <div className="max-w-2xl">
              <span className="text-xs font-extrabold tracking-wider uppercase text-blue-700 bg-blue-50 px-3.5 py-1 rounded-full border border-blue-100">
                Alumni Spotlights • All 6 Inspiring Journeys
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#001744] tracking-tight mt-3">
                Voices of Accomplished Kautilyans
              </h2>
              <p className="text-slate-500 text-sm mt-2">
                From medical practitioners and engineering innovators to academic leaders, our alumni make a mark across diverse industries worldwide.
              </p>
            </div>

            {/* Navigation buttons */}
            <div className="flex items-center gap-3 shrink-0 self-start md:self-end">
              <button
                type="button"
                onClick={prevAlumni}
                aria-label="Previous alumni story"
                className="w-11 h-11 rounded-full bg-white hover:bg-[#001744] text-slate-700 hover:text-white border border-slate-200 shadow-sm hover:shadow-md flex items-center justify-center transition-all duration-200 active:scale-95 cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <div className="text-xs font-bold text-slate-400 px-1">
                <span className="text-[#001744]">{carouselIndex + 1}</span> / {NOTABLE_ALUMNI.length}
              </div>
              <button
                type="button"
                onClick={nextAlumni}
                aria-label="Next alumni story"
                className="w-11 h-11 rounded-full bg-white hover:bg-[#001744] text-slate-700 hover:text-white border border-slate-200 shadow-sm hover:shadow-md flex items-center justify-center transition-all duration-200 active:scale-95 cursor-pointer"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Smooth Sliding Carousel */}
          <div
            className="relative"
            onMouseEnter={() => setIsCarouselPaused(true)}
            onMouseLeave={() => setIsCarouselPaused(false)}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div className="overflow-hidden py-2">
              <AnimatePresence mode="wait" custom={carouselDirection}>
                <motion.div
                  key={carouselIndex}
                  custom={carouselDirection}
                  variants={{
                    enter: (dir: number) => ({
                      opacity: 0,
                      x: dir > 0 ? 40 : -40,
                    }),
                    center: {
                      opacity: 1,
                      x: 0,
                      transition: {
                        duration: 0.45,
                        ease: [0.25, 1, 0.5, 1],
                      },
                    },
                    exit: (dir: number) => ({
                      opacity: 0,
                      x: dir > 0 ? -40 : 40,
                      transition: {
                        duration: 0.35,
                        ease: [0.25, 1, 0.5, 1],
                      },
                    }),
                  }}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch"
                >
                  <div className="w-full">
                    <AlumniSpotlightCard alumnus={primaryAlumnus} />
                  </div>
                  <div className="w-full hidden md:block">
                    <AlumniSpotlightCard alumnus={secondaryAlumnus} />
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Pagination Indicators */}
            <div className="flex items-center justify-center gap-2 mt-8">
              {NOTABLE_ALUMNI.map((alumnus, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => goToAlumni(idx)}
                  aria-label={`Go to alumni story ${idx + 1}: ${alumnus.name}`}
                  className={`transition-all duration-300 rounded-full h-2.5 cursor-pointer ${
                    idx === carouselIndex
                      ? "w-8 bg-[#001744]"
                      : "w-2.5 bg-slate-300 hover:bg-slate-400"
                  }`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* INTERACTIVE ALUMNI REGISTRATION FORM */}
        <section id="register" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20">
          <div className="bg-white rounded-3xl shadow-xl border border-slate-200/90 p-8 sm:p-12">
            <div className="text-center max-w-xl mx-auto mb-10 space-y-2">
              <span className="text-xs font-extrabold tracking-wider uppercase text-blue-700 bg-blue-50 px-3.5 py-1 rounded-full border border-blue-100">
                Register Your Profile
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#001744] tracking-tight">
                Join the Kautilya Alumni Roster
              </h2>
              <p className="text-slate-500 text-xs sm:text-sm">
                Keep in touch with your alma mater, share updates, and receive invitations to alumni gatherings and guest lectures.
              </p>
            </div>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-emerald-50 border-2 border-emerald-500 rounded-2xl p-8 text-center space-y-4"
              >
                <div className="w-14 h-14 bg-emerald-500 text-white rounded-full flex items-center justify-center mx-auto shadow-lg">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-emerald-950">
                  Welcome Home, Kautilyan!
                </h3>
                <p className="text-xs sm:text-sm text-emerald-800 max-w-md mx-auto leading-relaxed">
                  Thank you for registering, <strong>{formData.fullName}</strong>. Your details have been successfully recorded in the official alumni registry. Our alumni relations desk will stay in touch.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="bg-[#001744] text-[#FFD907] font-bold text-xs px-6 py-2.5 rounded-xl hover:bg-[#002b7a] transition-all"
                >
                  Submit Another Profile
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      placeholder="e.g. Dr. Manish V"
                      value={formData.fullName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-slate-50"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="your.email@domain.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-slate-50"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="e.g. +91 98765 43210"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-slate-50"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700">
                      Year of Passing / Batch *
                    </label>
                    <select
                      name="passingYear"
                      required
                      value={formData.passingYear}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-slate-50"
                    >
                      <option value="">Select Passing Year</option>
                      {Array.from({ length: 22 }, (_, i) => 2025 - i).map((yr) => (
                        <option key={yr} value={yr}>
                          Class of {yr}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700">
                      Higher Education / Degree
                    </label>
                    <input
                      type="text"
                      name="degree"
                      placeholder="e.g. B.Tech / MBBS / B.Com / MBA"
                      value={formData.degree}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-slate-50"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700">
                      Current Profession / Organisation
                    </label>
                    <input
                      type="text"
                      name="profession"
                      placeholder="e.g. Software Engineer at Infosys"
                      value={formData.profession}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-slate-50"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700">
                    Current City &amp; Country
                  </label>
                  <input
                    type="text"
                    name="city"
                    placeholder="e.g. Mysuru, India / Bengaluru / London, UK"
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-slate-50"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700">
                    Fondest Memory / Message for Kautilya
                  </label>
                  <textarea
                    name="memories"
                    rows={3}
                    placeholder="Share a favorite memory of teachers, assemblies, sports days, or how Kautilya shaped you..."
                    value={formData.memories}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-slate-50"
                  />
                </div>

                {/* Referral Section */}
                <div className="pt-4 border-t border-slate-200 space-y-3">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-700">
                    <UserPlus className="w-4 h-4 text-blue-600" />
                    <span>Know Any Fellow Alumni? (Optional)</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="referral1Name"
                      placeholder="Alumnus 1 Name"
                      value={formData.referral1Name}
                      onChange={handleChange}
                      className="px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none bg-slate-50"
                    />
                    <input
                      type="text"
                      name="referral1Contact"
                      placeholder="Alumnus 1 Email or Phone"
                      value={formData.referral1Contact}
                      onChange={handleChange}
                      className="px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none bg-slate-50"
                    />
                  </div>
                </div>

                {/* Error Banner */}
                {errorMessage && (
                  <div className="p-3 bg-rose-50 border border-rose-200 text-rose-700 text-xs rounded-xl font-semibold">
                    {errorMessage}
                  </div>
                )}

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#001744] hover:bg-[#002b7a] disabled:bg-slate-400 text-[#FFD907] font-black text-sm uppercase tracking-wider py-4 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 group cursor-pointer disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-[#FFD907]" />
                        <span>Submitting Profile...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        <span>Submit Alumni Registration</span>
                      </>
                    )}
                  </button>
                  <p className="text-[11px] text-slate-400 text-center mt-2">
                    Your contact details will only be used by the official Kautilya Alumni Association.
                  </p>
                </div>
              </form>
            )}
          </div>
        </section>

        {/* ALUMNI NETWORK PILLARS */}
        <section className="bg-white py-14 sm:py-16 border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {ALUMNI_PILLARS.map((pillar, idx) => {
                const IconComponent = pillar.icon;
                return (
                  <motion.div
                    key={pillar.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#001744] text-[#FFD907] flex items-center justify-center shadow-md">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-black text-[#001744]">
                      {pillar.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* BOTTOM ADMISSIONS CTA */}
        <section className="bg-[#001744] text-white py-14 border-t-4 border-[#FFD907]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Join a Legacy of Lifelong Excellence
            </h3>
            <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto">
              Admissions open for 2027-28. Enroll your child in a community that stays with them throughout their life.
            </p>
            <button
              onClick={() => setIsAdmissionModalOpen(true)}
              className="bg-[#FFD907] hover:bg-yellow-400 text-[#001744] font-black px-7 py-3 rounded-xl text-sm transition-all shadow-lg inline-flex items-center gap-2"
            >
              <GraduationCap className="w-4 h-4" />
              <span>Apply for Admission</span>
            </button>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppWidget />
      <AdmissionModal
        isOpen={isAdmissionModalOpen}
        onClose={() => setIsAdmissionModalOpen(false)}
      />
    </div>
  );
}
