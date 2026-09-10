"use client";

import React, { useState } from "react";
import { MessageCircle, X } from "lucide-react";

export default function WhatsAppWidget() {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Tooltip speech bubble */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-white text-slate-800 px-4 py-2.5 rounded-xl shadow-xl border border-slate-100 text-xs font-bold animate-in fade-in slide-in-from-right-2">
          <span>Need help? Chat with us!</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-slate-400 hover:text-slate-600 ml-1 p-0.5"
            aria-label="Dismiss message"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Action Button with authentic WhatsApp logo */}
      <a
        href="https://wa.me/+919900038358?text=Hello,%20I%20have%20an%20enquiry%20regarding%20admissions%20at%20Kautilya%20Vidyalaya"
        target="_blank"
        rel="noopener noreferrer"
        className="relative w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white flex items-center justify-center shadow-[0_4px_20px_rgba(37,211,102,0.45)] hover:shadow-[0_6px_25px_rgba(37,211,102,0.6)] hover:scale-110 active:scale-95 transition-all duration-300 group"
        aria-label="Chat with Kautilya Vidyalaya on WhatsApp"
      >
        {/* Subtle breathing ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 animate-ping pointer-events-none" />

        {/* Authentic Official WhatsApp Icon */}
        <svg
          viewBox="0 0 24 24"
          width="32"
          height="32"
          className="w-8 h-8 fill-white relative z-10 drop-shadow-sm"
          aria-hidden="true"
        >
          <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.978-.276-.1-.477-.15-.678.15-.2.3-.777.978-.953 1.178-.175.2-.351.226-.652.076-.301-.15-1.27-.468-2.42-1.493-.895-.798-1.5-1.784-1.676-2.085-.175-.3-.019-.462.132-.612.135-.135.301-.351.451-.527.151-.175.201-.301.301-.502.1-.2.05-.376-.025-.526-.075-.15-.678-1.635-.93-2.242-.244-.59-.493-.51-.678-.52-.176-.01-.376-.01-.577-.01-.2 0-.527.075-.803.376-.276.3-1.054 1.03-1.054 2.511 0 1.482 1.079 2.912 1.23 3.113.15.2 2.123 3.242 5.143 4.545.718.31 1.279.496 1.716.635.722.23 1.38.197 1.9-.12.58-.352 1.78-1.42 2.03-2.02.25-.6.25-1.11.175-1.22-.075-.11-.276-.17-.577-.32zM12 2C6.48 2 2 6.48 2 12c0 1.94.55 3.75 1.5 5.29L2 22l4.83-1.47C8.31 21.46 10.1 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18.17c-1.68 0-3.24-.49-4.57-1.34l-.33-.21-3.39 1.03 1.05-3.3-.23-.35C3.64 14.65 3.17 13.36 3.17 12c0-4.87 3.96-8.83 8.83-8.83 4.87 0 8.83 3.96 8.83 8.83 0 4.87-3.96 8.17-8.83 8.17z" />
        </svg>
        <span className="sr-only">Chat on WhatsApp</span>
      </a>
    </div>
  );
}
