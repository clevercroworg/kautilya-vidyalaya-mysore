"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

const customEase = [0.16, 1, 0.3, 1] as const;

// 1. Scroll-Triggered Word-by-Word Masked Slide-Up Headline (Like Pixfort Essentials)
interface ScrollRevealTextProps {
  text: string;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  className?: string;
  colorClass?: string;
  delay?: number;
}

export function ScrollRevealText({
  text,
  as = "h2",
  className = "",
  colorClass = "text-[#001744]",
  delay = 0,
}: ScrollRevealTextProps) {
  const words = text.split(" ");
  const Tag = motion[as];

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
        delayChildren: delay,
      },
    },
  };

  const wordVariants: Variants = {
    hidden: {
      y: "115%",
      opacity: 0,
    },
    visible: {
      y: "0%",
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: customEase,
      },
    },
  };

  return (
    <Tag
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className={`font-black tracking-tight ${colorClass} ${className}`}
    >
      {words.map((word, idx) => (
        <span
          key={idx}
          className="inline-block overflow-hidden align-top mr-[0.25em] last:mr-0 pb-1"
        >
          <motion.span variants={wordVariants} className="inline-block">
            {word}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}

// 2. Staggered Grid Container
export function StaggerContainer({
  children,
  className = "",
  staggerDelay = 0.15,
}: {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
}) {
  const variants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerDelay,
      },
    },
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// 3. Stagger Child Item (Sliding in from down one by one)
export function StaggerItem({
  children,
  className = "",
  direction = "up",
}: {
  children: React.ReactNode;
  className?: string;
  direction?: "up" | "left" | "right";
}) {
  const initialOffset =
    direction === "up"
      ? { y: 50, x: 0 }
      : direction === "left"
      ? { x: -50, y: 0 }
      : { x: 50, y: 0 };

  const itemVariants: Variants = {
    hidden: {
      ...initialOffset,
      opacity: 0,
    },
    visible: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.75,
        ease: customEase,
      },
    },
  };

  return (
    <motion.div variants={itemVariants} className={className}>
      {children}
    </motion.div>
  );
}

// 4. Smooth Fade-Up on Scroll
export function FadeUp({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ y: 35, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.75, delay, ease: customEase }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
