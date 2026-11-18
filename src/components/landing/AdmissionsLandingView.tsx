"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Award,
  Baby,
  BookOpen,
  Bus,
  CalendarCheck,
  CheckCircle2,
  ChevronDown,
  ClipboardCheck,
  ClipboardList,
  Cpu,
  FileText,
  FlaskConical,
  GraduationCap,
  HeartHandshake,
  Languages,
  Leaf,
  Library,
  MapPin,
  MessageCircle,
  Monitor,
  Phone,
  Quote,
  Send,
  ShieldCheck,
  Sparkles,
  Star,
  Trophy,
  UserCheck,
  Users,
  Waves,
} from "lucide-react";
import { contactInfo, parentTestimonials } from "@/data/siteData";

const PHONE_HREF = "tel:+919900038358";
const PHONE_LABEL = "+91 99000 38358";

const classes = [
  "Nursery",
  "LKG",
  "UKG",
  "Grade 1",
  "Grade 2",
  "Grade 3",
  "Grade 4",
  "Grade 5",
  "Grade 6",
  "Grade 7",
  "Grade 8",
  "Grade 9",
  "Grade 10",
];

const stats = [
  { value: "21 Years", label: "100% CBSE Board Results" },
  { value: "1 : 12", label: "Teacher Ratio in Kindergarten" },
  { value: "Max 30", label: "Students per Class (I–X)" },
  { value: "15 km", label: "School Bus Network" },
];

const recognitions = [
  { icon: Trophy, title: "The Dynamic School", desc: "Karnataka Educators' Summit 2025" },
  { icon: Leaf, title: "Wipro Earthian Award", desc: "For sustainability education" },
  { icon: ShieldCheck, title: "CBSE Affiliated", desc: `Affiliation No. ${contactInfo.affiliationNo}` },
  { icon: Cpu, title: "Atal Tinkering Lab", desc: "NITI Aayog approved STEM lab" },
];

const highlights = [
  {
    icon: Trophy,
    title: "Proven Academic Results",
    desc: "An unbroken record of 100% results in CBSE Class X board examinations for 21 years.",
  },
  {
    icon: UserCheck,
    title: "Personal Attention",
    desc: "Kindergarten classes capped at 25 with a 1:12 teacher ratio; a maximum of 30 students in Grades I–X.",
  },
  {
    icon: HeartHandshake,
    title: "Values & Well-being",
    desc: "A full-time qualified child counsellor on campus and teachers trained to support every learner.",
  },
  {
    icon: Languages,
    title: "Strong Language Foundation",
    desc: "English medium, with Kannada, Hindi, Sanskrit and French offered as second and third languages.",
  },
  {
    icon: Sparkles,
    title: "Balanced Schooling",
    desc: "The right balance of academics, sports, arts and co-curricular activities for holistic growth.",
  },
  {
    icon: Users,
    title: "Parent Partnership",
    desc: "Regular PTMs and open communication so parents stay involved in their child's progress.",
  },
];

const stages = [
  {
    icon: Baby,
    range: "Nursery – UKG",
    title: "Early Years",
    desc: "Play-based, activity-led learning in small groups that builds curiosity, language and confidence.",
  },
  {
    icon: BookOpen,
    range: "Grades 1 – 5",
    title: "Primary",
    desc: "Strong foundations in reading, numeracy and science, with hands-on projects and regular feedback.",
  },
  {
    icon: FlaskConical,
    range: "Grades 6 – 8",
    title: "Middle School",
    desc: "Lab-based science, third-language choice, robotics and Olympiad preparation to stretch young minds.",
  },
  {
    icon: GraduationCap,
    range: "Grades 9 – 10",
    title: "Secondary",
    desc: "Focused CBSE board preparation and mentorship, backed by 21 years of 100% Class X results.",
  },
];

const facilities = [
  { icon: Cpu, name: "Atal Tinkering Lab" },
  { icon: FlaskConical, name: "Physics, Chemistry & Biology Labs" },
  { icon: Monitor, name: "Computer Lab" },
  { icon: Library, name: "Library & Resource Centre" },
  { icon: Waves, name: "Swimming Pool" },
  { icon: Trophy, name: "Sports Grounds & Courts" },
];

const activities = [
  "Swimming",
  "Karate",
  "Roller Skating",
  "Yoga & Mindfulness",
  "Scouts & Guides",
  "Robotics & STEM",
  "Music",
  "Dance",
  "Art & Craft",
  "Dramatics & Public Speaking",
  "Chess",
  "Cricket",
  "Football",
  "Basketball",
  "Volleyball",
  "Badminton",
  "Athletics",
  "Olympiads & Quizzes",
];

const safety = [
  "GPS-tracked school buses across Mysuru within a 15 km radius",
  "CCTV surveillance and speed governors on every bus",
  "Trained lady attendants on all school buses",
  "CCTV-monitored campus entry, corridors and playgrounds",
  "Full-time child counsellor on campus",
];

const steps = [
  {
    icon: ClipboardList,
    title: "Enquiry",
    desc: "Submit the form on this page. Our admissions team will call you to check seat availability.",
  },
  {
    icon: CalendarCheck,
    title: "Campus Visit",
    desc: "Visit the school with your child, see our facilities and complete the registration.",
  },
  {
    icon: UserCheck,
    title: "Interaction",
    desc: "An informal observation for KG to Grade 2, and a short concept assessment for Grades 3 to 9.",
  },
  {
    icon: ClipboardCheck,
    title: "Confirmation",
    desc: "Complete the admission form, submit documents and pay the fee to confirm the seat.",
  },
];

const documents = [
  "Birth Certificate (Nursery to Grade 1)",
  "Transfer Certificate (Grades 2 to 10)",
  "Previous year's Marks Card",
  "6 passport-size photos of the student",
  "2 passport-size photos of parents",
  "Address proof (Aadhaar / utility bill)",
];

const faqs = [
  {
    q: "What is the age criteria for admission?",
    a: "For entry into the youngest class, the child should have completed 2 years and 6 months as of 30th May of the academic year. Age requirements scale progressively for LKG, UKG and Grade 1.",
  },
  {
    q: "How are students selected for admission?",
    a: "Admission is based on age eligibility, an interaction or assessment, and seat availability. We are an inclusive school that welcomes students of all backgrounds.",
  },
  {
    q: "Is school bus transport available?",
    a: "Yes. Optional transport covers all major residential areas in Mysuru within a 15 km radius. Every bus has GPS tracking, CCTV, speed governors and a trained lady attendant.",
  },
  {
    q: "What languages are taught?",
    a: "English is the medium of instruction. Kannada and Hindi are offered as second languages, and students choose a third language from Hindi, Kannada, Sanskrit and French in Classes IV to VIII.",
  },
  {
    q: "How can I pay the fees?",
    a: "Fees can be paid online through the official SchoolElement portal using Net Banking, UPI or cards, or by Demand Draft / Cheque in favour of 'Kautilya Vidyalaya'. Our team will share the fee details during your enquiry.",
  },
];

const initialForm = {
  parentName: "",
  childName: "",
  phone: "",
  email: "",
  grade: "Nursery",
  location: "",
};

function getCampaignSource() {
  const params = new URLSearchParams(window.location.search);
  const utm = ["utm_source", "utm_medium", "utm_campaign", "utm_content"]
    .map((key) => (params.get(key) ? `${key}=${params.get(key)}` : null))
    .filter(Boolean)
    .join(", ");
  return utm ? `Admissions Landing Page (${utm})` : "Admissions Landing Page";
}

function SectionBadge({ icon: Icon, children, dark = false }: { icon: React.ElementType; children: React.ReactNode; dark?: boolean }) {
  return (
    <div
      className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider ${
        dark ? "bg-white/10 text-[#FFD907]" : "bg-[#001744]/5 text-[#001744]"
      }`}
    >
      <Icon className="w-3.5 h-3.5" />
      <span>{children}</span>
    </div>
  );
}

function EnquiryForm() {
  const [formData, setFormData] = useState(initialForm);
  const [status, setStatus] = useState<"idle" | "submitting" | "error" | "invalid-phone">("idle");

  const update = (field: keyof typeof initialForm) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
      setFormData({ ...formData, [field]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const mobile = formData.phone.replace(/\D/g, "").slice(-10);
    if (!/^[6-9]\d{9}$/.test(mobile)) {
      setStatus("invalid-phone");
      return;
    }
    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          phone: mobile,
          source: getCampaignSource(),
        }),
      });

      if (res.ok) {
        window.location.assign(`/thank-you?name=${encodeURIComponent(formData.parentName)}`);
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error("Submission failed:", err);
      setStatus("error");
    }
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#001744] focus:border-transparent text-sm bg-slate-50/60 text-slate-800 transition-shadow";
  const labelClass = "block text-[11px] font-bold text-slate-600 uppercase tracking-wider mb-1.5";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="pb-4 border-b border-slate-100">
        <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-emerald-600">
          <span className="relative flex w-2 h-2">
            <span className="absolute inline-flex w-full h-full rounded-full bg-emerald-500 opacity-75 animate-ping" />
            <span className="relative inline-flex w-2 h-2 rounded-full bg-emerald-500" />
          </span>
          Limited seats available
        </div>
        <h2 className="mt-2 text-xl sm:text-2xl font-black text-[#001744]">Book a Campus Visit</h2>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">
          Share your details and our admissions team will call you back within one working day.
        </p>
      </div>

      <div>
        <label htmlFor="lp-parent" className={labelClass}>
          Parent Name <span className="text-rose-500">*</span>
        </label>
        <input
          id="lp-parent"
          type="text"
          required
          autoComplete="name"
          value={formData.parentName}
          onChange={update("parentName")}
          placeholder="Your full name"
          className={inputClass}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="lp-child" className={labelClass}>
            Child&apos;s Name <span className="text-rose-500">*</span>
          </label>
          <input
            id="lp-child"
            type="text"
            required
            value={formData.childName}
            onChange={update("childName")}
            placeholder="Child's full name"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="lp-grade" className={labelClass}>
            Class Seeking <span className="text-rose-500">*</span>
          </label>
          <select id="lp-grade" value={formData.grade} onChange={update("grade")} className={inputClass}>
            {classes.map((cls) => (
              <option key={cls} value={cls}>
                {cls}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="lp-phone" className={labelClass}>
            Mobile Number <span className="text-rose-500">*</span>
          </label>
          <input
            id="lp-phone"
            type="tel"
            required
            inputMode="numeric"
            autoComplete="tel"
            value={formData.phone}
            onChange={update("phone")}
            placeholder="10-digit mobile number"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="lp-email" className={labelClass}>
            Email Address
          </label>
          <input
            id="lp-email"
            type="email"
            autoComplete="email"
            value={formData.email}
            onChange={update("email")}
            placeholder="parent@example.com"
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="lp-location" className={labelClass}>
          Location / Area <span className="text-rose-500">*</span>
        </label>
        <input
          id="lp-location"
          type="text"
          required
          value={formData.location}
          onChange={update("location")}
          placeholder="e.g. Dattagalli, Mysuru"
          className={inputClass}
        />
      </div>

      {status === "invalid-phone" && (
        <p className="text-xs text-rose-600 font-medium">Please enter a valid 10-digit mobile number.</p>
      )}

      {status === "error" && (
        <p className="text-xs text-rose-600 font-medium">
          Something went wrong. Please try again or call us at {PHONE_LABEL}.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full inline-flex items-center justify-center gap-2 bg-[#001744] hover:bg-[#002b7a] text-[#FFD907] font-black py-4 rounded-xl text-base shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5 disabled:opacity-70 disabled:hover:translate-y-0 cursor-pointer"
      >
        {status === "submitting" ? (
          <span>Submitting...</span>
        ) : (
          <>
            <Send className="w-4 h-4" />
            <span>Request a Call Back</span>
          </>
        )}
      </button>

      <p className="text-[11px] text-slate-400 text-center leading-relaxed">
        By submitting, you agree to be contacted by Kautilya Vidyalaya. See our{" "}
        <Link href="/privacy-policy" className="underline hover:text-slate-600">
          Privacy Policy
        </Link>
        .
      </p>
    </form>
  );
}

export default function AdmissionsLandingView() {
  const testimonials = parentTestimonials.slice(0, 3);

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans text-slate-800 pb-16 sm:pb-0">
      {/* HEADER */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 h-16 flex items-center justify-between gap-4">
          <div className="relative w-40 sm:w-52 h-9 sm:h-10">
            <Image
              src="/images/kautilya-vidyalaya-logo.webp"
              alt="Kautilya Vidyalaya Logo"
              fill
              priority
              sizes="(max-width: 640px) 160px, 208px"
              className="object-contain object-left"
            />
          </div>
          <div className="flex items-center gap-2">
            <a
              href={PHONE_HREF}
              className="inline-flex items-center gap-2 text-[#001744] font-bold text-xs sm:text-sm px-3 sm:px-4 py-2.5 rounded-full border border-slate-200 hover:border-[#001744] transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">{PHONE_LABEL}</span>
              <span className="sm:hidden">Call</span>
            </a>
            <a
              href="#enquire"
              className="hidden sm:inline-flex items-center gap-2 bg-[#FFD907] hover:bg-yellow-400 text-[#001744] font-black text-sm px-5 py-2.5 rounded-full shadow-sm transition-colors"
            >
              Enquire Now
            </a>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        {/* HERO */}
        <section className="relative bg-[#001744] overflow-hidden">
          <Image
            src="/images/kautilya-campus-building.jpg"
            alt="Kautilya Vidyalaya campus, Mysuru"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#001744] via-[#001744]/92 to-[#0a2560]/75" />
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#FFD907]/10 blur-3xl" />
          <div className="absolute -bottom-32 -left-20 w-96 h-96 rounded-full bg-blue-500/10 blur-3xl" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-8 pt-10 pb-14 sm:pt-16 sm:pb-24 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-7 text-white">
              <div className="inline-flex items-center gap-2 bg-[#FFD907] text-[#001744] px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider shadow-lg">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Admissions Open 2027-28</span>
              </div>

              <h1 className="mt-5 text-4xl sm:text-5xl lg:text-[3.6rem] font-black tracking-tight leading-[1.08]">
                Where Young Minds Grow Into{" "}
                <span className="relative inline-block text-[#FFD907]">
                  Confident Leaders
                  <svg className="absolute -bottom-2 left-0 w-full" height="10" viewBox="0 0 200 10" preserveAspectRatio="none" aria-hidden="true">
                    <path d="M2 7 Q 100 1 198 6" stroke="#FFD907" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.6" />
                  </svg>
                </span>
              </h1>

              <p className="mt-6 text-base sm:text-lg text-slate-200 leading-relaxed max-w-xl">
                Kautilya Vidyalaya is a CBSE affiliated school in Mysuru offering value-based, English-medium education from Nursery to Grade 10, honoured as{" "}
                <strong className="text-white">&lsquo;The Dynamic School&rsquo;</strong> at the Karnataka Educators&rsquo; Summit 2025.
              </p>

              <ul className="mt-7 grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-xl">
                {[
                  "100% Board Results for 21 Years",
                  "Small Classes, Personal Attention",
                  "Atal Tinkering & Science Labs",
                  "Swimming, Sports & Arts",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm font-semibold text-white">
                    <CheckCircle2 className="w-5 h-5 text-[#FFD907] shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-slate-300">
                <div className="flex items-center gap-2">
                  <div className="flex text-[#FFD907]">
                    {[0, 1, 2, 3, 4].map((i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span>Trusted by Mysuru families</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#FFD907] shrink-0" />
                  <span>Dattagalli 3rd Stage, Mysuru</span>
                </div>
              </div>
            </div>

            <div id="enquire" className="lg:col-span-5 scroll-mt-20">
              <div className="relative bg-white rounded-3xl p-6 sm:p-8 shadow-2xl">
                <div className="absolute inset-x-8 -top-1 h-1.5 rounded-full bg-[#FFD907]" />
                <EnquiryForm />
              </div>
            </div>
          </div>
        </section>

        {/* STATS STRIP */}
        <section className="bg-[#FFD907]">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 py-6 grid grid-cols-2 md:grid-cols-4 gap-y-5 text-center text-[#001744] md:divide-x md:divide-[#001744]/15">
            {stats.map((stat) => (
              <div key={stat.label} className="px-2">
                <div className="text-2xl sm:text-3xl font-black">{stat.value}</div>
                <div className="mt-0.5 text-[11px] sm:text-xs font-bold uppercase tracking-wider opacity-75">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* RECOGNITIONS */}
        <section className="bg-white border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {recognitions.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex items-center gap-3.5 p-3">
                <div className="w-11 h-11 rounded-full border-2 border-[#FFD907] text-[#001744] flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-black text-[#001744]">{title}</div>
                  <div className="text-xs text-slate-500">{desc}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* WHY KAUTILYA */}
        <section className="py-16 sm:py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="text-center max-w-2xl mx-auto">
              <SectionBadge icon={Award}>Why Kautilya Vidyalaya</SectionBadge>
              <h2 className="mt-4 text-3xl sm:text-4xl font-black text-[#001744] tracking-tight">
                A School Parents Trust
              </h2>
              <p className="mt-3 text-slate-600">
                Strong academics, caring teachers and a safe campus where every child grows with confidence.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {highlights.map(({ icon: Icon, title, desc }) => (
                <div
                  key={title}
                  className="group bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#001744] text-[#FFD907] flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-[#001744]">{title}</h3>
                  <p className="mt-1.5 text-sm text-slate-600 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* LEARNING STAGES */}
        <section className="py-16 sm:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="text-center max-w-2xl mx-auto">
              <SectionBadge icon={GraduationCap}>Classes Open for 2027-28</SectionBadge>
              <h2 className="mt-4 text-3xl sm:text-4xl font-black text-[#001744] tracking-tight">
                A Complete Journey, Nursery to Grade 10
              </h2>
              <p className="mt-3 text-slate-600">
                Age-appropriate learning at every stage, following the CBSE curriculum.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {stages.map(({ icon: Icon, range, title, desc }, i) => (
                <div key={title} className="relative rounded-2xl p-6 bg-gradient-to-b from-slate-50 to-white border border-slate-100 overflow-hidden">
                  <div className="absolute -right-3 -top-5 text-[5.5rem] font-black text-[#001744]/[0.04] select-none" aria-hidden="true">
                    0{i + 1}
                  </div>
                  <div className="w-12 h-12 rounded-full bg-[#FFD907] text-[#001744] flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="mt-4 text-xs font-bold uppercase tracking-wider text-blue-700">{range}</div>
                  <h3 className="mt-1 text-xl font-black text-[#001744]">{title}</h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CAMPUS & BEYOND THE CLASSROOM */}
        <section className="py-16 sm:py-24 bg-[#001744] text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[30rem] h-[30rem] rounded-full bg-[#FFD907]/5 blur-3xl" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="relative">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl ring-1 ring-white/10">
                <Image
                  src="/images/kautilya-campus-reception.jpg"
                  alt="Kautilya Vidyalaya school campus"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 left-4 sm:-right-6 sm:left-auto bg-[#FFD907] text-[#001744] rounded-2xl px-5 py-4 shadow-xl">
                <div className="text-2xl font-black">18+</div>
                <div className="text-xs font-bold uppercase tracking-wider">Sports & Activities</div>
              </div>
            </div>

            <div className="pt-6 lg:pt-0">
              <SectionBadge icon={Sparkles} dark>
                Campus & Beyond the Classroom
              </SectionBadge>
              <h2 className="mt-4 text-3xl sm:text-4xl font-black tracking-tight">
                Facilities That Spark Curiosity
              </h2>
              <p className="mt-3 text-slate-300 leading-relaxed">
                Modern labs for hands-on learning, and a wide choice of sports, arts and clubs so every child discovers their strengths.
              </p>

              <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {facilities.map(({ icon: Icon, name }) => (
                  <div key={name} className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-3">
                    <Icon className="w-5 h-5 text-[#FFD907] shrink-0" />
                    <span className="text-sm font-semibold">{name}</span>
                  </div>
                ))}
              </div>

              <div className="mt-7 flex flex-wrap gap-2">
                {activities.map((activity) => (
                  <span
                    key={activity}
                    className="px-3 py-1.5 rounded-full bg-white/10 text-xs font-semibold text-slate-100"
                  >
                    {activity}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SAFETY & TRANSPORT */}
        <section className="py-16 sm:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-8 grid grid-cols-1 lg:grid-cols-5 gap-10 items-center">
            <div className="lg:col-span-2">
              <SectionBadge icon={ShieldCheck}>Safety First</SectionBadge>
              <h2 className="mt-4 text-3xl sm:text-4xl font-black text-[#001744] tracking-tight">
                Safe Campus, Safe Journey
              </h2>
              <p className="mt-3 text-slate-600 leading-relaxed">
                Your child&apos;s safety and well-being come first, from the moment they board the school bus until they return home.
              </p>
              <div className="mt-6 inline-flex items-center gap-3 bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4">
                <Bus className="w-8 h-8 text-[#001744]" />
                <div>
                  <div className="text-sm font-black text-[#001744]">School Transport</div>
                  <div className="text-xs text-slate-500">Covering Mysuru within 15 km</div>
                </div>
              </div>
            </div>

            <ul className="lg:col-span-3 space-y-3">
              {safety.map((item) => (
                <li key={item} className="flex items-start gap-3 bg-slate-50 rounded-xl px-5 py-4 border border-slate-100">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="text-sm font-medium text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* PARENT TESTIMONIALS */}
        <section className="py-16 sm:py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="text-center max-w-2xl mx-auto">
              <SectionBadge icon={MessageCircle}>Parent Voices</SectionBadge>
              <h2 className="mt-4 text-3xl sm:text-4xl font-black text-[#001744] tracking-tight">
                What Our Parents Say
              </h2>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5">
              {testimonials.map((t) => (
                <figure key={t.name} className="relative bg-white rounded-2xl p-6 sm:p-7 border border-slate-100 shadow-sm flex flex-col">
                  <Quote className="w-9 h-9 text-[#FFD907] fill-[#FFD907]/20" />
                  <blockquote className="mt-4 text-sm text-slate-600 leading-relaxed flex-grow">
                    &ldquo;{t.text}&rdquo;
                  </blockquote>
                  <figcaption className="mt-5 pt-4 border-t border-slate-100 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#001744] text-[#FFD907] flex items-center justify-center font-black text-sm shrink-0">
                      {t.name.replace(/^(Dr\.?|Mrs\.?|Mr\.?)\s*/i, "").charAt(0)}
                    </div>
                    <div>
                      <div className="text-sm font-bold text-[#001744]">{t.name}</div>
                      <div className="text-xs text-slate-500">{t.role}</div>
                    </div>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* ADMISSION PROCESS */}
        <section className="py-16 sm:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="text-center max-w-2xl mx-auto">
              <SectionBadge icon={ClipboardList}>Admission Process</SectionBadge>
              <h2 className="mt-4 text-3xl sm:text-4xl font-black text-[#001744] tracking-tight">
                Four Simple Steps to Join
              </h2>
              <p className="mt-3 text-slate-600">Our admissions team guides you from enquiry to the first day of school.</p>
            </div>

            <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-5 relative">
              <div className="hidden lg:block absolute top-7 left-[12%] right-[12%] h-0.5 bg-gradient-to-r from-[#FFD907] via-[#001744]/20 to-[#FFD907]" />
              {steps.map(({ icon: Icon, title, desc }, i) => (
                <div key={title} className="relative text-center">
                  <div className="relative mx-auto w-14 h-14 rounded-full bg-[#001744] text-[#FFD907] flex items-center justify-center shadow-lg ring-4 ring-white">
                    <Icon className="w-6 h-6" />
                    <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-[#FFD907] text-[#001744] text-xs font-black flex items-center justify-center">
                      {i + 1}
                    </span>
                  </div>
                  <h3 className="mt-4 text-lg font-black text-[#001744]">{title}</h3>
                  <p className="mt-1.5 text-sm text-slate-600 leading-relaxed max-w-xs mx-auto">{desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-14 max-w-4xl mx-auto bg-slate-50 rounded-2xl border border-slate-200 p-6 sm:p-8">
              <div className="flex items-center gap-2.5">
                <FileText className="w-5 h-5 text-[#001744]" />
                <h3 className="text-base font-black text-[#001744]">Documents to Keep Ready</h3>
              </div>
              <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5">
                {documents.map((doc) => (
                  <li key={doc} className="flex items-start gap-2.5 text-sm text-slate-600">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{doc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 sm:py-24 bg-slate-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-8">
            <div className="text-center">
              <h2 className="text-3xl sm:text-4xl font-black text-[#001744] tracking-tight">
                Frequently Asked Questions
              </h2>
            </div>
            <div className="mt-10 space-y-3">
              {faqs.map((faq) => (
                <details key={faq.q} className="group bg-white rounded-2xl border border-slate-200 open:shadow-md transition-shadow">
                  <summary className="flex items-center justify-between gap-4 cursor-pointer list-none px-5 sm:px-6 py-4 [&::-webkit-details-marker]:hidden">
                    <span className="text-sm sm:text-base font-bold text-[#001744]">{faq.q}</span>
                    <ChevronDown className="w-5 h-5 text-slate-400 shrink-0 transition-transform group-open:rotate-180" />
                  </summary>
                  <p className="px-5 sm:px-6 pb-5 -mt-1 text-sm text-slate-600 leading-relaxed">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="relative bg-gradient-to-br from-[#001744] to-[#0a2560] text-white overflow-hidden">
          <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-[#FFD907]/10 blur-3xl" />
          <div className="relative max-w-4xl mx-auto px-4 sm:px-8 py-16 sm:py-20 text-center">
            <div className="inline-flex items-center gap-2 bg-[#FFD907] text-[#001744] px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Limited Seats for 2027-28</span>
            </div>
            <h2 className="mt-5 text-3xl sm:text-5xl font-black tracking-tight">
              Visit Our Campus This Week
            </h2>
            <p className="mt-4 text-slate-300 max-w-xl mx-auto">
              Meet our teachers, explore the labs and see why families across Mysuru choose Kautilya Vidyalaya.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="#enquire"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#FFD907] hover:bg-yellow-400 text-[#001744] font-black px-8 py-4 rounded-xl shadow-lg transition-colors"
              >
                <Send className="w-4 h-4" />
                <span>Enquire Now</span>
              </a>
              <a
                href={PHONE_HREF}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-4 rounded-xl transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>Call {PHONE_LABEL}</span>
              </a>
              <a
                href={contactInfo.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-8 py-4 rounded-xl transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-[#000f2e] text-slate-400 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div className="space-y-1">
            <p className="font-bold text-slate-200">Kautilya Vidyalaya, Mysuru</p>
            <p>{contactInfo.address}</p>
            <p>
              CBSE Affiliation No. {contactInfo.affiliationNo} | School Code {contactInfo.schoolCode}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/" className="hover:text-slate-200 transition-colors">
              Visit Website
            </Link>
            <span>•</span>
            <Link href="/privacy-policy" className="hover:text-slate-200 transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </footer>

      {/* MOBILE STICKY ACTION BAR */}
      <div className="sm:hidden fixed bottom-0 inset-x-0 z-50 grid grid-cols-3 shadow-[0_-4px_20px_rgba(0,0,0,0.15)]">
        <a href={PHONE_HREF} className="flex items-center justify-center gap-1.5 bg-white text-[#001744] font-bold py-4 text-sm">
          <Phone className="w-4 h-4" />
          <span>Call</span>
        </a>
        <a
          href={contactInfo.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 bg-emerald-500 text-white font-bold py-4 text-sm"
        >
          <MessageCircle className="w-4 h-4" />
          <span>WhatsApp</span>
        </a>
        <a href="#enquire" className="flex items-center justify-center gap-1.5 bg-[#001744] text-[#FFD907] font-black py-4 text-sm">
          <Send className="w-4 h-4" />
          <span>Enquire</span>
        </a>
      </div>
    </div>
  );
}
