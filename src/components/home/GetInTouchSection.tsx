"use client";

import React, { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { ScrollRevealText, FadeUp } from "@/components/ui/MotionPrimitives";

export default function GetInTouchSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <section className="py-20 sm:py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-stretch">
          {/* Left Column: Get in Touch Form */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <ScrollRevealText
                text="Get in Touch"
                as="h3"
                className="text-3xl sm:text-5xl font-black mb-3"
                colorClass="text-[#001744]"
              />

              <FadeUp delay={0.2}>
                <p className="text-slate-600 text-base sm:text-lg mb-8">
                  Reach out to our administrative office for academic, admission, or general queries.
                </p>
              </FadeUp>

              {submitted ? (
                <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 text-center space-y-3">
                  <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                  <h4 className="text-lg font-bold text-emerald-900">Message Received</h4>
                  <p className="text-xs text-emerald-700">
                    Thank you! Our office staff will respond to your inquiry shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: "", phone: "", email: "", message: "" });
                    }}
                    className="text-xs font-bold text-emerald-800 underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <FadeUp delay={0.3}>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                          Full Name <span className="text-rose-500">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          placeholder="John Doe"
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#001744] text-sm bg-slate-50/50"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                          Contact Number <span className="text-rose-500">*</span>
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                          placeholder="+91 99000 XXXXX"
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#001744] text-sm bg-slate-50/50"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Email Address <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="Your email address"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#001744] text-sm bg-slate-50/50"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Write Your Message Below <span className="text-rose-500">*</span>
                      </label>
                      <textarea
                        rows={4}
                        required
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        placeholder="Your Message"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#001744] text-sm bg-slate-50/50 resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#25D366] hover:bg-emerald-600 text-white font-black py-4 rounded-xl text-base shadow-md hover:shadow-xl transition-all flex items-center justify-center gap-2 transform hover:-translate-y-0.5"
                    >
                      <Send className="w-4 h-4" />
                      <span>{isSubmitting ? "Sending..." : "Submit form"}</span>
                    </button>
                  </form>
                </FadeUp>
              )}
            </div>
          </div>

          {/* Right Column: Google Maps Embed Card */}
          <FadeUp delay={0.25} className="lg:col-span-6">
            <div className="h-full min-h-[380px] rounded-3xl overflow-hidden shadow-xl border border-slate-200 bg-slate-100">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d31188.914385360025!2d76.610872!3d12.27436!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baf65313404ff39%3A0x3ef1d5e7edd122d5!2sKautilya%20Vidyalaya%20Group%20of%20Institutions!5e0!3m2!1sen!2sus!4v1758034316941!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "380px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Kautilya Vidyalaya Google Map"
              />
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
