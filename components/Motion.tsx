"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
  y?: number;
};

// Wraps children with a fade-up-on-scroll animation.
// Usage: <Reveal><h2>Title</h2></Reveal>
export function Reveal({ children, delay = 0, className, y = 40 }: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Stagger container — wrap a list of children to stagger their reveal
export function StaggerContainer({
  children,
  className,
  staggerDelay = 0.1,
}: {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      variants={{
        hidden: {},
        show: {
          transition: { staggerChildren: staggerDelay },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Use as a child of StaggerContainer
export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Splits text into words/chars and animates each on scroll — great for hero headings
export function SplitText({
  text,
  className,
  delay = 0,
  by = "word",
}: {
  text: string;
  className?: string;
  delay?: number;
  by?: "word" | "char";
}) {
  const parts = by === "word" ? text.split(" ") : text.split("");

  return (
    <span className={className} aria-label={text}>
      {parts.map((part, i) => (
        <span key={i} className="inline-block overflow-hidden align-bottom">
          <motion.span
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: delay + i * (by === "word" ? 0.06 : 0.02),
              ease: [0.22, 1, 0.36, 1],
            }}
            className="inline-block"
            aria-hidden="true"
          >
            {part}
            {by === "word" ? "\u00A0" : ""}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
