"use client";

import React, { useState } from "react";
import {
  GraduationCap,
  Send,
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
  Clock,
  Sparkles,
} from "lucide-react";
import { contactInfo } from "@/data/siteData";

export default function AdmissionEnquiryForm() {
  const [formData, setFormData] = useState({
    parentName: "",
    location: "",
    childName: "",
    email: "",
    grade: "Nursery",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1000);
  };

  return (
    <section
      id="admission-enquiry"
      className="py-20 sm:py-28 bg-slate-50 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Admission details & contact points */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 bg-[#001744]/5 text-[#001744] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Admissions Open 2027-28</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black text-[#001744] tracking-tight leading-tight">
              Begin Your Child&apos;s Journey With Us
            </h2>

            <p className="mt-4 text-slate-600 text-base leading-relaxed">
              We welcome applications for the academic year 2027-28 from Nursery through Grade 10. Fill out the enquiry form, and our admissions counsellor will reach out to schedule an interactive campus visit.
            </p>

            {/* Quick Contact Cards */}
            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-slate-100 shadow-sm">
                <div className="p-3 rounded-xl bg-blue-50 text-[#001744]">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Direct Helpline</h4>
                  <div className="flex flex-wrap gap-x-3 text-sm text-slate-600 mt-0.5 font-medium">
                    <a href="tel:+919900038358" className="hover:text-blue-700">
                      +91 9900038358
                    </a>
                    <span>•</span>
                    <a href="tel:+917090671299" className="hover:text-blue-700">
                      +91 7090671299
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-slate-100 shadow-sm">
                <div className="p-3 rounded-xl bg-blue-50 text-[#001744]">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Admissions Desk</h4>
                  <p className="text-sm text-slate-600 mt-0.5">
                    <a
                      href="mailto:admissions@kautilyavidyalaya.edu.in"
                      className="hover:text-blue-700"
                    >
                      admissions@kautilyavidyalaya.edu.in
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-slate-100 shadow-sm">
                <div className="p-3 rounded-xl bg-blue-50 text-[#001744]">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Office Hours</h4>
                  <p className="text-sm text-slate-600 mt-0.5">
                    Monday – Saturday: 9:00 AM – 4:30 PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-xl border border-slate-100 relative">
              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-sm">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#001744]">
                    Enquiry Submitted Successfully!
                  </h3>
                  <p className="text-slate-600 text-sm max-w-md mx-auto">
                    Thank you for your interest in Kautilya Vidyalaya. Our admissions officer will contact you shortly via phone or email.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        parentName: "",
                        location: "",
                        childName: "",
                        email: "",
                        grade: "Nursery",
                        phone: "",
                        message: "",
                      });
                    }}
                    className="mt-4 inline-flex items-center gap-2 bg-[#001744] text-white px-6 py-2.5 rounded-full text-xs font-bold hover:bg-[#002b7a] transition-all"
                  >
                    Submit Another Enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="border-b border-slate-100 pb-4 mb-6">
                    <h3 className="text-2xl font-bold text-[#001744]">
                      Enquiry Form for Admission
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 mt-1">
                      Fill out this quick form for instant prospect guidance.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Parent Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.parentName}
                        onChange={(e) =>
                          setFormData({ ...formData, parentName: e.target.value })
                        }
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#001744] text-sm bg-slate-50/50"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Location / Area <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.location}
                        onChange={(e) =>
                          setFormData({ ...formData, location: e.target.value })
                        }
                        placeholder="e.g. Dattagalli, Mysuru"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#001744] text-sm bg-slate-50/50"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Name of Child <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.childName}
                        onChange={(e) =>
                          setFormData({ ...formData, childName: e.target.value })
                        }
                        placeholder="Child's Full Name"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#001744] text-sm bg-slate-50/50"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Class Seeking <span className="text-rose-500">*</span>
                      </label>
                      <select
                        value={formData.grade}
                        onChange={(e) =>
                          setFormData({ ...formData, grade: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#001744] text-sm bg-slate-50/50"
                      >
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
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Email Address <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="parent@example.com"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#001744] text-sm bg-slate-50/50"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Phone Number <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        placeholder="e.g. 9900038358"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#001744] text-sm bg-slate-50/50"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Remarks / Specific Questions
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Ask any question about transport, syllabus, or fee structure..."
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#001744] text-sm bg-slate-50/50 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#001744] hover:bg-[#002b7a] text-[#FFD907] font-black py-4 rounded-xl text-base shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <span>Submitting Enquiry...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Admission Enquiry</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
