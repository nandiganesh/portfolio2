"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { SITE } from "@/lib/data";
import { SplitText } from "./Motion";
import MagneticButton from "./MagneticButton";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 pt-32 pb-20 overflow-hidden">
      {/* Background gradient blob */}
      <div
        aria-hidden
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-accent/10 blur-[150px] pointer-events-none"
      />

      <div className="relative max-w-content mx-auto w-full">
        {/* Availability badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-1.5 text-xs text-muted mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
          </span>
          {SITE.availability}
        </motion.div>

        {/* Big heading */}
        <h1 className="font-display font-medium leading-[1.05] tracking-tight text-[14vw] sm:text-[10vw] md:text-[7.5vw] lg:text-[6vw]">
          <SplitText text="Building digital" />
          <br />
          <span className="text-gradient-accent">
            <SplitText text="products that" delay={0.15} />
          </span>
          <br />
          <SplitText text="matter." delay={0.3} />
        </h1>

        {/* Subtext + CTAs */}
        <div className="mt-10 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="max-w-md text-lg text-muted leading-relaxed"
          >
            {SITE.shortBio}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex items-center gap-4"
          >
            <MagneticButton
              href="/projects"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-background"
            >
              View Work <ArrowUpRight size={16} />
            </MagneticButton>
            <MagneticButton
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold hover:border-accent hover:text-accent transition-colors"
            >
              Contact Me
            </MagneticButton>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted text-xs"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={18} />
        </motion.div>
        Scroll
      </motion.div>
    </section>
  );
}
