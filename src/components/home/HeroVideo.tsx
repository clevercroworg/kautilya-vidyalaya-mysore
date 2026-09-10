"use client";

import React, { useRef } from "react";

export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <section className="relative w-full bg-[#001744] overflow-hidden">
      {/* Full-width edge-to-edge cinematic video */}
      <div className="w-full relative overflow-hidden">
        <video
          ref={videoRef}
          className="w-full h-auto max-h-[88vh] object-cover mx-auto block"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/images/kautilya-campus-reception.jpg"
        >
          <source src="/videos/kautilya-school-tour-video.mp4" type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>
      </div>
    </section>
  );
}

