"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SITE } from "@/lib/data";

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Animate counter from 0 to 100
    const duration = 1800; // ms
    const steps = 60;
    const increment = 100 / steps;
    const interval = duration / steps;

    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= 100) {
        setCount(100);
        clearInterval(timer);
        // Small delay after reaching 100 before exit animation
        setTimeout(() => setLoading(false), 400);
      } else {
        setCount(Math.floor(current));
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-background"
        >
          {/* Background grid pattern */}
          <div className="absolute inset-0 opacity-[0.03]">
            <div
              className="w-full h-full"
              style={{
                backgroundImage:
                  "linear-gradient(#f5f5f5 1px, transparent 1px), linear-gradient(90deg, #f5f5f5 1px, transparent 1px)",
                backgroundSize: "60px 60px",
              }}
            />
          </div>

          {/* Logo / Name */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 flex flex-col items-center"
          >
            <span className="font-display text-3xl md:text-4xl font-semibold tracking-tight mb-8">
              {SITE.name.split(" ")[0]}
              <span className="text-accent">.</span>
            </span>

            {/* Progress bar */}
            <div className="w-48 md:w-64 h-[2px] bg-border rounded-full overflow-hidden mb-4">
              <motion.div
                className="h-full bg-accent rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: `${count}%` }}
                transition={{ duration: 0.1, ease: "linear" }}
              />
            </div>

            {/* Counter */}
            <span className="font-mono text-sm text-muted tabular-nums">
              {count}%
            </span>
          </motion.div>

          {/* Animated corner accents */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.2 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="absolute top-8 left-8 w-12 h-12 border-l-2 border-t-2 border-accent/30"
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.2 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="absolute bottom-8 right-8 w-12 h-12 border-r-2 border-b-2 border-accent/30"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
