"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function SchoolBannerImage() {
  return (
    <section className="w-full relative overflow-hidden bg-slate-950 py-0">
      <motion.div
        initial={{ opacity: 0, scale: 0.98, y: 30 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full aspect-[16/9] max-h-[650px] overflow-hidden"
      >
        <Image
          src="/images/kautilya-school-banner.png"
          alt="Kautilya Vidyalaya Campus Banner"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
      </motion.div>
    </section>
  );
}
