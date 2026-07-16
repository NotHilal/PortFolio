import { useRef, useState } from "react";
import { motion } from "framer-motion";

const isFinePointer = () =>
  typeof window !== "undefined" &&
  window.matchMedia?.("(pointer: fine)").matches &&
  !window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

// Wraps a button/link so it pulls gently toward the cursor on hover —
// only on devices with a real mouse, and off for reduced-motion.
export default function Magnetic({ children, strength = 0.35 }) {
  const ref = useRef(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  function handleMouseMove(e) {
    if (!ref.current || !isFinePointer()) return;
    const rect = ref.current.getBoundingClientRect();
    setOffset({
      x: (e.clientX - (rect.left + rect.width / 2)) * strength,
      y: (e.clientY - (rect.top + rect.height / 2)) * strength,
    });
  }

  function handleMouseLeave() {
    setOffset({ x: 0, y: 0 });
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: offset.x, y: offset.y }}
      transition={{ type: "spring", stiffness: 150, damping: 12, mass: 0.4 }}
      className="inline-block"
    >
      {children}
    </motion.div>
  );
}
