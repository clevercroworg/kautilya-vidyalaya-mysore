"use client";

import React, { useEffect, useRef } from "react";

interface DynamicWaveDividerProps {
  /**
   * Background color of the layer immediately underneath the wave
   * (typically '#f8fafc' for slate-50 or '#ffffff' for white)
   */
  fillColor?: string;
  className?: string;
}

export default function DynamicWaveDivider({
  fillColor = "#f8fafc",
  className = "",
}: DynamicWaveDividerProps) {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    const paths = svg.querySelectorAll<SVGPathElement>("path");
    if (paths.length < 3) return;

    const numPoints = 3;
    const speed = 0.35;
    const min = 20;
    const max = 80;
    let inView = false;
    let animFrameId: number | null = null;
    let lastTime = 0;

    const pathsData: number[][] = [];
    const pathsDir: number[][] = [];

    // Helper random int
    const getRnd = (low: number, high: number) =>
      Math.floor(Math.random() * (high - low)) + low;

    // Initialize points
    for (let s = 0; s < paths.length; s++) {
      const pData: number[] = [];
      const pDir: number[] = [];
      const phase = Math.random() * Math.PI * 2;
      for (let i = 0; i < numPoints; i++) {
        pDir[i] = getRnd(0, 2); // 0 or 1
        const t = (i / (numPoints - 1)) * Math.PI * 2;
        pData[i] = ((Math.sin(t + phase) + 1) / 2) * 60 + min;
      }
      pathsData[s] = pData;
      pathsDir[s] = pDir;
    }

    // Build SVG path d string
    const buildPath = (idx: number) => {
      let d = `M 0 ${pathsData[idx][0]} `;
      for (let i = 0; i < numPoints - 1; i++) {
        const h = ((i + 1) / (numPoints - 1)) * 100;
        const a = h - (1 / (numPoints - 1)) * 100 * 0.5;
        d += `C ${a} ${pathsData[idx][i]} ${a} ${pathsData[idx][i + 1]} ${h} ${pathsData[idx][i + 1]} `;
      }
      d += "V 100 H 0 Z";
      return d;
    };

    // Render initial frame
    for (let s = 0; s < paths.length; s++) {
      paths[s].setAttribute("d", buildPath(s));
    }

    // Animation step
    const step = (timestamp: number) => {
      if (!inView) return;

      if (timestamp - lastTime > 35) {
        lastTime = timestamp;

        for (let s = 0; s < paths.length; s++) {
          for (let i = 0; i < numPoints; i++) {
            const h = getRnd(0, 30) / 100;
            const current = pathsData[s][i];
            const maxVal = s === 0 ? max - 10 : max;

            if (pathsDir[s][i] > 0) {
              const delta =
                Math.abs(Math.sin(((current - min) / (max - min)) * Math.PI)) *
                  speed +
                h;
              pathsData[s][i] = current + delta;
              if (pathsData[s][i] >= maxVal) {
                pathsDir[s][i] = 0;
              }
            } else {
              const delta =
                Math.abs(
                  Math.sin(((max - current - min) / (max - min)) * Math.PI)
                ) *
                  speed +
                h;
              pathsData[s][i] = current - delta;
              if (pathsData[s][i] <= min) {
                pathsDir[s][i] = 1;
              }
            }
          }
          paths[s].setAttribute("d", buildPath(s));
        }
      }

      animFrameId = requestAnimationFrame(step);
    };

    // Intersection observer to only animate when visible
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            inView = true;
            if (!animFrameId) {
              animFrameId = requestAnimationFrame(step);
            }
          } else {
            inView = false;
            if (animFrameId) {
              cancelAnimationFrame(animFrameId);
              animFrameId = null;
            }
          }
        });
      },
      { threshold: [0] }
    );

    observer.observe(svg);

    return () => {
      observer.disconnect();
      if (animFrameId) cancelAnimationFrame(animFrameId);
    };
  }, []);

  return (
    <div
      className={`w-full overflow-hidden leading-none pointer-events-none select-none ${className}`}
      style={{ lineHeight: 0 }}
      aria-hidden="true"
    >
      <svg
        ref={svgRef}
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="w-full h-12 sm:h-16 lg:h-20 block"
      >
        {/* Layer 1: Semi-transparent crest */}
        <path
          d="M 0 60 C 25 35 75 75 100 45 V 100 H 0 Z"
          fill="rgba(255, 255, 255, 0.18)"
        />
        {/* Layer 2: Mid opacity wave */}
        <path
          d="M 0 70 C 25 55 75 35 100 60 V 100 H 0 Z"
          fill="rgba(255, 255, 255, 0.38)"
        />
        {/* Layer 3: Solid wave matching section background */}
        <path
          d="M 0 78 C 25 65 75 55 100 70 V 100 H 0 Z"
          fill={fillColor}
        />
      </svg>
    </div>
  );
}
