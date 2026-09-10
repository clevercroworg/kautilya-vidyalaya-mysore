"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppWidget from "@/components/ui/WhatsAppWidget";
import AdmissionModal from "@/components/ui/AdmissionModal";
import InnerPageHero from "@/components/ui/InnerPageHero";
import rawData from "@/data/contactData.json";
import { ContactData } from "@/types/contact";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  Navigation,
  MessageCircle,
  Building2,
  Calendar,
  AlertCircle,
} from "lucide-react";

const contactData: ContactData = rawData as ContactData;

const CLASS_OPTIONS = [
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
  "I PUC Science",
  "II PUC Science",
  "I PUC Commerce",
  "II PUC Commerce",
];

export default function ContactUsClientView() {
  const [isAdmissionModalOpen, setIsAdmissionModalOpen] = useState(false);
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    parentName: "",
    childName: "",
    location: "",
    email: "",
    phone: "",
    selectedClass: "Grade 1",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.parentName || !formData.phone || !formData.email) {
      alert("Please fill in required fields (Parent Name, Phone, and Email).");
      return;
    }

    setFormStatus("submitting");

    // Simulate reliable dispatch
    setTimeout(() => {
      setFormStatus("success");
    }, 800);
  };

  const handleReset = () => {
    setFormData({
      parentName: "",
      childName: "",
      location: "",
      email: "",
      phone: "",
      selectedClass: "Grade 1",
      message: "",
    });
    setFormStatus("idle");
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-800 selection:bg-[#FFD907] selection:text-[#001744]">
      <Navbar onOpenAdmissionModal={() => setIsAdmissionModalOpen(true)} />

      <main className="flex-grow">
        {/* HERO SECTION */}
        <InnerPageHero
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Contact Us" },
          ]}
          badge={{
            text: "Get In Touch",
            icon: Phone,
          }}
          title="Contact Us"
          subtitle="Reach out to our administrative office for academic, admission, or general queries. We are here to assist you."
          waveFillColor="#f8fafc"
        />

        {/* 4 QUICK ACTION CONTACT CARDS */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 sm:-mt-8 relative z-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {/* Phone Helpdesk */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.05 }}
              className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100 flex flex-col justify-between hover:border-yellow-400 hover:shadow-xl transition-all"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#001744] flex items-center justify-center mb-4">
                  <Phone className="w-6 h-6 text-blue-900" />
                </div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Call Us Directly
                </h3>
                <h4 className="text-lg font-black text-[#001744] mt-1">
                  Telephone Helpdesk
                </h4>
                <div className="mt-3 space-y-1.5 text-sm">
                  {contactData.phones.map((p) => (
                    <a
                      key={p.value}
                      href={p.href}
                      className="block font-bold text-slate-700 hover:text-blue-900 transition-colors"
                    >
                      {p.value}
                    </a>
                  ))}
                </div>
              </div>
              <p className="text-xs text-slate-400 mt-4 pt-3 border-t border-slate-100">
                Admissions & Reception desk
              </p>
            </motion.div>

            {/* Email Helpdesk */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.1 }}
              className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100 flex flex-col justify-between hover:border-yellow-400 hover:shadow-xl transition-all"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-900 flex items-center justify-center mb-4">
                  <Mail className="w-6 h-6 text-amber-600" />
                </div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Write to Us
                </h3>
                <h4 className="text-lg font-black text-[#001744] mt-1">
                  Email Enquiries
                </h4>
                <div className="mt-3 space-y-2 text-xs sm:text-sm">
                  {contactData.emails.map((e) => (
                    <a
                      key={e.value}
                      href={e.href}
                      className="block font-semibold text-slate-700 hover:text-blue-900 break-all transition-colors"
                    >
                      {e.value}
                    </a>
                  ))}
                </div>
              </div>
              <p className="text-xs text-slate-400 mt-4 pt-3 border-t border-slate-100">
                Official replies within 24 hours
              </p>
            </motion.div>

            {/* Campus Address */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.15 }}
              className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100 flex flex-col justify-between hover:border-yellow-400 hover:shadow-xl transition-all"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-900 flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Visit Campus
                </h3>
                <h4 className="text-lg font-black text-[#001744] mt-1">
                  Mysuru Campus
                </h4>
                <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {contactData.address.street}, {contactData.address.landmark}, {contactData.address.area}, Mysuru - 570033
                </p>
              </div>
              <a
                href={contactData.address.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-blue-900 hover:text-blue-700 flex items-center gap-1 mt-4 pt-3 border-t border-slate-100"
              >
                <Navigation className="w-3.5 h-3.5 text-yellow-500" />
                <span>Get Driving Directions</span>
              </a>
            </motion.div>

            {/* Working Hours */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.2 }}
              className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100 flex flex-col justify-between hover:border-yellow-400 hover:shadow-xl transition-all"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-900 flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Office Timings
                </h3>
                <h4 className="text-lg font-black text-[#001744] mt-1">
                  Visiting Hours
                </h4>
                <div className="mt-3 space-y-1.5 text-xs sm:text-sm">
                  <div>
                    <span className="font-bold text-slate-800">Mon – Fri:</span>{" "}
                    <span className="text-slate-600">8:30 AM – 4:00 PM</span>
                  </div>
                  <div>
                    <span className="font-bold text-slate-800">Saturday:</span>{" "}
                    <span className="text-slate-600">8:30 AM – 1:00 PM</span>
                  </div>
                  <div>
                    <span className="font-bold text-rose-600">Sunday:</span>{" "}
                    <span className="text-slate-500">Closed</span>
                  </div>
                </div>
              </div>
              <p className="text-xs text-slate-400 mt-4 pt-3 border-t border-slate-100">
                School Affiliation No: {contactData.affiliationNumber}
              </p>
            </motion.div>
          </div>
        </section>

        {/* INTERACTIVE FORM & MAP SECTION */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* LEFT: INTERACTIVE ENQUIRY FORM */}
            <div className="lg:col-span-6 bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-slate-200">
              <div className="flex items-center gap-3 mb-3">
                <span className="p-2 rounded-xl bg-yellow-100 text-[#001744]">
                  <MessageCircle className="w-5 h-5 text-yellow-600" />
                </span>
                <span className="text-xs font-extrabold text-yellow-600 uppercase tracking-wider">
                  Direct Enquiry Desk
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-black text-[#001744]">
                Send Us a Message
              </h2>
              <p className="text-slate-600 text-sm mt-1 mb-8">
                Submit your inquiry regarding admissions for 2026-27 or general campus information.
              </p>

              {formStatus === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 sm:p-8 text-center space-y-4"
                >
                  <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-black text-emerald-900">
                    Enquiry Received Successfully!
                  </h3>
                  <p className="text-sm text-emerald-700 leading-relaxed max-w-md mx-auto">
                    Thank you, <strong>{formData.parentName}</strong>. Our admissions counselor will contact you at <strong>{formData.phone}</strong> within 24 business hours.
                  </p>
                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={handleReset}
                      className="px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm transition-colors shadow-sm"
                    >
                      Send Another Message
                    </button>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Parent Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.parentName}
                        onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                        placeholder="e.g. Ramesh Kumar"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#001744] transition-all bg-slate-50 focus:bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Child Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.childName}
                        onChange={(e) => setFormData({ ...formData, childName: e.target.value })}
                        placeholder="e.g. Ananya Kumar"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#001744] transition-all bg-slate-50 focus:bg-white"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Phone Number <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 99000 XXXXX"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#001744] transition-all bg-slate-50 focus:bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Email Address <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="parent@example.com"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#001744] transition-all bg-slate-50 focus:bg-white"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Class Interested In <span className="text-rose-500">*</span>
                      </label>
                      <select
                        value={formData.selectedClass}
                        onChange={(e) => setFormData({ ...formData, selectedClass: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#001744] transition-all bg-slate-50 focus:bg-white font-medium"
                      >
                        {CLASS_OPTIONS.map((c) => (
                          <option key={c} value={c}>
                            {c}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Location / City <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        placeholder="e.g. Dattagalli, Mysore"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#001744] transition-all bg-slate-50 focus:bg-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Your Message or Queries
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share any questions about curriculum, school transport, or fee schedule..."
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#001744] transition-all bg-slate-50 focus:bg-white resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={formStatus === "submitting"}
                    className="w-full py-3.5 rounded-xl bg-[#001744] hover:bg-blue-950 text-[#FFD907] font-black text-sm transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 mt-4"
                  >
                    {formStatus === "submitting" ? (
                      <span>Sending Enquiry...</span>
                    ) : (
                      <>
                        <span>Submit Admission Enquiry</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* RIGHT: INTERACTIVE GOOGLE MAP & CAMPUS DETAILS */}
            <div className="lg:col-span-6 space-y-6">
              {/* Map Container */}
              <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-200 p-2">
                <div className="relative aspect-[4/3] sm:aspect-[16/11] rounded-2xl overflow-hidden bg-slate-100">
                  <iframe
                    src={contactData.googleMapsEmbedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Kautilya Vidyalaya Mysore Campus Map"
                    className="w-full h-full"
                  />
                </div>

                <div className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h4 className="font-black text-[#001744] text-base">
                      Kautilya Vidyalaya Campus
                    </h4>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Affiliation No: 830193 | Kanakadasa Nagar, Dattagalli 3rd Stage
                    </p>
                  </div>

                  <a
                    href={contactData.address.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 rounded-xl bg-blue-50 hover:bg-blue-100 text-[#001744] font-bold text-xs flex items-center gap-2 transition-colors self-start sm:self-auto"
                  >
                    <Navigation className="w-4 h-4 text-yellow-600" />
                    <span>Open in Maps</span>
                  </a>
                </div>
              </div>

              {/* Instant WhatsApp Quick Help Card */}
              <div className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white rounded-3xl p-6 shadow-md flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center shrink-0">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-black text-lg">Chat with Admissions via WhatsApp</h4>
                    <p className="text-xs text-emerald-100 mt-0.5">
                      Instant response for fee quotes, seat confirmations, and document checklists.
                    </p>
                  </div>
                </div>

                <a
                  href={contactData.socialLinks.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-white text-emerald-800 font-extrabold text-xs hover:bg-emerald-50 transition-colors shadow-sm shrink-0"
                >
                  Start WhatsApp Chat
                </a>
              </div>

              {/* Visiting Guidelines Accordion/Callout */}
              <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm space-y-3">
                <div className="flex items-start gap-3">
                  <Building2 className="w-5 h-5 text-blue-900 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-sm text-[#001744]">
                      Campus Tour & Guidance Protocol
                    </h4>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      Parents are invited to tour our state-of-the-art Science Labs, Atal Tinkering Lab, Sports facilities, and Pre-Primary creative playrooms on any working weekday between 9:00 AM and 3:30 PM.
                    </p>
                  </div>
                </div>
              </div>
            </div>
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
