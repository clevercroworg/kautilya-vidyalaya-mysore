"use client";

import React, { useEffect, useRef, useState } from "react";

interface SlidingHeadlineProps {
  text: string;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  className?: string;
  colorClass?: string;
}

export default function SlidingHeadline({
  text,
  as: Tag = "h2",
  className = "",
  colorClass = "text-[#001744]",
}: SlidingHeadlineProps) {
  const ref = useRef<HTMLHeadingElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const words = text.split(" ");

  return (
    <Tag
      ref={ref}
      className={`font-black tracking-tight ${colorClass} ${className}`}
    >
      {words.map((word, idx) => (
        <span
          key={idx}
          className="inline-block overflow-hidden align-top mr-[0.25em] last:mr-0 pb-1"
        >
          <span
            className={`inline-block transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
            }`}
            style={{ transitionDelay: `${idx * 120}ms` }}
          >
            {word}
          </span>
        </span>
      ))}
    </Tag>
  );
}
