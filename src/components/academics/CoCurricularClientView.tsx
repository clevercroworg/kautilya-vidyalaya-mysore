"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppWidget from "@/components/ui/WhatsAppWidget";
import AdmissionModal from "@/components/ui/AdmissionModal";
import InnerPageHero from "@/components/ui/InnerPageHero";
import {
  ChevronRight,
  CheckCircle2,
  Maximize2,
  X,
  Sparkles,
  GraduationCap,
  Activity,
  Compass,
  Waves,
  Trophy,
  Shield,
  Zap,
  Music,
  Brain,
  Palette,
  Drama,
  Bot,
  Layers,
} from "lucide-react";

interface Discipline {
  id: string;
  name: string;
  category: "sports" | "performing" | "creative" | "stem";
  categoryLabel: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  tags: string[];
  gradient: string;
  borderAccent: string;
  image: string;
}

const DISCIPLINES: Discipline[] = [
  {
    id: "yoga",
    name: "Yoga & Mindfulness",
    category: "sports",
    categoryLabel: "Sports & Fitness",
    description:
      "Structured daily asana practices, pranayama breathing, and guided meditation fostering emotional composure, spinal posture, and lifelong flexibility.",
    icon: Activity,
    tags: ["Asana Practice", "Pranayama", "Mental Balance"],
    gradient: "from-amber-500/10 via-orange-500/5 to-transparent",
    borderAccent: "border-amber-200 group-hover:border-amber-400",
    image: "/images/activities/kautilya-activity-yoga.jpg",
  },
  {
    id: "scouts",
    name: "Scouts & Guides",
    category: "sports",
    categoryLabel: "Leadership & Outdoor",
    description:
      "Affiliated Bharat Scouts & Guides regiment instilling civic duty, emergency first aid, survival knots, pioneering skills, and Rashtrapati badge achievements.",
    icon: Compass,
    tags: ["Civic Leadership", "Outdoor Camps", "First Aid"],
    gradient: "from-blue-500/10 via-indigo-500/5 to-transparent",
    borderAccent: "border-blue-200 group-hover:border-blue-400",
    image: "/images/activities/kautilya-activity-scouts.jpg",
  },
  {
    id: "swimming",
    name: "Swimming & Aquatic Fitness",
    category: "sports",
    categoryLabel: "Sports & Fitness",
    description:
      "Professional aquatic training in hygienic, certified semi-Olympic swimming pools under certified life-saving coaches covering all four competitive strokes.",
    icon: Waves,
    tags: ["Water Safety", "Freestyle & Butterfly", "Endurance"],
    gradient: "from-cyan-500/10 via-blue-500/5 to-transparent",
    borderAccent: "border-cyan-200 group-hover:border-cyan-400",
    image: "/images/activities/kautilya-activity-swimming.jpg",
  },
  {
    id: "tennis",
    name: "Lawn Tennis & Badminton",
    category: "sports",
    categoryLabel: "Sports & Fitness",
    description:
      "Dedicated synthetic turf courts equipped for rapid reflex conditioning, precision footwork, smash mechanics, and inter-school tournament championship play.",
    icon: Trophy,
    tags: ["Agility", "Match Tactics", "Court Movement"],
    gradient: "from-emerald-500/10 via-green-500/5 to-transparent",
    borderAccent: "border-emerald-200 group-hover:border-emerald-400",
    image: "/images/activities/kautilya-activity-tennis.jpg",
  },
  {
    id: "karate",
    name: "Karate & Self-Defense",
    category: "sports",
    categoryLabel: "Martial Arts",
    description:
      "Traditional Shotokan martial arts curriculum emphasizing situational awareness, physical resilience, mental discipline, and progressive belt graduations.",
    icon: Shield,
    tags: ["Shotokan Kata", "Belt Certifications", "Discipline"],
    gradient: "from-rose-500/10 via-red-500/5 to-transparent",
    borderAccent: "border-rose-200 group-hover:border-rose-400",
    image: "/images/activities/kautilya-activity-karate.jpg",
  },
  {
    id: "skating",
    name: "Roller Skating",
    category: "sports",
    categoryLabel: "Sports & Fitness",
    description:
      "Smooth rink training focusing on velocity control, kinetic equilibrium, slalom agility, and competitive relay races at district and state levels.",
    icon: Zap,
    tags: ["Speed Slalom", "Kinetic Balance", "District Meets"],
    gradient: "from-purple-500/10 via-fuchsia-500/5 to-transparent",
    borderAccent: "border-purple-200 group-hover:border-purple-400",
    image: "/images/activities/kautilya-activity-skating.jpg",
  },
  {
    id: "music",
    name: "Acoustic & Vocal Music",
    category: "performing",
    categoryLabel: "Performing Arts",
    description:
      "Comprehensive training in classical Carnatic and Hindustani vocals alongside keyboard, acoustic guitar, and percussion instruments for school choirs.",
    icon: Music,
    tags: ["Classical Vocals", "Acoustic Guitar", "Choir Harmony"],
    gradient: "from-violet-500/10 via-indigo-500/5 to-transparent",
    borderAccent: "border-violet-200 group-hover:border-violet-400",
    image: "/images/activities/kautilya-activity-music.jpg",
  },
  {
    id: "dance",
    name: "Classical & Contemporary Dance",
    category: "performing",
    categoryLabel: "Performing Arts",
    description:
      "Expressive Bharatanatyam mudras, Karnataka folk choreography, and graceful contemporary fusion building rhythmic synchronization and stage presence.",
    icon: Sparkles,
    tags: ["Bharatanatyam", "Folk Heritage", "Stage Poise"],
    gradient: "from-pink-500/10 via-rose-500/5 to-transparent",
    borderAccent: "border-pink-200 group-hover:border-pink-400",
    image: "/images/activities/kautilya-activity-dance.webp",
  },
  {
    id: "chess",
    name: "Chess & Mind Sports",
    category: "stem",
    categoryLabel: "Mind & Strategy",
    description:
      "Strategic board play, opening theory, tactical puzzle solving, and endgame analysis that sharpen spatial intelligence, patience, and foresight.",
    icon: Brain,
    tags: ["Opening Theory", "Tactical Calculations", "Tournaments"],
    gradient: "from-amber-500/10 via-yellow-500/5 to-transparent",
    borderAccent: "border-amber-200 group-hover:border-amber-400",
    image: "/images/activities/kautilya-activity-chess.jpeg",
  },
  {
    id: "art",
    name: "Art, Craft & Studio Design",
    category: "creative",
    categoryLabel: "Creative Arts",
    description:
      "Hands-on studio immersion in watercolor techniques, acrylic canvases, clay pottery, origami sculpting, and curated gallery exhibitions.",
    icon: Palette,
    tags: ["Canvas Painting", "Clay Pottery", "Annual Exhibition"],
    gradient: "from-teal-500/10 via-emerald-500/5 to-transparent",
    borderAccent: "border-teal-200 group-hover:border-teal-400",
    image: "/images/activities/kautilya-activity-art.jpeg",
  },
  {
    id: "drama",
    name: "Dramatics & Public Speaking",
    category: "performing",
    categoryLabel: "Performing Arts",
    description:
      "Theatrical improvisation, character monologues, Model UN oratory, debating societies, and scriptwriting that nurture fearless communicators.",
    icon: Drama,
    tags: ["Stage Theatre", "MUN & Debates", "Elocution"],
    gradient: "from-indigo-500/10 via-blue-500/5 to-transparent",
    borderAccent: "border-indigo-200 group-hover:border-indigo-400",
    image: "/images/activities/kautilya-activity-drama.webp",
  },
  {
    id: "robotics",
    name: "Robotics & STEM Innovation",
    category: "stem",
    categoryLabel: "STEM & Tech",
    description:
      "Atal Tinkering Lab hands-on robotics workshops, micro-controller sensor circuitry, 3D printing prototyping, and collaborative engineering hackathons.",
    icon: Bot,
    tags: ["Atal Tinkering Lab", "Sensor Circuits", "3D Prototyping"],
    gradient: "from-sky-500/10 via-cyan-500/5 to-transparent",
    borderAccent: "border-sky-200 group-hover:border-sky-400",
    image: "/images/activities/kautilya-activity-robotics.webp",
  },
];

const CURRICULUM_POINTS = [
  {
    title: "Science quizzes",
    text: "Science quizzes broaden students' understanding and keep them up to date on new scientific discoveries.",
  },
  {
    title: "Poetry contests",
    text: "Poetry contests help students enhance their vocabulary, linguistic skills, and self-expression.",
  },
  {
    title: "Competitions for story writing",
    text: "Competitions for story writing encourage originality, language, and narrative abilities.",
  },
  {
    title: "Mathematics Olympiads",
    text: "Memory and problem-solving abilities are tested in mathematics Olympiads.",
  },
  {
    title: "Extemporaneous activities",
    text: "Extemporaneous activities improve fast thinking and oratory skills.",
  },
  {
    title: "Exhibit projects",
    text: "Exhibit projects foster cooperation and execution abilities.",
  },
  {
    title: "Essay competitions",
    text: "Essay competitions improve critical thinking and writing precision.",
  },
  {
    title: "Debate competitions",
    text: "Debate competitions help students enhance their defence abilities and the art of constructive discussion.",
  },
  {
    title: "Dance and singing competitions",
    text: "Dance and singing competitions allow pupils to demonstrate their abilities, which boosts confidence and self-esteem. Through creative movement and vocalisation, these exercises also enhance body image awareness and self-expression.",
  },
];

const FILTER_TABS = [
  { id: "all", label: "All Disciplines" },
  { id: "sports", label: "Sports & Fitness" },
  { id: "performing", label: "Performing Arts" },
  { id: "creative", label: "Creative Arts" },
  { id: "stem", label: "Mind & STEM" },
];

export default function CoCurricularClientView() {
  const [isAdmissionModalOpen, setIsAdmissionModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [lightboxImage, setLightboxImage] = useState<{
    src: string;
    title: string;
    subtitle: string;
  } | null>(null);

  const filteredDisciplines =
    selectedCategory === "all"
      ? DISCIPLINES
      : DISCIPLINES.filter((d) => d.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans text-slate-800 selection:bg-[#FFD907] selection:text-[#001744]">
      <Navbar onOpenAdmissionModal={() => setIsAdmissionModalOpen(true)} />

      <main className="flex-grow">
        {/* HERO SECTION WITH AUTHENTIC BG & DYNAMIC WAVE */}
        <InnerPageHero
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Academics" },
            { label: "Co-Curricular Activities" },
          ]}
          badge={{
            text: "Beyond The Classroom",
            icon: Sparkles,
          }}
          title="Co-Curricular Activities"
          subtitle="Encouraging students to embrace difficulties, continually improve, and acquire a well-rounded set of talents that enrich their personality for life."
          waveFillColor="#ffffff"
        />

        {/* SECTION 1: CULTURAL STAGE & PHILOSOPHY OVERVIEW */}
        <section className="relative py-16 sm:py-20 overflow-hidden bg-white">
          <div className="absolute top-1/3 -left-20 right-0 h-44 bg-gradient-to-r from-purple-100/50 via-slate-100/60 to-transparent -skew-y-3 pointer-events-none -z-0" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              {/* Left Column: Stage Photo */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-6"
              >
                <div
                  className="relative aspect-[16/10] sm:aspect-[16/9] w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white cursor-pointer group bg-slate-100"
                  onClick={() =>
                    setLightboxImage({
                      src: "/images/academics/kautilya-co-curricular-activities.jpeg",
                      title: "Cultural Pageantry & Stage Presentations",
                      subtitle: "Students performing in traditional attire during annual celebrations",
                    })
                  }
                >
                  <Image
                    src="/images/academics/kautilya-co-curricular-activities.jpeg"
                    alt="Students performing on stage in traditional Janmashtami attire at Kautilya Vidyalaya"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    priority
                  />
                  <div className="absolute bottom-3 right-3 bg-black/70 hover:bg-black text-white text-xs px-3 py-1.5 rounded-lg flex items-center gap-1.5 opacity-90 group-hover:opacity-100 backdrop-blur-sm transition-all shadow-md">
                    <Maximize2 className="w-3.5 h-3.5 text-[#FFD907]" />
                    <span>View Stage Photo</span>
                  </div>
                </div>
              </motion.div>

              {/* Right Column: Authentic Editorial Text */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-6 space-y-6"
              >
                <div className="space-y-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-3 py-1 rounded-full">
                    Holistic Education
                  </span>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#001744] tracking-tight leading-snug">
                    Building a Growth Mindset Outside the Classroom
                  </h2>
                </div>

                <div className="text-slate-600 text-sm sm:text-base leading-relaxed space-y-4">
                  <p>
                    These activities encourage students to embrace difficulties, continually improve, and acquire a well-rounded set of talents that will serve them well in their future undertakings and instill a growth mindset.
                  </p>
                  <p>
                    Co-curricular activities are important for a child’s education since they provide benefits outside of the classroom. These activities allow students to explore their interests, enhance their talents, and grow as people.
                  </p>
                  <p className="font-semibold text-slate-800">
                    Healthy competition in extracurricular activities promotes active involvement and commitment to reaching goals.
                  </p>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => setIsAdmissionModalOpen(true)}
                    className="bg-[#001744] hover:bg-[#002b7a] text-[#FFD907] font-black text-xs sm:text-sm uppercase tracking-wider px-6 py-3 rounded-xl shadow-md transition-all inline-flex items-center gap-2"
                  >
                    <GraduationCap className="w-4 h-4" />
                    <span>Admissions 2027-28</span>
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* SECTION 2: INTERACTIVE DISCIPLINES PATTERN & NEW ADDITIONS (REPLACED COLLAGE) */}
        <section className="py-16 sm:py-24 bg-slate-50 border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-100/70 px-3 py-1 rounded-full">
                Sports, Arts &amp; Specialized Disciplines
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#001744] tracking-tight">
                Comprehensive Co-Curricular Pattern
              </h2>
              <p className="text-slate-600 text-sm sm:text-base">
                Discover our expanded spectrum of athletic, artistic, performance, and STEM disciplines carefully woven into each student&apos;s weekly schedule.
              </p>

              {/* Filter Tabs */}
              <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
                {FILTER_TABS.map((tab) => {
                  const isActive = selectedCategory === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setSelectedCategory(tab.id)}
                      className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                        isActive
                          ? "bg-[#001744] text-white shadow-md"
                          : "bg-white text-slate-600 hover:text-[#001744] border border-slate-200 hover:border-slate-300"
                      }`}
                    >
                      {tab.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Disciplines Dynamic Grid */}
            <motion.div
              layout
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6"
            >
              <AnimatePresence>
                {filteredDisciplines.map((item) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      layout
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.3 }}
                      key={item.id}
                      className={`group relative bg-white rounded-2xl border shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer ${item.borderAccent}`}
                      onClick={() =>
                        setLightboxImage({
                          src: item.image,
                          title: item.name,
                          subtitle: `${item.categoryLabel} — ${item.description}`,
                        })
                      }
                    >
                      {/* Image Thumbnail Container */}
                      <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10 opacity-70 group-hover:opacity-50 transition-opacity" />

                        {/* Top Category Badge */}
                        <div className="absolute top-3 left-3 z-10">
                          <span className="text-[10px] sm:text-[11px] font-bold text-[#001744] bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-md shadow-sm uppercase tracking-wider">
                            {item.categoryLabel}
                          </span>
                        </div>

                        {/* Zoom button on hover */}
                        <div className="absolute top-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity bg-black/60 text-white p-1.5 rounded-lg backdrop-blur-sm">
                          <Maximize2 className="w-3.5 h-3.5 text-[#FFD907]" />
                        </div>

                        {/* Floating Icon in bottom corner of image */}
                        <div className="absolute -bottom-4 right-4 z-10 w-10 h-10 rounded-xl bg-[#001744] text-[#FFD907] flex items-center justify-center shadow-lg border-2 border-white group-hover:scale-110 transition-transform">
                          <Icon className="w-5 h-5" />
                        </div>
                      </div>

                      {/* Content Section */}
                      <div className="p-5 pt-6 flex-1 flex flex-col justify-between relative z-10">
                        <div>
                          <h3 className="text-base sm:text-lg font-bold text-[#001744] group-hover:text-blue-900 transition-colors">
                            {item.name}
                          </h3>
                          <p className="text-xs text-slate-600 leading-relaxed mt-2 line-clamp-3">
                            {item.description}
                          </p>
                        </div>

                        <div className="pt-4 mt-4 border-t border-slate-100 flex flex-wrap gap-1.5">
                          {item.tags.map((tag, tIdx) => (
                            <span
                              key={tIdx}
                              className="text-[10px] font-medium bg-slate-50 text-slate-600 px-2 py-0.5 rounded border border-slate-200/60"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </motion.div>

            {/* Historical Collage Lightbox Trigger Banner */}
            <div className="mt-12 bg-gradient-to-r from-blue-900 via-[#001744] to-slate-900 rounded-2xl p-6 sm:p-8 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-2 text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-2">
                  <span className="text-xs font-black uppercase tracking-widest text-[#FFD907]">
                    Photo Archive
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FFD907]" />
                  <span className="text-xs text-slate-300 font-medium">
                    Campus Sports Gallery
                  </span>
                </div>
                <h4 className="text-lg sm:text-xl font-bold">
                  View Authentic Campus Sports &amp; Activities Photos
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
                  Inspect high-resolution captures of our students engaged in Yoga, Swimming, Tennis, Scouts &amp; Guides, Karate, and Music sessions.
                </p>
              </div>

              <button
                onClick={() =>
                  setLightboxImage({
                    src: "/images/academics/kautilya-cultural-fest.png",
                    title: "Sports & Specialized Disciplines",
                    subtitle:
                      "Yoga, Scouts & Guides, Swimming, Lawn Tennis, Karate, Roller Skating, and Acoustic Music",
                  })
                }
                className="shrink-0 bg-[#FFD907] hover:bg-yellow-400 text-[#001744] font-black text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all flex items-center gap-2"
              >
                <Maximize2 className="w-4 h-4" />
                <span>View Full Photo Collage</span>
              </button>
            </div>
          </div>
        </section>

        {/* SECTION 3: CURRICULAR COMPETITIONS & VALUE CHECKLIST */}
        <section className="py-16 sm:py-20 bg-white border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-10 space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-100/60 px-3 py-1 rounded-full">
                Competitions &amp; Oratory
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#001744] tracking-tight">
                Diverse Channels of Academic Self-Expression
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm">
                Regularly scheduled inter-house, district, and national competitions that build articulateness and self-confidence.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {CURRICULUM_POINTS.map((pt, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: idx * 0.04 }}
                  className="flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-200/80 shadow-sm hover:shadow-md hover:border-blue-200 transition-all"
                >
                  <div className="mt-0.5 shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <h5 className="text-xs sm:text-sm font-bold text-[#001744]">
                      {pt.title}
                    </h5>
                    <p className="text-xs text-slate-600 leading-relaxed mt-1">
                      {pt.text.substring(pt.title.length).trim() || pt.text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ADMISSIONS CTA */}
        <section className="bg-[#001744] text-white py-14 border-t-4 border-[#FFD907]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Give Your Child a Well-Rounded Childhood
            </h3>
            <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto">
              Admissions open for 2027-28. Connect with our counselors to learn more about our holistic co-curricular opportunities.
            </p>
            <button
              onClick={() => setIsAdmissionModalOpen(true)}
              className="bg-[#FFD907] hover:bg-yellow-400 text-[#001744] font-black px-7 py-3 rounded-xl text-sm transition-all shadow-lg"
            >
              Enquire for Admission 2027-28
            </button>
          </div>
        </section>
      </main>

      {/* FULL-SIZE IMAGE LIGHTBOX MODAL */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
          onClick={() => setLightboxImage(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[92vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-white">
              <div>
                <h4 className="text-base sm:text-lg font-bold text-[#001744]">
                  {lightboxImage.title}
                </h4>
                <p className="text-xs text-slate-500">
                  {lightboxImage.subtitle}
                </p>
              </div>
              <button
                onClick={() => setLightboxImage(null)}
                className="text-slate-400 hover:text-black p-1.5 rounded-lg hover:bg-slate-100 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Image View */}
            <div className="relative h-[65vh] w-full bg-slate-900">
              <Image
                src={lightboxImage.src}
                alt={lightboxImage.title}
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      )}

      <Footer />
      <WhatsAppWidget />
      <AdmissionModal
        isOpen={isAdmissionModalOpen}
        onClose={() => setIsAdmissionModalOpen(false)}
      />
    </div>
  );
}
