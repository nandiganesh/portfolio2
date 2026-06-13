"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

// A custom dot cursor that grows when hovering interactive elements.
// Hidden on touch devices automatically.
export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isPointer, setIsPointer] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springConfig = { damping: 25, stiffness: 400, mass: 0.5 };
  const x = useSpring(cursorX, springConfig);
  const y = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Skip on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    setIsVisible(true);

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 12);
      cursorY.set(e.clientY - 12);

      const target = e.target as HTMLElement;
      setIsPointer(
        !!target.closest("a, button, [role='button'], input, textarea")
      );
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, [cursorX, cursorY]);

  if (!isVisible) return null;

  return (
    <motion.div
      style={{ x, y }}
      animate={{ scale: isPointer ? 2 : 1 }}
      transition={{ duration: 0.2 }}
      className="fixed top-0 left-0 w-6 h-6 rounded-full bg-accent mix-blend-difference pointer-events-none z-[100] hidden md:block"
    />
  );
}
